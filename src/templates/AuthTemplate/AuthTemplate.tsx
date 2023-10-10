import './AuthTemplate.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from '../../components/ui/Logo/Logo';

const AuthTemplate = () => {
    const location = useLocation();

    return (
        <div className="auth-view">
            <Logo size={40} />
            <div className="auth-container">
                <div className="links-container">
                    <Link to="/auth/register" className={location.pathname === '/auth/register' ? 'active' : ''}>
                        <h4>Register</h4>
                    </Link>

                    <Link to="/auth/login" className={location.pathname === '/auth/login' ? 'active' : ''}>
                        <h4>Sign In</h4>
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthTemplate;