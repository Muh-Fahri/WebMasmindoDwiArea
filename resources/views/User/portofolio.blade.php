@extends('layout')
@section('konten')
    @include('navbar')
    <section>
        <div class="container-fluid m-0 p-0">
            <div class="bg-portofolio d-flex flex-column justify-content-between" style="min-height: 100vh">
                <!-- Bagian Tengah (Judul & Deskripsi) -->
                <div data-aos="zoom-out" class="container my-auto">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-10 col-11 px-3">
                            <p class="text-white fw-medium fs-6 fs-md-5 mb-2">PORTOFOLIO KAMI</p>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h1 class="text-white fw-bold display-5 display-md-3 display-lg-2">
                                        AWAK MAS <span style="color: #A99866">GOLD</span> PROJECT
                                    </h1>
                                </div>
                            </div>
                            <p class="text-white mt-3 text-uppercase fs-6 fs-md-5 px-1 px-md-4">
                                Terletak di pegunungan Latimojong, Sulawesi Selatan, proyek ini
                                merupakan salah satu proyek strategis nasional yang menggabungkan potensi sumber daya alam
                                dengan komitmen terhadap keberlanjutan dan pemberdayaan masyarakat lokal.
                            </p>
                            <a href="#project" class="btn btn-lg fw-bold nav-btn rounded-0 mt-3">
                                VIEW MORE <i class="fa-solid fa-angles-down fa-beat"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="project" style="background-color: #ffffff;">
        <div class="container">
            <div class="row">
                <aside data-aos="fade-right"class="col-12 col-md-5">
                    <img style="object-fit: cover" class="w-100 h-100"
                        src="{{ asset('template/pexels-bence-szemerey-337043-6804255.jpg') }}" alt="">
                </aside>
                <div class="col-12 col-md-6 p-5 d-flex flex-column justify-content-center">
                    <h1 data-aos="zoom-in-down" style="color: #A99866;" class="fw-bold fs-1 fs-md-0 mb-3">
                        AWAK MAS GOLD PROJECT
                    </h1>
                    <p data-aos="zoom-in-right" style="color:#6E6E6E;" class="fs-4 fs-md-3">
                        Proyek Awak Mas adalah proyek pertambangan emas yang dikelola PT Masmindo Dwi Area di Luwu, Sulawesi
                        Selatan. Proyek ini berfokus pada pengelolaan sumber daya emas secara berkelanjutan, dengan komitmen
                        terhadap lingkungan dan pemberdayaan masyarakat sekitar.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-sroll-project" style="background-color: #5B6146">
            <div class="container-fluid">
                <div class="row">
                    <div class="row p-3">
                        <div class="col">
                            <h4 class="text-center text-white fw-bold">PROJECT DOCUMENTATION</h4>
                        </div>
                    </div>
                    <div class="col position-relative">
                        <!-- Tombol Scroll Kiri -->
                        <button style="background-color: white; width: 48px; height: 48px; border-radius: 50%;"
                            class="scroll-btn d-flex justify-content-center align-items-center position-absolute top-50 start-0 translate-middle-y z-3 border-0 shadow"
                            onclick="scrollProject('left')">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <!-- Scroll Area -->
                        <div id="projectScroll" class="d-flex flex-nowrap overflow-auto px-2 gap-3"
                            style="scroll-behavior: smooth;">
                            @for ($i = 0; $i < 6; $i++)
                                <div class="card flex-shrink-0 position-relative text-white"
                                    style="min-width: clamp(280px, 30vw, 400px); aspect-ratio: 4/3; background: linear-gradient(to right, rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.432)),url('{{ asset('template/406bd29d-45fa-48c6-8a43-ad8feb2f77a9.jpg') }}') no-repeat center center / cover;">
                                    <div class="position-absolute bottom-0 start-0 end-0 p-3"
                                        style="background:#a9986693; height: 30%;">
                                        <h6 class="text-white">Testing</h6>
                                        <p class="text-white">Hello</p>
                                    </div>
                                </div>
                            @endfor
                        </div>

                        <!-- Tombol Scroll Kanan -->
                        <button style="background-color: white; width: 48px; height: 48px; border-radius: 50%;"
                            class="scroll-btn position-absolute top-50 end-0 translate-middle-y z-3 border-0 rounded-circle"
                            onclick="scrollProject('right')">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <aside class="col-12 col-md-3 p-5 m-0 p-0">
                    <h1 data-aos="zoom-in-down" style="color: #A99866;" class="fw-bold fs-0 fs-md-1 display-4">
                        We Work With Best Partner
                    </h1>
                    <p data-aos="zoom-in-right" style="color: #6E6E6E" class="pt-5 fs-4 fs-md-3">
                        Kami bekerja sama dengan mitra terbaik di bidangnya untuk memastikan standar tinggi dalam
                        keselamatan kerja,
                        perlindungan lingkungan, dan efisiensi operasional. Kolaborasi ini mendukung Masmindo dalam mencapai
                        tujuan berkelanjutan dan menciptakan nilai jangka panjang.
                    </p>
                </aside>
                <div class="col-12 col-md-5 m-0 p-0">
                    <img style="object-fit: cover" class="w-100 h-100"
                        src="{{ asset('template/pexels-bence-szemerey-337043-6804255.jpg') }}" alt="">
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="bg-partner py-3" style="background-color: #5B6146; overflow: hidden;">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <h4 class="text-white text-center p-5 fw-bold">OUR PARTNER</h4>
                    </div>
                </div>
                <div class="logo-slider d-flex align-items-center">
                    <div class="logo-track d-flex align-items-center gap-5">
                        @for ($i = 0; $i < 7; $i++)
                            {{-- Gandakan jumlah logo untuk seamless loop --}}
                            <div class="logo-item">
                                <img src="{{ asset('logo/Petrosea.png') }}" alt="" class="img-fluid"
                                    style="height: 60px;">
                            </div>
                        @endfor
                    </div>
                </div>
            </div>
        </div>
    </sec @endsection
