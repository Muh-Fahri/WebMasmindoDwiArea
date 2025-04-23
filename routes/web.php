<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\createAdmin;
use App\Http\Controllers\deleteAdmin;
use App\Http\Controllers\updateAdmin;
use App\Http\Controllers\UserController;
use App\Http\Controllers\viewAdmin;
use Illuminate\Support\Facades\Route;

//Authenticated
Route::get('/login-admin-role123', [AuthController::class, 'login'])->name('login');
Route::post('/login-admin-role123/login-submit', [AuthController::class, 'submit'])->name('login.submit');

// User
Route::get('/', [UserController::class, 'home'])->name('user.home');
Route::get('/user/sekilas', [UserController::class, 'sekilas'])->name('user.sekilas');
Route::get('/user/visiMisiNilai', [UserController::class, 'visi'])->name('user.visiMisiNilai');
Route::get('/user/manajemen', [UserController::class, 'manajemen'])->name('user.manajemen');
Route::get('/user/kebijakanPerusahaan', [UserController::class, 'kebijakan'])->name('user.kebijakan');
Route::get('/user/lingkungan', [UserController::class, 'lingkungan'])->name('user.lingkungan');
Route::get('/user/sosial', [UserController::class, 'sosial'])->name('user.sosial');
Route::get('/user/portofolio', [UserController::class, 'portofolio'])->name('user.portofolio');
Route::get('/user/media', [UserController::class, 'media'])->name('user.media');
Route::get('/user/media/selengkapnya/{id}', [UserController::class, 'tampilSelengkapnya'])->name('user.selengkapnya');
Route::get('/user/kontak', [UserController::class, 'tampilKontak'])->name('user.kontak');
Route::post('/user/kontak/kirim', [UserController::class, 'kirimPesan'])->name('user.kirimPesan');

//admin
Route::middleware('admin')->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/admin/account', [AdminController::class, 'account'])->name('admin.account');
    Route::get('/admin/logout', [AuthController::class, 'logout'])->name('admin.logout');
    Route::get('/admin/home-page', [AdminController::class, 'portofolio'])->name('admin.portofolio');
    Route::post('/admin/submit-image', [AdminController::class, 'submitImage'])->name('admin.submitImage');
    Route::get('/admin/galeri', [AdminController::class, 'galeri'])->name('admin.galeri');
    Route::post('/admin/tambahGaleri', [AdminController::class, 'tambahGaleri'])->name('admin.tambahGaleri');
    Route::put('/admin/editGaleri/{id}', [AdminController::class, 'editGaleri'])->name('admin.editGaleri');
    Route::delete('/admin/hapusGaleri/{id}', [AdminController::class, 'hapusGaleri'])->name('admin.hapusGaleri');
    Route::get('/admin/video', [AdminController::class, 'video'])->name('admin.video');
    Route::post('/admin/video/tambahVideo', [AdminController::class, 'tambahVideo'])->name('admin.tambahVideo');
    Route::delete('/admin/video/deleteVideo/{id}', [AdminController::class, 'hapusVideo'])->name('admin.hapusVideo');
    Route::get('/admin/media', [AdminController::class, 'media'])->name('admin.media');
    Route::post('/admin/tambahBerita', [AdminController::class, 'tambahBerita'])->name('admin.tambahBerita');
    Route::post('/admin/editBeritaLainnya/{id}', [AdminController::class, 'editBeritaLainnya'])->name('admin.editBeritaLainnya');
    Route::delete('/admin/hapusBeritaLainnya/{id}', [AdminController::class, 'hapusBeritaLainnya'])->name('admin.hapusBeritaLainnya');
    Route::put('/admin/editBeritaTerpopuler/{id}', [AdminController::class, 'editBeritaTerpopuler'])->name('admin.editBeritapopuler');
    Route::delete('/admin/deleteBeritaUtama/{id}', [AdminController::class, 'hapusBeritaUtama'])->name('admin.hapusBeritaUtama');
    Route::put('admin/editBeritaUtama/{id}', [AdminController::class, 'editBeritaUtama'])->name('admin.editBeritaUtama');
    Route::delete('admin/deleteBeritaPopuler/{id}', [AdminController::class, 'deleteBeritaPopuler'])->name('admin.deleteBeritaPopuler');
    Route::get('admin/program', [AdminController::class, 'tampilProgram'])->name('admin.program');
    Route::post('admin/tambahProgram', [AdminController::class, 'tambahProgram'])->name('admin.tambahProgram');
    Route::put('admin/editProgram/{id}', [AdminController::class, 'editProgram'])->name('admin.editProgram');
    Route::delete('admin/deleteProgram/{id}', [AdminController::class, 'deleteprogram'])->name('admin.deleteProgram');
    Route::get('admin/bacaSelengkapnya/{id}', [AdminController::class, 'tampilSelengkapnya'])->name('admin.bacaSelengkapnya');
    Route::get('admin/kontak', [AdminController::class, 'tampilPesan'])->name('admin.kontak');
    Route::get('admin/kontak/lihatPesan/{id}', [AdminController::class, 'lihatPesan'])->name('admin.lihatPesan');
    Route::delete('admin/kontak/hapusPesan/{id}', [AdminController::class, 'hapusPesan'])->name('admin.hapusPesan');
    Route::get('/admin/safety', [AdminController::class, 'tampil_safety'])->name('admin.safety');
    Route::post('/admin/safety', [AdminController::class, 'addSafety'])->name('admin.safetyAdd');


    // route baru
    Route::get('/Admin/BisnisKami', [viewAdmin::class, 'tampilBisnis'])->name('admin.bisnis');
    Route::post('/Admin/BisnisKami', [createAdmin::class, 'buatPostingan'])->name('admin.postBisnis');
    Route::put('/Admin/BisnisKami/{id}', [updateAdmin::class, 'updateBisnis'])->name('admin.updateBisnis');
    Route::delete('/Admin/BisnisKami/hapusBisnis/{id}', [deleteAdmin::class, 'deleteBisnis'])->name('admin.deleteBisnis');

    Route::get('/Admin/BeritaTerkini', [viewAdmin::class, 'viewBeritaTerkini'])->name('admin.viewBeritaTerkini');
    Route::post('/Admin/BeritaTerkini', [createAdmin::class, 'createBeritaTerkini'])->name('admin.createBeritaTerkini');
    Route::put('/Admin/BeritaTerkini/{id}', [updateAdmin::class, 'updateBeritaTerkini'])->name('admin.updateBeritaTerkini');
    Route::delete('/Admin/BeritaTerkini/HapusBerita/{id}', [deleteAdmin::class, 'deleteBeritaTerkini'])->name('admin.deleteBeritaTerkini');

    Route::get('/Admin/Esg/Lingkungan', [viewAdmin::class, 'viewLingkungan'])->name('admin.viewLingkungan');
    Route::post('/Admin/Esg/Lingkungan', [createAdmin::class, 'createLingkungan'])->name('admin.createLingkungan');







    // Route::get('/Admin/BisnisKami',[])

    Route::get('/admin/jumlah-pesan', function () {
        $jumlah = \App\Models\Pesan::where('status_baca', false)->count();
        return response()->json(['jumlah' => $jumlah]);
    });
    Route::get('/admin/pesan/realtime', [AdminController::class, 'getPesanRealtime'])->name('admin.pesan.realtime');
    Route::get('/safety/jam-terbaru', [AdminController::class, 'getTotalJam'])->name('safety.jamTerbaru');
});
