import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { RoomOriginal } from "../../Components/RoomOriginal/RoomOriginal";
import "./Room.css"
export default function Room() {
    const sum = [];
    const [room, setRoom] = useState([])
    // const handleGetData = () => {

    // }
    useEffect(() => {
        db.collection("room").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                sum.push(doc.data());
                setRoom(sum);
                console.log(room)
            }
            );
        })
    }, [db])
    return (
        <div style={{ height: "100%" }}>
            <h1>Rooms</h1>
            <p>Room 1</p>
            <p>Room 2</p>
            <p>Room 3</p>
            <div className="box">
                {/* <div className="row">
                    {RoomOriginal.map((item, index) => (
                        <div className="col-xl-3" key={index} >
                            <div className="card d-flex flex-column justify-content-end">
                                <div>{item.room}</div>
                                <div>{item.people}</div>
                                <div>{item.price}</div>
                                <img src={item.img}></img>
                            </div>
                        </div>)
                    )
                    }
                </div> */}
                <div className="row">
                    {room.map((item, index) => (
                        <div className="col-xl-3" key={index} >
                            <div className="card d-flex flex-column justify-content-end">
                                <div>{item.room}</div>
                                <div>{item.people}</div>
                                <div>{item.price}</div>
                                <img src={item.img}></img>
                            </div>
                        </div>)
                    )
                    }
                </div>
            </div>
        </div >
    )
}