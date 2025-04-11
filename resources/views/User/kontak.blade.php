@extends('layout')
@section('konten')
    @include('navbar')

    <div class="container p-5">
        <div class="row">
            <div class="col fade-in">
                <h1 style="color: #b6812c" class="fw-bold">Hubungi Kami</h1>
                <div class="card mt-5">
                    <div class="card-body p-0 d-flex">
                        <!-- Bagian Form -->
                        <div class="col-md-6 p-5">
                            <form action="{{ route('user.kirimPesan') }}" class="form" method="POST">
                                @csrf
                                <div class="mb-3">
                                    <label class="form-label">Nama</label>
                                    <input type="text" name="nama" class="form-control" required>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Telp</label>
                                        <input type="text" name="no_telp" class="form-control" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="email" class="form-control" required>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Subject</label>
                                    <input type="text" name="subject" class="form-control" required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Pesan</label>
                                    <textarea class="form-control" name="pesan" rows="4" required></textarea>
                                </div>

                                <button class="btn btn-secondary btn-sm mt-3">Submit Form</button>
                            </form>
                        </div>

                        <!-- Bagian Kanan (Informasi Kontak) -->
                        <div class="col-md-6 d-flex flex-column justify-content-between p-5 text-white"
                            style="background-color: #b6812c; height: 100%;">
                            <h4>Kontak Informasi</h4>
                            <p><strong>Jakarta Office</strong><br>
                                Graha Mitra, 10th Floor Unit 1002<br>
                                Jl. Gatot Subroto Kav. 21<br>
                                DKI Jakarta 12930, Indonesia</p>

                            <p><strong>Site Office</strong><br>
                                Desa Rante Balla<br>
                                Kec. Latimojong, Kabupaten Luwu<br>
                                Sulawesi Selatan, Indonesia</p>

                            <p><strong>Representative Office</strong><br>
                                Jl. Sawerigading, Balo-Balo<br>
                                Kec. Belopa, Kabupaten Luwu<br>
                                Sulawesi Selatan, Indonesia</p>

                            <p><i class="fas fa-phone"></i> (021) 2525255</p>

                            <div class="d-flex gap-3">
                                <a href="" class="text-white"><i class="fab fa-linkedin fa-2x"></i></a>
                                <a href="" class="text-white"><i class="fab fa-youtube fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
