<?php

namespace App\Http\Controllers;

use App\Models\BeritaTerkini;
use App\Models\Bisnis;
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
}
