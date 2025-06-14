import React from "react";
import NavbarProject from "../Component/navbarProject";


function Karir() {
    return (
        <div>
            <NavbarProject />
            <section>
                <div className="bg-karir d-flex align-items-center" style={{ minHeight: '300px' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 ">
                                <h1 className="text-white text-uppercase fw-bold text-center">
                                    Karirmu dimulai di sini. Bersama, kita ciptakan perubahan positif.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Karir;