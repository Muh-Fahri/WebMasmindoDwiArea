@extends('layout')
@include('navbar')
@section('konten')
    <section>
        <div data-aos="fade-right" class="bg-mas-project">
            <div class="container-fluid">
                <div class="fade-in">
                    <div class="row align-items-center" style="min-height: 100vh;">
                        <div class="col p-5">
                            <div class="d-flex flex-column justify-content-center align-items-start" style="height: 100%;">
                                <h1 class="awakmas-text fw-medium">Awak Mas Gold Project</h1>
                                <a href="" class="fw-medium btn text-white">Baca Selengkapnya <i
                                        class="bi bi-arrow-right-circle-fill"></i></a>

                                <!-- Paragraf lainnya bisa dimasukkan kembali di sini jika dibutuhkan -->
                            </div>
                        </div>
                        <div class="col-5">
                            <img class="w-75 h-75" src="{{ asset('logo/LogoMasmindo.png') }}" alt=""
                                style="filter:drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.548))">
                        </div>

                        {{-- <aside class="col align-content-center p-5" data-aos="fade-left">
                            <img class="w-100 h-75" src="{{ asset('web/MapImg.png') }}" alt="">
                        </aside> --}}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container p-5">
        <div class="row d-flex flex-row p-5" data-aos="fade-right" style="background-color: #F9F8F3">
            <div class="col">
                <div class="card-auto position-relative w-100 h-100">
                    <img class="w-100 w-100" style="object-fit: cover;display: block;" src="{{ asset('web/Masmindo.jpg') }}"
                        alt="">
                    <div class="card-body position-absolute bottom-0 start-0 end-0"
                        style="background-color:#a7965fad; color: white; padding: 0.5rem;">
                        <h6 class="card-title mb-0">Judul Kartu</h6>
                        <p class="card-text small mb-0">Deskripsi singkat.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card-auto position-relative w-100 h-100">
                    <img class="w-100 h-100" style="object-fit: cover; display: block;"
                        src="{{ asset('web/CampAwakMasJPEG.jpg') }}" alt="">
                    <div class="card-body position-absolute bottom-0 start-0 end-0"
                        style="background-color: #a7965fad; color: white; padding: 0.5rem;">
                        <h6 class="card-title mb-0">Judul Kartu</h6>
                        <p class="card-text small mb-0">Deskripsi singkat.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card-auto position-relative w-100 h-100">
                    <img class="h-100 w-100" style="object-fit: cover; display: block;"
                        src="{{ asset('web/8b6e7bcd-8f8b-4714-8653-d7a7d7a1a6cd.jpg') }}" alt="">
                    <div class="card-body position-absolute bottom-0 start-0 end-0"
                        style="background-color:#a7965fad; color: white; padding: 0.5rem;">
                        <h6 class="card-title mb-0">Judul Kartu</h6>
                        <p class="card-text small mb-0">Deskripsi singkat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row mt-5 mb-5">
            <div class="col mt-5 position-relative">

                <!-- Tombol kiri -->
                <button style="background-color:  #A7965F"
                    class="scroll-btn p-4 position-absolute top-50 start-0 translate-middle-y z-3"
                    onclick="scrollGallery('left')">
                    <i class="fas fa-chevron-left"></i>
                </button>

                <!-- Galeri scroll -->
                <div class="rounded pt-5 pb-5" style="background-color: #F9F8F3;">
                    <div class="row">
                        <div class="col">
                            <h3 class="text-center fw-medium" style="color: #A7965F">Galeri Kami</h3>
                        </div>
                    </div>
                    <div id="galleryScroll" class="scrolling-wrapper">
                        @foreach ($galeri as $item)
                            <div class="card shadow m-3 flex-shrink-0" data-aos="fade-left" style="width: 30%;">
                                <div class="bg-image d-flex flex-column justify-content-end"
                                    style="background: url('{{ asset('img/' . $item->image_galeri) }}');
                                            background-size: cover;
                                            background-position: center;
                                            height: 35vh;">
                                    <div class="card-body galeri-card-body">
                                        <h6 class="card-title fw-medium text-white">{{ $item->nama_kegiatan }}</h6>
                                        <p class="card-text fw-medium text-muted small text-white">
                                            {{ $item->deskrip_kegiatan }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <!-- Tombol kanan -->
                <button style="background-color: #A7965F"
                    class="scroll-btn p-4 position-absolute top-50 end-0 translate-middle-y z-3"
                    onclick="scrollGallery('right')">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="container-fluid m-0 p-0">
                <div class="bg-galeri-video"
                    style="background: linear-gradient(to right, #FFDF8F, #ffdf8fdc, #000000b0, #00000062),
                           url('{{ asset('web/IMG-20230606-WA0031.jpg') }}');
                           background-size: cover;
                           background-position: top center;
                           height: 70vh;
                           display: flex;
                           align-items: center;">
                    <div class="row w-100 m-0 d-flex">
                        <div class="col-md-5 p-5">
                            <h3 class="gal-text fw-bold" data-aos="fade-right">Menelusuri Jejak Kami dalam
                                Mengelola Potensi Alam
                                dengan Tanggung Jawab
                                dan Inovasi.</h3>
                            <br>
                            <p data-aos="fade-left" class="text-white fw-medium">Galeri Masmindo Dwi Area, tempat di mana
                                kami
                                membagikan
                                dokumentasi visual
                                dari perjalanan kami
                                dalam mengelola tambang emas Awak Mas. Dari kegiatan eksplorasi, pembangunan infrastruktur,
                                hingga program pengembangan masyarakat, semua kami rangkum sebagai wujud transparansi dan
                                dedikasi kami terhadap pertambangan berkelanjutan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-relative rounded pt-5 pb-5" style="background-color: #F9F8F3;">
                <button style="background-color: #A7965F"
                    class="scroll-btn p-4 position-absolute top-50 start-0 translate-middle-y z-3"
                    onclick="scrollVideo('left')">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="rounded pt-5 pb-5" style="background-color: #F9F8F3;">
                    <div class="row">
                        <div class="col">
                            <h3 class="text-center fw-medium" style="color: #A7965F">Video Kegiatan</h3>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" id="videoScroll"
                        class="scrolling-wrapper d-flex overflow-auto" style="scroll-behavior: smooth;">
                        @foreach ($videos as $video)
                            <div class="m-3 flex-shrink-0" style="width: 800px; height: 450px;">
                                <iframe style="width: 100%; height: 100%;"
                                    src="{{ str_replace('watch?v=', 'embed/', $video->link_video) }}" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        @endforeach
                    </div>
                </div>
                <button style="background-color: #A7965F"
                    class="scroll-btn p-4 position-absolute top-50 end-0 translate-middle-y z-3"
                    onclick="scrollVideo('right')">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>

    @include('footter')
@endsection
