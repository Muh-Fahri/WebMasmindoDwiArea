<?php

namespace App\Http\Controllers\Admin;

use Log;
use App\Models\Bisnis;
use App\Models\Sosial;
use Illuminate\Http\Request;
use App\Models\BeritaTerkini;
use App\Models\ImageLingkungan;
use App\Models\DeskripLingkungan;
use App\Http\Controllers\Controller;
use App\Models\Instagram;
use App\Models\Youtube;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class updateAdmin extends Controller
{
    function updateBisnis(Request $request, $uuid)
    {

        $request->validate([
            'link_video' => 'required|string',
            'deskripsi_bisnis' => 'required|string',
        ]);

        $bisnis = Bisnis::where('uuid', $uuid)->firstOrFail();

        $bisnis->update([
            'link_video' => $request->link_video,
            'deskripsi_bisnis' => $request->deskripsi_bisnis,
        ]);

        return response()->json([
            'msg' => 'Berhasil mengupdate data',
            'bisnis' => $bisnis,
        ], 200);
    }

    function editBerita(Request $request, $uuid)
    {
        $request->validate([
            'judul_berita' => 'sometimes|required|string|max:255',
            'deskripsi_berita' => 'sometimes|required|string',
            'image_berita' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $berita = BeritaTerkini::where('uuid', $uuid)->firstOrFail();

        // Kalau ada gambar baru yang dikirim
        if ($request->hasFile('image_berita')) {
            if ($berita->image_berita) {
                Storage::delete('public/Berita/' . $berita->image_berita);
            }

            $imageName = time() . '_' . $request->file('image_berita')->getClientOriginalName();
            $request->file('image_berita')->move(public_path('Berita'), $imageName);

            $berita->image_berita = $imageName;
        }
        if ($request->has('judul_berita')) {
            $berita->judul_berita = $request->input('judul_berita');
        }
        if ($request->has('deskripsi_berita')) {
            $berita->deskripsi_berita = $request->input('deskripsi_berita');
        }

        $berita->save();

        return response()->json([
            'message' => 'Berita berhasil diperbarui',
            'data' => $berita
        ], 200);
    }

    function updateDesling(Request $request, $uuid)
    {
        $request->validate([
            'deskripsi_halaman' => 'required|min:20|string',
        ]);

        $deskripsi = DeskripLingkungan::where('uuid', $uuid)->firstOrFail();

        $deskripsi->update([
            'deskripsi_halaman' => $request->deskripsi_halaman
        ]);

        return response()->json([
            'msg' => 'Berhasil Mengubah data',
            'deskripsi' => $deskripsi
        ], 201);
    }

    function updateImgLing(Request $request, $uuid)
    {
        $request->validate([
            'image_lingkungan' => 'required|image|mimes:png,jpg,jpeg'
        ]);

        $imgLing = ImageLingkungan::where('uuid', $uuid)->firstOrFail();

        // Hapus gambar lama dari folder public/Lingkungan jika ada
        $oldImagePath = public_path('Lingkungan/' . $imgLing->image_lingkungan);
        if (File::exists($oldImagePath)) {
            File::delete($oldImagePath);
        }

        // Upload gambar baru
        $imageFile = $request->file('image_lingkungan');
        $imageName = time() . '_' . $imageFile->getClientOriginalName();
        $imageFile->move(public_path('Lingkungan'), $imageName);

        // Update database dengan nama file baru
        $imgLing->update([
            'image_lingkungan' => $imageName
        ]);

        return response()->json([
            'msg' => 'Berhasil Mengupdate Gambar',
            'imgLing' => $imgLing
        ], 200);
    }

    function updateSosial(Request $request, $uuid)
    {
        $request->validate([
            'imageSosial' => 'nullable|image|mimes:png,jpg,jpeg',
            'category' => 'nullable|in:pendidikan,kesehatan,pengembanganMasyarakat,infrastruktur,pemberdayaan'
        ]);

        $sosial = Sosial::where('uuid', $uuid)->firstOrFail();

        $imageName = $sosial->imageSosial; // default nama gambar lama

        if ($request->hasFile('imageSosial')) {
            // Hapus gambar lama jika ada
            $oldPath = public_path('Sosial/' . $sosial->imageSosial);
            if (File::exists($oldPath)) {
                File::delete($oldPath);
            }

            // Simpan gambar baru
            $imageName = time() . '_' . $request->file('imageSosial')->getClientOriginalName();
            $request->file('imageSosial')->move(public_path('Sosial'), $imageName);
        }

        // Jika kategori tidak diisi, pakai yang lama
        $category = $request->filled('category') ? $request->category : $sosial->category;

        $sosial->update([
            'category' => $category,
            'imageSosial' => $imageName
        ]);

        return response()->json([
            'msg' => 'Berhasil Mengupdate Data Sosial',
            'data' => $sosial
        ], 200);
    }

    function updateInstagram(Request $request, $uuid)
    {
        $request->validate([
            'linkInstagram' => 'nullable|string|min:10'
        ]);

        $instagram = Instagram::where('uuid', $uuid)->firstOrFail();

        // Update hanya jika field dikirim
        if ($request->filled('linkInstagram')) {
            $instagram->linkInstagram = $request->linkInstagram;
        }

        $instagram->save();

        return response()->json([
            'msg' => 'Berhasil Mengubah Data',
            'instagram' => $instagram
        ], 200);
    }

    function updateYoutube(Request $request, $uuid)
    {
        $request->validate([
            'linkYoutube' => 'nullable|string|min:10'
        ]);

        // Cari data berdasarkan UUID, jika tidak ada akan error 404
        $youtube = Youtube::where('uuid', $uuid)->firstOrFail();

        // Hanya update jika ada inputan baru
        if ($request->has('linkYoutube') && $request->filled('linkYoutube')) {
            $youtube->linkYoutube = $request->linkYoutube;
        }

        // Simpan data meski tidak ada perubahan juga tidak masalah
        $youtube->save();

        return response()->json([
            'msg' => 'Berhasil Mengubah data',
            'youtube' => $youtube
        ], 200);
    }
}
