const Search = function () {
    return (
        <div className='search'>
            <input type="text" placeholder='Search Restaurants' className='search-input' />
            <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className='sort-by-price'>Sort by Price</button>
        </div>
    )
}

export default Search;