import { Store } from 'redux';
import { getUserProfile } from '../../../modules/users/store/operators/get_user_profile';
import { AppDispatch } from './store';

function initialReduxStartupScript(store: Store): void {
    const dispatch: AppDispatch = store.dispatch;

    dispatch(getUserProfile());
}

export { initialReduxStartupScript };
