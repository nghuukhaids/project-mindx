import React, { useContext } from 'react'
import { BookingContext } from '../../Context/BookingContext'
import { AuthContext } from '../../Context/AuthContext'
import ListBooking from "../../Asset/img/ListBooking.jpg"
import { db } from "../../firebase/config";

import "./User.css"
function User() {
    const { booking } = useContext(BookingContext);
    const { user } = useContext(AuthContext)
    const listBooking = () => {
        if (user) {

        }
    }
    // const postValue = document.getElementById("postElement");
    // const changeText = (postElement, value) => {
    //     postElement.innerHTML = value
    // };
    // const db1 = getDatabase();
    // const starCountRef = ref(db1, 'users/' + '/message');
    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     if (postValue) {
    //         changeText(postValue, data);
    //     } else {
    //         console.log('element not found');
    //     }
    // });
    const handleCancel = (e) => {
        e.preventDefault();
        db.collection("booking-order").doc(e.target.id).update({
            cancel: "waiting"
        })
        alert("Waiting For Admin To Cancel Your Room")

    }

    console.log(booking)
    return (
        <div className="user">
            <div className="your-list-booking-box" style={{ height: "500px", width: "100%" }}>
                <img style={{ height: "500px", width: "100%" }} src={ListBooking}></img>
                <h1>YOUR BOOKED ROOM</h1>
            </div>
            <div className="table-div">      <table >
                <thead>
                    <tr>
                        <th >#</th>
                        <th >Book Date</th>
                        <th >Room</th>
                        <th >Check in</th>
                        <th >Check out</th>
                        <th >Adult</th>
                        <th >Children</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.filter((book) => (book.account === user.email && book.capital === true)).map((filterUser) =>
                    (<tr>
                        <td scope="row">{booking.indexOf(filterUser) + 1}</td>
                        <td>{filterUser.bookDate}</td>
                        <td>{filterUser.room} </td>
                        <td>{filterUser.in} </td>
                        <td>{filterUser.out} </td>
                        <td>{filterUser.adult} </td>
                        <td>{filterUser.children} </td>
                        <td><button id={filterUser.cus + filterUser.bookDate} onClick={handleCancel} >Cancel</button></td>
                        <td></td>
                    </tr>))}
                </tbody>
            </table></div>



        </div>

    )
}

export default User
