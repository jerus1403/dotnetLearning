import { IUserFormValues } from "../../app/models";
import { LOGIN_INITIATE, LoginInitiateAction } from "./UserTypes";

export const loginInitiate = (userCredentials: IUserFormValues): LoginInitiateAction => ({
    type: LOGIN_INITIATE,
    userCredentials,
});