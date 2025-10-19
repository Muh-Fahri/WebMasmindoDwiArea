<?php

namespace App\Http\Controllers;

use App\Models\PDF;
use App\Models\Karir;
use App\Models\Alamat;
use App\Models\Bisnis;
use App\Models\Galeri;
use App\Models\Kontak;
use App\Models\Sosial;
use App\Models\Youtube;
use App\Models\Carousel;
use App\Models\Instagram;
use Illuminate\Http\Request;
use App\Models\BeritaTerkini;
use App\Models\ImageLingkungan;
use App\Models\DeskripLingkungan;
use App\Models\TataKelola;
use Illuminate\Support\Facades\Validator;

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

    public function downloadPdf($stored_name)
    {
        $path = public_path('pdf/' . $stored_name);

        if (!file_exists($path)) {
            return response()->json(['error' => 'File tidak ditemukan.'], 404);
        }

        return response()->download($path);
    }

    function readLaporan()
    {
        $laporan = PDF::all();

        return response()->json([
            "laporan" => $laporan
        ], 200);
    }

    function readDokumentasi()
    {
        $dokumentasi = Galeri::all();
        return response()->json([
            'galeri' => $dokumentasi
        ], 200);
    }

    function readMaps()
    {
        $maps = Alamat::all();
        return response()->json([
            "maps" => $maps
        ], 200);
    }

    function readCarousel()
    {
        $carousel = Carousel::all();

        return response()->json([
            "carousel" => $carousel
        ], 200);
    }

    function readKarir()
    {
        $karir = Karir::where('category', 'profesional')->get();
        return response()->json([
            "karir" => $karir
        ], 200);
    }

    function readMagang()
    {
        $karir = Karir::where('category', 'magang')->get();
        return response()->json([
            "karir" => $karir
        ], 200);
    }

    function readKarirSelengkapnya($uuid)
    {
        $karirSelengkapnya = Karir::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            "karir" => $karirSelengkapnya,
        ], 200);
    }

    function kirimKontak(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:250',
            'noTelp' => 'required|string|max:20',
            'subject' => 'required|string|max:300',
            'pesan' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ], 422);
        }
        $kontak = Kontak::create([
            'name' => $request->name,
            'noTelp' => $request->noTelp,
            'subject' => $request->subject,
            'pesan' => $request->pesan,
        ]);

        return response()->json([
            'kontak' => $kontak
        ], 200);
    }

    function readKodeEtik()
    {
        $kodeEtik = TataKelola::where('category', 'kodeEtik')->firstOrFail();
        return response()->json([
            'kodeEtik' => $kodeEtik
        ], 200);
    }

    function kebijakanPelapor()
    {
        $kebijakanPelapor = TataKelola::where('category', 'kebijakanPelapor')->firstOrFail();
        return response()->json([
            'kebijakanPelapor' => $kebijakanPelapor
        ], 200);
    }

    function kebijakanKeberagaman()
    {
        $keberagaman = TataKelola::where('category', 'kebijakanKeberagaman');
        return response()->json([
            'keberagaman' => $keberagaman
        ], 200);
    }
}
