import { useState } from 'react';

function RecipeForm({ addRecipe }) {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        category: 'Breakfast',
        prepTime: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!formData.name || !formData.ingredients || !formData.instructions) {
            alert('Please fill in all required fields!');
            return; // Stop if validation fails
        }
        addRecipe(formData);
        alert('Successfully added new recipe!')

        setFormData({
            name: '',
            ingredients: '',
            instructions: '',
            category: 'Breakfast',
            prepTime: ''
        });
    };

    return (
        <div className="d-flex">
            <div className="card mb-4 offset-4 col-4">
                <div className="card-body">
                    <h4 className="card-title mb-3">Add New Recipe</h4>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Recipe Name <span style={{color: "red"}}>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="ex., Chocolate Cake"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ingredients <span style={{color: "red"}}>*</span></label>
                            <textarea
                                className="form-control"
                                name="ingredients"
                                value={formData.ingredients}
                                onChange={handleInputChange}
                                placeholder="ex., Flour, Sugar, Eggs, Chocolate"
                                rows="3"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Instructions (separate each step with dots) <span style={{color: "red"}}>*</span></label>
                            <textarea
                                className="form-control"
                                name="instructions"
                                value={formData.instructions}
                                onChange={handleInputChange}
                                placeholder="Step by step cooking instructions"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <select
                                className="form-select"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                            >
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Prep Time (minutes)</label>
                            <input
                                type="number"
                                className="form-control"
                                name="prepTime"
                                value={formData.prepTime}
                                onChange={handleInputChange}
                                placeholder="e.g., 30"
                                min="1"
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Add Recipe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RecipeForm;