@include('navbar')
@include('bg-halaman')
@extends('layout')
@section('konten')
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1 class="fw-bold" style="color: #e8c56b">Sosial</h1>
                <div class="under-line-sosial"></div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 style="color: #e8c56b">Program Pengembangan Masyarakat</h5>
                <p style="text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae unde
                    reprehenderit sit necessitatibus ab possimus praesentium voluptatum, blanditiis eum, vitae rerum eaque
                    quaerat iusto enim officiis adipisci labore. Consequuntur magnam aspernatur excepturi maxime voluptate
                    quibusdam quis voluptas, quisquam illum velit, beatae corrupti fugit! Quo assumenda ad magnam eos itaque
                    quidem aliquam ducimus esse vitae, quod nostrum sequi temporibus fugiat rerum ut. Obcaecati eligendi
                    sapiente, tenetur iusto velit voluptates ea dolorem voluptate enim, accusamus inventore tempora dicta.
                    Iusto debitis maiores, aut molestias suscipit in, molestiae quo repellendus vel quod asperiores tempora
                    ea, optio minus est voluptas ad ipsa cupiditate veritatis.</p>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div id="carouselExampleIndicator" class="carousel carousel-fade" style="width:60%;"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators" style="">
                        @foreach ($pengembangan as $no => $peng)
                            <button type="button" data-bs-target="#carouselExampleIndicator"
                                data-bs-slide-to="{{ $no }}" class="{{ $no === 0 ? 'active' : '' }}"
                                aria-current="true" aria-label="{{ $no + 1 }}"></button>
                        @endforeach
                    </div>
                    <div class="carousel-inner  overflow-hidden" style="height: 40vh;">
                        @foreach ($pengembangan as $no => $peng)
                            <div class="carousel-item {{ $no == 0 ? 'active' : '' }}">
                                <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                    style="background: linear-gradient(to top, #b6812c,#f8f8f800), url('{{ asset('program/' . rawurlencode($peng->img_program)) }}');width:100%;height:40vh;background-size:cover;background-position:center">

                                    <div class="tulisan-carousel p-4">
                                        <h5 class="text-white text-center">{{ $peng->judul_program }}</h5>
                                        <p class="mt-3 text-white">{{ $peng->isi_program }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 style="color: #e8c56b">Program Pendidikan</h5>
                <p style="text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae unde
                    reprehenderit sit necessitatibus ab possimus praesentium voluptatum, blanditiis eum, vitae rerum eaque
                    quaerat iusto enim officiis adipisci labore. Consequuntur magnam aspernatur excepturi maxime voluptate
                    quibusdam quis voluptas, quisquam illum velit, beatae corrupti fugit! Quo assumenda ad magnam eos itaque
                    quidem aliquam ducimus esse vitae, quod nostrum sequi temporibus fugiat rerum ut. Obcaecati eligendi
                    sapiente, tenetur iusto velit voluptates ea dolorem voluptate enim, accusamus inventore tempora dicta.
                    Iusto debitis maiores, aut molestias suscipit in, molestiae quo repellendus vel quod asperiores tempora
                    ea, optio minus est voluptas ad ipsa cupiditate veritatis.</p>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div id="carouselExampleIndicator-programPendidikan" class="carousel carousel-fade" style="width:60%;"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators" style="">
                        @foreach ($pendidikan as $no => $didik)
                            <button type="button" data-bs-target="#carouselExampleIndicator-programPendidikan"
                                data-bs-slide-to="{{ $no }}" class="{{ $no === 0 ? 'active' : '' }}"
                                aria-current="true" aria-label="{{ $no + 1 }}"></button>
                        @endforeach
                    </div>
                    <div class="carousel-inner  overflow-hidden" style="height: 40vh;">
                        @foreach ($pendidikan as $no => $didik)
                            <div class="carousel-item {{ $no == 0 ? 'active' : '' }}">
                                <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                    style="background: linear-gradient(to top, #b6812c,#f8f8f800), url({{ asset('program/' . $didik->img_program) }});
                                width:100%; height:40vh; background-size:cover; background-position:center;">

                                    <div class="tulisan-carousel p-4">
                                        <h5 class="text-white text-center">{{ $didik->judul_program }}</h5>
                                        <p class="mt-3 text-white">{{ $didik->isi_program }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 style="color: #e8c56b">Program Kesehatan</h5>
                <p style="text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae unde
                    reprehenderit sit necessitatibus ab possimus praesentium voluptatum, blanditiis eum, vitae rerum eaque
                    quaerat iusto enim officiis adipisci labore. Consequuntur magnam aspernatur excepturi maxime voluptate
                    quibusdam quis voluptas, quisquam illum velit, beatae corrupti fugit! Quo assumenda ad magnam eos itaque
                    quidem aliquam ducimus esse vitae, quod nostrum sequi temporibus fugiat rerum ut. Obcaecati eligendi
                    sapiente, tenetur iusto velit voluptates ea dolorem voluptate enim, accusamus inventore tempora dicta.
                    Iusto debitis maiores, aut molestias suscipit in, molestiae quo repellendus vel quod asperiores tempora
                    ea, optio minus est voluptas ad ipsa cupiditate veritatis.</p>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div id="carouselExampleIndicator-programKesehatan" class="carousel carousel-fade" style="width:60%;"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators" style="">
                        @foreach ($programKesehatan as $no => $pk)
                            <button type="button" data-bs-target="#carouselExampleIndicator-programKesehatan"
                                data-bs-slide-to="{{ $no }}" class="{{ $no === 0 ? 'active' : '' }}"
                                aria-current="true" aria-label="{{ $no + 1 }}"></button>
                        @endforeach

                    </div>
                    <div class="carousel-inner  overflow-hidden" style="height: 40vh;">
                        @foreach ($programKesehatan as $no => $pk)
                            <div class="carousel-item {{ $no == 0 ? 'active' : '' }}">
                                <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                    style="background: linear-gradient(to top, #b6812c,#f8f8f800), url({{ asset('program/' . $pk->img_program) }});
                                width:100%; height:40vh; background-size:cover; background-position:center;">

                                    <div class="tulisan-carousel p-4">
                                        <h5 class="text-white text-center">{{ $pk->judul_program }}</h5>
                                        <p class="mt-3 text-white">{{ $pk->isi_program }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 style="color: #e8c56b">Program infrastruktur</h5>
                <p style="text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae unde
                    reprehenderit sit necessitatibus ab possimus praesentium voluptatum, blanditiis eum, vitae rerum eaque
                    quaerat iusto enim officiis adipisci labore. Consequuntur magnam aspernatur excepturi maxime voluptate
                    quibusdam quis voluptas, quisquam illum velit, beatae corrupti fugit! Quo assumenda ad magnam eos itaque
                    quidem aliquam ducimus esse vitae, quod nostrum sequi temporibus fugiat rerum ut. Obcaecati eligendi
                    sapiente, tenetur iusto velit voluptates ea dolorem voluptate enim, accusamus inventore tempora dicta.
                    Iusto debitis maiores, aut molestias suscipit in, molestiae quo repellendus vel quod asperiores tempora
                    ea, optio minus est voluptas ad ipsa cupiditate veritatis.</p>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div id="carouselExampleIndicator-programInfrastruktur" class="carousel carousel-fade" style="width:60%;"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators" style="">
                        @foreach ($infrastruktur as $no => $infra)
                            <button type="button" data-bs-target="#carouselExampleIndicator-programInfrastruktur"
                                data-bs-slide-to="{{ $no }}" class="{{ $no === 0 ? 'active' : '' }}"
                                aria-current="true" aria-label="{{ $no + 1 }}"></button>
                        @endforeach
                    </div>
                    <div class="carousel-inner  overflow-hidden" style="height: 40vh;">
                        @foreach ($infrastruktur as $no => $infra)
                            <div class="carousel-item {{ $no === 0 ? 'active' : '' }}">
                                <div class="bg-carousel-lingkungan d-flex flex-column justify-content-end"
                                    style="background: linear-gradient(to top, #b6812c,#f8f8f800), url({{ asset('program/' . $infra->img_program) }});
                                width:100%; height:40vh; background-size:cover; background-position:center;">

                                    <div class="tulisan-carousel p-4">
                                        <h5 class="text-white text-center">{{ $infra->judul_program }}</h5>
                                        <p class="mt-3 text-white">{{ $infra->isi_program }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 style="color: #e8c56b">Program pemberdayaan</h5>
                <p style="text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae unde
                    reprehenderit sit necessitatibus ab possimus praesentium voluptatum, blanditiis eum, vitae rerum eaque
                    quaerat iusto enim officiis adipisci labore. Consequuntur magnam aspernatur excepturi maxime voluptate
                    quibusdam quis voluptas, quisquam illum velit, beatae corrupti fugit! Quo assumenda ad magnam eos itaque
                    quidem aliquam ducimus esse vitae, quod nostrum sequi temporibus fugiat rerum ut. Obcaecati eligendi
                    sapiente, tenetur iusto velit voluptates ea dolorem voluptate enim, accusamus inventore tempora dicta.
                    Iusto debitis maiores, aut molestias suscipit in, molestiae quo repellendus vel quod asperiores tempora
                    ea, optio minus est voluptas ad ipsa cupiditate veritatis.</p>
            </div>
        </div>
    </div>
    @include('footter')
@endsection
