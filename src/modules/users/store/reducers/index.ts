import states from '../states';
import { UsersState } from '../state.interface';
import { UsersAction } from '../actions/action.creators';
// import { UserActionType } from '../actions/actions';
import { ReduxUtils } from '../../../../shared/utils/redux.utils';

function usersReducer(state: UsersState = states, action: UsersAction): UsersState {
    switch (action.type) {
        case 'GETTING_USER_PROFILE':
            return { ...state, ...ReduxUtils.reportEventStatus('isFetchingUser') };
        case 'GETTING_USER_PROFILE_SUCCESS':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isFetchingUser', true),
                user: action.payload,
                isAuthenticated: true
            };
        case 'GETTING_USER_PROFILE_FAILURE':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isFetchingUser', false)
            };

        case 'LOGGING_IN':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isLoggingIn')
            };
        case 'LOGGING_IN_SUCCESS':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isLoggingIn', true),
                isAuthenticated: true
            };
        case 'LOGGING_IN_FAILURE':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isLoggingIn', false),
                error: action.payload
            };
        case 'LOGGING_OUT':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isLoggingOut')
            };
        case 'LOGGING_OUT_SUCCESS':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isLoggingOut', true),
                isAuthenticated: false
            };
        case 'LOGGING_OUT_FAILURE':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isLoggingOut', false),
                error: action.payload
            };
        case 'CREATING_USER':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isCreatingUser')
            };
        case 'CREATING_USER_SUCCESS':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isCreatingUser', true)
            };
        case 'CREATING_USER_FAILURE':
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isCreatingUser', false),
                error: action.payload
            };
        default:
            return state;
    }
}

export default usersReducer;
