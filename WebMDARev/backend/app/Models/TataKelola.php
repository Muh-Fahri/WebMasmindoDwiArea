<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class TataKelola extends Model
{
    protected $table = 'tataKelola';
    protected $fillable = [
        'fotoSampul',
        'pdf',
        'deskripKebijakan',
        'category',
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
