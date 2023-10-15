import './NavBar.scss';
import Logo from '../ui/Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import { CDropdown, CDropdownToggle, CDropdownMenu } from '@coreui/react';
import { Link } from 'react-router-dom';

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

                    <CDropdown variant="nav-item">
                        <CDropdownToggle size="lg">
                            <i className="lar la-user-circle"></i>
                        </CDropdownToggle>

                        {currentUser ? (
                            <CDropdownMenu>
                                <Link to="/profile" className="dropdown-item">
                                    <i className="las la-user dropdown-item-icon"></i>
                                    <span>Profile</span>
                                </Link>
                                <div className="dropdown-item" onClick={() => signOutUser()}>
                                    <i className="las la-sign-out-alt dropdown-item-icon"></i>
                                    <span>Log out</span>
                                </div>
                            </CDropdownMenu>
                        ) : (
                            <CDropdownMenu>
                                <Link to="/register" className="dropdown-item">
                                    <i className="las la-user-plus dropdown-item-icon"></i>
                                    <span>Join</span>
                                </Link>
                                <Link to="/login" className="dropdown-item">
                                    <i className="las la-sign-in-alt dropdown-item-icon"></i>
                                    <span>Sign in</span>
                                </Link>
                            </CDropdownMenu>
                        )}
                    </CDropdown>

                    <a className="nav-link" id="wishlist-link">
                        <i className="lar la-heart"></i>
                    </a>

                    <a className="nav-link" id="cart-link">
                        <i className="las la-shopping-bag"></i>
                    </a>
                </div>
            </nav>

            <Modal isOpen={searchBarVisibility} closeModal={closeSearchBarModal} width="70vw">
                <SearchBar />
            </Modal>
        </>
    );
};

export default NavBar;
