import React, { FC, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { OnboardingTemplate } from '../modules/users/components/onboarding';
import withLoginHandling from '../modules/users/hocs/with_login_handling';
import { IUserOperators } from '../modules/users/store/operators';
import Header from '../shared/components/header/components/header';
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

    const isFormValid = () => {
        const { email, password } = state;

        if (!!email === false) {
            toast.error('Yeahhhhh, you forgot to include username. 🤠', {
                autoClose: 3000
            });

            return false;
        }

        if (!!password === false) {
            toast.error('Yeahhhhh, you forgot to include your password 🤠', {
                autoClose: 3000
            });

            return false;
        }

        return true;
    };

    const onSubmit = async () => {
        if (isFormValid()) {
            const { email, password } = state;
            props.login(email, password);
        }
    };

    return (
        // todo: revisit this error later
        // @ts-ignore
        <Layout>
            <div className="header-container flex flex-row flex-center flex-even">
                <Header title="Domain-Driven Designers" subtitle="Where awesome Domain-Driven Designers are made" />
            </div>

            <OnboardingTemplate
                type="login"
                updateFormField={(fieldName: string, value: string) => updateFormField(fieldName, value)}
                onSubmit={() => onSubmit()}
            />
        </Layout>
    );
};

export default withLoginHandling(LoginPage);
