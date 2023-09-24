import { createSelector } from "reselect";
import { RootState } from "../store";
import { IUserReducerState } from "./UserTypes";

export const userSelector = createSelector(
    (root: RootState) => root.user,
    (user: IUserReducerState) => user.user,
);

export const loginUserErrorSelector = createSelector(
    (root: RootState) => root.user,
    (user: IUserReducerState) => user.loginUserErrorMsg,
);

export const loadingLoginSelector = createSelector(
    (root: RootState) => root.user,
    (user: IUserReducerState) => user.loadingLogin,
);