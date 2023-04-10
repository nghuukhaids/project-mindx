import { useEffect, useState, useCallback } from "react";
import { db } from "../../firebase/config";

import { serverTimestamp } from "firebase/firestore";

import "./Chat.css"

export default function Chat() {
    const [inputMess, setInputMess] = useState("");
    const [message, setMessage] = useState([]);
    const [idMess, setIdMess] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [userToChat, setUserToChat] = useState([]);
    const handleSend = (e) => {
        e.preventDefault();
        // setIdMess(idMess + 1);
        db.collection("chat").add({
            text: inputMess,
            user: userToChat,
            createAt: serverTimestamp(),
            auth: "admin"
        }
        );
        console.log(inputMess)
        setInputMess("")
    }
    // const changeText = (postElement, value) => {
    //     postElement.innerHTML = value;
    // };
    console.log(userToChat);
    // const fetchBooking = useCallback(() => {
    //     db.collection("booking-order").where("capital", "==", true).onSnapshot((snapshot) => {
    //         setUserBooking(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])

    // useEffect(() => {
    //     fetchBooking();
    // }, [fetchBooking])
    const fetchListUser = useCallback(() => {
        db.collection("chat").onSnapshot((snapshot) => {
            setListUser(snapshot.docs.map(doc => doc.data()));
        })
    }, [])
    useEffect(() => {
        fetchListUser();
    }, [fetchListUser])

    const fetchMessage = useCallback(() => {
        db.collection("chat").where("user", "==", userToChat).onSnapshot((snapshot) => {
            setMessage(snapshot.docs.map(doc => doc.data()).sort(function (sv1, sv2) {
                return sv2.createAt - sv1.createAt
            }))
            console.log(message)
        })
    }, [userToChat])
    useEffect(() => {
        fetchMessage();
    }, [fetchMessage])
    // message.sort(function (sv1, sv2) {
    //     return sv1.createAt - sv2.createAt
    // })
    console.log("message", message)
    console.log("usertochat", userToChat)
    function uniqByKeepFirst(a, key) {
        let seen = new Set();
        return a.filter(item => {
            let k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    }


    return (
        <div style={{ height: "100%" }} className="booking-chat d-flex">
            {/* <div className="user-list" >
                <div className="user-list-header">Chat</div>
                <div className="user-list-detail" onClick={(e) => {
                    setUserToChat(e.target.innerHTML)
                }}>
                    {uniqByKeepFirst(userBooking, it => it.account).map((item) => (
                        <div >{item.account}</div>
                    )
                    )}
                </div>
            </div>
            <div className="box-chat">
                    <div className="display-chat">
                        <h2>{userToChat}</h2>
                        {message.map((msg, index) => {
                            return (
                                <div className="chat-text" key={index}>
                                    <div className="chat-text-detail">{msg.text}</div>
                                </div>)
                        })}
                    </div>
                <div className="control">
                    <input className="fill" placeholder="Type here to start conversation..." value={inputMess} onChange={(e) => { setInputMess(e.target.value) }} type="text"></input>
                    <button className="send-btn" type="submit" onClick={handleSend}>Send</button>
                </div>

            </div> */}
            <section style={{ backgroundColor: '#eee', width: "100%   " }}>
                <div style={{ height: "100%" }} className="container py-5">
                    <div className="row" style={{ height: "100%" }} >
                        <div style={{ height: "100%" }} className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        {uniqByKeepFirst(listUser, it => it.user).map((item) => (
                                            <li className="p-2 border-bottom user-name" onClick={(e) => {
                                                setUserToChat(e.target.innerHTML)
                                            }} style={{ backgroundColor: '#eee' }}>
                                                <div className="d-flex flex-row">
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">{item.user}</p>
                                                    </div>
                                                </div>
                                            </li>)
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "80%" }} className="col-md-6 col-lg-7 col-xl-8 ">
                            <div className="box-show"> {message.map((msg, index) => {
                                return (
                                    <div className="d-flex mb-4">
                                        <div id={msg.auth} className="card" key={index}>
                                            <div className="card-header d-flex justify-content-between p-3">
                                                <b>{msg.auth}</b>
                                                <p className="text-muted small mb-0"><i className="far fa-clock" /> 12 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    {msg.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                            <div style={{ height: "50px" }} className="bg-white mb-3">
                                <form onSubmit={handleSend} style={{ border: "2px solid black    " }} className="form-outline">
                                    <input style={{ height: "50px" }} value={inputMess} onChange={(e) => { setInputMess(e.target.value) }} className="form-control" id="textAreaExample2" rows={4} />
                                    <label className="form-label" htmlFor="textAreaExample2">Message</label>
                                    <button type="submit" onClick={handleSend} className="btn btn-info btn-rounded float-end">Send</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div >
    )
}