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
use App\Models\Galeri;
use App\Models\Instagram;
use App\Models\Youtube;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Stmt\ElseIf_;

class updateAdmin extends Controller
{
    function updateBisnis(Request $request, $uuid)
    {

        $request->validate([
            'link_video' => 'required|string',
            'deskripsi_bisnis_id' => 'required|string',
            'deskripsi_bisnis_en' => 'nullable',
        ]);

        $bisnis = Bisnis::where('uuid', $uuid)->firstOrFail();

        $bisnis->update([
            'link_video' => $request->link_video,
            'deskripsi_bisnis_id' => $request->deskripsi_bisnis_id,
            'deskripsi_bisnis_en' => $request->deskripsi_bisnis_en,
        ]);

        return response()->json([
            'msg' => 'Berhasil mengupdate data',
            'bisnis' => $bisnis,
        ], 200);
    }

    function editBerita(Request $request, $uuid)
    {
        $request->validate([
            'judul_berita_id' => 'sometimes|required|string|max:255',
            'judul_berita_en' => 'sometimes|required|string|max:255',
            'deskripsi_berita_id' => 'sometimes|required|string',
            'deskripsi_berita_en' => 'sometimes|required|string',
            'image_berita' => 'sometimes|image|mimes:jpeg,png,jpg',
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
        if ($request->has('judul_berita_id')) {
            $berita->judul_berita_id = $request->input('judul_berita_id');
        }
        if ($request->has('deskripsi_berita_id')) {
            $berita->deskripsi_berita_id = $request->input('deskripsi_berita_id');
        }
        if ($request->has('judul_berita_en')) {
            $berita->judul_berita_en = $request->input('judul_berita_en');
        }
        if ($request->has('deskripsi_berita_en')) {
            $berita->deskripsi_berita_en = $request->input('deskripsi_berita_en');
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
            'deskripsi_halaman_id' => 'required|min:20|string',
            'deskripsi_halaman_en' => 'required|min:20|string',
        ]);

        $deskripsi = DeskripLingkungan::where('uuid', $uuid)->firstOrFail();

        $deskripsi->update([
            'deskripsi_halaman_id' => $request->deskripsi_halaman_id,
            'deskripsi_halaman_en' => $request->deskripsi_halaman_en
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

    function updateDokumentasi(Request $request, $uuid)
    {
        $request->validate([
            "foto_galeri" => "nullable|image|mimes:jpg,png,jpeg", // ← Ubah jadi nullable
            "deskrip_id" => "required",
            "deskrip_en" => "required",
        ]);

        $galeri = Galeri::where('uuid', $uuid)->firstOrFail();

        $dataUpdate = [
            "deskrip_id" => $request->deskrip_id,
            "deskrip_en" => $request->deskrip_en,
        ];

        if ($request->hasFile('foto_galeri')) {
            // Hapus gambar lama
            $oldPath = public_path('Galeri/' . $galeri->foto_galeri);
            if (File::exists($oldPath)) {
                File::delete($oldPath);
            }

            // Simpan gambar baru
            $image_name_new = time() . "-" . $request->file('foto_galeri')->getClientOriginalName();
            $request->file('foto_galeri')->move(public_path("Galeri"), $image_name_new);

            // Tambahkan ke data update
            $dataUpdate['foto_galeri'] = $image_name_new;
        }

        $galeri->update($dataUpdate);

        return response()->json([
            "galeri" => $galeri
        ], 200);
    }
}
