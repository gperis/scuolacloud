<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $fillable = ['subject_id', 'num', 'short_description', 'long_description'];

    public function subject()
    {
        return $this->belongsTo('SC\Subject');
    }

    public function lessons()
    {
        return $this->belongsToMany('SC\Lesson');
    }

    public function tests()
    {
        return $this->hasMany('SC\Test');
    }
}
