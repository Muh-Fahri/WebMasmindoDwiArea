@extends('layout')
@include('navbar')
@section('konten')
    <main>
        <section>
            <div class="bg-home d-flex justify-content-center align-items-center">
                <div class="text-center text-white">
                    <p class="fw-medium">SELAMAT DATANG DI WEBSITE</p>
                    <div class="container">
                        <div class="row">
                            <div class="co-5l">
                                <div class="logo-shine-wrapper">
                                    <img class="logo-shine" src="{{ asset('logo/LogoMasmindo.webp') }}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <p class="fw-medium">SELAMAT DATANG DI MASMINDO, TEMPAT DIMANA KOMITMEN INOVASI DAN
                                KEBERLANJUTAN
                                MENCIPTAKAN MASA DEPAN PERTAMBANGAN YANG LEBIH BAIK.</p>
                        </div>
                    </div>
                    <a href="#nilaiInti">
                        <button class="btn btn-lg text-white btn-outline-light fw-medium rounded-0 btn-sm">LIHAT
                            SELANJUTNYA</button>
                    </a>
                </div>
            </div>
        </section>
        <section style="background-color: #736B52">
            <div class="container-fluid fade-in" id="nilaiInti">
                <div class="row justify-content-start align-items-center">
                    <aside class=" col-lg-4 p-0">
                        <div class="custom-img w-100"></div>
                    </aside>
                    <div class="col-lg-6 p-5">
                        <h1 class="fw-bold text-white">NILAI - NILAI INTI</h1>
                        <p class="fw-medium text-white">
                            Di Masmindo, kami percaya bahwa keberhasilan proyek tidak hanya ditentukan oleh hasil akhir,
                            tetapi juga oleh nilai-nilai yang menjadi dasar setiap langkah kami.
                            Nilai-nilai ini membentuk budaya kerja, memandu setiap keputusan, dan memperkuat komitmen
                            kami
                            untuk menjalankan operasional secara profesional, bertanggung jawab, dan berkelanjutan.
                            Melalui prinsip-prinsip inilah, kami membangun kepercayaan, menjaga integritas, dan terus
                            tumbuh
                            bersama masyarakat serta pemangku kepentingan.
                        </p>
                        <div class="row">
                            <div class="col">
                                <a href="" class="btn  btn-outline-light rounded-0">Selengkapnya</a>
                            </div>
                        </div>
                        <div data-aos="fade-down" class="row pt-4">
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 bg-iconCard rounded" style=" ">
                                                <img class="w-100 h-100" src="{{ asset('svg/agility.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">AGILITY</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Kemampuan untuk beradaptasi dengan lingkungan yang dinamis dan terbuka
                                            terhadap
                                            pendekatan baru.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100 " src="{{ asset('svg/caring.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">CARING</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100" src="{{ asset('svg/teamwork.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">TEAMWORK</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menghargai kolaborasi dan keberagaman untuk mencapai tujuan bersama.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100" src="{{ asset('svg/integrity.png') }}"
                                                    alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">INTEGRITY</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm card-nilaiNilai rounded-0 h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 rounded bg-iconCard">
                                                <img class="w-100 h-100" src="{{ asset('svg/caring.png') }}" alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">EXCELLENCE</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card shadow-sm rounded-0 card-nilaiNilai h-100">
                                    <div class="card-body p-3" style="min-height: 250px;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 p-2 bg-iconCard rounded"
                                                style="background-color: #FFEE6D; width: 40px; height: 40px;">
                                                <img class="w-100 h-100" src="{{ asset('svg/caring.png') }}" alt="">
                                            </div>
                                            <h4 class="m-0 fw-bold">CARING</h4>
                                        </div>
                                        <p class="fw-medium">
                                            Menempatkan keselamatan dan kesejahteraan karyawan sebagai prioritas, serta
                                            bertanggung jawab terhadap lingkungan dan masyarakat sekitar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="bg-mepo d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-center text-center text-md-start">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div class="fade-in">
                                <h1 class="fw-bold display-4 display-md-2 display-lg-1 text-light mb-3">
                                    Gold With Integrity
                                </h1>
                                <p class="fw-medium text-white lead">
                                    Menerapkan praktik pertambangan terbaik demi hasil maksimal yang bertanggung jawab.
                                </p>
                                <div class="row justify-content-center g-2 mt-3">
                                    <div class="col-auto">
                                        <a href=""
                                            class="btn rounded-0 btn-outline-light fw-bold d-flex align-items-center gap-2">
                                            See Our Project <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div class="col-auto">
                                        <a href=""
                                            class="btn rounded-0 btn-outline-light fw-bold d-flex align-items-center gap-2">
                                            See Our Media <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container-fluid m-0 p-0">
                <div class="row">
                    <div class="col m-0 p-0">
                        {{-- awak mas gold project --}}
                        <div class="bg-goldProject d-flex justify-content-center align-items-center">
                            <div class="row">
                                <div data-aos="fade-right" class="col-7">
                                    <h1 class="fw-bold" style="color: #A99866;font-size:40px">AWAK MAS GOLD PROJECT</h1>
                                    <p class="text-white fw-medium small">Lorem ipsum dolor sit amet consectetur
                                        adipisicing
                                        elit.
                                        Sequi, maxime!</p>
                                    <a class="btn nav-btn btn-sm rounded-0 fw-bold" href="">SELENGKAPNYA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col m-0 p-0">
                        <div class="bg-goldProjectR d-flex justify-content-center align-items-center">
                            <div class="row">
                                <div data-aos="fade-left" class="col-7 text-end">
                                    <h1 class="fw-bold" style="color: #A99866;font-size:40px">AWAK MAS GOLD PROJECT</h1>
                                    <p class="text-white fw-medium small">Lorem ipsum dolor sit amet consectetur
                                        adipisicing
                                        elit.
                                        Sequi, maxime!</p>
                                    <a class="btn btn-sm rounded-0 nav-btn fw-bold" href="">SELENGKAPNYA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid m-0 p-0">
                <div class="row">
                    <div class="col">
                        <div style="height: 500px; display: flex; align-items: center;">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <h1>KARIR</h1>
                                        <p>
                                            Bersama Masmindo, Anda tidak hanya membangun karier — Anda menjadi bagian dari
                                            sebuah
                                            misi besar: mengembangkan potensi sumber daya alam Indonesia secara bertanggung
                                            jawab dan
                                            berkelanjutan.
                                            Kami percaya bahwa sumber daya manusia adalah aset paling berharga. Oleh karena
                                            itu, kami
                                            menciptakan lingkungan kerja yang aman, inklusif, dan penuh peluang untuk tumbuh
                                            dan
                                            berkembang.
                                            Mari bergabung dengan tim profesional yang berdedikasi, dan bersama-sama kita
                                            wujudkan masa depan emas Indonesia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <aside class="col-3">
                        <img class="h-100 w-100" src="{{ asset('template/406bd29d-45fa-48c6-8a43-ad8feb2f77a9.jpg') }}"
                            alt="">
                    </aside>
                </div>
            </div>
        </section>
    </main>
    @include('footter')
@endsection
