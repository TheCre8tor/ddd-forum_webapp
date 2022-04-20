import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../shared/components/button';
import { TextInput } from '../../../../../shared/components/text_input';

type TemplateType = 'login' | 'signup';

interface OnboardingTemplateProps {
    type: TemplateType;
    updateFormField: (fieldName: string, value: string) => void;
    onSubmit: () => void;
}

function getRedirectTextName(type: TemplateType): string {
    return type === 'login' ? 'Signup' : 'Login';
}

function getRedirectText(type: TemplateType): string {
    return type === 'signup' ? 'already have an account?' : "don't have an account?";
}

function getRedirectLocation(type: TemplateType): string {
    return type === 'signup' ? '/login' : '/join';
}

function getTitle(type: TemplateType) {
    return type === 'signup' ? 'Create account' : 'Log in';
}

const OnboardingTemplate: FC<OnboardingTemplateProps> = props => {
    function handleOnChange(fieldName: string, value: string) {
        props.updateFormField(fieldName, value);
    }

    return (
        <div className="onboard-container">
            <p className="title">{getTitle(props.type)}</p>
            <br />

            {props.type === 'signup' && (
                <TextInput type="text" fieldName="username" placeholder="username" onChange={handleOnChange} />
            )}

            <TextInput type="text" fieldName="email" placeholder="email" onChange={handleOnChange} />

            <div className="submit-container">
                <div className="message">
                    <p>{getRedirectText(props.type)}</p>

                    <Link to={getRedirectLocation(props.type)}>{getRedirectTextName(props.type)}</Link>
                </div>

                <Button text="Submit" onClick={() => props.onSubmit()} />
            </div>
        </div>
    );
};

export default OnboardingTemplate;
