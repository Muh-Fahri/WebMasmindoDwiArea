import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // <<< Import NavLink
import { useTranslation } from 'react-i18next'; // <<< Import useTranslation hook
import axios from "axios";
import CountUp from "react-countup";

function NavbarProject() {
    const { t, i18n } = useTranslation(); // Dapatkan fungsi t dan instance i18n

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Fungsi untuk mengubah bahasa
    };

    const [isFading, setIsFading] = useState(false);
    const [showWeatherCard, setShowWeatherCard] = useState(false);
    const [weatherList, setWeatherList] = useState([]);
    const [activeCityIndex, setActiveCityIndex] = useState(0);
    const nextCity = () => {
        setActiveCityIndex((prevIndex) =>
            prevIndex === weatherList.length - 1 ? 0 : prevIndex + 1
        );
    };



    const prevCity = () => {
        setActiveCityIndex((prevIndex) =>
            prevIndex === 0 ? weatherList.length - 1 : prevIndex - 1
        );
    };

    const getWeatherVideo = (weatherId) => {
        if (weatherId >= 200 && weatherId < 300) return "thunderStorm.mp4";
        if (weatherId >= 300 && weatherId < 600) return "rain.mp4";
        if (weatherId >= 700 && weatherId < 800) return "fog.mp4";
        if (weatherId === 800) return "clear.mp4";
        if (weatherId === 801 || weatherId === 802) return "clouds.mp4";
        if (weatherId === 803 || weatherId === 804) return "overcast.mp4";
        return "default.mp4";
    };

    const getDataWeather = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/admin/weather');
            setWeatherList(res.data.weather);
            getDataWeather();
        } catch (error) {
            alert(error);
        }
    }


    const getWeatherCondition = (id) => {
        if (id >= 200 && id <= 232) {
            return { label: "Badai Petir" };
        } else if (id >= 300 && id <= 321) {
            return { label: "Gerimis" };
        } else if (id >= 500 && id <= 531) {
            return { label: "Hujan" };
        } else if (id >= 701 && id <= 781) {
            return { label: "Kabut" };
        } else if (id === 800) {
            return { label: "Cerah" };
        } else if (id === 801 || id === 802) {
            return { label: "Berawan" };
        } else if (id === 803 || id === 804) {
            return { label: "Mendung" };
        } else {
            return { label: "Tidak Diketahui" };
        }
    };

    useEffect(() => {
        setIsFading(true); // mulai fade out
        const timeout = setTimeout(() => {
            setIsFading(false); // setelah animasi selesai, tampilkan full
        }, 500); // durasi fade (ms)

        return () => clearTimeout(timeout); // bersihkan timeout saat unmount
    }, [activeCityIndex]);



    useEffect(() => {
        getDataWeather();
    }, []);



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
                            <div className="garis-nav"></div> {/* Pastikan gaya untuk ini ada di CSS Anda */}
                        </div>
                        <div className="col-md-1">
                            <Link to="/">
                                <img src="/Image/AwakMasLogo.png" className="img-fluid navbar-brand w-100 h-auto" alt="AwakMas Logo" />
                            </Link>
                        </div>
                        <div className="col-md-auto ms-auto"> {/* Mengubah col-md-10 menjadi col-md-auto untuk penyesuaian lebar */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5"> {/* Menghilangkan ms-auto di sini karena sudah di col-md-auto */}
                                    <li
                                        className='nav-item d-flex align-items-center gap-2 ms-md-auto mt-3 mt-md-0 position-relative'
                                        onMouseEnter={() => setShowWeatherCard(true)}
                                        onMouseLeave={() => setShowWeatherCard(false)}
                                    >
                                        <h5 className='text-white m-0 p-0'>{t('info_cuaca')}</h5>
                                        <div
                                            className={`card shadow position-absolute m-0 p-3 weather-card-popup ${showWeatherCard ? 'is-visible' : ''}`}
                                            style={{
                                                top: '100%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                zIndex: '1000',
                                                width: '900px',
                                                height: '378px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                border: 'none',
                                                outline: 'none',
                                                boxShadow: 'none',
                                                borderRadius: '0px',
                                                padding: '1rem',
                                                marginTop: '5px',
                                                color: 'white',
                                                backgroundColor: 'rgba(0,0,0,0.6)',
                                            }}
                                        >

                                            {weatherList[activeCityIndex] && (
                                                <video
                                                    autoPlay
                                                    key={activeCityIndex}
                                                    loop
                                                    muted
                                                    // playsInline
                                                    className="position-absolute m-0 p-0 top-0 start-0 w-100 h-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        zIndex: 0,
                                                        borderRadius: '0px',
                                                        // filter: 'brightness(0.5)',
                                                        transition: 'opacity 0.5s ease-in-out',
                                                        opacity: isFading ? 0 : 1,
                                                    }}
                                                >
                                                    <source
                                                        src={`/weather/${getWeatherVideo(weatherList[activeCityIndex].weather_id)}`}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            )}

                                            <div className="position-relative" style={{ zIndex: 1 }}>
                                                {weatherList.length > 0 ? (
                                                    <div className="row h-100">
                                                        <div className="col p-2 d-flex justify-content-center align-items-center h-100">
                                                            {(() => {
                                                                const cuaca = weatherList[activeCityIndex];
                                                                const condition = getWeatherCondition(cuaca.weather_id);

                                                                return (
                                                                    <div className="mb-3 d-flex align-items-center gap-3" key={activeCityIndex}>
                                                                        <div className="card shadow card-cuaca p-5">
                                                                            <div className="card-body">
                                                                                <div className='text-white'>
                                                                                    <h3 className='m-0 p-0'>{cuaca.city_name}</h3>
                                                                                    <p className='m-0 p-0'><strong>{t('temperature_label')}</strong> <CountUp end={cuaca.temp} duration={1.5} decimals={1} />°C</p>
                                                                                    <p className='m-0 p-0'><strong>{t('humidity_label')}</strong> <CountUp end={cuaca.humidity} duration={1.5} />%</p>
                                                                                    <p className='m-0 p-0'><strong>{t('wind_speed_label')}</strong> <CountUp end={cuaca.wind_speed} duration={1.5} decimals={1} /> m/s</p>
                                                                                    <p className='m-0 p-0'><strong>{t('cloudiness_label')}</strong> <CountUp end={cuaca.cloudiness} duration={1.5} />%</p>
                                                                                    <p className='m-0 p-0'><strong>{t('condition_label')}</strong> {condition.label}</p>
                                                                                    <div className="d-flex justify-content-center gap-3 mt-3">
                                                                                        <button onClick={prevCity} className="btn btn-light btn-sm">{t('button_prev')}</button>
                                                                                        <button onClick={nextCity} className="btn btn-light btn-sm">{t('button_next')}</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })()}
                                                        </div>

                                                    </div>
                                                ) : (
                                                    <p className="text-center">Tidak ada data cuaca</p>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                            aria-current="page"
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/kontak"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('contact')}</h5>
                                        </NavLink>
                                    </li>

                                    {/* Tombol Pengganti Bahasa */}
                                    <li className="nav-item ms-3">
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className={`btn btn-link nav-link ${i18n.language === 'en' ? 'nav-hijau-actv' : 'text-white'}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            EN
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('id')}
                                            className={`btn btn-link nav-link ${i18n.language === 'id' ? 'nav-hijau-actv' : 'text-white'}`}
                                            style={{ textDecoration: 'none' }}
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

export default NavbarProject;