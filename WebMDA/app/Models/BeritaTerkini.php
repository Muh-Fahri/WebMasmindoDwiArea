<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeritaTerkini extends Model
{
    protected $table = 'beritaTerkini';
    protected $fillable = [
        'JudulBerita',
        'IsiBerita',
        'ImageBerita',
    ];
}
