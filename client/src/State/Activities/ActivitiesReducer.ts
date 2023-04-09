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
    SET_LOADING_SELECTED_ACTIVITY,
    LOAD_ACTIVITIES_INITIAL,
    SetLoadingAction,
    SetLoadingSelectedActivityAction,
    SET_LOADING,
    UpdateActivityAction,
    UPDATE_ACTIVITY,
} from "./ActivitiesTypes";
import { format } from "date-fns";

const DEFAULT_STATE: IActivitiesReducerState = {
    activityGroups: [],
    selectedActivity: null,
    loading: false,
    loadingInitial: false,
    loadingSelectedActivity: false,
}

export const activitiesReducer = (
    state = DEFAULT_STATE,
    action: Action,
) => {
    switch (action.type) {
        case GET_ACTIVITIES: {
            const { activityGroups } = action as GetActivitiesAction;
            return {
                ...state,
                activityGroups: [...state.activityGroups, ...activityGroups],
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
        case SET_LOADING_SELECTED_ACTIVITY: {
            const { loadingSelectedActivity } = action as SetLoadingSelectedActivityAction;
            return {
                ...state,
                loadingSelectedActivity,
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
            const newActivityDate = format(newActivity.date!, 'dd MMM yyyy');
            let updatedActivityGroups = [...state.activityGroups];
            updatedActivityGroups.forEach(item => {
                if (item.date === newActivityDate) {
                    item.activities.push(newActivity);
                } else {
                    updatedActivityGroups.push({
                        date: newActivityDate,
                        activities: [newActivity],
                    });
                };
            });
            return {
                ...state,
                activityGroups: updatedActivityGroups,
            };
        }
        case UPDATE_ACTIVITY: {
            const { activity } = action as UpdateActivityAction;
            const selectedActivityDate = format(activity.date!, 'dd MMM yyyy');
            const updatedActivityGroups = [...state.activityGroups].map(item => {
                if (item.date === selectedActivityDate) {
                    return item.activities = [...item.activities.filter(a => a.id !== activity.id), activity];
                }
                return item;
            });
            return {
                ...state,
                activities: updatedActivityGroups,
            };
        }
        case DELETE_ACTIVITY: {
            const { removeActivity } = action as DeleteActivityAction;
            const selectedActivityDate = format(removeActivity.date!, 'dd MMM yyyy');
            const updatedActivityGroups = [...state.activityGroups].map(item => {
                if (item.date === selectedActivityDate) {
                    return item.activities = [...item.activities.filter(a => a.id !== removeActivity.id)];
                }
                return item;
            });
            return {
                ...state,
                activities: updatedActivityGroups,
            };
        }
        default:
            return state;
    }
};