@extends('layout')
@section('konten')
    @include('Admin.navSide')

    <div class="content-wrapper">
        <main>
            <section>
                <div class="container-fluid p-3 bg-white" style="max-height: 100vh; overflow-y: auto; overflow-x: hidden;">
                    <div class="container-fluid p-3">
                        <div class="row">
                            <div class="col">
                                <div class="card bg-primary p-3">
                                    <h3 class="text-white">ESG Lingkungan</h3>
                                </div>
                            </div>
                        </div>
                        <section>
                            <div class="row">
                                <div class="col">
                                    <form action="{{ route('admin.createLingkungan') }}" method="POST"
                                        enctype="multipart/form-data">
                                        @csrf
                                        <div class="mb-2">
                                            <label for="" class="form-control">Deskripsi</label>
                                            <textarea name="deskripsi" id="" class="form-control" cols="30" rows="10" required></textarea>
                                        </div>
                                        <div class="mb-2">
                                            <label for="" class="form-control">Banner Atas</label>
                                            <input type="file" name="bannerAtas" class="form-control" required>
                                        </div>
                                        <div class="mb-2">
                                            <label for="" class="form-control">Image Kegiatan</label>
                                            <input type="file" name="ImageLingkungan" class="form-control" required>
                                        </div>
                                        <div class="mb-2">
                                            <label for="" class="form-control">Banner Bawah</label>
                                            <input type="file" name="bannerBawah" class="form-control" required>
                                        </div>
                                        <button class="btn btn-sm btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div class="container-fluid pt-5">
                                <div class="row">
                                    <div class="col">
                                        <div class="card bg-secondary p-3">
                                            <h3 class="text-white">Konten</h1>
                                        </div>
                                    </div>
                                </div>
                                @forelse ($lingkungan as $data)
                                    <div class="row">
                                        <div class="col">
                                            <div class="card p-3">
                                                <h3>Deskripsi</h3>
                                                <textarea name="" id="" cols="30" rows="10" class="form-control bg-white" readonly>{{ $data->deskripsi }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="card p-3">
                                                <h3>Banner Atas</h3>
                                                <img style="max-height: 600px;object-fit:cover" class="w-100"
                                                    src="{{ asset('ESG/' . $data->bannerAtas) }}" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pt-5">
                                        <div class="col">
                                            <div class="card p-3">
                                                <h3>Banner Bawah</h3>
                                                <img style="max-height: 600px;object-fit:cover" class="w-100"
                                                    src="{{ asset('ESG/' . $data->bannerBawah) }}" alt="">
                                            </div>
                                        </div>
                                    </div>
                                @empty
                                    @include('noData')
                                @endforelse
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    </div>
@endsection
