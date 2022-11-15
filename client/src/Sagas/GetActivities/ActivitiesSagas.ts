import { put, takeEvery } from "redux-saga/effects";
import { agent } from "../../app/api/agent";
import { IActivity } from "../../app/models";
import { createActivity, deleteActivity, getActivities, updateActivity } from "../../State/Activities/ActivitiesActions";

import {
    CreateActivityInitiateAction,
    CREATE_ACTIVITY_INITIATE,
    DeleteActivityInitiateAction,
    DELETE_ACTIVITY_INITIATE,
    GetActivityDetailsInitiateAction,
    GET_ACTIVITIES_INITIATE,
    GET_ACTIVITY_DETAILS_INITIATE,
    UpdateActivityInitiateAction,
    UPDATE_ACTIVITY_INITIATE,
} from "./ActivitiesTypes";

export function* watchGetActivities() {
    yield takeEvery(GET_ACTIVITIES_INITIATE, getActivitiesSaga);
    yield takeEvery(GET_ACTIVITY_DETAILS_INITIATE, getActivityDetailsSaga);
    yield takeEvery(CREATE_ACTIVITY_INITIATE, createActivitySaga);
    yield takeEvery(UPDATE_ACTIVITY_INITIATE, updateActivitySaga);
    yield takeEvery(DELETE_ACTIVITY_INITIATE, deleteActivitySaga);
}

function* getActivitiesSaga() {
    try {
        const activities: IActivity[] = yield agent.Activities.list();
        const convertedActivities = [...activities].map(a => ({
            ...a,
            date: a.date.split('T')[0],
        })).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
        yield put(getActivities(convertedActivities));
    } catch (err) {
        console.error(err);
    }
}

function* getActivityDetailsSaga(action: GetActivityDetailsInitiateAction) {
    try {
        const { activityId } = action;
        const activity: IActivity = yield agent.Activities.details(activityId);
    } catch (err) {
        console.error(err);
    }
}

function* createActivitySaga(action: CreateActivityInitiateAction) {
    try {
        const { newActivity } = action;
        yield agent.Activities.create(newActivity);
        yield put(createActivity(newActivity));
    } catch (err) {
        console.error(err);
    }
}

function* updateActivitySaga(action: UpdateActivityInitiateAction) {
    try {
        const { activity } = action;
        yield agent.Activities.update(activity);
        yield put(updateActivity(activity));
    } catch (err) {
        console.error(err);
    }
}

function* deleteActivitySaga(action: DeleteActivityInitiateAction) {
    try {
        const { removedId } = action;
        yield agent.Activities.delete(removedId);
        yield put(deleteActivity(removedId));
    } catch (err) {
        console.error(err);
    }
}
