import React, { FC, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import withLoginHandling from '../modules/users/hocs/with_login_handling';
import { IUserOperators } from '../modules/users/store/operators';

interface LoginPageProps extends IUserOperators {
    history: NavigateFunction;
}

const LoginPage: FC<LoginPageProps> = props => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    return (
        <div className="" onClick={() => props.login('goodluck@gmail.co', 'test1234')}>
            This is login page
        </div>
    );
};

export default withLoginHandling(LoginPage);
