import './App.css';
import { useState } from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

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
            instructions: 'Boil chicken, chop lettuce and chicken, add toppings, cover with mayonnaise.',
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
    const totalRecipes = recipes.reduce((count) => count + 1, 0);

    return (
        <div className="App">
            <Header totalRecipes={totalRecipes} />

            <div>
                <MainContent
                    recipes={filteredRecipes}
                    addRecipe={addRecipe}
                    deleteRecipe={deleteRecipe}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;