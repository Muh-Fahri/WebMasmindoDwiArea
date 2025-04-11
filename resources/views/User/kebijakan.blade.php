@include('navbar')
@include('bg-halaman')
@extends('layout')
@section('konten')
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1 style="color: #e8c56b">Kebijakan Keberlanjutan</h1>
                <div class="under-lines-masmindo"></div>
                <p class="mt-5" style="text-align: justify">Masmindo bertujuan menjadi bisnis yang berkelanjutan yang
                    memberikan nilai kepada pemegang saham jangka panjang dengan membangun hubungan yang saling
                    menguntungkan dengan seluruh pemangku kepentingan. Misi kami adalah tumbuh bersama masyarakat lokal dan
                    berbagi manfaat proyek melalui strategi manajemen yang memenuhi kebutuhan pemerintah dan standar tata
                    kelola perusahaan, sembari beradaptasi dengan budaya lokal. Perusahaan berusaha untuk menjaga dialog
                    yang terstruktur dan aktif dengan seluruh pemangku kepentingan untuk mengidentifikasi dan mengelola
                    harapan dan manfaat yang dapat diberikan.

                </p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col d-flex justify-content-center">
                <img style="width:30rem" src="{{ asset('img/download.png') }}" alt="">
            </div>
        </div>
        <div class="row mt-5 mb-5">
            <div class="col">
                <p>Kegiatan keberlanjutan Masmindo didasarkan pada perspektif ‘triple bottom line’ yang mempertimbangkan
                    aspek lingkungan social, dan tata kelola perusahaan</p>
            </div>
        </div>
    </div>
    @include('footter')
@endsection
