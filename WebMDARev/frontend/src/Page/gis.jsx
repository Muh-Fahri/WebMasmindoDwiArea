import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import NavbarHijau from "../Component/navbarHijau";
import { useTranslation } from "react-i18next";
import NavSide from "../Component/Admin/navSide";

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
        <>
            <div className="d-flex" style={{ height: "100vh" }}>
                {/* Sidebar */}
                <div
                    style={{
                        width: "300px",
                        backgroundColor: "#115258",
                        padding: "15px",
                        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
                        overflowY: "auto",
                    }}
                >
                    <img
                        src="/Image/AwakMasLogo.png"
                        alt="Logo"
                        style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "contain",
                            display: "block",
                            marginBottom: "10px",
                        }}
                    />

                    {/* Checkbox Layer */}
                    <div className="card" style={{ backgroundColor: "#e2e2e2ff" }}>
                        <div className="card-body">
                            {/* Judul bisa diklik untuk membuka/menutup daftar layer */}
                            <h5
                                className="text-secondary text-uppercase d-flex justify-content-between align-items-center"
                                style={{ cursor: "pointer" }}
                                data-bs-toggle="collapse"
                                data-bs-target="#layerListCollapse"
                                aria-expanded="true"
                            >
                                Tampilkan Layer
                                <i className="bi bi-chevron-down"></i>
                            </h5>

                            {/* Daftar layer yang bisa di-collapse */}
                            <div className="collapse show" id="layerListCollapse">
                                {layers.map((layer, i) => (
                                    <label
                                        key={i}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            marginTop: "10px",
                                            userSelect: "none",
                                            color: "white",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={activeLayers.includes(layer.nama_layer)}
                                            onChange={() => toggleLayer(layer.nama_layer)}
                                            style={{
                                                appearance: "none",
                                                width: "22px",
                                                height: "22px",
                                                border: "4px solid #F16022",
                                                borderRadius: "6px",
                                                marginRight: "10px",
                                                cursor: "pointer",
                                                backgroundColor: activeLayers.includes(layer.nama_layer)
                                                    ? "#115258"
                                                    : "transparent",
                                                transition: "all 0.2s ease",
                                                position: "relative",
                                            }}
                                        />
                                        <span className="text-secondary">{layer.nama_layer}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Selected Feature Info */}
                    <div className="card mt-3" style={{ backgroundColor: "#e2e2e2ff" }}>
                        <div className="card-body">
                            <h5
                                className="text-secondary text-uppercase d-flex justify-content-between align-items-center"
                                style={{ cursor: "pointer" }}
                                data-bs-toggle="collapse"
                                data-bs-target="#infoLayerCollapse"
                                aria-expanded="true"
                            >
                                Informasi Layer
                                <i className="bi bi-chevron-down"></i>
                            </h5>

                            <div className="collapse show" id="infoLayerCollapse">
                                {selectedFeature ? (
                                    <ul style={{ color: "black", paddingLeft: "15px", marginTop: "10px" }}>
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

                {/* Map */}
                <div style={{ flex: 1, position: "relative" }}>
                    <MapContainer
                        center={[-3.36, 120.11]}
                        zoom={18}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                        touchZoom={false}
                        zoomControl={true}
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

                                        // klik feature → tampilkan info di sidebar
                                        layerEl.on("click", () => {
                                            setSelectedFeature(props);
                                        });
                                    }}
                                />
                            ))}
                    </MapContainer>

                </div>
            </div>
        </>
    );
}

export default WebGIS;
