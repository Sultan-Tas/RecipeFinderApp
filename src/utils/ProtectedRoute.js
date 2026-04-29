import { Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext.js';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return children;
}

export default ProtectedRoute;