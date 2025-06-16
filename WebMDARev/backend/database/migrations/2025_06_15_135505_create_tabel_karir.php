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
        Schema::create('karir', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->enum('category', ["magang", "profesional"]);
            $table->string('nama_perusahaan');
            $table->string('posisi_id');
            $table->string('posisi_en');
            $table->string('lokasi_id');
            $table->string('lokasi_en');
            $table->text('syarat_id');
            $table->text('syarat_en');
            $table->text('deskripsi_id');
            $table->text('deskripsi_en');
            $table->date('deadline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('karir');
    }
};
