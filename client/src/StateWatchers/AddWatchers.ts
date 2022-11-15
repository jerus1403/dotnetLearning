import { StoreType } from "../State/store";
import { getActivitiesWatcher } from "./GetActivitiesWatcher";

export const AddWatchers = (store: StoreType): void => {
    getActivitiesWatcher(store);
};