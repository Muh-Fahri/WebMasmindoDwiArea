<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bisnis extends Model
{
    protected $table = 'bisnis';
    protected $fillable = [
        'deskripsi',
        'linkVideo'
    ];
}
