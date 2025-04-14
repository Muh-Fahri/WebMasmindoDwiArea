<?php

namespace App\Http\Controllers;

use App\Models\Home;
use App\Models\Media;
use App\Models\Video;
use App\Models\Galeri;
use App\Models\Masmindo;
use App\Models\Lingkungan;
use App\Models\BannerMedia;
use App\Models\Pesan;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\File;
use function PHPUnit\Framework\fileExists;

class AdminController extends Controller
{
    function dashboard()
    {
        $galeri = Galeri::all();
        $berita = Media::all();
        $video = Video::all();
        $pesan = Pesan::all();
        return view('Admin.Dashboard', compact('galeri', 'video', 'berita', 'pesan'));
    }

    function account()
    {
        return view('Admin.account');
    }

    function portofolio()
    {
        return view('Admin.portofolio');
    }

    function submitImage(Request $request)
    {
        $request->validate([
            'image_proyek',
        ]);
        $images = new Home();
        if ($request->hasFile('image_proyek')) {
            $request->file('image_proyek')->move('img/', $request->file('image_proyek')->getClientOriginalName());
            $images->image_proyek = $request->file('image_proyek')->getClientOriginalName();
        }
        $images->save();
        return redirect()->back()->with('success', 'Berhasil mengupload foto');
    }

    function galeri()
    {
        $galeri = Galeri::all();
        return view('Admin.galeri', compact('galeri'));
    }

    function tambahGaleri(Request $request)
    {
        $request->validate([
            'nama_kegiatan' => 'required',
            'deskrip_kegiatan' => 'required',
            'image_galeri' => 'required',
        ]);

        $galeri = new Galeri();
        $galeri->nama_kegiatan = $request->nama_kegiatan;
        $galeri->deskrip_kegiatan = $request->deskrip_kegiatan;
        if ($request->hasFile('image_galeri')) {
            $request->file('image_galeri')->move('img', $request->file('image_galeri')->getClientOriginalName());
            $galeri->image_galeri = $request->file('image_galeri')->getClientOriginalName();
        }
        $galeri->save();

        return redirect()->back()->with('success', 'Berhasil Menginput Data');
    }

    function editGaleri(Request $request, $id)
    {

        $galeri = Galeri::findOrFail($id);
        $galeri->nama_kegiatan = $request->nama_kegiatan;
        $galeri->deskrip_kegiatan = $request->deskrip_kegiatan;
        if ($request->hasFile('image_galeri')) {
            $fotoLama = public_path('img/' . $galeri->image_galeri);
            if (file_exists($fotoLama) && !is_dir($fotoLama)) {
                unlink($fotoLama);
            }

            $file = $request->file('image_galeri');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('img/'), $namaFile);

            $galeri->image_galeri = $namaFile;
        }

