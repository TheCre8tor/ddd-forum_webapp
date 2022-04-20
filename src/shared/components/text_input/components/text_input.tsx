import React, { FC } from 'react';
import './../styles/TextInput.sass';

interface TextInputProps {
    placeholder: string;
    fieldName: string;
    onChange: (fieldName: string, value: string) => void;
    type: string;
}

const TextInput: FC<TextInputProps> = props => {
    const { placeholder, fieldName, onChange, type } = props;

    return (
        <input
            className="text-input"
            placeholder={placeholder}
            type={type}
            onChange={input => onChange(fieldName, input.target.value)}
        />
    );
};

export default TextInput;
