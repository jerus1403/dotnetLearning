import { Action } from "@reduxjs/toolkit";

import { IActivity } from "../../app/models";

export interface IActivitiesReducerState {
    activityList: IActivity[] | false;
    selectedActivity: IActivity | undefined;
    editMode: boolean;
    isLoading: boolean;
}

export type GetActivitiesAction = Action<string> & {
    activities: IActivity[];
};

export type GetSelectedActivityAction = Action<string> & {
    selectedActivity: IActivity | undefined;
};

export type CreateActivityAction = Action<string> & {
    newActivity: IActivity;
};

export type SetEditMode = Action<string> & {
    editMode: boolean;
};

export type SetLoading = Action<string> & {
    isLoading: boolean;
};

export type UpdateActivity = Action<string> & {
    activity: IActivity;
};

export type DeleteActivity = Action<string> & {
    removedId: string;
};

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_SELECTED_ACTIVITY = "GET_SELECTED_ACTIVITY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const SET_LOADING = "SET_LOADING";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";