import React, { FC } from 'react';

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
    return type === 'signup' ? '/login' : 'join';
}

function getTitle(type: TemplateType) {
    return type === 'signup' ? 'Create account' : 'Log in';
}

const OnboardingTemplate: FC<OnboardingTemplateProps> = props => {
    return (
        <div className="onboard-container">
            <p className="title">{getTitle(props.type)}</p>
            <br />

            {props.type === 'signup' && <TextInput />}
        </div>
    );
};
