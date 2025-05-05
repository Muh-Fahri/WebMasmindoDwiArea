@extends('layout')
@section('konten')
    @include('Admin.navSide')
    <div class="content-wrapper">
        <div class="container-fluid bg-white fade-in overflow-auto" style="max-height: 100vh">
            <div class="container mt-4">
                <h2 class="mb-4 fw-bold">Jam Kerja Tanpa Kecelakaan</h2>

                @if ($safety)
                    <div class="alert alert-success">
                        <strong>{{ number_format($totalJam) }} jam</strong> kerja tanpa kecelakaan sejak
                        <strong>{{ \Carbon\Carbon::parse($safety->tanggal_mulai)->format('d M Y') }}</strong>
                    </div>
                @endif

                <form action="{{ route('admin.safetyAdd') }}" method="POST">
                    @csrf
                    <div class="mb-3">
                        <label>Jumlah Pekerja</label>
                        <input type="number" name="jumlah_pekerja" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label>Jam Kerja per Hari</label>
                        <input type="number" name="jam_per_hari" class="form-control" value="8" required>
                    </div>
                    <div class="mb-3">
                        <label>Tanggal Mulai Tanpa Kecelakaan</label>
                        <input type="date" name="tanggal_mulai" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label>Total Kecelakaan</label>
                        <input type="number" name="total_kecelakaan" class="form-control">
                    </div>
                    <button class="btn btn-primary">Simpan</button>
                </form>
            </div>
        </div>
    </div>
@endsection
