import { Action } from "@reduxjs/toolkit";

import {
    ICommonReducerState,
    SetServerErrorAction,
    SET_SERVER_ERROR,
} from "./CommonTypes";


const DEFAULT_STATE: ICommonReducerState = {
    serverError: null,
}

export const commonReducer = (
    state = DEFAULT_STATE,
    action: Action,
) => {
    switch (action.type) {
        case SET_SERVER_ERROR: {
            const { error } = action as SetServerErrorAction;
            return {
                ...state,
                serverError: error,
            };
        }
        default:
            return state;
    }
};