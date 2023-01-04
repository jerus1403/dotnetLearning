import { createSelector } from "reselect";
import { RootState } from "../store";


export const currentContextSelector = createSelector(
    (root: RootState) => root.userView.currentContext || null,
    contextKey => contextKey,
);

export const userContextSelector = createSelector(
    (root: RootState) => root.userView,
    userContext => userContext,
);