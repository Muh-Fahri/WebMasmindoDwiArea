<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Bisnis extends Model
{
    protected $table = 'bisnis';
    protected $fillable = [
        'uuid',
        'link_video',
        'deskripsi_bisnis_id',
        'deskripsi_bisnis_en',
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
