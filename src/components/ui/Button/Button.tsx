import { Colors } from '../../../types/Colors';
import './Button.scss';

interface IProp {
    children: any;
    type?: 'button' | 'submit' | 'reset';
    color?: Colors;
    icon?: any;
    onClick?: Function;
}

const Button = ({ children, type = 'button', color = Colors.primary, icon, onClick }: IProp) => {
    const handleClick = () => {
        if (onClick) onClick();
    };
    return (
        <button className={`${color} button`} type={type} onClick={handleClick}>
            {icon ? <i className={`${icon} icon`}></i> : null}
            {children}
        </button>
    );
};

export default Button;
