<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Manajemen extends Model
{
    protected $table = 'manajemen';

    protected $fillable = [
        'img_profile',
        'nama',
        'jabatan',
    ];
}
