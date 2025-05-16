<?php

namespace App\Http\Controllers;

use App\Models\BeritaTerkini;
use App\Models\Bisnis;
use App\Models\DeskripLingkungan;
use App\Models\ImageLingkungan;
use App\Models\Instagram;
use App\Models\Sosial;
use App\Models\Youtube;
use Illuminate\Http\Request;

class readUser extends Controller
{
    function readBisnis()
    {
        $bisnis = Bisnis::all();

        return response()->json([
            'bisnisUser' => $bisnis
        ], 200);
    }

    function readBerita()
    {
        $berita = BeritaTerkini::all();

        return response()->json([
            'berita' => $berita
        ], 200);
    }

    function readLingkunganDeskrip()
    {
        $lingkungan = DeskripLingkungan::all();

        return response()->json([
            "deskripLingkunan" => $lingkungan
        ], 200);
    }

    function readImgLing()
    {
        $imgLing = ImageLingkungan::all();
        return response()->json([
            "imgLing" => $imgLing
        ], 200);
    }

    function readSosialInfra()
    {
        $sosialInfra = Sosial::where('category', 'infrastruktur')->get();

        return response()->json([
            "sosialInfra" => $sosialInfra
        ], 200);
    }

    function readPengembanganMasyarakat()
    {
        $sosialMasyarakat = Sosial::where('category', 'pengembanganMasyarakat')->get();

        return response()->json([
            "sosialMasyarakat" => $sosialMasyarakat
        ], 200);
    }

    function readSosialPendidikan()
    {
        $sosialPendidikan = Sosial::where('category', 'pendidikan')->get();
        return response()->json([
            "sosialPendidikan" => $sosialPendidikan
        ], 200);
    }

    function readSosialKesehatan()
    {
        $sosialKesehatan = Sosial::where('category', 'kesehatan')->get();
        return response()->json([
            "sosialKesehatan" => $sosialKesehatan
        ], 200);
    }

    function readSosialPemberdayaan()
    {
        $sosialPemberdayaan = Sosial::where('category', 'pemberdayaan')->get();

        return response()->json([
            "sosialPemberdayaan" => $sosialPemberdayaan
        ], 200);
    }

    function beritaSelengkapnya($uuid)
    {
        // Ambil data berdasarkan kolom 'uuid', bukan 'id'
        $berita = BeritaTerkini::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            "selengkapnya" => $berita
        ], 200);
    }

    function readInstagram()
    {
        $instagram = Instagram::all();

        return response()->json([
            "instagram" => $instagram
        ], 200);
    }

    function readYoutube()
    {
        $youtube = Youtube::all();

        return response()->json([
            "youtube" => $youtube
        ], 200);
    }
}
