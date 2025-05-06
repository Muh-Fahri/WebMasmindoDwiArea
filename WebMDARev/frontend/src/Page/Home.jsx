import React from "react";
import Navbar from "../Component/navbar";
import { Carousel, button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (




        <div>
            <Navbar />
            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    {/* Indikator Carousel */}
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

                    {/* Konten Carousel */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="bg-carousel-1 d-flex align-items-center" style={{ height: "100vh" }}>
                                <div className="container">
                                    <div className="row">
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
                                    <div className="row">
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
                                    <div className="row">
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
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col">
                            <h4 className="text-uppercase fw-semibold text-secondary">Tentang Kami</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row d-block">
                                <div className="col-md-5">
                                    <h1 className="fw-bold m-0">Bersiap Menjadi <span style={{ color: "#F16022" }}>Produser Emas</span> </h1>
                                </div>
                                <div className="col">
                                    <h1 className="fw-bold m-0">Terkemuka Di Indonesia</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p className="display-6 fs-3 fw-medium">PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas Indonesia berikutnya melalui pengembangan Proyek Awak Mas.
                                Proyek Awak Mas berlokasi di Kecamatan Latimojong, Kabupaten Luwu, Sulawesi Selatan
                            </p>
                            <Link className="text-decoration-none text-secondary fs-4 fw-bold">Lebih Lanjut <FontAwesomeIcon icon={faArrowRight} /> </Link>
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
                        <div className="row">
                            <div className="col">
                                <p className="text-white fs-3">
                                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat similique ipsa voluptatem illo sequi veritatis animi nemo, nulla ab quasi nisi est commodi temporibus error repellendus atque. Quaerat cumque ratione iusto facere reiciendis odio provident quidem? Fugiat qui explicabo suscipit tempore esse facere, nulla asperiores neque odit libero deleniti minus non quod, ipsa facilis doloribus! Aperiam odit iure in exercitationem. Exercitationem adipisci itaque aspernatur doloribus ab cupiditate repellendus eius, praesentium aut corporis perspiciatis incidunt nobis dignissimos qui, atque, nostrum dolorum eaque. Soluta aliquam inventore quae quam. Facilis, ut. Voluptatem facere aliquid, dolor dolorum asperiores a, sapiente facilis nesciunt molestias excepturi optio porro corporis nulla ad? Qui suscipit molestias est nesciunt quisquam optio facere architecto vitae odio! Unde ipsa expedita hic, asperiores esse veritatis nihil quibusdam illo assumenda odio ut, aspernatur vel. Beatae error debitis aliquid iste! Asperiores provident debitis quo, aliquid perferendis vitae, natus nam vel sit esse exercitationem, aliquam repellendus consequatur beatae corrupti libero quidem! Cumque, quas? Corporis dolorum nostrum asperiores dignissimos dicta architecto perspiciatis provident ab consequatur nulla. Placeat laudantium libero iusto? Impedit illo explicabo odio ex inventore consequuntur ducimus, officia natus suscipit sapiente tenetur vero, aspernatur harum magnam! Eaque magnam blanditiis ratione, odit laborum repudiandae excepturi.`.split(' ').slice(0, 80).join(' ') + '...'}
                                </p>
                                <Link className="text-decoration-none text-secondary fs-3 fw-bold">Lebih Lanjut <FontAwesomeIcon icon={faArrowRight} /> </Link>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row mt-4">
                                <div className="col">
                                    <div className="responsive-iframe-container">
                                        <iframe
                                            className="rounded-5"
                                            src="https://www.youtube.com/embed/7Km9H_xc6qY?si=zoxBAxxoVf-kCKj6"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
