import { Action } from "@reduxjs/toolkit";

export interface IUserViewState {
    currentContext?: string;
    pastContext: string[];
}

export const SET_CURRENT_CONTEXT = 'USER_VIEW/SET_CURRENT_CONTEXT';
export const CLEAR_CURRENT_CONTEXT = 'USER_VIEW/CLEAR_CURRENT_CONTEXT';

export type SetCurrentContextAction = Action<string> & {
    contextKey: string;
};

export type ClearCurrentContextAction = Action<string>;