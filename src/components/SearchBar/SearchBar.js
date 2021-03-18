const SearchBar = () => {
    return(
        <form action="/" method="get" className="header-search">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search users by login</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search users by login"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar; 