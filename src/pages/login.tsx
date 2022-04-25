import React, { FC, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import withLoginHandling from '../modules/users/hocs/with_login_handling';
import { IUserOperators } from '../modules/users/store/operators';
import { Layout } from '../shared/layouts';

interface LoginPageProps extends IUserOperators {
    history: NavigateFunction;
}

const LoginPage: FC<LoginPageProps> = props => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const updateFormField = (fieldName: string, value: string) => {
        setState({ ...state, [fieldName]: value });
    };

    return (
        // todo: revisit this error later
        // @ts-ignore
        <Layout>
            <div className="header-container flex flex-row flex-center flex-even"></div>
        </Layout>
    );
};

export default withLoginHandling(LoginPage);
