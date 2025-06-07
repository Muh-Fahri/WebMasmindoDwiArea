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
        Schema::create('deskripLingkungan', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->text('deskripsi_halaman_id');
            $table->text('deskripsi_halaman_en')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deskripLingkungan');
    }
};
