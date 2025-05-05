@extends('layout')
@section('konten')

@if(session('gagal'))

<div class="modal fade" id="gagalModal" tabindex="-1" aria-labelledby="gagalModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-danger" id="gagalModalLabel">Login Gagal <i class="bi bi-exclamation-triangle"></i></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="border: none">
                {{ session('gagal') }}
            </div>
            <div class="modal-footer d-none">
                <button type="button" style="width: 30%" class="btn btn-secondary rounded-5" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>
@endif
<section>
    <div class="bg-auth" style="background:linear-gradient(to right,#b481006b, #e8c56b4f),url({{ asset('img/cb39cb73-7f24-4419-800b-afcd1e5ccb9c.jpg') }});background-size:cover;height:100vh">
        <div class="container">
            <div class="row justify-content-center align-items-center" style="height: 100vh;">
                <div class="col-md-5 fade-in">
                    <div class="card shadow card-login p-5" style="background-color:rgba(255, 255, 255, 0.274)">
                        <div class="card-body rounded text-center">
                            <img src="{{ asset('logo/logo-mda-white.png') }}" style="width: 10rem" alt="">
                        </div>
                        <div class="row">
                            <form action="{{ route('login.submit') }}" method="POST">
                                @csrf
                                <label for="" class="text-white shadow-sm"><h5 class="fw-medium" style="color: #3b3b3b">EMAIL <i class="bi bi-envelope-fill"></i></h5></label>
                                <input type="email" name="email" placeholder="Masukkan email yang terdaftar" class="form-control border-0 rounded-4">
                                <label for="" class="mt-5 text-white"><h5 class="fw-medium" style="color: #3b3b3b">PASSWORD <i class="bi bi-pass-fill"></i></h5></label>
                                <input type="password" name="password" placeholder="Masukkan password anda" class="form-control border-0 rounded-4">
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-lg fw-medium mt-5 rounded-5" style="background-color: #e8c56b;width:50%">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
