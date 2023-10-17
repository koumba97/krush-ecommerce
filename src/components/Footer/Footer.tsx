import Logo from '../ui/Logo/Logo';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="main-content">
                <p>© 2023</p>
                <Logo />
            </div>

            <p className="dev">Developed by Koumba KEITA</p>
        </footer>
    );
};

export default Footer;
