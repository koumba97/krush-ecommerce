import './Logo.scss';
import imgLogo from '../../assets/images/krush-logo.png';

const Logo = () => {
    return (
        <div className="krush-logo">
            <img src={imgLogo} width={24} height={24} alt="Krush logo" />
            <p className="logo-text">Krush.</p>
        </div>
    );
};

export default Logo;
