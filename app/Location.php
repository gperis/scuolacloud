<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table      = 'geo_places';
    protected $primaryKey = 'woeid';

    public function born_users()
    {
        return $this->hasMany('SC\User', 'birth_location_id');
    }

    public function res_users()
    {
        return $this->hasMany('SC\User', 'res_location_id');
    }
}