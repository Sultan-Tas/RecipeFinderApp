import { useAuth } from "../contexts/AuthContext";
import {useState} from "react";
import {Link} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div className="container m-5 row justify-content-center col-6 card">
            <div className="card-body p-5">
                <h2 className="text-center mb-2">
                    Login into your Account
                </h2>
                <p className="text-muted fs-5 mb-4">
                    Enter any username or password
                </p>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2">
                        Login
                    </button>
                </form>
                <Link to="/" className="text-decoration-none my-4 btn btn-outline-secondary">
                    Back to Home
                </Link>
            </div>
        </div>
    )

}

export default Login;