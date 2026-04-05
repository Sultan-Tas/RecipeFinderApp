import {Link, Outlet} from 'react-router-dom'
function About(){
    return(
        <div className="container">
            <h1 className="py-3" style={{fontFamily: "Titan One, sans-serif", fontWeight: 100}}>About Us</h1>
            <p className="text-start fs-4 px-5">RecipeFinderApp is a simple Single-Page-App dedicated to help people
                find recipes with ease
                It will not only allow search by names, but also by current available ingredients, allergies, and
                time-to-make
                Future feature would be planer for meals for the week</p>
            <div className="d-flex p-5 gap-5">
                <Link to="/about/team" className="fs-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Our Team</Link>
                <Link to="/about/story" className="fs-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">The Story</Link>
                <Link to="/about/mission" className="fs-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Mission</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default About;