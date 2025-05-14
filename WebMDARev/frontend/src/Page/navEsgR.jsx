import React from "react";
import { NavLink } from "react-router-dom";

function NavEsgR() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col">
                    <ul className="d-flex gap-5">
                        <li className="list-unstyled">
                            <NavLink
                                to="/ESG"
                                className="active-esg text-decoration-none"

                            >
                                <h1 className="text-black text-center fw-light">Lingkungan</h1>
                                <div className="garis-bawah-esg"></div>
                            </NavLink>
                        </li>
                        <li className="list-unstyled">
                            <NavLink
                                to="/ESG/sosial"
                                className="text-decoration-none"
                            >
                                <h1 className="text-black text-center fw-light">Sosial</h1>
                                <div className="garis-bawah-esg"></div>
                            </NavLink>
                        </li>
                        <li className="list-unstyled">
                            <NavLink
                                to="tata-kelola"
                                className="active-esg"
                            >
                                <h1 className="text-black text-center fw-light">Tata Kelola</h1>
                                <div className="garis-bawah-esg"></div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavEsgR;