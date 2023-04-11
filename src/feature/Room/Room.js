
import { NavLink } from "react-router-dom"
import "./Room.css"
import { RoomContext } from "../../Context/RoomContext";
import { useContext } from "react";
import { BookingContext } from "../../Context/BookingContext";

export default function Room() {
    const activeClass = (p) => {
        return (p.isActive ? "active-item" : "")
    };
    const { booking } = useContext(BookingContext);
    const { filterForm } = useContext(RoomContext);
    // const sum = [];
    // const [room, setRoom] = useState([]);
    // const storage = getStorage();
    // const imgListRef = ref(storage, "image/");

    // const [imgList, setImgList] = useState([]);

    // useEffect(() => {
    //     db.collection("room").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             sum.push(doc.data());
    //             setRoom(sum);
    //         }
    //         );
    //     })
    // }, [db])
    // useEffect(() => {
    //     setTimeout(() => {
    //         listAll(imgListRef).then((res) => {
    //             res.items.forEach((item) => {
    //                 getDownloadURL(item).then((url) => {
    //                     setImgList((prev) => [...prev, { url: url }])
    //                 })
    //             })
    //         });
    //     }, 1000)
    //     return listAll
    // }, []);
    // // for (let index = 0; index < imgList.length; index++) {
    // //     room[index].name = imgList[index].url
    // // }
    // for (let index = 0; index < imgList.length; index++) {
    //     room[index].name = imgList[index].url
    // }

    const { room } = useContext(RoomContext);
    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    };
    function uniqByKeepFirst(a, key) {
        let seen = new Set();
        return a.filter(item => {
            let k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    }
    console.log("room", room)
    console.log("booking", booking)

    room.sort(function (sv1, sv2) {
        return sv1.info.price - sv2.info.price;
    })
    // const [isReserved, setIsReserved] = useState("false");
    // const [bookDate, setBookdate] = useState([]);
    // console.log(bookDate)
    // const filterReserved = () => {
    //     room.forEach((item) => {
    //         booking.filter((book) =>
    //             (book.room === item.info.room && book.in === "2023-04-07" && book.capital === true)).map((itemFilter) => {
    //                 setBookdate((prev) => [...prev, {
    //                     itemFilter: itemFilter
    //                 }])
    //             })
    //     })
    // }
    // filterReserved()

    // booking.filter((book) =>
    //     (book.room === item.info.room && book.in === "2023-04-07" && book.capital === true)).map((itemFilter) => { setIsReserved(true) })

    // { isReserved === true ? (<div>Reserved</div>) : (<></>) }
    const Filter = () => {
        const itemfilter = room.filter((item) => (item.info.people === filterForm.adult)
        )
        return itemfilter
    }
    console.log(Filter());
    console.log("booking", booking);
    console.log("filterForm", filterForm);
    return (
        <div style={{ height: "100%", width: "100%" }}>

            <div className="room-img" style={{ with: "100%", height: "700px" }}>ROOM</div>
            <div className="box">
                <div className="row" style={{ width: "100%", marginTop: "100px" }}>

                    {Filter().length === 0 ? (
                        <>
                            {
                                room.map((item, index) => (
                                    < div className="col-xl-4" key={index} style={{ marginBottom: "50px", padding: "0px", fontFamily: "unset" }} >
                                        <div className=" d-flex flex-column justify-content-center align-items-center">
                                            <NavLink to={`/room/${item.info.room}`} className={activeClass} id="img-link">
                                                <img alt="room-img" style={{ width: "400px", height: "300px", borderRadius: "10px" }} src={item.url}></img>
                                                <p className="detail">DETAIL</p>
                                            </NavLink>
                                            {uniqByKeepFirst(booking, it => it.capital).filter((book) =>
                                                ((book.room === item.info.room) && (book.capital === true) && (book.in === filterForm.in) && (book.out === filterForm.out))).map(() => {
                                                    return (<h1>Reserved</h1>)
                                                })
                                            }
                                            <div className="d-flex align-items-center">
                                                <strong style={{ fontSize: "20px", paddingRight: "20px" }}>{item.info.room}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </div>
                                            <div className="d-flex justify-content-around" style={{ width: "100%", fontSize: "20px" }}>
                                                <div className="d-flex align-items-center"><svg style={{ width: "20px", height: "20px", color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                </svg><div style={{ marginLeft: "10px" }}>{item.info.people} people</div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div style={{ color: "Green", fontSize: "20px" }}>{formatCash(item.info.price)} VND</div>
                                                        <div style={{ fontSize: "15px" }}>PER NIGHT</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }</>
                    ) : (
                        <>
                            {
                                room.filter((form) => (form.info.people === filterForm.adult)).map((item, index) => (
                                    < div className="col-xl-4" key={index} style={{ marginBottom: "50px", padding: "0px", fontFamily: "unset" }} >
                                        <div className=" d-flex flex-column justify-content-center align-items-center">
                                            <NavLink to={`/room/${item.info.room}`} className={activeClass} id="img-link">
                                                <img alt="room-img" style={{ width: "400px", height: "300px", borderRadius: "10px" }} src={item.url}></img>
                                                <p className="detail">DETAIL</p>
                                            </NavLink>
                                            {uniqByKeepFirst(booking, it => it.capital).filter((book) =>
                                                (book.room === item.info.room && book.capital === true && book.in === filterForm.in && book.out === filterForm.out)).map((filter) => {
                                                    return (<h1>Reserved</h1>)
                                                })
                                            }
                                            <div className="d-flex align-items-center">
                                                <strong style={{ fontSize: "20px", paddingRight: "20px" }}>{item.info.room}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </div>
                                            <div className="d-flex justify-content-around" style={{ width: "100%", fontSize: "20px" }}>
                                                <div className="d-flex align-items-center"><svg style={{ width: "20px", height: "20px", color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                </svg><div style={{ marginLeft: "10px" }}>{item.info.people} people</div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div style={{ color: "Green", fontSize: "20px" }}>{formatCash(item.info.price)} VND</div>
                                                        <div style={{ fontSize: "15px" }}>PER NIGHT</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }</>


                    )}

                </div>
            </div>
        </div >)
}