import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom"

export function ProtectedRoute() {
    const { admin } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(admin)
    if (admin.email === "admin@gmail.com") {
        return <Outlet></Outlet>
    }
    return (<Navigate to="/loginadmin"></Navigate>)
}
