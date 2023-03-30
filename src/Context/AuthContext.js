import { createContext, useState, useEffect } from "react"
import { auth } from "../firebase/config";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(
        { email: "", password: "" }
    )

    useEffect(() => {

        const unsubcribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoUrl } = user;
                setUser({ displayName, email, uid, photoUrl });
                setAdmin({ email: "", password: "" });
            }
        })
        return (() => {
            unsubcribed()
        })
    }
        , [setUser])



    return (
        <AuthContext.Provider value={{ user, setUser, admin, setAdmin }}>
            {children}
        </AuthContext.Provider>
    )


}