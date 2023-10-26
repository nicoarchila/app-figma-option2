import { Grid, View, useBreakpointValue } from "@aws-amplify/ui-react";
import { FormularioConfiguracion, IlustracionConfiguracion } from "../../../../../../ui-components";
import Guards from "../../../../../../shared/guard/guards";
import { useNavigate } from "react-router";
import store from "../../../../../../store/store";
import CurrencyFormatter from "../../../../../../shared/pipes/moneda";
import { useEffect, useState } from "react";
import { ProductsName, productsAccount } from "../../../../../../shared/constants/products-names";
import { Routes } from "../../../../../../shared/constants/routes";
import MobileTemplate from "../../../../../base/mobile-template";
import DesktopTemplate from "../../../../../base/desktop-template";
import Dates from "../../../../../../shared/pipes/dates";
import { AlertsMsg } from "../../../../../../shared/constants/alerts";
import moment from "moment";
import NumbersFormat from "../../../../../../shared/pipes/numbers";

let isAlertOn = AlertsMsg.ALERT_OFF;
function Configuration() {
  const history = useNavigate();
  Guards();
  const prevURI = Routes.DETAILS;
  const nextURI = Routes.VERIFICATION;

  const sourceProdList: string[] = [""];
  const targetProdList: string[] = [""];

  const [sourceProdChange, setSProdChngValue] = useState("");
  const [otherAmount, setOtherAmountValue] = useState("");
  const [isDefaultAmount, setIsDefAmoTypeValue] = useState(true);

  const [paymentAmount, setpaymentAmount] = useState("");
  const [paymentDate, setpaymentDate] = useState("");
  const [paymentValue, setpaymentValue] = useState("");

  const alertString = isAlertOn.state ? isAlertOn : AlertsMsg.ALERT_OFF
  const [alertMessage, setAlertMessage] = useState(alertString);
  
  const prodList: any[] = store.getState().products?.accounts_products;
  const prodSelected = store.getState().productSelected;
  const prodDetail = store.getState().details;

  prodList.map((prod: any) => {
    
    if (productsAccount.includes(prod.account_type)) {
      sourceProdList.push(ProductsName.catalog[prod.account_type] + " " + prod.account_id);
    } else {
      targetProdList.push(ProductsName.catalog[prod.account_type] + " " + prod.account_id);
    }
  });

  var onOtherAmountClick = (e: any) => {
    setIsDefAmoTypeValue(false);
  };

  var onDefaultAmountClick = (e: any) => {
    setIsDefAmoTypeValue(true);
  };

  var onOtherAmountChange = (e: any) => {
    const cleanVal = NumbersFormat.CleanCurrencyFormat(e.target.value);
    setOtherAmountValue(cleanVal);

    e.target.value = CurrencyFormatter(cleanVal);
  };

  useEffect(()=>{
    setpaymentAmount(CurrencyFormatter(prodDetail.due_amount.amount));
    setpaymentValue(CurrencyFormatter(prodDetail.next_payment.amount_payment.amount, prodDetail.next_payment.amount_payment.decimals));
    setpaymentDate(Dates.DateFormatter(prodDetail.next_payment.amount_payment.date));
  }, [])

  let loanType = prodDetail.loan.loan_type;
  if(!prodDetail.loan.loan_type || prodDetail.loan.loan_type == "") {
    loanType = prodSelected.account_type;
  }

  const targetProduct = ProductsName.catalog[loanType] + " " + prodDetail.loan.loan_id;

  const contentVariat = useBreakpointValue([
    { hasImage: false, padding: "1rem" },
    { hasImage: false, padding: "1rem" },
    { hasImage: false, padding: "1rem" },
    { hasImage: true, padding: "2rem" },
  ]) as any;

  let container = (
    <View columnStart="1" columnEnd="2" rowStart="2" rowEnd="-1">
      <Grid
        columnGap="0rem"
        rowGap="0rem"
        templateColumns="1fr 1fr"
        templateRows="100fr 5fr"
        padding={contentVariat.padding}
      >
        <View
          columnStart="1"
          columnEnd="1"
          rowStart="1"
          rowEnd="-1"
          margin={"2rem auto"}
        >
          <FormularioConfiguracion
            onOtherAmountClick={onOtherAmountClick}
            onDefaultAmountClick={onDefaultAmountClick}
            amountState={false}
            targetProduct={targetProduct}
            sourceProdList={sourceProdList}
            nextURI={nextURI}
            prevURI={prevURI}
            paymentAmount={paymentAmount}
            paymentDate={paymentDate}
            paymentValue={paymentValue}
            onClickBtn={async ()=>{
              if(sourceProdChange==="") {
                setAlertMessage(AlertsMsg.ALERT_ACCOUNT);
                setTimeout(() => {
                  isAlertOn = AlertsMsg.ALERT_OFF;
                  setAlertMessage(AlertsMsg.ALERT_OFF);
                }, 5000)
                return;
              };

              const sourceProdId = sourceProdChange.split(" ")[sourceProdChange.split(" ").length - 1];

              const targetProdObj = prodList.find((prod: any) => prod.account_id === prodDetail.loan.loan_id);
              const sourceProdObj = prodList.find((prod: any) => prod.account_id === sourceProdId);

              let amount = prodDetail.next_payment.amount_payment.amount;
              if(!isDefaultAmount) {
                amount = otherAmount;
              }

              if(+amount <= 0){
                isAlertOn = AlertsMsg.ALERT_MOUNT;
                setAlertMessage(AlertsMsg.ALERT_MOUNT);
                setTimeout(() => {
                  isAlertOn = AlertsMsg.ALERT_OFF;
                  setAlertMessage(AlertsMsg.ALERT_OFF);
                }, 5000)
                return;
              }

              await store.dispatch({
                type: "paymentConfig",
                payload: {
                  "targetProd": targetProduct,
                  "sourceProd": sourceProdChange,
                  "targetProdObj": targetProdObj,
                  "sourceProdObj": sourceProdObj,
                  "amount": amount,
                },
              });

              history(Routes.VERIFICATION);
            }}
            cancel={()=>{
              history(Routes.HOME);
            }}
            onSourceProdChange={
              (e: any) => {
                setSProdChngValue(e.target.value);
              }
            }
            onOtherAmountChange={onOtherAmountChange}
            onClickBack={() => {
              history(Routes.HOME);
            }}
          />
        </View>
        {
          contentVariat.hasImage ? 
            <View
              columnStart="2"
              columnEnd="-1"
              rowStart="1"
              rowEnd="1"
              margin={"2rem auto"}
            >
              <IlustracionConfiguracion/>
            </View>
            :<></>
        }
      </Grid>
    </View>
  );

  const variation = useBreakpointValue([
    <MobileTemplate props={{content: container}}/>,
    <MobileTemplate props={{content: container}}/>,
    <MobileTemplate props={{content: container}}/>,
    <DesktopTemplate props={{content: container, alertMessage : alertMessage}}/>,
  ]);
  
  return (
    <>
      {variation}
    </>
  );

}

export default Configuration;
