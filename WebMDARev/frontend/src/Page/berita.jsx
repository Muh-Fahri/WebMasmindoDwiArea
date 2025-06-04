import React, { useState, useEffect, useRef } from "react"; // Import useRef
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";

function Berita() {

    const [beritaList, setBeritaList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const debounceTimeoutRef = useRef(null);

    useEffect(() => {
        getBeritaData();
        Aos.init({
            duration: 1000,
        });
    }, []);


    const getBeritaData = async (keyword = "") => {
        setIsLoading(true);
        setMessage("");
        const trimmedKeyword = keyword.trim();
        const url = trimmedKeyword === ""
            ? "http://127.0.0.1:8000/api/user/berita"
            : `http://127.0.0.1:8000/api/admin/berita/search_berita?q=${encodeURIComponent(trimmedKeyword)}`;
        try {
            const res = await axios.get(url);
            // console.log("Data received:", res.data);
            setBeritaList(res.data.berita || []);
            setMessage(res.data.message || "");
        } catch (error) {
            console.error("Error fetching data:", error);
            setBeritaList([]);
            setMessage("Gagal memuat berita.");
            if (error.response && error.response.status === 404) {
                setMessage("Endpoint tidak ditemukan atau ada masalah server.");
            }
        } finally {
            setIsLoading(false);
        }
    };


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchKeyword(value);


        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }


        debounceTimeoutRef.current = setTimeout(() => {
            getBeritaData(value);
        }, 500);
    };


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
                                <a href="/berita" className="fs-1 text-decoration-none berita-active">Masmindo dalam berita</a>
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
                        <div>
                            <input
                                type="text"
                                placeholder="Cari berita..."
                                value={searchKeyword}
                                onChange={handleSearchChange}
                                className="search-bar p-3 form-control mb-5 rounded-5"
                            />
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                            {
                                isLoading ? (
                                    <div className="col text-center">Memuat berita...</div>
                                ) : (
                                    beritaList.length > 0 ? (
                                        beritaList.map((berita) => (
                                            <div key={berita.uuid} className="col">
                                                <div
                                                    className="card rounded-5 overflow-hidden position-relative card-berita"
                                                    style={{ width: "100%", maxWidth: "500px", height: "500px" }}
                                                >
                                                    <div
                                                        className="img-berita"
                                                        style={{
                                                            backgroundImage: `url(http://127.0.0.1:8000/Berita/${encodeURIComponent(berita.image_berita)})`,
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "center",
                                                            width: "100%",
                                                            height: "100%",
                                                        }}
                                                    ></div>

                                                    <div
                                                        className="position-absolute bottom-0 w-100 p-4"
                                                        style={{ color: 'white' }}
                                                    >
                                                        <p className="mb-1">
                                                            {new Date(berita.created_at).toLocaleDateString("id-ID", {
                                                                weekday: "long",
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
                                        <div className="justify-content-center">
                                            <div className="col text-center">
                                                <h1>{message || "No Data"}</h1>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Berita;