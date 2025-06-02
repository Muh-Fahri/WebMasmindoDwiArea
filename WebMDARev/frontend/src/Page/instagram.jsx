import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import EmbedInstagram from "../Component/Admin/embedIg";
import Aos from "aos";



function Instagram() {

    const [instagaramList, setInstagramList] = useState([]);


    const getInstagramData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/berita/instagram");
            setInstagramList(res.data.instagram);
            getInstagramData();
        } catch (error) {
            alert("Gagal Mengambil Data");
        }
    }

    useEffect(() => {
        getInstagramData();
        Aos.init({
            duration: 1000,
        })
    }, [])


    return (
        <div>
            <NavbarHijau />
            <div className="container-fluid pt-5 mt-5">
                <div className="row pt-5 mt-5">
                    <div className="col p-5">
                        <h2 className="text-uppercase fw-bold" style={{ color: '#115258' }}>Berita</h2>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-auto d-none d-sm-block">
                        <div className="garis-berita"></div>
                    </div>
                    <div className="col-md-4">
                        {/* Nav */}
                        <ul className="list-unstyled">
                            <li>
                                <a href="/berita" className="fs-1 text-black text-decoration-none">Masmindo dalam berita</a>
                            </li>
                            <li>
                                <a href="/instagram" className="fs-1 text-decoration-none berita-active-green">Instagram</a>
                            </li>
                            <li>
                                <a href="/youtube" className="fs-1 text-black text-decoration-none">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="row" data-aos="fade-down">
                            {
                                instagaramList.length > 0 ? (
                                    instagaramList.map((instagram) => (
                                        <div className="col-auto p-3">
                                            <EmbedInstagram url={instagram.linkInstagram} />
                                        </div>
                                    ))
                                ) : (
                                    <h1>Loading...</h1>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Instagram;