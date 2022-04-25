import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';
import { getUserProfile } from './get_user_profile';

function login(email: string, password: string) {
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
