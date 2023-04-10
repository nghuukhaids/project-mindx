import video from "../../../../Asset/video/video.mp4"
import { useContext, useState } from "react";
import "./Banner.css"
import { RoomContext } from "../../../../Context/RoomContext";
import { useNavigate } from "react-router-dom";
export default function Banner() {
    const { filterForm, setFilterForm } = useContext(RoomContext);
    const { room } = useContext(RoomContext);

    const [formBooking, setFormBooking] = useState("");
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setFormBooking({
            ...formBooking,
            [name]: value,
        });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilterForm(formBooking);
        navigate("/room")

    }
    const handleUnfilter = () => {
        setFilterForm("");
        navigate("/room")


    }
    console.log(formBooking);
    console.log(filterForm)
    console.log(room)
    const navigate = useNavigate();
    return (
        <div className="banner">
            <video src={video} autoPlay loop muted />
            <div className="content">
                <h1>Best Hotel To Stay</h1>
                <p>The best hotel deal from all the top hotel sites.</p>
                <form id="booking-form" type="submit">
                    <div className="row" style={{ margin: "0px 0px 50px 0px" }}>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="form-group">
                                <input style={{ height: "50px" }} id="check-in" name="in" value={formBooking.in} onChange={handleChangeValue} placeholder="Check In" type="date" className="fancy_fild form-control" required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6" >
                            <div className="form-group">
                                <input style={{ height: "50px" }} id="check-out" name="out" value={formBooking.out} onChange={handleChangeValue} placeholder="Check Out" type="date" className="fancy_fild form-control" required />
                            </div>
                        </div>
                        {filterForm ? (<div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group m-0">
                                <button style={{ height: "50px", fontSize: "20px" }} type="submit" onClick={handleUnfilter} className="btn btn-success btn-block">Unfilter</button>
                            </div>
                        </div>) : (<div></div>)}


                    </div>

                    <div className="row" style={{ margin: "0px 0px 0px 0px" }}>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <input style={{ height: "50px" }} type="number" name="adult" value={formBooking.adult} onChange={handleChangeValue} required="required" placeholder="Adult" className="fancy_fild form-control" min="0" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <input style={{ height: "50px" }} type="number" name="children" value={formBooking.children} onChange={handleChangeValue} required="required" placeholder="Children" className="fancy_fild form-control" min="0" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group m-0">
                                <button style={{ height: "50px", fontSize: "20px" }} type="submit" onClick={handleSubmit} className="btn btn-success btn-block">Search</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div >
        </div >
    )
}
