import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import NavEsgR from "./navEsgR";
import { NavLink } from "react-router-dom";



function ESG() {

    const [deskripLingkunganList, setDeskripLingkunganList] = useState([]);
    const [imgLingList, setImgLingList] = useState([]);

    useEffect(() => {
        getdeskripLingkungan();
        getImgLingData();
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
                        <div className="row text-center">
                            <div className="col p-5">
                                <h1 className="display-1 fw-bold" style={{ color: "#F16022" }}>ESG</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-5">
                            <h3 className="text-uppercase fw-semibold text-center text-secondary">
                                Laporan Keberlanjutan
                            </h3>
                        </div>
                    </div>

                    {/* Wrapper tombol dan slider */}
                    <div className="position-relative">
                        {/* Tombol Kiri */}
                        <button
                            className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                            onClick={() => {
                                document
                                    .getElementById("laporan-slider")
                                    .scrollBy({ left: -300, behavior: "smooth" });
                            }}
                        >
                            &#10094;
                        </button>

                        {/* Slider */}
                        <div
                            id="laporan-slider"
                            className="d-flex gap-3 flex-nowrap overflow-auto px-5"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            {/* Item 1 */}
                            <div className="flex-shrink-0" style={{ width: "300px" }}>
                                <div className="card rounded-3" style={{ height: "400px", overflow: "hidden" }}>
                                    <img src="/Image/Background/CampAwakMasJPEG.jpg" alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="text-center mt-2">
                                    <h5 className="fw-bold">2020</h5>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                            onClick={() => {
                                document
                                    .getElementById("laporan-slider")
                                    .scrollBy({ left: 300, behavior: "smooth" });
                            }}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </section>
            <section>
                {/* nav */}
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col">
                            <ul className="d-flex gap-5">
                                <li className="list-unstyled">
                                    <NavLink
                                        to="/ESG"
                                        className="active-esg text-decoration-none"

                                    >
                                        <h1 className="text-black text-center fw-light">Lingkungan</h1>
                                        <div className="garis-bawah-esg"></div>
                                    </NavLink>
                                </li>
                                <li className="list-unstyled">
                                    <NavLink
                                        to="/ESG/sosial"
                                        className="text-decoration-none"
                                    >
                                        <h1 className="text-black text-center fw-light">Sosial</h1>
                                        <div className="garis-bawah-esg"></div>
                                    </NavLink>
                                </li>
                                <li className="list-unstyled">
                                    <NavLink
                                        to="tata-kelola"
                                        className="text-decoration-none"
                                    >
                                        <h1 className="text-black text-center fw-light">Tata Kelola</h1>
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
                    <div className="row">
                        <div className="col p-5">
                            <img style={{ maxHeight: "50vh", objectFit: 'cover' }} className="img-fluid w-100 h-100 rounded-5" src="/Image/Background/CampAwakMasJPEG.jpg" alt="" />
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
                        <div className="col-auto">
                            {/* garis */}
                            <div className="garis-esg"></div>
                        </div>
                        {
                            deskripLingkunganList.length > 0 ? (
                                deskripLingkunganList.map((deskripLing) => (
                                    <div className="col" key={deskripLing.uuid}>
                                        {/* isi deskrip lingkungan */}
                                        <p className="fs-3">{deskripLing.deskripsi_halaman}</p>
                                    </div>
                                ))
                            ) : (
                                <h5>No data</h5>
                            )
                        }
                    </div>
                </div>
            </section>
            <section className="pt-5">
                <div className="container-fluid">
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
                                        <div className="flex-shrink-0" style={{ width: "600px" }}>
                                            <div className="card rounded-5" style={{ height: "400px", overflow: "hidden" }}>
                                                <img src={`http://localhost:8000/Lingkungan/${imgLing.image_lingkungan}`} alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
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