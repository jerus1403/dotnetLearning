import { Action } from "@reduxjs/toolkit";

import {
    CreateActivityAction,
    CREATE_ACTIVITY,
    DeleteActivity,
    DELETE_ACTIVITY,
    GetActivitiesAction,
    GetSelectedActivityAction,
    GET_ACTIVITIES,
    GET_SELECTED_ACTIVITY,
    IActivitiesReducerState,
    SetEditMode,
    SetLoading,
    SET_EDIT_MODE,
    SET_LOADING,
    UpdateActivity,
    UPDATE_ACTIVITY,
} from "./ActivitiesTypes";

const DEFAULT_STATE: IActivitiesReducerState = {
    activityList: false,
    selectedActivity: undefined,
    editMode: false,
    isLoading: false,
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
                activityList: activities,
            };
        }
        case GET_SELECTED_ACTIVITY: {
            const { selectedActivity } = action as GetSelectedActivityAction;
            return {
                ...state,
                selectedActivity,
            }
        }
        case CREATE_ACTIVITY: {
            const { newActivity } = action as CreateActivityAction;
            return {
                ...state,
                activityList: [...(state.activityList || []), newActivity],
                selectedActivity: newActivity,
            }
        }
        case SET_EDIT_MODE:
            const { editMode } = action as SetEditMode;
            return {
                ...state,
                editMode,
            }
        case SET_LOADING:
            const { isLoading } = action as SetLoading;
            return {
                ...state,
                isLoading,
            }
        case UPDATE_ACTIVITY:
            const { activity } = action as UpdateActivity;
            const updatedActivityList = [...(state.activityList || []).filter(a => a.id !== activity.id), activity];
            return {
                ...state,
                activityList: updatedActivityList,
            }
        case DELETE_ACTIVITY:
            const { removedId } = action as DeleteActivity;
            const updatedActivities = [...(state.activityList || []).filter(a => a.id !== removedId)];
            return {
                ...state,
                activityList: updatedActivities,
            }
        default:
            return state;
    }
};