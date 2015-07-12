<?php

use Carbon\Carbon;
use Illuminate\Database\Migrations\Migration;

class AddDefaultData extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')->insert([
                                       'ssn'               => 'ADMN1',
                                       'email'             => 'admin@scuolacloud.com',
                                       'password'          => bcrypt('AdminScuolaCloud'),
                                       'first_name'        => 'Administrator',
                                       'last_name'         => 'ScuolaCloud',
                                       'gender'            => 'm',
                                       'birthdate'         => Carbon::createFromDate(2015, 05, 23),
                                       'birth_location_id' => 726286,
                                       'res_location_id'   => 726286,
                                       'created_at'        => Carbon::now(),
                                       'updated_at'        => Carbon::now(),
                                   ]);

        DB::table('groups')->insert([
                                        ['name' => 'Amministratore', 'permissions' => 4],
                                        ['name' => 'Amministrativo', 'permissions' => 3],
                                        ['name' => 'Insegnante', 'permissions' => 2],
                                        ['name' => 'Studente', 'permissions' => 1],
                                        ['name' => 'Bannato', 'permissions' => 0],
                                    ]);

        DB::table('subjects')->insert([
                                          ['name' => 'Italiano'],
                                          ['name' => 'Storia'],
                                          ['name' => 'Matematica'],
                                          ['name' => 'Elettronica SO'],
                                          ['name' => 'Informatica'],
                                          ['name' => 'Inglese'],
                                          ['name' => 'Diritto ed economia'],
                                          ['name' => 'Sist. elab. tras. infor'],
                                      ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('users')->where('ssn', 'ADMN1')->delete();
        DB::table('groups')->whereIn('name', ['Gods', 'Administrative', 'Teachers', 'Students'])->delete();
        DB::table('subjects')->whereIn('name', [
            'Italiano',
            'Storia',
            'Matematica',
            'Elettronica SO',
            'Informatica',
            'Inglese',
            'Diritto ed economia',
            'Sist. elab. tras. infor',
        ]);
    }

}
