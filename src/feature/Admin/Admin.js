import "./Admin.css"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export default function Admin() {
    const { setAdmin } = useContext(AuthContext);
    const logOut = () => {
        setAdmin("");
         localStorage.removeItem('username');
    }
    return (
        <div className="box">
            <div className="section d-flex">
                <div className="nav">
                    <h1 className="Heading-Nav">Admin Page</h1>
                    <div className="Content-Nav d-flex flex-column">
                        <NavLink to="/admin">Booking Order</NavLink>
                        <NavLink to="/admin/room">Adding Room</NavLink>
                        <button onClick={logOut}>Log Out</button>
                    </div>
                </div>
                <div className="main">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}