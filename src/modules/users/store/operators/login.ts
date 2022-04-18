import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';

function login(email: string, password: string) {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.logginIn());

        const result = await userService.login(email, password);

        if (result.isLeft()) {
            const error = result.value;

            dispatch(actionCreators.loggingInFailure(error));
        } else {
            dispatch(actionCreators.logginInSuccess());
        }
    };
}

export { login };
