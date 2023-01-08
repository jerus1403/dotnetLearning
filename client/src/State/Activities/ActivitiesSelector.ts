import { createSelector } from "reselect";
import { RootState } from "../store";

export const activitiesSelector = createSelector(
    (root: RootState) => root.activities.activities,
    (activities) => activities,
);

export const loadingActivitiesInitialSelector = createSelector(
    (root: RootState) => root.activities.loadingInitial,
    (loadingActivtiesInitial) => loadingActivtiesInitial,
)

export const loadingSelector = createSelector(
    (root: RootState) => root.activities.loading,
    (loading) => loading,
);

export const loadingSelectedActivitySelector = createSelector(
    (root: RootState) => root.activities.loadingSelectedActivity,
    (loadingSelectedActivity) => loadingSelectedActivity,
);

export const selectedActivitySelector = createSelector(
    (root: RootState) => root.activities.selectedActivity,
    (selectedActivity) => selectedActivity,
);