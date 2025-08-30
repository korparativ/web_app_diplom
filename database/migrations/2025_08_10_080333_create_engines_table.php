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
        Schema::create('engines', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('serial_number');
            $table->string('mechanism')->default('Резерв');
            $table->string('guild');
            $table->integer('power');
            $table->string('type');
            $table->string('fastening');
            $table->integer('frequency');
            $table->integer('voltage');
            $table->integer('current');
            $table->integer('year');
            $table->string('phases');
            $table->float('efficiency');
            $table->float('cosf');
            $table->string('type_rotor');
            $table->integer('diameter_shaft');
            $table->integer('diameter_flange');
            $table->string('size');
            $table->integer('weight');
            $table->string('second_bearing');
            $table->string('first_bearing');
            $table->string('signature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('engines');
    }
};
