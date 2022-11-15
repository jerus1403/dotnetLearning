import { createSelector } from "reselect";
import { IActivity } from "../../app/models";
import { RootState } from "../store";

export const activitiesSelector = createSelector(
    (root: RootState) => root.activities.activityList,
    (activities) => activities,
);

export const loadingActivitiesSelector = createSelector(
    (root: RootState) => root.activities.activityList,
    (root: RootState) => root.activities.isLoading,
    (activityList, isLoading) => {
        if (!activityList) {
            return true;
        }
        return false;
    },
);

export const selectedActivitySelector = createSelector(
    (root: RootState) => root.activities.selectedActivity,
    (selectedActivity) => selectedActivity,
);

export const loadingSelectedActivitySelector = createSelector(
    (root: RootState) => root.activities.selectedActivity,
    (selectedActivity) => {
        if (!selectedActivity) {
            return true;
        }
        return false;
    },
);

export const editModeSelector = createSelector(
    (root: RootState) => root.activities.editMode,
    (editMode) => editMode,
);

export const loadingSelector = createSelector(
    (root: RootState) => root.activities.isLoading,
    (isLoading) => isLoading,
);
