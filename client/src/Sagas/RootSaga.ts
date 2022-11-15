import { all } from "redux-saga/effects";

import { watchGetActivities } from "./GetActivities/ActivitiesSagas";

export function* rootSaga() {
    yield all([
        watchGetActivities(),
    ]);
}