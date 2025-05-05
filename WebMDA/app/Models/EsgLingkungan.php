<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EsgLingkungan extends Model
{
    protected $table = 'esgLingkungan';
    protected $fillable = [
        'bannerAtas',
        'deskripsi',
        'ImageLingkungan',
        'bannerBawah',
    ];
}
