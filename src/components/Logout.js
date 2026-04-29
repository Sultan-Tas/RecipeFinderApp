import { useAuth } from "../contexts/AuthContext";
import {Link} from "react-router-dom";

function Logout(){
    const {logout} = useAuth();

    const handleLogout = () => {
        logout();
    }

    return <Link to="/" onClick={handleLogout} className={`btn btn-danger mx-2`}>Logout</Link>;
}

export default Logout;