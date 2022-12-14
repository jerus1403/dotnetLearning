import { IActivity, IActivityGroup } from "../../app/models";
import {
    CreateActivityAction,
    CREATE_ACTIVITY,
    DeleteActivityAction,
    DELETE_ACTIVITY,
    GetActivitiesAction,
    GetSelectedActivityAction,
    GET_ACTIVITIES,
    GET_SELECTED_ACTIVITY,
    LoadActivitiesAction,
    SET_LOADING_SELECTED_ACTIVITY,
    LOAD_ACTIVITIES_INITIAL,
    SetLoadingAction,
    SetLoadingSelectedActivityAction,
    SET_LOADING,
    UpdateActivityAction,
    UPDATE_ACTIVITY,
} from "./ActivitiesTypes";

export const getActivities = (activityGroups: IActivityGroup[]): GetActivitiesAction => ({
    type: GET_ACTIVITIES,
    activityGroups,
});

export const loadActivitiesInitial = (loadingInitial: boolean): LoadActivitiesAction => ({
    type: LOAD_ACTIVITIES_INITIAL,
    loadingInitial,
});

export const setLoading = (loading: boolean): SetLoadingAction => ({
    type: SET_LOADING,
    loading,
});

export const setLoadingSelectedActivity = (loadingSelectedActivity: boolean): SetLoadingSelectedActivityAction => ({
    type: SET_LOADING_SELECTED_ACTIVITY,
    loadingSelectedActivity,
});

export const getSelectedActivity = (selectedActivity: IActivity | null): GetSelectedActivityAction => ({
    type: GET_SELECTED_ACTIVITY,
    selectedActivity,
});

export const createActivity = (newActivity: IActivity): CreateActivityAction => ({
    type: CREATE_ACTIVITY,
    newActivity,
});

export const updateActivity = (activity: IActivity): UpdateActivityAction => ({
    type: UPDATE_ACTIVITY,
    activity,
});

export const deleteActivity = (removeActivity: IActivity): DeleteActivityAction => ({
    type: DELETE_ACTIVITY,
    removeActivity,
});