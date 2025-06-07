<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class DeskripLingkungan extends Model
{
    protected $table = 'deskripLingkungan';
    protected $fillable = [
        'deskripsi_halaman_id',
        'deskripsi_halaman_en',
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
