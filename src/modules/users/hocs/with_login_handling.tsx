import { FC, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IUserOperators } from '../store/operators';
import { UsersState } from '../store/state.interface';

interface withLoginHandlingProps extends IUserOperators {
    users: UsersState;
    history: any;
}

function withLoginHandling(WrappedComponent: any) {
    const HOC: FC<withLoginHandlingProps> = props => {
        const handleLogin = (email: string, password: string) => {
            props.login(email, password);
        };

        const handleLoginProps = (email: string, password: string) => {
            return handleLogin(email, password);
        };

        const afterSuccessfulLogin = useCallback(() => {
            const currentProps: withLoginHandlingProps = props;

            if (currentProps.users.isLoggingInSuccess) {
                props.getUserProfile();

                setTimeout(() => {
                    props.history.push('/');
                }, 3000);

                return toast.success('Logged in! 🤠', {
                    autoClose: 3000
                });
            }
        }, [props]);

        const afterFailedLogin = useCallback(() => {
            const currentProps: withLoginHandlingProps = props;

            if (currentProps.users.isLoggingInFailure) {
                const error = currentProps.users.error;

                return toast.error(`Had some trouble logging in! ${error} 🤠`, {
                    autoClose: 3000
                });
            }
        }, [props]);

        useEffect(() => {
            afterSuccessfulLogin();
            afterFailedLogin();
        }, [afterSuccessfulLogin, afterFailedLogin]);

        return (
            <WrappedComponent
                {...props}
                login={(email: string, password: string) => handleLoginProps(email, password)}
            />
        );
    };

    return HOC;
}

export default withLoginHandling;
