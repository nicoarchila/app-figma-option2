import { AxiosResponse } from "axios";
import { GenericResponse } from "../../interfaces/interface";
import httpService from "../httpService";
import { constantesInterceptors } from "../../constants/constants";
import { APIS_CONSTANTS } from "./constants/constants";
import store from "../../../store/store";
import { StoreConst } from "../../constants/store";

export default class ClientsAPI {
  public static async products(): Promise<any> {
    return new Promise((resolve,reject) => {
        
        httpService
            .execute(constantesInterceptors.clientProduct, "", APIS_CONSTANTS.METHODS.GET, {
                isConfirming: APIS_CONSTANTS.CLIENTS.IS_CONFIRMING,
                showAccount: APIS_CONSTANTS.CLIENTS.SHOW_ACCOUNT,
            })
            .then(async (res: any) => {
                if(res && res.products) {
                    await store.dispatch({
                        type: StoreConst.PRODUCTS,
                        payload: res.products,
                    });
                    resolve(res);
                }
                else {
                    reject(false);
                }
            })
            .catch((e: any) => {
                reject(false);
            });
    })
  }
}
