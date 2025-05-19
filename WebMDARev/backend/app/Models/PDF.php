<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class PDF extends Model
{
    protected $table = "pdf";
    protected $fillable = [
        "original_name",
        "stored_name",
        "uuid",
        "tahun",
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
