@extends('layout')
@section('konten')
    @include('navbar')

    <section>
        <div class="bg-media d-flex flex-column justify-content-center" style="min-height: 100vh">
            <div class="container">
                <div data-aos="zoom-out" class="container my-auto">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-10 col-12">
                            <p class="text-white fw-medium fs-6">MEDIA</p>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h1 class="text-white fw-bold display-4 display-md-2"><span
                                            class="text-media-masmindo">MASMINDO</span> DALAM BERITA
                                    </h1>
                                </div>
                            </div>
                            <p class="text-white mt-3 text-uppercase fs-6 fs-md-5 px-2">
                                lihat lebih dekat berbagai kegiatan, pencapaian, dan momen penting yang kami abadikan dalam
                                bentuk foto dan video. Kami percaya bahwa setiap langkah dalam perjalanan kami layak untuk
                                dibagikan dan menjadi inspirasi. Mari menjelajahi cerita di balik setiap gambar dan cuplikan
                                yang kami sajikan!
                            </p>
                            <a href="#media" class="btn btn-lg fw-bold nav-btn rounded-0 mt-3">
                                VIEW MORE <i class="fa-solid fa-angles-down fa-beat"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="media" style="overflow-x: hidden;background-color:#F9F8F3">
        <div class="container-fluid m-0 p-0" style="max-width: 100vw;">
            <div class="row g-0">
                <div class="col-md-7">
                    @foreach ($populer as $pop)
                        <div data-aos="fade-right" class="berita-utama"
                            style="background: linear-gradient(to right, rgba(0, 0, 0, 0.548), rgba(0, 0, 0, 0.548)),
                        url('{{ asset('berita/' . $pop->img_berita) }}');
                               height: 100vh;
                               background-size: cover;
                               background-position:center;
                               display: flex;
                               align-items: center;
                               justify-content: center">
                            <a href="{{ route('user.selengkapnya', $pop->id) }}">
                                <div class="row p-5">
                                    <div class="col-5">
                                        <h3 class="text-white">{{ $pop->judul_berita }}</h3>
                                        <p class="text-white small">{{ Str::limit($pop->isi_berita, 200, '...') }}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
                <div class="col-md-5 p-3" style="max-height: 100vh; overflow-y: auto; overflow-x: hidden;">
                    <div class="p-2">
                        @foreach ($lainnya as $data)
                            <a href="{{ route('user.selengkapnya', $data->id) }}">
                                <div data-aos="fade-up" class="card card-lainnya shadow-sm mb-3 mx-2">
                                    <div class="row g-0 h-100">
                                        <div class="col-4 h-100">
                                            <img src="{{ asset('berita/' . $data->img_berita) }}"
                                                class="w-75 h-100 rounded-start" style="object-fit: cover;" alt="">
                                        </div>
                                        <div class="col-8 px-2 py-2 d-flex flex-column justify-content-center">
                                            <h5 class="mb-1 fw-medium text-white" style="font-size: 0.90rem">
                                                {{ $data->judul_berita }}
                                            </h5>
                                            <p class="text-info m-0 p-0" style="font-size: 0.70rem">
                                                {{ $data->created_at->format('d M Y') }}</p>
                                            <p class="mb-0 text-white" style="font-size: 0.75rem;">
                                                {{ Str::limit($data->isi_berita, 100, '...') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-sroll-project" style="background-color: #A99866">
            <div class="container-fluid">
                <div class="row">
                    <div class="row p-3">
                        <div class="col">
                            <h4 class="text-center text-white fw-bold">BERITA UTAMA</h4>
                        </div>
                    </div>
                    <div class="col position-relative p-4">
                        <button style="background-color: white; width: 48px; height: 48px; border-radius: 50%;"
                            class="scroll-btn d-flex justify-content-center align-items-center position-absolute top-50 start-0 translate-middle-y z-3 border-0 shadow"
                            onclick="scrollBeritaUtama('left')">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div id="beritaUtamaScroll" class="d-flex flex-nowrap overflow-auto px-2 gap-3"
                            style="scroll-behavior: smooth;">
                            @foreach ($utama as $ut)
                                <a data-aos="zoom-in-down" href="{{ route('user.selengkapnya', $ut->id) }}">
                                    <div class="card flex-shrink-0 position-relative text-white"
                                        style="min-width: clamp(280px, 30vw, 400px); aspect-ratio: 4/2; background: linear-gradient(to right, rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.432)),url('{{ asset('berita/' . $ut->img_berita) }}') no-repeat center center / cover;">
                                        <div class="isi-card-beritaUtama position-absolute bottom-0 start-0 end-0 p-3">
                                            <h6 class="text-white">{{ $ut->judul_berita }}</h6>
                                            <p class="text-white">{{ Str::limit($ut->isi_berita, 100, '...') }}</p>
                                        </div>
                                    </div>
                                </a>
                            @endforeach
                        </div>
                        <button style="background-color: white; width: 48px; height: 48px; border-radius: 50%;"
                            class="scroll-btn position-absolute top-50 end-0 translate-middle-y z-3 border-0 rounded-circle"
                            onclick="scrollBeritaUtama('right')">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-dokumentasi">
            <div class="container">
                <div class="row">
                    <div data-aos="zoom-in-up" class="col-5">
                        <h1 class="fw-bold" style="color: #A99866">DOKUMENTASI PERJALANAN KAMI</h1>
                        <p class="text-white">Potret dan cuplikan aktivitas terbaik kami.</p>
                        <a href="" class="btn nav-btn rounded-0">EXPLORE</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-sroll-project" style="background-color: #A99866">
            <div class="container-fluid">
                <div class="row">
                    <div class="row p-3">
                        <div class="col">
                            <h4 class="text-center text-white fw-bold">GALERI KAMI</h4>
                        </div>
                    </div>
                    <div class="col position-relative p-4">
                        <button style="background-color: white; width: 48px; height: 48px; border-radius: 50%;"
                            class="scroll-btn d-flex justify-content-center align-items-center position-absolute top-50 start-0 translate-middle-y z-3 border-0 shadow"
                            onclick="scrollGaleri('left')">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div id="galeriScroll" class="d-flex flex-nowrap overflow-auto px-2 gap-3"
                            style="scroll-behavior: smooth;">
                            @foreach ($galeri as $gal)
                                <div data-aos="zoom-in-down" class="card flex-shrink-0 position-relative text-white"
                                    style="min-width: clamp(280px, 30vw, 400px); aspect-ratio: 4/2; background: linear-gradient(to right, rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.432)),url('{{ asset('img/' . $gal->image_galeri) }}') no-repeat center center / cover;">
                                    <div class="isi-card-beritaUtama position-absolute bottom-0 start-0 end-0 p-3">
                                        <h6 class="text-white">{{ $gal->nama_kegiatan }}</h6>
                                        <p class="text-white">{{ Str::limit($gal->deskrip_kegiatan, 100, '...') }}</p>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <button style="background-color: white; width: 48px; height: 48px; border-radius: 50%;"
                            class="scroll-btn position-absolute top-50 end-0 translate-middle-y z-3 border-0 rounded-circle"
                            onclick="scrollGaleri('right')">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
