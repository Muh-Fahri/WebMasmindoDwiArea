@extends('layout')
@section('konten')
    @include('navbar')
    @include('bg-halaman')
    <section>
        <div class="container pb-5">
            <div class="row flex-column-reverse flex-md-row">
                <aside data-aos="fade-right" class="col-md-5">
                    <div class="esg-orbit">
                        <div class="orbit-line"></div>
                        <div class="center-circle">SUSTAINABILITY</div>
                        <div class="orbit-container">
                            <div class="orbiter env"><span>ENVIRONMENT</span></div>
                            <div class="orbiter soc"><span>SOCIAL</span></div>
                            <div class="orbiter gov"><span>GOVERNANCE</span></div>
                        </div>
                    </div>
                </aside>
                <div class="col-md p-4">
                    <div class="row mb-3">
                        <div data-aos="zoom-in-up" class="col-4 col-sm-3 col-md-3">
                            <img class="img-fluid" src="{{ asset('logo/LogoMasmindo.webp') }}" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div data-aos="zoom-in-up" class="col mb-4">
                            <h1 class="fw-bold text-kebijakan-keberlanjutan">Kebijakan Keberlanjutan
                            </h1>
                        </div>
                    </div>
                    <div class="row" data-aos="zoom-in-up">
                        <div class="col">
                            <p class="fw-medium" style="color: #707070">
                                Masmindo bertujuan menjadi bisnis yang berkelanjutan yang memberikan nilai kepada pemegang
                                saham jangka panjang dengan membangun hubungan yang saling menguntungkan dengan seluruh
                                pemangku kepentingan. Misi kami adalah tumbuh bersama masyarakat lokal dan berbagi manfaat
                                proyek melalui strategi manajemen yang memenuhi kebutuhan pemerintah dan standar tata kelola
                                perusahaan, sembari beradaptasi dengan budaya lokal. Perusahaan berusaha untuk menjaga
                                dialog
                                yang terstruktur dan aktif dengan seluruh pemangku kepentingan untuk mengidentifikasi dan
                                mengelola harapan dan manfaat yang dapat diberikan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div data-aos="zoom-in-up" class="col">
                    <p class="fw-medium" style="color: #707070">
                        Kegiatan keberlanjutan Masmindo didasarkan pada perspektif ‘triple bottom line’ yang
                        mempertimbangkan aspek
                        lingkungan, sosial, dan tata kelola perusahaan:
                    </p>
                    <ul class="ps-3">
                        <li>
                            <p class="fw-medium" style="color: #707070">
                                <strong>Tanggung jawab lingkungan</strong> – melestarikan lingkungan dengan secara aktif
                                berupaya
                                mengurangi dampak operasi Perusahaan terhadap lingkungan dan mengoptimalkan pemanfaatan
                                sumber daya.
                            </p>
                        </li>
                        <li>
                            <p class="fw-medium" style="color: #707070">
                                <strong>Keberlanjutan sosial</strong> – bertindak sebagai pemberi kerja yang bertanggung
                                jawab serta
                                berkontribusi pada peningkatan kemajuan sosial di wilayah geografis tempat kami beroperasi.
                            </p>
                        </li>
                        <li>
                            <p class="fw-medium" style="color: #707070">
                                <strong>Tata kelola bisnis</strong> – menerapkan praktik-praktik tata kelola perusahaan yang
                                baik guna
                                menghasilkan bisnis yang stabil dan menguntungkan.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-kebijakan-bottom"
            style="background: linear-gradient(to right, rgba(0, 0, 0, 0.616), rgba(0, 0, 0, 0.616)), url({{ asset('template/pexels-bence-szemerey-337043-6804255.jpg') }}); height: 50vh; background-size: cover; background-position: center;">
        </div>
    </section>
@endsection
