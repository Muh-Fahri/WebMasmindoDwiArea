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
        Schema::create('masmindo', function (Blueprint $table) {
            $table->id();
            $table->string('img_program');
            $table->string('judul_program');
            $table->string('isi_program');
            $table->enum('kategory_kegiatan', ['programPengembanganMasyarakat', 'programKesehatan', 'programInfrastruktur', 'programPendidikan']);
            // tambahkan kategory pengembangan masyarakat dan pendidikan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masmindo');
    }
};
