export type UserActionType =
    | 'GETTING_USER_PROFILE'
    | 'GETTING_USER_PROFILE_SUCCESS'
    | 'GETTING_USER_PROFILE_FAILURE'
    | 'LOGGING_IN'
    | 'LOGGING_IN_SUCCESS'
    | 'LOGGING_IN_FAILURE'
    | 'LOGGING_OUT'
    | 'LOGGING_OUT_SUCCESS'
    | 'LOGGING_OUT_FAILURE'
    | 'CREATING_USER'
    | 'CREATING_USER_SUCCESS'
    | 'CREATING_USER_FAILURE';

export const GETTING_USER_PROFILE: UserActionType = 'GETTING_USER_PROFILE';
export const GETTING_USER_PROFILE_SUCCESS: UserActionType = 'GETTING_USER_PROFILE_SUCCESS';
export const GETTING_USER_PROFILE_FAILURE: UserActionType = 'GETTING_USER_PROFILE_FAILURE';

export const LOGGING_IN: UserActionType = 'LOGGING_IN';
export const LOGGING_IN_SUCCESS: UserActionType = 'LOGGING_IN_SUCCESS';
export const LOGGING_IN_FAILURE: UserActionType = 'LOGGING_IN_FAILURE';

export const LOGGING_OUT: UserActionType = 'LOGGING_OUT';
export const LOGGING_OUT_SUCCESS: UserActionType = 'LOGGING_OUT_SUCCESS';
export const LOGGING_OUT_FAILURE: UserActionType = 'LOGGING_OUT_FAILURE';

export const CREATING_USER: UserActionType = 'CREATING_USER';
export const CREATING_USER_SUCCESS: UserActionType = 'CREATING_USER_SUCCESS';
export const CREATING_USER_FAILURE: UserActionType = 'CREATING_USER_FAILURE';