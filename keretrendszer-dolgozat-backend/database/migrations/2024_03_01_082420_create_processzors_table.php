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
        Schema::create('processzors', function (Blueprint $table) {
            $table->id();
            $table->enum('gyarto', ['Intel', 'AMD']);
            $table->string('tipus');
            $table->float('orajel');
            $table->enum('architektura', ['x86', 'x64', 'IA-64', 'ARM']);
            $table->date('megjelenes_datuma');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('processzors');
    }
};
