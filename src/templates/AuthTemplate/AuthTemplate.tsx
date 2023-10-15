import './AuthTemplate.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from '../../components/ui/Logo/Logo';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

const AuthTemplate = () => {
    const location = useLocation();

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser) {
            redirectUser();
        }
    });

    const redirectUser = () => {
        return (document.location.href = '/');
    };

    return (
        <div className="auth-view">
            <Logo size={40} />
            <div className="auth-container">
                <div className="links-container">
                    <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                        <h4>Sign In</h4>
                    </Link>

                    <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>
                        <h4>Register</h4>
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthTemplate;
