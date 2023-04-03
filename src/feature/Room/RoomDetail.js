import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RoomContext } from '../../Context/RoomContext';
import { useContext } from 'react';
import "./RoomDetail.css"
import { useState } from 'react';
import Banner from "./Banner.jpg"
import { db } from "../../firebase/config"
import { AuthContext } from '../../Context/AuthContext';

function RoomDetail() {
    const { user } = useContext(AuthContext);
    const { room } = useContext(RoomContext);
    const { nameRoom } = useParams();
    const [formBooking, setFormBooking] = useState(
        {
            in: "",
            out: "",
            adult: "",
            children: "",
            room: "",
            cus: "",
            account: "",
            date: ""
        }
    )
    const uploadData = (collection, data) => {
        db.collection(collection).add(data);
    }
    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }
    const handleChangeFormBooking = (event) => {
        const { name, value } = event.target;
        setFormBooking({
            ...formBooking,
            [name]: value,
            room: nameRoom,
            account: {
                userName: user.displayName,
                email: user.email
            },
            bookDate: new Date().getHours() + ":" + new Date().getMinutes() + '-' + new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()
        })
    }
    console.log(formBooking)
    const navigate = useNavigate();
    const handleSubmitFormBooking = (event) => {
        event.preventDefault();
        if (formBooking.account.userName === undefined || formBooking.account.email === undefined) {
            alert("Please Log In To Book Room")
            navigate("/login")
        } else if (window.confirm("Booking Confirm Again") === true) {
            if ((formBooking.in && formBooking.out && formBooking.adult && formBooking.cus) || (formBooking.in && formBooking.out && formBooking.children && formBooking.cus)) {
                event.preventDefault();
                uploadData("booking-order", {
                    in: formBooking.in,
                    out: formBooking.out,
                    adult: formBooking.adult,
                    children: formBooking.children,
                    room: formBooking.room,
                    cus: formBooking.cus,
                    account: formBooking.account.email,
                    bookDate: formBooking.bookDate
                })
                alert("SuccesFull Booking Room")
            } else {
                event.preventDefault();

                alert("Please Book Again")
            }


        }

    }
    return (

        < div classNameName="room-detail" >
            <div classNameName="container">
                <div className="banner">
                    <img alt="banner" style={{ height: "500px", width: "100%" }} src={Banner}></img>
                    <p>ROOM DETAIL</p>
                </div>
                {
                    room.filter((item) => (item.info.room === nameRoom)).map((itemFilter) => {
                        return (
                            <div classNameName="full-detail">
                                <section>
                                    <div className="container">
                                        <div className="row" style={{ padding: 0 }}>
                                            <div className="col-lg-9 col-md-12">
                                                <div className="hotel-detail">
                                                    <div>
                                                        <h3 className="d-flex" style={{ fontSize: "30px", color: "black", marginLeft: "0px" }}>{itemFilter.info.room}</h3>
                                                        <hr />
                                                    </div>
                                                    <div className="product_detail_slider1">
                                                        <img style={{ width: '100%' }} src={itemFilter.url} alt="anh" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-12">
                                                <div className="booking_detail_form">
                                                    <div className="yemm_top_price">
                                                        <strong style={{ fontSize: "30px", color: "white" }}>{formatCash(itemFilter.info.price)} VND</strong>
                                                        <p style={{ fontSize: "20px", color: "white" }}>Per Night</p>
                                                    </div>
                                                    <form id="booking" className="booking_form1">
                                                        <h4 style={{ fontSize: "30px", color: "black" }} className="form_title">Booking</h4>
                                                        <div className="formdetail">
                                                            <label className="d-flex" for="check-in">Check in</label>
                                                            <input name="in" value={formBooking.in} onChange={handleChangeFormBooking} id="check-in" placeholder="Check In" type="date" className="fancy_fild form-control" /></div>
                                                        <div className="form-checkout">
                                                            <label className="d-flex" for="check-out">Check out</label>
                                                            <input name="out" value={formBooking.out} onChange={handleChangeFormBooking} id="check-out" placeholder="Check Out" type="date" className="fancy_fild form-control" />
                                                        </div>
                                                        <div className="form-checkout">
                                                            <label className="d-flex" for="cus">Your Name</label>
                                                            <input name="cus" value={formBooking.cus} onChange={handleChangeFormBooking} id="cus" placeholder="Your Name" type="text" className="fancy_fild form-control" />
                                                        </div>
                                                        <div style={{ marginTop: "20px", marginBottom: "20px" }} className="form-group d-flex align-items-center justify-content-between ">
                                                            <label for="adult">Adult</label>
                                                            <input id="adult" name="adult" value={formBooking.adult} onChange={handleChangeFormBooking} type="number" placeholder='0' />
                                                            <label for="children">Children</label>
                                                            <input id="children" name="children" value={formBooking.children} onChange={handleChangeFormBooking} type="number" placeholder='0' />
                                                        </div>
                                                        <button type="submit" onClick={handleSubmitFormBooking} class="btn btn-success">BOOK NOW</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <nav style={{ marginTop: "50px", color: "black", fontSize: "20px" }}>
                                                <ul className="d-flex justify-content-around">
                                                    <li>
                                                        <a className="nav-link" href="#scrollspyHeading1">Overview</a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#scrollspyHeading3">Location</a>
                                                    </li>

                                                </ul>
                                            </nav>
                                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                                                <h4 id="scrollspyHeading1">Overview</h4>
                                                <div className="col-lg-12">
                                                    <div id="owerviwe">
                                                        <div className="dic_coman_style">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-12 col-sm-6 d-flex flex-column">
                                                                    <strong className="d-flex flex-column align-items-start">The Space</strong>
                                                                    <ul style={{ padding: "0px" }} className="d-flex flex-column align-items-start">
                                                                        <li>
                                                                            Check In:
                                                                            <strong>Anytime after 2PM</strong>
                                                                        </li>
                                                                        <li>
                                                                            Check Out:
                                                                            <strong>10AM</strong>
                                                                        </li>
                                                                        <li>
                                                                            Accommodates:
                                                                            <strong>2</strong>
                                                                        </li>
                                                                        <li>
                                                                            Bathrooms:
                                                                            <strong>1</strong>
                                                                        </li>
                                                                        <li>
                                                                            Bed type:
                                                                            <strong>Real Bed</strong>
                                                                        </li>
                                                                        <li>
                                                                            Bedrooms:
                                                                            <strong>1</strong>
                                                                        </li>
                                                                        <li>
                                                                            Beds:
                                                                            <strong>1</strong>
                                                                        </li>
                                                                        <li>
                                                                            Pet Owner:
                                                                            <strong>Dog(s) and cat(s)</strong>
                                                                        </li>
                                                                        <li>
                                                                            Property type:
                                                                            <strong>Treehouse</strong>
                                                                        </li>
                                                                        <li>
                                                                            Room type:
                                                                            <strong>Entire home/apt</strong>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-sm-6 d-flex flex-column">
                                                                    <strong className="d-flex flex-column align-items-start"  >Prices</strong>
                                                                    <ul style={{ padding: "0px" }} className="d-flex flex-column align-items-start">
                                                                        <li>
                                                                            Extra people:
                                                                            <strong>No Charge</strong>
                                                                        </li>
                                                                        <li>
                                                                            Cleaning Fee:
                                                                            <strong>65</strong>
                                                                        </li>
                                                                        <li>
                                                                            Weekly Discount:
                                                                            <strong>10%</strong>
                                                                        </li>
                                                                        <li>
                                                                            Monthly Discount:
                                                                            <strong>20%</strong>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dic_coman_style">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-12 col-sm-6 d-flex flex-column ">
                                                                    <strong className="des_title d-flex flex-column align-items-start">Amenities</strong>
                                                                    <ul style={{ padding: "0px" }} className="list-style-none d-flex flex-column align-items-start">
                                                                        <li>
                                                                            Wifi:
                                                                            <strong>Free</strong>
                                                                        </li>
                                                                        <li>
                                                                            Elevator:
                                                                            <strong>No</strong>
                                                                        </li>
                                                                        <li>
                                                                            Hair Dryer :
                                                                            <strong>Yes</strong>
                                                                        </li>
                                                                        <li>
                                                                            Air Conditioning :
                                                                            <strong>Yes</strong>
                                                                        </li>
                                                                        <li>
                                                                            Parking:
                                                                            <strong>$20 / Car / Night</strong>
                                                                        </li>
                                                                        <li>
                                                                            Safety Box:
                                                                            <strong>Yes</strong>
                                                                        </li>
                                                                        <li>
                                                                            Television :
                                                                            <strong>Yes</strong>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-sm-6 d-flex flex-column">
                                                                    <strong className="list-style-none d-flex flex-column align-items-start">House Rules</strong>
                                                                    <ul style={{ padding: "0px" }} className="list-style-none d-flex flex-column align-items-start">
                                                                        <li>No smoking</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 id="scrollspyHeading3" className="d-flex">Location</h4>
                                                <div className="col-lg-12">
                                                    <div id="Location_sec" className="dic_coman_style location_contant">
                                                        <address className="d-flex flex-column align-items-start">
                                                            <div>{itemFilter.add}</div>
                                                            <div>Phone : +123 456 7890</div>
                                                            <div>info@example.com</div>
                                                        </address>
                                                        <div className="hotel_loca_map">
                                                            <iframe title="myFrame" style={{ width: "100%", height: "200px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d227983.263496325!2d75.80659278740234!3d26.768666699297366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1518501774240" allowFullScreen />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




                                        </div>
                                    </div>
                                </section>
                                <footer className="fooetr_Bg">
                                    <div className="footer_inner padding_95">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-7 newsletter_parent text-center">
                                                    <h3 className="main_hadding text-uppercase white-text">JOIN THE
                                                        NEWSLETTER</h3>
                                                    <div className="form-group rel_position">
                                                        <input type="text" placeholder="Email Address..." className="form-control" /> <input type="submit" defaultValue="SIGN UP NOW" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row footer_bottom">
                                                <div className="col-lg-3 col-md-6">
                                                    <img src="/resources/assets/images/logo.png" alt="logo" />
                                                    <p className="justify_text">Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Praesent a nisl vel nunc posuere rhoncus. Su
                                                        spendisse tortor orci, pulvinar in tincidunt non, sodales vitae
                                                        metus. Cras pulvinar ultricies egestas. Aenean faucibus dolor.</p>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <h4>USEFUL LINKS</h4>
                                                    <ul className="footer_links">
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Home</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Hotels</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Pages</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Blog</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Extra</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <h4>QUICK LINKS</h4>
                                                    <ul className="footer_links">
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">My
                                                            Accounts</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">wishlist</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Review</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">FAQ</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Privacy</a></li>
                                                        <li><i className="fa fa-angle-double-right" /><a href="#!">Terms &amp; Conditions</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <h4>SOCIAL LINKS</h4>
                                                    <ul className="footer_socail">
                                                        <li><a href="#!"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="#!"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" /></a></li>
                                                        <li><a href="#!"><i className="fa fa-pinterest-p" /></a></li>
                                                        <li><a href="#!"><i className="fa fa-instagram" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row pt-45">
                                                <div className="footer_widget col-lg-6">
                                                    <ul>
                                                        <li>Download Our APP :</li>
                                                        <li><i className="fa fa-android" aria-hidden="true" /></li>
                                                        <li><i className="fa fa-apple" aria-hidden="true" /></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p className="copyright">
                                                        Copyright <i className="fa fa-copyright white-text" /> 2019 Gwesty.
                                                        All Right Reserved.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </footer>

                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}

export default RoomDetail
