import { Link } from "react-router-dom"

function Header(){
    return(
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom h-auto px-4">
            <div className="mb-2 mb-md-0 ">
                <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img className="logo" src={"logo.png"} alt="logo"/>
                    <h1 className="text-light align-content-md-center ms-3 fs-1" style={{fontFamily: "Titan One, sans-serif", fontWeight: 100}}>Recipe-Finder</h1>
                </Link>
            </div>
            <nav className="d-flex align-items-center" style={{fontWeight: "500"}}>
                <Link to="/contact" className="mx-4 fs-5 link-light link-underline-opacity-0 link-underline-opacity-100-hover">Contacts</Link>
                <Link to="/about" className="mx-4 fs-5 link-light link-underline-opacity-0 link-underline-opacity-100-hover">About</Link>
            </nav>
        </header>
    );
}

export default Header;