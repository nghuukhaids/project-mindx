import { createContext, useState, useEffect } from "react"
import { auth } from "../firebase/config";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: "", email: "" });
    const [admin, setAdmin] = useState(
        { email: "", password: "" }
    )

    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email } = user;
                setUser({ displayName, email });
            }
        })
        return (() => {
            unsubcribed()
        })
    }, [])
    useEffect(() => {
        if (localStorage.getItem("userLogin")
        ) {
            setUser({ displayName: JSON.parse(localStorage.getItem("userLogin")).displayName, email: JSON.parse(localStorage.getItem("userLogin")).email });
        }
    }, [
    ]);

    console.log(user)

    return (
        <AuthContext.Provider value={{ user, setUser, admin, setAdmin }}>
            {children}
        </AuthContext.Provider>
    )


}