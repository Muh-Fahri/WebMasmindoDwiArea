<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Layer extends Model
{
    protected $table = 'layer';
    protected $fillable = [
        "geojson",
        "nama_layer",
        "map_id",
    ];

    public function map(): BelongsTo
    {
        return $this->belongsTo(Maps::class, 'map_id');
    }
}
