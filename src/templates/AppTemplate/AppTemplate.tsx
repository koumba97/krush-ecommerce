import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.tsx';
import Footer from '../../components/Footer/Footer.tsx';

const AppTemplate = () => {
    return (
        <div className="app">
            <NavBar />
            <div className="page-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default AppTemplate;
