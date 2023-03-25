import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
export default function Applayout() {

    return (
        <div className="app-layout" style={{ height: "100%" }}>

            <Nav />
            <Outlet />
        </div>
    )
}
