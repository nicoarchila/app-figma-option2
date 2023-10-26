import { AxiosResponse } from "axios";
import { GenericResponse } from "../../interfaces/interface";
import httpService from "../httpService";
import { constantesInterceptors } from "../../constants/constants";
import { APIS_CONSTANTS } from "./constants/constants";
import store from "../../../store/store";
import { StoreConst } from "../../constants/store";
import NumbersFormat from "../../pipes/numbers";
import { CalculationPayload } from "../../models/calculations-payload";
import { PaymentPayload } from "../../models/payment-payload";
import Dates from "../../pipes/dates";

export default class TransfersAPI {
  public static async calculations(): Promise<any> {
    const payConfig = store.getState().paymentConfig;

    let payload: CalculationPayload = setPayLoad();

    payload.data.amount.amount = +payConfig.amount;

    payload.data.source_account.account_id = payConfig.sourceProdObj.account_id;
    payload.data.source_account.account_type =
        payConfig.sourceProdObj.account_type;

    payload.data.destination_account.account_id =
        payConfig.targetProdObj.account_id;
    payload.data.destination_account.account_type =
        payConfig.targetProdObj.account_type;

    return new Promise((resolve,reject) => {
        
        httpService
            .execute(constantesInterceptors.postAccountCalculation, "", APIS_CONSTANTS.METHODS.POST, payload)
            .then(async (res: any) => {
                if(res && res.transaction_cost) {
                    await store.dispatch({
                        type: StoreConst.TRANSACTIONCOST,
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
}


function setPayLoad(): CalculationPayload {
    let py: CalculationPayload = {
        data: {
        client_ip: "10.80.5.13",
        device: {
            os_name: "Android",
            os_version: "10",
            model: "Xiaomi",
        },
        encoded_operation: "string",
        source_account: {
            account_id: 122479629,
            account_type: "AHO",
            account_description: "Ahorros",
        },
        destination_account: {
            recipient_id: 1,
            account_id: 122469498,
            account_type: "AHO",
            account_subtype: "218",
            recipient_name: "pepe",
            bank_id: "014",
            bank_name: "bank",
            client_id: 1123,
            account_description: "Ahorros",
            account_number: 1123,
            account_owner: "pepe",
        },
        amount: {
            currency: "COP",
            amount: 595,
            decimals: 0,
        },
        comment: "comment",
        category: "category",
        transaction_currency: "COP",
        payment_type: "money",
        operation_target: "001",
    },
};

return py;
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