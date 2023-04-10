import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: "", email: "" });
    const [admin, setAdmin] = useState(
        { email: "", password: "" }
    )
    const navigate = useNavigate();

    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email } = user;
                setUser({ displayName, email });
            }
            else {
                navigate("/")

            }
        })
        return (() => {
            unsubcribed()
        })
    }, [])
    useEffect(() => {
        if (localStorage.getItem("userLogin")) {
            setUser({ displayName: JSON.parse(localStorage.getItem("userLogin")).displayName, email: JSON.parse(localStorage.getItem("userLogin")).email });
            navigate("/")
        }
    }, [localStorage.getItem("userLogin")]);

    console.log(user)

    return (
        <AuthContext.Provider value={{ user, setUser, admin, setAdmin }}>
            {children}
        </AuthContext.Provider>
    )


}