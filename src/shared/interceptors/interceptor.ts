import axios from "axios";
import { constantesInterceptors } from "../constants/constants";
import store from "../../store/store";

const Instance = axios.create({
  baseURL: constantesInterceptors.URL,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

Instance.interceptors.request.use(
  (request: any) => {
    let session;
    
    if(store.getState().login) {
      session = store.getState().login;
    }

    if (request.url == constantesInterceptors.LoanPaymet + "/") {
      request.headers["Content-Type"] = "application/json";
      request.headers["channel-id"] = "141";
      request.headers["application"] = "CRE";
      request.headers["terminal-id"] = "1.0.0.0";
      request.headers["session-id"] = session.session_id;
      request.headers["transaction-id"] = session.session_id;
      request.headers["timestamp"] = "2022-10-26T10:00:00";
      request.headers["authorizationToken"] = session.token;
    } else if (request.url == constantesInterceptors.clientProduct + "/") {
      request.headers["Content-Type"] = "application/json";
      request.headers["channel-id"] = "41";
      request.headers["application"] = "APP Unica";
      request.headers["terminal-id"] = "10.80.13.39";
      request.headers["session-id"] = "Portal";
      request.headers["serviceCode"] = "CLIR-00101";
      request.headers["transaction-id"] = session.session_id;
      request.headers["timestamp"] = "2023-04-27T12:07:00.705Z";
      request.headers["token-client-id"] = "1002127372_1";
      request.headers["authorizationToken"] = session.token;

    } else if (request.url == constantesInterceptors.getLoanAccountDetailById + "/") {
      request.headers["Content-Type"] = "application/json";
      request.headers["channel-id"] = "141";
      request.headers["application"] = "CRE";
      request.headers["terminal-id"] = "121.1.1.1";
      request.headers["serviceCode"] = "LOAR-00101";
      request.headers["session-id"] = session.session_id;
      request.headers["transaction-id"] = "234234";
      request.headers["timestamp"] = "vsrgr";
      request.headers["authorizationToken"] = session.token;

    } else if (request.url == constantesInterceptors.postAccountCalculation + "/") {
      request.headers["Content-Type"] = "application/json";
      request.headers["channel-id"] = "9";
      request.headers["application"] = "APP Unica";
      request.headers["terminal-id"] = "121.1.1.1";
      request.headers["serviceCode"] = "ACCR-00201";
      request.headers["session-id"] = session.session_id;
      request.headers["transaction-id"] = session.session_id;
      request.headers["timestamp"] = "2023-04-27T09:37:00";
      request.headers["authorizationToken"] = session.token;

    }

    return request;
  },
  (error: any) => {
    // Maneja los errores de solicitud
    console.error("Error de solicitud:", error);
    return Promise.reject(error);
  }
);

export default Instance;
