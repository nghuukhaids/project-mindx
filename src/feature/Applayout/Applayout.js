import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
export default function Applayout() {

    return (
        <div className="app-layout" style={{ height: "100%" }}>
            <Nav />
            <Outlet />
        </div>
    )
}
