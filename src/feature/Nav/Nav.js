import { NavLink } from 'react-router-dom';
import logo from "../../Asset/img/logo.png";
import "./Nav.css";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { getAuth, signOut } from "firebase/auth";


export default function Nav() {
    const activeClass = (params) => {
        return params.isActive ? "active-item" : ""
    }
    const { user, setUser } = useContext(AuthContext);
    const [pending, setPending] = useState(false);
    const handleLogOut = (user) => {
        if (localStorage.getItem("userLogin")) {
            localStorage.removeItem('userLogin')
        }
        if (pending === false) {
            setPending(true)
        } else { setPending(false) }
        setTimeout(() => {
            setUser({ displayName: "", email: "" });
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
            // auth.signOut(user)
        }, 1000)
    }






return (

    < div className="nav-main" >
        {
            user.displayName ? (<nav style={{ backgroundColor: "black" }} className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{ padding: "0px   " }}>
                    <NavLink className="navbar-brand" href="#"><img alt="logo" src={logo}></img></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div id="nav-box" style={{ width: "40%" }} className="navbar-nav ms-5 me-auto mb-lg-0 d-flex justify-content-between">
                            <NavLink id="nav-item" className={activeClass} to="/">Home</NavLink>
                            <NavLink id="nav-item" className={activeClass} to="/room">Room</NavLink>
                            <NavLink id="nav-item" className={activeClass} to="/about">About Us</NavLink>
                            <NavLink id="nav-item" className={activeClass} to="/contactus">Contact Us</NavLink>
                            <NavLink id="nav-item" className={activeClass} to={`/${user.displayName}`} >{user.displayName}</NavLink>
                            {pending === true ? (<div id="nav-item" class="spinner-border text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>) : (<NavLink id="nav-item" className={activeClass} onClick={handleLogOut}>Logout</NavLink>
                            )}
                        </div>

                        <form className="d-flex" role="search">
                            <NavLink className={activeClass} to="/loginadmin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock2-fill" viewBox="0 0 16 16">
                                <path d="M7 6a1 1 0 0 1 2 0v1H7V6z" />
                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z" />
                            </svg></NavLink>

                            <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                            <button id="search-btn" className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>) :
                (<nav style={{ backgroundColor: "black" }} className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" href="#"><img alt="logo" src={logo}></img></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div id="nav-box" style={{ width: "40%" }} className="navbar-nav ms-5 me-auto mb-lg-0 d-flex justify-content-between">
                                <NavLink id="nav-item" className={activeClass} to="/">Home</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/room">Room</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/about">About Us</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/contactus">Contact Us</NavLink>
                                <NavLink id="nav-item" className={activeClass} to="/login">Login</NavLink>

                            </div>
                            <form className="d-flex" role="search">
                                <NavLink className={activeClass} to="/loginadmin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock2-fill" viewBox="0 0 16 16">
                                    <path d="M7 6a1 1 0 0 1 2 0v1H7V6z" />
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z" />
                                </svg></NavLink>
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
