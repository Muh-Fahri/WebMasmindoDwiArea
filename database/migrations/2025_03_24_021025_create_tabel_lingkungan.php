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
        Schema::create('lingkungan', function (Blueprint $table) {
            $table->id();
            $table->string('img_kegiatan');
            $table->string('nama_kegiatan');
            $table->string('isi_kegiatan');
            $table->enum('kategory_kegiatan',['lingkungan','program_kesehatan','infrastruktur']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lingkungan');
    }
};
