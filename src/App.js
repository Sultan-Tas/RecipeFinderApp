import './App.css';
import { useState } from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import RecipePage from "./components/RecipePage";
import About from "./components/About";
import AboutTeam from "./components/AboutComponents/AboutTeam";
import AboutStory from "./components/AboutComponents/AboutStory";
import AboutMission from "./components/AboutComponents/AboutMission";
import Contacts from "./components/Contacts";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

function App() {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            name: 'Beshparmak',
            ingredients: 'Cow meat, Special dough, Potatoes, Onions, Pepper, Qazy',
            instructions: 'Boil meat and qazy. Separately boil potatoes. Cut onion and pepper into slices and add hot water. Mix everything in big plate',
            category: 'Dinner',
            prepTime: 90
        },
        {
            id: 2,
            name: 'Caesar Salad',
            ingredients: 'Romaine lettuce, parmesan, mayonnaise, chicken',
            instructions: 'Boil chicken. Chop lettuce and chicken. Add toppings and cover with mayonnaise.',
            category: 'Lunch',
            prepTime: 30
        },
        {
            id: 3,
            name: 'French Toast',
            ingredients: 'Eggs, White bread, sugar, milk',
            instructions: 'Mix eggs, sugar and milk. Soak slices of bread and fry on the pan.',
            category: 'Breakfast',
            prepTime: 15
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const addRecipe = (newRecipe) => {
        const recipeWithId = {
            ...newRecipe,
            id: Date.now()
        };
        setRecipes([...recipes, recipeWithId]);
    };

    const deleteRecipe = (id) => {
        const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(updatedRecipes);
    };

    const getFilteredRecipes = () => {
        let filtered = recipes;

        if (searchTerm) {
            filtered = filtered.filter(recipe =>
                recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(recipe => recipe.category === selectedCategory);
        }

        return filtered;
    };

    const filteredRecipes = getFilteredRecipes();

    return (
        <ThemeProvider>
        <Router>
            <div className="App">
                <Header/>
                <div>
                    <Routes>
                        <Route path="/" element={
                            <MainContent
                                recipes={filteredRecipes}
                                deleteRecipe={deleteRecipe}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />}>
                        </Route>
                        <Route path="recipe/:id" element={
                            <RecipePage
                                recipes = {recipes}
                            />
                        }/>
                        <Route path="/add_recipe" element={
                            <RecipeForm addRecipe={addRecipe} />}/>
                        <Route path="/about" element={<About/>}>
                            <Route path="team" element={<AboutTeam/>}/>
                            <Route path="story" element={<AboutStory/>}/>
                            <Route path="mission" element={<AboutMission/>}/>
                        </Route>
                        <Route path="/contact" element={<Contacts/>}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
        </ThemeProvider>
    );
}

export default App;