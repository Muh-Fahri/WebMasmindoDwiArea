<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lingkungan extends Model
{
    protected $table = 'lingkungan';

    protected $fillable = [
        'img_kegiatan',
        'kategory_kegiatan',
        'nama_kegiatan',
        'isi_kegiatan',
    ];
}
