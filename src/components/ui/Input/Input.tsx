import { useState } from 'react';

interface IProps {
    type: 'text' | 'number' | 'password' | 'email';
    label: string;
    defaultValue: string | number;
    required: boolean;
    name: string;
}
const Input = ({ type, label, defaultValue, required, name }: IProps) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const value = inputValue;
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(value);

        setInputValue(value);
    };

    return (
        <>
            <label>{label}</label>
            <input type={type} onChange={handleChange} value={value} name={name} required={required}></input>
        </>
    );
};

export default Input;
