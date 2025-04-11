@extends('layout')
@include('Admin.navSide')
@section('konten')
    <div class="content-wrapper">
        <div class="container-fluid overflow-auto" style="max-height: 100vh; p-5">
            <div class="row">
                <div class="col">
                    <div class="card fade-in mt-2 bg-primary">
                        <div class="card-body p-4">
                            <h1 class="text-white">Media</h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form Tambah Berita -->
            <div class="row">
                <div class="col">
                    <div class="card fade-in">
                        <div class="card-body">
                            <form action="{{ route('admin.tambahBerita') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <label for="">Image Berita</label>
                                <input type="file" name="img_berita" class="form-control">
                                <label for="">Judul Berita</label>
                                <input type="text" name="judul_berita" class="form-control">
                                <label for="">Isi Berita</label>
                                {{-- <input type="text" name="isi_berita" class="form-control"> --}}
                                <textarea name="isi_berita" id="" cols="30" rows="10" class="form-control"></textarea>
                                <label for="">Category</label>
                                <select name="category_berita" class="form-control">
                                    <option value="" {{ old('category_berita') == '' ? 'selected' : '' }}>Lainnya
                                    </option>
                                    <option value="utama" {{ old('category_berita') == 'utama' ? 'selected' : '' }}>Utama
                                    </option>
                                    <option value="populer" {{ old('category_berita') == 'populer' ? 'selected' : '' }}>
                                        Populer</option>
                                </select>
                                <button class="btn btn-sm btn-secondary mt-2">Tambahkan Berita</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Berita Utama -->
            <div class="row">
                <div class="col">
                    <div class="card fade-in p-4 bg-primary">
                        <h5 class="text-white">Berita Utama</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    @foreach ($utama as $ut)
                        <div class="card fade-in p-5">
                            <div class="card-body">
                                <div class="row p-2">
                                    <div class="col d-flex justify-content-end">
                                        <div class="dropdown">
                                            <button class="btn btn-sm btn-light" type="button"
                                                id="dropdownMenuButton{{ $ut->id }}" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton{{ $ut->id }}">
                                                <li>
                                                    <a class="dropdown-item" data-bs-toggle="modal"
                                                        data-bs-target="#editModalUtama{{ $ut->id }}">
                                                        Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <form action="{{ route('admin.hapusBeritaUtama', $ut->id) }}"
                                                        method="POST"
                                                        onsubmit="return confirm('Yakin ingin menghapus berita ini?')">
                                                        @csrf
                                                        @method('delete')
                                                        <button type="submit"
                                                            class="dropdown-item text-danger">Hapus</button>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="card fade-in" style="width:15rem;">
                                            <div class="card-body">
                                                <img class="w-100" style="object-fit:cover; height:20vh"
                                                    src="{{ asset('berita/' . $ut->img_berita) }}" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h1 class="mt-3">{{ $ut->judul_berita }}</h1>
                                        <p>{{ Str::limit($ut->isi_berita, 500, '...') }}</p>
                                        <a href="{{ route('admin.bacaSelengkapnya', $ut->id) }}"
                                            class="text-secondary">Baca Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{-- modal berita utama --}}
                        <div class="modal fade" id="editModalUtama{{ $ut->id }}" tabindex="-1"
                            aria-labelledby="editModalLabel{{ $ut->id }}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-tittle" id="editModalLabel{{ $ut->id }}">Edit Berita Utama
                                        </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="{{ route('admin.editBeritaUtama', $ut->id) }}" method="POST"
                                            enctype="multipart/form-data">
                                            @csrf
                                            @method('PUT')
                                            <p>Judul Berita</p>
                                            <input type="text" value="{{ $ut->judul_berita }}" name="judul_berita"
                                                class="form-control">
                                            <p>Isi Berita</p>
                                            <textarea name="isi_berita" class="form-control" name="isi_berita" id="" cols="50" rows="10">{{ $ut->isi_berita }}</textarea>
                                            <p class="mt-2">Img Berita</p>
                                            <input type="file" name="img_berita" class="form-control">
                                            <p class="mt-2">Category</p>
                                            <select name="category_berita" class="form-control">
                                                <option value=""
                                                    {{ old('category_berita') == '' ? 'selected' : '' }}>Lainnya</option>
                                                <option value="utama"
                                                    {{ old('category_berita') == 'utama' ? 'selected' : '' }}>Utama
                                                </option>
                                                <option value="populer"
                                                    {{ old('category_berita') == 'populer' ? 'selected' : '' }}>Populer
                                                </option>
                                            </select>
                                            <button type="submit" class="btn mt-2 btn-sm btn-secondary">Edit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Berita Populer -->
            <div class="row">
                <div class="col">
                    <div class="card fade-in p-4 bg-primary">
                        <h5 class="text-white">Berita Terpopuler</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card fade-in">
                        <div class="card-body">
                            <h5 class="text-info">Informasi <i class="bi bi-info-circle"></i></h5>
                            <p>Input Berita Terpopuler Maksimal Hanya Satu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    @foreach ($populer as $pop)
                        <div class="card fade-in p-5">
                            <div class="row mt-2">
                                <div class="col d-flex justify-content-end">
                                    <div class="dropdown p-5">
                                        <button class="btn btn-sm btn-light" type="button"
                                            id="dropdownMenuPopuler{{ $pop->id }}" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu"
                                            aria-labelledby="dropdownMenuPopuler{{ $pop->id }}">
                                            <li>
                                                <button class="dropdown-item" data-bs-toggle="modal"
                                                    data-bs-target="#editPopulerModal{{ $pop->id }}">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <form action="{{ route('admin.deleteBeritaPopuler', $pop->id) }}"
                                                    method="POST"
                                                    onsubmit="return confirm('Yakin ingin menghapus berita ini?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit"
                                                        class="dropdown-item text-danger">Delete</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <img style="width:100%;object-fit:cover;height:50vh"
                                src="{{ asset('berita/' . $pop->img_berita) }}" alt="">
                            <h1 class="mt-3">{{ $pop->judul_berita }}</h1>
                            <p>{{ Str::limit($pop->isi_berita, 200, '...') }}</p>
                            <a href="{{ route('admin.bacaSelengkapnya', $pop->id) }} " class="text-secondary">Baca
                                Selengkapya</a>
                            {{-- Modal edit berita populer --}}
                            <div class="modal fade" id="editPopulerModal{{ $pop->id }}" tabindex="-1"
                                data-bs-backdrop="false" aria-labelledby="editModalLabel{{ $pop->id }}"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="editModalLabel{{ $pop->id }}">Edit Berita
                                                Populer</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="{{ route('admin.editBeritapopuler', $pop->id) }}"
                                                method="POST" enctype="multipart/form-data">
                                                @method('PUT')
                                                @csrf
                                                <label>Judul Berita</label>
                                                <input type="text" class="form-control" name="judul_berita"
                                                    value="{{ $pop->judul_berita }}">

                                                <label>Isi Berita</label>
                                                <textarea class="form-control" name="isi_berita" rows="3">{{ $pop->isi_berita }}</textarea>

                                                <label>Kategori Berita</label>
                                                <select name="category_berita" class="form-control">
                                                    <option value=""
                                                        {{ is_null($pop->category_berita) ? 'selected' : '' }}>Lainnya
                                                    </option>
                                                    <option value="populer"
                                                        {{ $pop->category_berita == 'populer' ? 'selected' : '' }}>Populer
                                                    </option>
                                                    <option value="utama"
                                                        {{ $pop->category_berita == 'utama' ? 'selected' : '' }}>Utama
                                                    </option>
                                                </select>

                                                <label>Gambar Berita</label>
                                                <input type="file" class="form-control" name="img_berita">

                                                <button type="submit" class="btn btn-success mt-3">Simpan
                                                    Perubahan</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Berita Tanpa Kategori -->
            <div class="row">
                <div class="col">
                    <div class="card fade-in p-4 bg-primary">
                        <h5 class="text-white">Berita Lainnya</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    @foreach ($lainnya as $data)
                        <div class="card fade-in">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="w-100" style="height: 25vh; object-fit: cover;"
                                            src="{{ asset('berita/' . $data->img_berita) }}" alt="Gambar Berita">
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col d-flex justify-content-end">
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-light mt-2" type="button"
                                                        id="dropdownMenuLainnya{{ $data->id }}"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu"
                                                        aria-labelledby="dropdownMenuLainnya{{ $data->id }}">
                                                        <li>
                                                            <button class="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#editModal{{ $data->id }}">
                                                                Edit
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <form
                                                                action="{{ route('admin.hapusBeritaLainnya', $data->id) }}"
                                                                method="POST"
                                                                onsubmit="return confirm('Yakin ingin menghapus berita ini?')">
                                                                @csrf
                                                                @method('DELETE')
                                                                <button type="submit"
                                                                    class="dropdown-item text-danger">Delete</button>
                                                            </form>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="text-primary">{{ $data->judul_berita }}</h5>
                                        <p>{{ Str::limit($data->isi_berita, 200, '...') }}</p>
                                        <a href="{{ route('admin.bacaSelengkapnya', $data->id) }}"
                                            class="text-secondary">Baca Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal Edit -->
                        <div class="modal fade" id="editModal{{ $data->id }}" tabindex="-1"
                            aria-labelledby="editModalLabel{{ $data->id }}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="editModalLabel{{ $data->id }}">Edit Berita</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="{{ route('admin.editBeritaLainnya', $data->id) }}" method="POST"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <label>Judul Berita</label>
                                            <input type="text" class="form-control" name="judul_berita"
                                                value="{{ $data->judul_berita }}">

                                            <label>Isi Berita</label>
                                            <textarea class="form-control" name="isi_berita" rows="3">{{ $data->isi_berita }}</textarea>

                                            <label>Kategori Berita</label>
                                            <select name="category_berita" class="form-control">
                                                <option value=""
                                                    {{ is_null($data->category_berita) ? 'selected' : '' }}>Lainnya
                                                </option>
                                                <option value="populer"
                                                    {{ $data->category_berita == 'populer' ? 'selected' : '' }}>Populer
                                                </option>
                                                <option value="utama"
                                                    {{ $data->category_berita == 'utama' ? 'selected' : '' }}>Utama
                                                </option>
                                            </select>

                                            <label>Gambar Berita</label>
                                            <input type="file" class="form-control" name="img_berita">

                                            <button type="submit" class="btn btn-success mt-3">Simpan Perubahan</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Akhir Modal -->
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
