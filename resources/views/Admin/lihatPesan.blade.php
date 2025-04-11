@extends('layout')
@section('konten')
    @include('Admin.navSide')
    <div class="content-wrapper">
        <div class="container-fluid p-3 bg-white" style="max-height: 100vh; overflow-y: auto; overflow-x: hidden;">
            <div class="row pt-5 pb-5">
                <div class="col">
                    <article>
                        <h3 class="text-secondary">Pesan Masuk <i class="bi bi-envelope-fill"></i></h3>
                    </article>
                </div>
            </div>
            <div class="row">
                <div class="col-auto d-flex align-items-center">
                    <figure class="m-0">
                        <img class="rounded-circle" style="width: 3rem" src="{{ asset('img-pesan/user (1).png') }}"
                            alt="">
                    </figure>
                </div>
                <div class="col d-flex align-items-center">
                    <p class="text-secondary fw-bold mb-0">Pengirim : <span
                            class="fw-normal text-black">{{ $pesan->nama }}</span>
                    </p>
                </div>
            </div>
            <div class="row p-5">
                <div class="col">
                    <article>
                        <p class="fw-bold text-secondary">Subject : <span
                                class="fw-normal text-dark">{{ $pesan->subject }}</span></p>
                        <p class="fw-bold text-secondary">No Telp : <span
                                class="fw-normal text-dark">{{ $pesan->no_telp }}</span></p>
                        <p class="fw-bold text-secondary">Email : <span
                                class="fw-normal text-dark">{{ $pesan->email }}</span></p>
                    </article>
                </div>
            </div>
            <div class="row p-5">
                <div class="col">
                    <article>
                        <div class="row">
                            <div class="col">
                                <textarea name="" class="form-control bg-white" id="" cols="30" rows="10"
                                    style="text-align: justify; word-break: break-word;height:100vh" readonly>{{ $pesan->pesan }}</textarea>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
@endsection
