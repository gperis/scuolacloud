<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->char('ssn', 16)->unique();
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->char('gender', 1);
            $table->date('birthdate');
            $table->integer('birth_location_id')->unsigned();
            $table->integer('res_location_id')->unsigned();
            $table->timestamp('notifications_read')->nullable();
            $table->rememberToken();
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
        Schema::drop('users');
    }

}
