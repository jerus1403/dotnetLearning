import { IServerError } from "../../app/models";
import { SetServerErrorAction, SET_SERVER_ERROR } from "./CommonTypes";


export const setServerError = (error: IServerError): SetServerErrorAction => ({
    type: SET_SERVER_ERROR,
    error,
});