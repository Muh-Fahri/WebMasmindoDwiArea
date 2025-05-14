import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import { data, NavLink } from "react-router-dom";
import Footer from "./fotter";
import axios from "axios";
import NoData from "../Component/Error/NoData";


function Sosial() {
    const [masyarakatList, setMasyarakatList] = useState([]);
    const [kesehatanList, setKesehatanList] = useState([]);
    const [infraList, setInfraList] = useState([]);
    const [pemberdayaanList, setPemberdayaanList] = useState([]);

    useEffect(() => {
        getMasyarakatData();
        getKesehatanData();
        getInfrastrukturData();
        getPemberdayaan();
    }, []);



    const getMasyarakatData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/pengembanganMasyarakat");
            setMasyarakatList(res.data.sosialMasyarakat);
        } catch (error) {
            alert("Gagal Mengambil Data Sosial Masyarakat");
        }
    }

    const getKesehatanData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/kesehatan");
            setKesehatanList(res.data.sosialKesehatan);
        } catch (error) {
            alert("Gagal Mengambil Data Sosial Kesehtan");
        }
    }

    const getInfrastrukturData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/infrastruktur");
            setInfraList(res.data.sosialInfra);
        } catch (error) {
            alert("Gagal Mengambil Data Program Infrastruktur");
        }
    }
    const getPemberdayaan = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/pemberdayaan");
            setPemberdayaanList(res.data.sosialPemberdayaan);
        } catch (error) {
            alert("Gagal Mengambil Data Program Pemberdayaan Masyarakat");
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
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col">
                            <ul className="d-flex gap-5">
                                <li className="list-unstyled">
                                    <NavLink
                                        to="/ESG"
                                        className=" text-decoration-none"

                                    >
                                        <h1 className="text-black text-center fw-light">Lingkungan</h1>
                                        <div className="garis-bawah-esg"></div>
                                    </NavLink>
                                </li>
                                <li className="list-unstyled">
                                    <NavLink
                                        to="/ESG/sosial"
                                        className="text-decoration-none active-esg"
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
                {/* isi */}
                <div className="container-fluid p-5">
                    {/* isi */}
                    <div className="row">
                        <div className="col p-5">
                            <img style={{ maxHeight: "50vh", objectFit: 'cover' }} className="img-fluid w-100 h-100 rounded-5" src="/Image/Background/CampAwakMasJPEG.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {/* judul */}
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8">
                                    <h1 className="display-5 fw-bold">Program Pengembangan Masyarakat</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            {/* garis */}
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            {/* isi deskrip lingkungan */}
                            <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex delectus saepe suscipit dolore ut neque porro eveniet aspernatur sint quam sunt itaque nobis officiis dignissimos corporis, iste minima eum hic nulla praesentium repudiandae tempore? Pariatur omnis nulla asperiores voluptas veniam dicta hic doloremque qui porro rerum? Repudiandae hic, necessitatibus accusantium deserunt ullam illum autem nesciunt dignissimos ad debitis veritatis voluptatum amet praesentium modi, adipisci tempore delectus commodi in, explicabo expedita totam tempora! In eligendi eos, repellendus iste consequatur ratione quibusdam ipsum deserunt eum similique, beatae modi qui eius, possimus dolores velit iure officia ab necessitatibus nesciunt explicabo minus eaque.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
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
                                masyarakatList.length > 0 ? (
                                    masyarakatList.map((masyarakat) => (
                                        <div key={masyarakat.uuid} className="flex-shrink-0" style={{ width: "600px" }}>
                                            <div className="card rounded-5" style={{ height: "400px", overflow: "hidden" }}>
                                                <img src={`http://127.0.0.1:8000/Sosial/${masyarakat.imageSosial}`} alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="col">
                                                <NoData />
                                            </div>
                                        </div>
                                    </div>
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
            <section>
                {/* isi */}
                <div className="container-fluid p-5">
                    {/* isi */}
                    <div className="row">
                        <div className="col-md-4">
                            {/* judul */}
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8">
                                    <h1 className="display-5 fw-bold">Program Kesehatan</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            {/* garis */}
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            {/* isi deskrip lingkungan */}
                            <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex delectus saepe suscipit dolore ut neque porro eveniet aspernatur sint quam sunt itaque nobis officiis dignissimos corporis, iste minima eum hic nulla praesentium repudiandae tempore? Pariatur omnis nulla asperiores voluptas veniam dicta hic doloremque qui porro rerum? Repudiandae hic, necessitatibus accusantium deserunt ullam illum autem nesciunt dignissimos ad debitis veritatis voluptatum amet praesentium modi, adipisci tempore delectus commodi in, explicabo expedita totam tempora! In eligendi eos, repellendus iste consequatur ratione quibusdam ipsum deserunt eum similique, beatae modi qui eius, possimus dolores velit iure officia ab necessitatibus nesciunt explicabo minus eaque.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
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
                                kesehatanList.length > 0 ? (
                                    kesehatanList.map((kesehatan) => (
                                        <div key={kesehatan.uuid} className="flex-shrink-0" style={{ width: "600px" }}>
                                            <div className="card rounded-5" style={{ height: "400px", overflow: "hidden" }}>
                                                <img src={`http://127.0.0.1:8000/Sosial/${kesehatan.imageSosial}`} alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <NoData />
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
            <section>
                {/* isi */}
                <div className="container-fluid p-5">
                    {/* isi */}
                    <div className="row">
                        <div className="col-md-4">
                            {/* judul */}
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8">
                                    <h1 className="display-5 fw-bold">Program Infrastruktur</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            {/* garis */}
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            {/* isi deskrip lingkungan */}
                            <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex delectus saepe suscipit dolore ut neque porro eveniet aspernatur sint quam sunt itaque nobis officiis dignissimos corporis, iste minima eum hic nulla praesentium repudiandae tempore? Pariatur omnis nulla asperiores voluptas veniam dicta hic doloremque qui porro rerum? Repudiandae hic, necessitatibus accusantium deserunt ullam illum autem nesciunt dignissimos ad debitis veritatis voluptatum amet praesentium modi, adipisci tempore delectus commodi in, explicabo expedita totam tempora! In eligendi eos, repellendus iste consequatur ratione quibusdam ipsum deserunt eum similique, beatae modi qui eius, possimus dolores velit iure officia ab necessitatibus nesciunt explicabo minus eaque.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
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
                                infraList.length > 0 ? (
                                    infraList.map((infra) => (
                                        <div key={infra.uuid} className="flex-shrink-0" style={{ width: "600px" }}>
                                            <div className="card rounded-5" style={{ height: "400px", overflow: "hidden" }}>
                                                <img src={`http://127.0.0.1:8000/Sosial/${infra.imageSosial}`} alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <NoData />
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
            <section>
                {/* isi */}
                <div className="container-fluid p-5">
                    {/* isi */}
                    <div className="row">
                        <div className="col-md-4">
                            {/* judul */}
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8">
                                    <h1 className="display-5 fw-bold">Program Pemberdayaan</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            {/* garis */}
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            {/* isi deskrip lingkungan */}
                            <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex delectus saepe suscipit dolore ut neque porro eveniet aspernatur sint quam sunt itaque nobis officiis dignissimos corporis, iste minima eum hic nulla praesentium repudiandae tempore? Pariatur omnis nulla asperiores voluptas veniam dicta hic doloremque qui porro rerum? Repudiandae hic, necessitatibus accusantium deserunt ullam illum autem nesciunt dignissimos ad debitis veritatis voluptatum amet praesentium modi, adipisci tempore delectus commodi in, explicabo expedita totam tempora! In eligendi eos, repellendus iste consequatur ratione quibusdam ipsum deserunt eum similique, beatae modi qui eius, possimus dolores velit iure officia ab necessitatibus nesciunt explicabo minus eaque.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    {/* Wrapper tombol dan slider */}
                    {
                        pemberdayaanList.length > 0 ? (
                            pemberdayaanList.map((pemberdayaan) => (
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
                                        <div key={pemberdayaan.uuid} className="flex-shrink-0" style={{ width: "600px" }}>
                                            <div className="card rounded-5" style={{ height: "400px", overflow: "hidden" }}>
                                                <img src={`http://127.0.0.1:8000/Sosial/${pemberdayaan.imageSosial}`} alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
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
                            ))
                        ) : (
                            <NoData />
                        )
                    }
                </div>
            </section>
            <section className="pt-5">
                <Footer />
            </section>
        </div>
    )
}
export default Sosial;


