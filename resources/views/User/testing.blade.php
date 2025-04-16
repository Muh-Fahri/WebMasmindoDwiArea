@extends('layout')
@section('konten')
    {{-- @include('navbar') --}}
    <main>
        <section>
            <div class="bg-home d-flex justify-content-center align-items-center">
                <div class="text-center text-white">
                    <p class="fw-medium">SELAMAT DATANG DI WEBSITE</p>
                    <div class="container">
                        <div class="row">
                            <div class="co-5l">
                                <div class="logo-shine-wrapper">
                                    <img class="logo-shine" src="{{ asset('logo/LogoMasmindo.webp') }}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <p class="fw-medium">SELAMAT DATANG DI WEB MASMINDO, TEMPAT DIMANA KOMITMEN INOVASI DAN
                                KEBERLANJUTAN
                                MENCIPTAKAN MASA DEPAN PERTAMBANGAN YANG LEBIH BAIK.</p>
                        </div>
                    </div>
                    <a class="btn rounded-0 fw-bold nav-btn" href="#nilaiInti">LIHAT SELANJUTNYA <i
                            class="bi bi-arrow-down"></i></a>
                </div>
            </div>
        </section>
        <section style="background-color: #736B52">
            <div class="container-fluid fade-in" id="nilaiInti">
                <div class="row justify-content-start align-items-center">
                    <aside class=" col-lg-4 p-0">
                        <div class="custom-img w-100"></div>
                    </aside>
                    <div class="col-lg-6 p-5">
                        <h1 class="fw-bold text-white">NILAI - NILAI INTI</h1>
                        <p class="fw-medium text-white">
                            Di Masmindo, kami percaya bahwa keberhasilan proyek tidak hanya ditentukan oleh hasil akhir,
                            tetapi juga oleh nilai-nilai yang menjadi dasar setiap langkah kami.
                            Nilai-nilai ini membentuk budaya kerja, memandu setiap keputusan, dan memperkuat komitmen
                            kami
                            untuk menjalankan operasional secara profesional, bertanggung jawab, dan berkelanjutan.
                            Melalui prinsip-prinsip inilah, kami membangun kepercayaan, menjaga integritas, dan terus
                            tumbuh
                            bersama masyarakat serta pemangku kepentingan.
                        </p>
                        <div class="row">
                            <div class="col">
                                <a href="" class="btn nav-btn fw-medium rounded-0">Selengkapnya</a>
                            </div>
                        </div>
                        <div data-aos="fade-down" class="row pt-4">
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 bg-iconCard rounded" style=" ">
                                                <img class="w-100 h-100" src="{{ asset('svg/agility.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">AGILITY</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Kemampuan untuk beradaptasi dengan lingkungan yang dinamis dan terbuka
                                            terhadap
                                            pendekatan baru.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100 " src="{{ asset('svg/caring.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">CARING</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100" src="{{ asset('svg/teamwork.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">TEAMWORK</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menghargai kolaborasi dan keberagaman untuk mencapai tujuan bersama.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100" src="{{ asset('svg/integrity.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">INTEGRITY</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100" src="{{ asset('svg/caring.png') }}" alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">EXCELLENCE</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm rounded-0 card-nilaiNilai h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 bg-iconCard rounded"
                                                style="background-color: #FFEE6D; width: 40px; height: 40px;">
                                                <img class="w-100 h-100" src="{{ asset('svg/caring.png') }}" alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">CARING</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="bg-mepo d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-center text-center text-md-start">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div class="fade-in">
                                <h1 class="fw-bold display-4 display-md-2 display-lg-1 text-light mb-3">
                                    Gold With Integrity
                                </h1>
                                <p class="fw-medium text-white lead">
                                    Menerapkan praktik pertambangan terbaik demi hasil maksimal yang bertanggung jawab.
                                </p>
                                <div class="row justify-content-center g-2 mt-3">
                                    <div class="col-auto">
                                        <a href=""
                                            class="btn rounded-0 btn-outline-light fw-bold d-flex align-items-center gap-2">
                                            See Our Project <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-auto">
                                        <a href=""
                                            class="btn rounded-0 btn-outline-light fw-bold d-flex align-items-center gap-2">
                                            See Our Media <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container-fluid m-0 p-0">
                <div class="row flex-column flex-md-row m-0 p-0">
                    <div class="col m-0 p-0">
                        {{-- awak mas gold project --}}
                        <div class="bg-goldProject d-flex justify-content-center align-items-center text-md-start">
                            <div class="row w-100 m-0">
                                <div data-aos="fade-right" class="col-12 col-md-7 mx-auto">
                                    <h1 class="fw-bold" style="color: #A99866;font-size:40px">AWAK MAS GOLD PROJECT</h1>
                                    <p class="text-white fw-medium small">
                                        Mas Gold Project adalah salah satu inisiatif pertambangan emas yang dikembangkan
                                        dengan semangat profesionalisme dan tanggung jawab lingkungan.
                                    </p>
                                    <a class="btn nav-btn btn-sm rounded-0 fw-bold" href="">SELENGKAPNYA <i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col m-0 p-0">
                        <div class="bg-goldProjectR d-flex justify-content-center align-items-center text-md-end">
                            <div class="row w-100 m-0">
                                <div data-aos="fade-left" class="col-12 col-md-7 mx-auto">
                                    <h1 class="fw-bold" style="color: #A99866;font-size:40px">MASMINDO DALAM BERITA</h1>
                                    <p class="text-white fw-medium small">
                                        Di sini, kami menyediakan informasi terkini seputar kegiatan dan perkembangan yang
                                        terjadi di Masmindo. Kami berkomitmen untuk selalu menyajikan berita yang relevan
                                        dan menarik seputar industri pertambangan, kebijakan keberlanjutan, serta berbagai
                                        pencapaian dan inisiatif yang kami lakukan.
                                    </p>
                                    <a class="btn btn-sm rounded-0 nav-btn fw-bold" href="">SELENGKAPNYA <i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container-fluid m-0 p-0">
                <div data-aos="fade-right" class="position-fixed bottom-0 end-0 p-3 box" style="z-index: 1100">
                    <div id="sahamToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"
                        data-bs-delay="10000">
                        <div class="toast-header">
                            <strong class="me-auto">Saham Indika Energy (INDY)</strong>
                            <small>Info Saham</small>
                            <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast"
                                aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            INDY saat ini diperdagangkan di Bursa Efek Indonesia.<br>
                            <a href="https://www.tradingview.com/symbols/IDX-INDY/" target="_blank">Lihat grafik saham
                                &raquo;</a>
                        </div>
                    </div>
                </div>
                <div class="row flex-column flex-md-row m-0 p-0">
                    <div data-aos="zoom-out" class="col-md-9 d-flex align-items-center">
                        <div class="container py-4">
                            <div class="row">
                                <div class="col-12 col-md-10">
                                    <h1 class="fw-bold" style="color: #A99866; font-size: 28px;">
                                        KARIR <i class="fa-solid fa-user fa-fade"></i>
                                    </h1>
                                    <p class="fw-medium small" style="color: #A99866; font-size: 14px;">
                                        Bersama Masmindo, Anda tidak hanya membangun karier — Anda menjadi bagian dari
                                        sebuah
                                        misi besar: mengembangkan potensi sumber daya alam Indonesia secara bertanggung
                                        jawab dan berkelanjutan.
                                        Kami percaya bahwa sumber daya manusia adalah aset paling berharga. Oleh karena
                                        itu, kami menciptakan lingkungan kerja yang aman, inklusif, dan penuh peluang untuk
                                        tumbuh
                                        dan berkembang.
                                        Mari bergabung dengan tim profesional yang berdedikasi, dan bersama-sama kita
                                        wujudkan masa depan emas Indonesia.
                                    </p>
                                    <div class="row">
                                        <div class="col-auto">
                                            <a style="color:#A99866"
                                                href="{{ url('https://www.linkedin.com/company/pt-masmindo-dwi-area/posts/?feedView=all') }}"><i
                                                    class="fa-brands fa-linkedin-in fa-fade"
                                                    style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6;font-size:24px;"></i></a>
                                        </div>
                                        <div class="col-auto">
                                            <a style="color:#A99866"
                                                href="{{ url('https://www.instagram.com/masmindodwiarea/') }}"><i
                                                    class="fa-brands fa-instagram fa-fade"
                                                    style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6;font-size:24px;"></i></a>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col">
                                            <a href="" class="btn btn-sm rounded-0 nav-btn-karir fw-medium">SEE
                                                MORE <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside class="col-md-3 m-0 p-0" data-aos="fade-left">
                        <img class="w-100 h-100 object-fit-cover"
                            src="{{ asset('template/406bd29d-45fa-48c6-8a43-ad8feb2f77a9.jpg') }}" alt="">
                    </aside>
                </div>
            </div>
        </section>
    </main>
    @include('footter')
@endsection
