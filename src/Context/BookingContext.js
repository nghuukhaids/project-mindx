import { createContext, useState, useEffect, useCallback } from "react"
import { db } from "../firebase/config";
export const BookingContext = createContext({});
export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState([]);
    // useEffect(() => {
    //     db.collection("booking-order").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             sum.push(doc.data());
    //             setBooking(sum);
    //         }
    //         );
    //     })
    // }, []);
    const mount = "1";
    // const fetchMessage = useCallback(() => {
    //     db.collection("booking-order").where("capital", "!==", mount).then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             sum.push(doc.data());
    //             setBooking(sum);
    //             console.log(sum)
    //         }
    //         );
    //     })
    // }, [mount])
    const fetchMessage = useCallback(() => {
        db.collection("booking-order").where("status", "==", mount).onSnapshot((snapshot) => {
            setBooking(snapshot.docs.map(doc => doc.data()));
        })
    }, [mount])
    console.log(booking);
    useEffect(() => {
        fetchMessage();
    }, [fetchMessage])

    return (
        <BookingContext.Provider value={{ booking }}>
            {children}
        </BookingContext.Provider>
    )


}