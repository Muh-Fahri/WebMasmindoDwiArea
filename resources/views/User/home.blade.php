@extends('layout')
@include('navbar')
@section('konten')
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
                            <p class="fw-medium">SELAMAT DATANG DI MASMINDO, TEMPAT DIMANA KOMITMEN INOVASI DAN
                                KEBERLANJUTAN
                                MENCIPTAKAN MASA DEPAN PERTAMBANGAN YANG LEBIH BAIK.</p>
                        </div>
                    </div>
                    <a href="#nilaiInti">
                        <button class="btn btn-lg text-white btn-outline-light fw-medium rounded-0 btn-sm">LIHAT
                            SELANJUTNYA</button>
                    </a>
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
                                <a href="" class="btn  btn-outline-light rounded-0">Selengkapnya</a>
                            </div>
                        </div>
                        <div class="row pt-4">
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
            <div class="video-container fade-in">
                <video autoplay loop muted playsinline>
                    <source src="{{ asset('video/masmindo.mp4') }}" type="video/mp4">
                </video>
                <section>
                    <div class="overlay">
                        <div class="fade-in">
                            <h1 style="font-family: sans-serif;font-size:100px;color:#F9F8F3" class="fw-bold">Gold With
                                Integrity<br></h1>
                            <div class="row">
                                <div class="col-auto d-flex">
                                    <a href=""
                                        class="btn btn-sm fw-bold d-flex align-items-center text-white align-self-start"
                                        style="text-decoration: none;gap:5px;">
                                        <h5 class="vid-white-gold">See Our Project <i class="bi bi-arrow-right"></i></h5>
                                    </a>
                                </div>
                                <div class="col d-flex">
                                    <a href=""
                                        class="btn btn-sm fw-bold d-flex align-items-center text-white align-self-start"
                                        style="text-decoration: none;gap:5px;">
                                        <h5 class="vid-white-gold">See Our Media <i class="bi bi-arrow-right"></i></h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <section>
            {{-- Awak mas gold project --}}
        </section>
        <section>
            {{-- karir --}}
        </section>
    </main>
    @include('footter')
@endsection
