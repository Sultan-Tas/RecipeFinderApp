import {useParams} from "react-router-dom";
import { spoonacularAPI } from '../utils/Api';
import useFetch from "../hooks/UseFetch";

function RecipePage({recipes}){
    //destructuring received recipe
    const { id} = useParams()
    const recipe = recipes.find(recipe => recipe.id === Number(id))
    const {data, loading, error, refetch} = useFetch(
        recipe ? null : spoonacularAPI.getRecipeById,
        recipe ? null : [id], [id]
    )

    let name, ingredients, instructions, prepTime
    if(!recipe && data){
        console.log(data)
        name = data.title
        ingredients = data.extendedIngredients.map(item => item.name).join(", ")
        instructions = data.extendedIngredients.map(item => item.original).join(". ")
        prepTime = data.readyInMinutes
    }
    else if(recipe) {
        ({name, ingredients, instructions, prepTime} = recipe);
    }
    else{
        return(
            <h1 className="text-warning text-decoration-underline">Recipe was not found :(</h1>
        )
    }



    return(
        <>
            {loading && (
            <div className="container p-4" role="alert">
                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                <div>Analyzing cuisine...</div>
            </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    <strong>Error:</strong> {error}
                </div>
            )}
            <div className="container py-4 px-3 d-flex flex-column align-items-start">
                <h1 className="text-decoration-underline" style={{fontFamily: "Titan One, sans-serif", fontWeight: 100}}>{name}</h1>
                <p className="text-secondary fs-4">Cooking time: {prepTime} minutes</p>
                <p className="fs-4"><span className="fs-2" style={{fontWeight: 500}}>Ingredients:</span> {ingredients}</p>
                <p className="fs-2 text-body-emphasis" style={{fontWeight: 500}}>Instructions:</p>
                <div className="ps-5 w-75 fs-4 text-start">
                    {instructions.split('.').filter(step => step.trim()).map((step, index) => (<p key={index}>{index+1}) {step.trim()}.</p>))}
                </div>
            </div>
        </>
    )
}

export default RecipePage;