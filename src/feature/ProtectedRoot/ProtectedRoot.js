import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoute() {
    const { admin } = useContext(AuthContext);
    console.log(admin)
    if (admin.email === "admin@gmail.com") {
        return <Outlet></Outlet>
    }
    return (<Navigate to="/loginadmin"></Navigate>)
}
