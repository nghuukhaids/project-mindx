import { useContext } from "react";
import { db } from "../../firebase/config";
import { BookingContext } from "../../Context/BookingContext";
import "./Booking.css"
export default function Booking() {
    // const sum = [];
    // const [booking, setBooking] = useState([]);
    // useEffect(() => {
    //     db.collection("booking-order").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             sum.push(doc.data());
    //             setBooking(sum);
    //         }
    //         );
    //     })
    // }, [])
    // console.log("booking", booking)
    const sortByTime = (a, b) => {
        return new Date(b.date) - new Date(a.date);
    }
    const { booking } = useContext(BookingContext);
    const handleConfirmBooking = (e) => {
        e.preventDefault();
        const btn = document.getElementById(e.target.id);
        btn.style.display = "none";
        console.log(e);
        db.collection("booking-order").doc(e.target.id).update({
            capital: true
        })

    }
    const handleCancel = (e) => {
        console.log(e.target.id);
            db.collection("booking-order").doc(e.target.id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        

    }

    console.log(booking)

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
                        <th>Confirm Status</th>
                        <th>Cancel Status</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.sort(sortByTime).map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{booking.indexOf(item) + 1}</th>
                                <td><span id="name">{item.cus} </span><br /> <span id="account">{item.account}</span></td>
                                <td>{item.bookDate}</td>
                                <td>{item.room} </td>
                                <td>{item.in} </td>
                                <td>{item.out} </td>
                                <td>{item.adult} </td>
                                <td>{item.children} </td>
                                <td><button id={item.cus + item.bookDate} className={`${item.capital}`} type="submit" onClick={handleConfirmBooking} style={{ padding: "5px" }}>Confirm</button></td>
                                <td>{item.capital === true ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>) : (<svg style={{ color: "red" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>)}</td>
                                <td>{item.cancel === "waiting" ? (<svg id={item.cus + item.bookDate} onClick={handleCancel} style={{ color: "red" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>) : (<></>)}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div >)
};