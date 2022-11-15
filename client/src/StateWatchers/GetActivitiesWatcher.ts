import { Unsubscribe } from "redux-saga";
import { getActivitiesInitiate } from "../Sagas/GetActivities/ActivitiesActions";
import { activitiesSelector } from "../State/Activities/ActivitiesSelector";
import { StoreType } from "../State/store";

export const getActivitiesWatcher = (store: StoreType): void => {
    let loading = false;
    let subscription: Unsubscribe | false = false;
    const process = () => {
        const state = store.getState();
        const activityList = activitiesSelector(state);

        if (!activityList && !loading) {
            loading = true;
            store.dispatch(getActivitiesInitiate());
        } else if (activityList && subscription) {
            subscription();
        }
    };
    process();
    subscription = store.subscribe(process);
}