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
        Schema::create('safety_hours', function (Blueprint $table) {
            $table->id();
            $table->string('jumlah_pekerja')->nullable();
            $table->string('jam_per_hari')->default('8'); // contoh default
            $table->string('jam_tanpaKecelakaan')->default('0');
            $table->string('tanggal_mulai')->nullable();
            $table->string('total_kecelakaan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('safety_hours');
    }
};
