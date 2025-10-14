import React, { useState } from "react";
import NavbarProject from "../Component/navbarProject";
import Footer from "./fotter";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

function Kontak() {

    const [namaPengirim, setNamaPengirim] = useState('');
    const [noTelpon, setNoTelpon] = useState('');
    const [subjek, setSubjek] = useState('');
    const [isiPesan, setIsiPesan] = useState('');
    const [kontakList, setKontakList] = useState([]);
    const token = localStorage.getItem('token');

    // buat di BE untuk user bukan admin


    const createKontak = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/user/kontakUser', {
                name: namaPengirim,
                noTelp: noTelpon,
                subject: subjek,
                pesan: isiPesan,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNamaPengirim('');
            setNoTelpon('');
            setSubjek('');
            setIsiPesan('');
            setKontakList('');
        } catch (error) {
            alert(error);
        }
    }




    return (
        <div>
            <section>
                <div>
                    <NavbarProject />
                </div>
            </section>
            <section
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="card border-0 p-2" style={{ backgroundColor: "#B2B2B2", width: "100%" }}>
                                <div className="card-body">
                                    <form onSubmit={createKontak}>
                                        <div className="row">
                                            <div className="col">
                                                {/* Nama Pengirim */}
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent border-0 shadow-none"
                                                    placeholder="Masukkan nama anda"
                                                    value={namaPengirim}
                                                    onChange={(e) => setNamaPengirim(e.target.value)}
                                                    required
                                                />
                                                <hr />

                                                {/* Tujuan (read-only) */}
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent border-0 shadow-none"
                                                    value="To : PT Masmindo"
                                                    readOnly
                                                />
                                                <hr />
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent border-0 shadow-none"
                                                    placeholder="Masukkan nomor telepon anda"
                                                    value={noTelpon}
                                                    onChange={(e) => setNoTelpon(e.target.value)}
                                                    required
                                                />
                                                <hr />
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent border-0 shadow-none"
                                                    placeholder="Subject"
                                                    value={subjek}
                                                    onChange={(e) => setSubjek(e.target.value)}
                                                    required
                                                />
                                                <hr />

                                                {/* Pesan */}
                                                <textarea
                                                    className="form-control bg-transparent border-0 border-bottom rounded-0 shadow-none"
                                                    rows="10"
                                                    placeholder="Tulis pesan anda di sini..."
                                                    value={isiPesan}
                                                    onChange={(e) => setIsiPesan(e.target.value)}
                                                    required
                                                ></textarea>

                                                <div className="mt-4 text-center">
                                                    <div className="row">
                                                        <div className="col  d-flex align-items-center">
                                                            <button type="submit" className="btn rounded-circle">
                                                                <FontAwesomeIcon className="submit fs-1" style={{ 'color': '#115258' }} icon={faCircleArrowRight} />
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Kontak;