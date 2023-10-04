import './NavBar.scss'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Modal from '../Modal/Modal'
import { useState } from 'react'

const NavBar = () => {
    const [searchBarVisibility, setSearchBarVisibility] = useState<boolean>(false)

    const openSearchBarModal = () => {
        setSearchBarVisibility(true)
        console.log(searchBarVisibility)
    }

    const closeSearchBarModal = () => {
        setSearchBarVisibility(false)
    }

    return (
        <>
            <nav>
                <Logo />
                <SearchBar />
                <div className="links-container">
                    <a className="nav-link" id="search-link" onClick={() => openSearchBarModal()}>
                        <i className="las la-search"></i>
                    </a>
                    <a className="nav-link" id="account-link">
                        <i className="lar la-user-circle"></i>
                    </a>

                    <a className="nav-link" id="wishlist-link">
                        <i className="lar la-heart"></i>
                    </a>

                    <a className="nav-link" id="cart-link">
                        <i className="las la-shopping-bag"></i>
                    </a>
                </div>
                <p>{searchBarVisibility}</p>
            </nav>

            {/* <ToggleSearchBar isOpen={searchBarVisibility} /> */}
            <Modal isOpen={searchBarVisibility} closeModal={closeSearchBarModal}>
                <h1>ok</h1>
            </Modal>
        </>
    )
}

interface ToggleSearchBarProp {
    isOpen: boolean
}
const ToggleSearchBar = ({ isOpen }: ToggleSearchBarProp) => {
    return (
        <Modal isOpen={isOpen}>
            <h1>ok</h1>
        </Modal>
    )
}
export default NavBar
