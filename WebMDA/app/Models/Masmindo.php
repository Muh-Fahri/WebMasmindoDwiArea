<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Masmindo extends Model
{
    protected $table = 'Masmindo';
    protected $fillable = [
        'img_program',
        'judul_program',
        'isi_program',
        'kategory_kegiatan'
    ];
}
