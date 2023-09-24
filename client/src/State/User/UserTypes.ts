import { Action } from "@reduxjs/toolkit";
import { IUser } from "../../app/models";
import { AxiosError } from "axios";

export interface IUserReducerState {
    user: IUser | null;
    loadingLogin: boolean;
    loginUserErrorMsg: string | null;
}

export type LoginUserAction = Action<string> & {
    user: IUser;
}


export type LoginUserErrorAction = Action<string> & {
    loginError: AxiosError;
}

export type SetLoadingLoginAction = Action<string> & {
    loading: boolean;
}

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGING_USER_ERROR";
export const LOADING_LOGIN = "LOADING_LOGIN";