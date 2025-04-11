@extends('layout')
@include('navbar')

@section('konten')
    <main>
        <section>
            <div id="carouselExampleIndicators" class="carousel carousel-fade" data-bs-ride="carousel">
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
                                        <h1 style="font-family: sans-serif">Raising up with the communities</h1>
                                        <p>We are developing & operating the Awak Mas Gold Project under a
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
                                        <h1 style="font-family: sans-serif">Produsen Emas di Indonesia Berikutnya</h1>
                                        <p>MDA menjadi penambang emas berikutnya yang disegani di Indonesia</p>
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
                                        <h1 style="font-family: sans-serif">We are nurturing the next generation</h1>
                                        <p>MDA is contributing to a better economic prosperity for Indonesia</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        {{-- <section class="bg-proyek pt-5 text-white"> --}}
        <section>
            <div class="container fade-in p-0 m-0">
                <div class="row" style="min-height: 100%;">
                    <!-- KIRI -->
                    <aside class="col d-flex flex-column justify-content-center align-items-center text-white"
                        style="background-color: #B6812C; min-height: 100%;">
                        <div id="carouselExampleIndicator" class="carousel slide" style="width: 20rem;"
                            data-bs-ride="carousel">
                            <!-- Indicators -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>

                            <!-- Images -->
                            <div class="carousel-inner rounded shadow" style="height: 60vh; overflow: hidden;">
                                <div class="carousel-item active">
                                    <img src="{{ asset('img/mediakit-2.jpg') }}" class="d-block w-100 h-100"
                                        style="object-fit: cover;" alt="Gambar 1">
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('img/pexels-canvastudio-3194518.jpg') }}" class="d-block w-100 h-100"
                                        style="object-fit: cover;" alt="Gambar 2">
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('img/pexels-kevin-ku-92347-577585.jpg') }}"
                                        class="d-block w-100 h-100" style="object-fit: cover;" alt="Gambar 3">
                                </div>
                            </div>
                        </div>
                    </aside>

                    <!-- KANAN -->
                    <article class="col p-5 fade-in d-flex flex-column justify-content-center">
                        <h3 style="color: #b6812c;">Sekilas Perusahaan</h3>
                        <p style="color: rgba(0, 0, 0, 0.61);">PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen
                            emas
                            Indonesia berikutnya melalui pengembangan Proyek Awak Mas. Proyek Awak Mas berlokasi di
                            Kecamatan
                            Latimojong, Kabupaten Luwu, Sulawesi Selatan. Dengan berpegang pada nilai-nilai ACTIVE
                            [ketangkasan
                            (agility), kepedulian (caring), kerja sama (teamwork), integritas (integrity), visioner
                            (visionary),
                            dan
                            keunggulan (excellence)], Masmindo berkomitmen untuk beroperasi dengan menerapkan kaidah-kaidah
                            penambangan yang baik (good mining practices), termasuk melaksanakan tanggung jawab sosial dan
                            lingkungan, serta memberikan manfaat sebesar-besarnya kepada para pemangku kepentingan, terutama
                            masyarakat lingkar tambang.</p>
                        <h5 class="mt-5" style="color:#b6812cbb;">Learn More about</h5>
                        <a href="#" style="text-decoration: none;">
                            <h4 style="color: #b6812cbb;">Our Project</h4>
                        </a>
                    </article>
                </div>
            </div>
        </section>
        <div class="video-container fade-in">
            <video autoplay loop muted playsinline>
                <source src="{{ asset('video/masmindo.mp4') }}" type="video/mp4">
            </video>
            <div class="overlay">
                <div class="fade-in">
                    <h1 style="font-family: sans-serif;font-size:100px">Gold With Integrity<br></h1>
                    <div class="row">
                        <div class="col-auto d-flex">
                            <a href=""
                                class="btn btn-sm fw-bold d-flex align-items-center text-white align-self-start"
                                style="text-decoration: none;gap:5px;">
                                <h5>See Our Project</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </a>
                        </div>
                        <div class="col d-flex">
                            <a href=""
                                class="btn btn-sm fw-bold d-flex align-items-center text-white align-self-start"
                                style="text-decoration: none;gap:5px;">
                                <h5>See Our Media</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    @include('footter')
@endsection
