<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Karir extends Model
{
    protected $table = 'karir';
    protected $fillable = [
        "uuid",
        "category",
        "posisi_id",
        "posisi_en",
        "lokasi_id",
        "lokasi_en",
        "syarat_id",
        "syarat_en",
        "nama_perusahaan",
        "deadline",
        "deskripsi_id",
        "deskripsi_en"
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }
}
