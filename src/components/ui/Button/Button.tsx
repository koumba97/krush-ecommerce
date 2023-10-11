import { Colors } from '../../../types/Colors';
import './Button.scss';

interface IProp {
    children: any;
    type?: 'button' | 'submit' | 'reset';
    color?: Colors;
}

const Button = ({ children, type = 'button', color = Colors.primary }: IProp) => {
    return (
        <button className={`${color} button`} type={type}>
            {children}
        </button>
    );
};

export default Button;
