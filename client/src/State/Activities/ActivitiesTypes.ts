import { Action } from "@reduxjs/toolkit";
import {
    Map as ImmmutableMap,
} from "immutable";

import { IActivity } from "../../app/models";

export interface IActivitiesReducerState {
    activities: IActivity[];
    selectedActivity: IActivity | null;
    loading: boolean;
    loadingInitial: boolean;
}

export type GetActivitiesAction = Action<string> & {
    activities: IActivity[];
};

export type LoadActivitiesAction = Action<string> & {
    loadingInitial: boolean;
};

export type SetLoadingAction = Action<string> & {
    loading: boolean;
}

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
    removedId: string;
};

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const LOAD_ACTIVITIES_INITIAL = "LOAD_ACTIVITIES_INITIAL";
export const SET_LOADING = "SET_LOADING";
export const GET_SELECTED_ACTIVITY = "GET_SELECTED_ACTIVITY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";