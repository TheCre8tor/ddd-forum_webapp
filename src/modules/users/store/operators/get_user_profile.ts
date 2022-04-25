import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';
import { Dispatch } from 'redux';
import { UsersAction } from '../actions/action.creators';
import { AppThunkAction } from '../../../../shared/infrastructure/store/store';

function getUserProfile(): AppThunkAction {
    return async (dispatch: Dispatch<UsersAction>, getState?: any) => {
        dispatch(actionCreators.gettingUserProfile());

        try {
            const user = await userService.getCurrentUserProfile();

            dispatch(actionCreators.gettingUserProfileSuccess(user));
        } catch (err: any) {
            let message = err.data ? err.data.error : '';

            dispatch(actionCreators.gettingUserProfileFailure(message));
        }
    };
}

export { getUserProfile };
