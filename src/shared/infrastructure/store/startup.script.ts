import { Store } from 'redux';
import { getUserProfile } from '../../../modules/users/store/operators/get_user_profile';

function initialReduxStartupScript(store: Store): void {
    //@ts-ignore
    store.dispatch(getUserProfile());

    console.log();
}

export { initialReduxStartupScript };
