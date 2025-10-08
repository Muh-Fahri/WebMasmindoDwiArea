<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Kontak extends Model
{
    protected $table = 'kontak';
    protected $fillable = [
        'name',
        'kepada',
        'noTelp',
        'subject',
        'pesan',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->Str->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }
}
