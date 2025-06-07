import React, { useEffect, useState } from "react";
import NavSide from "./navSide";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Galeri() {
    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-info p-3 text-white">
                                    <h3>Galeri</h3>
                                </div>
                                <div className="card mt-5 p-3">
                                    <h5>Create Data Galeri</h5>
                                    <form>
                                        <div className="p-2">
                                            <p>Masukkan Deskripsi Singkat Foto (id)</p>
                                            <div className="custom-editor">
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data=""
                                                />
                                            </div>

                                        </div>
                                        <div className="p-2">
                                            <p>Masukkan Deskripsi Singkat Foto (en)</p>
                                            <div className="custom-editor">
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data=""
                                                />
                                            </div>

                                        </div>
                                        <div className="p-2">
                                            <p>Upload Foto</p>
                                            <input
                                                type="file"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="p-2">
                                            <button className="btn btn-sm btn-primary">Add Data</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Galeri;