        $galeri->save();
        return redirect()->back()->with('edit_success', 'Berhasil Mengedit Data');
    }

    function hapusGaleri($id)
    {
        $galeri = Galeri::findOrFail($id);
        if ($galeri->image_galeri && File::exists(public_path('img/' . $galeri->image_galeri))) {
            File::delete(public_path('img/' . $galeri->image_galeri));
        }
        $galeri->delete();

        return redirect()->back()->with('terhapus', 'Data Berhasil di Hapus');
    }




    function video()
    {
        $video = Video::all();
        return view('Admin.video', compact('video'));
    }

    function tambahVideo(Request $request)
    {
        $request->validate([
            'link_video' => 'required',
        ]);

        $video = new Video();
        $video->link_video = $request->link_video;
        $video->save();

        return redirect()->back()->with('videoAdd', 'Berhasil Menambahkan Video');
    }

    function hapusVideo($id)
    {
        $video = Video::findOrFail($id);
        $video->delete();
        return redirect()->back()->with('videoTerhapus', 'Berhasil Menghapus Video');
    }


    function media()
    {
        $populer = Media::where('category_berita', 'populer')->get();
        $utama = Media::where('category_berita', 'utama')->get();
        $lainnya = Media::whereNull('category_berita')->get();
        return view('Admin.media', compact('populer', 'utama', 'lainnya'));
    }

    function tambahBerita(Request $request)
    {
        $request->validate([
            'img_berita' => 'required|image|mimes:jpeg,png,jpg,gif',
            'judul_berita' => 'required|string|max:255',
            'isi_berita' => 'required|string',
            'category_berita' => 'nullable|in:utama,populer'
        ]);

        // Cek apakah sudah ada berita dengan kategori 'populer'
        if ($request->category_berita === 'populer') {
            $existingPopuler = Media::where('category_berita', 'populer')->first();
            if ($existingPopuler) {
                return redirect()->back()->with('error', 'Hanya boleh ada satu berita kategori populer!');
            }
        }

        $berita = new Media();
        $berita->judul_berita = $request->judul_berita;
        $berita->isi_berita = $request->isi_berita;
        $berita->category_berita = $request->category_berita ?: null;

        if ($request->hasFile("img_berita")) {
            $imageName = time() . '_' . $request->file('img_berita')->getClientOriginalName();
            $request->file('img_berita')->move(public_path('berita'), $imageName);
            $berita->img_berita = $imageName;
        }
        // if ($request->hasFile('img_berita')) {
        //     $file = $request->file('img_berita');
        //     $namaFileBaru = time() . '-' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
        //     $file->move(public_path('berita'), $namaFileBaru);
        //     $berita->img_program = $namaFileBaru;
        // }
        $berita->save();
        // dd($berita);
        return redirect()->back()->with('Berita_tertambah', 'Berhasil ditambahkan!');
    }

    function editBeritaLainnya(Request $request, $id)
    {
        $berita = media::findOrFail($id);

        $berita->judul_berita = $request->judul_berita;
        $berita->isi_berita = $request->isi_berita;
        $berita->category_berita = $request->category_berita;

        if ($request->category_berita === 'populer') {
            $existingPopuler = Media::where('category_berita', 'populer')->first();
            if ($existingPopuler) {
                return redirect()->back()->with('error', 'Hanya boleh ada satu berita kategori populer!');
            }
        }

        if ($request->hasFile('img_berita')) {
            $fotoLama = public_path('berita/' . $berita->img_berita);
            if (file_exists($fotoLama) && !is_dir($fotoLama)) {
                unlink($fotoLama);
            }

            $file = $request->file('img_berita');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('berita/'), $namaFile);

            $berita->img_berita = $namaFile;
        }
        $berita->save();
        return redirect()->back()->with('beritaDiEdit', 'Berhasil Mengedit Berita');
    }

    function hapusBeritaLainnya($id)
    {
        $berita = Media::findOrFail($id);
        if ($berita->img_berita && File::exists(public_path('img/' . $berita->img_berita))) {
            File::delete(public_path('img/' . $berita->image_galeri));
        }
        $berita->delete();

        return redirect()->back()->with('beritaBerhasilDiHapus', 'Berita Berhasil di Hapus');
    }

    function tambahKegiatan(Request $request)
    {
        $request->validate([
            'nama_kegiatan' => 'required',
            'isi_kegiatan' => 'required',
            'img_kegiatan' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'kategory_kegiatan' => 'required|in:lingkungan,program_kesehatan,infrastruktur',
        ]);

        $kegiatan = new Lingkungan();
        $kegiatan->nama_kegiatan = $request->nama_kegiatan;
        $kegiatan->isi_kegiatan = $request->isi_kegiatan;
        $kegiatan->kategory_kegiatan = $request->kategory_kegiatan;
        if ($request->hasFile('img_kegiatan')) {
            $request->file('img_kegiatan')->move('kegiatan/', $request->file('img_kegiatan')->getClientOriginalName());
            $kegiatan->img_kegiatan = $request->file('img_kegiatan')->getClientOriginalName();
        }
        $kegiatan->save();
        return redirect()->back()->with('kegiatanDitambah', 'Berhasil Menambahkan Data');
    }

    function editKegiatan(Request $request, $id)
    {
        $request->validate([
            'img_kegiatan' => 'image|mimes:png,jpg,jpeg|max:2048',
        ]);

        $kegiatan = Lingkungan::findOrfail($id);
        $kegiatan->nama_kegiatan = $request->nama_kegiatan;
        $kegiatan->isi_kegiatan = $request->isi_kegiatan;
        $kegiatan->kategory_kegiatan = $request->kategory_kegiatan;
        if ($request->hasFile('img_kegiatan')) {
            $fotoLama = public_path('kegiatan/' . $kegiatan->img_kegiatan);
            if (file_exists($fotoLama) && !is_dir($fotoLama)) {
                unlink($fotoLama);
            }

            $file = $request->file('img_kegiatan');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('kegiatan/'), $namaFile);

            $kegiatan->img_kegiatan = $namaFile;
        }
        $kegiatan->save();
        return redirect()->back()->with('berhasilEditKeg', 'Berhasil Mengedit Kegitan');
    }

    function hapusKegiatan($id)
    {
        $kegiatan = Lingkungan::findOrFail($id);
        if ($kegiatan->img_kegiatan && File::exists(public_path('/kegiatan' . $kegiatan->img_kegiatan))) {
            File::delete(public_path('kegiatan/' . $kegiatan->img_galeri));
        }
        $kegiatan->delete();
        return redirect()->back()->with('kegiatanTerhapus', 'Berhasil Menghapus Kegiatan');
    }

    function editBeritaTerpopuler(Request $request, $id)
    {
        $request->validate([
            'img_berita' => 'image|mimes:png,jpg,jpeg',
            'category_berita' => 'in:populer,utama',
        ]);

        $editBerita = Media::findOrFail($id);
        $editBerita->judul_berita = $request->judul_berita;
        $editBerita->isi_berita = $request->isi_berita;
        $editBerita->category_berita = $request->category_berita;

        if ($request->category_berita === 'populer') {
            $existingPopuler = Media::where('category_berita', 'populer')
                ->where('id', '!=', $id) // <-- abaikan berita yang sedang diedit
                ->first();

            if ($existingPopuler) {
                return redirect()->back()->with('error', 'Hanya boleh ada satu berita kategori populer!');
            }
        }


        if ($request->hasFile('img_berita')) {
            $fotoLama = public_path('berita/' . $editBerita->img_berita);
            if (file_exists($fotoLama) && !is_dir($fotoLama)) {
                unlink($fotoLama);
            }

            $file = $request->file('img_berita');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('berita/'), $namaFile);

            $editBerita->img_berita = $namaFile;
        }
        $editBerita->save();

        return redirect()->back()->with('berhasilEditBeritaPopuler', "Berita Populer Berhasil di Edit");
    }

    function hapusBeritaUtama($id)
    {
        $berita = Media::findOrFail($id);
        if ($berita->img_berita && File::exists(public_path('berita/' . $berita->img_berita))) {
            File::delete(public_path('berita/' . $berita->img_berita));
        }
        $berita->delete();
        return redirect()->back()->with('hapusBeritaPopuler', 'Berita Populer Berhasil Terhapus');
    }

    function editBeritaUtama(Request $request, $id)
    {
        $request->validate([
            'img_berita' => 'image|mimes:png,jpg,jpeg',
            'category_berita' => 'in:populer,utama',
        ]);

        $berita = Media::findOrFail($id);
        $berita->judul_berita = $request->judul_berita;
        $berita->isi_berita = $request->isi_berita;
        $berita->category_berita = $request->category_berita;
        if ($request->hasFile('img_berita')) {
            $fotoLama = public_path('berita/' . $berita->img_berita);
            if (file_exists($fotoLama) && !is_dir($fotoLama)) {
                unlink($fotoLama);
            }

            $file = $request->file('img_berita');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('berita/'), $namaFile);

            $berita->img_berita = $namaFile;
        }
        $berita->save();
        return redirect()->back()->with('EditBeritaUtama', 'Berita Utama Berhasil Di Edit');
    }

    function deleteBeritaPopuler($id)
    {
        $berita = Media::findOrFail($id);
        if ($berita->img_berita && File::exists(public_path('berita/' . $berita->img_berita))) {
            File::delete(public_path('berita/' . $berita->img_berita));
        }
        $berita->delete();
        return redirect()->back()->with('deleteBeritaPopuler', 'Berhasil Edit Berita Populer');
    }

    function tampilProgram()
    {
        $tambah = Masmindo::all();
        return view('Admin.program', compact('tambah'));
    }
    function tambahProgram(Request $request)
    {
        $request->validate([
            'img_program' => 'required|image|mimes:png,jpg,jpeg',
            'judul_program' => 'required|max:244',
            'isi_program' => 'required',
            'kategory_kegiatan' => 'required|in:programPengembanganMasyarakat,programKesehatan,programInfrastruktur,programPendidikan',
        ]);

        $program = new Masmindo();
        $program->judul_program = $request->judul_program;
        $program->isi_program = $request->isi_program;
        $program->kategory_kegiatan = $request->kategory_kegiatan;
        if ($request->hasFile('img_program')) {
            $file = $request->file('img_program');
            $namaFileBaru = time() . '-' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('program'), $namaFileBaru);
            $program->img_program = $namaFileBaru;
        }


        $program->save();
        return redirect()->back()->with('tambahProgram', 'Berhasil Menambahkan Program');
    }

    function editprogram(Request $request, $id)
    {
        $request->validate([
            'img_program' => 'image|mimes:png,jpg,jpeg',
            'kategory_kegiatan' => 'in:programPengembanganMasyarakat,programKesehatan,programInfrastruktur,programPendidikan',
        ]);

        $program = Masmindo::findorFail($id);
        $program->judul_program = $request->judul_program;
        $program->isi_program = $request->isi_program;
        $program->kategory_kegiatan = $request->kategory_kegiatan;
        if ($request->hasFile('img_program')) {
            $fotoLama = public_path('img/' . $program->img_program);
            if (file_exists($fotoLama) && !is_dir($fotoLama)) {
                unlink($fotoLama);
            }

            $file = $request->file('img_program');
            $namaFile = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('program/'), $namaFile);
            $program->img_program = $namaFile;
        }
        $program->save();
        return redirect()->back()->with('editProgram', 'Berhasil Mengedit Program');
    }

    function deleteProgram($id)
    {
        $program = Masmindo::findOrFail($id);
        $program->delete();
        return redirect()->back()->with('delete', 'Berhasil Menghapus');
    }

    function tampilSelengkapnya($id)
    {
        $selengkapnya = Media::findOrFail($id);
        return view('Admin.bacaSelengkapnya', compact('selengkapnya'));
    }

    function tampilPesan()
    {
        Pesan::where('status_baca', false)->update(['status_baca' => true]);

        $pesan = Pesan::all();
        $belumBaca = 0;

        return view('Admin.pesan', compact('pesan', 'belumBaca'));
    }

    function lihatPesan($id)
    {
        $pesan = Pesan::findOrFail($id);
        return view('Admin.lihatPesan', ['pesan' => $pesan]);
    }

    function hapusPesan($id)
    {
        $pesan = Pesan::findOrFail($id);
        $pesan->delete();

        return redirect()->back()->with('berhasil', 'Pesan terhapus');
    }


    // js
    public function getPesanRealtime()
    {
        $pesan = Pesan::latest()->get(); // Ambil pesan terbaru
        return response()->json($pesan);
    }
}
