import { NavLink } from "react-router-dom"
import { useState } from "react";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const activeItem = (params) => {
        return params.isActive ? "active" : ""
    }
    const [formValue, setFormValue] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordCf: ""
    });
    const handleFormValueChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        console.log(formValue)
    }
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        if (formValue.password === formValue.passwordCf) {
            localStorage.setItem("userLogin", JSON.stringify(formValue));
            db.collection("signup").add(formValue);
            alert("Sucessful Sign Up");
            navigate("/login")

        }
        else { alert("Please Confirm Password") }
    }

    return (

        <div div className="login" >
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <div>
                                            <NavLink className={activeItem} id="home-head" to="/">HOME  </NavLink>
                                            <span style={{ fontSize: "30px" }}> / </span>
                                            <NavLink className={activeItem} id="login-head" to="/signup">SIGN UP</NavLink>
                                        </div>
                                        <div className="form-white mb-4">
                                            <label for="typeUser">User Name</label>
                                            <input name="displayName" value={formValue.displayName} onChange={handleFormValueChange} type="user" id="typeUser" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-white mb-4">
                                            <label for="typeEmailX">Email</label>
                                            <input name="email" value={formValue.email} onChange={handleFormValueChange} type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-white mb-4">
                                            <label for="typePasswordX">Password</label>
                                            <input name="password" value={formValue.password} onChange={handleFormValueChange} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-white mb-4">
                                            <label for="typeConfirmPasswordX">Confirm Password</label>
                                            <input name="passwordCf" value={formValue.passwordCf} onChange={handleFormValueChange} type="password" id="typeConfirmPasswordX" className="form-control form-control-lg" />
                                        </div>
                                        {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!"></a></p> */}
                                        <button style={{ marginTop: "25px" }} onClick={handleSignUp} className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        </div>
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