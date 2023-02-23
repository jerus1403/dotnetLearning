import { Action } from "@reduxjs/toolkit";

import { IServerError } from "../../app/models";

export interface ICommonReducerState {
    serverError: IServerError | null;
}

export type SetServerErrorAction = Action<string> & {
    error: IServerError;
};

export const SET_SERVER_ERROR = "SET_SERVER_ERROR";