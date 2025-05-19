<?php

namespace App\Http\Controllers\Admin;

use App\Models\PDF;
use App\Models\Bisnis;
use App\Models\Sosial;
use App\Models\Youtube;
use App\Models\Instagram;
use Illuminate\Http\Request;
use App\Models\BeritaTerkini;
use App\Models\ImageLingkungan;
use App\Models\DeskripLingkungan;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class deleteAdmin extends Controller
{
    function deleteBisnis($uuid)
    {
        $bisnis =  Bisnis::where('uuid', $uuid)->firstOrFail();
        $bisnis->delete();

        return response()->json([
            'msg' => 'Berhasil Delete Data',
        ], 200);
    }

    function deleteBerita($uuid)
    {
        $berita = BeritaTerkini::where('uuid', $uuid)->firstOrFail();

        if ($berita->image_berita) {
            $imagePath = public_path('Berita/' . $berita->image_berita);
            if (file_exists($imagePath)) {
                unlink($imagePath); // hapus file fisik
            }
        }

        // Hapus data dari database
        $berita->delete();

        return response()->json([
            'msg' => 'Data berhasil terhapus'
        ], 200);
    }

    function deleteDesling($uuid)
    {
        $deskripsi = DeskripLingkungan::where('uuid', $uuid)->firstOrFail();

        $deskripsi->delete();

        return response()->json([
            'msg' => 'Data Berhasil Terhapus'
        ]);
    }

    function deleteImgLing($uuid)
    {
        $imgLing = ImageLingkungan::where('uuid', $uuid)->firstOrFail();
        if ($imgLing->image_lingkungan) {
            $imagePath = public_path('Lingkungan/' . $imgLing->image_lingkungan);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        $imgLing->delete();

        return response()->json([
            'msg' => 'Berhasil Delete Data'
        ], 200);
    }

    function deleteSosial($uuid)
    {
        $sosial = Sosial::where('uuid', $uuid)->firstOrFail();

        $sosial->delete();

        return response()->json([
            'msg' => 'Berhasil Menghapus Data'
        ], 200);
    }

    function deleteInstagram($uuid)
    {
        $instagram = Instagram::where('uuid', $uuid)->firstOrFail();
        $instagram->delete();

        return response()->json([
            'msg' => 'Berhasil Menghapus Data'
        ], 200);
    }

    function deleteYoutube($uuid)
    {
        $youtube = Youtube::where('uuid', $uuid)->firstOrFail();
        $youtube->delete();

        return response()->json([
            'msg' => 'Berhasil Menghapus Data'
        ], 200);
    }

    function deletePdf($uuid)
    {
        $pdf = PDF::where('uuid', $uuid)->firstOrFail();

        // Path lengkap file di folder public/pdf
        $filePath = public_path('pdf/' . $pdf->stored_name);


        if (File::exists($filePath)) {
            File::delete($filePath);
        }

        // Hapus data dari database
        $pdf->delete();

        return response()->json([
            "msg" => "Berhasil Menghapus Data"
        ], 200);
    }
}
