import { useRef, useState } from 'react';
import './Dropdown.scss';

interface IProp {
    children: any;
    triggerItem: any;
}
const Dropdown = ({ children, triggerItem }: IProp) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const dropdownElement = useRef<HTMLDivElement>(null);

    const toogleDropdown = () => {
        setDropdownVisibility(!dropdownVisibility);
    };

    const closeOpenDropdown = (e: any) => {
        if (dropdownElement.current && dropdownVisibility && !dropdownElement.current.contains(e.target)) {
            setDropdownVisibility(false);
        }
    };
    document.addEventListener('mousedown', closeOpenDropdown);

    return (
        <div className="dropdown" ref={dropdownElement}>
            <div onClick={toogleDropdown}>{triggerItem}</div>
            <div className="content" style={!dropdownVisibility ? { display: 'none' } : {}}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
