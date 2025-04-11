@include('navbar')
@extends('layout')

@section('konten')
    {{-- <div class="bg-news w-100" style="background: linear-gradient(to right, #b6812c8e,#b6812c00,url({{ asset('berita/' . $banner->img_banner) }});height: 70vh; object-fit: cover; background-position: center;">
        <img class="w-100" style="height: 70vh; object-fit: cover; background-position: center;"
            src="{{ asset('berita/' . $banner->img_banner) }}" alt="">
    </div> --}}

    <div class="container-fluid mt-3 mb-5">
        <div class="row mb-5">
            <div class="col-lg-8 col-md-12">
                @foreach ($populer as $pop)
                    <div class="bg-berita-utama d-flex flex-column justify-content-end p-3 w-100"
                        style="background: linear-gradient(to top, rgba(0, 0, 0, 0.973), rgba(0, 0, 0, 0)),
               url('{{ asset('berita/' . $pop->img_berita) }}');
               background-size: cover; background-position: center; min-height: 50vh;">
                        <a href="{{ route('user.selengkapnya', $pop->id) }}">
                            <h5 class="fw-bold text-white fade-in" style="max-width: 60%">
                                {{ Str::limit($pop->judul_berita, 100, '...') }}</h5>
                        </a>
                    </div>
                @endforeach
                <div class="row mt-2">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <div class="card" style="background-color: #755400">
                                    <div class="card-body">
                                        <h5 class="text-center text-white">Berita Utama</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @foreach ($utama as $ut)
                            <div class="card berita-utama shadow border-1">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img class="w-100 shadow-sm" style="height: 15vh;object-fit:cover"
                                                src="{{ asset('berita/' . $ut->img_berita) }}" alt="">
                                        </div>
                                        <div class="col">
                                            <h5 style="color: #755400">{{ $ut->judul_berita }}</h5>
                                            <p class="text-secondary">{{ $ut->created_at->format('d M Y') }}</p>
                                            <p>{{ Str::limit($ut->isi_berita, 200, '...') }}</p>
                                            <a class="" href="{{ route('user.selengkapnya', $ut->id) }}">Lihat
                                                Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="col">
                        <div class="card" style="background-color: #755400">
                            <div class="card-body">
                                <h5 class="text-white text-center">Berita Lainnya</h5>
                            </div>
                        </div>
                    </div>
                </div>
                @foreach ($lainnya as $data)
                    <div class="card">
                        <div class="card-body p-2">
                            <div class="d-flex ">
                                <div class="me-2 d-flex align-items-center">
                                    <img class="img-fluid shadow-sm"
                                        style="max-width: 80px; height: 80px; object-fit: cover;"
                                        src="{{ asset('berita/' . $data->img_berita) }}" alt="">
                                </div>
                                <div>
                                    <h5 class="m-0 fs-5" style="color: #755400">{{ $data->judul_berita }}</h5>
                                    <p class="m-0 text-secondary" style="font-size: 10px">
                                        {{ $data->created_at->format('d M Y') }}</p>
                                    <p class="m-0">{{ Str::limit($data->isi_berita, 100, '...') }}</p>
                                    <a href="{{ route('user.selengkapnya', $data->id) }}">Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div> <!-- Penutup row -->
    </div>
    @include('footter')
@endsection
