function SearchBar({ search, inStock, onSearch, onCheck }) {
    return (
        <div className="SearchBar">
            <input
                value={search}
                onChange={(event) => {
                    onSearch(event.target.value)
                }}
                className="form-control mb-1" type="text"
                placeholder="Search..."
            />

            <div className="form-check">
                <input
                    checked={inStock}
                    onChange={(event) => {
                        onCheck(event.target.checked)
                    }}
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                />
                <label className="form-check-label" for="checkbox">
                    Only show products in stock
                </label>
            </div>
            
        </div>
    )
}

export default SearchBar