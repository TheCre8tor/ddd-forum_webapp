import * as actions from './actions';
import { User } from '../../models/user';

export type UsersAction = { [key: string]: actions.UserActionType | any };

export function gettingUserProfile(): UsersAction {
    return { type: actions.GETTING_USER_PROFILE };
}

export function gettingUserProfileSuccess(user: User): UsersAction {
    return { type: actions.GETTING_USER_PROFILE_SUCCESS, user: user };
}

export function gettingUserProfileFailure(error: string): UsersAction {
    return { type: actions.GETTING_USER_PROFILE_FAILURE, error: error };
}

// Logging In Action Creators -->

export function logginIn(): UsersAction {
    return { type: actions.LOGGING_IN };
}

export function logginInSuccess(): UsersAction {
    return { type: actions.LOGGING_IN_SUCCESS };
}

export function loggingInFailure(error: string): UsersAction {
    return { type: actions.LOGGING_IN_FAILURE, error: error };
}

// Logging Out Action Creators -->

export function loggingOut(): UsersAction {
    return { type: actions.LOGGING_OUT };
}

export function loggingOutSuccess(): UsersAction {
    return { type: actions.LOGGING_OUT_SUCCESS };
}

export function loggingOutFailure(error: string): UsersAction {
    return { type: actions.LOGGING_OUT_FAILURE, error: error };
}

// Create User Action Creators -->

export function creatingUser(): UsersAction {
    return { type: actions.CREATING_USER };
}

export function creatingUserSuccess(): UsersAction {
    return { type: actions.CREATING_USER_SUCCESS };
}

export function creatingUserFailure(error: string): UsersAction {
    return { type: actions.CREATING_USER_FAILURE, error: error };
}