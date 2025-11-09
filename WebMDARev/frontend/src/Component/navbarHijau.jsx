import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import CountUp from "react-countup";
import Swal from "sweetalert2"; // 🔹 Import SweetAlert2

function NavbarHijau() {
    const { t, i18n } = useTranslation();
    const [isFading, setIsFading] = useState(false);
    const [weatherList, setWeatherList] = useState([]);
    const [activeCityIndex, setActiveCityIndex] = useState(0);

    const getDataWeather = async () => {
        try {
            // 🔹 Tampilkan loading
            Swal.fire({
                title: "Memuat data...",
                text: "Harap tunggu sebentar.",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            const res = await axios.post("http://127.0.0.1:8000/api/admin/weather");
            setWeatherList(res.data.weather);

            // 🔹 Tutup loading setelah berhasil
            Swal.close();
        } catch (error) {
            console.error(error);

            // 🔹 Tutup loading + tampilkan pesan error
            Swal.fire({
                icon: "error",
                title: "Gagal memuat data cuaca",
                text: "Silakan periksa koneksi server atau internet Anda.",
            });
        }
    };

    const getWeatherCondition = (id) => {
        if (id >= 200 && id <= 232) {
            return { label: t('Badai_Petir') };
        } else if (id >= 300 && id <= 321) {
            return { label: t('"Gerimis"') };
        } else if (id >= 500 && id <= 531) {
            return { label: t("Hujan") };
        } else if (id >= 701 && id <= 781) {
            return { label: t("Kabut") };
        } else if (id === 800) {
            return { label: t("Cerah") };
        } else if (id === 801 || id === 802) {
            return { label: t("Berawan") };
        } else if (id === 803 || id === 804) {
            return { label: t("Mendung") };
        } else {
            return { label: "tidak_diketahui" };
        }
    };

    useEffect(() => {
        setIsFading(true);
        const timeout = setTimeout(() => setIsFading(false), 500);
        return () => clearTimeout(timeout);
    }, [activeCityIndex]);

    useEffect(() => {
        getDataWeather();
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#013233" }}>
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            <Link to="/">
                                <img
                                    src="/Image/MasmindoWhiteTxt.png"
                                    className="img-fluid navbar-brand w-100 h-auto"
                                    alt="Masmindo Logo"
                                />
                            </Link>
                        </div>
                        <div className="col-md-10">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5 ms-auto">
                                    {/* Cuaca Jakarta & Luwu */}
                                    <li className="nav-item d-flex flex-column gap-1 ms-md-auto mt-3 mt-md-0">
                                        {weatherList.find((city) => city.city_name === "Jakarta") && (
                                            <div className="d-flex align-items-center gap-2 text-white">
                                                <span className="me-2">Jakarta:</span>
                                                <span style={{ color: "#F16022" }}>
                                                    {
                                                        getWeatherCondition(
                                                            weatherList.find((city) => city.city_name === "Jakarta")
                                                                .weather_id
                                                        ).label
                                                    }
                                                </span>
                                                <span className="text-white">
                                                    <CountUp
                                                        end={
                                                            weatherList.find((city) => city.city_name === "Jakarta")
                                                                .temp
                                                        }
                                                        duration={1.5}
                                                        decimals={1}
                                                    />
                                                    °C
                                                </span>
                                                <span style={{ color: "#F16022" }}>
                                                    <CountUp
                                                        end={
                                                            weatherList.find((city) => city.city_name === "Jakarta")
                                                                .wind_speed
                                                        }
                                                        duration={1.5}
                                                        decimals={1}
                                                    />{" "}
                                                    m/s
                                                </span>
                                            </div>
                                        )}
                                        {weatherList.find((city) => city.city_name === "Luwu") && (
                                            <div className="d-flex align-items-center gap-2 text-white">
                                                <span className="me-2">Luwu:</span>
                                                <span style={{ color: "#F16022" }}>
                                                    {
                                                        getWeatherCondition(
                                                            weatherList.find((city) => city.city_name === "Luwu")
                                                                .weather_id
                                                        ).label
                                                    }
                                                </span>
                                                <span className="text-white">
                                                    <CountUp
                                                        end={
                                                            weatherList.find((city) => city.city_name === "Luwu").temp
                                                        }
                                                        duration={1.5}
                                                        decimals={1}
                                                    />
                                                    °C
                                                </span>
                                                <span style={{ color: "#F16022" }}>
                                                    <CountUp
                                                        end={
                                                            weatherList.find((city) => city.city_name === "Luwu")
                                                                .wind_speed
                                                        }
                                                        duration={1.5}
                                                        decimals={1}
                                                    />{" "}
                                                    m/s
                                                </span>
                                            </div>
                                        )}
                                    </li>

                                    {/* Menu Navigasi */}
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t("about")}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t("business")}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t("esg")}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t("news")}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t("career")}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/peta"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('nav_petalokasi')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage("en")}
                                            className={`btn btn-link nav-link ${i18n.language === "en" ? "nav-hijau-actv" : "text-white"
                                                }`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            EN
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage("id")}
                                            className={`btn btn-link nav-link ${i18n.language === "id" ? "nav-hijau-actv" : "text-white"
                                                }`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            ID
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarHijau;
