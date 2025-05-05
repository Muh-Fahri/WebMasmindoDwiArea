@extends('layout')
@section('konten')
    @include('navbar')

    <section>
        <div id="carouselHero" class="carousel carousel-fade" data-bs-ride="carousel">
            <!-- Garis Navigasi di Bawah -->
            <div class="carousel-indicators mb-0">
                <hr style="background-color: white">
                <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <!-- Isi Slide -->
            <div class="carousel-inner">
                <!-- Slide 1 -->
                <div class="carousel-item active">
                    <div class="d-flex align-items-center"
                        style="background: url('/img-web/ac9caba6-67d1-4879-a003-492737821cbd.jpg'); background-size: cover; background-position: center; height: 100vh;">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h1 class="fw-bold display-3" style="color:#F16022">Produser Emas</h1>
                                    <div class="row">
                                        <div class="col-md-6 display-3">
                                            <p style="color:#115258">di Indonesia Berikutnya</p>
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <a href="#" class="btn w-100 btn-lg nav-btn rounded-5">Bisnis
                                                        Kami</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex align-items-center"
                        style="background: url('/img-web/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg'); background-size: cover; background-position: center; height: 100vh;">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex align-items-center"
                        style="background: url('/img-web/ac9caba6-67d1-4879-a003-492737821cbd.jpg'); background-size: cover; background-position: center; height: 100vh;">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid p-5">
            <div class="row p-5">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <h5 class="text-uppercase text-secondary">Tentang Kami</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h1 class="fw-bold p-0 m-0">Bersiap Menjadi</h1>
                            <h1 class="fw-bold p-0 m-0" style="color: #F16022">Produser Emas</h1>
                            <h1 class="fw-bold p-0 m-0">Terkemuka di indonesia</h1>
                        </div>
                    </div>
                </div>
                <div class="col d-flex flex-column justify-content-end">
                    <p class="fs-3">PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas Indonesia
                        berikutnya melalui
                        pengembangan Proyek Awak Mas
                        . Proyek Awak Mas berlokasi di kecamatan Latimojong, Kabupaten Luwu, Sulawesi Selatan.
                    </p>
                    <a href="">
                        <h5 class="text-secondary fw-bold">Lebih Lanjut ></h5>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: #115258">
        <div class="container-fluid p-5">
            <div class="row justify-content-center">
                <div class="col text-center p-5">
                    <h5 class="text-uppercase fw-bold text-white-50 fs-2">bisnis kami</h5>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="text-white fs-2">
                        PT MASMINDO DWI AREA (MDA) adalah pemegang Kontrak Karya Generasi VIII
                        (Ketukuh) yang berlokasi di Kecamatan Latimojong, Kabupaten Luwu,
                        Provinsi Sulawesi Selatan yang saat ini telah mendapatkan Penyesuaian Tahap Kegiatan Kontrak Karya.
                        PT MASMINDO DWI AREA menjadi Tahap Kegiatan Operasi Produksi sesuai surat keputusan Menteri Energi
                        dan Sumber Daya Mineral
                        No. 171.K/30/DJB/2018 tanggal 16 Januari 2018 dan berlaku hingga tanggal 19 Juni 2050.
                    </p>
                    <a href="" class="text-white-50">
                        <h5 class="fs-2 fw-bold">Lebih Lanjut ></h5>
                    </a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col p-5">
                    <div class="ratio ratio-16x9">
                        <iframe class="rounded-5" src="https://www.youtube.com/embed/ZWexQojbWEQ?si=Kvf_BZnRB25tbNg1"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid m-0 p-0">
            <div id="map" style="height: 55vh;"></div>
        </div>
    </section>
    <section>
        <div class="container-fluid p-3">
            <div class="row p-5">
                <div class="col">
                    <h3 class="text-uppercase text-center text-secondary">Berita Terkini</h3>
                </div>
            </div>

            <div class="scroll-wrapper my-5">
                <button class="scroll-button scroll-button-left" onclick="scrollBeritaTerkiniLeft()">
                    <i class="fas fa-chevron-left"></i> <!-- Ikon untuk kiri -->
                </button>
                <button class="scroll-button scroll-button-right" onclick="scrollBeritaTerkiniRight()">
                    <i class="fas fa-chevron-right"></i> <!-- Ikon untuk kanan -->
                </button>

                <div class="scroll-container" id="scrollRow">
                    <div class="custom-card">
                        <div class="overflow-hidden">
                            <img class="custom-img" src="{{ asset('template/406bd29d-45fa-48c6-8a43-ad8feb2f77a9.jpg') }}"
                                alt="Panen Pertama Greenhouse Destana Bonelemo">
                        </div>
                        <h3 class="text-center pt-3 fw-bold">UJI COBA MAKANAN BERGIZI UNTUK INDONESIA EMAS</h3>
                        <p class="pt-3 px-3">PT. Masmindo Dwi Area (MDA) bekerja sama dengan Pemda Luwu dan Kodim 1403...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
