import { Grid, Loader, View, useBreakpointValue } from "@aws-amplify/ui-react";
import { ActionCard } from "../../../ui-components";
import httpService from "../../../shared/services/httpService";
import { constantesInterceptors } from "../../../shared/constants/constants";
import Guards from "../../../shared/guard/guards";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import store from "../../../store/store";
import { ProductsDomain, productsLoan, ProductsName as p, productsActive, productsPassive, productsLoanEnabled } from "../../../shared/constants/products-names";
import CurrencyFormatter from "../../../shared/pipes/moneda";
import MobileTemplate from "../../base/mobile-template";
import DesktopTemplate from "../../base/desktop-template";
import { AlertVariationsExample } from "../../../shared/components/alert";
import Dates from "../../../shared/pipes/dates";
import NumbersFormat from "../../../shared/pipes/numbers";
import { Routes } from "../../../shared/constants/routes";
import { StoreConst } from "../../../shared/constants/store";
import ClientsAPI from "../../../shared/services/apis/products";
import LoansAPI from "../../../shared/services/apis/loans";
import { AlertsMsg } from "../../../shared/constants/alerts";

let isAlertOn = AlertsMsg.ALERT_OFF;
function ProductsHome() {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [alert, setAlert] = useState(false);
  const [isLoader, setLoader] = useState(false);

  const alertString = isAlertOn.state ? isAlertOn : AlertsMsg.ALERT_OFF
  const [alertMessage, setAlertMessage] = useState(alertString);
  const [resetScroll, triggerResetScroll] = useState(0);

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  }, [alertMessage, resetScroll]);

  Guards()
  useEffect(() => {
    setLoader(true);

    ClientsAPI.products().then(async (response: any) => {
        setLoader(false);

        const data = response.products.accounts_products.map(
          (element: any) => {
            let dateLimit = Dates.DateFormatter(element.effective_date);
            const currentDue = CurrencyFormatter(element.amount.amount, +element.amount.decimals);
            
            const prodType = productsActive.includes(element.account_type) ? 
                                'active' : 
                                productsPassive.includes(element.account_type) ? 'passive' : '';

            if( prodType == '' ) return (<></>);

            return (
            <>           
              <ActionCard
                prod_type={prodType}
                tittle={ProductsDomain.catalog[element.account_type]}
                btnClassName="btn-sec-cust"
                numberProduct={NumbersFormat.ProdNumberFormatter(element.account_id, 5)}
                CurrentActual={currentDue}
                dateLimit={dateLimit}
                productName={p.catalog[element.account_type]}
                islot={productsLoan.includes(element.account_type)}
                actionTranfer={async () => {
                  triggerResetScroll(Math.random());
                  if( !productsLoanEnabled.includes(element.account_type) ) {
                    setAlert(true);
                    setTimeout(()=>{
                      setAlert(false);
                    }, 5000);
                    return;
                  }
                
                  await store.dispatch({
                    type: StoreConst.PRODUCTSELECTED,
                    payload: element,
                  });

                  setLoader(true);
                  LoansAPI.loans()
                    .then(() => {
                      setLoader(false);
                      history(Routes.CONFIGURATION);
                    }).catch((e) => {
                      setLoader(false);

                      setAlertMessage(AlertsMsg.ALERT_DETAILS);
                      setTimeout(() => {
                        isAlertOn = AlertsMsg.ALERT_OFF;
                        setAlertMessage(AlertsMsg.ALERT_OFF);
                      }, 5000);
                    });
  
                }}
                actionDetails={async() => {
                  triggerResetScroll(Math.random());

                  if( !productsLoanEnabled.includes(element.account_type) ) {
                    setAlert(true);
                    setTimeout(()=>{
                      setAlert(false);
                    }, 5000);
                    return;
                  }
                
                  await store.dispatch({
                    type: StoreConst.PRODUCTSELECTED,
                    payload: element,
                  });

                  history(Routes.DETAILS);
                }}
                margin={"auto"}
              />
            </>)
          }
        );
        setInputValue(data);
        return;
      })
      .catch(()=>{
        setLoader(false);

        setAlertMessage(AlertsMsg.ALERT_PRODUCTS);
        setTimeout(() => {
          isAlertOn = AlertsMsg.ALERT_OFF;
          setAlertMessage(AlertsMsg.ALERT_OFF);
        }, 5000)
      });
  }, []);

  const variat = useBreakpointValue([
    "1rem 0px",
    "1rem 0px",
    "2rem",
    "2rem",
  ]) as string;

  let productsContent = (
    <View columnStart="1" columnEnd="2" rowStart="2" rowEnd="-1">
      { alert? <AlertVariationsExample/>:<></> } 
      <Grid
        columnGap="0rem"
        rowGap="3rem"
        templateColumns={{
          base: "1fr",
          medium: "1fr",
          xl: "1fr 1fr",
          xxl: "1fr 1fr 1fr",
        }}
        templateRows="1fr"
        padding={variat}
      >
        { isLoader? <View columnStart="1" columnEnd="-1" rowStart="1" rowEnd="1" height={"fit-content"} ><Loader size="large" variation="linear"/></View>:<></> }
        {inputValue}
      </Grid>
    </View>
  );

  let props = {content: productsContent, loader: false, alertMessage : alertMessage};
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

export default ProductsHome;
