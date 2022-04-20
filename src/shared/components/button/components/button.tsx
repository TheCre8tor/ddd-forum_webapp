import React, { FC } from 'react';
import './../sass/button.sass';

interface ButtonProps {
    text: any;
    onClick: () => void;
}

const Button: FC<ButtonProps> = props => {
    return (
        <div className="button" onClick={() => props.onClick()}>
            {props.text}
        </div>
    );
};

export default Button;
