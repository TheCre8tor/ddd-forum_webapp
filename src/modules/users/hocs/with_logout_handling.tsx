import { FC, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IUserOperators } from '../store/operators';
import { UsersState } from '../store/state.interface';

interface withLogoutHandlingProps extends IUserOperators {
    users: UsersState;
}

function withLogoutHandling(WrappedComponent: any) {
    const HOC: FC<withLogoutHandlingProps> = props => {
        const handleLogout = (): void => {
            props.logout();
        };

        const afterSuccessfulLogout = useCallback(() => {
            const currentProps: withLogoutHandlingProps = props;

            if (currentProps.users.isLoggingOutSuccess) {
                return toast.success('Logged out! 🤠', {
                    autoClose: 3000
                });
            }
        }, [props]);

        const afterFailedLogout = useCallback(() => {
            const currentProps: withLogoutHandlingProps = props;

            if (currentProps.users.isLoggingOutFailure) {
                const error = currentProps.users.error;

                return toast.error(`Had some trouble logging out! ${error} 🤠`, {
                    autoClose: 3000
                });
            }
        }, [props]);

        useEffect(() => {
            afterSuccessfulLogout();
            afterFailedLogout();
        }, [afterSuccessfulLogout, afterFailedLogout]);

        return <WrappedComponent {...props} logout={() => handleLogout()} />;
    };

    return HOC;
}

export default withLogoutHandling;
