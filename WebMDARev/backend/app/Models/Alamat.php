<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Alamat extends Model
{
    protected $table = "alamat";
    protected $fillable = [
        "uuid",
        "nama_alamat_id",
        "nama_alamat_en",
        "link_alamat"
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
