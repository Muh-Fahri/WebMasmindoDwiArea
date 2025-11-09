<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('layer', function (Blueprint $table) {
            $table->id();
            $table->string('nama_layer');
            $table->text('geojson');
            $table->unsignedBigInteger('map_id');
            $table->timestamps();

            $table->foreign('map_id')->references('id')->on('maps')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layer');
    }
};
