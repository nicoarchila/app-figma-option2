import { View, useBreakpointValue } from "@aws-amplify/ui-react";
import {
  FormularioLogin,
  FormularioLoginMobile,
  IlustracionLogin,
  Login,
  LoginMobile,
} from "../../../ui-components";
import DesktopTemplate from "../../base/desktop-template";
import MobileTemplate from "../../base/mobile-template";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";
import store from "../../../store/store";
import httpService from "../../../shared/services/httpService";
import { constantesInterceptors } from "../../../shared/constants/constants";
import { StoreConst } from "../../../shared/constants/store";
import { Routes } from "../../../shared/constants/routes";
import HashGen from "../../../shared/utils/hash-gen";
import { AlertsMsg } from "../../../shared/constants/alerts";

let isAlertOn = AlertsMsg.ALERT_OFF;
function LoginApp() {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [inputValuePass, setInputValuePass] = useState("");
  const [isLoader, setLoader] = useState(false);

  const alertString = isAlertOn.state ? isAlertOn : AlertsMsg.ALERT_OFF
  const [alertMessage, setAlertMessage] = useState(alertString);

  useEffect(() => {
    store.dispatch({
      type: StoreConst.CLOSESESSION,
      payload: {},
    });
  }, []);

  var onChangeUser = (e: any) => {
    setInputValue(e.target.value);
  };

  var onChangePass = (e: any) => {
    setInputValuePass(e.target.value);
  };

  var validSession = async(e: any) => {

    setLoader(true);
    httpService
      .execute(constantesInterceptors.postAuthToken, "", "post", {
        username: inputValue,
        password: inputValuePass,
      })
      .then(async (res: any) => {
        setLoader(false);
        if(res.statusCode == 200) {
          await store.dispatch({
            type: StoreConst.LOGIN,
            payload: { 
              state: true,
              token: res.body,
              session_id: HashGen.createSessionId()
            },
          });
    
          history(Routes.HOME);
        }
        else {
          setAlertMessage(AlertsMsg.ALERT_ERROR_LOGIN);
          setTimeout(() => {
            isAlertOn = AlertsMsg.ALERT_OFF;
            setAlertMessage(AlertsMsg.ALERT_OFF);
          }, 5000);
        }
      }).catch((e) => {
        setLoader(false);
        setAlertMessage(AlertsMsg.ALERT_ERROR_LOGIN);
        setTimeout(() => {
          isAlertOn = AlertsMsg.ALERT_OFF;
          setAlertMessage(AlertsMsg.ALERT_OFF);
        }, 5000);
      });
  };

  var loginMobile = ( <>
      <View
          columnStart="1" 
          columnEnd="1" 
          margin={"auto"}
          paddingTop={"1rem"}
      >
          <FormularioLoginMobile login={
            <LoginMobile
              onchangeUser={onChangeUser}
              onChangePassword={onChangePass}
              validSession={validSession}
            />
          }/>
      </View>
    </>
  );

  var loginDesktop = ( <>
      <View
        columnStart="1"
        columnEnd="1" 
        margin={"0 auto"}
        paddingTop={"2rem"}
        height={"fit-content"}
      >
        <IlustracionLogin />
      </View>
      <View
        columnStart="2"
        columnEnd="-1" 
        paddingTop={"2rem"}
        height={"fit-content"}
      >
        <FormularioLogin login={
          <Login
            onchangeUser={onChangeUser}
            onChangePassword={onChangePass}
            validSession={validSession}
          />
        }></FormularioLogin>
      </View>
    </>
  );

  const variation = useBreakpointValue([
    <MobileTemplate props={{content: loginMobile, loader: isLoader, alertMessage : alertMessage}}/>,
    <MobileTemplate props={{content: loginMobile, loader: isLoader, alertMessage : alertMessage}}/>,
    <MobileTemplate props={{content: loginMobile, loader: isLoader, alertMessage : alertMessage}}/>,
    <DesktopTemplate props={{content: loginDesktop, loader: isLoader, alertMessage : alertMessage}}/>,
  ]);

  return (
    <>
      {variation}
    </>
  );
}

export default LoginApp;
