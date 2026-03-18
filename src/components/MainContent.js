import RecipeForm from './RecipeForm';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import Separator from './Separator';

function MainContent({
                         recipes,
                         addRecipe,
                         deleteRecipe,
                         searchTerm,
                         setSearchTerm,
                         selectedCategory,
                         setSelectedCategory
                     }) {
    return (
        <>
            <div className="container my-5">
                <RecipeForm addRecipe={addRecipe}/>
            </div>
            <Separator/>
            <div className="container my-5">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
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