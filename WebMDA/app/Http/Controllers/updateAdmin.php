<?php

namespace App\Http\Controllers;

use App\Models\BeritaTerkini;
use App\Models\Bisnis;
use Illuminate\Http\Request;

class updateAdmin extends Controller
{
    function updateBisnis(Request $request, $id)
    {
        $bisnis = Bisnis::findOrFail($id);

        $bisnis->deskripsi = $request->deskripsi;
        $bisnis->linkVideo = $request->linkVideo;
        $bisnis->save();

        return redirect()->back()->with('editBisnis', 'Berhasil Mengedit Data');
    }

    function updateBeritaTerkini(Request $request, $id)
    {
        $request->validate([
            'ImageBerita' => 'image|mimes:png,jpg,jpeg',
        ]);

        $berita = BeritaTerkini::findOrFail($id);
        $berita->JudulBerita = $request->JudulBerita;
        $berita->IsiBerita = $request->IsiBerita;

        if ($request->hasFile('ImageBerita')) {
            // Hapus gambar lama
            $fotolama = public_path('BeritaTerkini/' . $berita->ImageBerita);
            if (file_exists($fotolama) && !is_dir($fotolama)) {
                unlink($fotolama);
            }

            // Simpan gambar baru
            $file = $request->file('ImageBerita');
            $namafile = time() . "_" . $file->getClientOriginalName();
            $file->move(public_path('BeritaTerkini'), $namafile);

            $berita->ImageBerita = $namafile;
        }

        $berita->save();

        return redirect()->back()->with('beritaUpdate', 'Berhasil Mengupdate Berita');
    }
}
