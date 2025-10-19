<?php

use App\Http\Controllers\Admin\createAdmin;
use App\Http\Controllers\Admin\deleteAdmin;
use App\Http\Controllers\Admin\readAdmin;
use App\Http\Controllers\Admin\updateAdmin;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\readUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login-admin-123', [AuthController::class, 'login'])->middleware(['throttle:3,1']);


// user
Route::get('/user/bisnis', [readUser::class, 'readBisnis']);
Route::get('/user/berita', [readUser::class, 'readBerita']);
Route::get('/user/esg/lingkungan/deskripLingkungan', [readUser::class, 'readLingkunganDeskrip']);
Route::get('/user/esg/lingkungan/imgLingkungan', [readUser::class, 'readImgLing']);
Route::get('/user/esg/sosial/infrastruktur', [readUser::class, 'readSosialInfra']);
Route::get('/user/esg/sosial/pengembanganMasyarakat', [readUser::class, 'readPengembanganMasyarakat']);
Route::get('/user/esg/sosial/pendidikan', [readUser::class, 'readSosialPendidikan']);
Route::get('/user/esg/sosial/kesehatan', [readUser::class, 'readSosialKesehatan']);
Route::get('/user/esg/sosial/pemberdayaan', [readUser::class, 'readSosialPemberdayaan']);
Route::get('/user/berita/selengkapnya/{uuid}', [readUser::class, 'beritaSelengkapnya']);
Route::get('/user/berita/instagram', [readUser::class, 'readInstagram']);
Route::get('/user/berita/youtube', [readUser::class, 'readYoutube']);
Route::get('lihat_user', [AuthController::class, 'readLogin']);
Route::get('/user/esg/laporan', [readUser::class, 'readLaporan']);
Route::get('/user/esg/pdf/download/{stored_name}', [readUser::class, 'downloadPdf']);
Route::get('/admin/berita/search_berita', [readAdmin::class, 'readSearchBerita']);
Route::get('/user/dokumentasi', [readUser::class, 'readDokumentasi']);
Route::get('/user/maps', [readUser::class, 'readMaps']);
Route::get('/user/carousel', [readUser::class, 'readCarousel']);
Route::get('/user/karir', [readUser::class, 'readKarir']);
Route::get('/user/magang', [readUser::class, 'readMagang']);
Route::get('/user/karir/selengkapnya/{uuid}', [readUser::class, 'readKarirSelengkapnya']);
Route::post('/user/kontakUser', [readUser::class, 'kirimKontak']);

Route::get('/user/tata-kelola/kode-etik', [readUser::class, 'readKodeEtik']);
Route::get('/user/tata-kelola/kebijakan-pelapor', [readUser::class, 'readKebijakanPelapor']);
Route::get('/user/tata-kelola/kebijakan-keberagaman', [readUser::class, 'readKebijakanKeberagaman']);
Route::get('/user/tata-kelola/anti-suap', readUser::class, 'readAntiSuap');



