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
        Schema::create('weather', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('city_id');
            $table->string('city_name');
            $table->decimal('temp', 5, 2); // misal: 27.74
            $table->integer('humidity');   // baru
            $table->decimal('wind_speed', 5, 2); // baru
            $table->integer('cloudiness'); // baru
            $table->integer('weather_id');
            $table->string('weather_icon');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weather');
    }
};
