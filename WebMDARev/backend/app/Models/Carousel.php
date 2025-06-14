<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    protected $table = "carousel";
    protected $fillable = [
        "uuid",
        "image_carousel",
        "text_carousel_id",
        "text_carousel_en",
        "body_text_id",
        "body_text_en"
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating((function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        }));
    }
}
