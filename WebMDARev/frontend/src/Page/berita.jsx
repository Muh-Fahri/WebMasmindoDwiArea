import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

function Berita() {

    const [beritaList, setBeritaList] = useState([]);


    useEffect(() => {
        getBeritaData();
    }, []);


    const getBeritaData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/berita")
            setBeritaList(res.data.berita);
            getBeritaData();
        } catch (error) {
            alert("Eror Pada Pengambilan Data Berita")
        }
    }



    return (
        <div>
            <NavbarHijau />
            <div className="container-fluid pt-5 mt-5">
                <div className="row pt-5 mt-5">
                    <div className="col p-5">
                        <h2 className="text-uppercase text-secondary">Berita</h2>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-auto">
                        <div className="garis-berita"></div>
                    </div>
                    <div className="col-md-4">
                        {/* Nav */}
                        <ul className="list-unstyled">
                            <li>
                                <a href="/berita" className="fs-1 text-black text-decoration-none fw-bold">Masmindo dalam berita</a>
                            </li>
                            <li>
                                <a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a>
                            </li>
                            <li>
                                <a href="/youtube" className="fs-1 text-black text-decoration-none">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="row">
                            {
                                beritaList.length > 0 ? (
                                    beritaList.map((berita) => (
                                        <div key={berita.uuid} className="col-auto p-3">
                                            <div
                                                className="card rounded-5 overflow-hidden position-relative"
                                                style={{ width: '500px', height: '500px' }}
                                            >
                                                <div
                                                    className="img-berita"
                                                    style={{
                                                        backgroundImage: `url(http://127.0.0.1:8000/Berita/${encodeURIComponent(berita.image_berita)})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                ></div>

                                                <div
                                                    className="position-absolute bottom-0 w-100 p-4"
                                                    style={{ color: 'white' }}
                                                >
                                                    <p className="mb-1">
                                                        {new Date(berita.created_at).toLocaleDateString("id-ID", {
                                                            weekday: "long", // tampilkan hari
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric"
                                                        })}
                                                    </p>
                                                    <h5 className="fw-bold mb-2">
                                                        {berita.judul_berita}
                                                    </h5>
                                                    <div className="d-flex justify-content-center">
                                                        <Link to={`/berita/selengkapnya/${berita.uuid}`} className="text-white display-5 text-decoration-none">
                                                            <FontAwesomeIcon icon={faCircleArrowRight} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <h1>No Data</h1>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Berita;