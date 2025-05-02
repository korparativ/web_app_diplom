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
        Schema::create('order_i_s', function (Blueprint $table) {
            $table->id();
            $table->string('equipment');
            $table->integer('number');
            $table->date('date_start');
            $table->date('date_stop');
            $table->string('worker');
            $table->string('signature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_i_s');
    }
};
