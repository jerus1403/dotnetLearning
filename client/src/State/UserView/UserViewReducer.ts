import { Action } from "@reduxjs/toolkit";
import {
    CLEAR_CURRENT_CONTEXT,
    IUserViewState,
    SetCurrentContextAction,
    SET_CURRENT_CONTEXT,
} from "./UserViewTypes";


const INITIAL_STATE: IUserViewState = {
    currentContext: undefined,
    pastContext: [],
};

export const userViewReducer = (
    state = INITIAL_STATE,
    action: Action<string>,
): IUserViewState => {
    switch (action.type) {
        case SET_CURRENT_CONTEXT: {
            const { contextKey } = action as SetCurrentContextAction;
            return {
                ...state,
                currentContext: contextKey,
                pastContext: state.currentContext
                    ? [...state.pastContext, state.currentContext]
                    : state.pastContext,
            };
        }
        case CLEAR_CURRENT_CONTEXT: {
            return {
                ...state,
                currentContext: undefined,
            };
        }
        default: {
            return state;
        }
    }
}