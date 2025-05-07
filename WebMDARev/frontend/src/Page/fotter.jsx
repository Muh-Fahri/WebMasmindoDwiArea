import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <section style={{ backgroundColor: '#747474' }}>
                <div className="container-fluid p-5">
                    <div className="row text-white">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h3 className="text-uppercase text-white">PT Masmindo Dwi Area</h3>
                                </div>
                            </div>
                            {/* office */}
                            <div className="row mt-5">
                                <div className="col">
                                    <Link className="text-white text-decoration-none" to={"https://maps.app.goo.gl/KFwqC4n5qFBmWoYw7"}>
                                        <h5>Jakarta Office</h5>
                                        <p>Graha Mitra, 10th Floor Unit 1002
                                            Jl. Gatot Subroto Kav. 21
                                            DKI Jakarta 12930, Indonesia
                                        </p>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link className="text-white text-decoration-none" to={"https://maps.app.goo.gl/BpVoqWP74vmW7aJC7"}>
                                        <h5>Site Office</h5>
                                        <p>Desa Rante Balla
                                            Kec. Latimojong, Kabupaten Luwu
                                            Sulawesi Selatan, Indonesia
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link className="text-white text-decoration-none" to={"https://maps.app.goo.gl/PCsbpMixdEaYRx9Y7"}>
                                        <h5>Representative Office</h5>
                                        <p>Jl. Sawerigading, Balo-Balo
                                            Kec. Belopa, Kabupaten Luwu
                                            Sulawesi Selatan
                                        </p>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link className="text-white text-decoration-none">
                                        <h5>Hubungi Kami</h5>
                                        <p>(021)2525255</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            {/* line */}
                            <div className="garis-putih"></div>
                        </div>

                        <div className="col justify-content-center">
                            <div className="row">
                                <div className="col-md-5 d-flex justify-content-center align-items-center">
                                    <img className="img-fluid" src="/logoMDAWhite.png" alt="Logo" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;