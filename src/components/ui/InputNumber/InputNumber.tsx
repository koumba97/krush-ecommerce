import { useState } from 'react';
import './InputNumber.scss';

interface IProp {
    value?: number;
    name: string;
    min?: number;
    max?: number;
    onChange?: Function;
}
const InputNumber = ({ value = 0, name, min, max, onChange }: IProp) => {
    const [inputValue, setInputValue] = useState(value);

    const INPUT_STEP = 1;

    const handleChange = (event: any) => {
        const { value } = event.target;
        setInputValue(value);

        if (onChange) {
            onChange({ name: name, value: inputValue });
        }
    };
    const increaseValue = () => {
        if ((max && inputValue + INPUT_STEP <= max) || max === undefined) {
            setInputValue(inputValue + INPUT_STEP);

            if (onChange) {
                onChange({ name: name, value: inputValue + INPUT_STEP });
            }
        }
    };

    const decreaseValue = () => {
        if ((min !== undefined && inputValue - INPUT_STEP >= min) || min === undefined) {
            setInputValue(inputValue - INPUT_STEP);

            if (onChange) {
                onChange({ name: name, value: inputValue - INPUT_STEP });
            }
        }
    };

    return (
        <div className="input-number">
            <input type="number" value={inputValue} min={min} max={max} onChange={handleChange} name={name} />
            <div className="input-control-container">
                <button onClick={increaseValue}>
                    <i className="las la-plus"></i>
                </button>
                <button onClick={decreaseValue}>
                    <i className="las la-minus"></i>
                </button>
            </div>
        </div>
    );
};

export default InputNumber;
