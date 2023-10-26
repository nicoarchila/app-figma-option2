import { AxiosResponse } from "axios";
import { GenericResponse } from "../interfaces/interface";
import Instance from "../interceptors/interceptor";

/**
 * response data api bff
 */
export default class httpService {
  public static async execute(
    endPoint: string,
    path: string,
    method: string,
    body?: any
  ): Promise<GenericResponse> {
    const url = `${endPoint}/${path}`;
    let response: AxiosResponse<GenericResponse>;
    try {
      if (method == "post") {
        response = await Instance.post(url, body);
      }
      else if(method == "postParams") {
        response = await Instance.post(url, null,{ params: body});
      } else {
        response = await Instance.get(url, { params: body});
      }

      console.log(response.data);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
