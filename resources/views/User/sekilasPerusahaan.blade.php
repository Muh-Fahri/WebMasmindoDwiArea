@extends('layout')
@extends('navbar')
@section('konten')
    <section>
        <div data-aos="fade-right" class="bg-sekilas d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="fw-bold text-white">Praktik Penambangan Terbaik.</h1>
                        <p class="text-white text-visi fw-medium" style="max-width: 50%">Masmindo berkomitmen untuk beroperasi
                            dengan
                            menerapkan
                            kaidah-kaidah penambangan yang baik (good mining practices), termasuk melaksanakan tanggung
                            jawab
                            sosial dan lingkungan, serta memberikan manfaat sebesar-besarnya kepada para pemangku
                            kepentingan,
                            terutama masyarakat lingkar tambang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row p-5">
                <div class="col-lg-5">
                    <img data-aos="fade-up" data-aos-duration="3000" class="w-100 h-100" style="object-fit: cover"
                        src="{{ asset('web/cb39cb73-7f24-4419-800b-afcd1e5ccb9c.jpg') }}" alt="">
                </div>
                <div class="col">
                    <h4 class="text-tentang-masmindo">Tentang Masmindo</h4>
                    <div class="ud-tentang-masmindo"></div>
                    <br>
                    <p class="fw-medium text-secondary">PT Masmindo Dwi Area adalah perusahaan tambang emas nasional yang
                        sedang
                        mengembangkan Proyek Awak
                        Mas, sebuah proyek pertambangan emas berskala besar yang terletak di Kabupaten Luwu, Sulawesi
                        Selatan. Sebagai bagian dari grup usaha nasional, Masmindo berkomitmen untuk tidak hanya
                        menghadirkan hasil tambang yang bernilai tinggi, tetapi juga membawa perubahan positif yang
                        berkelanjutan bagi masyarakat dan lingkungan di sekitar wilayah operasional.</p>
                    <p class="fw-medium text-secondary">
                        Masmindo dibangun atas dasar semangat untuk menciptakan pertambangan yang tidak hanya efisien secara
                        teknis dan ekonomi, tetapi juga beretika dan berkelanjutan. Setiap langkah yang diambil perusahaan
                        dilandasi oleh filosofi kerja “ACTIVE”, yang menanamkan sikap proaktif, integritas, inovasi, serta
                        kepedulian terhadap nilai dan pemberdayaan. Filosofi ini menjadi dasar budaya kerja di Masmindo,
                        mendorong setiap individu dalam perusahaan untuk berkontribusi secara maksimal dengan tetap
                        menjunjung tinggi tanggung jawab sosial dan lingkungan.
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-visi-misi p-5">
            <div class="container">
                <div class="row ">
                    <div class="col-md-6 mb-3">
                        <div data-aos="fade-right" class="card h-100 d-flex flex-column" style="background-color: #D6D6D6">
                            <div class="row h-100">
                                <div class="col-1" style="background-color: #FFDF8F"></div>
                                <div class="col m-2">
                                    <h3 class="visi-text-hd fw-medium mt-5 mb-5">Visi</h3>
                                    <p class="fw-medium">
                                        Menjadi produsen emas Indonesia berikutnya, mengembangkan dan mengoperasikan Proyek
                                        Emas
                                        Awak Mas dengan model bisnis yang berkelanjutan untuk memberi manfaat kepada seluruh
                                        pemangku kepentingan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div data-aos="fade-left" class="card h-100 d-flex flex-column" style="background-color: #D6D6D6">
                            <div class="row h-100">
                                <div class="col-1" style="background-color: #FFDF8F"></div>
                                <div class="col m-2 d-flex flex-column">
                                    <h3 class="misi-text-hd fw-medium mt-5 mb-5">Misi</h3>
                                    <p class="fw-medium text-misi">
                                        Membangun Proyek Awak Mas yang bertanggung jawab secara sosial dengan cara:
                                    </p>
                                    <ul class="fw-medium text-misi">
                                        <li>
                                            <p>Menjamin keselamatan, kesehatan, dan pengembangan karyawan</p>
                                        </li>
                                        <li>
                                            <p>Menjadi sadar lingkungan</p>
                                        </li>
                                        <li>
                                            <p>Memelihara generasi berikutnya dengan memberdayakan karyawan dan masyarakat
                                            </p>
                                        </li>
                                        <li>
                                            <p>Berkontribusi pada kemakmuran ekonomi yang lebih baik bagi Indonesia</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: #F9F8F3">
        <div class="container-fuid p-2 justify-content-center">
            <div class="row justify-content-center">
                <div class="col-5 p-5">
                    <h3 class="fw-medium teks-masmindo-aksi">Masmindo dalam Aksi</h3>
                    <p class="fw-medium" style="color: #4D4D4D">Masmindo terus bergerak aktif dalam membangun Proyek
                        Emas
                        Awak Mas dengan
                        pendekatan yang bertanggung
                        jawab, berkelanjutan, dan inklusif. Setiap langkah kami mencerminkan komitmen untuk memberikan
                        dampak positif bagi masyarakat, lingkungan, dan masa depan industri pertambangan Indonesia.
                        Melalui
                        berbagai kegiatan di lapangan, Masmindo menunjukkan dedikasi terhadap keselamatan kerja,
                        pemberdayaan komunitas lokal, dan praktik pertambangan yang ramah lingkungan.</p>
                </div>
                <div class="col-3 p-5">
                    <img src="{{ asset('web/Activelogo.png') }}" alt=""
                        style="object-fit: cover;heigth:50vh;width:100%">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <div data-aos="flip-left" class="row justify-content-center">
                <div class="col-5 p-5">
                    <img class="h-100 w-100" src="{{ asset('web/ActiveLogo.png') }}" style="object-fit: cover"
                        alt="">
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: #F9F8F3 ">
        <div class="container">
            <div data-aos="fade-right" class="row p-5">
                <div class="col-2">
                    <img class="w-100 h-100" src="{{ asset('svg/agility.png') }}" alt="">
                </div>
                <div class="col-4">
                    <h3>Agility</h3>
                    <p class="fw-medium text-secondary">Kami memiliki fleksibilitas untuk bekerja di lingkungan yang
                        dinamis, mudah
                        beradaptasi dengan
                        situasi apa pun, dan terbuka terhadap pendekatan-pendekatan baru.</p>
                </div>
            </div>
            <div data-aos="fade-right" class="row p-5">
                <div class="col-2">
                    <img class="w-100 h-100" src="{{ asset('svg/caring.png') }}" alt="">
                </div>
                <div class="col-4">
                    <h3>Caring</h3>
                    <p class="fw-medium text-secondary">Kami peduli pada orang lain, kami menciptakan tempat kerja yang aman
                        bagi karyawan, bertanggung jawab terhadap lingkungan, dan mendukung pemberdayaan masyarakat di
                        lokasi di mana kami beroperasi.</p>
                </div>
            </div>
            <div data-aos="fade-left" class="row p-5 justify-content-end">
                <div class="col-4">
                    <h3>Teamwork</h3>
                    <p class="fw-medium text-secondary">Kami tahu bahwa kami menjadi lebih kuat ketika berkolaborasi, kami
                        menghargai pandangan orang lain, kami berusaha mencapai potensi kami, dan merangkul persatuan dalam
                        keragaman.</p>
                </div>
                <div class="col-2">
                    <img class="w-100 h-100" src="{{ asset('svg/teamwork.png') }}" alt="">
                </div>
            </div>
            <div data-aos="fade-left" class="row p-5 justify-content-end">
                <div class="col-4">
                    <h3>Integrity</h3>
                    <p class="fw-medium text-secondary">Kami memiliki standar etika yang tinggi, menghormati komitmen yang
                        kami buat, dan menjalin hubungan yang saling menguntungkan.</p>
                </div>
                <div class="col-2">
                    <img class="w-100 h-100" src="{{ asset('svg/integrity.png') }}" alt="">
                </div>
            </div>
            <div data-aos="fade-right" class="row p-5">
                <div class="col-2">
                    <img class="w-100 h-100" src="{{ asset('svg/visonary.png') }}" alt="">
                </div>
                <div class="col-4">
                    <h3>Visionary</h3>
                    <p class="fw-medium text-secondary">Kami memiliki rencana ke depan, mengikuti tren dan teknologi saat
                        ini, dan memiliki gagasan mengenai masa depan kami.</p>
                </div>
            </div>
            <div data-aos="fade-right" class="row p-5">
                <div class="col-2">
                    <img class="w-100 h-100" src="{{ asset('svg/excelent.png') }}" alt="">
                </div>
                <div class="col-4">
                    <h3>Excelent</h3>
                    <p class="fw-medium text-secondary">Kami berusaha untuk unggul dengan berfokus pada tindakan, perbaikan
                        terus-menerus, dan selalu mengevaluasi cara kerja kami.</p>
                </div>
            </div>
        </div>
    </section>


    @include('footter')
@endsection
