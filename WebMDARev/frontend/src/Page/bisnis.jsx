import React from "react";
import NavbarProject from "../Component/navbarProject";


function Bisnis() {
    return (
        <div>
            <NavbarProject />
            <section>
                <div className="bg-bisnis d-flex align-items-center">
                    <div className="container-fluid p-5">
                        <div className="row">
                            <div className="col-md-5">
                                <h1 className=" display-1 fw-bold" style={{ color: '#F16022' }}>Tambang Emas <span style={{ color: "#115258" }}>Pertama</span></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h1 className="display-1" style={{ color: 'white' }}>di Sulawesi Selatan</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bisnis;