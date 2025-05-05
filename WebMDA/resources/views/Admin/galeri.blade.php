@extends('layout')
@section('konten')
    @include('Admin.navSide')
    <div class="content-wrapper">
        <div class="container-fluid fade-in overflow-auto" style="max-height: 100vh;">
            <div class="container-fluid">
                @if (session('terhapus'))
                    <div class="modal fade" id="hapusModal" tabindex="-1" aria-labelledby="hapusModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-danger" id="hapusModalLabel">
                                        Berhasil Dihapus <i class="bi bi-emoji-smile-fill"></i>
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <p class="fw-bold text-danger">
                                        {{ session('terhapus') }} <i class="bi bi-trash-fill"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @if (session('success'))
                    <div class="modal fade" id="welcomeModal-Succes-galeri" tabindex="-1"
                        aria-labelledby="welcomeModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-success" id="welcomeModalLabel">Success <i
                                            class="bi bi-emoji-smile-fill"></i></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <p class="fw-bold text-success">
                                        {{ session('success') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <audio id="successSound">
                        <source src="{{ asset('audio/ping-82822.mp3') }}" type="audio/mp3">
                    </audio>
                @endif
                <div class="row p-5">
                    <div class="col">
                        <div class="card bg-primary">
                            <div class="card-body">
                                <h1 class="fw-bold text-white">Galeri</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col p-5">
                        <form action="{{ route('admin.tambahGaleri') }}" enctype="multipart/form-data" method="POST">
                            @csrf
                            <label for="image_galeri">Image</label>
                            <input type="file" name="image_galeri" class="form-control">
                            <label for="nama_kegiatan" class="mt-4">Judul Kegiatan</label>
                            <input type="text" name="nama_kegiatan" placeholder="Judul Kegiatan" class="form-control">
                            <label for="deskrip_kegiatan" class="mt-4">Deskripsi Kegiatan</label>
                            <input type="text" name="deskrip_kegiatan" placeholder="Masukkan deskripsi kegiatan"
                                class="form-control">
                            <button class="mt-3 btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <table class="table">
                            <thead class="table-dark">
                                <tr>
                                    <th>No</th>
                                    <th>Judul Kegiatan</th>
                                    <th>Deskripsi Kegiatan</th>
                                    <th>Image</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($galeri as $no => $data)
                                    <tr>
                                        <td>{{ $no + 1 }}</td>
                                        <td>{{ $data->nama_kegiatan }}</td>
                                        <td>{{ $data->deskrip_kegiatan }}</td>
                                        <td><img style="width: 10rem" src="{{ asset('img/' . $data->image_galeri) }}"
                                                alt=""></td>
                                        <td>
                                            <div class="row">
                                                <div class="col d-flex" style="gap: 5px">
                                                    <a href="#" class="btn mb-3 btn-sm btn-secondary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editModal{{ $data->id }}">Edit <i
                                                            class="bi bi-pencil-square"></i></a>
                                                    <form action="{{ route('admin.hapusGaleri', $data->id) }}"
                                                        method="POST" onsubmit="return confirm('Yakin ingin menghapus?');">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-danger">Hapus <i
                                                                class="bi bi-trash-fill"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- Modal Edit -->
                                    <div class="modal fade" id="editModal{{ $data->id }}" tabindex="-1"
                                        aria-labelledby="editModalLabel{{ $data->id }}" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="editModalLabel{{ $data->id }}">Edit
                                                        Kegiatan</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <form action="{{ route('admin.editGaleri', $data->id) }}"
                                                        method="POST" enctype="multipart/form-data">
                                                        @csrf
                                                        @method('PUT')

                                                        <div class="mb-3">
                                                            <label for="nama_kegiatan" class="form-label">Nama
                                                                Kegiatan</label>
                                                            <input type="text" name="nama_kegiatan"
                                                                class="form-control" value="{{ $data->nama_kegiatan }}"
                                                                required>
                                                        </div>

                                                        <div class="mb-3">
                                                            <label for="deskrip_kegiatan" class="form-label">Deskripsi
                                                                Kegiatan</label>
                                                            <textarea name="deskrip_kegiatan" class="form-control" required>{{ $data->deskrip_kegiatan }}</textarea>
                                                        </div>

                                                        <div class="mb-3">
                                                            <label for="image_galeri" class="form-label">Gambar
                                                                Galeri</label>
                                                            <input type="file" name="image_galeri"
                                                                class="form-control">
                                                            <img src="{{ asset('img/' . $data->image_galeri) }}"
                                                                alt="Gambar Galeri"
                                                                style="max-width: 150px; margin-top: 10px;">
                                                        </div>

                                                        <button type="submit" class="btn btn-primary">Simpan
                                                            Perubahan</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Akhir Modal Edit -->
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
