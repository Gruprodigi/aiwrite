<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGetwaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('getways', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo');
            $table->integer('rate');
            $table->integer('charge');
            $table->string('namespace')->nullable()->default('custom');
            $table->string('currency_name');
            $table->boolean('image_accept')->default(0);
            $table->boolean('is_auto')->default(0);
            $table->boolean('test_mode')->default(0);
            $table->string('status');
            $table->boolean('phone_required')->default(0);
            $table->string('instruction')->nullable();
            $table->text('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('getways');
    }
}
