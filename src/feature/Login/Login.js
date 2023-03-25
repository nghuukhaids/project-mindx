import { NavLink } from "react-router-dom"
import { AuthContext, AuthProvider } from "../../Context/AuthContext"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import firebase, { auth } from "../../firebase/config";


const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
    // CssNAVLink
    const activeItem = (params) => {
        return params.isActive ? "active" : ""
    }
    ////

    const { setUser, setAdmin } = useContext(AuthContext);

    ///// Pop up Login For User
    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };
    /////

   
    return (
        //         <div div className="login" >
        //             <section className="vh-100 gradient-custom">
        //                 <div className="container py-5 h-100">
        //                     <div className="row d-flex justify-content-center align-items-center h-100">
        //                         <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        //                             <div className="card bg-dark text-white">
        //                                 <div className="card-body p-5 text-center">
        //                                     <div className="mb-md-5 mt-md-4 pb-5">
        //                                         <div>
        //                                             <NavLink id="home-head" className={activeItem} to="/">HOME  </NavLink>
        //                                             <span style={{ fontSize: "30px" }}> / </span>
        //                                             <NavLink id="login-head" className={activeItem} to="/login">LOGIN</NavLink>
        //                                         </div>
        //                                         <p className="text-white-50 mb-5">Please enter your login and password!</p>
        //                                         <div className="form-white mb-4">
        //                                             <label for="typeEmailX">Email</label>
        //                                             <input type="email" id="typeEmailX" className="form-control form-control-lg" name="email" value={formValue.email} onChange={handleFormValueChange} />
        //                                         </div>
        //                                         <div className="form-white">
        //                                             <label for="typePasswordX">Password</label>
        //                                             <input type="password" id="typePasswordX" className="form-control form-control-lg" name="password" value={formValue.password} onChange={handleFormValueChange} />
        //                                         </div>
        //                                         <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
        //                                         <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>
        //                                         <div className="d-flex justify-content-center text-center mt-4 pt-1">
        //                                             <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
        //                                         </div>
        //                                     </div>
        //                                     <div>
        //                                         <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
        //                                         </p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>
        //         </div>
        // ````
        <div div className="login" >
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <div>
                                            <NavLink id="home-head" className={activeItem} to="/">HOME  </NavLink>
                                            <span style={{ fontSize: "30px" }}> / </span>
                                            <NavLink id="login-head" className={activeItem} to="/login">LOGIN</NavLink>
                                        </div>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <div className="form-white mb-4">
                                            <label for="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg"  />
                                        </div>
                                        <div className="form-white">
                                            <label for="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        </div>
                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!"></a></p>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white" onClick={handleFbLogin}><i className="fab fa-facebook-f fa-lg"></i></a>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}