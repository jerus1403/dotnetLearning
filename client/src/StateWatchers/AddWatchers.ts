import { StoreType } from "../State/store";
import { createContext } from "./CreateContext";
import { getActivitiesWatcher, getSelectedActivityWatcher } from "./GetActivitiesWatcher";

export const AddWatchers = (store: StoreType): void => {
    getActivitiesWatcher(store);
    getSelectedActivityWatcher(store);
    createContext(store);
};