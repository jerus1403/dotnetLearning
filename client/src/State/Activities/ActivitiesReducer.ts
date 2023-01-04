import { Action } from "@reduxjs/toolkit";

import {
    CreateActivityAction,
    CREATE_ACTIVITY,
    DeleteActivityAction,
    DELETE_ACTIVITY,
    GetActivitiesAction,
    GetSelectedActivityAction,
    GET_ACTIVITIES,
    GET_SELECTED_ACTIVITY,
    IActivitiesReducerState,
    LoadActivitiesAction,
    LOAD_ACTIVITIES_INITIAL,
    SetLoadingAction,
    SET_LOADING,
    UpdateActivityAction,
    UPDATE_ACTIVITY,
} from "./ActivitiesTypes";

const DEFAULT_STATE: IActivitiesReducerState = {
    activities: [],
    selectedActivity: null,
    loading: false,
    loadingInitial: false,
}

export const activitiesReducer = (
    state = DEFAULT_STATE,
    action: Action,
) => {
    switch (action.type) {
        case GET_ACTIVITIES: {
            const { activities } = action as GetActivitiesAction;
            return {
                ...state,
                activities: [...state.activities, ...activities],
            };
        }
        case LOAD_ACTIVITIES_INITIAL: {
            const { loadingInitial } = action as LoadActivitiesAction;
            return {
                ...state,
                loadingInitial,
            };
        }
        case SET_LOADING: {
            const { loading } = action as SetLoadingAction;
            return {
                ...state,
                loading,
            };
        }
        case GET_SELECTED_ACTIVITY: {
            const { selectedActivity } = action as GetSelectedActivityAction;
            return {
                ...state,
                selectedActivity: selectedActivity,
            };
        }
        case CREATE_ACTIVITY: {
            const { newActivity } = action as CreateActivityAction;
            return {
                ...state,
                activities: [...state.activities, newActivity],
            };
        }
        case UPDATE_ACTIVITY: {
            const { activity } = action as UpdateActivityAction;
            const updatedActivities = [...state.activities.filter(a => a.id !== activity.id), activity];
            return {
                ...state,
                activities: updatedActivities,
            };
        }
        case DELETE_ACTIVITY: {
            const { removedId } = action as DeleteActivityAction;
            const updatedActivities = [...state.activities.filter(a => a.id !== removedId)];
            return {
                ...state,
                activities: updatedActivities,
            };
        }
        default:
            return state;
    }
};