<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Galeri extends Model
{
    protected $table = "galeri";
    protected $fillable = [
        'foto_galeri',
        'deskrip_id',
        'deskrip_en'
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
