import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { spoonacularAPI } from '../utils/Api';
import useDebounce from "../hooks/UseDebounce";

function BrowseRecipes() {
    const [recipes, setRecipes] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [selectedDiet, setSelectedDiet] = useState('');

    const debouncedQuery = useDebounce(searchQuery)

    // Fetch recipes when filters change
    useEffect(() => {
        fetchRecipes();
    }, [debouncedQuery, selectedCuisine, selectedDiet]);

    const fetchRecipes = async () => {
        const data = await spoonacularAPI.searchRecipes(
            searchQuery,
            selectedCuisine,
            selectedDiet,
            3
        );
        setRecipes(data.results || []);
    };


    // Filter recipes on client side (memoized for performance)
    const filteredRecipes = useMemo(() => {
        return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    }, [recipes]);

    return (
        <div className="container my-5">
            <h1 className="mb-4">Browse Recipes</h1>

            {/* Search and Filter Section */}
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="search" className="form-label">Search</label>
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="cuisine" className="form-label">Cuisine</label>
                            <select
                                className="form-select"
                                id="cuisine"
                                value={selectedCuisine}
                                onChange={(e) => setSelectedCuisine(e.target.value)}
                            >
                                <option value="">All Cuisines</option>
                                <option value="italian">Italian</option>
                                <option value="chinese">Chinese</option>
                                <option value="japanese">Japanese</option>
                                <option value="french">French</option>
                                <option value="thai">Thai</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="diet" className="form-label">Diet</label>
                            <select
                                className="form-select"
                                id="diet"
                                value={selectedDiet}
                                onChange={(e) => setSelectedDiet(e.target.value)}
                            >
                                <option value="">All Diets</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="gluten free">Gluten Free</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recipe Grid */}
            {filteredRecipes.length > 0 && (
                <>
                    <p className="text-muted mb-3">
                        Selected {filteredRecipes.length} recipes
                    </p>
                    <div className="row g-4">
                        {filteredRecipes.map((recipe) => (
                            <div key={recipe.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={recipe.image}
                                        className="card-img-top"
                                        alt={recipe.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{recipe.title}</h5>
                                        <div className="mt-auto">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <small className="text-muted">
                                                    Time: {recipe.readyInMinutes} mins
                                                </small>
                                                <small className="text-muted">
                                                    {recipe.servings} servings
                                                </small>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <Link
                                                    to={`/recipe/${recipe.id}`}
                                                    state={{ source: 'api' }}
                                                    className="btn btn-primary btn-sm flex-grow-1"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default BrowseRecipes;