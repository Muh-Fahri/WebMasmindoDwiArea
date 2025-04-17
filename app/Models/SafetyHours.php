<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SafetyHours extends Model
{
    protected $table = "safety_hours";
    protected $fillable = [
        'jumlah_pekerja',
        'jam_per_hari',
        'tanggal_mulai',
        'jam_tanpaKecelakaan',
        'total_kecelakaan',
    ];
}
