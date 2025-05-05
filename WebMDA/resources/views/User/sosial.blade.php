@extends('layout')
@section('konten')
    @include('navbar')
    @include('bg-halaman')

    <section class="d-flex align-items-center">
        <div class="container">
            <div class="row h-100 flex-column-reverse flex-md-row g-0">
                <!-- Kolom Kiri -->
                <div data-aos="fade-right" class="col-md-5 d-flex flex-column justify-content-center p-5">
                    <div class="row">
                        <div class="col-md-6">
                            <h1 class="text-uppercase fw-bold display-5 mb-4" style="color: #A99866">
                                Program Sosial Masmindo
                            </h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p style="color: #6E6E6E;">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum tellus
                                quis tellus ultrices elementum.
                            </p>
                            <p style="color: #6E6E6E;">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum tellus
                                quis tellus ultrices elementum.
                            </p>
                            <p style="color: #6E6E6E;">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum tellus
                                quis tellus ultrices elementum.
                            </p>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center mt-4">
                        <div style="width: 250px; height: 250px; overflow: hidden; border-radius: 50%;">
                            <img src="{{ asset('template/Jovem líder da equipe de engenharia com braços cruzados e seus estagiários de sucesso em poses de vestuário de trabalho _ Foto Premium.jpg') }}"
                                alt="Foto Tim" class="w-100 h-100" style="object-fit: cover;">
                        </div>
                    </div>
                </div>

                <!-- Kolom Kanan -->
                <div data-aos="fade-up" class="col-md-6 p-0">
                    <img src="{{ asset('web/CampAwakMasJPEG.jpg') }}" alt="Program Sosial Masmindo" class="w-100 h-100"
                        style="object-fit: cover;">
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="bg-program-2"
            style="background: linear-gradient(to right, rgba(0, 0, 0, 0.554), rgba(0, 0, 0, 0.554)), url('{{ asset('template/pexels-bence-szemerey-337043-6804255.jpg') }}');
                   background-size: cover;
                   background-position: center;
                   height: 70vh;
                   display: flex;
                   align-items: center;">
            <div class="container">
                <div class="row align-items-center g-0">
                    <div data-aos="fade-right" class="col">
                        <div class="row">
                            <div class="col">
                                <h1 class="text-white">Lorem ipsum dolor sit amet</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5">
                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    rutrum
                                    tellus quis
                                    tellus ultrices elementum.</p>
                                <a href="" class="btn text-uppercase nav-btn rounded-0 fw-bold">more <i
                                        class="fa-solid fa-arrow-down fa-beat"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container-fluid m-0 p-0">
            <div class="container-fluid m-0 p-0" style="overflow: hidden;">
                <div class="row g-0">
                    <!-- Kolom Gambar -->
                    <aside data-aos="fade-right" class="col-md-6 p-0">
                        <img class="w-100 h-100 object-fit-cover img-full-mobile"
                            src="{{ asset('web/CampAwakMasJPEG.jpg') }}" alt="Gambar"
                            style="max-width: 100%; height: auto;">
                    </aside>

                    <!-- Kolom Konten -->
                    <div data-aos="fade-down" class="col-md-6 m-0 p-0 d-flex align-items-center">
                        <div class="px-5 py-4 content-section">
                            <h1 class="fw-bold text-uppercase mb-4" style="color: #A99866;">
                                Program Sosial<br>Masmindo
                            </h1>
                            <p class="text-secondary" style="max-width: 350px;">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum tellus quis
                                tellus
                                ultrices elementum.
                            </p>
                            <ul class="list-unstyled mt-4">
                                <li class="mb-2">
                                    <hr style="background-color: black">
                                    <p style="color: #5B6146"
                                        class="d-flex program-item justify-content-between align-items-center">
                                        Program Pengembangan Masyarakat
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </p>
                                    <hr style="background-color: black">
                                </li>
                                <li class="mb-2">
                                    <p style="color: #5B6146"
                                        class="d-flex program-item justify-content-between align-items-center">
                                        Program Pendidikan
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </p>
                                    <hr style="background-color: black">
                                </li>
                                <li class="mb-2">
                                    <p style="color: #5B6146"
                                        class="d-flex program-item justify-content-between align-items-center">
                                        Program Kesehatan
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </p>
                                    <hr style="background-color: black">
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
