import React from "react";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";


function Tentang() {
    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="img-tentang d-flex align-items-center">
                    <div className="container">
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
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col p-5">
                            <div className="row">
                                <div className="col">
                                    <h3>Semangat MDA dalam kontribusi</h3>
                                    <h1 className="text-uppercase fw-bold display-3" style={{ color: "#B9A34B" }}>Indonesia Emas</h1>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="fs-4">PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas Indonesia berikutnya melalui pengembangan Proyek Awak Mas.
                                        Proyek Awak Mas berlokasi di Kecamatan Latimojong, Kabupaten Luwu, Sulawesi Selatan.
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
                        <div className="col p-5">
                            <div className="row d-flex gap-5">
                                <div className="col-md-4">
                                    <h1 className="text-white display-2 fw-bold">Praktik Pertambangan Terbaik.</h1>
                                </div>
                                <div className="col">
                                    <p className="fs-3 text-white">MDA berkomitmen untuk beroperasi dengan menerepkan kaidah-kaidah penambangan yang baik (good mining
                                        practices), termasuk melaksanakan tanggung jawab sosial dan lingkungan, serta memberikan manfaat sebesar-besarnya
                                        kepada para pemangku kepentingan, terutama masyarakat lingkar tambang.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col p-5">
                                <h5 className="fw-semibold text-secondary">Visi, Misi, Nilai</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <div className="card p-5 rounded-5" style={{ backgroundColor: "#115258" }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="text-white display-4 fw-bold text-uppercase">Visi</h1>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col">
                                            <p className="text-white fs-3">
                                                Menjadi produsen emas Indonesia berikutnya, mengembangkan dan mengoperasikan Proyek Emas Awak mas dengan model bisnis yang
                                                berkelanjutan untuk memberi manfaat kepada seluruh pemangku kepentingan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card p-5 rounded-5" style={{ backgroundColor: "#115258" }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="text-white display-4 fw-bold text-uppercase">Misi</h1>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col">
                                            <p className="text-white fs-3">
                                                Membangun Proyek Awak Mas yang bertanggung jawab secara sosial dengan cara:
                                                <ul>
                                                    <li>
                                                        Menjamin keselamatan, kesehatan, dan pengembangan karyawan.
                                                    </li>
                                                    <li>
                                                        Menjadi sadar lingkungan.
                                                    </li>
                                                    <li>
                                                        Memelihara generasi berikutnya dengan memberdayakan karyawan dan masyrakat
                                                    </li>
                                                    <li>
                                                        Berkonstribusi pada kemakmuran ekonomi yang lebih baik bagi Indonesia.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
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