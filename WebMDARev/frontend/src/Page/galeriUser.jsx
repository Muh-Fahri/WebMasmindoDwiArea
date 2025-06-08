import React from "react";
import NavbarHijau from "../Component/navbarHijau";
import { useTranslation } from "react-i18next";
import Footer from "./fotter";


function GaleriUser() {

    const [t, i18n] = useTranslation();

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container-fluid">
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
                            {/* Nav */}
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/berita" className="fs-1 text-black text-decoration-none">{t('news_in_masmindo')}</a>
                                </li>
                                <li>
                                    <a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a>
                                </li>
                                <li>
                                    <a href="/youtube" className="fs-1 text-black text-decoration-none">Youtube</a>
                                </li>
                                <li>
                                    <a href="/dokumentasi" className="fs-1 text-decoration-none berita-active">{t('documentation_title')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col p-3">
                                    {/* disinii slider */}
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

export default GaleriUser;