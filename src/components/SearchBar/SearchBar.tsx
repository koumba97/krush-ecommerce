import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for items and brands" />
            <i className="las la-search"></i>
        </div>
    )
}

export default SearchBar
