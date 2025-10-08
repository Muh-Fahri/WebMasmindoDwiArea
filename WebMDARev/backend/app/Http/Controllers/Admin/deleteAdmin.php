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
use App\Models\Alamat;
use App\Models\Carousel;
use App\Models\Galeri;
use App\Models\Karir;
use App\Models\Kontak;
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
                unlink($imagePath);
            }
        }
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

    public function deleteSosial($uuid)
    {
        $sosial = Sosial::where('uuid', $uuid)->firstOrFail();
        $imagePath = public_path('sosial/' . $sosial->imageSosial);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
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
        $filePath = public_path('pdf/' . $pdf->stored_name);


        if (File::exists($filePath)) {
            File::delete($filePath);
        }
        $pdf->delete();
        return response()->json([
            "msg" => "Berhasil Menghapus Data"
        ], 200);
    }

    public function deleteDokumentasi($uuid)
    {
        $galeri = Galeri::where('uuid', $uuid)->firstOrFail();
        $imagePath = public_path('Galeri/' . $galeri->foto_galeri);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $galeri->delete();

        return response()->json([
            "msg" => "Berhasil Menghapus Data"
        ], 200);
    }

    function deleteMaps($uuid)
    {
        $maps = Alamat::where('uuid', $uuid)->firstOrFail();
        $maps->forceDelete();

        return response()->json([
            "msg" => "Berhasil Menghapus Data"
        ], 200);
    }

    function deleteCarousel($uuid)
    {
        $carousel = Carousel::where('uuid', $uuid)->firstOrFail();

        if (!empty($carousel->image)) {
            $imagePath = public_path('Carousel/' . $carousel->image);

            if (file_exists($imagePath) && is_file($imagePath)) {
                unlink($imagePath);
            }
        }

        $carousel->delete();

        return response()->json([
            "msg" => "Data Terhapus"
        ], 200);
    }

    function deleteKarir($uuid)
    {
        $karir = Karir::where('uuid', $uuid);
        $karir->delete();

        return response()->json([
            "msg" => "Berhasil di hapus"
        ], 200);
    }

    function deleteKontak($uuid)
    {
        $kontak = Kontak::where('uuid', $uuid);
        $kontak->delete();

        return response()->json([
            'msg' => 'Data Berhasil di Hapus',
        ], 200);
    }
}
