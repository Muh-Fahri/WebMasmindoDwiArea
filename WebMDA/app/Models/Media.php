<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $table = 'media';
    protected $fillable = [
        'img_berita',
        'judul_berita',
        'isi_berita',
        'category_berita',
    ];
}
