<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Galeri extends Model
{
    protected $table = 'galeri';

    protected $fillable = [
        'nama_kegiatan',
        'deskrip_kegiatan',
        'image_galeri',
    ];
}
