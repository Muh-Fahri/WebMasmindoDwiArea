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
        Schema::create('beritaTerkini', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('image_berita');
            $table->string('judul_berita');
            $table->text('deskripsi_berita');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beritaTerkini');
    }
};
