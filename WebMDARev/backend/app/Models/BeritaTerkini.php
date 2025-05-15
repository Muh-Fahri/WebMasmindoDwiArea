<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class BeritaTerkini extends Model
{
    protected $table = 'beritaTerkini';
    protected $fillable = [
        'image_berita',
        'judul_berita',
        'deskripsi_berita',
        'uuid',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }
}
