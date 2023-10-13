import './NavBar.scss';
import Logo from '../ui/Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';

const NavBar = () => {
    const [searchBarVisibility, setSearchBarVisibility] = useState<boolean>(false);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const MD_BREAKPOINT = 768;

    const openSearchBarModal = () => {
        setSearchBarVisibility(true);
    };

    const closeSearchBarModal = () => {
        setSearchBarVisibility(false);
    };

    const handleResize = () => {
        if (window.innerWidth > MD_BREAKPOINT) {
            setSearchBarVisibility(false);
        }
    };

    return (
        <>
            <nav>
                <Logo />

                <SearchBar />
                <div className="links-container">
                    <a className="nav-link" id="search-link" onClick={() => openSearchBarModal()}>
                        <i className="las la-search"></i>
                    </a>

                    <Link to="/auth/login" className="nav-link" id="account-link">
                        <i className="lar la-user-circle"></i>
                    </Link>

                    <a className="nav-link" id="wishlist-link">
                        <i className="lar la-heart"></i>
                    </a>

                    <a className="nav-link" id="cart-link">
                        <i className="las la-shopping-bag"></i>
                    </a>

                    {currentUser ? <div onClick={() => signOutUser()}>Log out</div> : null}
                </div>
            </nav>

            <Modal isOpen={searchBarVisibility} closeModal={closeSearchBarModal} width="70vw">
                <SearchBar />
            </Modal>
        </>
    );
};

export default NavBar;
