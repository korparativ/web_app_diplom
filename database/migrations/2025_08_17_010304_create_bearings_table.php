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
        Schema::create('bearings', function (Blueprint $table) {
            $table->id();
            $table->integer('name');
            $table->integer('name_gost');
            $table->string('name_iso');
            $table->integer('inner_diameter');
            $table->integer('outside_diameter');
            $table->integer('width');
            $table->string('signature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bearings');
    }
};
