import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';

function logout() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.loggingOut());

        const result = await userService.logout();

        if (result.isLeft()) {
            const error = result.value;

            dispatch(actionCreators.loggingOutFailure(error));
        } else {
            dispatch(actionCreators.loggingOutSuccess());
        }
    };
}

export { logout };
