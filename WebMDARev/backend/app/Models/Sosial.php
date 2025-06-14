<?php

namespace App\Models;

use Illuminate\Support\Str;
use PhpParser\Node\Stmt\Static_;
use Illuminate\Database\Eloquent\Model;

class Sosial extends Model
{
    protected $table = 'sosial';
    protected $fillable = [
        'imageSosial',
        'category',
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
