import { createSelector } from "reselect";

import { RootState } from "../store";

export const serverErrorSelector = createSelector(
    (root: RootState) => root.common.serverError,
    (error) => error,
);