@extends('layout')
@section('konten')
    @include('Admin.navSide')
    <div class="content-wrapper">
        <div class="container-fluid p-3 bg-white" style="max-height: 100vh; overflow-y: auto; overflow-x: hidden;">
            <div class="row">
                <div class="col">
                    <h1 class="m-5">Admin Account</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card p-5">
                        <div class="row">
                            <div class="col-auto">
                                <img style="width: 10rem;filter:drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.329))"
                                    class="rounded-circle"
                                    src="{{ asset('img/depositphotos_144724361-stock-illustration-builder-construction-avatar-icon.jpg') }}"
                                    alt="">
                            </div>
                            <div class="col-auto">
                                <p>Username : {{ Auth::user()->name }}</p>
                                <p>Email : {{ Auth::user()->email }}</p>
                                <a href="{{ route('admin.logout') }}" class="btn btn-danger">Logout <i
                                        class="bi bi-box-arrow-right bg-transparent"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
