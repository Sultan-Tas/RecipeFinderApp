function RecipeCard({recipeName}){
    return(
        <div className="card col-3 mx-5">
            <div className="card-body text-center">
                <h5 className="card-title">{recipeName}</h5>
                <p className="card-text">Some quick text to fill the card space below the title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="btn btn-primary">Open recipe</a>
            </div>
        </div>
    )
}

export default RecipeCard;