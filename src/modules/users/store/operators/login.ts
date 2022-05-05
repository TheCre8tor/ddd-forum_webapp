import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';
import { getUserProfile } from './get_user_profile';
import { AppThunkAction } from '../../../../shared/infrastructure/store/store';

function login(email: string, password: string): AppThunkAction {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.logginIn());

        const result = await userService.login(email, password);

        if (result.isLeft()) {
            const error = result.value;

            dispatch(actionCreators.loggingInFailure(error));
        } else {
            dispatch(actionCreators.logginInSuccess());
            dispatch(getUserProfile());
        }
    };
}

export { login };
