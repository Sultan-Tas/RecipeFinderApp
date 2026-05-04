import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Home() {
    const { user } = useAuth();

    return (
        <div className="home-page">
            <section className="main-section separator text-white py-5">
                <div className="container">
                    <div className="row align-items-center min-vh-50">
                        <div className="col-lg-6">
                            <h1 className="display-3 fw-bold mb-4">
                                Discover Your Next New Recipe
                            </h1>
                            <p className="lead mb-4">
                                Browse thousands of recipes from around the world or create and manage your own personal collection.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link to="/browse" className="btn btn-light btn-lg">
                                    Browse Recipes
                                </Link>
                                <Link to="/my-recipes" className="btn btn-outline-light btn-lg">
                                    My Recipes
                                </Link>
                                <Link to="/classifier" className="btn btn-outline-light btn-lg">
                                    Classifier
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center mt-5 mt-lg-0">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500"
                                alt="Delicious food"
                                className="img-fluid rounded shadow-lg"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="features-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose Recipe Finder?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 text-center p-4 border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="feature-icon mb-3">
                                        ☼
                                    </div>
                                    <h4 className="card-title">Discover Recipes</h4>
                                    <p className="card-text">
                                        Search from thousands of recipes with advanced filters for cuisine, diet, and ingredients.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 text-center p-4 border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="feature-icon mb-3">
                                        §
                                    </div>
                                    <h4 className="card-title">Your Collection</h4>
                                    <p className="card-text">
                                        Create and manage your own personal recipe collection with custom ingredients and instructions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 text-center p-4 border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="feature-icon mb-3">
                                        ♥
                                    </div>
                                    <h4 className="card-title">Save Favorites</h4>
                                    <p className="card-text">
                                        Bookmark your favorite recipes and access them anytime from your personal dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Ready to Start Cooking?</h2>
                    <p className="lead mb-4">
                        {user
                            ? "Welcome back! Check out what's new in our recipe collection."
                            : "Join us today and start building your personal recipe collection."}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/browse" className="btn btn-primary btn-lg">
                            Explore Recipes
                        </Link>
                        {!user && (
                            <Link to="/login" className="btn btn-outline-primary btn-lg">
                                Get Started
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Inline Styles for Feature Icons */}
            <style>{`
                .feature-icon {
                    font-size: 3rem;
                }
                .min-vh-50 {
                    min-height: 50vh;
                }
                .main-section img {
                    transition: transform 0.3s ease;
                }
                .main-section img:hover {
                    transform: scale(1.05);
                }
                .features-section .card {
                    transition: transform 0.3s ease;
                }
                .features-section .card:hover {
                    transform: translateY(-10px);
                }
            `}</style>
        </div>
    );
}

export default Home;