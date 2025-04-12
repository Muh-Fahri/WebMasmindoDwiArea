@extends('layout')
@include('navbar')
@section('konten')
    <div class="container">
        <button id="backToTop"
            style="position: fixed;
                bottom: 100px;
                left: 50px;
                z-index: 9999;
                background-color:#a7965f00;
                border: none;
                color: white;
                padding: 10px 15px;
                border-radius: 10%;
                opacity: 1;
                transition: opacity 0.5s ease;">
            <i class="bi bi-arrow-up-circle-fill iconArrow-hover"></i>
        </button>
        <div class="fade-in">
            <div class="row">
                <div class="col">
                    <h1 class="awakmas-text mt-5">Awak Mas Gold Project</h1>
                    <div class="ud-project"></div>

                    <p class="mt-5 text-secondary">Awak Mas Gold Project adalah sebuah proyek tambang emas
                        yang terletak di wilayah
                        Latimojong, Kabupaten Luwu, Sulawesi Selatan. Proyek ini dijalankan oleh PT Masmindo Dwi Area, yang
                        merupakan anak perusahaan dari PT Indika Energy Tbk, salah satu perusahaan yang brgerak di bidang
                        energi dan memiliki portofolio bisnis yang luas, termasuk dalam pertambangan, termasuk Proyek Awak
                        Mas yang dikelola oleh Masmindo. Lokasi tambang ini berada di daerah pegunungan yang kaya akan
                        kandungan
                        logam mulia, terutama emas, dan telah menjadi fokus pengembangan untuk dijadikan salah satu sumber
                        emas terbesar di kawasan timur Indonesia. </p>

                    <p class="text-secondary"> Proyek ini tidak hanya bertujuan untuk mengeksplorasi dan menambang emas,
                        tetapi juga dijalankan
                        dengan pendekatan yang berkelanjutan dan bertanggung jawab. Dalam pelaksanaannya, Awak Mas Gold
                        Project memperhatikan aspek lingkungan dan sosial di sekitar wilayah operasi. PT Masmindo
                        berkomitmen untuk tetap menjaga keseimbangan antara kegiatan industri dan kelestarian alam, serta
                        memberikan kontribusi nyata bagi masyarakat lokal melalui berbagai program pemberdayaan.</p>

                    <p class="text-secondary"> Seiring berjalannya waktu, proyek ini diharapkan dapat mendorong pertumbuhan
                        ekonomi daerah dan
                        nasional, menciptakan lapangan kerja, serta memberikan dampak positif bagi pembangunan infrastruktur
                        di daerah terpencil. Awak Mas Gold Project bukan hanya sekadar kegiatan penambangan, melainkan
                        bagian dari upaya besar untuk membawa kemajuan yang berkelanjutan, inklusif, dan bermanfaat bagi
                        semua pihak yang terlibat.</p>
                </div>
                <aside class="col-md-6 p-5" data-aos="fade-left">
                    <img class="w-100 h-75" src="{{ asset('img/download (3).png') }}" alt="">
                </aside>
            </div>
            <div class="row d-flex flex-row p-5" data-aos="fade-right" style="background-color: #F9F8F3">
                <div class="col">
                    <div class="card-auto position-relative w-100 h-100">
                        <img class="w-100 w-100" style="object-fit: cover;display: block;"
                            src="{{ asset('web/Masmindo.jpg') }}" alt="">
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
    </div>
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
                                <div class="card-body" style="background-color: #a7965fc4; max-height: 20%; padding: 1rem;">
                                    <h6 class="card-title text-white">{{ $item->nama_kegiatan }}</h6>
                                    <p class="card-text text-muted small text-white">{{ $item->deskrip_kegiatan }}</p>
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
        <div class="container-fluid">
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
                        <h3 class="gal-text" data-aos="fade-right">Menelusuri Jejak Kami dalam
                            Mengelola Potensi Alam
                            dengan Tanggung Jawab
                            dan Inovasi.</h3>
                        <br>
                        <p data-aos="fade-left" class="text-white">Galeri Masmindo Dwi Area, tempat di mana kami membagikan
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

    @include('footter')
@endsection
