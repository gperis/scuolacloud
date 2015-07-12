<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeys extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('emails', function (Blueprint $table) {
            $table->foreign('from_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('to_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('notifications', function (Blueprint $table) {
            $table->foreign('from_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('to_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('calendar_events', function (Blueprint $table) {
            $table->foreign('class_id')->references('id')->on('classes')->onDelete('cascade');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('lessons', function (Blueprint $table) {
            $table->foreign('class_id')->references('id')->on('classes')->onDelete('cascade');
            $table->foreign('subject_id')->references('id')->on('subjects')->onDelete('cascade');
        });

        Schema::table('modules', function (Blueprint $table) {
            $table->foreign('subject_id')->references('id')->on('subjects')->onDelete('cascade');
        });

        Schema::table('tests', function (Blueprint $table) {
            $table->foreign('module_id')->references('id')->on('modules')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('class_id')->references('id')->on('classes')->onDelete('cascade');
        });

        Schema::table('files', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->foreign('birth_location_id')->references('woeid')->on('geo_places')->onDelete('cascade');
            $table->foreign('res_location_id')->references('woeid')->on('geo_places')->onDelete('cascade');
        });

        Schema::table('test_results', function (Blueprint $table) {
            $table->foreign('test_id')->references('id')->on('tests')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('tutoring', function (Blueprint $table) {
            $table->foreign('class_id')->references('id')->on('classes')->onDelete('cascade');
        });

        Schema::table('classes', function (Blueprint $table) {
            $table->foreign('term_id')->references('id')->on('school_terms')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('emails', function (Blueprint $table) {
            $table->dropForeign('emails_from_id_foreign');
            $table->dropForeign('emails_to_id_foreign');
        });

        Schema::table('notifications', function (Blueprint $table) {
            $table->dropForeign('notifications_from_id_foreign');
            $table->dropForeign('notifications_to_id_foreign');
        });

        Schema::table('calendar_events', function (Blueprint $table) {
            $table->dropForeign('calendar_events_class_id_foreign');
            $table->dropForeign('calendar_events_created_by_foreign');
        });

        Schema::table('lessons', function (Blueprint $table) {
            $table->dropForeign('lessons_class_id_foreign');
            $table->dropForeign('lessons_subject_id_foreign');
        });

        Schema::table('modules', function (Blueprint $table) {
            $table->dropForeign('modules_subject_id_foreign');
        });

        Schema::table('files', function (Blueprint $table) {
            $table->dropForeign('files_user_id_foreign');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_birth_location_id_foreign');
            $table->dropForeign('users_res_location_id_foreign');
        });

        Schema::table('tests', function (Blueprint $table) {
            $table->dropForeign('tests_module_id_foreign');
            $table->dropForeign('tests_user_id_foreign');
            $table->dropForeign('tests_class_id_foreign');
        });

        Schema::table('test_results', function (Blueprint $table) {
            $table->dropForeign('test_results_test_id_foreign');
            $table->dropForeign('test_results_user_id_foreign');
        });

        Schema::table('tutoring', function (Blueprint $table) {
            $table->dropForeign('tutoring_class_id_foreign');
        });

        Schema::table('classes', function (Blueprint $table) {
            $table->dropForeign('classes_term_id_foreign');
        });
    }

}
