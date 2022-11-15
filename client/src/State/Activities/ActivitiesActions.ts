import { IActivity } from "../../app/models";
import {
    CreateActivityAction,
    CREATE_ACTIVITY,
    DeleteActivity,
    DELETE_ACTIVITY,
    GetActivitiesAction,
    GetSelectedActivityAction,
    GET_ACTIVITIES,
    GET_SELECTED_ACTIVITY,
    SetEditMode,
    SetLoading,
    SET_EDIT_MODE,
    SET_LOADING,
    UpdateActivity,
    UPDATE_ACTIVITY,
} from "./ActivitiesTypes";

export const getActivities = (activities: IActivity[]): GetActivitiesAction => ({
    type: GET_ACTIVITIES,
    activities,
});

export const getSelectedActivity = (selectedActivity: IActivity | undefined): GetSelectedActivityAction => ({
    type: GET_SELECTED_ACTIVITY,
    selectedActivity,
});

export const createActivity = (newActivity: IActivity): CreateActivityAction => ({
    type: CREATE_ACTIVITY,
    newActivity,
});

export const setEditMode = (editMode: boolean): SetEditMode => ({
    type: SET_EDIT_MODE,
    editMode,
});

export const setLoading = (isLoading: boolean): SetLoading => ({
    type: SET_LOADING,
    isLoading,
});

export const updateActivity = (activity: IActivity): UpdateActivity => ({
    type: UPDATE_ACTIVITY,
    activity,
})

export const deleteActivity = (removedId: string): DeleteActivity => ({
    type: DELETE_ACTIVITY,
    removedId,
});