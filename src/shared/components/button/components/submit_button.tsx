import React, { FC } from 'react';
import './../sass/submit_button.sass';

interface SubmitButtonProps {
    onClick: () => void;
    text: string;
    intent?: 'negative';
}

const SubmitButton: FC<SubmitButtonProps> = props => {
    return (
        <button className={`submit-button ${!!props.intent ? props.intent : ''}`} onClick={() => props.onClick()}>
            {props.text}
        </button>
    );
};

export default SubmitButton;
