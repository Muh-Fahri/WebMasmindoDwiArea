@extends('layout')
@include('navbar')
@section('konten')
    <div class="container mt-5">
        <div class="row gap-5 VMN ">
            <div class="col-5">
                <h1>Visi</h1>
                <div class="under-line-VMN"></div>
                <p>Menjadi produsen emas Indonesia berikutnya, mengembangkan dan mengoperasikan Proyek Emas Awak Mas dengan
                    model bisnis yang berkelanjutan untuk memberi manfaat kepada seluruh pemangku kepentingan.</p>
            </div>
            <div class="col-5">
                <h1>Misi</h1>
                <div class="under-line-VMN"></div>
                <p class="fw-medium">Membangun Proyek Awak Mas yang bertanggung jawab secara sosial dengan cara:</p>
                <ul>
                    <li>
                        <p>Menjamin keselamatan, kesehatan, dan pengembangan karyawan</p>
                    </li>
                    <li>
                        <p>Menjadi sadar lingkungan</p>
                    </li>
                    <li>
                        <p> Memelihara generasi berikutnya dengan memberdayakan karyawan dan masyarakat</p>
                    </li>
                    <li>
                        <p>Berkontribusi pada kemakmuran ekonomi yang lebih baik bagi Indonesia</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div class="nilai-nilai p-5" style="background-color: #755400">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="fw-bold">Nilai-nilai</h1>
                    <div class="under-line-VMN"></div>
                    <p class="fw-medium mt-5"> Masmindo berkomitmen untuk <span style="color: yellow">ACTIVE</span> dalam
                        visi & misinya menjadi produsen emas Indonesia berikutnya.
                        Nilai-nilai keberlanjutan kami adalah sebagai berikut:
                    </p>
                    <div class="row gap-5 justify-content-center">
                        <div class="col-1 align-content-center">
                            <img class="w-100"
                                src="{{ asset('svg/6ac71660-1650-4dce-93b8-879e29869732-removebg-preview.png') }}"
                                alt="">
                        </div>
                        <div class="col-1 align-content-center">
                            <img class="w-100 align-content-center"
                                src="{{ asset('svg/b25b2872-b48e-41f3-8c12-2fd4ba4b7ec4-removebg-preview.png') }}"
                                alt="">
                        </div>
                        <div class="col-1 align-content-center">
                            <img class=" w-100"
                                src="{{ asset('svg/386c8c65-c746-4816-9a8f-f8849c732eb6-removebg-preview.png') }}"
                                alt="">
                        </div>
                        <div class="col-1 align-content-center">
                            <img class="w-100"
                                src="{{ asset('svg/1585228a-48b1-4212-85ce-52ac171f8ca8-removebg-preview.png') }}"
                                alt="">
                        </div>
                        <div class="col-1 align-content-center">
                            <img class="w-100"
                                src="{{ asset('svg/2ed1f0ba-7c0f-4907-87c8-4e7c0e4038a1-removebg-preview.png') }}"
                                alt="">
                        </div>
                        <div class="col-1 align-content-center">
                            <img class="w-100"
                                src="{{ asset('svg/0c8d274e-33d4-496d-bfa4-c68f142a3530-removebg-preview.png') }}"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-5" style="color: yellow">
                <div class="col" style="text-align: center">
                    <h5>Ketangkasan</h5>
                    <p>Kami memiliki fleksibilitas untuk bekerja di lingkungan yang dinamis,
                        mudah beradaptasi dengan situasi apa pun, dan terbuka terhadap pendekatan-pendekatan baru.</p>
                </div>
                <div class="col">
                    <h5>Kepedulian</h5>
                    <p style="align-content: justify">Kami peduli pada orang lain, kami menciptakan tempat kerja yang aman
                        bagi karyawan, bertanggung jawab terhadap lingkungan, dan mendukung pemberdayaan masyarakat di
                        lokasi di mana kami beroperasi.</p>
                </div>
                <div class="col">
                    <h5>Kerjasama</h5>
                    <p style="align-content: justify">Kami tahu bahwa kami menjadi lebih kuat ketika berkolaborasi, kami
                        menghargai pandangan orang lain, kami berusaha mencapai potensi kami, dan merangkul persatuan dalam
                        keragaman.</p>
                </div>
                <div class="col">
                    <h5>Integritas</h5>
                    <p style="align-content: justify">Kami memiliki standar etika yang tinggi, menghormati komitmen yang
                        kami buat, dan menjalin hubungan yang saling menguntungkan.</p>
                </div>
                <div class="col">
                    <h5>Visioner</h5>
                    <p style="align-content: justify">Kami memiliki rencana ke depan, mengikuti tren dan teknologi saat ini,
                        dan memiliki gagasan mengenai masa depan kami.</p>
                </div>
                <div class="col">
                    <h5>Keunggulan</h5>
                    <p style="text-align: jus">Kami berusaha untuk unggul dengan berfokus pada tindakan, perbaikan
                        terus-menerus, dan selalu mengevaluasi cara kerja kami.</p>
                </div>
            </div>
        </div>
    </div>
    @include('footter')
@endsection
