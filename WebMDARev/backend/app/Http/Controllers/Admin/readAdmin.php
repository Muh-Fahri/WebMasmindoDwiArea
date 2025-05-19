<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BeritaTerkini;
use App\Models\Bisnis;
use App\Models\DeskripLingkungan;
use App\Models\ImageLingkungan;
use App\Models\Instagram;
use App\Models\PDF;
use App\Models\Sosial;
use App\Models\Youtube;
use Illuminate\Http\Request;

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
}
