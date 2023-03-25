import video from "../../../../Asset/video/video.mp4"
import "./Banner.css"
export default function Banner() {
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
                                <input style={{ height: "50px" }} id="check-in" name="arrival" placeholder="Check In" type="date" className="fancy_fild form-control" autocomplete="off" required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6" >
                            <div className="form-group">
                                <input style={{ height: "50px" }} id="check-out" name="depature" placeholder="Check Out" type="date" className="fancy_fild form-control" autocomplete="off" required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6" >
                            <div className="form-group">
                                <select style={{ height: "50px" }} className="form-select fancy_fild " aria-label="Default select example">
                                    <option value="1" selected>Hà Nội</option>
                                    <option value="2">Huế</option>
                                    <option value="3">Đà Nẵng</option>
                                    <option value="3">Thành phố Hồ Chí Minh</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ margin: "0px 0px 0px 0px" }}>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <input style={{ height: "50px" }} type="number" name="adult" required="required" placeholder="Adult" className="fancy_fild form-control" autocomplete="off" min="0" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <input style={{ height: "50px" }} type="number" name="children" required="required" placeholder="Children" className="fancy_fild form-control" autocomplete="off" min="0" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group m-0">
                                <button style={{ height: "50px", fontSize: "20px" }} type="submit" className="btn btn-success btn-block">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}
