import { useState, useEffect } from 'react';
import { spoonacularAPI } from '../utils/Api';
import useDebounce from "../hooks/UseDebounce";

function CuisineClassifier() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [title, setTitle] = useState('Chicken Tikka Masala');
    const [ingredients, setIngredients] = useState('chicken, yogurt, curry, rice, spices');

    const debouncedTitle = useDebounce(title, 500);
    const debouncedIngredients = useDebounce(ingredients, 500);

    useEffect(() => {
        if (debouncedTitle && debouncedIngredients) {
            classifyCuisine();
        }
    }, [debouncedTitle, debouncedIngredients]);

    const classifyCuisine = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await spoonacularAPI.classifyCuisine(
                debouncedTitle,
                debouncedIngredients
            );

            setResult(data);
        } catch (err) {
            setError(err.message);
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-header bg-success text-white">
                            <h2 className="mb-0">Cuisine Classifier</h2>
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label fw-semibold">
                                        Recipe Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="e.g., Chicken Tikka Masala"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ingredients" className="form-label fw-semibold">
                                        Ingredients (comma-separated)
                                    </label>
                                    <textarea
                                        id="ingredients"
                                        className="form-control"
                                        value={ingredients}
                                        onChange={(e) => setIngredients(e.target.value)}
                                        placeholder="chicken, yogurt, curry, rice, spices"
                                        rows="4"
                                    />
                                </div>
                            </form>

                            {loading && (
                                <div className="alert alert-info d-flex align-items-center" role="alert">
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    <div>Analyzing cuisine...</div>
                                </div>
                            )}

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    <strong>Error:</strong> {error}
                                </div>
                            )}

                            {result && !loading && (
                                <div className="alert">
                                    <h5 className="alert-heading">Classification Result</h5>
                                    <hr />
                                    <p className="mb-2">
                                        <strong>Cuisine:</strong>
                                        <span className="badge bg-primary ms-2 fs-6">{result.cuisine}</span>
                                    </p>
                                    <p className="mb-0">
                                        <strong>Confidence:</strong>
                                        <span className="ms-2">{Math.round(result.confidence * 100)}%</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CuisineClassifier;