function Header(){
    return(
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0 ">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img class="logo" src={"logo192.png"} alt="logo"/>
                    <h1 className="text-light align-content-md-center ms-3">Recipe-Finder</h1>
                </a>
            </div>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link link-light link-underline-light px-2">Catalogue</a></li>
                <li><a href="#" className="nav-link link-light link-underline-light px-2">Planner</a></li>
                <li><a href="#" className="nav-link link-light link-underline-light px-2">News</a></li>
                <li><a href="#" className="nav-link link-light link-underline-light px-2">About</a></li>
            </ul>
            <div className="col-md-3 pe-5 text-end">
                <button type="button" className="btn btn-light me-2">Login</button>
                <button type="button" className="btn btn-info">Sign-up</button>
            </div>
        </header>
    );
}

export default Header;