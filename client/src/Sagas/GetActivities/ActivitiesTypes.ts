import { Action } from "@reduxjs/toolkit";
import { IActivity } from "../../app/models";

export type GetActivitiesInitiateAction = Action<string>;
export type GetActivityDetailsInitiateAction = Action<string> & {
    activityId: string;
};
export type CreateActivityInitiateAction = Action<string> & {
    newActivity: IActivity;
};
export type UpdateActivityInitiateAction = Action<string> & {
    activity: IActivity;
};
export type DeleteActivityInitiateAction = Action<string> & {
    removedId: string;
};

export const GET_ACTIVITIES_INITIATE = "SAGAS/GET_ACTIVITIES_INITIATE";
export const GET_ACTIVITY_DETAILS_INITIATE = "SAGAS/GET_ACTIVITY_DETAILS_INITIATE";
export const CREATE_ACTIVITY_INITIATE = "SAGAS/CREATE_ACTIVITY";
export const UPDATE_ACTIVITY_INITIATE = "SAGAS/UPDATE_ACTIVITY_INITIATE";
export const DELETE_ACTIVITY_INITIATE = "SAGAS/DELETE_ACTIVITY_INITIATE";