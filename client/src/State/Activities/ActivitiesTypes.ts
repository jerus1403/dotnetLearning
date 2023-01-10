import { Action } from "@reduxjs/toolkit";

import { IActivity, IActivityGroup } from "../../app/models";

export interface IActivitiesReducerState {
    activityGroups: IActivityGroup[];
    selectedActivity: IActivity | null;
    loading: boolean;
    loadingInitial: boolean;
    loadingSelectedActivity: boolean;
}

export type GetActivitiesAction = Action<string> & {
    activityGroups: IActivityGroup[];
};

export type LoadActivitiesAction = Action<string> & {
    loadingInitial: boolean;
};

export type SetLoadingAction = Action<string> & {
    loading: boolean;
};

export type SetLoadingSelectedActivityAction = Action<string> & {
    loadingSelectedActivity: boolean;
};

export type GetSelectedActivityAction = Action<string> & {
    selectedActivity: IActivity | null;
};

export type CreateActivityAction = Action<string> & {
    newActivity: IActivity;
};

export type UpdateActivityAction = Action<string> & {
    activity: IActivity;
};

export type DeleteActivityAction = Action<string> & {
    removeActivity: IActivity;
};

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const LOAD_ACTIVITIES_INITIAL = "LOAD_ACTIVITIES_INITIAL";
export const SET_LOADING = "SET_LOADING";
export const SET_LOADING_SELECTED_ACTIVITY = "SET_LOADING_SELECTED_ACTIVITY";
export const GET_SELECTED_ACTIVITY = "GET_SELECTED_ACTIVITY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";