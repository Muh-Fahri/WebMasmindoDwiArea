@extends('layout')
@include('Admin.navSide')
@section('konten')
    @if (session('editProgram'))
        <!-- Modal Success Edit -->
        <div class="modal fade" id="modalEditSuccess" tabindex="-1" aria-labelledby="modalEditSuccessLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border-success">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="modalEditSuccessLabel">Berhasil!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ session('editProgram') }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    @endif
    @if (session('delete'))
        <div class="modal fade" id="modalDelete" tabindex="-1" aria-labelledby="modalDelete" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Delete</h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-success" data-bs-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <div class="content-wrapper">
        <div class="container-fluid fade-in overflow-auto" style="max-height: 100vh;">
            <div class="container-fluid">
                <div class="row p-5">
                    <div class="col">
                        <div class="card bg-primary">
                            <div class="card-body">
                                <h1>Program</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col p-5">
                        <div class="card">
                            <div class="card-body p-5">
                                <form action="{{ route('admin.tambahProgram') }}" method="post"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <label for="">Nama Kegiatan</label>
                                    <input type="text" name="judul_program" class="form-control">
                                    <label for="">Isi Kegiatan</label>
                                    <textarea name="isi_program" class="form-control" id="" cols="30" rows="10"></textarea>
                                    <label for="">Foto Kegiatan</label>
                                    <input type="file" name="img_program" class="form-control" class="form-control">
                                    <label for="">Kategori</label>
                                    <select name="kategory_kegiatan" id="" class="form-control">
                                        <option value="programPengembanganMasyarakat">program Pengembangan Masyarakata
                                        </option>
                                        <option value="programKesehatan">Program Kesehatan</option>
                                        <option value="programInfrastruktur">program Infrastruktur</option>
                                        <option value="programPendidikan">Program Pendidikan</option>
                                    </select>
                                    <button class="btn btn-sm btn-secondary mt-5">Tambahkan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table">
                            <thead class="table-dark">
                                <tr>
                                    <th>No</th>
                                    <th>Nama Kegiatan</th>
                                    <th>Deskripsi kegiatan</th>
                                    <th>Kategori</th>
                                    <th>Img</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tambah as $no => $add)
                                    <tr>
                                        <td>{{ $no + 1 }}</td>
                                        <td>{{ $add->judul_program }}</td>
                                        <td>{{ $add->isi_program }}</td>
                                        <td>
                                            <span
                                                class="badge
                                            @if ($add->kategory_kegiatan == 'lingkungan') bg-success
                                            @elseif($add->kategory_kegiatan == 'programKesehatan') bg-primary
                                            @elseif($add->kategory_kegiatan == 'infrastruktur') bg-warning text-dark
                                            @else bg-secondary @endif">
                                                {{ ucfirst($add->kategory_kegiatan) }}
                                            </span>
                                        </td>
                                        <td><img style="width:7rem" src="{{ asset('program/' . $add->img_program) }}"
                                                alt=""></td>
                                        <td>
                                            <div class="row">
                                                <div class="col d-flex gap-2">
                                                    <button class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#editProgramModal{{ $add->id }}">Edit</button>
                                                    </button>
                                                    <form action="{{ route('admin.deleteProgram', $add->id) }}"
                                                        method="POST">
                                                        @csrf
                                                        @method('Delete')
                                                        <button class="btn btn-sm btn-danger">Delete <i
                                                                class="bi bi-trash-fill"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Modal Edit -->
                                    {{-- perbaiki modal --}}
                                    <div class="modal fade" id="editProgramModal{{ $add->id }}" tabindex="-1"
                                        aria-labelledby="editProgramModalLabel{{ $add->id }}" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <form action="{{ route('admin.editProgram', $add->id) }}" method="POST"
                                                    enctype="multipart/form-data">
                                                    @csrf
                                                    @method('PUT')
                                                    <div class="modal-header bg-primary text-white">
                                                        <h5 class="modal-title"
                                                            id="editProgramModalLabel{{ $add->id }}">Edit Program</h5>
                                                        <button type="button" class="btn-close text-white"
                                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label>Nama Kegiatan</label>
                                                        <input type="text" name="judul_program" class="form-control"
                                                            value="{{ $add->judul_program }}" required>

                                                        <label class="mt-3">Isi Kegiatan</label>
                                                        <textarea name="isi_program" class="form-control" rows="5">{{ $add->isi_program }}</textarea>

                                                        <label class="mt-3">Foto Kegiatan (Biarkan kosong jika tidak
                                                            diubah)</label>
                                                        <input type="file" name="img_program" class="form-control">

                                                        <label class="mt-3">Kategori</label>
                                                        <select name="kategory_kegiatan" class="form-control">
                                                            <option value="programPengembanganMasyarakat"
                                                                {{ $add->kategory_kegiatan == 'programPengembanganMasyarakat' ? 'selected' : '' }}>
                                                                Program Pengembangan Masyarakat</option>
                                                            <option value="programKesehatan"
                                                                {{ $add->kategory_kegiatan == 'programKesehatan' ? 'selected' : '' }}>
                                                                Program Kesehatan</option>
                                                            <option value="programInfrastruktur"
                                                                {{ $add->kategory_kegiatan == 'programInfrastruktur' ? 'selected' : '' }}>
                                                                Program Infrastruktur</option>
                                                            <option value="programPendidikan"
                                                                {{ $add->kategory_kegiatan == 'programPendidikan' ? 'selected' : '' }}>
                                                                Program Pendidikan</option>
                                                        </select>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="submit" class="btn btn-success">Simpan
                                                            Perubahan</button>
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Batal</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
