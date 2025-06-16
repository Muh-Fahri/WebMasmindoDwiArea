<?php

namespace App\Http\Controllers\Admin;

use App\Models\PDF;
use App\Models\Alamat;
use App\Models\Bisnis;
use App\Models\Galeri;
use App\Models\Sosial;
use App\Models\Weather;
use App\Models\Youtube;
use App\Models\Instagram;
use App\Models\Lingkungan;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\BeritaTerkini;
use App\Models\ImageLingkungan;
use App\Models\DeskripLingkungan;
use App\Http\Controllers\Controller;
use App\Models\Carousel;
use App\Models\Karir;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class createAdmin extends Controller
{
    function createBisnis(Request $request)
    {
        $request->validate([
            'link_video' => 'required',
            'deskripsi_bisnis_id' => 'required',
            'deskripsi_bisnis_en' => 'nullable',
        ]);

        $bisnis = Bisnis::create([
            'link_video' => $request->link_video,
            'deskripsi_bisnis_id' => $request->deskripsi_bisnis_id,
            'deskripsi_bisnis_en' => $request->deskripsi_bisnis_en,
        ]);

        return response()->json([
            'msg' => 'Berhasil Membuat Data',
            'bisnis' => $bisnis,
        ], 200);
    }

    function createBerita(Request $request)
    {
        $request->validate([
            'judul_berita_id' => 'required|string|max:255',
            'judul_berita_en' => 'nullable|string|max:255',
            'deskripsi_berita_id' => 'required|string',
            'deskripsi_berita_en' => 'nullable|string',
            'image_berita' => 'required|image|mimes:jpeg,png,jpg', // optional sesuai kebutuhan
        ]);

        if ($request->hasFile('image_berita')) {
            $imageName = time() . '_' . $request->file('image_berita')->getClientOriginalName();
            $request->file('image_berita')->move(public_path('Berita'), $imageName);
        } else {
            $imageName = null;
        }

        $berita = BeritaTerkini::create([
            'judul_berita_id' => $request->input('judul_berita_id'),
            'judul_berita_en' => $request->input('judul_berita_en'),
            'deskripsi_berita_id' => $request->input('deskripsi_berita_id'),
            'deskripsi_berita_en' => $request->input('deskripsi_berita_en'),
            'image_berita' => $imageName,
        ]);

        return response()->json([
            'message' => 'Berita berhasil disimpan',
            'data' => $berita,
            'image_berita' => 'Berita/' . $imageName,
        ], 201);
    }



    function createDesLing(Request $request)
    {
        $request->validate([
            'deskripsi_halaman_id' => 'string|required',
            'deskripsi_halaman_en' => 'string| nullable',
        ]);

        if (DeskripLingkungan::exists()) {
            return response()->json([
                'msg' => 'Deskripsi sudah ada, tidak bisa menambahkan lagi',
            ], 409);
        }

        $desLing = DeskripLingkungan::create([
            'deskripsi_halaman_id' => $request->deskripsi_halaman_id,
            'deskripsi_halaman_en' => $request->deskripsi_halaman_en
        ]);


        return response()->json([
            'msg' => 'Deskripsi Berhasil di tambahkan',
            'deskripsiLingkungan' => $desLing,
        ], 200);
    }

    function createImgLing(Request $request)
    {
        $request->validate([
            'image_lingkungan' => 'required|image|mimes:png,jpg,jpeg|', // Max file size 10MB
        ]);

        if ($request->hasFile('image_lingkungan')) {
            $imageName = time() . '_' . $request->file('image_lingkungan')->getClientOriginalName();
            $destinationPath = public_path('Lingkungan');
            $request->file('image_lingkungan')->move($destinationPath, $imageName);
            $imageUrl = '/Lingkungan/' . $imageName;
        }

        ImageLingkungan::create([
            'image_lingkungan' => $imageName,
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkan Data',
            'image_url' => $imageUrl,
        ], 200);
    }

    function createSosial(Request $request)
    {
        $request->validate([
            'imageSosial' => 'required|image|mimes:png,jpg,jpeg',
            'category' => 'required|in:pengembanganMasyarakat,pendidikan,kesehatan,infrastruktur,pemberdayaan'
        ]);

        if ($request->hasFile('imageSosial')) {
            $imageName = time() . '_' . $request->file('imageSosial')->getClientOriginalName();
            $simpan = public_path('Sosial');
            $request->file('imageSosial')->move($simpan, $imageName);
        }

        $sosial = Sosial::create([
            'category' => $request->category,
            'imageSosial' => $imageName
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkan Data',
            'sosial' => $sosial
        ]);
    }

    function createInstagram(Request $request)
    {
        $request->validate([
            'linkInstagram' => 'required|string|min:10'
        ]);

        $instagram = Instagram::create([
            'linkInstagram' => $request->linkInstagram
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkann Data',
            'instagram' => $instagram
        ], 200);
    }

    function createYoutube(Request $request)
    {
        $request->validate([
            'linkYoutube' => 'required|string|min:10'
        ]);

        $youtube = Youtube::create([
            'linkYoutube' => $request->linkYoutube
        ]);

        return response()->json([
            'msg' => 'Berhasil Menambahkan Data',
            'youtube' => $youtube
        ], 200);
    }

    function createPdf(Request $request)
    {
        $request->validate([
            "pdf" => "required|mimes:pdf|max:20480",
            "tahun" => "required|digits:4|integer|min:1900|max:" . date('Y')
        ]);


        $file = $request->file('pdf');
        if ($file) {
            $originalName = $file->getClientOriginalName();
            $storedName = time() . "_" . Str::random(8) . "." . $file->getClientOriginalName();

            $file->move(public_path('pdf'), $storedName);


            $pdfFile = PDF::create([
                'original_name' => $originalName,
                'stored_name' => $storedName,
                'tahun' => $request->tahun
            ]);

            return response()->json([
                "msg" => "Berhasil Mengupload File",
                "pdf" => $pdfFile,
            ], 200);
        }

        return response()->json([
            "msg" => "Gagal Upload File"
        ], 200);
    }

    function createDokumentasi(Request $request)
    {
        $request->validate([
            "foto_galeri" => "required|mimes:jpg,png,jpeg|image",
            "deskrip_id" => "required|max:255|",
            "deskrip_en" => "nullable|max:255"
        ]);

        if ($request->hasFile('foto_galeri')) {
            $imageName = time() . '_' . $request->file('foto_galeri')->getClientOriginalName();
            $simpan = public_path('Galeri');
            $request->file('foto_galeri')->move($simpan, $imageName);
        } else {
            $imageName = null;
        }

        $galeri = Galeri::create([
            "deskrip_id" => $request->deskrip_id,
            "deskrip_en" => $request->deskrip_en,
            "foto_galeri" => $imageName,
        ]);

        return response()->json([
            "galeri" => $galeri
        ], 200);
    }

    function createWeather()
    {
        $weathers = \App\Models\Weather::all();
        $sample_weather = $weathers->first();

        $return_response = [];

        if (now() > $sample_weather->updated_at->addHour()) {
            try {
                foreach ($weathers as $weather) {
                    $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
                        'id'    => $weather->city_id,
                        'units' => 'metric',
                        'appid' => env("OWM_API_KEY"),
                    ]);

                    if ($response->ok()) {
                        $data = $response->json();

                        $weather->temp         = $data['main']['temp'] ?? $weather->temp;
                        $weather->humidity     = $data['main']['humidity'] ?? $weather->humidity;
                        $weather->wind_speed   = $data['wind']['speed'] ?? $weather->wind_speed;
                        $weather->cloudiness   = $data['clouds']['all'] ?? $weather->cloudiness;

                        if (!empty($data['weather'][0])) {
                            $weather->weather_id   = $data['weather'][0]['id'];
                            $weather->weather_icon = $data['weather'][0]['icon'];
                        } else {
                            $weather->weather_id   = 800;
                            $weather->weather_icon = "01d";
                        }

                        $weather->updated_at = now()->toDateTimeString();
                        $weather->save();
                    }
                    $return_response[] = [
                        "city_id"     => $weather->city_id,
                        "city_name"   => $weather->city_name,
                        "temp"        => $weather->temp,
                        "humidity"    => $weather->humidity,
                        "wind_speed"  => $weather->wind_speed,
                        "cloudiness"  => $weather->cloudiness,
                        "weather_id"  => $weather->weather_id,
                        "weather_icon" => $weather->weather_icon,
                    ];
                }
            } catch (\Exception $e) {
                foreach ($weathers as $weather) {
                    $return_response[] = [
                        "city_id"     => $weather->city_id,
                        "city_name"   => $weather->city_name,
                        "temp"        => $weather->temp,
                        "humidity"    => $weather->humidity,
                        "wind_speed"  => $weather->wind_speed,
                        "cloudiness"  => $weather->cloudiness,
                        "weather_id"  => $weather->weather_id,
                        "weather_icon" => $weather->weather_icon,
                    ];
                }
            }
        } else {
            foreach ($weathers as $weather) {
                $return_response[] = [
                    "city_id"     => $weather->city_id,
                    "city_name"   => $weather->city_name,
                    "temp"        => $weather->temp,
                    "humidity"    => $weather->humidity,
                    "wind_speed"  => $weather->wind_speed,
                    "cloudiness"  => $weather->cloudiness,
                    "weather_id"  => $weather->weather_id,
                    "weather_icon" => $weather->weather_icon,
                ];
            }
        }

        return response()->json([
            "weather" => $return_response
        ], 200);
    }



    function createMaps(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_alamat_id' => 'nullable|string|max:255',
            'nama_alamat_en' => 'nullable|string|max:255',
            'link_alamat' => 'nullable|url|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validasi gagal',
                'errors' => $validator->errors()
            ], 422);
        }
        $filledInputs = collect($request->only([
            'nama_alamat_id',
            'nama_alamat_en',
            'link_alamat'
        ]))->filter(function ($value) {
            return !is_null($value) && $value !== '';
        });
        $maps = Alamat::create($filledInputs->toArray());

        return response()->json([
            "maps" => $maps,
            "message" => "Data berhasil disimpan"
        ], 200);
    }

    function createCarousel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "image_carousel" => "required|image|mimes:jpg,jpeg,png|max:5120",
            "text_carousel_id" => "required|string|max:255",
            "text_carousel_en" => "required|string|max:255",
            "body_text_id" => "required|string|max:255",
            "body_text_en" => "required|string|max:255",
        ]);


        if ($validator->fails()) {
            return response()->json([
                "error" => $validator->errors()
            ], 422);
        }

        if ($request->hasFile('image_carousel')) {
            $imageName = time() . "_" . $request->file('image_carousel')->getClientOriginalName();
            $simpan = public_path('Carousel');
            $request->file('image_carousel')->move($simpan, $imageName);
        }


        $carousel = Carousel::create([
            "image_carousel" => $imageName,
            "text_carousel_id" => $request->text_carousel_id,
            "text_carousel_en" => $request->text_carousel_en,
            "body_text_id" => $request->body_text_id,
            "body_text_en" => $request->body_text_en
        ]);

        return response()->json([
            "carousel" => $carousel
        ], 200);
    }

    public function createKarir(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category' => "required|in:profesional,magang",
            'nama_perusahaan' => 'required|string|max:255',
            'posisi_id' => 'required|string|max:255',
            'posisi_en' => 'required|string|max:255',
            'lokasi_id' => 'required|string|max:255',
            'lokasi_en' => 'required|string|max:255',
            'syarat_id' => 'required|string',
            'syarat_en' => 'required|string',
            'deskripsi_id' => 'required|string',
            'deskripsi_en' => 'required|string',
            'deadline' => 'required|date|after_or_equal:today',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "msg" => $validator->errors(),
            ], 422);
        }

        $karir = Karir::create([
            'uuid' => Str::uuid(),
            'category' => $request->category,
            'nama_perusahaan' => $request->nama_perusahaan,
            'posisi_id' => $request->posisi_id,
            'posisi_en' => $request->posisi_en,
            'lokasi_id' => $request->lokasi_id,
            'lokasi_en' => $request->lokasi_en,
            'syarat_id' => $request->syarat_id,
            'syarat_en' => $request->syarat_en,
            'deskripsi_id' => $request->deskripsi_id,
            'deskripsi_en' => $request->deskripsi_en,
            'deadline' => $request->deadline,
        ]);

        return response()->json([
            "karir" => $karir
        ], 200);
    }
}
