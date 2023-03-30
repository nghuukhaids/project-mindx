import { NavLink, useNavigate, useFetcher } from 'react-router-dom';
import logo from "../../Asset/img/logo.png";
import "./Nav.css";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from "../../firebase/config"
export default function Nav() {
    const activeClass = (params) => {
        return params.isActive ? "active-item" : ""
    }
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [pending, setPending] = useState(false);
    const handleLogOut = (user) => {

        if (pending === false) {
            setPending(true)
        } else { setPending(false) }
        setTimeout(() => {
            setUser({})

            auth.signOut(user)
        }, 1000)
    }

    return (

        < div className="nav-main" >
            {
                user.displayName ? (<nav style={{ backgroundColor: "black" }} className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid" style={{ padding: "0px   " }}>
                        <NavLink className="navbar-brand" href="#"><img src={logo}></img></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div id="nav-box" style={{ width: "40%" }} className="navbar-nav ms-5 me-auto mb-lg-0 d-flex justify-content-between">
                                <NavLink id="nav-item" className={activeClass} to="/">Home</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/room">Room</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/about">About Us</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/blog">Blog</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/contactus">Contact Us</NavLink>
                                <NavLink id="nav-item" className={activeClass} to={`/${user.displayName}`} >{user.displayName}</NavLink>
                                {pending === true ? (<div id="nav-item" class="spinner-border text-success" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>) : (<NavLink id="nav-item" className={activeClass} onClick={handleLogOut}>Logout</NavLink>
                                )}


                            </div>

                            <form className="d-flex" role="search">
                                <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                                <button id="search-btn" className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>) :
                    (<nav style={{ backgroundColor: "black" }} className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" href="#"><img src={logo}></img></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="nav-box" style={{ width: "40%" }} className="navbar-nav ms-5 me-auto mb-lg-0 d-flex justify-content-between">
                                    <NavLink id="nav-item" className={activeClass} to="/">Home</NavLink>
                                    <NavLink id="nav-item" className={activeClass} to="/room">Room</NavLink>
                                    <NavLink id="nav-item" className={activeClass} to="/about">About Us</NavLink>
                                    <NavLink id="nav-item" className={activeClass} to="/blog">Blog</NavLink>
                                    <NavLink id="nav-item" className={activeClass} to="/contactus">Contact Us</NavLink>
                                    <NavLink id="nav-item" className={activeClass} to="/login">Login</NavLink>
                                </div>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                                    <button id="search-btn" className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>)
            }
        </div >
    )
}
