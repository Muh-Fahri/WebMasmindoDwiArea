import React, { useState, useEffect } from "react";
import NavbarProject from "../Component/navbarProject";
import axios from "axios";
import Footer from "./fotter";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Bisnis() {




    const [bisnisList, setBisnisList] = useState([]);

    useEffect(() => {
        getBisnisData();
        AOS.init({
            duration: 1000,
        });
    }, []);

    const getBisnisData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/bisnis");
            setBisnisList(res.data.bisnisUser);
        } catch (error) {
            alert('Erorr Pada Tampilan');
        }
    }
    return (
        <div>
            <NavbarProject />
            <section>
                <div className="bg-bisnis d-flex align-items-center">
                    <div className="container-fluid p-5" data-aos="fade-right">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <h1 className="fw-bold text-break"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 5rem)',
                                        color: '#F16022',
                                    }}>
                                    Tambang Emas <span style={{ color: "#115258" }}>Pertama</span>
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-white text-break"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 5rem)',
                                    }}>
                                    di Sulawesi Selatan
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    <div className="row p-3 p-md-5 align-items-center">
                        {/* Gambar */}
                        <div className="col-12 col-md-auto mb-4 mb-md-0" data-aos="fade-right">
                            <img
                                className="img-fluid"
                                src="/Image/AwakMasCol.png"
                                alt="Logo"
                                style={{ width: "300px", height: "auto" }}
                            />
                        </div>
                        <div className="d-none d-md-block col-md-auto">
                            <div className="garis-aw-p"></div>
                        </div>

                        <div className="col-12 col-md" data-aos="fade-down">
                            {bisnisList.length > 0 ? (
                                bisnisList.map((bisnis) => (
                                    <p key={bisnis.uuid} className="fs-3 fs-md-5">{bisnis.deskripsi_bisnis}</p>
                                ))
                            ) : (
                                <h5>No Data</h5>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5 " data-aos="fade-down"  >
                    <div className="row mt-4">
                        {bisnisList.length > 0 ? (
                            <div className="col p-5">
                                {bisnisList.map((bisnis) => ((
                                    <div key={bisnis.uuid} className="responsive-iframe-container">
                                        <iframe
                                            className="rounded-5 shadow-lg"
                                            src={bisnis.link_video}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )))}
                            </div>
                        ) : (
                            <div className="justify-content-center">
                                <h5>No Data Yet</h5>
                            </div>
                        )};
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}
export default Bisnis;