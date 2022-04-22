import React, { FC, useCallback, useEffect, Fragment } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../../shared/infrastructure/store/hooks';
import { getUserProfile, login } from '../store/operators';

interface withLoginHandlingProps {
    history: NavigateFunction;
}

function withLoginHandling(WrappedComponent: any) {
    const HOC: FC<withLoginHandlingProps> = props => {
        const users = useAppSelector(state => state.Users);
        const dispatch = useAppDispatch();

        const handleLogin = (email: string, password: string) => {
            dispatch(login(email, password));
        };

        const handleLoginProps = (email: string, password: string) => {
            return handleLogin(email, password);
        };

        const afterSuccessfulLogin = useCallback(() => {
            if (users.isLoggingInSuccess) {
                dispatch(getUserProfile());

                setTimeout(() => {
                    props.history('/', { replace: true });
                }, 3000);

                return toast.success('Logged in! 🤠', {
                    autoClose: 3000
                });
            }
        }, [dispatch, props, users.isLoggingInSuccess]);

        const afterFailedLogin = useCallback(() => {
            if (users.isLoggingInFailure) {
                const error = users.error;

                console.log(error);
                return toast.error(`Had some trouble logging in! ${error} 🤠`, {
                    autoClose: 1000
                });
            }
        }, [users.isLoggingInFailure, users.error]);

        useEffect(() => {
            afterSuccessfulLogin();
            afterFailedLogin();
        }, [afterSuccessfulLogin, afterFailedLogin]);

        return (
            <Fragment>
                <ToastContainer />
                <WrappedComponent
                    {...props}
                    login={(email: string, password: string) => handleLoginProps(email, password)}
                />
            </Fragment>
        );
    };

    return HOC;
}

export default withLoginHandling;
