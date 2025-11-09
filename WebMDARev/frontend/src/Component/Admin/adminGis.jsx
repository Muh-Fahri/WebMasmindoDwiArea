import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import NavSide from "./navSide";
import Swal from "sweetalert2";

function FitToActiveLayers({ layers }) {
    const map = useMap();

    useEffect(() => {
        if (!layers || layers.length === 0) return;

        try {
            const group = L.featureGroup();

            layers.forEach((geojsonText) => {
                const data = JSON.parse(geojsonText);
                const layer = L.geoJSON(data);
                group.addLayer(layer);
            });

            const bounds = group.getBounds();
            if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [10, 10], maxZoom: 14 });
            }
        } catch (err) {
            console.error("Gagal fitBounds:", err);
        }
    }, [layers, map]);

    return null;
}

function AdminGis() {
    const token = localStorage.getItem("token");
    const [DataGisList, setDataGis] = useState([]);
    const [activeLayers, setActiveLayers] = useState({});

    // 🔹 State form
    const [newMap, setNewMap] = useState({
        nama_peta: "",
        deskrip_peta: "",
        nama_layer: "",
        geojson: "",
    });

    const [newLayer, setNewLayer] = useState({
        map_id: "",
        nama_layer: "",
        geojson: "",
    });

    // 🔹 Ambil semua data peta
    const getDataGis = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/admin/mapGis", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDataGis(res.data.maps || []);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Gagal memuat data peta", "error");
        }
    };

    useEffect(() => {
        getDataGis();
    }, []);

    const handleToggleLayer = (mapId, layerId) => {
        setActiveLayers((prev) => {
            const current = prev[mapId] || [];
            if (current.includes(layerId)) {
                return { ...prev, [mapId]: current.filter((id) => id !== layerId) };
            } else {
                return { ...prev, [mapId]: [...current, layerId] };
            }
        });
    };

    // 🔹 Tambah Peta (API Laravel-mu createGisMap)
    const handleCreateMap = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://127.0.0.1:8000/api/admin/mapGis",
                newMap,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            Swal.fire("Berhasil", "Peta dan layer pertama berhasil dibuat!", "success");
            setNewMap({
                nama_peta: "",
                deskrip_peta: "",
                nama_layer: "",
                geojson: "",
            });
            getDataGis();
        } catch (err) {
            Swal.fire("Gagal", "Tidak dapat menambahkan peta", "error");
        }
    };

    // 🔹 Tambah Layer ke peta
    const handleCreateLayer = async (e) => {
        e.preventDefault();
        if (!newLayer.map_id) {
            Swal.fire("Peringatan", "Pilih peta terlebih dahulu!", "warning");
            return;
        }
        try {
            await axios.post(
                `http://127.0.0.1:8000/api/admin/gisLayer/${newLayer.map_id}`,
                {
                    nama_layer: newLayer.nama_layer,
                    geojson: newLayer.geojson,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            Swal.fire("Berhasil", "Layer berhasil ditambahkan ke peta!", "success");
            setNewLayer({ map_id: "", nama_layer: "", geojson: "" });
            getDataGis();
        } catch (err) {
            Swal.fire("Gagal", "Tidak dapat menambahkan layer", "error");
        }
    };

    return (
        <div className="d-flex flex-column flex-md-row">
            <div className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>

            <div className="container py-3">

                {/* 🔹 FORM TAMBAH PETA BARU */}
                <section className="mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-header text-white fw-semibold" style={{ backgroundColor: '#115258' }}>
                                    Tambah Peta Baru
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleCreateMap}>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Nama Peta</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={newMap.nama_peta}
                                                onChange={(e) =>
                                                    setNewMap({ ...newMap, nama_peta: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Deskripsi Peta</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={newMap.deskrip_peta}
                                                onChange={(e) =>
                                                    setNewMap({ ...newMap, deskrip_peta: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Nama Layer Pertama</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={newMap.nama_layer}
                                                onChange={(e) =>
                                                    setNewMap({ ...newMap, nama_layer: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Data GeoJSON</label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                value={newMap.geojson}
                                                onChange={(e) =>
                                                    setNewMap({ ...newMap, geojson: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <button className="btn text-white w-100" style={{ backgroundColor: '#F16022' }}>Simpan Peta</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* 🔹 Form Tambah Layer */}
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-header text-white fw-semibold" style={{ backgroundColor: '#F16022' }}>
                                    Tambah Layer ke Peta
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleCreateLayer}>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Pilih Peta</label>
                                            <select
                                                className="form-select"
                                                value={newLayer.map_id}
                                                onChange={(e) =>
                                                    setNewLayer({ ...newLayer, map_id: e.target.value })
                                                }
                                                required
                                            >
                                                <option value="">-- Pilih Peta --</option>
                                                {DataGisList.map((map) => (
                                                    <option key={map.id} value={map.id}>
                                                        {map.nama_peta}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Nama Layer</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={newLayer.nama_layer}
                                                onChange={(e) =>
                                                    setNewLayer({ ...newLayer, nama_layer: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Data GeoJSON</label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                value={newLayer.geojson}
                                                onChange={(e) =>
                                                    setNewLayer({ ...newLayer, geojson: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <button style={{ backgroundColor: '#115258' }} className="btn text-white w-100">Simpan Layer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🔹 TABEL + MINI MAP */}
                <section>
                    <div className="card shadow-sm">
                        <div className="card-header bg-success text-white fw-semibold">
                            Daftar Peta WebGIS
                        </div>
                        <div className="card-body table-responsive">
                            <table className="table table-bordered align-middle">
                                <thead className="table-success text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Peta</th>
                                        <th>Layer</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DataGisList.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="text-center text-muted">
                                                Tidak ada data
                                            </td>
                                        </tr>
                                    ) : (
                                        DataGisList.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{item.nama_peta}</td>
                                                <td>
                                                    {item.layers?.length > 0 ? (
                                                        item.layers.map((layer) => (
                                                            <div key={layer.id}>
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input me-2"
                                                                    checked={
                                                                        activeLayers[item.id]?.includes(layer.id) ||
                                                                        false
                                                                    }
                                                                    onChange={() =>
                                                                        handleToggleLayer(item.id, layer.id)
                                                                    }
                                                                />
                                                                {layer.nama_layer}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <i className="text-muted">Tidak ada layer</i>
                                                    )}
                                                </td>
                                                <td>
                                                    <div
                                                        style={{
                                                            height: "200px",
                                                            width: "100%",
                                                            borderRadius: "8px",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <MapContainer
                                                            center={[-2.65, 120.45]}
                                                            zoom={8}
                                                            style={{ height: "100%", width: "100%" }}
                                                        >
                                                            <TileLayer
                                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                            />
                                                            {item.layers?.map((layer) => {
                                                                if (
                                                                    activeLayers[item.id]?.includes(layer.id)
                                                                ) {
                                                                    try {
                                                                        const geojsonData = JSON.parse(layer.geojson);
                                                                        return (
                                                                            <GeoJSON
                                                                                key={layer.id}
                                                                                data={geojsonData}
                                                                                style={{
                                                                                    color: "#F16022",
                                                                                    weight: 1.5,
                                                                                    fillOpacity: 0.5,
                                                                                }}
                                                                            />
                                                                        );
                                                                    } catch {
                                                                        return null;
                                                                    }
                                                                }
                                                                return null;
                                                            })}
                                                            <FitToActiveLayers
                                                                layers={
                                                                    item.layers
                                                                        ?.filter((l) =>
                                                                            activeLayers[item.id]?.includes(l.id)
                                                                        )
                                                                        .map((l) => l.geojson) || []
                                                                }
                                                            />
                                                        </MapContainer>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminGis;
