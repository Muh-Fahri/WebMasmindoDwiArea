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
        Schema::create('tataKelola', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('fotoSampul');
            $table->string('pdf')->nullable();
            $table->text('deskripKebijakan');
            $table->enum('category', ['kodeEtik', 'kebijakanPelapor', 'kebijakanKeberagaman', 'antiSuap']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tataKelola');
    }
};
