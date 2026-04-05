import {useParams} from "react-router-dom";

function RecipePage({recipes}){
    //destructuring received recipe
    const { id} = useParams()
    const recipe = recipes.find(recipe => recipe.id === Number(id))
    if(!recipe){
        return(
            <h1 className="text-warning text-decoration-underline">Recipe was not found :(</h1>
        )
    }
    const { name, ingredients, instructions, prepTime } = recipe;
    console.log(recipe)



    return(
        <div className="container py-4 px-3 d-flex flex-column align-items-start">
            <h1 className="text-decoration-underline" style={{fontFamily: "Titan One, sans-serif", fontWeight: 100}}>{name}</h1>
            <p className="text-secondary fs-4">Cooking time: {prepTime} minutes</p>
            <p className="fs-4"><span className="fs-2" style={{fontWeight: 500}}>Ingredients:</span> {ingredients}</p>
            <p className="fs-2 text-body-emphasis" style={{fontWeight: 500}}>Instructions:</p>
            <div className="ps-5 w-75 fs-4 text-start">
                {instructions.split('.').filter(step => step.trim()).map((step, index) => (<p key={index}>{index+1}) {step.trim()}.</p>))}
            </div>
        </div>
    )
}

export default RecipePage;