@extends('layout')
@include('navbar')
@section('konten')
    <main>
        <section>
            <div data-aos="fade-left" id="carouselExampleIndicators" class="carousel carousel-fade" data-bs-ride="carousel">
                <nav>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                </nav>
                <div class="carousel-inner text-white" style="height: 90vh">
                    <figure class="carousel-item active bg-carousel">
                        <div class="container">
                            <div class="row d-flex align-items-center min-vh-100">
                                <div class="col">
                                    <header class="fade-in" style="max-width: 60%">
                                        <h1 class="fw-bold" style="font-family: sans-serif">Raising up with the communities
                                        </h1>
                                        <p class="fw-medium">We are developing & operating the Awak Mas Gold Project under a
                                            sustainable business model for the benefit of all stakeholders.</p>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="carousel-item bg-carousel2">
                        <div class="container">
                            <div class="row d-flex align-items-center min-vh-100">
                                <div class="col">
                                    <article class="fade-in" style="max-width: 60%">
                                        <h1 class="fw-bold" style="font-family: sans-serif">Produsen Emas di Indonesia
                                            Berikutnya</h1>
                                        <p class="fw-medium">MDA menjadi penambang emas berikutnya yang disegani di
                                            Indonesia</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="carousel-item bg-carousel3">
                        <div class="container">
                            <div class="row d-flex align-items-center min-vh-100">
                                <div class="col">
                                    <article class="fade-in" style="max-width: 60%">
                                        <h1 class="fw-bold" style="font-family: sans-serif">We are nurturing the next
                                            generation</h1>
                                        <p class="fw-medium">MDA is contributing to a better economic prosperity for
                                            Indonesia</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid fade-in p-0 m-0">
                <div class="row" style="min-height: 100vh;">
                    <!-- KIRI -->
                    <aside class="col-md-5 p-0" style="min-height: 100vh;">
                        <img src="{{ asset('web/Group 13.png') }}" alt="Gambar 1"
                            style="width: 100%; height: 100vh; object-fit: cover;">
                    </aside>
                    <article class="col-md-6 px-5 py-4 fade-in d-flex flex-column justify-content-center">
                        <h3 style="color: #D19701;">Sekilas Perusahaan</h3>
                        <p class="fw-medium" style="color: rgba(0, 0, 0, 0.61);text-align:justify">
                            PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas Indonesia berikutnya melalui
                            pengembangan Proyek Awak Mas. Proyek Awak Mas berlokasi di Kecamatan Latimojong, Kabupaten Luwu,
                            Sulawesi Selatan. Dengan berpegang pada nilai-nilai ACTIVE [ketangkasan (agility), kepedulian
                            (caring), kerja sama (teamwork), integritas (integrity), visioner (visionary), dan keunggulan
                            (excellence)], Masmindo berkomitmen untuk beroperasi dengan menerapkan kaidah-kaidah penambangan
                            yang baik (good mining practices), termasuk melaksanakan tanggung jawab sosial dan lingkungan,
                            serta memberikan manfaat sebesar-besarnya kepada para pemangku kepentingan, terutama masyarakat
                            lingkar tambang.
                        </p>
                        <a href="#" style="text-decoration: none;">
                            <h4 class="hover-sel">Selengkapnya <i class="bi bi-arrow-right-circle-fill"></i>
                            </h4>
                        </a>
                    </article>
                </div>
            </div>

        </section>
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
            <div class="nilai-nilai" style="background-color: #F9F8F3" data-aos="fade-right">
                <div class="container-fluid justify-content-center m-0 p-0">
                    <div class="row p-5">
                        <div class="col">
                            <img style="filter:drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.336))" class="w-100"
                                src="{{ asset('web/ActiveGreen.png') }}" alt="" data-aos="fade-right""
                                data-aos-duration="1000" data-aos-delay="100" />
                        </div>
                        <div class="col justify-content-end">
                            <h1 style="color:#D19701" class="fw-bold" data-aos="zoom-out">Nilai-Nilai</h3>
                                <br>
                                <p class="fw-medium" style="text-align:justify;color:#B6812C" data-aos="zoom-out">Di
                                    Masmindo, kami percaya
                                    bahwa
                                    keberhasilan
                                    bukan hanya soal hasil akhir,
                                    tetapi juga
                                    tentang nilai-nilai yang membentuk setiap langkah kami. Dengan semangat ACTIVE —
                                    Agility,
                                    Caring, Teamwork, Integrity, Visionary, dan Excellence — kami melangkah maju untuk
                                    membangun
                                    masa depan yang berkelanjutan, berintegritas, dan membawa manfaat bagi semua.</p>
                                <div class="row">
                                    <div class="col">
                                        <a class="btn fw-medium btn-sm link-hover" href="">
                                            Baca Selengkapnya <i class="bi bi-arrow-right-circle-fill"></i>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="logo-active" style="background-color: #FFDF8F">
                        <div class="row p-5">
                            <div class="row gap-5 justify-content-center" data-aos="zoom-out">
                                <div class="col-1 align-content-center">
                                    <img class="w-50 img-hover-zoom" src="{{ asset('svg/agility.png') }}" alt="">
                                </div>
                                <div class="col-1 align-content-center">
                                    <img class="w-50 img-hover-zoom" src="{{ asset('svg/caring.png') }}" alt="">
                                </div>
                                <div class="col-1 align-content-center">
                                    <img class="w-50 img-hover-zoom" src="{{ asset('svg/teamwork.png') }}"
                                        alt="">
                                </div>
                                <div class="col-1 align-content-center">
                                    <img class="w-50 img-hover-zoom" src="{{ asset('svg/integrity.png') }}"
                                        alt="">
                                </div>
                                <div class="col-1 align-content-center">
                                    <img class="w-50 img-hover-zoom" src="{{ asset('svg/visonary.png') }}"
                                        alt="">
                                </div>
                                <div class="col-1 align-content-center">
                                    <img class="w-50 img-hover-zoom" src="{{ asset('svg/excelent.png') }}"
                                        alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </section>
        {{-- <section>
            <div class="bgImg-home-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col">'
                            <h1>Hello world</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section> --}}
    </main>
    @include('footter')
@endsection
