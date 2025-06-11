<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Weather extends Model
{
    protected $table = 'weather';
    protected $fillable = [
        'city_id',
        'city_name',
        'temp',
        'humidity',
        'wind_speed',
        'cloudiness',
        'weather_id',
        'weather_icon',
        'updated_at',
    ];
}
