import React, { useState, useEffect } from "react";
import axios from "axios";



function Laporan() {

    const [laporanList, setLaporanList] = useState([]);

    useEffect(() => {
        getLaporan();
    }, []);

    const getLaporan = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/laporan");
            setLaporanList(res.data.laporan);
        } catch (error) {
            alert("Oops Terjadi suatu kesalahan pada server");
        }
    }





    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-5">
                            <h3 className="text-uppercase fw-semibold text-center text-secondary">
                                Laporan Keberlanjutan
                            </h3>
                        </div>
                    </div>

                    {laporanList.length > 0 ? (
                        <div className="position-relative">

                            {/* Tombol Kiri */}
                            <button
                                className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                                onClick={() => {
                                    document.getElementById("laporan-slider")?.scrollBy({ left: -300, behavior: "smooth" });
                                }}
                            >
                                &#10094;
                            </button>

                            {/* Kontainer Slider */}
                            <div
                                id="laporan-slider"
                                className="d-flex gap-3 flex-nowrap overflow-auto px-5"
                                style={{ scrollBehavior: "smooth" }}
                            >
                                {laporanList.map((laporan, index) => (
                                    <div key={index} className="flex-shrink-0" style={{ width: "300px" }}>
                                        <a
                                            href={`http://127.0.0.1:8000/api/user/esg/pdf/download/${laporan.stored_name}`}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div
                                                className="card rounded-3"
                                                style={{ height: "400px", overflow: "hidden" }}
                                            >
                                                <img
                                                    src="/Image/SampulLporanWeb.png"
                                                    alt={`Laporan ${laporan.tahun}`}
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            </div>
                                        </a>
                                        <div className="text-center mt-2">
                                            <h5 className="fw-bold">{laporan.tahun}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Kanan */}
                            <button
                                className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                                onClick={() => {
                                    document.getElementById("laporan-slider")?.scrollBy({ left: 300, behavior: "smooth" });
                                }}
                            >
                                &#10095;
                            </button>
                        </div>
                    ) : (
                        <h5 className="text-center">Loading...</h5>
                    )}
                </div>
            </section>

        </div>
    )
}
export default Laporan;