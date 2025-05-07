import React, { useEffect, useState, useRef, } from "react";
import Navbar from "../Component/navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { MapContainer, TileLayer, CircleMarker, useMap, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from "./fotter";
import AOS from 'aos';
import 'aos/dist/aos.css';




delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function DisableScrollZoom() {
    const map = useMap();

    useEffect(() => {
        map.scrollWheelZoom.disable(); // benar-benar matikan scroll zoom
    }, [map]);

    return null;
}




function InfoCard({ position, visible }) {
    const map = useMap();
    const [point, setPoint] = useState(map.latLngToContainerPoint(position));
    const cardRef = useRef();
    useMapEvent('move', () => {
        setPoint(map.latLngToContainerPoint(position));
    });
    useMapEvent('zoom', () => {
        setPoint(map.latLngToContainerPoint(position));
    });

    if (!visible) return null;

    return (
        <div
            ref={cardRef}
            style={{
                position: 'absolute',
                left: point.x,
                top: point.y - 70,
                transform: 'translate(-50%, -100%)',
                zIndex: 1000,
                backgroundColor: ' rgba(0, 0, 0, 0)',
                padding: '10px',
                borderRadius: '8px',
                pointerEvents: 'auto',
            }}
        >
            <h1 className="fw-bold" style={{ color: "#F16022" }}>Proyek Awak Mas</h1>
            <h3 className="fw-bold">14.390 Ha</h3>
            <div className="row">
                <div className="col-md-5">
                    <p className="fs-4">Kecamatan Latimojong,
                        Kabupaten Luwu,
                        Sulawesi Selatan
                    </p>
                </div>
            </div>
        </div>
    );
}
















