@include('navbar')
@include('bg-halaman')
@extends('layout')
@section('konten')
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h1 style="color: #e8c56b">Lingkungan</h1>
                <div class="under-lines-masmindo"></div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 style="color: #e8c56b">Kebijakan Lingkungan</h5>
                <p style="text-align: justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat mollitia
                    laudantium quia aliquid
                    recusandae nesciunt enim dolor, dolorum quos dolorem hic voluptate pariatur labore? Illum voluptates
                    error consequatur dolor dolores eius, voluptate cupiditate maiores doloribus reprehenderit harum ad, ut,
                    quasi autem eveniet porro recusandae facere aliquam? Ipsa necessitatibus vel maxime quos odit ad
                    repudiandae aliquam impedit eos sed corporis omnis, provident maiores ipsum. Praesentium repudiandae,
                    laboriosam, a cum nostrum dolor sed earum atque fugit repellendus at similique accusantium modi itaque
                    ex quidem officiis reprehenderit. Placeat eligendi odit maiores earum illum odio, tempora asperiores
                    quia. Veritatis aliquid recusandae fugiat illo consequatur.</p>
            </div>
        </div>
        <div class="row mb-5 ">
            <div class="col d-flex justify-content-center">
                <div id="carouselExampleIndicator" class="carousel carousel-fade" style="width:60%;"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators" style="">
                        <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner  overflow-hidden" style="height: 40vh;">
                        <div class="carousel-item active">
                            <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                style="background: linear-gradient(to top, #b6812c,#f8f8f800), url({{ asset('web/36e9e0fc-ebeb-4b24-ab40-52c094e49995.jpg') }});
                                width:100%; height:40vh; background-size:cover; background-position:center;">

                                <div class="tulisan-carousel p-4">
                                    <h5 class="text-white">Tree Planting</h5>
                                    <p class="mt-3 text-white">Perusahaan terus melakukan program penanaman kembali di
                                        bidang pertanian untuk menggantikan tanaman yang terganggu selama kegiatan di
                                        lokasi, serta membangun sistem pembuangan limbah berbahaya.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                style="background: linear-gradient(to top, #b6812c,#f8f8f800), url({{ asset('web/8b6e7bcd-8f8b-4714-8653-d7a7d7a1a6cd.jpg') }});
                                width:100%; height:40vh; background-size:cover; background-position:center;">

                                <div class="tulisan-carousel p-4">
                                    <h5 class="text-white">Planting Mangrove</h5>
                                    <p class="mt-3 text-white">Perusahaan terus melakukan program penanaman kembali di
                                        bidang pertanian untuk menggantikan tanaman yang terganggu selama kegiatan di
                                        lokasi, serta membangun sistem pembuangan limbah berbahaya.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                style="background: linear-gradient(to top, #b6812c,#f8f8f800), url({{ asset('web/a29d224a-7bd2-465f-889e-25d00e55b066.jpg') }});
                                width:100%; height:40vh; background-size:cover; background-position:center;">

                                <div class="tulisan-carousel p-4">
                                    <h5 class="text-white">Water Monitoring</h5>
                                    <p class="mt-3 text-white">Perusahaan terus melakukan program penanaman kembali di
                                        bidang pertanian untuk menggantikan tanaman yang terganggu selama kegiatan di
                                        lokasi, serta membangun sistem pembuangan limbah berbahaya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('footter')
@endsection
