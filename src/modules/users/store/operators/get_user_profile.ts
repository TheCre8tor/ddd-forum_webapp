import * as actionCreators from '../actions/action.creators';
import { userService } from '../../services/dependency.injection';

function getUserProfile() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingUserProfile);

        try {
            const user = await userService.getCurrentUserProfile();
            dispatch(actionCreators.gettingUserProfileSuccess(user));
        } catch (err: any) {
            let message = '';
            console.log(err);

            dispatch(actionCreators.gettingUserProfileFailure(message));
        }
    };
}

export { getUserProfile };
