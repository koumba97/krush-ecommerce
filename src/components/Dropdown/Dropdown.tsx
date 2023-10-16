import { useState } from 'react';
import './Dropdown.scss';

interface IProp {
    children: any;
    triggerItem: any;
}
const Dropdown = ({ children, triggerItem }: IProp) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const toogleDropdown = () => {
        setDropdownVisibility(!dropdownVisibility);
    };
    return (
        <div className="dropdown">
            <div onClick={toogleDropdown}>{triggerItem}</div>
            <div className="content" style={!dropdownVisibility ? { display: 'none' } : {}}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