function Home() {
    const [bisnisList, setBisnisList] = useState([]);
    const [beritaList, setBeritaList] = useState([]);
    const position = [-3.4717, 120.1994];
    const [showCard, setShowCard] = useState(false);


    const handleMarkerClick = () => {
        setShowCard((prevState) => !prevState); // Toggle visibility of the card
    };


    useEffect(() => {
        getBisnisData();
        getBeritaData();
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            // once: true,
        });
    }, []);

    const getBisnisData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/bisnis");
            setBisnisList(res.data.bisnisUser);
            getBisnisData();
        } catch (error) {
            alert("Gagal Mengambil Data");
        }
    }


    const getBeritaData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/berita");
            setBeritaList(res.data.berita);
            getBeritaData();
        } catch (error) {
            alert('Gagal Mengambil Data');
        }
    }

    return (
        <div>
            <Navbar />
            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="bg-carousel-1 d-flex align-items-center" style={{ height: "100vh" }}>
                                <div className="container">
                                    <div className="row" data-aos="fade-right">
                                        <div className="col-md-6">
                                            <h1 className="display-2 fw-bold" style={{ color: "#F16022" }}>Produser Emas</h1>
                                            <h4 className="display-3" style={{ color: "#115258" }}>Di Indonesia Berikutnya</h4>
                                            <div className="row mt-4">
                                                <div className="col-md-5">
                                                    <button className="w-100 btn btn-carousel-1 rounded-5 btn-outline-dark shadow-none btn-sm">Bisnis Kami</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg-carousel-2 d-flex align-items-center" style={{ height: "100vh" }}>
                                <div className="container">
                                    <div className="row" data-aos="fade-right">
                                        <div className="col-md-9">
                                            <h1 className="display-2 fw-bold" style={{ color: "#F16022" }}>Kami Memelihara</h1>
                                            <h4 className="display-3" style={{ color: "#115258" }}>Generasi Berikutnya Berikutnya</h4>
                                            <div className="row mt-4">
                                                <div className="col-md-3">
                                                    <button className="w-100 btn btn-carousel-1 rounded-5 btn-outline-dark shadow-none btn-sm">Karir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg-carousel-3 d-flex align-items-center" style={{ height: "100vh" }}>
                                <div className="container">
                                    <div className="row" data-aos="fade-right">
                                        <div className="col-md-6">
                                            <h1>Renov</h1>
                                            <h1 className="display-2 fw-bold" style={{ color: "#F16022" }}>Produser Emas</h1>
                                            <h4 className="display-3" style={{ color: "#115258" }}>Di Indonesia Berikutnya</h4>
                                            <div className="row mt-4">
                                                <div className="col-md-5">
                                                    <button className="w-100 btn btn-carousel-1 rounded-5 btn-outline-light shadow-none btn-sm">Bisnis Kami</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5">
                <div className="container-fluid p-5" >
                    <div className="row" data-aos="fade-right">
                        <div className="col">
                            <h4 className="text-uppercase fw-semibold text-secondary">Tentang Kami</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" data-aos="fade-right">
                            <div className="row d-block">
                                <div className="col-md-5">
                                    <h1 className="fw-bold m-0">Bersiap Menjadi <span style={{ color: "#F16022" }}>Produser Emas</span> </h1>
                                </div>
                                <div className="col">
                                    <h1 className="fw-bold m-0">Terkemuka Di Indonesia</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-down">
                            <p className="display-6 fs-3 fw-medium">PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas Indonesia berikutnya melalui pengembangan Proyek Awak Mas.
                                Proyek Awak Mas berlokasi di Kecamatan Latimojong, Kabupaten Luwu, Sulawesi Selatan
                            </p>
                            <Link to={'tentang'} data-aos="fade-down" className="text-decoration-none text-secondary fs-4 fw-bold">Lebih Lanjut <FontAwesomeIcon icon={faArrowRight} /> </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-halBisnis" style={{ backgroundColor: "#115258" }}>
                    <div className="container-fluid p-5">
                        <div className="row">
                            <div className="col">
                                <h3 className="text-uppercase text-center text-secondary fw-bold">Bisnis Kami</h3>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-right">
                            <div className="col">
                                {
                                    bisnisList.length > 0 ? (
                                        bisnisList.map((bisnis) => (
                                            <p key={bisnis.uuid} className="text-white fs-3">
                                                {bisnis.deskripsi_bisnis.split(' ').slice(0, 80).join(' ') + '.'}
                                            </p>
                                        ))
                                    ) : (
                                        <div className="justify-content-center">
                                            <h5>No Data</h5>
                                        </div>
                                    )
                                }
                                <Link className="text-decoration-none text-secondary fs-3 fw-bold">Lebih Lanjut <FontAwesomeIcon icon={faArrowRight} /> </Link>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row mt-4" data-aos="zoom-in">
                                {bisnisList.length > 0 ? (
                                    <div className="col">
                                        {bisnisList.map((bisnis) => ((
                                            <div key={bisnis.uuid} className="responsive-iframe-container">
                                                <iframe
                                                    className="rounded-5"
                                                    src={bisnis.link_video}
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        )))}
                                    </div>
                                ) : (
                                    <div className="justify-content-center">
                                        <h5>No Data Yet</h5>
                                    </div>
                                )};
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* PETA */}
                <div style={{ position: 'relative' }}>
                    <MapContainer
                        center={position}
                        zoom={5}
                        zoomControl={true}
                        style={{ height: '60vh', width: '100%' }}
                    >
                        <DisableScrollZoom /> {/* Tambahkan ini */}

                        <TileLayer
                            attribution='&copy; <a href="https://carto.com/">Carto</a>'
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />
                        <CircleMarker
                            center={position}
                            radius={15}
                            pathOptions={{
                                color: "#F16022",
                                fillColor: "#F16022",
                                fillOpacity: 1
                            }}
                            eventHandlers={{
                                click: handleMarkerClick,
                            }}
                        />
                        <InfoCard position={position} visible={showCard} />
                    </MapContainer>

                </div>
            </section>
            <section>
                {/* berita */}
                <div className="container-fluid">
                    <div className="row" data-aos="fade-down">
                        <div className="col p-5">
                            <h3 className="text-secondary text-center text-uppercase fw-semibold">Berita Terkini</h3>
                        </div>
                    </div>
                    <div className="row gap-3 mt-5" data-aos="fade-right">
                        <div className="position-relative">
                            <button
                                className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                                style={{ zIndex: 10 }}
                                onClick={() => {
                                    document.getElementById("beritaSlider").scrollBy({ left: -300, behavior: 'smooth' });
                                }}
                            >
                                &#10094;
                            </button>

                            {beritaList.length > 0 ? (
                                <div
                                    id="beritaSlider"
                                    className="row gap-3 mt-5 flex-nowrap overflow-auto"
                                    style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }}
                                >
                                    {beritaList.map((berita) => (
                                        <div key={berita.uuid} className="col-md-3">
                                            <div className="card rounded-3" style={{ height: '500px', overflow: 'hidden' }}>
                                                <div className="card-body m-0 p-0">
                                                    <img
                                                        style={{
                                                            objectFit: "cover",
                                                            height: '100%',
                                                            width: '100%'
                                                        }}
                                                        className="rounded-3"
                                                        src={`http://localhost:8000/Berita/${berita.image_berita}`}
                                                        alt="foto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col mt-5">
                                                    <h3 className="fw-bold text-center">{berita.judul_berita}</h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col p-5">
                                                    {berita.deskripsi_berita.split(' ').slice(0, 80).join(' ') + '.'}
                                                    <div className="row">
                                                        <div className="col pt-5 text-center">
                                                            <Link className="text-decoration-none">
                                                                <h4 className="text-secondary fw-semibold">Lebih Lanjut </h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="justify-content-center">
                                    <h5>No Data</h5>
                                </div>
                            )}


                            <button
                                className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                                style={{ zIndex: 10 }}
                                onClick={() => {
                                    document.getElementById("beritaSlider").scrollBy({ left: 300, behavior: 'smooth' });
                                }}>
                                &#10095;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* Esg */}
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col p-3" data-aos="fade-right">
                            <h3 className="text-secondary text-center fw-semibold">ESG</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-4 flex-wrap" data-aos="fade-down">
                        <div style={{ flex: '1 1 30%', maxWidth: '500px' }}>
                            <div
                                className="card"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="card-body m-0 p-0">
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to right, rgba(85, 38, 16, 0.75), rgba(85, 38, 16, 0.75)), url('/Image/Background/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '70vh',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'flex-end', // teks di bawah
                                            justifyContent: 'center', // teks tetap di tengah horizontal
                                            paddingBottom: '30px', // jarak dari bawah
                                        }}
                                    >
                                        <div className="text-center p-5">
                                            <h1 className="text-white fw-bold">Lingkungan Hidup</h1>
                                            <Link className="text-decoration-none">
                                                <h4 className="text-secondary fw-light text-white">Lebih Lanjut</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{ flex: '1 1 30%', maxWidth: '500px' }}>
                            <div
                                className="card"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="card-body m-0 p-0">
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to right, rgba(114, 91, 0, 0.61),rgba(114, 91, 0, 0.61)), url('/Image/Background/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '70vh',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'flex-end', // teks di bawah
                                            justifyContent: 'center', // teks tetap di tengah horizontal
                                            paddingBottom: '30px', // jarak dari bawah
                                        }}
                                    >
                                        <div className="text-center p-5">
                                            <h1 className="text-white fw-bold">Sosial</h1>
                                            <Link className="text-decoration-none">
                                                <h4 className="text-secondary fw-light text-white">Lebih Lanjut</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{ flex: '1 1 30%', maxWidth: '500px' }}>
                            <div
                                className="card"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="card-body m-0 p-0">
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to right,  rgba(17, 82, 88, 0.84), rgba(17,86,88,0.84)), url('/Image/Background/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '70vh',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'flex-end', // teks di bawah
                                            justifyContent: 'center', // teks tetap di tengah horizontal
                                            paddingBottom: '30px', // jarak dari bawah
                                        }}
                                    >
                                        <div className="text-center p-5">
                                            <h1 className="text-white fw-bold">Tata Kelola</h1>
                                            <Link className="text-decoration-none">
                                                <h4 className="text-secondary fw-light text-white">Lebih Lanjut</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-bawah d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-white fw-bold">Profesional & Inspiratif</h1>
                                <p className="fs-6 text-white">Kami percaya bahwa setiap individu memiliki potensi luar biasa. Bersama tim yang solid dan budaya kerja
                                    yang mendukung, mari ciptakan masa depan yang lebih cerah.
                                </p>
                                <button className="btn rounded-5 fw-bold shadow-none fs-3 mt-5 text-white" style={{ backgroundColor: "#F16022", width: "20%", height: "5vh" }}>Karier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* footer */}
                <Footer />
            </section>
        </div>
    );
}

export default Home;
