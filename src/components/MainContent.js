import RecipeCard from "./RecipeCard";
import CurrentTimeClock from "./CurrentTimeClock";
import CurrentDate from "./CurrentDate";
import YourName from "./YourName";
import Separator from "./Separator";

function MainContent() {
    return(
        <main className="">
            <p className="fs-5">Welcome to your personal</p>
            <h1>Recipe Finder!</h1>
            <div className="px-5 row">
                <div className="col-2 fs-4">
                    <CurrentDate/>
                </div>
                <div className="col-2 fs-4">
                    <CurrentTimeClock/>
                </div>
                <div className="col-8">
                    <YourName/>
                </div>
                </div>
            <Separator/>
            <h1>Catalogue of recipes</h1>
                <div className="p-5 row g-5">
                    <RecipeCard recipeName={"Beshparmak"}/>
                    <RecipeCard recipeName={"Steak"}/>
                    <RecipeCard recipeName={"Pasta Carbonara"}/>
                </div>
        </main>
);
}

export default MainContent;