import { all } from "redux-saga/effects";

import { watchGetActivities } from "./GetActivities/ActivitiesSagas";
import { watchUser } from "./User/UserSagas";

export function* rootSaga() {
    yield all([
        watchGetActivities(),
        watchUser(),
    ]);
}