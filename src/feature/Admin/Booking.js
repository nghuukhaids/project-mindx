import { useState, useEffect } from "react"
import { db } from "../../firebase/config";
// import { ref, listAll, getStorage, getDownloadURL } from "firebase/storage";
export default function Booking() {
    const sum = [];
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        db.collection("booking-order").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                sum.push(doc.data());
                setBooking(sum);
            }
            );
        })
    }, [])
    console.log("booking", booking)
    const sortByTime = (a, b) => {
        return new Date(b.date) - new Date(a.date);
    }
    return (
        <div className="booking-list">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name - Account</th>
                        <th scope="col">Book Date</th>
                        <th scope="col">Room</th>
                        <th scope="col">Check in</th>
                        <th scope="col">Check out</th>
                        <th scope="col">Adult</th>
                        <th scope="col">Children</th>
                        <th scope="col">Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.sort(sortByTime).map((item) => {
                        return (<tr>
                            <th scope="row">{booking.indexOf(item) + 1}</th>
                            <td>{item.cus} <br /> {item.account}</td>
                            <td>{item.bookDate}</td>
                            <td>{item.room} </td>
                            <td>{item.in} </td>
                            <td>{item.out} </td>
                            <td>{item.adult} </td>
                            <td>{item.children} </td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                            </svg></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>)
};