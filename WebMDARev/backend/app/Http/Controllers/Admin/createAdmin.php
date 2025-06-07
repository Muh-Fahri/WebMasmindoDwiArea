<?php

namespace App\Http\Controllers\Admin;

use App\Models\Bisnis;
use App\Models\Sosial;
use App\Models\Youtube;
use App\Models\Instagram;
use App\Models\Lingkungan;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\BeritaTerkini;
use App\Models\ImageLingkungan;
use App\Models\DeskripLingkungan;
use App\Http\Controllers\Controller;
use App\Models\PDF;

class createAdmin extends Controller
{
    function createBisnis(Request $request)
    {
        $request->validate([
            'link_video' => 'required',
            'deskripsi_bisnis_id' => 'required',
            'deskripsi_bisnis_en' => 'nullable',
        ]);

        $bisnis = Bisnis::create([
            'link_video' => $request->link_video,
            'deskripsi_bisnis_id' => $request->deskripsi_bisnis_id,
            'deskripsi_bisnis_en' => $request->deskripsi_bisnis_en,
        ]);

        return response()->json([
            'msg' => 'Berhasil Membuat Data',
            'bisnis' => $bisnis,
        ], 200);
    }

    function createBerita(Request $request)
    {
        $request->validate([
            'judul_berita_id' => 'required|string|max:255',
            'judul_berita_en' => 'nullable|string|max:255',
            'deskripsi_berita_id' => 'required|string',
            'deskripsi_berita_en' => 'nullable|string',
            'image_berita' => 'required|image|mimes:jpeg,png,jpg', // optional sesuai kebutuhan
        ]);

        if ($request->hasFile('image_berita')) {
            $imageName = time() . '_' . $request->file('image_berita')->getClientOriginalName();
            $request->file('image_berita')->move(public_path('Berita'), $imageName);
        } else {
            $imageName = null;
        }

        $berita = BeritaTerkini::create([
            'judul_berita_id' => $request->input('judul_berita_id'),
            'judul_berita_en' => $request->input('judul_berita_en'),
            'deskripsi_berita_id' => $request->input('deskripsi_berita_id'),
            'deskripsi_berita_en' => $request->input('deskripsi_berita_en'),
            'image_berita' => $imageName,
        ]);

        return response()->json([
            'message' => 'Berita berhasil disimpan',
            'data' => $berita,
            'image_berita' => 'Berita/' . $imageName,
        ], 201);
    }



    function createDesLing(Request $request)
    {
        $request->validate([
            'deskripsi_halaman_id' => 'string|required',
            'deskripsi_halaman_en' => 'string| nullable',
        ]);

        if (DeskripLingkungan::exists()) {
            return response()->json([
                'msg' => 'Deskripsi sudah ada, tidak bisa menambahkan lagi',
            ], 409);
        }

        $desLing = DeskripLingkungan::create([
            'deskripsi_halaman_id' => $request->deskripsi_halaman_id,
            'deskripsi_halaman_en' => $request->deskripsi_halaman_en
        ]);


        return response()->json([
            'msg' => 'Deskripsi Berhasil di tambahkan',
            'deskripsiLingkungan' => $desLing,
        ], 200);
    }

    function createImgLing(Request $request)
    {
        $request->validate([
            'image_lingkungan' => 'required|image|mimes:png,jpg,jpeg|', // Max file size 10MB
        ]);

        if ($request->hasFile('image_lingkungan')) {
            $imageName = time() . '_' . $request->file('image_lingkungan')->getClientOriginalName();
            $destinationPath = public_path('Lingkungan');
            $request->file('image_lingkungan')->move($destinationPath, $imageName);
            $imageUrl = '/Lingkungan/' . $imageName;
        }

        ImageLingkungan::create([
            'image_lingkungan' => $imageName,
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkan Data',
            'image_url' => $imageUrl,
        ], 200);
    }

    function createSosial(Request $request)
    {
        $request->validate([
            'imageSosial' => 'required|image|mimes:png,jpg,jpeg',
            'category' => 'required|in:pengembanganMasyarakat,pendidikan,kesehatan,infrastruktur,pemberdayaan'
        ]);

        if ($request->hasFile('imageSosial')) {
            $imageName = time() . '_' . $request->file('imageSosial')->getClientOriginalName();
            $simpan = public_path('Sosial');
            $request->file('imageSosial')->move($simpan, $imageName);
        }

        $sosial = Sosial::create([
            'category' => $request->category,
            'imageSosial' => $imageName
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkan Data',
            'sosial' => $sosial
        ]);
    }

    function createInstagram(Request $request)
    {
        $request->validate([
            'linkInstagram' => 'required|string|min:10'
        ]);

        $instagram = Instagram::create([
            'linkInstagram' => $request->linkInstagram
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkann Data',
            'instagram' => $instagram
        ], 200);
    }

    function createYoutube(Request $request)
    {
        $request->validate([
            'linkYoutube' => 'required|string|min:10'
        ]);

        $youtube = Youtube::create([
            'linkYoutube' => $request->linkYoutube
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkan Data',
            'youtube' => $youtube
        ], 200);
    }

    function createPdf(Request $request)
    {
        $request->validate([
            "pdf" => "required|mimes:pdf|max:20480",
            "tahun" => "required|digits:4|integer|min:1900|max:" . date('Y')
        ]);


        $file = $request->file('pdf');
        if ($file) {
            $originalName = $file->getClientOriginalName();
            $storedName = time() . "_" . Str::random(8) . "." . $file->getClientOriginalName();

            $file->move(public_path('pdf'), $storedName);


            $pdfFile = PDF::create([
                'original_name' => $originalName,
                'stored_name' => $storedName,
                'tahun' => $request->tahun
            ]);

            return response()->json([
                "msg" => "Berhasil Mengupload File",
                "pdf" => $pdfFile,
            ], 200);
        }

        return response()->json([
            "msg" => "Gagal Upload File"
        ], 200);
    }
}
