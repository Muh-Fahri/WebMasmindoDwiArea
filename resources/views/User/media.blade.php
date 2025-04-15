@include('navbar')
@extends('layout')

@section('konten')
    <div class="modal fade" id="modalBerita" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg"> <!-- Tambahkan modal-lg untuk ukuran lebih besar -->
            <div class="modal-content text-center">
                <!-- Modal Header -->
                <div class="modal-header d-flex justify-content-center align-items-center w-100">
                    <h5 class="modal-title mx-auto" id="welcomeModalLabel">Informasi Penting</h5>
                    <!-- Gunakan mx-auto untuk memusatkan judul -->
                    <button type="button" class="close m-0 p-0" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body fw-medium py-4" style="color: #6E6E6E">
                    <p class="mb-0 text-center">Kami ingin mengajak Anda untuk tetap bijak dan kritis dalam menyaring
                        informasi. Jangan mudah terprovokasi oleh berita yang belum tentu benar. Apalagi jika sumbernya
                        tidak jelas dan cenderung memojokkan tanpa bukti.</p>

                    <p> "Dengarkan berita yang relevan, bukan sekadar sensasi. Lawan hoaks dengan fakta."</p>

                    <p>Carilah sumber terpercaya.
                        Verifikasi setiap informasi.
                        Jangan jadikan opini sebagai kebenaran mutlak.</p>

                    <p> Ingatlah, satu berita yang keliru bisa menimbulkan keraguan, kekhawatiran, bahkan konflik yang tidak
                        perlu. Maka dari itu, mari kita semua menjadi bagian dari perubahan — dengan menyebarkan kebenaran,
                        membangun kepercayaan, dan menjaga kedamaian informasi.
                    </p>
                    <p>Atas perhatian dan kedewasaan Anda sebagai pembaca, kami ucapkan terima kasih.
                        Selamat membaca dan tetap terhubung dengan informasi yang kredibel.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid m-0 p-0">
        <div class="row">
            <div class="col">
                @foreach ($populer as $pop)
                    <div class="bg-berita-utama d-flex align-items-center p-5"
                        style="background: linear-gradient(to right,#A99866,#a99866cb, rgba(0, 0, 0, 0.377),rgba(0, 0, 0, 0.315)),
                                url('{{ asset('berita/' . $pop->img_berita) }}');
                                background-size: cover; background-position: center; min-height: 60vh;">
                        <div class="row">
                            <div class="col-5">
                                <a href="{{ route('user.selengkapnya', $pop->id) }}">
                                    <p class="text-white fw-medium">{{ $pop->created_at->format('d M Y') }}</p>
                                    <h1 class="fw-bold text-white fade-in">
                                        {{ Str::limit($pop->judul_berita, 100, '...') }}</h5>
                                        <p class="text-white fw-medium">{{ Str::limit($pop->isi_berita, 700, '...') }}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                @endforeach
            </div>
        </div> <!-- Penutup row -->
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <div class="card" style="background-color: #755400">
                            <div class="card-body">
                                <h5 class="text-white text-center">Berita Lainnya</h5>
                            </div>
                        </div>
                    </div>
                </div>
                @foreach ($lainnya as $data)
                    <div class="card">
                        <div class="card-body p-2">
                            <div class="d-flex ">
                                <div class="me-2 d-flex align-items-center">
                                    <img class="img-fluid shadow-sm"
                                        style="max-width: 80px; height: 80px; object-fit: cover;"
                                        src="{{ asset('berita/' . $data->img_berita) }}" alt="">
                                </div>
                                <div>

                                    <h5 class="m-0 fs-5" style="color: #755400">{{ $data->judul_berita }}</h5>
                                    <p class="m-0 text-secondary" style="font-size: 10px">
                                        {{ $data->created_at->format('d M Y') }}</p>
                                    <p class="m-0">{{ Str::limit($data->isi_berita, 100, '...') }}</p>
                                    <a href="{{ route('user.selengkapnya', $data->id) }}">Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="bg-berita-utama" style="background-color: #F9F8F3">
            <div class="row p-5">
                <div class="col text-center">
                    <h4 class="fw-medium" style="color: #A99866">Berita Utama</h5>
                </div>
            </div>
            <div class="row">
                <div class="col position-relative">
                    <button style="background-color: #755400"
                        class="scroll-btn p-3 position-absolute top-50 start-0 translate-middle-y z-3 text-white border-0 rounded-circle"
                        onclick="scrollBerita('left')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div id="beritaScroll" class="d-flex flex-row overflow-auto px-2 pb-3 gap-3 scrolling-wrapper"
                        style="scroll-behavior: smooth;">
                        @foreach ($utama as $ut)
                            <div class="card flex-shrink-0 m-2 position-relative text-white"
                                style="width: 30%; height: 35vh; background: url('{{ asset('berita/' . $ut->img_berita) }}') no-repeat center center / cover;">

                                <div class="position-absolute bottom-0 start-0 end-0 p-3"
                                    style="background: #a9986698; height: 40%;">
                                    <h6 class="fw-bold mb-1">{{ $ut->judul_berita }}</h6>
                                    <p class="small mb-1">{{ $ut->created_at->format('d M Y') }}</p>
                                    <p class="small mb-1">{{ Str::limit($ut->isi_berita, 100, '...') }}</p>
                                    <a class="text-white fw-bold" href="{{ route('user.selengkapnya', $ut->id) }}">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <button style="background-color: #755400"
                        class="scroll-btn p-3 position-absolute top-50 end-0 translate-middle-y z-3 text-white border-0 rounded-circle"
                        onclick="scrollBerita('right')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    @include('footter')
@endsection
