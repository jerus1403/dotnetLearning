import { put, takeEvery } from "redux-saga/effects";
import { format } from "date-fns";

import { agent } from "../../app/api/agent";
import { IActivity } from "../../app/models";
import { IActivityGroup } from "../../app/models/activity";
import {
    createActivity,
    deleteActivity,
    getActivities,
    getSelectedActivity,
    loadActivitiesInitial,
    setLoading,
    setLoadingSelectedActivity,
    updateActivity,
} from "../../State/Activities/ActivitiesActions";

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
        yield put(loadActivitiesInitial(true));
        const activities: IActivity[] = yield agent.Activities.list();
        const convertedActivities = [...activities].map(a => ({
            ...a,
            date: new Date(a.date!),
        })).sort((a, b) => a.date.getTime() - b.date.getTime());

        const activitiesByDateGroup = convertedActivities.reduce((activities, activity) => {
            const date = format(activity.date!, 'dd MMM yyyy');
            activities[date] = activities[date] ? [...activities[date], activity] : [activity];
            return activities;
        }, {} as { [key: string]: IActivity[] });

        const activitiesGroupedByDate: IActivityGroup[] = [];
        for (const key in activitiesByDateGroup) {
            activitiesGroupedByDate.push({
                date: key,
                activities: activitiesByDateGroup[key],
            });
        };

        yield put(getActivities(activitiesGroupedByDate));
        yield put(loadActivitiesInitial(false));
    } catch (err) {
        console.error(err);
        yield put(loadActivitiesInitial(false));
    }
}

function* getActivityDetailsSaga(action: GetActivityDetailsInitiateAction) {
    try {
        const { activityId } = action;
        yield put(setLoadingSelectedActivity(true));

        const activity: IActivity = yield agent.Activities.details(activityId);
        const convertedActivity = {
            ...activity,
            date: new Date(activity.date!),
        };

        yield put(getSelectedActivity(convertedActivity));
        yield put(setLoadingSelectedActivity(false));
    } catch (err) {
        console.error(err);
        yield put(setLoadingSelectedActivity(false));
    }
}

function* createActivitySaga(action: CreateActivityInitiateAction) {
    try {
        const { newActivity } = action;
        yield put(setLoading(true));
        yield agent.Activities.create(newActivity);

        yield put(createActivity(newActivity));
        yield put(setLoading(false));
    } catch (err) {
        console.error(err);
        yield put(setLoading(false));
    }
}

function* updateActivitySaga(action: UpdateActivityInitiateAction) {
    try {
        const { activity } = action;
        yield put(setLoading(true));
        yield agent.Activities.update(activity);

        yield put(updateActivity(activity));
        yield put(setLoading(false));
    } catch (err) {
        console.error(err);
        yield put(setLoading(false));
    }
}

function* deleteActivitySaga(action: DeleteActivityInitiateAction) {
    try {
        const { removeActivity } = action;
        yield put(setLoading(true));
        yield agent.Activities.delete(removeActivity.id);

        yield put(deleteActivity(removeActivity));
        yield put(setLoading(false));
    } catch (err) {
        console.error(err);
        yield put(setLoading(false));
    }
}
