<?php

namespace App\Http\Controllers;

use App\Models\BeritaTerkini;
use App\Models\Bisnis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class deleteAdmin extends Controller
{
    function deleteBisnis($id)
    {
        $bisnis = Bisnis::findOrFail($id);
        $bisnis->delete();

        return redirect()->back()->with('bisnisTerhaspus', "Data Berhasil di Hapus");
    }

    function deleteBeritaTerkini($id)
    {
        $berita = BeritaTerkini::findOrFail($id);
        if ($berita->ImageBerita && File::exists(public_path('BeritaTerkini/' . $berita->ImageBerita))) {
            File::delete(public_path('BeritaTerkini/' . $berita->ImageBerita));
        }
        $berita->delete();
        return redirect()->back()->with('deleteBeritaTerkini', 'Berhasil Menghapus Data');
    }
}
