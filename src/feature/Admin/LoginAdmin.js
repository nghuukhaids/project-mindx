import { NavLink } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"



export default function LoginAdmin() {
    const { setAdmin } = useContext(AuthContext);
    /// Login For Admin 
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState(
        {
            email: "",
            password: ""
        }
    );
    const handleFormValueChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        }
        )
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (
    //         formValue.email === "admin@gmail.com" && formValue.password === "123123"
    //     ) {

    //         const json = JSON.stringify(formValue);
    //         localStorage.setItem("username", json)
    //         setUser({});
    //         navigate("/admin");
    //         const user = localStorage.getItem("username");
    //         const data = JSON.parse(user);
    //         setAdmin({ email: data.email, password: data.password })
    //         console.log(data);
    //         setAdmin({ email: formValue.email, password: formValue.password })
    //     }
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        const useradmin = localStorage.getItem("username");
        const data = JSON.parse(useradmin);
        if (data &&
            formValue.email === data.email && formValue.password === data.password
        ) {
            navigate("/admin");
            setAdmin({ email: data.email, password: data.password })
            console.log(data);


        } else if (formValue.email === "admin@gmail.com" && formValue.password === "123123") {
            const json = JSON.stringify(formValue);
            localStorage.setItem("username", json);
            navigate("/admin");
            setAdmin({ email: formValue.email, password: formValue.password })
        }
        else { alert("Email or Password is incorrect") }
    }

    const user = localStorage.getItem("username");
    const data = JSON.parse(user);
    if (data && data.email === "admin@gmail.com" && data.password === "123123") {
        navigate("/admin");
        setAdmin({ email: data.email, password: data.password })
        console.log(data);
    }

    return (
        <div style={{ backgroundColor: "blue" }} className="login-admin" >
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <div>
                                            <NavLink id="login-head">ADMIN / </NavLink>
                                            <NavLink id="login-head" to="/">USER</NavLink>

                                        </div>
                                        <div className="form-white mb-4">
                                            <label for="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" name="email" value={formValue.email} onChange={handleFormValueChange} />
                                        </div>
                                        <div className="form-white">
                                            <label for="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" name="password" value={formValue.password} onChange={handleFormValueChange} />
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>

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