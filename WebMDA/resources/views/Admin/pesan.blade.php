@extends('layout')
@section('konten')
    @include('Admin.navSide')
    <div class="content-wrapper">
        <div class="container-fluid p-3 bg-white overflow-auto" style="max-height: 100vh;">
            @foreach ($pesan as $data)
                <a class="fade-in text-decoration-none text-dark" href="{{ route('admin.lihatPesan', $data->id) }}">
                    <div class="row p-3">
                        <div class="col-auto">
                            <img class="rounded-circle" style="width:5rem" src="{{ asset('img-pesan/user (1).png') }}"
                                alt="">
                        </div>
                        <div class="col">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <p class="text-info" style="font-size: 15px">{{ $data->created_at->diffForHumans() }}
                                    </p>
                                    <p class="fw-medium text-secondary">{{ $data->subject }}</p>
                                    <p class="mb-0">{{ Str::limit($data->pesan, 180, '...') }}</p>
                                    {{-- Dropdown tiga titik --}}
                                    <div class="dropdown position-absolute top-0 end-0 mt-2 me-2">
                                        <button class="btn btn-sm btn-light" type="button"
                                            id="dropdownMenu{{ $data->id }}" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu{{ $data->id }}">
                                            <li>
                                                <form action="{{ route('admin.hapusPesan', $data->id) }}" method="POST"
                                                    onsubmit="return confirm('Yakin ingin menghapus pesan ini?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button class="dropdown-item text-danger" type="submit">Hapus</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <br>
            @endforeach
        </div>
    </div>
@endsection
