<?php

namespace App\Http\Controllers\Admin;

use App\Models\PDF;
use App\Models\Bisnis;
use App\Models\Sosial;
use App\Models\Youtube;
use App\Models\Instagram;
use Illuminate\Http\Request;
use App\Models\BeritaTerkini;
use App\Models\ImageLingkungan;
use App\Models\DeskripLingkungan;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\Alamat;
use App\Models\Galeri;

class readAdmin extends Controller
{
    function readBisnis()
    {
        $bisnis = Bisnis::all();

        return response()->json([
            'bisnis' => $bisnis,
        ], 200);
    }

    function readBerita($uuid)
    {
        $berita = BeritaTerkini::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            'berita' => $berita
        ], 200);
    }

    function readAllBerita()
    {
        $berita = BeritaTerkini::all();

        return response()->json([
            'berita' => $berita
        ], 200);
    }

    function readDesLingById($uuid)
    {
        $deskrip = DeskripLingkungan::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            'deskrip' => $deskrip,
        ], 200);
    }

    function readDesLing()
    {
        $deskrip = DeskripLingkungan::all();
        return response()->json([
            'deskrip' => $deskrip
        ], 200);
    }

    function readImgLing()
    {
        $imgLing = ImageLingkungan::all();

        return response()->json([
            'imgLing' => $imgLing
        ], 200);
    }

    function readSosialById($uuid)
    {
        $sosial = Sosial::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            'sosial' => $sosial
        ], 200);
    }

    function readSosial()
    {
        $sosial = Sosial::all();

        return response()->json([
            'sosial' => $sosial
        ], 200);
    }

    function readInstagram()
    {
        $instagram = Instagram::all();

        return response()->json([
            'instagram' => $instagram
        ], 200);
    }

    function readInstagramById($uuid)
    {
        $instagram = Instagram::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            'instagram' => $instagram
        ], 200);
    }

    function readYoutube()
    {
        $youtube = Youtube::all();

        return response()->json([
            'youtube' => $youtube
        ], 200);
    }

    function readPdf()
    {
        $pdf = PDF::all();

        return response()->json([
            "pdf" => $pdf
        ], 200);
    }

    function downloadPDF($stored_name)
    {
        $path = public_path("pdf/" . $stored_name);

        if (!file_exists($path)) {
            abort(404, 'File tidak ditemukan.');
        }

        return response()->download($path);
    }

    function readSearchBerita(Request $request)
    {
        $keyword = $request->query('q');

        if (!$keyword) {
            return response()->json([
                'berita' => [],
                'message' => 'Query Keywoard Kosong'
            ]);
        }

        $berita_id = BeritaTerkini::where('judul_berita_id', 'LIKE', "%{$keyword}%")->get();
        $berita_en = BeritaTerkini::where('judul_berita_en', 'LIKE', "%{$keyword}%")->get();


        return response()->json([
            'berita_id' => $berita_id,
            'berita_en' => $berita_en
        ], 200);
    }

    function dashboardAdmin()
    {
        $laporan_tahunan = PDF::all();
        $berita = BeritaTerkini::all();
        $instagram = Instagram::all();
        $youtube = Youtube::all();
        $sosial = Sosial::all();
        $lingkungan_image = ImageLingkungan::all();

        $hitung_laporan = $laporan_tahunan->count();
        $hitung_berita = $berita->count();
        $hitung_instagram = $instagram->count();
        $hitung_youtube = $youtube->count();
        $hitung_sosial = $sosial->count();
        $hitung_lingkungan = $lingkungan_image->count();



        return response()->json([
            'laporan' => $hitung_laporan,
            'berita' => $hitung_berita,
            'instagram' => $hitung_instagram,
            'youtube' => $hitung_youtube,
            'lingkungan' => $hitung_lingkungan,
            'sosial' => $hitung_sosial,
        ], 200);
    }

    function readDokumentasi()
    {
        $galeri = Galeri::all();

        return response()->json([
            "galeri" => $galeri
        ], 200);
    }

    function readMaps()
    {
        $maps = Alamat::all();

        return response()->json([
            "maps" => $maps
        ], 200);
    }
}
