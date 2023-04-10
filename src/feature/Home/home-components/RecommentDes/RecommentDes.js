import "./RecommentDes.css"
import HaNoi from "../../../../Asset/img/HaNoi.jpg"
import Hue from "../../../../Asset/img/Hue.jpg"
import DaNang from "../../../../Asset/img/DaNang.jpg"
import TPHCM from "../../../../Asset/img/TPHCM.jpg"
import NhaTrang from "../../../../Asset/img/NhaTrang.jpg"
export default function RecommentDes() {
    return (
        <div className="recomment">
            <section className="padding_75 recommended_destinations">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="main_hadding">
                                Recommended Destinations <span className="h2_babuls_style"></span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="yemm_desti_blog" style={{ height: "50%" }}>
                                <img src={HaNoi} className="img-fluid" alt="" style={{ height: "100%", padding: "0px 0px 10px 25px" }} />
                                <div className="yemm_desti_inner flex-grow-1" style={{ height: "100%", padding: "0px 0px 10px 25px" }} >
                                    <h3>Hà Nội</h3>
                                    <label>240 HOTELS</label>
                                </div>
                            </div>
                            <div className="yemm_desti_blog" style={{ height: "50%" }}>
                                <img src={Hue} className="img-fluid" alt="" style={{ height: "100%", padding: "10px 0px 0px 25px" }} />
                                <div className="yemm_desti_inner" style={{ height: "100%", padding: "10px 0px 0px 25px" }} >
                                    <h3>Huế</h3>
                                    <label>430 HOTELS</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="yemm_desti_blog">
                                <img src={DaNang} className="img-fluid" alt="" />
                                <div className="yemm_desti_inner">
                                    <h3>Đà Nẵng</h3>
                                    <label>560 HOTELS</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="yemm_desti_blog" style={{ height: "50%" }}>
                                <img src={TPHCM} className="img-fluid" style={{ height: "100%", padding: "0px 25px 10px 0px" }} alt="" />
                                <div className="yemm_desti_inner" style={{ height: "100%", padding: "0px 25px 10px 0px" }}>
                                    <h3>Thành phố Hồ Chí Minh</h3>
                                    <label>320 HOTELS</label>
                                </div>
                            </div>
                            <div className="yemm_desti_blog" style={{ height: "50%" }}>
                                <img src={NhaTrang} className="img-fluid" style={{ height: "100%", padding: "10px 25px 0px 0px" }} alt="" />
                                <div className="yemm_desti_inner" style={{ height: "100%", padding: "10px 25px 0px 0px" }}>
                                    <h3>Nha Trang</h3>
                                    <label>430 HOTELS</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
