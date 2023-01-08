import { Unsubscribe } from "redux-saga";

import { getActivitiesInitiate, getActivityDetailsInitiate } from "../Sagas/GetActivities/ActivitiesActions";
import { activitiesSelector, selectedActivitySelector } from "../State/Activities/ActivitiesSelector";
import { StoreType } from "../State/store";

export const getActivitiesWatcher = (store: StoreType): void => {
    let loading = false;
    let subscription: Unsubscribe | false = false;
    const process = () => {
        const state = store.getState();
        const activityList = activitiesSelector(state);

        if (activityList.length === 0 && !loading) {
            loading = true;
            store.dispatch(getActivitiesInitiate());
        } else if (activityList.length > 0 && subscription) {
            subscription();
        }
    };
    process();
    subscription = store.subscribe(process);
}

export const getSelectedActivityWatcher = (store: StoreType): void => {
    let loading = false;
    let subscription: Unsubscribe | false = false;
    const paramId = window.location.pathname.split("/").filter(el => el)[1];

    const process = () => {
        const state = store.getState();
        const selectedActivity = selectedActivitySelector(state);

        if (!selectedActivity && !loading && paramId) {
            loading = true;
            store.dispatch(getActivityDetailsInitiate(paramId));
        } else if (selectedActivity && subscription) {
            subscription();
        }
    };
    process();
    subscription = store.subscribe(process);
}