import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import { useTranslation } from "react-i18next";

// 🔹 Komponen untuk zoom otomatis ke layer aktif
function FitToLayer({ layers, activeLayers }) {
    const map = useMap();

    useEffect(() => {
        if (!map || activeLayers.length === 0) return;

        // Ambil semua GeoJSON dari layer aktif
        const activeGeoJSONs = layers
            .flatMap((mapItem) =>
                mapItem.layers.filter((l) =>
                    activeLayers.includes(l.nama_layer)
                )
            )
            .map((l) => l.geojson_data)
            .filter(Boolean);

        if (activeGeoJSONs.length === 0) return;

        const group = L.featureGroup(
            activeGeoJSONs.map((geojson) => L.geoJSON(geojson))
        );

        const bounds = group.getBounds();

        if (bounds.isValid()) {
            map.fitBounds(bounds, {
                padding: [80, 80], // sedikit ruang di tepi
                maxZoom: 17        // zoom maksimum, masih kelihatan detail tapi tidak terlalu dekat
            });
        }
    }, [activeLayers, layers, map]);

    return null;
}


// 🔹 Komponen Basemap Switcher — ini yang mengatur layer dasar
function BasemapSwitcher({ basemap }) {
    const map = useMap();

    useEffect(() => {
        let tileLayer;

        if (basemap === "satellite") {
            tileLayer = L.tileLayer(
                "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
                {
                    maxZoom: 20,
                    subdomains: ["mt0", "mt1", "mt2", "mt3"],
                    attribution: "&copy; Google Satellite",
                }
            );
        } else if (basemap === "none") {
            // 🔹 Basemap kosong (warna putih)
            const pane = map.getPane("tilePane");
            if (pane) pane.style.background = "#ffffff"; // putih polos
            tileLayer = null;
        } else {
            tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "&copy; OpenStreetMap",
            });
        }

        if (tileLayer) tileLayer.addTo(map);

        return () => {
            if (tileLayer) map.removeLayer(tileLayer);
            const pane = map.getPane("tilePane");
            if (pane) pane.style.background = ""; // reset kalau ganti basemap
        };
    }, [basemap, map]);

    return null;
}

