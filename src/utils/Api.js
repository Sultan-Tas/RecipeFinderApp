const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const buildUrl = (endpoint, params = {}) => {
    const url = new URL(`${BASE_URL}${endpoint}`);

    // Add API key
    url.searchParams.append('apiKey', API_KEY);

    // add parameters
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
            url.searchParams.append(key, value);
        }
    });

    return url.toString();
};

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`API Error: ${response.status} - ${error}`);
    }
    return response.json();
};

export const spoonacularAPI = {
    /**
     * Search recipes with filters
     */
    searchRecipes: async (query = '', cuisine = '', diet = '', number = 3) => {
        try {
            const url = buildUrl('/recipes/complexSearch', {
                query,
                cuisine,
                diet,
                number,
                addRecipeInformation: true,
                fillIngredients: true
            });

            const response = await fetch(url);
            return await handleResponse(response);
        } catch (error) {
            console.error('Error searching recipes:', error);
            throw error;
        }
    },

    getRecipeById: async (id) => {
        try {
            const url = buildUrl(`/recipes/${id}/information`);
            const response = await fetch(url);
            return await handleResponse(response);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            throw error;
        }
    }
};

export default spoonacularAPI;