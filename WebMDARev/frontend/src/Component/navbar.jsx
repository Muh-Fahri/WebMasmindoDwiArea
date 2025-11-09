import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import CountUp from 'react-countup';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [weatherList, setWeatherList] = useState([]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const getDataWeather = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/admin/weather');
            let fetchedWeather = res.data.weather;
            let jakartaWeather = null;
            let luwuWeather = null;
            let otherCitiesWeather = [];

            fetchedWeather.forEach(city => {
                if (city.city_name === 'Jakarta') {
                    jakartaWeather = city;
                } else if (city.city_name === 'Luwu') {
                    luwuWeather = city;
                } else {
                    otherCitiesWeather.push(city);
                }
            });
            let reorderedWeatherList = [];
            if (jakartaWeather) {
                reorderedWeatherList.push(jakartaWeather);
            }
            reorderedWeatherList = reorderedWeatherList.concat(otherCitiesWeather);
            if (luwuWeather) {
                reorderedWeatherList.push(luwuWeather);
            }

            setWeatherList(reorderedWeatherList);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

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
        getDataWeather();
    }, []);

    return (
        <div>
            <nav
                className="navbar navbar-user navbar-expand-lg"
                style={{
                    backgroundColor: "transparent",
                    position: 'absolute',
                    top: '20px',
                    left: 0,
                    width: '100%',
                    zIndex: 1050,
                }}
            >
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            <Link to="/"><img src="/Image/LoogMasmindo.webp" className="img-fluid navbar-brand w-100 h-auto" alt="Masmindo Logo" /></Link>
                        </div>
                        <div className="col-md-10">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5 ms-auto d-flex flex-wrap flex-column flex-md-row justify-content-md-end align-items-md-center">
                                    {/* Bagian Cuaca */}
                                    <li className='nav-item d-flex flex-column gap-1 ms-md-auto mt-3 mt-md-0'>
                                        {/* Menampilkan Cuaca Jakarta */}
                                        {weatherList.find(city => city.city_name === 'Jakarta') && (
                                            <div className='d-flex align-items-center gap-2 text-white'>
                                                <span className='navbar-hijau m-0 p-0 me-2'>Jakarta:</span>
                                                <span className='m-0 p-0' style={{ color: '#F16022' }}>{getWeatherCondition(weatherList.find(city => city.city_name === 'Jakarta').weather_id).label}</span>
                                                <span className='m-0 p-0' style={{ color: '#013233' }}>
                                                    <CountUp end={weatherList.find(city => city.city_name === 'Jakarta').temp} duration={1.5} decimals={1} />°C
                                                </span>
                                                <span className='m-0 p-0' style={{ color: '#F16022' }}>
                                                    <CountUp end={weatherList.find(city => city.city_name === 'Jakarta').wind_speed} duration={1.5} decimals={1} /> m/s
                                                </span>
                                            </div>
                                        )}
                                        {weatherList.find(city => city.city_name === 'Luwu') && (
                                            <div className='d-flex align-items-center gap-2 text-white'>
                                                <span className='navbar-hijau m-0 p-0 me-2'>Luwu:</span>
                                                <span className='m-0 p-0' style={{ color: '#F16022' }}>{getWeatherCondition(weatherList.find(city => city.city_name === 'Luwu').weather_id).label}</span>
                                                <span className='m-0 p-0' style={{ color: '#013233' }}>
                                                    <CountUp end={weatherList.find(city => city.city_name === 'Luwu').temp} duration={1.5} decimals={1} />°C
                                                </span>
                                                <span className='m-0 p-0' style={{ color: '#F16022' }}>
                                                    <CountUp end={weatherList.find(city => city.city_name === 'Luwu').wind_speed} duration={1.5} decimals={1} /> m/s
                                                </span>
                                            </div>
                                        )}
                                        {weatherList.length === 0 && (
                                            <p className="text-white m-0 p-0"></p>
                                        )}
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                            aria-current="page"
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/peta"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('nav_petalokasi')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item d-flex flex-row gap-2 mt-3 mt-md-0">
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className={`btn btn-link nav-link ${i18n.language === 'en' ? 'nav-hijau-actv' : 'navbar-hijau'}`}
                                            style={{ textDecoration: 'none', padding: '0 0.5rem' }}
                                        >
                                            EN
                                        </button>
                                        <button
                                            onClick={() => changeLanguage('id')}
                                            className={`btn btn-link nav-link ${i18n.language === 'id' ? 'nav-hijau-actv' : 'navbar-hijau'}`}
                                            style={{ textDecoration: 'none', padding: '0 0.5rem' }}
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

export default Navbar;