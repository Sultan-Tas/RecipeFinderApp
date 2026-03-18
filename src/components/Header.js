function Header({ totalRecipes }){
    return(
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-3 mb-2 mb-md-0 ">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img className="logo" src={"logo.png"} alt="logo"/>
                    <h1 className="text-light align-content-md-center ms-3">Recipe-Finder</h1>
                </a>
            </div>
            <div className="col-6">
            <p className="text-light align-content-md-center mb-0 fs-4">Discover and organize your favorite recipes</p>
            </div>
            <div className="col-3">
                <p className="text-light text-decoration-underline">Total Recipes: {totalRecipes}</p>
            </div>
        </header>
    );
}

export default Header;