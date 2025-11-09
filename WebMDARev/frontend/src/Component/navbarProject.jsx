import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from "axios";
import CountUp from "react-countup";

function NavbarProject() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [weatherList, setWeatherList] = useState([]);

    const getDataWeather = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/admin/weather');
            setWeatherList(res.data.weather || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataWeather();
    }, []);

    // Fungsi menentukan kondisi cuaca
    const getWeatherCondition = (id) => {
        if (id >= 200 && id <= 232) return t('Badai_Petir');
        if (id >= 300 && id <= 321) return t("Gerimis");
        if (id >= 500 && id <= 531) return t("Hujan");
        if (id >= 701 && id <= 781) return t("Kabut");
        if (id === 800) return t("Cerah");
        if (id === 801 || id === 802) return t("Berawan");
        if (id === 803 || id === 804) return t("Mendung");
        return t("tidak_diketahui");
    };

    // Memoized weather dengan label sesuai bahasa saat ini
    const weatherWithLabels = useMemo(() => {
        return weatherList.map(city => ({
            ...city,
            conditionLabel: getWeatherCondition(city.weather_id)
        }));
    }, [weatherList, i18n.language]); // rerender saat bahasa berubah

    const getCityWeather = (cityName) => weatherWithLabels.find(c => c.city_name === cityName);

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#013233" }}>
                <div className="container-fluid p-5">
                    <div className="row align-items-center w-100">
                        <div className="col-md-2">
                            <Link to="/">
                                <img src="/Image/MasmindoWhiteTxt.png" className="img-fluid navbar-brand w-100 h-auto" alt="Masmindo Logo" />
                            </Link>
                        </div>
                        <div className="col-auto">
                            <div className="garis-nav"></div>
                        </div>
                        <div className="col-md-1">
                            <Link to="/">
                                <img src="/Image/AwakMasLogo.png" className="img-fluid navbar-brand w-100 h-auto" alt="AwakMas Logo" />
                            </Link>
                        </div>
                        <div className="col-md-auto ms-auto">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5">
                                    <li className='nav-item d-flex flex-column gap-1 ms-md-auto mt-3 mt-md-0'>
                                        {["Jakarta", "Luwu"].map(cityName => {
                                            const city = getCityWeather(cityName);
                                            if (!city) return null;
                                            return (
                                                <div key={cityName} className='d-flex align-items-center gap-2 text-white'>
                                                    <span>{cityName}:</span>
                                                    <span style={{ color: '#F16022' }}>{city.conditionLabel}</span>
                                                    <span className='text-white'>
                                                        <CountUp end={city.temp} duration={1.5} decimals={1} />°C
                                                    </span>
                                                    <span style={{ color: '#F16022' }}>
                                                        <CountUp end={city.wind_speed} duration={1.5} decimals={1} /> m/s
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </li>
                                    {/* NAVLINKS */}
                                    <li className="nav-item">
                                        <NavLink to="/tentang" className={({ isActive }) => "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")}>
                                            <h5 className="display-5 fw-medium fs-5">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/bisnis" className={({ isActive }) => "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")}>
                                            <h5 className="display-5 fw-medium fs-5">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/ESG" className={({ isActive }) => "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")}>
                                            <h5 className="display-5 fw-medium fs-5">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/berita" className={({ isActive }) => "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")}>
                                            <h5 className="display-5 fw-medium fs-5">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/karir" className={({ isActive }) => "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")}>
                                            <h5 className="display-5 fw-medium fs-5">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/peta" className={({ isActive }) => "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")}>
                                            <h5 className="display-5 fw-medium fs-5">{t('nav_petalokasi')}</h5>
                                        </NavLink>
                                    </li>

                                    {/* Tombol Bahasa */}
                                    <li className="nav-item ms-3">
                                        <button onClick={() => changeLanguage('en')} className={`btn btn-link nav-link ${i18n.language === 'en' ? 'nav-hijau-actv' : 'text-white'}`} style={{ textDecoration: 'none' }}>EN</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={() => changeLanguage('id')} className={`btn btn-link nav-link ${i18n.language === 'id' ? 'nav-hijau-actv' : 'text-white'}`} style={{ textDecoration: 'none' }}>ID</button>
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

export default NavbarProject;
