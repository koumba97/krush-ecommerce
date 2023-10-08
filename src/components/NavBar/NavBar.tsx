import './NavBar.scss'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Modal from '../Modal/Modal'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [searchBarVisibility, setSearchBarVisibility] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const MD_BREAKPOINT = 768

    const openSearchBarModal = () => {
        setSearchBarVisibility(true)
    }

    const closeSearchBarModal = () => {
        setSearchBarVisibility(false)
    }

    const handleResize = () => {
        if (window.innerWidth > MD_BREAKPOINT) {
            setSearchBarVisibility(false)
        }
    }

    return (
        <>
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <SearchBar />
                <div className="links-container">
                    <a className="nav-link" id="search-link" onClick={() => openSearchBarModal()}>
                        <i className="las la-search"></i>
                    </a>

                    <Link to="/sign-in" className="nav-link" id="account-link">
                        <i className="lar la-user-circle"></i>
                    </Link>

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
    )
}

export default NavBar
