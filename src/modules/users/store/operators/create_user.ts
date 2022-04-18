import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';

function createUser(email: string, username: string, password: string) {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.creatingUser());

        const result = await userService.createUser(email, username, password);

        if (result.isLeft()) {
            const error = result.value;

            dispatch(actionCreators.creatingUserFailure(error));
        } else {
            dispatch(actionCreators.creatingUserSuccess());
        }
    };
}

export { createUser };
