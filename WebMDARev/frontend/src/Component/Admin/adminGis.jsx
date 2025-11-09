import React, { useState } from "react";
import NavSide from "./navSide";
import axios from "axios";




function AdminGis() {
    const token = localStorage.getItem('token');
    const [DataGisList, setDataGis] = useState([]);


    const getDataGis = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/mapGis', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setDataGis(res.data.maps);
        } catch (error) {
            alert(error);
        }
    }



    return (
        <div className="d-flex flex-column flex-md-row">
            <div className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-md-0" style={{ marginLeft: '0', overflowX: 'hidden' }}>
                <div className="container">
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="card p-2 shadow-none border-0" style={{ backgroundColor: '#F16022' }}>
                                        <div className="card-body">
                                            <h4 className="text-white">Pengelolaan Data GIS</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card mt-5">
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <h5 className="text-secondary">Tambahkan data</h5>
                                            </div>
                                            <form >
                                                <div className="mb-3">
                                                    <p>Nama layer</p>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="mb-3">
                                                    <p>Data GeoJson Layer</p>
                                                    <textarea name="" rows="20" cols="100" className="form-control" id=""></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <button className="btn text-light btn-sm" style={{ backgroundColor: '#115258' }}>Tambahkan Data</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AdminGis;