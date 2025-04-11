@extends('layout')
@include('navbar')
@section('konten')
    <div class="container" id="proyekAwakMas">
        <div class="fade-in">
            <div class="row">
                <div class="col">
                    <h1 class="fw-bold mt-5" style="color: #e8c56b">Awak Mas Gold Project</h1>
                    <div class="under-line-proyek"></div>
                    <p class="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nisi nulla
                        quasi
                        iure, sit
                        consequatur nemo cumque esse facilis porro rerum delectus dolorem minus, minima asperiores
                        consequuntur
                        nobis quaerat pariatur.</p>
                    <img style="width:25rem" src="{{ asset('img/download (3).png') }}" alt="">
                </div>
            </div>
        </div>
        <div class="row mt-5 mb-5">
            <div class="fade-in">
                <div class="row">
                    <div class="col">
                        <h3 style="color: #b6812c">Galeri</h3>
                        <div class="underLine-galeri"></div>
                    </div>
                </div>
                <div class="col mt-5 position-relative">
                    <!-- Tombol kiri -->
                    <button class="scroll-btn position-absolute top-50 start-0 translate-middle-y z-3"
                        onclick="scrollGallery('left')" style="margin-left: -10px;">
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <!-- Galeri scroll -->
                    <div id="galleryScroll" class="scrolling-wrapper bg-light rounded">
                        @foreach ($galeri as $item)
                            <div class="card flex-shrink-0" style="width: 250px;">
                                <div class="bg-image"
                                    style="background: url('{{ asset('img/' . $item->image_galeri) }}');
                                        background-size: cover;
                                        background-position: center;
                                        height: 180px;
                                        border-top-left-radius: .5rem;
                                        border-top-right-radius: .5rem;">
                                </div>
                                <div class="card-body text-center">
                                    <h6 class="card-title">{{ $item->nama_kegiatan }}</h6>
                                    <p class="card-text text-muted small">{{ $item->deskrip_kegiatan }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>

                    <!-- Tombol kanan -->
                    <button class="scroll-btn position-absolute top-50 end-0 translate-middle-y z-3"
                        onclick="scrollGallery('right')" style="margin-right: -10px;">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="fade-in">
                <div class="row">
                    <div class="col">
                        <h1 class="fw-bold mt-5" style="color: #e8c56b">Video</h1>
                        <div class="under-line-proyek"></div>
                        <div class="row">
                            <div class="col">
                                <div id="videoCarousel" class="carousel carousel-fade mt-5"
                                    style="width: 800px; height: 450px;">
                                    <div class="carousel-inner" style="width: 100%; height: 100%;">
                                        @foreach ($videos as $index => $video)
                                            <div class="carousel-item {{ $index == 0 ? 'active' : '' }}">
                                                <iframe style="width: 100%; height: 100%;"
                                                    src="{{ str_replace('watch?v=', 'embed/', $video->link_video) }}"
                                                    frameborder="0" title="Youtube Video Frame {{ $index + 1 }}"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen>
                                                </iframe>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Indicators -->
                                    <div class="carousel-indicators">
                                        @foreach ($videos as $index => $video)
                                            <button type="button" data-bs-target="#videoCarousel"
                                                data-bs-slide-to="{{ $index }}"
                                                class="{{ $index == 0 ? 'active' : '' }}"
                                                aria-label="Video {{ $index + 1 }}">
                                            </button>
                                        @endforeach
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('footter')
@endsection
