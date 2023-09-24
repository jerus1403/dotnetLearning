import { Action } from "@reduxjs/toolkit";

import { IUserFormValues } from "../../app/models";

export type LoginInitiateAction = Action<string> & {
    userCredentials: IUserFormValues
};

export const LOGIN_INITIATE = "SAGAS/LOGIN_INITIATE";