import './Logo.scss';
import imgLogo from '../../../assets/images/krush-logo.png';
import { Link } from 'react-router-dom';

interface IProps {
    size?: number;
}
const LOGO_DEFAULT_SIZE = 24;
const LOGO_GAP_SIZE = 4;
const Logo = ({ size }: IProps) => {
    const logoSize = size ? size : LOGO_DEFAULT_SIZE;
    const logoGap = size ? size / LOGO_GAP_SIZE : LOGO_DEFAULT_SIZE / LOGO_GAP_SIZE;
    return (
        <Link to="/">
            <div style={{ gap: `${logoGap}px` }} className="krush-logo">
                <img src={imgLogo} width={logoSize} height={logoSize} alt="Krush logo" />
                <p style={{ fontSize: `${logoSize}px` }} className="logo-text">
                    Krush.
                </p>
            </div>
        </Link>
    );
};

export default Logo;
