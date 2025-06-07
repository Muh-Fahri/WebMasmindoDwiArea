import React from 'react';
import NavSide from './navSide';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faNewspaper, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import handleUnauthorized from './unouthorized';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

function Dashboard() {
    const [laporanList, setLaporanList] = useState(0);
    const [beritaList, setBeritaList] = useState(0);
    const [instagramList, setInstagramList] = useState(0);
    const [youtubeList, setYoutubeList] = useState(0);
    const [lingkunganList, setLingkunganList] = useState(0);
    const [sosialList, setSosialList] = useState(0);
    const { t, i18n } = useTranslation();

    const token = localStorage.getItem('token')

    const getDashboardData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }

            });
            setLaporanList(res.data.laporan);
            setBeritaList(res.data.berita);
            setInstagramList(res.data.instagram);
            setYoutubeList(res.data.Youtube);
            setLingkunganList(res.data.lingkungan);
            setSosialList(res.data.sosial);
        } catch (error) {
            handleUnauthorized(error);
        }
    }


    useEffect(() => {
        getDashboardData();
    }, []);

    return (
        <div className="d-flex flex-column flex-md-row">
            {/* Sidebar */}
            <div style={{ width: '260px', flexShrink: 0 }} className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>

            {/* Konten Utama */}
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-5" style={{ overflowX: 'hidden' }}>
                <div className="row">
                    <div className="col">
                        {/* Judul Dashboard yang Diterjemahkan */}
                        <h1>{t('dashboard_welcome_title')}</h1>
                        {/* Paragraf Selamat Datang yang Diterjemahkan */}
                        <p>{t('dashboard_welcome_message')}</p>
                    </div>
                </div>

                {/* 3 Box Atas */}
                <div className="row gy-4 gx-4">
                    <div className="col-12 col-md-4">
                        <div className="card p-4 shadow h-100">
                            <div className="card-body m-0 p-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        {/* h5: Default (xs) fs-6, md ke atas fs-5 (ukuran normal h5) */}
                                        {/* Terjemahkan judul card */}
                                        <h5 className="fs-6 fs-md-5" style={{ color: '#115258' }}>
                                            {t('annual_report_card_title')}
                                        </h5>
                                        {/* h1: Default (xs) display-6, md ke atas display-4 (ukuran normal h1) */}
                                        <h1 className="display-6 display-md-4">
                                            <CountUp
                                                start={0}
                                                end={laporanList}
                                                duration={0.5}
                                                delay={0.3}
                                                separator="."
                                            />
                                        </h1>
                                    </div>
                                    <div className="col-auto">
                                        {/* Ikon: Default (xs) 50px, md ke atas 80px (ukuran normal) */}
                                        <FontAwesomeIcon icon={faBook} style={{ fontSize: "50px" }} className="fs-md-icon-80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card p-4 shadow h-100">
                            <div className="card-body m-0 p-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        {/* Terjemahkan judul card */}
                                        <h5 className="fs-6 fs-md-5" style={{ color: '#115258' }}>
                                            {t('news_uploaded_card_title')}
                                        </h5>
                                        <h1 className="display-6 display-md-4">
                                            <CountUp
                                                start={0}
                                                end={beritaList}
                                                duration={0.5}
                                                delay={0.3}
                                                separator="."
                                            />
                                        </h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faNewspaper} style={{ fontSize: "50px", color: "#115258" }} className="fs-md-icon-80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card p-4 shadow h-100">
                            <div className="card-body m-0 p-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        {/* Terjemahkan judul card */}
                                        <h5 className="fs-6 fs-md-5" style={{ color: '#115258' }}>
                                            {t('instagram_uploaded_card_title')}
                                        </h5>
                                        <h1 className="display-6 display-md-4">
                                            <CountUp
                                                start={0}
                                                end={instagramList}
                                                duration={0.5}
                                                delay={0.3}
                                                separator="."
                                            />
                                        </h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faHashtag} style={{ fontSize: "50px", color: "#F16022" }} className="fs-md-icon-80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ESG Section */}
                <div className="row mt-5">
                    <div className="col">
                        <div className="card p-4 shadow">
                            <div className="card-body m-0 p-0">
                                <div className="row">
                                    <div className="col">
                                        {/* Judul utama ESG */}
                                        <h5>{t('esg_main_title')}</h5>
                                    </div>
                                </div>

                                <div className="row mt-4 d-flex justify-content-center gy-4 gx-4">
                                    {/* Kartu Enviro */}
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="card p-3 p-md-4 text-white h-100" style={{ backgroundColor: '#F16022' }}>
                                            <div className="card-body m-0 p-0">
                                                <h5 className="fs-6 fs-lg-5">
                                                    {t('esg_enviro_title')}
                                                </h5>
                                                <p className="small mb-2">
                                                    {t('esg_enviro_description')}
                                                </p>
                                                <h1 className="display-6 display-md-4">
                                                    <CountUp
                                                        start={0}
                                                        end={lingkunganList}
                                                        duration={0.5}
                                                        delay={0.3}
                                                        separator="."
                                                    />
                                                </h1>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Kartu Social */}
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="card p-3 p-md-4 text-white h-100" style={{ backgroundColor: '#F16022' }}>
                                            <div className="card-body m-0 p-0">
                                                <h5 className="fs-6 fs-lg-5">
                                                    {t('esg_social_title')}
                                                </h5>
                                                <p className="small mb-2">
                                                    {t('esg_social_description')}
                                                </p>
                                                <h1 className="display-6 display-md-4">
                                                    <CountUp
                                                        start={0}
                                                        end={sosialList}
                                                        duration={0.5}
                                                        delay={0.3}
                                                        separator="."
                                                    />
                                                </h1>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Kartu Governance */}
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="card p-3 p-md-4 text-white h-100" style={{ backgroundColor: '#F16022' }}>
                                            <div className="card-body m-0 p-0">
                                                <h5 className="fs-6 fs-lg-5">
                                                    {t('esg_governance_title')}
                                                </h5>
                                                <p className="small mb-2">
                                                    {t('esg_governance_description')}
                                                </p>
                                                {/* Jika Anda memiliki state untuk governance, gunakan CountUp juga di sini */}
                                                {/* <h1 className="display-6 display-lg-4">
                                                    <CountUp
                                                        start={0}
                                                        end={governanceList} // Asumsi Anda memiliki state ini
                                                        duration={0.5}
                                                        delay={0.3}
                                                        separator="."
                                                    />
                                                </h1> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;