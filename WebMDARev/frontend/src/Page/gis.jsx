import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import { useTranslation } from "react-i18next";

function FitToLayer({ layers, activeLayers }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        if (activeLayers.length === 0) {
            map.setView([-2.5, 118], 5);
            return;
        }

        const activeGeoJSONs = layers
            .filter((l) => activeLayers.includes(l.nama_layer))
            .map((l) => l.geojson_data);

        if (activeGeoJSONs.length > 0) {
            const group = L.featureGroup(
                activeGeoJSONs.map((geojson) => L.geoJSON(geojson))
            );
            map.fitBounds(group.getBounds(), { padding: [20, 20] });
        }
    }, [layers, activeLayers, map]);

    return null;
}

function WebGIS() {
    const [layers, setLayers] = useState([]);
    const [activeLayers, setActiveLayers] = useState([]);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/webGis")
            .then((res) => res.json())
            .then((data) => {
                const rawLayers = data.gis || [];
                const parsedLayers = rawLayers.map((layer) => ({
                    id: layer.id,
                    nama_layer: layer.nama_layer,
                    geojson_data: JSON.parse(layer.geojson),
                }));
                setLayers(parsedLayers);
                setActiveLayers(parsedLayers.map((l) => l.nama_layer));
            })
            .catch((err) => console.error("Gagal memuat data GIS:", err));
    }, []);

    const toggleLayer = (layerName) => {
        setActiveLayers((prev) =>
            prev.includes(layerName)
                ? prev.filter((name) => name !== layerName)
                : [...prev, layerName]
        );
    };

    const styleFeature = (feature) => {
        const warna = feature.properties?.warna || "#00aaff";
        return {
            color: warna,
            weight: 2,
            fillOpacity: 0.4,
        };
    };

    return (
        <div className="container-fluid p-0" style={{ height: "100vh" }}>
            {/* NAVBAR */}
            <nav
                className="navbar bg-light"
                style={{
                    // backgroundColor: "#115258",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    height: "56px",
                }}
            >
                <div className="container-fluid">
                    {/* Tombol toggle sidebar di layar kecil */}
                    <button
                        className="btn btn-outline-light d-md-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebar"
                    >
                        <i className="bi bi-list"></i>
                    </button>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <span className="navbar-brand mx-auto fw-semibold text-uppercase">
                                    WebGIS Tambang Awak Mas
                                </span>
                            </div>
                            <div className="col">
                                <input type="text" style={{ border: 'gray solid 2px' }} className="form-control rounded-5" placeholder="Cari nama layer" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* KONTEN UTAMA */}
            <div className="row g-0" style={{ height: "100vh", paddingTop: "56px" }}>
                {/* SIDEBAR */}
                <div
                    className="col-12 col-md-3 col-lg-2 text-light p-3 collapse d-md-block"
                    id="sidebar"
                    style={{
                        backgroundColor: "#115258",
                        overflowY: "auto",
                        height: "calc(100vh - 56px)",
                        position: "fixed",
                        top: "56px",
                        left: 0,
                        zIndex: 999,
                    }}
                >
                    {/* Card Layer */}
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            <h5
                                className="text-secondary text-uppercase d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                data-bs-target="#layerListCollapse"
                                style={{ cursor: "pointer" }}
                            >
                                Tampilkan Layer
                                <i className="bi bi-chevron-down"></i>
                            </h5>

                            <div className="collapse show" id="layerListCollapse">
                                {layers.map((layer, i) => (
                                    <div className="form-check mt-2" key={i}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`layer-${i}`}
                                            checked={activeLayers.includes(layer.nama_layer)}
                                            onChange={() => toggleLayer(layer.nama_layer)}
                                            style={{
                                                width: "1.2rem",
                                                height: "1.2rem",
                                                cursor: "pointer",
                                                accentColor: "#F16022",
                                            }}
                                        />
                                        <label
                                            className="form-check-label ms-2 text-dark"
                                            htmlFor={`layer-${i}`}
                                        >
                                            {layer.nama_layer}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card Informasi */}
                    <div className="card bg-light">
                        <div className="card-body">
                            <h5
                                className="text-secondary text-uppercase d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                data-bs-target="#infoLayerCollapse"
                                style={{ cursor: "pointer" }}
                            >
                                Informasi Layer
                                <i className="bi bi-chevron-down"></i>
                            </h5>

                            <div className="collapse show" id="infoLayerCollapse">
                                {selectedFeature ? (
                                    <ul className="mt-2 text-dark">
                                        {Object.entries(selectedFeature).map(([key, value]) => (
                                            <li key={key}>
                                                <b>{key}</b>: {value === null ? "-" : value.toString()}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-dark mt-2">
                                        Klik layer di map untuk melihat detail.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAP AREA */}
                <div
                    className="col-12 col-md-9 col-lg-10 offset-md-3 offset-lg-2 p-0"
                    style={{
                        height: "calc(100vh - 56px)",
                    }}
                >
                    <MapContainer
                        center={[-2.5, 118]}
                        zoom={5}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                            attribution="&copy; Google"
                            maxZoom={20}
                        />

                        {layers
                            .filter((l) => activeLayers.includes(l.nama_layer))
                            .map((layer, i) => (
                                <GeoJSON
                                    key={i}
                                    data={layer.geojson_data}
                                    style={styleFeature}
                                    onEachFeature={(feature, layerEl) => {
                                        const props = feature.properties;
                                        layerEl.on("click", () => {
                                            setSelectedFeature(props);
                                        });
                                    }}
                                />
                            ))}

                        <FitToLayer layers={layers} activeLayers={activeLayers} />
                    </MapContainer>
                </div>
            </div>
        </div>

    );
}

export default WebGIS;
