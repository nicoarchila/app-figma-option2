import { Grid, View, useBreakpointValue } from "@aws-amplify/ui-react";
import { IlustracionProductInformation, ProductInformation } from "../../../../../ui-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import store from "../../../../../store/store";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../../../store/selector";
import CurrencyFormatter from "../../../../../shared/pipes/moneda";
import { AlertVariationsExample } from "../../../../../shared/components/alert";
import MobileTemplate from "../../../../base/mobile-template";
import DesktopTemplate from "../../../../base/desktop-template";
import { ProductsName as p } from "../../../../../shared/constants/products-names";
import Dates from "../../../../../shared/pipes/dates";
import NumbersFormat from "../../../../../shared/pipes/numbers";
import { StoreConst } from "../../../../../shared/constants/store";
import { Routes } from "../../../../../shared/constants/routes";
import LoansAPI from "../../../../../shared/services/apis/loans";
import { AlertsMsg } from "../../../../../shared/constants/alerts";

let isAlertOn = AlertsMsg.ALERT_OFF;
function LbrDetails() {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState({
    loan_id: "",
    fee_month: "",
    due_amount: "",
    limt_amount: "",
    last_payment: "",
    rate: "",
  });
  const [alert, setAlert] = useState(false);
  const users = useSelector(selectProduct);
  const [isLoader, setLoader] = useState(false);

  const alertString = isAlertOn.state ? isAlertOn : AlertsMsg.ALERT_OFF
  const [alertMessage, setAlertMessage] = useState(alertString);

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  }, [alertMessage]);

  const prodSelected = store.getState().productSelected;

  useEffect(() => {

    setLoader(true);
    LoansAPI.loans()
      .then((response: any) => {
        setLoader(false);

        response.loan.loan_id = NumbersFormat.CleanProductNum(response.loan.loan_id);
        const data = {
          loan_id: NumbersFormat.ProdNumberFormatter(response.loan.loan_id, 4),
          fee_month: CurrencyFormatter(response.next_payment.amount_payment.amount),
          due_amount: CurrencyFormatter(response.capital_amount.amount, +response.capital_amount.decimals),
          limt_amount: Dates.DateFormatter(response.next_payment.amount_payment.date),
          last_payment: Dates.DateFormatter(response.last_payment.amount_payment.date),
          rate: NumbersFormat.RateFormatter(response.rate.value, +response.rate.decimals)
        };

        setInputValue(data);
      }).catch((e) => {
        setLoader(false);

        setAlertMessage(AlertsMsg.ALERT_DETAILS);
        setTimeout(() => {
          isAlertOn = AlertsMsg.ALERT_OFF;
          setAlertMessage(AlertsMsg.ALERT_OFF);
        }, 5000);
      });
  }, []);

  const contentVariat = useBreakpointValue([
    { hasImage: false, padding: "1rem" },
    { hasImage: false, padding: "1rem" },
    { hasImage: false, padding: "1rem" },
    { hasImage: true, padding: "2rem" },
  ]) as any;

  let container = (
    <View columnStart="1" columnEnd="1" padding={contentVariat.padding}>
      <Grid
        columnGap="0rem"
        rowGap="0rem"
        templateColumns="1fr 1fr"
        templateRows="1fr"
      >
        <View rowStart="1" rowEnd="-1" margin={"2rem auto"}>
          <ProductInformation
            ActionBack={()=>{
              history(Routes.HOME);
            }}
            prodName={p.catalog[prodSelected.account_type]}
            numberProduct={inputValue.loan_id}
            monthFee={inputValue.fee_month}
            debtDate={inputValue.due_amount}
            limitDate={inputValue.limt_amount}
            lastDate={inputValue.last_payment}
            rate={inputValue.rate}
            ActionPay={() => {
              history(Routes.CONFIGURATION);
            }}
            Action={()=>{
              setAlert(true);
              setTimeout(()=>{
                setAlert(false);
              }, 5000);
            }}
          />
          { alert? <AlertVariationsExample/>:<></> } 
        </View>
        {
          contentVariat.hasImage ? 
            <View margin={"auto"} rowStart="1" rowEnd="-1">
              <IlustracionProductInformation />
            </View>
            :<></>
        }
      </Grid>
    </View>
  )

  let props = {content: container, loader: isLoader, alertMessage : alertMessage};
  const variation = useBreakpointValue([
    <MobileTemplate props={props}/>,
    <MobileTemplate props={props}/>,
    <MobileTemplate props={props}/>,
    <DesktopTemplate props={props}/>,
  ]);
  
  return (
    <>
      {variation}
    </>
  );
}

export default LbrDetails;
