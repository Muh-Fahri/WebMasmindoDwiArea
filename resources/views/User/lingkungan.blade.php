@extends('layout')
@section('konten')
    @include('navbar')
    @include('bg-halaman')
    <section style="background-color: #D9D9D9">
        <div class="container">
            <div class="row p-5">
                <aside data-aos="fade-up" class="col-5 p-5" style="background-color: #A99866">
                    <div class="row">
                        <div class="col">
                            <h1 class="pb-5 text-white">Program Pemantauan Rutin</h1>
                            <p class="text-white">Perusahaan mempertahankan program pemantauan rutin dan terus mengevaluasi
                                bidang-bidang yang
                                memerlukan perbaikan.</p>
                        </div>
                    </div>
                </aside>
                <div data-aos="fade-down" class="col p-5">
                    <h1 style="color: #A99866">Kebijakan Lingkungan</h1>
                    <p style="color: #707070">Masmindo secara aktif berupaya melindungi lingkungan operasinya dengan
                        kegiatan dan program
                        pemantauan lingkungan, termasuk pengumpulan data curah hujan, pemantauan air tanah dan air
                        permukaan, program revegetasi dan pembuangan limbah.</p>
                    <p style="color: #707070">
                        Perusahaan mempertahankan program pemantauan rutin dan terus mengevaluasi bidang-bidang yang
                        memerlukan perbaikan. Beberapa studi baseline lingkungan telah diselesaikan sebelumnya dan
                        Perusahaan terus memperbarui database lingkungannya. Pemantauan lingkungan dilakukan untuk kualitas
                        Air Permukaan, Hidrologi, Meteorologi, Kualitas Udara Ambien dan Kebisingan, Flora dan Fauna
                        Terestrial, dan Ekologi Akuatik.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: #084D30">
        <div class="container">
            <div class="row">
                <aside data-aos="fade-right" class="col-5 p-5">
                    <img class="w-100 h-100" src="{{ asset('logo/logoLingkungan.svg') }}" alt="">
                </aside>
                <div class="col-4 d-flex align-items-center" style="min-height: 300px;">
                    <div class="w-100">
                        <div class="row">
                            <div data-aos="fade-down" class="col">
                                <h4 class="text-white">Pengelompokan Sampah Berdasarkan Jenis</h4> <br>
                                <p class="text-white">Sebagai bagian dari komitmen Masmindo dalam menjaga kelestarian
                                    lingkungan,
                                    kami menerapkan
                                    kebijakan pengelolaan sampah yang bertanggung jawab melalui sistem pengelompokan sampah
                                    yang
                                    jelas dan terstruktur. Tujuannya adalah untuk mempermudah proses daur ulang, mengurangi
                                    dampak
                                    negatif terhadap lingkungan, serta meningkatkan kesadaran seluruh karyawan terhadap
                                    pentingnya
                                    memilah sampah sejak dini.</p>
                            </div>

                        </div>
                        <div data-aos="fade-down" class="row">
                            <div class="col-2">
                                <img class="w-100 h-100 rounded-3" src="{{ asset('logo/anorganikLogo.svg') }}"
                                    alt="">
                            </div>
                            <div class="col-2">
                                <img class="w-100 h-100 rounded-3" src="{{ asset('logo/organikLogo.svg') }}" alt="">
                            </div>
                            <div class="col-2">
                                <img class="w-100 h-100 rounded-3" src="{{ asset('logo/b3logo.svg') }}" alt="">
                            </div>
                        </div>
                    </div>
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
