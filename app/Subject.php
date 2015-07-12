<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public function modules()
    {
        return $this->hasMany('SC\Module');
    }

    public function lessons()
    {
        return $this->hasMany('SC\Lesson');
    }
}