Route::post('/admin/weather', [createAdmin::class, 'createWeather']);


Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    // bisnis
    Route::post('/admin/bisnis', [createAdmin::class, 'createBisnis']);
    Route::get('/admin/bisnis', [readAdmin::class, 'readBisnis']);
    Route::post('/admin/bisnis/{uuid}', [updateAdmin::class, 'updateBisnis']);
    Route::delete('/admin/bisnis/{uuid}', [deleteAdmin::class, 'deleteBisnis']);

    // berita
    Route::post('/admin/berita', [createAdmin::class, 'createBerita']);
    Route::get('/admin/berita/{uuid}', [readAdmin::class, 'readBerita']);
    Route::get('/admin/berita', [readAdmin::class, 'readAllBerita']);
    Route::post('/admin/berita/{uuid}', [updateAdmin::class, 'editBerita']);
    Route::delete('/admin/berita/{uuid}', [deleteAdmin::class, 'deleteBerita']);


    // lingkungan img
    Route::post('/admin/esg/lingkungan/imgLingkungan', [createAdmin::class, 'createImgLing']);
    Route::get('/admin/esg/lingkungan/imgLingkungan', [readAdmin::class, 'readImgLing']);
    Route::post('/admin/esg/lingkungan/imgLingkungan/{uuid}', [updateAdmin::class, 'updateImgLing']);
    Route::delete('/admin/esg/lingkungan/imgLingkungan/{uuid}', [deleteAdmin::class, 'deleteImgLing']);

    // deskripsi lingkungan
    Route::post('/admin/esg/lingkungan/deskripLingkungan', [createAdmin::class, 'createDesLing']);
    Route::get('/admin/esg/lingkungan/deskripLingkungan/{uuid}', [readAdmin::class, 'readDesLingById']);
    Route::get('/admin/esg/lingkungan/deskripLingkungan', [readAdmin::class, 'readDesLing']);
    Route::put('/admin/esg/lingkungan/deskripLingkungan/{uuid}', [updateAdmin::class, 'updateDesLing']);
    Route::delete('/admin/esg/lingkungan/deskripLingkungan/{uuid}', [deleteAdmin::class, 'deleteDesling']);

    // sosial
    Route::post('/admin/esg/sosial', [createAdmin::class, 'createSosial']);
    Route::get('/admin/esg/sosial/{uuid}', [readAdmin::class, 'readSosialById']);
    Route::get('/admin/esg/sosial', [readAdmin::class, 'readSosial']);
    Route::post('/admin/esg/sosial/{uuid}', [updateAdmin::class, 'updateSosial']);
    Route::delete('/admin/esg/sosial/{uuid}', [deleteAdmin::class, 'deleteSosial']);

    // instagram
    Route::post('/admin/instagram', [createAdmin::class, 'createinstagram']);
    Route::get('/admin/instagram', [readAdmin::class, 'readInstagram']);
    Route::get('/admin/instagram/{uuid}', [readAdmin::class, 'readInstagramById']);
    Route::post('/admin/instagram/{uuid}', [updateAdmin::class, 'updateInstagram']);
    Route::delete('/admin/instagram/delete/{uuid}', [deleteAdmin::class, 'deleteInstagram']);

    // pdf
    Route::post("/admin/pdf", [createAdmin::class, 'createPdf']);
    Route::get('/admin/pdf', [readAdmin::class, 'readPdf']);
    Route::get('/admin/pdf/download_pdf/{stored_name}', [readAdmin::class, 'downloadPdf']);
    Route::delete('/admin/pdf/delete/{uuid}', [deleteAdmin::class, 'deletePdf']);

    // Auth
    Route::post('/admin/logout', [AuthController::class, 'logout']);

    // Dashboard
    Route::get('/admin/dashboard', [readAdmin::class, 'dashboardAdmin']);

    //Dokumentasi
    Route::post('/admin/dokumentasi', [createAdmin::class, 'createDokumentasi']);
    Route::get('/admin/dokumentasi', [readAdmin::class, 'readDokumentasi']);
    Route::post('/admin/dokumentasi/{uuid}', [updateAdmin::class, 'updateDokumentasi']);
    Route::delete('/admin/dokumentasi/delete/{uuid}', [deleteAdmin::class, 'deleteDokumentasi']);

    // youtube
    Route::post('/admin/youtube', [createAdmin::class, 'createYoutube']);
    Route::get('/admin/youtube', [readAdmin::class, 'readYoutube']);
    Route::post('/admin/youtube/{uuid}', [updateAdmin::class, 'updateYoutube']);
    Route::delete('/admin/youtube/delete/{uuid}', [deleteAdmin::class, 'deleteYoutube']);

    //alamat
    Route::post('/admin/maps', [createAdmin::class, 'createMaps']);
    Route::get('/admin/maps', [readAdmin::class, 'readMaps']);
    Route::post('/admin/maps/{uuid}', [updateAdmin::class, 'updateMaps']);
    Route::delete('/admin/maps/{uuid}', [deleteAdmin::class, 'deleteMaps']);

    // carousel
    Route::post('/admin/carousel', [createAdmin::class, 'createCarousel']);
    Route::get('/admin/carousel', [readAdmin::class, 'readCarousel']);
    Route::post('/admin/carousel/{uuid}', [updateAdmin::class, 'updateCarousel']);
    Route::delete('/admin/carousel/{uuid}', [deleteAdmin::class, 'deleteCarousel']);

    //karir
    Route::post('/admin/karir', [createAdmin::class, 'createKarir']);
    Route::get('/admin/karir', [readAdmin::class, 'readKarir']);
    Route::post('/admin/karir/{uuid}', [updateAdmin::class, 'updateKarir']);
    Route::delete('/admin/karir/delete/{uuid}', [deleteAdmin::class, 'deleteKarir']);

    // kontak
    Route::post('/admin/kontak', [createAdmin::class, 'createkontak']);
    Route::get('/admin/kontak', [readAdmin::class, 'readKontak']);
    Route::post('/admin/kontak/{uuid}', [updateAdmin::class, 'updateKontak']);
    Route::delete('/admin/kontak/delete/{uuid}', [deleteAdmin::class, 'deleteKontak']);

    // tata kelola
    Route::post('/admin/tataKelola', [createAdmin::class, 'createTataKelola']);
    Route::get('/admin/tataKelola', [readAdmin::class, 'readTataKelola']);
    Route::post('/admin/tataKelola/{uuid}', [updateAdmin::class, 'updateTataKelola']);
    Route::delete('/admin/tataKelola/delete/{uuid}', [deleteAdmin::class, 'deleteTataKelola']);
});
