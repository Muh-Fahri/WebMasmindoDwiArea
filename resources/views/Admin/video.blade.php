@extends('layout')
@include('Admin.navSide')
@section('konten')
<div class="content-wrapper">
    <div class="container-fluid fade-in overflow-auto" style="max-height: 100vh;">
        {{-- Modal Tambah --}}
        @if (session('videoAdd'))
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-success" id="videoModalLabel">
                                Menambahkan Video <i class="bi bi-emoji-smile-fill"></i>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <p class="fw-bold text-success">{{ session('videoAdd') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <audio id="successSound">
                <source src="{{ asset('audio/ping-82822.mp3') }}" type="audio/mp3">
            </audio>
        @endif

        {{-- Modal Hapus --}}
        @if (session('videoTerhapus'))
            <div class="modal fade" id="videoTerhapusModal" tabindex="-1" aria-labelledby="videoTerhapusModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-success" id="videoTerhapusModalLabel">
                                Terhapus <i class="bi bi-emoji-smile-fill"></i>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <p class="fw-bold text-danger">{{ session('videoTerhapus') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <audio id="successSound">
                <source src="{{ asset('audio/ping-82822.mp3') }}" type="audio/mp3">
            </audio>
        @endif

        {{-- Form Tambah --}}
        <div class="row">
            <div class="col p-5">
                <h1 class="fw-bold">Video</h1>
                <form action="{{ route('admin.tambahVideo') }}" method="post">
                    @csrf
                    <label for="image_galeri">Tambahkan Link Video</label>
                    <input type="text" name="link_video" placeholder="Masukkan Link Video" class="form-control">
                    <button class="mt-3 btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

        {{-- Tabel Video --}}
        <div class="row p-5">
            <div class="col">
                <table class="table">
                    <thead class="table-dark text-center">
                        <tr>
                            <th>No</th>
                            <th>Video</th>
                            <th>Dibuat pada</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        @foreach ($video as $no => $data)
                            <tr>
                                <td>{{ $no + 1 }}</td>
                                <td>
                                    <iframe class="shadow" style="width: 300px; height:170px"
                                        src="{{ $data->link_video }}" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe>
                                </td>
                                <td>{{ $data->created_at ? $data->created_at->format('d M Y') : 'Tanggal tidak tersedia' }}</td>
                                <td>
                                    <form action="{{ route('admin.hapusVideo', $data->id) }}" method="POST" onsubmit="return confirm('Yakin ingin menghapus?')">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn-sm btn-danger">Hapus <i
                                            class="bi bi-trash-fill"></i></button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
