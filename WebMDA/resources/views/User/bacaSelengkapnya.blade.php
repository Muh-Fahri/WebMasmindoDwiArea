@extends('layout')
@section('konten')
    <div class="container p-5">
        <div class="row p-5">
            <div class="col">
                <img style="object-fit: cover;height:50vh" class="w-100"
                    src="{{ asset('berita/' . $selengkapnya->img_berita) }}" alt="">
                <p class="mt-5" style="color: #b6812c">{{ $selengkapnya->created_at->format('d M Y') }}</p>
                <h1 style="color: #b6812c">{{ $selengkapnya->judul_berita }}</h3>
                    <div class="row pt-3">
                        <div class="col" style="text-align: justify">
                            <p>{{ $selengkapnya->isi_berita }}</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
@endsection
