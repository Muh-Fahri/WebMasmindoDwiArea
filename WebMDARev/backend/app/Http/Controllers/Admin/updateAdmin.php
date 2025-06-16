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
use App\Models\Alamat;
use App\Models\Carousel;
use App\Models\Galeri;
use App\Models\Instagram;
use App\Models\Karir;
use App\Models\Youtube;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
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

    function updateMaps(Request $request, $uuid)
    {
        $validator = Validator::make($request->all(), [
            "nama_alamat_id" => "string|max:255",
            "nama_alamat_en" => "string|max:255",
            "link_alamat" => "url|max:255"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'msg' => 'Validasi Gagal',
                'error' => $validator->errors(),
            ], 400);
        }
        $maps = Alamat::where('uuid', $uuid)->firstOrFail();

        $maps->update([
            "nama_alamat_id" => $request->nama_alamat_id,
            "nama_alamat_en" => $request->nama_alamat_en,
            "link_alamat" => $request->link_alamat
        ]);

        return response()->json([
            "alamat" => $maps,
        ], 200);
    }

    function updateCarousel(Request $request, $uuid)
    {
        $validator = Validator::make($request->all(), [
            "image_carousel" => "nullable|image|mimes:jpg,jpeg,png|max:5120",
            "text_carousel_id" => "required|string|max:255",
            "text_carousel_en" => "required|string|max:255",
            "body_text_id" => "required|string|max:255",
            "body_text_en" => "required|string|max:255",
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ], 400);
        }

        $carousel = Carousel::where('uuid', $uuid)->firstOrFail();

        $data = [
            "text_carousel_id" => $request->text_carousel_id,
            "text_carousel_en" => $request->text_carousel_en,
            "body_text_id" => $request->body_text_id,
            "body_text_en" => $request->body_text_en
        ];

        if ($request->hasFile('image_carousel')) {
            // Hapus gambar lama jika ada
            $oldPath = public_path('Carousel/' . $carousel->image_carousel);
            if (File::exists($oldPath)) {
                File::delete($oldPath);
            }

            // Simpan gambar baru
            $image_name = time() . "_" . $request->file('image_carousel')->getClientOriginalName();
            $request->file("image_carousel")->move(public_path("Carousel"), $image_name);

            // Tambahkan ke data yang diupdate
            $data["image_carousel"] = $image_name;
        }

        $carousel->update($data);

        return response()->json([
            "carousel" => $carousel
        ], 200);
    }

    public function updateKarir(Request $request, $uuid)
    {
        $karir = Karir::where('uuid', $uuid)->firstOrFail();

        $validator = Validator::make($request->all(), [
            'category' => "nullable|in:profesional,magang",
            'nama_perusahaan' => 'nullable|string|max:255',
            'posisi_id' => 'nullable|string|max:255',
            'posisi_en' => 'nullable|string|max:255',
            'lokasi_id' => 'nullable|string|max:255',
            'lokasi_en' => 'nullable|string|max:255',
            'syarat_id' => 'nullable|string',
            'syarat_en' => 'nullable|string',
            'deskripsi_id' => 'nullable|string',
            'deskripsi_en' => 'nullable|string',
            'deadline' => 'nullable|date|after_or_equal:today',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "msg" => $validator->errors(),
            ], 422);
        }

        // Update field hanya jika request memiliki nilainya
        $karir->update([
            'category' => $request->category ?? $karir->category,
            'nama_perusahaan' => $request->nama_perusahaan ?? $karir->nama_perusahaan,
            'posisi_id' => $request->posisi_id ?? $karir->posisi_id,
            'posisi_en' => $request->posisi_en ?? $karir->posisi_en,
            'lokasi_id' => $request->lokasi_id ?? $karir->lokasi_id,
            'lokasi_en' => $request->lokasi_en ?? $karir->lokasi_en,
            'syarat_id' => $request->syarat_id ?? $karir->syarat_id,
            'syarat_en' => $request->syarat_en ?? $karir->syarat_en,
            'deskripsi_id' => $request->deskripsi_id ?? $karir->deskripsi_id,
            'deskripsi_en' => $request->deskripsi_en ?? $karir->deskripsi_en,
            'deadline' => $request->deadline ?? $karir->deadline,
        ]);

        return response()->json([
            "karir" => $karir,
        ], 200);
    }
}
