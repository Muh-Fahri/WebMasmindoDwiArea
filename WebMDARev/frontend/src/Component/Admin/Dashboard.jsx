import React from 'react';
import NavSide from './navSide';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faNewspaper, faHashtag, faVideo, faImage, faMapMarkerAlt, faBriefcase, faImages, faSignOutAlt, faTree, faHandshake } from '@fortawesome/free-solid-svg-icons'; // Tambah faHandshake untuk sosial
import { useEffect, useState } from 'react';
import handleUnauthorized from './unouthorized';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Import komponen grafik dari react-chartjs-2
import { Bar, Doughnut } from 'react-chartjs-2';
// Penting: Daftarkan semua elemen Chart.js yang dibutuhkan
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement, // Untuk Doughnut/Pie
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

function Dashboard() {
    const [laporanList, setLaporanList] = useState(0);
    const [beritaList, setBeritaList] = useState(0);
    const [instagramList, setInstagramList] = useState(0);
    const [youtubeList, setYoutubeList] = useState(0);
    const [lingkunganList, setLingkunganList] = useState(0);
    const [sosialList, setSosialList] = useState(0);
    const [alamatList, setAlamatList] = useState(0);
    const [bisnisList, setBisnisList] = useState(0);
    const [carouselList, setCarouselList] = useState(0);
    const [galeriList, setGaleriList] = useState(0);
    const { t } = useTranslation();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const API_BASE_URL = 'http://127.0.0.1:8000/api';

    const getDashboardData = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/admin/dashboard`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setLaporanList(res.data.laporan);
            setBeritaList(res.data.berita);
            setInstagramList(res.data.instagram);
            setYoutubeList(res.data.youtube);
            setLingkunganList(res.data.lingkungan);
            setSosialList(res.data.sosial);
            setAlamatList(res.data.alamat);
            setBisnisList(res.data.bisnis);
            setCarouselList(res.data.carousel);
            setGaleriList(res.data.galeri);
        } catch (error) {
            handleUnauthorized(error);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post(`${API_BASE_URL}/admin/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            localStorage.removeItem('token');
            navigate("/Login-admin-123");
        } catch (error) {
            console.error("Logout error:", error);
            alert("Gagal logout");
        }
    };

    useEffect(() => {
        getDashboardData();
    }, []);

    // Data untuk Bar Chart (Perbandingan Laporan, Berita, Media)
    const barChartData = {
        labels: [t('sustainability_report_sidebar'), t('news'), t('instagram'), t('youtube'), t('documentation')],
        datasets: [
            {
                label: t('total_items'),
                data: [laporanList, beritaList, instagramList + youtubeList, galeriList], // Menggabungkan Instagram dan Youtube sebagai 'Media' untuk contoh
                backgroundColor: [
                    '#F16022', // success
                    '#115258', // primary
                    '#013233', // danger
                    '#056426', // warning
                    '#F16022' // secondary
                ],
                borderColor: [
                    'rgba(25, 135, 84, 1)',
                    'rgba(13, 110, 253, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(108, 117, 125, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    // Data untuk Doughnut Chart (Perbandingan ESG - Lingkungan vs Sosial)
    const doughnutChartData = {
        labels: [t('environment_esg'), t('social_esg')],
        datasets: [
            {
                label: t('esg_items'),
                data: [lingkunganList, sosialList],
                backgroundColor: [
                    'rgba(40, 167, 69, 0.7)', // success for environment
                    'rgba(23, 162, 184, 0.7)'  // info for social
                ],
                borderColor: [
                    'rgba(40, 167, 69, 1)',
                    'rgba(23, 162, 184, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    // Opsi grafik
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false, // Judul sudah ada di <h4>
            },
        },
    };

    return (
        <div className="d-flex flex-column flex-md-row">
            <div style={{ width: '260px', flexShrink: 0 }} className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-5" style={{ overflowX: 'hidden' }}>
                <div className="d-flex justify-content-end mb-4">
                    <button onClick={handleLogout} className="btn btn-danger">
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> {t('logout')}
                    </button>
                </div>
                <h3>{t('dashboard')}</h3>
                <hr className="mb-4" />

                {/* Bagian Kartu Statistik */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-5">
                    <div className="col">
                        <div className="card bg-primary text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faBook} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('sustainability_report_sidebar')}</h6>
                                    <div className="display-6">
                                        <CountUp end={laporanList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-success text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faNewspaper} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('news')}</h6>
                                    <div className="display-6">
                                        <CountUp end={beritaList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-info text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faHashtag} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('instagram')}</h6>
                                    <div className="display-6">
                                        <CountUp end={instagramList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-danger text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faVideo} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('youtube')}</h6>
                                    <div className="display-6">
                                        <CountUp end={youtubeList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-warning text-dark shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faTree} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('environment_esg')}</h6>
                                    <div className="display-6">
                                        <CountUp end={lingkunganList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-secondary text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faHandshake} size="2x" className="me-3" /> {/* Menggunakan ikon hand shake untuk sosial */}
                                <div>
                                    <h6 className="card-title mb-0">{t('social_esg')}</h6>
                                    <div className="display-6">
                                        <CountUp end={sosialList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-info text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('address')}</h6>
                                    <div className="display-6">
                                        <CountUp end={alamatList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faBriefcase} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('business')}</h6>
                                    <div className="display-6">
                                        <CountUp end={bisnisList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-primary text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faImages} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('carousel')}</h6>
                                    <div className="display-6">
                                        <CountUp end={carouselList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-success text-white shadow-sm">
                            <div className="card-body d-flex align-items-center">
                                <FontAwesomeIcon icon={faImage} size="2x" className="me-3" />
                                <div>
                                    <h6 className="card-title mb-0">{t('sectionTitle')}</h6>
                                    <div className="display-6">
                                        <CountUp end={galeriList} duration={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian Grafik */}
                <div className="row g-4 mb-5">
                    <div className="col-lg-8"> {/* Lebar lebih besar untuk Bar Chart */}
                        <div className="card shadow-sm p-4">
                            <h4>{t('content_overview_chart')}</h4>
                            <Bar data={barChartData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="col-lg-4"> {/* Lebar lebih kecil untuk Doughnut Chart */}
                        <div className="card shadow-sm p-4">
                            <h4>{t('esg_breakdown_chart')}</h4>
                            <Doughnut data={doughnutChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;