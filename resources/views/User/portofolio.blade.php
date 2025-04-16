@extends('layout')
@section('konten')
    @include('navbar')
    <section>
        <div class="container-fluid m-0 p-0">
            <div class="bg-portofolio d-flex flex-column justify-content-between" style="min-height: 100vh">
                <!-- Bagian Tengah (Judul & Deskripsi) -->
                <div data-aos="zoom-out" class="container my-auto">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-10 col-12">
                            <p class="text-white fw-medium fs-6">PORTOFOLIO KAMI</p>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h1 class="text-white fw-bold display-4 display-md-2">
                                        AWAK MAS <span style="color: #A99866">GOLD</span> PROJECT
                                    </h1>
                                </div>
                            </div>
                            <p class="text-white mt-3 text-uppercase fs-6 fs-md-5 px-2">
                                Terletak di pegunungan Latimojong, Sulawesi Selatan, proyek ini
                                merupakan salah satu proyek strategis nasional yang menggabungkan potensi sumber daya alam
                                dengan komitmen terhadap keberlanjutan dan pemberdayaan masyarakat lokal.
                            </p>
                            <a href="#project" class="btn btn-lg fw-bold nav-btn rounded-0 mt-3">
                                VIEW MORE <i class="fa-solid fa-angles-down fa-beat"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="project">
        <div class="container p-5">
            <div class="row">
                <aside class="col-7 m-0 p-0">
                    <img class="w-75 h-100" src="{{ asset('template/pexels-bence-szemerey-337043-6804255.jpg') }}"
                        alt="">
                    <p class="text-secondary small pt-2">Awak Mas Project</p>
                </aside>
                <div class="col m-0 p-0">
                    <p style="color: #A99866">Project</p>
                    <h1 data-aos="zoom-in-down" style="color: #A99866" class="fw-bold">AWAK MAS GOLD PROJECT</h1>
                    <p data-aos="zoom-in-right" class="pt-5 fw-medium" style="color: #6E6E6E">Lorem ipsum dolor sit amet,
                        consectetur adipiscing
                        elit. Sed
                        leo dui,
                        scelerisque quis massa ac,
                        faucibus pellentesque ex. Duis a eleifend sem. Donec bibendum sit amet sem sed tempor. Nullam
                        vehicula malesuada elit, vitae eleifend sapien efficitur et. Quisque finibus pellentesque urna, eget
                        sodales ligula varius vitae. Vestibulum viverra tellus quis metus porttitor consectetur. Donec
                        vehicula libero id lectus tempus pharetra. Phasellus viverra augue ut massa varius viverra.
                        Suspendisse </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col p-0">
                    <p data-aos="zoom-in-right" class="fw-medium" style="color: #6E6E6E;text-align:justify">Lorem ipsum
                        dolor sit amet consectetur
                        adipisicing elit.
                        Veniam ab omnis
                        facilis neque, beatae nihil
                        voluptatem nemo ratione porro aliquid odio magni, voluptate minima dicta modi accusamus sapiente
                        reiciendis numquam corrupti explicabo voluptas fuga harum voluptatibus? Nesciunt ea quae laudantium
                        quo, iusto aperiam maiores consequatur neque non eos modi impedit aliquam praesentium veritatis nam
                        ab amet qui! Repudiandae labore ex exercitationem deserunt corrupti aspernatur minus nam! Reiciendis
                        beatae nihil laudantium quidem nobis excepturi harum quibusdam sit in impedit officia molestias
                        sequi rerum quisquam itaque earum, repellat id dolorum reprehenderit, quam nam vitae? Sapiente rem
                        praesentium veritatis quae vel, libero repellendus. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Velit maxime vero est deserunt eligendi. Sunt commodi praesentium enim ipsum
                        pariatur molestiae, dolor aliquam aliquid animi aperiam deserunt illum incidunt necessitatibus
                        officia veritatis sint perspiciatis labore odio amet, consequatur repudiandae quibusdam laudantium.
                        Nobis amet dignissimos accusamus autem? Excepturi labore sequi ad et autem adipisci pariatur
                        laudantium recusandae, facere tempora repudiandae minima numquam qui similique aspernatur possimus
                        molestias, perspiciatis, beatae distinctio hic. Quae consequatur unde natus maxime numquam rem eius
                        iste omnis a alias ea eos quia, error rerum autem accusantium illum accusamus, tenetur architecto.
                        Sit minus ratione, laudantium dolore dolor facilis!</p>
                </div>
            </div>
        </div>
    </section>
@endsection
