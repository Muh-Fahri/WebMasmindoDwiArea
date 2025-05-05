@extends('layout')
@section('konten')
    @include('Admin.navSide')


    <div class="content-wrapper">
        <div class="container-fluid p-3 bg-white" style="max-height: 100vh; overflow-y: auto; overflow-x: hidden;">
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <form action="{{ route('admin.postBisnis') }}" method="Post">
                                @csrf
                                <label for="">Deskripsi Bisnis</label>
                                <textarea name="deskripsi" id="" cols="30" class="form-control" rows="10"></textarea><br>
                                <label for="">Video Youtube</label>
                                <input type="text" name="linkVideo" id="" class="form-control">
                                <button class="btn btn-sm mt-5 btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <div class="card bg-secondary p-3">
                                <h3 class="text-white">Konten</h3>
                            </div>
                        </div>
                    </div>
                    @forelse ($bisnis as $no => $data)
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Deskripsi</th>
                                    <th>Link Video</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ $no + 1 }}</td>
                                    <td>{{ $data->deskripsi }}</td>
                                    <td><iframe width="300" height="200" src="{{ $data->linkVideo }}"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></td>
                                    <td>
                                        <div class="row">
                                            <div class="col d-flex gap-2">
                                                <a data-bs-toggle="modal"
                                                    data-bs-target="#editModalBisnis{{ $data->id }}"
                                                    class="btn btn-sm btn-warning">Edit</a>
                                                <form action="{{ route('admin.deleteBisnis', $data->id) }}" method="POST">
                                                    @csrf
                                                    @method('Delete')
                                                    <button class="btn btn-sm btn-danger">Delete</button>
                                                </form>
                                            </div>
                                        </div>
                                    </td>
                                    <div class="modal fade" id="editModalBisnis{{ $data->id }}" tabindex="-1"
                                        aria-labelledby="editModalBisnisLabel{{ $data->id }}" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="editModalBisnisLabel{{ $data->id }}">
                                                        Edit
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>

                                                <form action="{{ route('admin.updateBisnis', $data->id) }}" method="POST">
                                                    @csrf
                                                    @method('PUT')

                                                    <div class="modal-body">
                                                        <label for="deskripsi{{ $data->id }}">Deskripsi Bisnis</label>
                                                        <textarea name="deskripsi" id="deskripsi{{ $data->id }}" class="form-control" rows="5">{{ $data->deskripsi }}</textarea><br>

                                                        <label for="linkVideo{{ $data->id }}">Video YouTube</label>
                                                        <input type="text" name="linkVideo"
                                                            id="linkVideo{{ $data->id }}" class="form-control"
                                                            value="{{ $data->linkVideo }}">
                                                    </div>

                                                    <div class="modal-footer">
                                                        <button type="submit" class="btn btn-primary">Simpan
                                                            Perubahan</button>
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Tutup</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    @empty
                        @include('noData')
                    @endforelse
                </div>
            </section>
        </div>
    </div>
@endsection
