import { Action } from "@reduxjs/toolkit";
import { IUserReducerState, LOADING_LOGIN, LOGIN_USER, LOGIN_USER_ERROR, LoginUserAction, LoginUserErrorAction, SetLoadingLoginAction } from "./UserTypes";

const USER_DEFAULT_STATE: IUserReducerState = {
    user: null,
    loadingLogin: false,
    loginUserErrorMsg: null,
}

export const userReducer = (
    state = USER_DEFAULT_STATE,
    action: Action,
) => {
    switch (action.type) {
        case LOGIN_USER: {
            const { user } = action as LoginUserAction;
            return {
                ...state,
                user,
                loginUserErrorMsg: null,
            };
        }
        case LOADING_LOGIN: {
            const { loading } = action as SetLoadingLoginAction;
            return {
                ...state,
                loadingLogin: loading,
            }
        }
        case LOGIN_USER_ERROR: {
            const { loginError } = action as LoginUserErrorAction;
            return {
                ...state,
                user: null,
                loginUserErrorMsg: loginError.response?.statusText,
            }
        }
        default:
            return state;
    }
}