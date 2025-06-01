import React, { useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import AOS from "aos";


function Tentang() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, []);

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="img-tentang d-flex align-items-center">
                    <div className="container" data-aos="fade-down">
                        <div className="row">
                            <div className="col txt-bg-tentang">
                                <h1 className="text-white display-2">Bersiap Menjadi</h1>
                                <h1 className="display-2 fw-bold" style={{ color: "#B9A34B" }}>Produser Emas</h1>
                                <h1 className="text-white display-2">Terkemuka</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5 px-3 px-md-5">
                    <div className="row">
                        <div className="col p-3 p-md-5" data-aos="fade-right">
                            <div className="row">
                                <div className="col">
                                    <h3 className="text-md-start text-center d-none d-md-block">Semangat MDA dalam kontribusi</h3>
                                    <h3 className="text-center d-md-none fs-6">Semangat MDA dalam kontribusi</h3>

                                    <h1
                                        className="text-uppercase fw-bold display-3 d-none d-md-block"
                                        style={{ color: "#B9A34B" }}
                                    >
                                        Indonesia Emas
                                    </h1>
                                    <h1
                                        className="text-uppercase fw-bold fs-3 text-center d-md-none"
                                        style={{ color: "#B9A34B" }}
                                    >
                                        Indonesia Emas
                                    </h1>
                                </div>
                            </div>

                            <div className="row mt-4 mt-md-5">
                                <div className="col">
                                    {/* Desktop Paragraph */}
                                    <p className="fs-4 d-none d-md-block">
                                        PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas
                                        Indonesia berikutnya melalui pengembangan Proyek Awak Mas.
                                        Proyek Awak Mas berlokasi di Kecamatan Latimojong, Kabupaten Luwu,
                                        Sulawesi Selatan.
                                    </p>

                                    {/* Mobile Paragraph */}
                                    <p className="fs-6 d-md-none text-center">
                                        PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas
                                        Indonesia berikutnya melalui pengembangan Proyek Awak Mas.
                                        Proyek Awak Mas berlokasi di Kecamatan Latimojong, Kabupaten Luwu,
                                        Sulawesi Selatan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "#B9A34B" }}>
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col p-5" data-aos="fade-down">

                            {/* Desktop besar */}
                            <div className="d-none d-lg-flex row">
                                <div className="col-lg-4 p-3 text-start">
                                    <h1 className="text-white display-3 fw-bold m-0">
                                        Praktik Pertambangan Terbaik.
                                    </h1>
                                </div>
                                <div className="col-lg-8 p-3">
                                    <p className="fs-4 text-white">
                                        MDA berkomitmen untuk beroperasi dengan menerapkan kaidah-kaidah penambangan yang baik (good mining practices), termasuk melaksanakan tanggung jawab sosial dan lingkungan, serta memberikan manfaat sebesar-besarnya kepada para pemangku kepentingan, terutama masyarakat lingkar tambang.
                                    </p>
                                </div>
                            </div>

                            {/* Tablet dan mobile */}
                            <div className="d-lg-none">
                                <h3 className="text-white fw-bold mb-3 text-start">
                                    Praktik Pertambangan Terbaik.
                                </h3>
                                <p className="text-white text-start">
                                    MDA berkomitmen untuk beroperasi dengan menerapkan kaidah-kaidah penambangan yang baik (good mining practices), termasuk melaksanakan tanggung jawab sosial dan lingkungan, serta memberikan manfaat sebesar-besarnya kepada para pemangku kepentingan, terutama masyarakat lingkar tambang.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="container-fluid p-5" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="container">
                        {/* Teks judul - lebarnya sama dengan cards */}
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-9">
                                <h5 className="fw-semibold text-secondary">
                                    Visi, Misi, Nilai
                                </h5>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="row justify-content-center g-4">
                            <div className="col-md-4">
                                <div
                                    className="card p-4 rounded-5 h-100"
                                    data-aos="fade-right"
                                    style={{ backgroundColor: '#115258' }}
                                >
                                    <h1 className="text-white display-6 fw-bold text-uppercase mb-3">
                                        Visi
                                    </h1>
                                    <p className="text-white fs-6">
                                        Menjadi produsen emas Indonesia berikutnya, mengembangkan dan
                                        mengoperasikan Proyek Emas Awak Mas dengan model bisnis yang
                                        berkelanjutan untuk memberi manfaat kepada seluruh pemangku
                                        kepentingan
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div
                                    className="card p-4 rounded-5 h-100"
                                    data-aos="fade-down"
                                    style={{ backgroundColor: '#115258' }}
                                >
                                    <h1 className="text-white display-6 fw-bold text-uppercase mb-3">
                                        Misi
                                    </h1>
                                    <p className="text-white fs-6 mb-0">
                                        Membangun Proyek Awak Mas yang bertanggung jawab secara sosial
                                        dengan cara:
                                        <ul className="ps-3 mt-2">
                                            <li>Menjamin keselamatan, kesehatan, dan pengembangan karyawan.</li>
                                            <li>Menjadi sadar lingkungan.</li>
                                            <li>
                                                Memelihara generasi berikutnya dengan memberdayakan karyawan
                                                dan masyarakat
                                            </li>
                                            <li>
                                                Berkonstribusi pada kemakmuran ekonomi yang lebih baik bagi
                                                Indonesia.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section>
                <Footer />
            </section>
        </div>
    )
}
export default Tentang;