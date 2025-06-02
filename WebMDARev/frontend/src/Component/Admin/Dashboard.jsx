import React from "react";
import NavSide from "./navSide";
import handleUnauthorized from "./unouthorized";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faNewspaper, faHashtag } from "@fortawesome/free-solid-svg-icons";


function Dashboard() {


    return (
        <div>
            <NavSide />
            <div className="content" style={{ marginLeft: '260px', padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <h1>Selamat datang di Dashboard!</h1>
                        <p>Ini adalah halaman utama setelah login.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card p-5 shadow">
                            <div className="card-body m-0 p-0">
                                <div className="row">
                                    <div className="col">
                                        <h5 style={{ color: '#115258' }}>Laporan Tahunan Terupload </h5>
                                        <h1>5</h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faBook} style={{ fontSize: "100px", color: "#F16022" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card p-5 shadow">
                            <div className="card-body m-0 p-0">
                                <div className="row">
                                    <div className="col">
                                        <h5 style={{ color: '#115258' }}>Berita Terupload </h5>
                                        <h1>5</h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faNewspaper} style={{ fontSize: "100px", color: "#115258" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card p-5 shadow">
                            <div className="card-body m-0 p-0">
                                <div className="row">
                                    <div className="col">
                                        <h5 style={{ color: '#115258' }}>Instagram Terupload </h5>
                                        <h1>5</h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faHashtag} style={{ fontSize: "100px", color: "#F16022" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
