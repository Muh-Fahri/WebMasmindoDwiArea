import React from "react";
import axios from "axios";
import NavSide from "./navSide";

function Youtube() {
    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-info text-white p-3">
                                    <h3>Halaman Youtube</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Youtube;