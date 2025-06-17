import React, { useState, useEffect, useRef } from "react"; // Import useRef
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
import { useTranslation } from "react-i18next";


function Berita() {

    const [beritaList, setBeritaList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { t, i18n } = useTranslation();

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
        let url = "";
        if (trimmedKeyword === "") {
            url = "http://127.0.0.1:8000/api/user/berita";
        } else {
            url = `http://127.0.0.1:8000/api/admin/berita/search_berita?q=${encodeURIComponent(trimmedKeyword)}`;
        }

        try {
            const res = await axios.get(url);
            let processedBerita = [];

            if (trimmedKeyword === "") {
                processedBerita = res.data.berita || [];
            } else {
                const resultsId = res.data.berita_id || [];
                const resultsEn = res.data.berita_en || [];
                const uniqueBeritaMap = new Map();
                resultsId.forEach(item => uniqueBeritaMap.set(item.uuid, item));
                resultsEn.forEach(item => uniqueBeritaMap.set(item.uuid, item));
                processedBerita = Array.from(uniqueBeritaMap.values());
            }
            setBeritaList(processedBerita);
            if (processedBerita.length === 0 && trimmedKeyword !== "") {
                setMessage(t('news_no_results'));
            } else if (processedBerita.length === 0 && trimmedKeyword === "") {
                setMessage(t('data_empty'));
            } else {
                setMessage("");
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            setBeritaList([]);
            setMessage(t('news_fetch_error'));
            if (error.response && error.response.status === 404) {
                setMessage('No Data');
            }
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {

        getBeritaData();
    }, []);


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchKeyword(value);
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(() => {
            getBeritaData(value);
        }, 500);
    }
    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container-fluid pt-5 mt-5">
                    <div className="row pt-5 mt-5">
                        <div className="col p-5">
                            <h2 className="text-uppercase fw-bold" style={{ color: '#115258' }}>{t('news_title')}</h2>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-auto d-none d-sm-block">
                            <div className="garis-berita"></div>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/berita" className="fs-1 text-decoration-none berita-active">{t('news_in_masmindo')}</a>
                                </li>
                                <li>
                                    <a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a>
                                </li>
                                <li>
                                    <a href="/youtube" className="fs-1 text-black text-decoration-none">Youtube</a>
                                </li>
                                <li>
                                    <a href="/dokumentasi" className="fs-1 text-black text-decoration-none">{t('documentation_title')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('news_search_placeholder')}
                                    value={searchKeyword}
                                    onChange={handleSearchChange}
                                    className="search-bar p-3 form-control mb-5 rounded-5"
                                />
                            </div>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {
                                    isLoading ? (
                                        <div className="col text-center">{t('news_loading')}</div>
                                    ) : (
                                        beritaList.length > 0 ? (
                                            beritaList.map((berita) => (
                                                <div key={berita.uuid} className="col d-flex justify-content-center">
                                                    <div
                                                        className="card rounded-5 overflow-hidden position-relative card-berita"
                                                        style={{ width: "100%", maxWidth: "500px", height: "500px" }}
                                                    >
                                                        <div
                                                            className="img-berita"
                                                            style={{
                                                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(http://127.0.0.1:8000/Berita/${encodeURIComponent(berita.image_berita)})`,
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
                                                                {new Date(berita.created_at).toLocaleDateString(i18n.language, {
                                                                    weekday: "long",
                                                                    day: "numeric",
                                                                    month: "long",
                                                                    year: "numeric"
                                                                })}
                                                            </p>
                                                            <h5 className="fw-bold mb-2">
                                                                {i18n.language === 'id' ? berita.judul_berita_id : berita.judul_berita_en}
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
                                            <div className="col d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                                                <p className="text-center text-muted">{message || t('no_data')}</p>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Berita;