@extends('layout')
@include('Admin.navSide')

@section('konten')
    <!-- Modal Selamat Datang -->
    @if (session('berhasil'))
        <div class="modal fade" id="welcomeAminModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="welcomeAdminModalLabel">Selamat Datang</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p class="fw-bold text-success">Hallo {{ Auth::user()->name }}</p>
                    </div>
                    <div class="modal-footer d-none">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    @endif
    <!-- Konten di sebelah sidebar -->
    <div class="content-wrapper">
        <section class="content">
            <div class="container-fluid p-4">
                <div class="row">
                    <div class="col">
                        <div class="small-box bg-info fade-in">
                            <div class="inner">
                                <h3>{{ $berita->count() }}</h3>
                                <p>Berita</p>
                            </div>
                            <div class="icon">
                                <i class="bi bi-newspaper"></i>
                            </div>
                            <a href="{{ route('admin.media') }}" class="small-box-footer">
                                More info <i class="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="info-box bg-gradient-info fade-in">
                            <span class="info-box-icon bg-info"><i class="bi bi-image"></i></span>
                            <div class="info-box-content">
                                <span class="info-box-text">Foto Terupload</span>
                                <span class="info-box-number">{{ $galeri->count() }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info-box bg-gradient-info fade-in">
                            <span class="info-box-icon bg-info"><i class="bi bi-camera-video-fill"></i></span>
                            <div class="info-box-content">
                                <span class="info-box-text">Video Terupload</span>
                                <span class="info-box-number">{{ $video->count() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="small-box bg-info fade-in">
                            <div class="inner">
                                <h3>{{ $pesan->count() }}</h3>
                                <p>Pesan masuk</p>
                            </div>
                            <div class="icon">
                                <i class="bi bi-newspaper"></i>
                            </div>
                            <a href="{{ route('admin.kontak') }}" class="small-box-footer">
                                More info <i class="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
