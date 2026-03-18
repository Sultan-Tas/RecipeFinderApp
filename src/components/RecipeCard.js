function RecipeCard({ recipe, deleteRecipe }) {
    //destructing recipe into array of data
    const { id, name, ingredients, instructions, category, prepTime } = recipe;

    const handleDelete = () => {
        deleteRecipe(id); // Call parent function with recipe ID
    };

    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <span className="badge bg-primary mb-2">{category}</span>
                    {prepTime && (
                        <p className="text-muted small">
                            <i className="bi bi-clock"></i> Prep time: {prepTime} minutes
                        </p>
                    )}
                    <h6 className="mt-3">Ingredients:</h6>
                    <p className="card-text small">{ingredients}</p>
                    <h6>Instructions:</h6>
                    <p className="card-text small">{instructions}</p>
                </div>

                <div className="card-footer">
                    <button className="btn btn-danger btn-sm w-50" onClick={handleDelete}>
                        Delete Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;