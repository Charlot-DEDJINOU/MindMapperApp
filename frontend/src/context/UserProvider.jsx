import { useState } from "react";
import { UserContext } from "./context";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const toggleUser = (newUser) => {
        setUser(newUser)
    }

    return (
        <UserContext.Provider value={{ user, toggleUser }}>
            {children}
        </UserContext.Provider>
    )
}