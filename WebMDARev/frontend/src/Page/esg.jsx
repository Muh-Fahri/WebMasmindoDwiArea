import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import Laporan from "./laporan";



function ESG() {

    const [deskripLingkunganList, setDeskripLingkunganList] = useState([]);
    const [imgLingList, setImgLingList] = useState([]);

    useEffect(() => {
        getdeskripLingkungan();
        getImgLingData();
        AOS.init({
            duration: 1000,
        })
    }, []);


    const getdeskripLingkungan = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/lingkungan/deskripLingkungan");
            setDeskripLingkunganList(res.data.deskripLingkunan);
            getdeskripLingkungan();
        } catch (error) {
            alert("Error Pada Pengambilan Data Deskripsi Lingkungan");
        }
    }

    const getImgLingData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/lingkungan/imgLingkungan");
            setImgLingList(res.data.imgLing);
            getImgLingData();
        } catch (error) {
            alert("Error Pada Pengambilan Data Gambar")
        }
    }


    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="bg-esg d-flex justify-content-center align-items-end" style={{ minHeight: '100vh' }}>
                    <div className="container mb-5">
                        <div className="row text-center" data-aos="fade-down">
                            <div className="col p-5">
                                <h1 className="display-1 fw-bold" style={{ color: "#F16022" }}>ESG</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Laporan />
            </section>
            <section className="p-5" data-aos="zoom-in-up">
                <div className="container p-5">
                    <div className="row mt-5">
                        <div className="col">
                            <ul className="nav-esg list-unstyled d-flex flex-md-row flex-column align-items-center justify-content-center gap-3 gap-md-5 p-0 m-0">
                                <li>
                                    <NavLink to="/ESG" className="active-esg text-decoration-none text-center">
                                        <h1 className="text-black fw-light fs-5 fs-md-3">Lingkungan</h1>
                                        <div className="garis-bawah-esg"></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ESG/sosial" className="text-decoration-none text-center">
                                        <h1 className="text-black fw-light fs-5 fs-md-3">Sosial</h1>
                                        <div className="garis-bawah-esg"></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tata-kelola" className="text-decoration-none text-center">
                                        <h1 className="text-black fw-light fs-5 fs-md-3">Tata Kelola</h1>
                                        <div className="garis-bawah-esg"></div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    {/* isi */}
                    <div className="row" data-aos="fade-right">
                        {/* Gambar versi besar */}
                        <div className="col p-5 d-none d-sm-block">
                            <img
                                className="img-fluid rounded-5 w-100"
                                style={{ maxHeight: "50vh", objectFit: 'cover' }}
                                src="/Image/Background/CampAwakMasJPEG.jpg"
                                alt=""
                            />
                        </div>

                        {/* Gambar versi mobile */}
                        <div className="d-block d-sm-none">
                            <img
                                className="img-fluid rounded-5 w-100 h-auto"
                                src="/Image/Background/CampAwakMasJPEG.jpg"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-auto ">
                            {/* judul */}
                            <div className="row d-flex justify-content-center p-5">
                                <div className="col-md-5">
                                    <h1 className="display-5 fw-bold">Kebijakan Lingkungan</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-none d-sm-block">
                            {/* garis */}
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col" data-aos="fade-down">
                            {
                                deskripLingkunganList.length > 0 ? (
                                    deskripLingkunganList.map((deskripLing) => (
                                        <div className="col" key={deskripLing.uuid}>
                                            {/* isi deskrip lingkungan */}
                                            <p className="deskripsi-lingkungan">
                                                {deskripLing.deskripsi_halaman}
                                            </p>


                                        </div>
                                    ))
                                ) : (
                                    <h5>No data</h5>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5" data-aos="fade-right">
                <div className="container-fluid" data-aos="fade-right">
                    {/* Wrapper tombol dan slider */}
                    <div className="position-relative">
                        {/* Tombol Kiri */}
                        <button
                            className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                            onClick={() => {
                                document
                                    .getElementById("dokEsg-slider")
                                    .scrollBy({ left: -300, behavior: "smooth" });
                            }}
                        >
                            &#10094;
                        </button>
                        <div
                            id="dokEsg-slider"
                            className="d-flex gap-3 flex-nowrap overflow-auto px-5"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            {
                                imgLingList.length > 0 ? (
                                    imgLingList.map((imgLing) => (
                                        <div
                                            className="flex-shrink-0 col-lg-6 col-md-8 col-sm-10 col-11"
                                            // style width dihapus, diganti CSS nanti
                                            style={{ maxWidth: "600px" }}
                                            key={imgLing.uuid}
                                        >
                                            <div className="card rounded-5 responsive-height"
                                                style={{ height: "400px", overflow: "hidden" }}>
                                                <img
                                                    src={`http://localhost:8000/Lingkungan/${imgLing.image_lingkungan}`}
                                                    alt="Laporan 2020"
                                                    className="w-100 h-100 object-fit-cover"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>

                                    ))
                                ) : (
                                    <h5>
                                        No Data
                                    </h5>
                                )
                            }
                        </div>
                        <button
                            className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                            onClick={() => {
                                document
                                    .getElementById("dokEsg-slider")
                                    .scrollBy({ left: 300, behavior: "smooth" });
                            }}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </section>
            <section className="pt-5">
                <Footer />
            </section>
        </div>
    )
}

export default ESG;