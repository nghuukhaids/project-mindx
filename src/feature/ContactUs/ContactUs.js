import { useState, useContext, useEffect, useCallback } from 'react';
import { db } from "../../firebase/config";
import { AuthContext } from '../../Context/AuthContext';
import { serverTimestamp } from "firebase/firestore";
import "./ContactUs.css"
export default function ContactUs() {
    const [inputMess, setInputMess] = useState("");
    const { user } = useContext(AuthContext);
    const [message, setMessage] = useState([]);

    const handleSend = (e) => {
        e.preventDefault();
        // setIdMess(idMess + 1);
        db.collection("chat").add({
            text: inputMess,
            user: user.email,
            createAt: serverTimestamp(),
            auth: "user"
        }
        );
        console.log(typeof (inputMess));
        console.log(typeof (user.email));
        console.log(user.email);
        setInputMess("");
    }
    const fetchMessage = useCallback(() => {
        db.collection("chat").where("user", "==", `${user.email}`).onSnapshot((snapshot) => {
            setMessage(snapshot.docs.map(doc => doc.data()).sort(function (sv1, sv2) {
                return sv2.createAt - sv1.createAt
            }))

        })
    }, [user.email])
    useEffect(() => {
        fetchMessage();
    }, [fetchMessage])
    console.log(user)
    console.log(message);


    return (
        <div style={{ width: "100%", height: "100%" }}>
            <section style={{ backgroundColor: '#eee', width: "100%", height: "100%" }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }} >
                    <div style={{ width: "100%", height: "100%" }} className="row d-flex justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-6 d-flex align-items-center justify-content-center">
                            <div style={{ width: "100%" }} className="card" id="chat2">
                                <div className="card-header d-flex justify-content-between align-items-center p-3">
                                    <h5 className="mb-0">Chat</h5>
                                    <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark">Let's Chat
                                        App</button>
                                </div>
                                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                                    {message.map((msg, index) => {
                                        return (
                                            <li id="item-card" className="d-flex flex-column justify-content-between mb-4">
                                                <div className={`${msg.auth}`} key={index}>
                                                    {msg.auth === "user" ? (<div className="d-flex justify-content-end">
                                                        <span className="text">{msg.text}</span>

                                                    </div>
                                                    ) : (<div className="d-flex justify-content-start">
                                                        <span className="text">{msg.text}</span>
                                                    </div>)}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </div>
                                <form onSubmit={handleSend} className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 3" style={{ width: '40px', height: '100%' }} />
                                    <input value={inputMess} onChange={(e) => { setInputMess(e.target.value) }}
                                        type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Type message" />
                                    <a type="submit" className="ms-3" href="#!"><i className="fas fa-paper-plane" /></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}