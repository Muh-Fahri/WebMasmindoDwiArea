<?php

namespace App\Http\Controllers;

use App\Models\BeritaTerkini;
use App\Models\Bisnis;
use App\Models\EsgLingkungan;
use Illuminate\Http\Request;

class createAdmin extends Controller
{
    function buatPostingan(Request $request)
    {
        if (Bisnis::count() >= 1) {
            return redirect()->back()->with('BisnisAda', 'Hanya Bisa Memasukkan 1 data');
        }
        $bisnis = new Bisnis();

        $bisnis->deskripsi = $request->deskripsi;
        $bisnis->linkVideo = $request->linkVideo;

        $bisnis->save();

        return redirect()->back()->with('Bisnis', 'Berhasil Menambahkan Data');
    }
    function createBeritaTerkini(Request $request)
    {
        $request->validate([
            'JudulBerita' => 'required',
            'IsiBerita' => 'required',
            'ImageBerita' => 'required',
        ]);

        $berita = new BeritaTerkini();
        $berita->JudulBerita = $request->JudulBerita;
        $berita->IsiBerita = $request->IsiBerita;
        if ($request->hasFile('ImageBerita')) {
            $request->file('ImageBerita')->move('BeritaTerkini/', $request->file('ImageBerita')->getClientOriginalName());
            $berita->ImageBerita = $request->file('ImageBerita')->getClientOriginalName();
        }
        $berita->save();


        return redirect()->back()->with('Berita', 'Data Berhasil di Tambah');
    }

    function createLingkungan(Request $request)
    {
        $request->validate([
            'bannerAtas' => 'required|image|mimes:png,jpg,jpeg',
            'deskripsi' => 'required',
            'ImageLingkungan' => 'required|image|mimes:png,jpg,jpeg',
            'bannerBawah' => 'required|image|mimes:png,jpg,jpeg',
        ]);
        $banAtas = EsgLingkungan::whereNotNull('bannerAtas')->first();
        $ImgLing = EsgLingkungan::whereNotNull('ImageLingkungan')->first();
        $banBawah = EsgLingkungan::whereNotNull('bannerBawah')->first();
        if ($banAtas) {
            return redirect()->back()->with('bannerAtas', 'Banner atas hanya menginput satu gambar');
        }
        if ($ImgLing) {
            return redirect()->back()->with('ImgLing', "Image Lingkungan Hnya Bisa Menginput Satu Image");
        }
        if ($banBawah) {
            return redirect()->back()->with('banBawah', 'Hanya bisa menginput satu image banner bawah');
        }

        $bannerAtas = $request->file('bannerAtas');
        $bannerAtasName = time() . '_' . $bannerAtas->getClientOriginalName();
        $bannerAtas->move(public_path('ESG'), $bannerAtasName);

        $imageLingkungan = $request->file('ImageLingkungan');
        $imgLingName = time() . "_" . $imageLingkungan->getClientOriginalName();
        $imageLingkungan->move(public_path('ESG'), $imgLingName);

        $bannerBawah = $request->file('bannerBawah');
        $bannerBawahName = time() . "_" . $bannerBawah->getClientOriginalName();
        $bannerBawah->move(public_path('ESG'), $bannerBawahName);


        $lingkungan = new EsgLingkungan();
        $lingkungan->bannerAtas = $bannerAtasName;
        $lingkungan->ImageLingkungan = $imgLingName;
        $lingkungan->bannerBawah = $bannerBawahName;
        $lingkungan->deskripsi = $request->deskripsi;

        $lingkungan->save();
        return redirect()->back()->with('lingkungan', 'Behasil menambahkan data');
    }
}
