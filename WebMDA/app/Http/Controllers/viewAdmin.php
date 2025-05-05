<?php

namespace App\Http\Controllers;

use App\Models\BeritaTerkini;
use App\Models\Bisnis;
use App\Models\EsgLingkungan;
use Illuminate\Http\Request;

class viewAdmin extends Controller
{
    function tampilBisnis()
    {
        $bisnis = Bisnis::all();
        return view('Admin.Bisnis', compact('bisnis'));
    }

    function viewBeritaTerkini()
    {
        $berita = BeritaTerkini::all();
        return view('Admin.BeritaTerkini', compact('berita'));
    }

    function viewLingkungan()
    {
        $lingkungan = EsgLingkungan::all();
        return view('Admin.Lingkungan', compact('lingkungan'));
    }
}
