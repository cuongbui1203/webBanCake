<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Cake', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('price');
            $table->longText('detail')->default("");
            $table->string('picture')->default("");
            $table->integer('quantity')->default(0);
            $table->bigInteger('categoryId')->unsigned()->nullable(false);
            $table->timestamps();
        });

        Schema::create('CakeCategory', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->integer('quantity')->default(0);
            $table->timestamps();
        });

        Schema::table('cake', function (Blueprint $table) {
            $table->foreign('categoryId')
                  ->references('id')
                  ->on('CakeCategory');
        });

        DB::unprepared("CREATE TRIGGER `updateTotalProduct` 
                        AFTER INSERT ON `cake` 
                        FOR EACH ROW 
                        UPDATE cakeCategory SET quantity = quantity + new.quantity 
                        WHERE id = new.categoryId");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $DBname = env("DB_DATABASE");
        DB::unprepared("DROP TRIGGER IF EXISTS " . $DBname . "updateTotalProduct;");

        Schema::dropIfExists('Cake');
        Schema::dropIfExists('CakeCategory');
    }
};
