function SearchBar({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    {/*name search*/}
                    <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label">Search Recipes</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by recipe name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    {/*category*/}
                    <div className="col-md-6">
                        <label className="form-label">Filter by Category</label>
                        <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="All">All Categories</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SearchBar;