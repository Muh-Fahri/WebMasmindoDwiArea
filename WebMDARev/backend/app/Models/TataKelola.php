<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class TataKelola extends Model
{
    protected $table = 'tataKelola';
    protected $fillable = [
        'deskripsiHalaman',
        'fotoSampul',
        'pdf',
        'deskripKebijakan',
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
