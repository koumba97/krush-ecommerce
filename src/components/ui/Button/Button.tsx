import { Colors } from '../../../types/Colors';
import './Button.scss';

interface IProp {
    children: any;
    type?: 'button' | 'submit' | 'reset';
    color?: Colors;
    icon?: any;
}

const Button = ({ children, type = 'button', color = Colors.primary, icon }: IProp) => {
    return (
        <button className={`${color} button`} type={type}>
            {icon ? <i className={`${icon} icon`}></i> : null}
            {children}
        </button>
    );
};

export default Button;
