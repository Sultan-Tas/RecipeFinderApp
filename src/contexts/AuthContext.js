import {useContext, createContext, useState, use} from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if(!username || !password){
            throw new Error("Please input Username and Password")
        }
        const userData = {
            username,
            id: Date.now()
        }
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return userData;
    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}