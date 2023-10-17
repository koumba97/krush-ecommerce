import './NavBar.scss';
import Logo from '../ui/Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../ui/Modal/Modal';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import { Link } from 'react-router-dom';
import Dropdown from '../ui/Dropdown/Dropdown';
import CartIcon from '../ui/CartIcon/CartIcon';

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

                    <Dropdown
                        triggerItem={
                            <div className="nav-link" id="profile-link">
                                <i className="lar la-user-circle"></i>
                            </div>
                        }
                    >
                        {currentUser ? (
                            <div>
                                <Link to="/profile" className="dropdown-item">
                                    <i className="las la-user dropdown-item-icon"></i>
                                    <span>Profile</span>
                                </Link>
                                <div className="dropdown-item" onClick={() => signOutUser()}>
                                    <i className="las la-sign-out-alt dropdown-item-icon"></i>
                                    <span>Log out</span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <Link to="/register" className="dropdown-item">
                                    <i className="las la-user-plus dropdown-item-icon"></i>
                                    <span>Join</span>
                                </Link>
                                <Link to="/login" className="dropdown-item">
                                    <i className="las la-sign-in-alt dropdown-item-icon"></i>
                                    <span>Sign in</span>
                                </Link>
                            </div>
                        )}
                    </Dropdown>

                    <a className="nav-link" id="wishlist-link">
                        <i className="lar la-heart"></i>
                    </a>

                    <CartIcon className="nav-link" id="cart-link" itemAmount={1} />
                </div>
            </nav>

            <Modal isOpen={searchBarVisibility} closeModal={closeSearchBarModal} width="70vw">
                <SearchBar />
            </Modal>
        </>
    );
};

export default NavBar;
