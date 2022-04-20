import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';
import { Dispatch } from 'redux';
import { UsersAction } from '../actions/action.creators';
import { AppThunkAction } from '../../../../shared/infrastructure/store/store';

const logout = (): AppThunkAction => {
    return async (dispatch: Dispatch<UsersAction>, getState?: any) => {
        dispatch(actionCreators.loggingOut());

        const result = await userService.logout();

        if (result.isLeft()) {
            const error = result.value;

            dispatch(actionCreators.loggingOutFailure(error));
        } else {
            dispatch(actionCreators.loggingOutSuccess());
        }
    };
};

export { logout };
