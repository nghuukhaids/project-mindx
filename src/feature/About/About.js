import Aboutus1 from "../../Asset/img/aboutus1.jpg"
import Aboutus2 from "../../Asset/img/aboutus2.jpg"
import "./About.css"
import Footer from "../Home/home-components/Footer/Footer"
export default function About() {
    return (
        <div className="about">
            <div className="about-us-box">
                <h1>About US</h1>
                <img alt="banner" className="about-us-banner" src={Aboutus1}></img>
            </div>
            <div className="content-about-us">
                <div className="content-about-us-left">
                    <h1>Welcome to Gwesty</h1>
                    <p>Duis sollicitudin augue nec bibendum mollis. Proin luctus diam vel hendrerit dictum. Nunc tincidunt nibh in sem blandit venenatis. Suspendisse rutrum ultricies porttitor. Quisque at volutpat nibh.Aliquam dapibus turpis mollis felis fermentum bibendum. In finibus a nulla vitae dapibus. Nam non suscipit urna. Vestibulum et lacinia justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br></br>
                        Proin nisl mi, eleifend in faucibus et, venenatis eu turpis. Ut hendrerit eleifend odio. Nullam ullamcorper viverra ex quis tempus. In hac habitasse platea dictumst. Vestibulum sed tempor metus.</p>
                </div>
                <img alt="aboutus2" src={Aboutus2}></img>
            </div>
            <Footer></Footer>
        </div>
    )
}