<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Maps extends Model
{
    protected $fillable = [
        'uuid',
        'nama_peta',
        'deskrip_peta'
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

    function layers()
    {
        return $this->hasMany(Layer::class, 'map_id');
    }
}