function WebGIS() {
    const [layers, setLayers] = useState([]);
    const [activeLayers, setActiveLayers] = useState([]);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const { t } = useTranslation();
    const [basemap, setBasemap] = useState("normal");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/webGis")
            .then((res) => res.json())
            .then((data) => {
                if (!data.gis) return;

                // Struktur data: [{nama_peta, layers: [...]}, ...]
                const groupedMaps = data.gis.map((map) => ({
                    id: map.id,
                    nama_peta: map.nama_peta,
                    deskrip_peta: map.deskrip_peta,
                    layers: map.layers.map((layer) => ({
                        id: layer.id,
                        nama_layer: layer.nama_layer,
                        geojson_data: JSON.parse(layer.geojson),
                    })),
                }));

                setLayers(groupedMaps);

                // Aktifkan semua layer di awal
                const allLayerNames = groupedMaps.flatMap((m) =>
                    m.layers.map((l) => l.nama_layer)
                );
                setActiveLayers(allLayerNames);
            });
    }, []);

    // Toggle layer aktif/nonaktif
    const toggleLayer = (layerName) => {
        setActiveLayers((prev) =>
            prev.includes(layerName)
                ? prev.filter((name) => name !== layerName)
                : [...prev, layerName]
        );
    };

    return (
        <div className="container-fluid p-0" style={{ height: "100vh" }}>
            {/* NAVBAR */}
            <nav
                className="navbar bg-light"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    height: "56px",
                }}
            >
                <div className="container-fluid">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                <span className="navbar-brand mx-auto fw-semibold text-uppercase">
                                    WebGIS Tambang Awak Mas
                                </span>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    style={{ border: "gray solid 2px" }}
                                    className="form-control rounded-5"
                                    placeholder="Cari nama layer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* KONTEN */}
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
                    {/* Card Layer */}
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            {/* Header Card - Klik untuk buka/tutup */}
                            <h5
                                className="text-secondary text-uppercase d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseLayerCard"
                                style={{ cursor: "pointer" }}
                            >
                                Tampilkan Layer
                                <i className="bi bi-chevron-down"></i>
                            </h5>

                            {/* Isi Card - Collapse Bootstrap */}
                            <div className="collapse show" id="collapseLayerCard">
                                {layers.map((mapItem, mapIndex) => (
                                    <div key={mapIndex} className="mb-3 mt-3">
                                        <h6 className="fw-bold text-dark border-bottom pb-1">
                                            {mapItem.nama_peta}
                                        </h6>

                                        {mapItem.layers.map((layer, layerIndex) => (
                                            <div className="form-check mt-2" key={layerIndex}>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`layer-${mapIndex}-${layerIndex}`}
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
                                                    htmlFor={`layer-${mapIndex}-${layerIndex}`}
                                                >
                                                    {layer.nama_layer}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                <hr />

                                {/* 🔹 Pilihan Peta Dasar */}
                                <div className="mt-2">
                                    <label className="fw-bold text-secondary">
                                        Pilih Peta Dasar:
                                    </label>

                                    <div className="form-check mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="basemap"
                                            id="normalMap"
                                            value="normal"
                                            checked={basemap === "normal"}
                                            onChange={(e) => setBasemap(e.target.value)}
                                            style={{
                                                cursor: "pointer",
                                                accentColor: "#F16022",
                                            }}
                                        />
                                        <label
                                            className="form-check-label ms-2"
                                            htmlFor="normalMap"
                                        >
                                            Peta Biasa
                                        </label>
                                    </div>

                                    <div className="form-check mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="basemap"
                                            id="satelliteMap"
                                            value="satellite"
                                            checked={basemap === "satellite"}
                                            onChange={(e) => setBasemap(e.target.value)}
                                            style={{
                                                cursor: "pointer",
                                                accentColor: "#F16022",
                                            }}
                                        />
                                        <label
                                            className="form-check-label ms-2"
                                            htmlFor="satelliteMap"
                                        >
                                            Google Satellite
                                        </label>
                                    </div>

                                    <div className="form-check mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="basemap"
                                            id="noneMap"
                                            value="none"
                                            checked={basemap === "none"}
                                            onChange={(e) => setBasemap(e.target.value)}
                                            style={{
                                                cursor: "pointer",
                                                accentColor: "#F16022",
                                            }}
                                        />
                                        <label
                                            className="form-check-label ms-2"
                                            htmlFor="noneMap"
                                        >
                                            Tanpa Peta Dasar
                                        </label>
                                    </div>
                                </div>
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
                                                <b>{key}</b>: {value ?? "-"}
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
                        center={[-2.65, 120.45]}
                        zoom={12}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                    >
                        {/* Basemap otomatis berubah sesuai pilihan */}
                        <BasemapSwitcher basemap={basemap} />

                        {/* Layer GeoJSON */}
                        {layers.flatMap((mapItem) =>
                            mapItem.layers
                                .filter((l) => activeLayers.includes(l.nama_layer))
                                .map((layer) => (
                                    <GeoJSON
                                        key={layer.id}
                                        data={layer.geojson_data}
                                        interactive={true}
                                        style={(feature) => {
                                            const type = feature?.geometry?.type || "";
                                            const props = feature?.properties || {};

                                            const strokeColor = props?.stroke || props?.fill || "#3388ff";
                                            const strokeWidth = props?.["stroke-width"] ?? 1;
                                            const strokeOpacity = props?.["stroke-opacity"] ?? 1;

                                            const fillColor = props?.fill || "rgba(0,0,0,0)";
                                            const fillOpacity =
                                                props?.fillOpacity ?? (type.includes("Polygon") ? 0.4 : 0);

                                            return {
                                                color: strokeColor,
                                                weight: strokeWidth,
                                                opacity: strokeOpacity,
                                                fillColor,
                                                fillOpacity,
                                            };
                                        }}
                                        onEachFeature={(feature, layerEl) => {
                                            const props = feature.properties;

                                            layerEl.getElement()?.setAttribute(
                                                "style",
                                                "cursor: pointer;"
                                            );

                                            layerEl.on("click", () => {
                                                setSelectedFeature(props);
                                            });

                                            layerEl.on("mouseover", () => {
                                                layerEl.setStyle({
                                                    weight:
                                                        (feature?.properties?.["stroke-width"] ?? 2) + 1,
                                                });
                                            });

                                            layerEl.on("mouseout", () => {
                                                layerEl.setStyle({
                                                    weight: feature?.properties?.["stroke-width"] ?? 2,
                                                });
                                            });
                                        }}
                                    />
                                ))
                        )}

                        <FitToLayer layers={layers} activeLayers={activeLayers} />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default WebGIS;
