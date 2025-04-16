<?php

namespace App\Http\Controllers;

use App\Models\Home;
use App\Models\Media;
use App\Models\Video;
use App\Models\Galeri;
use App\Models\BannerMedia;
use App\Models\Masmindo;
use App\Models\Pesan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class UserController extends Controller
{
    function home()
    {
        $utama = Media::where('category_berita', 'utama')->get();
        return view('User.home', compact('utama'));
    }

    function sekilas()
    {
        return view('User.sekilasPerusahaan');
    }

    function manajemen()
    {
        return view('User.manajemen');
    }

    function kebijakan()
    {
        return view('User.kebijakan');
    }

    function lingkungan()
    {
        return view('User.lingkungan');
    }

    function sosial()
    {
        $programKesehatan = Masmindo::where('kategory_kegiatan', 'programKesehatan')->get();
        $infrastruktur = Masmindo::where('kategory_kegiatan', 'programInfrastruktur')->get();
        $pengembangan = Masmindo::where('kategory_kegiatan', 'programPengembanganMasyarakat')->get();
        $pendidikan = Masmindo::where('kategory_kegiatan', 'programPendidikan')->get();
        return view('User.sosial', compact('programKesehatan', 'infrastruktur', 'pengembangan', 'pendidikan'));
    }

    function portofolio()
    {
        $galeri = Galeri::all();
        $videos = Video::all();
        return view('User.portofolio', compact('galeri', 'videos'));
    }

    function media()
    {
        $lainnya = Media::whereNull('category_berita')->get();
        $utama = Media::where('category_berita', 'utama')->get();
        $populer = Media::where('category_berita', 'populer')->get();

        return view('User.media', compact('lainnya', 'utama', 'populer'));
    }

    function tampilSelengkapnya($id)
    {
        $selengkapnya = Media::findOrFail($id);
        return view('User.bacaSelengkapnya', ['selengkapnya' => $selengkapnya]);
    }

    function tampilKontak()
    {

        return view('User.kontak');
    }

    function kirimPesan(Request $request)
    {
        $request->validate([
            'pesan' => 'required',
            'nama' => 'required',
            'subject' => 'required',
            'email' => 'required|email',
            'no_telp' => 'required',
        ]);

        $kontak = new Pesan();
        $kontak->nama = $request->nama;
        $kontak->pesan = $request->pesan;
        $kontak->subject = $request->subject;
        $kontak->email = $request->email;
        $kontak->no_telp = $request->no_telp;

        $kontak->save();
        // dd($kontak);
        return redirect()->back()->with('terkirim', 'Berhasil mengirim pesan');
    }
}
