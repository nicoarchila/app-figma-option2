import { Grid, View, useBreakpointValue } from "@aws-amplify/ui-react";
import { FormularioConfirmacion, IlustracionConfirmacion, NavBarHeaderL, SideBar } from "../../../../../../ui-components";
import Guards from "../../../../../../shared/guard/guards";
import { useNavigate } from "react-router";
import store from "../../../../../../store/store";
import CurrencyFormatter from "../../../../../../shared/pipes/moneda";
import { AlertVariationsExample } from "../../../../../../shared/components/alert";
import { useEffect, useState } from "react";
import Dates from "../../../../../../shared/pipes/dates";
import { Routes } from "../../../../../../shared/constants/routes";
import MobileTemplate from "../../../../../base/mobile-template";
import DesktopTemplate from "../../../../../base/desktop-template";
import { AlertsMsg } from "../../../../../../shared/constants/alerts";

let isAlertOn = AlertsMsg.ALERT_OFF;
function Confirmation() {
  const history = useNavigate();
  const prevURI = Routes.HOME;
  const nextURI = Routes.HOME;
  Guards();
  const payment = store.getState().payment;
  const details = store.getState().details;
  const paymentConfig = store.getState().paymentConfig;

  const [confirmAlert, setConfirmAlert] = useState(false);
  
  //TODO: Cambiar si no se utiliza Mock
  
  //const paymentDate = Dates.DateTimeFormatter(Date.parse(payment.transfer_date));
  const paymentDate = Dates.DateTimeFormatter(Date.now());
  
  //
  const alertString = isAlertOn.state ? isAlertOn : AlertsMsg.ALERT_OFF
  const [alertMessage, setAlertMessage] = useState(alertString);

  const contentVariat = useBreakpointValue([
    { hasImage: false, padding: "1rem" },
    { hasImage: false, padding: "1rem" },
    { hasImage: false, padding: "1rem" },
    { hasImage: true, padding: "2rem" },
  ]) as any;

  let container = (
    <View
      columnStart="1"
      columnEnd="2"
      rowStart="2"
      rowEnd="-1"
    >
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
          <FormularioConfirmacion
            alertState={confirmAlert}
            nextURI={nextURI}
            prevURI={prevURI}
            onClickBack={()=>{
              history(Routes.HOME);
            }}
            number={(+payment.transfer_id).toString()}
            date={paymentDate}
            amount={CurrencyFormatter(paymentConfig.amount)}
            ActionFin={()=>{
              history(Routes.HOME);
            }}
            Action={()=>{
              setAlertMessage(AlertsMsg.ALERT_BLOCK_FUNC);
              setTimeout(() => {
                isAlertOn = AlertsMsg.ALERT_OFF;
                setAlertMessage(AlertsMsg.ALERT_OFF);
              }, 5000);
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
              margin={"auto"}
            >
              <IlustracionConfirmacion/>
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

export default Confirmation;
