import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_INITIATE, LoginInitiateAction } from "./UserTypes";
import { agent } from "../../app/api/agent";
import { IUser } from "../../app/models";
import { loginUser, loginUserError, setLoadingLogin } from "../../State/User/UserActions";
import { AxiosError } from "axios";

export function* watchUser() {
    yield takeEvery(LOGIN_INITIATE, loginSaga);
}

function* loginSaga(action: LoginInitiateAction) {
    try {
        const { userCredentials } = action;

        yield put(setLoadingLogin(true));
        const loginInfo: IUser = yield agent.Account.login(userCredentials);

        yield put(loginUser(loginInfo));
        yield put(setLoadingLogin(false));
    } catch (err: any) {
        console.error(err, 'Login User Error');
        yield put(loginUserError(err))
        yield put(setLoadingLogin(false));
    }
}