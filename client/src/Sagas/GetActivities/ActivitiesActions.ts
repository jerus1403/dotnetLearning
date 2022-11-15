import { IActivity } from "../../app/models";
import {
    CreateActivityInitiateAction,
    CREATE_ACTIVITY_INITIATE,
    DeleteActivityInitiateAction,
    DELETE_ACTIVITY_INITIATE,
    GetActivitiesInitiateAction,
    GetActivityDetailsInitiateAction,
    GET_ACTIVITIES_INITIATE,
    GET_ACTIVITY_DETAILS_INITIATE,
    UpdateActivityInitiateAction,
    UPDATE_ACTIVITY_INITIATE,
} from "./ActivitiesTypes";


export const getActivitiesInitiate = (): GetActivitiesInitiateAction => ({
    type: GET_ACTIVITIES_INITIATE,
});

export const getActivityDetailsInitiate = (activityId: string): GetActivityDetailsInitiateAction => ({
    type: GET_ACTIVITY_DETAILS_INITIATE,
    activityId,
});

export const createActivityInitiate = (newActivity: IActivity): CreateActivityInitiateAction => ({
    type: CREATE_ACTIVITY_INITIATE,
    newActivity,
});

export const updateActivityInitiate = (activity: IActivity): UpdateActivityInitiateAction => ({
    type: UPDATE_ACTIVITY_INITIATE,
    activity,
});

export const deleteActivityInitiate = (removedId: string): DeleteActivityInitiateAction => ({
    type: DELETE_ACTIVITY_INITIATE,
    removedId,
});