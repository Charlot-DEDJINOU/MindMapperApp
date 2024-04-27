import { useState } from "react";
import { UserContext } from "./context";

const token = localStorage.getItem('token')

export const UserProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(token != null)
    const toggleLogin = () => {
        setLogin(!isLogin)
    }

    return (
        <UserContext.Provider value={{ isLogin, toggleLogin }}>
            {children}
        </UserContext.Provider>
    )
}