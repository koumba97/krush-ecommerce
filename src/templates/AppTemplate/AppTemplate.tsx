import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.tsx';
import Footer from '../../components/Footer/Footer.tsx';

const AppTemplate = () => {
    return (
        <div className="app">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppTemplate;
