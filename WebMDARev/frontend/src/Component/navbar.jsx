import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const dropdownContainerRef = useRef(null);
    const hideTimeoutRef = useRef(null); // Ref untuk menyimpan ID timeout

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Durasi transisi (harus sama dengan yang di CSS)
    const TRANSITION_DURATION_MS = 1500; // 1.5 detik (sesuaikan jika di CSS berbeda)

    useEffect(() => {
        const handleMouseEnter = () => {
            // Batalkan timeout penyembunyian jika kursor masuk kembali
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
                hideTimeoutRef.current = null;
            }
            if (!isDropdownOpen) {
                setIsDropdownOpen(true);
            }
        };

        const handleMouseLeave = (event) => {
            // Atur timeout untuk menyembunyikan dropdown setelah jeda singkat
            hideTimeoutRef.current = setTimeout(() => {
                // Pastikan kursor benar-benar di luar container dropdown
                if (dropdownContainerRef.current &&
                    !dropdownContainerRef.current.contains(event.relatedTarget)) {

                    setIsDropdownOpen(false); // Ini akan menghapus kelas 'show-custom'
                }
            }, 100); // Penundaan singkat sebelum memulai proses penyembunyian
        };

        const currentDropdownContainer = dropdownContainerRef.current;

        if (currentDropdownContainer) {
            currentDropdownContainer.addEventListener('mouseenter', handleMouseEnter);
            currentDropdownContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup function saat komponen unmount
        return () => {
            if (currentDropdownContainer) {
                currentDropdownContainer.removeEventListener('mouseenter', handleMouseEnter);
                currentDropdownContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
            // Pastikan untuk menghapus timeout saat komponen unmount
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, [isDropdownOpen]); // isDropdownOpen sebagai dependency

    // Menghitung posisi tengah untuk dropdown menu
    // Kita perlu tahu lebar dari dropdown toggle (h5) dan lebar dari dropdown menu (card)
    // Untuk ini, kita bisa menggunakan refs, atau dengan Bootstrap, dropdown biasanya diposisikan relatif terhadap parent.
    // Cara paling mudah untuk menengahkan elemen yang posisinya absolute adalah dengan left: 50% dan transform: translateX(-50%)
    // Ini diterapkan pada elemen .dropdown-menu

    return (
        <div>
            <nav
                className="navbar navbar-user navbar-expand-lg"
                style={{
                    backgroundColor: "transparent",
                    position: 'absolute',
                    top: '20px',
                    left: 0,
                    width: '100%',
                    zIndex: 1050,
                }}
            >
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            <Link to="/"><img src="/Image/LoogMasmindo.webp" className="img-fluid navbar-brand w-100 h-auto" alt="Masmindo Logo" /></Link>
                        </div>
                        <div className="col-md-10">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5 ms-auto">
                                    <li className="nav-item dropdown" ref={dropdownContainerRef}>
                                        <h5
                                            className="nav-link dropdown-toggle"
                                            style={{ fontSize: '1.25rem', color: '#000', cursor: 'pointer' }}
                                            role="button"
                                            aria-expanded={isDropdownOpen}
                                        >
                                            Dokumentasi Project
                                        </h5>
                                        <ul
                                            className={`dropdown-menu p-0 m-0 ${isDropdownOpen ? 'show-custom' : ''}`}
                                            style={{
                                                // PERUBAHAN UTAMA DI SINI UNTUK MENENGAHKAN
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                minWidth: 'auto',
                                                // Anda mungkin perlu menyesuaikan 'top' atau 'margin-top' jika ada masalah vertikal
                                                // Misalnya: top: '100%' atau top: 'calc(100% + 5px)' jika ingin sedikit jarak
                                                // Bootstrap default top: 100% relative to parent
                                            }}
                                        >
                                            <div className="card rounded-0" style={{ width: '900px', backgroundColor: '#F16022' }}>
                                                <div className="card-body m-0 p-0" >
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <img className='w-100 h-100' src="/Image/Background/CampAwakMasJPEG.jpg" alt="" style={{ objectFit: 'cover' }} />
                                                        </div>
                                                        <div className="col p-5 text-white">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p style={{ fontSize: '13px' }}>Dokumentasi ini mencakup seluruh pengembangan internal Masmindo yang mendukung berbagai kebutuhan operasional perusahaan, termasuk pengelolaan data proyek, pelaporan, ESG (Environmental, Social, Governance), serta manajemen konten. Sistem dibangun untuk meningkatkan efisiensi kerja, transparansi data, dan integrasi antar departemen.</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <Link to="#" className='text-white text-decoration-none'>
                                                                        <h5>Galeri Kami</h5>
                                                                    </Link>
                                                                    <Link to="#" className='text-white text-decoration-none'>
                                                                        <h5>Video</h5>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                            aria-current="page"
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/kontak"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('contact')}</h5>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className={`btn btn-link nav-link ${i18n.language === 'en' ? 'nav-hijau-actv' : 'navbar-hijau'}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            EN
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('id')}
                                            className={`btn btn-link nav-link ${i18n.language === 'id' ? 'nav-hijau-actv' : 'navbar-hijau'}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            ID
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;