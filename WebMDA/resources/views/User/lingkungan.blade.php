@extends('layout')
@section('konten')
    @include('navbar')
    @include('bg-halaman')
    <section>
        <div class="container py-5">
            <div class="row g-4 align-items-stretch">
                <aside data-aos="fade-up" class="col-lg-5 col-md-6">
                    <div class="p-4 w-75 h-100 d-flex flex-column justify-content-center" style="background-color: #A99866;">
                        <h1 class="text-white mb-4">Program Pemantauan Rutin</h1>
                        <p class="text-white mb-0">Perusahaan mempertahankan program pemantauan rutin dan terus mengevaluasi
                            bidang-bidang yang memerlukan perbaikan.</p>
                    </div>
                </aside>
                <div data-aos="fade-down" class="col-lg-7 col-md-6">
                    <div class="p-4">
                        <h1 class="text-lingkungan">Kebijakan Lingkungan</h1>
                        <p style="color: #707070;">Masmindo secara aktif berupaya melindungi lingkungan operasinya dengan
                            kegiatan dan program pemantauan lingkungan, termasuk pengumpulan data curah hujan, pemantauan
                            air
                            tanah dan air permukaan, program revegetasi dan pembuangan limbah.</p>
                        <p style="color: #707070;">Perusahaan mempertahankan program pemantauan rutin dan terus mengevaluasi
                            bidang-bidang yang memerlukan perbaikan. Beberapa studi baseline lingkungan telah diselesaikan
                            sebelumnya dan Perusahaan terus memperbarui database lingkungannya. Pemantauan lingkungan
                            dilakukan
                            untuk kualitas Air Permukaan, Hidrologi, Meteorologi, Kualitas Udara Ambien dan Kebisingan,
                            Flora dan
                            Fauna Terestrial, dan Ekologi Akuatik.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="background-color: #5B6146;">
        <div class="container py-5">
            <div class="row align-items-center">
                <aside data-aos="fade-right" class="col-lg-5 col-md-6 mb-4 mb-md-0">
                    <img class="img-fluid" src="{{ asset('logo/logoLingkungan.svg') }}" alt="Logo Lingkungan">
                </aside>
                <div class="col-lg-7 col-md-6">
                    <div class="text-white">
                        <div data-aos="fade-down" class="mb-4">
                            <h4>Pengelompokan Sampah Berdasarkan Jenis</h4>
                            <p>Sebagai bagian dari komitmen Masmindo dalam menjaga kelestarian lingkungan,
                                kami menerapkan kebijakan pengelolaan sampah yang bertanggung jawab melalui sistem
                                pengelompokan sampah
                                yang jelas dan terstruktur. Tujuannya adalah untuk mempermudah proses daur ulang, mengurangi
                                dampak
                                negatif terhadap lingkungan, serta meningkatkan kesadaran seluruh karyawan terhadap
                                pentingnya
                                memilah sampah sejak dini.</p>
                        </div>
                        <div data-aos="fade-down" class="row g-3">
                            <div class="col-4 col-sm-3 col-md-2">
                                <img class="img-fluid rounded-5" src="{{ asset('logo/anorganikLogo.svg') }}"
                                    alt="Anorganik">
                            </div>
                            <div class="col-4 col-sm-3 col-md-2">
                                <img class="img-fluid rounded-5" src="{{ asset('logo/organikLogo.svg') }}" alt="Organik">
                            </div>
                            <div class="col-4 col-sm-3 col-md-2">
                                <img class="img-fluid rounded-5" src="{{ asset('logo/b3logo.svg') }}" alt="B3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="tree-section">
        <div class="container h-100">
            <div class="row h-100 align-items-center position-relative z-2">
                <div class="col-md-8 d-flex flex-column justify-content-center ps-md-5">
                    <h3 class="fw-bold" style="color: #5B6146;">Penanaman Pohon</h3>
                    <p class="fw-medium" style="color: #6E6E6E;">
                        Sebagai bagian dari tanggung jawab lingkungan, Masmindo Dwi Area berkomitmen untuk menjaga
                        kelestarian alam melalui program penanaman pohon secara berkelanjutan di area operasi dan
                        wilayah sekitar.
                    </p>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img class="img-fluid" src="{{ asset('web/anoa.png') }}" alt="Maskot Masmindo"
                        style="max-height: 300px; z-index: 2;">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-kebijakan-bottom"
            style="background: linear-gradient(to right, rgba(0, 0, 0, 0.616), rgba(0, 0, 0, 0.616)), url({{ asset('template/pexels-bence-szemerey-337043-6804255.jpg') }}); height: 50vh; background-size: cover; background-position: center;">
        </div>
    </section>
    <div id="map"></div>
@endsection
