import { AxiosResponse } from "axios";
import { GenericResponse } from "../../interfaces/interface";
import httpService from "../httpService";
import { constantesInterceptors } from "../../constants/constants";
import { APIS_CONSTANTS } from "./constants/constants";
import store from "../../../store/store";
import { StoreConst } from "../../constants/store";
import NumbersFormat from "../../pipes/numbers";
import { PaymentPayload } from "../../models/payment-payload";
import Dates from "../../pipes/dates";

export default class LoansAPI {
  public static async loans(): Promise<any> {
    return new Promise((resolve,reject) => {
        
        const prodSelected = store.getState().productSelected;

        httpService
            .execute(constantesInterceptors.getLoanAccountDetailById, "", APIS_CONSTANTS.METHODS.GET, {
                loan_id: prodSelected.account_id,
                loan_type: prodSelected.account_type,
                loan_subtype: prodSelected.account_subtype
            })
            .then(async (res: any) => {
                if(res && res.loan) {
                    res.loan.loan_id = NumbersFormat.CleanProductNum(res.loan.loan_id);
                    await store.dispatch({
                        type: StoreConst.DETAILS,
                        payload: res,
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

  public static async payment(): Promise<any> {
    const payConfig = store.getState().paymentConfig;
    let paymentPayload: PaymentPayload = setPaymentPayload();
  
    paymentPayload.data.source_account.account_id = payConfig.sourceProdObj.account_id;
    paymentPayload.data.source_account.account_type = payConfig.sourceProdObj.account_type;
    paymentPayload.data.source_account.account_subtype = payConfig.sourceProdObj.account_subtype;
    
    paymentPayload.data.loan_id = payConfig.targetProdObj.account_id;
    paymentPayload.data.loan_type = payConfig.targetProdObj.account_type;
    paymentPayload.data.amount.amount = +payConfig.amount;
  
    paymentPayload.data.debit_transaction_description = "|" + payConfig.targetProdObj.account_type + "|" + payConfig.targetProdObj.account_id + "|" + payConfig.targetProdObj.account_subtype + "|";
    paymentPayload.data.effective_date = Dates.PaymentFormatter(Date.now()) + "T09:58:07.01-05:00";
  
    return new Promise((resolve,reject) => {
        
        httpService
            .execute(constantesInterceptors.LoanPaymet, "", APIS_CONSTANTS.METHODS.POST, paymentPayload)
            .then(async (res: any) => {
                if(res && res.payment) {
                    await store.dispatch({
                        type: StoreConst.PAYMENT,
                        payload: res.payment[0],
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

function setPaymentPayload() : PaymentPayload {
    let py: PaymentPayload = {
        "data": {
            "source_account": {
                "account_id": "104047416",
                "account_type": "AHO",
                "account_subtype": "",
                "account_description": ""
            },
            "loan_type": "ORD",
            "loan_id": "32717448800",
            "amount": {
                "currency": "COP",
                "amount": 26000,
                "decimals": 2
            },
            "category": {
                "category_id": 335
            },
            "effective_date": "2023-06-29T09:58:07.01-05:00",
            "branch_code": 10,
            "debit_category": {
                "category_id": -1
            },
            "debit_transaction_description": "|ORD|32717448800|335",
            "loan_transaction_description": "loan_transaction_description",
            "charge_code": 633
        }
    };
  
    return py;
  } 