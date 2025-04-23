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
        Schema::create('esgLingkungan', function (Blueprint $table) {
            $table->id();
            $table->string('bannerAtas');
            $table->text('deskripsi');
            $table->string('ImageLingkungan');
            $table->string('bannerBawah');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('esgLingkungan');
    }
};
