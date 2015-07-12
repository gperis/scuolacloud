<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    /**
     * Tables to truncate before each seeding.
     *
     * @var array
     */
    protected $toTruncate = ['users', 'emails'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
            DB::statement("SET foreign_key_checks = 0");
            Model::unguard();

            foreach ($this->toTruncate as $table) {
                DB::table($table)->truncate();
            }

            DB::statement("SET foreign_key_checks = 1");
        */
    }

}
