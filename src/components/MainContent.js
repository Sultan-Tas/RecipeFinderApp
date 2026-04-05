import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import Separator from './Separator';
import { Link } from "react-router-dom"

function MainContent({
                         recipes,
                         deleteRecipe,
                         searchTerm,
                         setSearchTerm,
                         selectedCategory,
                         setSelectedCategory
                     }) {
    return (
        <>
            <div className="container my-5">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Link to="/add_recipe" className="btn btn-primary">Add new recipe</Link>
            </div>
            <Separator/>
            <div className="container my-5">

                <h3 className="mb-4">
                    {selectedCategory === 'All' ? 'All Recipes' : `${selectedCategory} Recipes`}
                </h3>
                <div className="row">
                    {/*conditional rendering*/}
                    {recipes.length === 0 ? (
                        <div className="col-12">
                            <div className="alert alert-info text-center">
                                <h5>No recipes found!</h5>
                                <p>Try adjusting your search or add a new recipe above.</p>
                            </div>
                        </div>
                    ) : (
                        recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                deleteRecipe={deleteRecipe}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default MainContent;