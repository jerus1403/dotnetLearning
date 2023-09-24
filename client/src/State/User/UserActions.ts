import { AxiosError } from "axios";
import { IUser } from "../../app/models";
import { LOADING_LOGIN, LOGIN_USER, LOGIN_USER_ERROR, LoginUserAction, LoginUserErrorAction, SetLoadingLoginAction } from "./UserTypes";

export const loginUser = (user: IUser): LoginUserAction => ({
    type: LOGIN_USER,
    user,
});

export const loginUserError = (errorObject: AxiosError): LoginUserErrorAction => ({
    type: LOGIN_USER_ERROR,
    loginError: errorObject,
});

export const setLoadingLogin = (loading: boolean): SetLoadingLoginAction => ({
    type: LOADING_LOGIN,
    loading,
});
