import { Alert, Grid, View, useBreakpointValue } from "@aws-amplify/ui-react";
import {
  FormularioVerificacion,
  IlustracionVerificacion,
  NavBarHeaderL,
  SideBar,
} from "../../../../../../ui-components";
import { constantesInterceptors } from "../../../../../../shared/constants/constants";
import { paymentConfirmMock } from "../../../../../../shared/constants/paymentConfMock";
import { useEffect, useState } from "react";
import httpService from "../../../../../../shared/services/httpService";
import Guards from "../../../../../../shared/guard/guards";
import { useNavigate } from "react-router";
import store from "../../../../../../store/store";
import { CalculationPayload } from "../../../../../../shared/models/calculations-payload"
import { PaymentPayload } from "../../../../../../shared/models/payment-payload"
import CurrencyFormatter from "../../../../../../shared/pipes/moneda";
import Dates from "../../../../../../shared/pipes/dates";
import { Routes } from "../../../../../../shared/constants/routes";
import MobileTemplate from "../../../../../base/mobile-template";
import DesktopTemplate from "../../../../../base/desktop-template";
import { StoreConst } from "../../../../../../shared/constants/store";
import { AlertsMsg } from "../../../../../../shared/constants/alerts";
import TransfersAPI from "../../../../../../shared/services/apis/transfers";
import LoansAPI from "../../../../../../shared/services/apis/loans";

let isOnFligth = false;
let isAlertOn = AlertsMsg.ALERT_OFF;
const calculationService = false;
function Verification() {
  const history = useNavigate();
  const prevURI = Routes.CONFIGURATION;
  const nextURI = Routes.CONFIRMATION;

  const payConfig = store.getState().paymentConfig;

  const [calcCost, setCalcCost] = useState("");

  const leaderStateStr = isOnFligth ? "loader-en" : "loader-dis"
  const [loaderState, setLoaderState] = useState(leaderStateStr);

  const alertString = isAlertOn.state ? isAlertOn : AlertsMsg.ALERT_OFF
  const [alertMessage, setAlertMessage] = useState(alertString);

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  }, [alertMessage]);

  Guards();

  useEffect(() => {
    TransfersAPI.calculations()
      .then((response: any) => {
        if(!isOnFligth)
          setLoaderState("loader-dis");
        setCalcCost(response.transaction_cost.amount);
      })
      .catch((e) => {
        setAlertMessage(AlertsMsg.ALERT_DETAILS);
        setTimeout(() => {
          isAlertOn = AlertsMsg.ALERT_OFF;
          setAlertMessage(AlertsMsg.ALERT_OFF);
        }, 5000);
      });
  }, [calculationService]);

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
          <FormularioVerificacion
            loaderState={loaderState}
            onClickBack={() => {
              history(Routes.HOME);
            }}
            tarjetProd={payConfig.targetProd}
            sourceProd={payConfig.sourceProd}
            payAmount={CurrencyFormatter(payConfig.amount)}
            trxCost={CurrencyFormatter(calcCost)}
            nextURI={nextURI}
            prevURI={prevURI}
            onClickNext={async () => {
              setLoaderState("loader-ena");
              isOnFligth = true;

              await LoansAPI.payment()
                .then(async (response: any) => {
                  isOnFligth = false;
                  setLoaderState("loader-dis");

                  history(Routes.CONFIRMATION);

                }).catch(async (e) => {
                  isOnFligth = false;
                  setLoaderState("loader-dis");

                  setAlertMessage(AlertsMsg.ALERT_PAYMENT);
                  setTimeout(() => {
                    isAlertOn = AlertsMsg.ALERT_OFF;
                    setAlertMessage(AlertsMsg.ALERT_OFF);
                  }, 5000);
              });
            }}
            onClickCancel={() => {
              history(Routes.HOME);
            }}
            onChangePay={(e: any) => {}}
            onChangeDeb={(e: any) => {}}
            onChangeInput={(e: any) => {}}
          />
        </View>

        {
          contentVariat.hasImage ? 
            <View
              columnStart="2"
              columnEnd="-1"
              rowStart="1"
              rowEnd="1"
              margin={"auto"}
            >
              <IlustracionVerificacion />
            </View>
            :<></>
        }
        
      </Grid>
    </View>
  );

  let props = {content: container, loader: false, alertMessage : alertMessage};  
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

export default Verification;
