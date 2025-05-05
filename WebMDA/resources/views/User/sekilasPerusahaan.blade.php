@extends('layout')
@section('konten')
    @include('navbar')
    <section>
        <div class="bg-tentang-kami">
            <div class="container h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div data-aos="fade-up" class="col-10 col-md-8 col-lg-5 text-center">
                        <h1 class="fw-bold text-white">TENTANG <span class="masmindo-tentang">MASMINDO</span></h1>
                        <p class="text-uppercase fw-medium text-white">Perjalanan Masmindo Dwi Area dalam mengembangkan
                            potensi
                            emas Indonesia,
                            berlandaskan komitmen pada
                            keberlanjutan dan tanggung jawab.</p>
                        <a href="#tentang-kami" class="btn btn-lg fw-bold nav-btn rounded-0 mt-3">
                            VIEW MORE <i class="fa-solid fa-angles-down fa-beat"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="tentang-kami">
        <div class="container-fluid">
            <div class="row align-items-center">
                <aside data-aos="fade-right" class="col-12 m-0 p-0 col-md-5 text-center">
                    <img class="img-fluid w-100 h-100"
                        src="{{ asset('template/Jovem líder da equipe de engenharia com braços cruzados e seus estagiários de sucesso em poses de vestuário de trabalho _ Foto Premium.jpg') }}"
                        alt="">
                </aside>
                <div data-aos="fade-down" class="col-12 col-md-5">
                    <div class="container p-5">
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <h1 class="isi-tentang fw-bold fs-0 text-uppercase display-4">Tentang Masmindo</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-9">
                                <p style="color: #707070" class="pt-5 fs-4 fs-md-3">
                                    <strong>Sebagai pengelola Tambang Emas Awak
                                        Mas</strong>, Masmindo berupaya
                                    menjalankan operasi yang
                                    efisien,
                                    aman, dan berkelanjutan.
                                    Kami terus meningkatkan kualitas dan memperkuat peran kami bagi masyarakat dan
                                    lingkungan sekitar.
                                </p>
                                <p style="color: #707070" class="pt-5 fs-4 fs-md-3">Dengan fokus pada keberlanjutan,
                                    keselamatan, dan keterlibatan masyarakat, Masmindo terus
                                    mempersiapkan seluruh aspek penting menuju tahap produksi, sekaligus menjalin kerja sama
                                    strategis untuk memastikan kelancaran operasional di masa depan.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: #5B6146">
        <div class="container p-5">
            <div class="row p-4 justify-content-center">
                <div class="col-8 col-sm-6 col-md-3 text-center">
                    <img src="{{ asset('logo/LogoMasmindo.webp') }}" alt="Logo Masmindo" class="img-fluid"
                        style="max-width: 180px; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.247));">
                </div>
            </div>
            <div class="row justify-content-center g-4">
                <div data-aos="fade-up" data-aos-duration="1000" class="col-md-5 d-flex">
                    <div class="card visi-misi-card rounded-0 w-100">
                        <div class="card-body m-0 p-0 d-flex flex-column h-100">
                            <div class="row flex-grow-1 g-0">
                                <aside class="col-auto" style="background-color: #A99866; width: 5px;"></aside>
                                <div class="col p-3 d-flex flex-column">
                                    <div class="row">
                                        <div class="col-5 p-3">
                                            <img class="img-fluid" src="{{ asset('logo/LogoMasmindo.webp') }}"
                                                alt="">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col">
                                            <h2 class="visi-misi">Visi</h2>
                                        </div>
                                    </div>
                                    <div class="row p-2 flex-grow-1">
                                        <div class="col">
                                            <p class="fw-medium text-black">Menjadi produsen emas Indonesia berikutnya,
                                                mengembangkan dan mengoperasikan Proyek Emas Awak Mas dengan model bisnis
                                                yang
                                                berkelanjutan untuk memberi manfaat kepada seluruh pemangku kepentingan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" class="col-md-5 d-flex">
                    <div class="card visi-misi-card rounded-0 w-100">
                        <div class="card-body m-0 p-0 d-flex flex-column h-100">
                            <div class="row flex-grow-1 g-0">
                                <aside class="col-auto" style="background-color: #A99866; width: 5px;"></aside>
                                <div class="col p-3 d-flex flex-column">
                                    <div class="row">
                                        <div class="col-5 p-3">
                                            <img class="img-fluid" src="{{ asset('logo/LogoMasmindo.webp') }}"
                                                alt="">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col">
                                            <h2 class="visi-misi">Misi</h2>
                                        </div>
                                    </div>
                                    <div class="row p-2 flex-grow-1">
                                        <div class="col">
                                            <p class="fw-medium text-black">Membangun Proyek Awak Mas yang bertanggung
                                                jawab secara sosial dengan cara:</p>
                                            <ul class="mb-0">
                                                <li>
                                                    <p class="p-0 m-0">Menjamin keselamatan, kesehatan, dan pengembangan
                                                        karyawan</p>
                                                </li>
                                                <li>
                                                    <p class="p-0 m-0">Menjadi sadar lingkungan</p>
                                                </li>
                                                <li>
                                                    <p class="p-0 m-0">Memelihara generasi berikutnya dengan memberdayakan
                                                        karyawan dan masyarakat</p>
                                                </li>
                                                <li>
                                                    <p class="p-0 m-0">Berkontribusi pada kemakmuran ekonomi yang lebih baik
                                                        bagi Indonesia</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <div class="row align-items-center p-5 gy-4">
                <div data-aos="fade-right" class="col-12 col-md-4">
                    <h1 class="text-active display-4 fw-medium">Masmindo Dalam Aksi</h1>
                    <p class="fw-medium text-secondary fs-7 fs-md-6">
                        Masmindo terus bergerak aktif dalam membangun Proyek Emas Awak Mas dengan pendekatan yang
                        bertanggung jawab, berkelanjutan, dan inklusif.
                        Setiap langkah kami mencerminkan komitmen untuk memberikan dampak positif bagi masyarakat,
                        lingkungan, dan masa depan industri pertambangan Indonesia.
                        Melalui berbagai kegiatan di lapangan, Masmindo menunjukkan dedikasi terhadap keselamatan kerja,
                        pemberdayaan komunitas lokal, dan praktik pertambangan yang ramah lingkungan.
                    </p>
                </div>
                <div data-aos="fade-down" class="col-12 col-md-6 text-center">
                    <img class="img-fluid w-100 h-100" src="{{ asset('web/ActiveLogo.png') }}" alt="">
                </div>
            </div>
        </div>
    </section>
@endsection
