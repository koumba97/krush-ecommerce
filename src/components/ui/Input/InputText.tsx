import './InputText.scss';
import { useState } from 'react';

interface IProps {
    type: 'text' | 'number' | 'password' | 'email';
    label?: string;
    defaultValue?: string | number;
    value: string | number | undefined;
    placeholder: string;
    required: boolean;
    name: string;
    icon?: string;
    onChange?: Function;
}
const InputText = ({ type, label, defaultValue, value, placeholder, required, name, icon, onChange }: IProps) => {
    const [_inputValue, setInputValue] = useState(defaultValue);

    const handleChange = (event: any) => {
        const { value } = event.target;
        setInputValue(value);

        if (onChange) {
            onChange({ name: name, value: value });
        }
    };

    return (
        <div className="input-text">
            {label ? <label>{label}</label> : null}

            <div className="input-container">
                {icon ? <i className={icon}></i> : null}
                <input
                    type={type}
                    onChange={handleChange}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                ></input>
            </div>
        </div>
    );
};

export default InputText;
