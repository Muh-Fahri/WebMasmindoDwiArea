@extends('layout')
@extends('navbar')
@section('konten')
    <div class="bg-sekilas d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="fw-bold text-white">Praktik Penambangan Terbaik.</h1>
                    <p class="text-white" style="max-width: 50%">Masmindo berkomitmen untuk beroperasi dengan menerapkan
                        kaidah-kaidah penambangan yang baik (good mining practices), termasuk melaksanakan tanggung jawab
                        sosial dan lingkungan, serta memberikan manfaat sebesar-besarnya kepada para pemangku kepentingan,
                        terutama masyarakat lingkar tambang.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <section>
        <div class="container p-5">
            <div class="row">
                <div class="col">
                    <h1 class="fw-bold" style="color: #e8c56b">Sekilas Perusahaan</h1>
                    <div class="under-line-sekilas"></div>
                </div>
            </div>
            <div class="row p-5 mt-5 rounded shadow-lg" style="background-color: #A7965F">
                <div class="col text-white">
                    <p style="align-content: justify">PT Masmindo Dwi Area (MDA) berdedikasi untuk menjadi produsen emas
                        Indonesia berikutnya melalui pengembangan Proyek Awak Mas. Proyek Awak Mas berlokasi di Kecamatan
                        Latimojong, Kabupaten Luwu, Sulawesi Selatan. Dengan berpegang pada nilai-nilai ACTIVE [ketangkasan
                        (agility), kepedulian (caring), kerja sama (teamwork), integritas (integrity), visioner (visionary),
                        dan keunggulan (excellence)], Masmindo berkomitmen untuk beroperasi dengan menerapkan kaidah-kaidah
                        penambangan yang baik (good mining practices), termasuk melaksanakan tanggung jawab sosial dan
                        lingkungan, serta memberikan manfaat sebesar-besarnya kepada para pemangku kepentingan, terutama
                        masyarakat lingkar tambang.</p>
                </div>
            </div>
        </div>
    </section>
    @include('footter')
@endsection
