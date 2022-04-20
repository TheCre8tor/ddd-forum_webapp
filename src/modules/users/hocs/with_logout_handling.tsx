import { FC, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../../shared/infrastructure/store/hooks';
import { logout } from '../store/operators';

function withLogoutHandling(WrappedComponent: any) {
    const HOC: FC = props => {
        const dispatch = useAppDispatch();

        const { isLoggingOutSuccess, isLoggingOutFailure, error } = useAppSelector(state => state.Users);

        const handleLogout = (): void => {
            dispatch(logout());
            dispatch({ type: '' });
        };

        const afterSuccessfulLogout = useCallback(() => {
            if (isLoggingOutSuccess) {
                return toast.success('Logged out! 🤠', {
                    autoClose: 3000
                });
            }
        }, [isLoggingOutSuccess]);

        const afterFailedLogout = useCallback(() => {
            if (isLoggingOutFailure) {
                return toast.error(`Had some trouble logging out! ${error} 🤠`, {
                    autoClose: 3000
                });
            }
        }, [isLoggingOutFailure, error]);

        useEffect(() => {
            afterSuccessfulLogout();
            afterFailedLogout();
        }, [afterSuccessfulLogout, afterFailedLogout]);

        return <WrappedComponent {...props} logout={() => handleLogout()} />;
    };

    return HOC;
}

export default withLogoutHandling;
