import { User } from '../models/user';
import { UsersState } from './state.interface';

const initialUserState: UsersState = {
    user: {} as User,
    isAuthenticated: false,

    isFetchingUser: false,
    isFetchingUserSuccess: false,
    isFetchingUserFailure: false,

    isLoggingIn: false,
    isLoggingInSuccess: false,
    isLoggingInFailure: false,

    isLoggingOut: false,
    isLoggingOutSuccess: false,
    isLoggingOutFailure: false,

    isCreatingUser: false,
    isCreatingUserSuccess: false,
    isCreatingUserFailure: false,

    error: ''
};

export default initialUserState;
