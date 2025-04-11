@extends('layout')
@include('navbar')
@section('konten')
<div class="container mt-5">
    <div class="dewan-komisaris">
       <div class="container">
        <h2 style="color: #e8c56b" class="fw-bold">Dewan Komisaris</h2>
        <div class="under-line-dewanKomisaris"></div>
        <div class="row">
            <div class="col">
                <div class="image-container mt-5 shadow-lg">
                    <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                <div class="overlay-img"></div>
                <div class="hover-text">
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="image-container mt-5 shadow-lg">
                    <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                <div class="overlay-img"></div>
                <div class="hover-text">
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="image-container mt-5 shadow-lg">
                    <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                <div class="overlay-img"></div>
                <div class="hover-text">
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="image-container mt-5 shadow-lg">
                    <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                <div class="overlay-img"></div>
                <div class="hover-text">
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    <div class="dewan-direksi mt-5 mb-5">
        <div class="container">
            <h2 class="fw-bold" style="color: #e8c56b">Dewan Direksi</h2>
            <div class="under-line-dewanKomisaris"></div>
            <div class="row">
                <div class="col">
                    <div class="image-container mt-5 shadow-lg">
                        <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                    <div class="overlay-img"></div>
                    <div class="hover-text">
                        <h5>Lorem ipsum</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="image-container mt-5 shadow-lg">
                        <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                    <div class="overlay-img"></div>
                    <div class="hover-text">
                        <h5>Lorem ipsum</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="image-container mt-5 shadow-lg">
                        <img style="width: 25rem" src="{{ asset('img/pexels-simon-robben-55958-614810.png') }}" alt="">
                    <div class="overlay-img"></div>
                    <div class="hover-text">
                        <h5>Lorem ipsum</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('footter')
@endsection

