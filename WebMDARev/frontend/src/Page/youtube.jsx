import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";

function Youtube() {

    const [ytList, setYtList] = useState([]);

    const getYtData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/berita/youtube")
            setYtList(res.data.youtube);
        } catch (error) {
            alert("Gagal Mengambil Data");
        }
    }

    useEffect(() => {
        getYtData();
    }, [])
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
                                <a href="/berita" className="fs-1 text-black text-decoration-none">Masmindo dalam berita</a>
                            </li>
                            <li>
                                <a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a>
                            </li>
                            <li>
                                <a href="/youtube" className="fs-1 text-black text-decoration-none  fw-bold">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col p-3">
                                {
                                    ytList.length > 0 ? (
                                        ytList.map((youtube) => (
                                            <div className="col-auto p-3">
                                                <iframe className="rounded-5" width="1000" height="500" src={youtube.linkYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        ))
                                    ) : (
                                        <h1>Loading</h1>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Youtube;