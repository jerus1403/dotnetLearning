import {
    ClearCurrentContextAction,
    CLEAR_CURRENT_CONTEXT,
    SetCurrentContextAction,
    SET_CURRENT_CONTEXT,
} from "./UserViewTypes";


export const setCurrentContext = (
    contextKey: string,
): SetCurrentContextAction => ({
    type: SET_CURRENT_CONTEXT,
    contextKey,
});

export const clearCurrentContext = (): ClearCurrentContextAction => ({
    type: CLEAR_CURRENT_CONTEXT,
});