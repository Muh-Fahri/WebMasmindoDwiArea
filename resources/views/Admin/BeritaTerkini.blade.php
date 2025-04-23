@extends('layout')
@section('konten')
    @include('Admin.navSide')
    <div class="content-wrapper">
        <div class="container-fluid p-3 bg-white" style="max-height: 100vh; overflow-y: auto; overflow-x: hidden;">
            <section>
                <div class="container-fluid">
                    <div class="card bg-primary">
                        <h1 class="text-center p-2">Berita Terkini</h1>
                    </div>
                </div>
            </section>
            <section>
                <form action="" method="" class="mb-4">
                    <input type="text" name="query" class="form-control" placeholder="Cari berita..."
                        value="{{ request('query') }}">
                </form>
                <form action="{{ route('admin.createBeritaTerkini') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="mb-5">
                        <label for="" class="form-control">Judul Berita</label>
                        <input type="text" class="form-control" name="JudulBerita">
                    </div>
                    <div class="mb-5">
                        <label for="" class="form-control">Isi Berita</label>
                        <textarea name="IsiBerita" class="form-control" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="mb-5">
                        <label for="" class="form-control">Image Berita</label>
                        <input type="file" class="form-control" name="ImageBerita">
                    </div>
                    <button class="btn mb-5 btn-primary btn-sm">Submit</button>
                </form>
            </section>
            <section>
                <div class="row">
                    <div class="col">
                        <div class="card bg-secondary p-2">
                            <h3 class="m-0 p-0">Berita Terupload</h3>
                        </div>
                    </div>
                </div>
                @forelse ($berita as $no => $data)
                    <div class="card mb-3 position-relative">
                        <div class="row g-0">
                            <div class="col-auto">
                                <img class="img-fluid rounded-start"
                                    src="{{ asset('BeritaTerkini/' . $data->ImageBerita) }}" alt="Gambar Berita"
                                    style="max-height: 100px; object-fit: cover;">
                            </div>
                            <div class="col-7">
                                <div class="card-body p-3">
                                    <h5 class="card-title">{{ $data->JudulBerita }}</h5>
                                    <p class="card-subtitle text-muted mb-2" style="font-size: 0.85rem;">
                                        {{ $data->created_at->format('d M Y') }}
                                    </p>
                                    <p class="card-text text-truncate" style="max-height: 100px; overflow: hidden;">
                                        {{ $data->IsiBerita }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown position-absolute top-0 end-0 m-2">
                            <button class="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style="box-shadow: none;">
                                &#8942;
                            </button>
                            <ul class="dropdown-menu" style="z-index: 1050;">
                                <li>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                        data-bs-target="#editModalBeritaTerkini{{ $data->id }}">Edit</a>
                                </li>
                                <li>
                                    <form class="dropdown-item p-0 m-0"
                                        action="{{ route('admin.deleteBeritaTerkini', $data->id) }}" method="POST"
                                        onsubmit="return confirm('Yakin ingin menghapus berita ini?')">
                                        @method('DELETE')
                                        @csrf
                                        <button type="submit" class="dropdown-item text-danger border-0 w-100 text-start">
                                            Delete
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {{-- Modal Edit --}}
                    <div class="modal fade" id="editModalBeritaTerkini{{ $data->id }}" tabindex="-1"
                        aria-labelledby="editModalBeritaTerkiniLabel{{ $data->id }}" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editModalBeritaTerkiniLabel{{ $data->id }}">Edit Berita
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>

                                <form action="{{ route('admin.updateBeritaTerkini', $data->id) }}" method="POST"
                                    enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label class="form-label">Judul Berita</label>
                                            <input type="text" class="form-control" name="JudulBerita"
                                                value="{{ $data->JudulBerita }}">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Isi Berita</label>
                                            <textarea name="IsiBerita" class="form-control" rows="5">{{ $data->IsiBerita }}</textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Image Berita</label>
                                            <input type="file" class="form-control" name="ImageBerita">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Gambar Saat Ini:</label>
                                            <img class="img-fluid"
                                                src="{{ asset('BeritaTerkini/' . $data->ImageBerita) }}"
                                                alt="Gambar Saat Ini">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                @empty
                    @include('noData')
                @endforelse

            </section>

        </div>
    </div>
@endsection
