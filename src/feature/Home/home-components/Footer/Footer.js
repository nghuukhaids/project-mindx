import Hotel from "../../../../Asset/img/hotel.jpg"
import "./Footer.css"
export default function Footer() {
    return (
        <div>
            <div className="img-banner-box">
                <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam. Etiam eget mi
                    enim, non ultricies nisi voluptatem, illo inventore veritatis.</p>
                <img className="img-banner" src={Hotel} alt="" />
            </div>


            <div className="logo">
                <div className="logo_title">Our Partners</div>
                <div className="logo_detail">
                    <div><img src="../brand_logo_img01.png" alt="" /></div>
                    <div><img src="../brand_logo_img02.png" alt="" /></div>
                    <div><img src="../brand_logo_img03.png" alt="" /></div>
                    <div><img src="../brand_logo_img04.png" alt="" /></div>
                </div>
            </div>
            <footer>
                <div className="footer_title">JOIN NEW LETTER</div>
                <div className="input_mail">
                    <input className="input_email" type="text" placeholder="Email Address" />
                    <button>SIGN UP NOW</button>
                </div>
                <div className="detail_footer">
                    <div className="logo_detailfooter">
                        <img src="../logo.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl vel nunc posuere rhoncus. Su spendisse tortor orci, pulvinar in tincidunt non, sodales vitae metus. Cras pulvinar ultricies egestas. Aenean faucibus dolor.</p>
                    </div>
                    <div>
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li>Home</li>
                            <li>Hotels</li>
                            <li>Pages</li>
                            <li>Blog</li>
                            <li>Extra</li>
                        </ul>
                    </div>
                    <div>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>My Accounts</li>
                            <li>Wishlist</li>
                            <li>Review</li>
                            <li>FAQ</li>
                            <li>Privacy</li>
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3>SOCIAL LINKS</h3>
                    </div>
                </div>
            </footer>
        </div>
    )
}
