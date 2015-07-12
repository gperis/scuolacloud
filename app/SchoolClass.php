<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class SchoolClass extends Model
{
    public    $timestamps = false;
    protected $table      = 'classes';
    protected $fillable   = ['name', 'term_id'];

    public function students()
    {
        return $this->belongsToMany('SC\User', 'class_user', 'class_id');
    }

    public function calendar_events()
    {
        return $this->hasMany('SC\CalendarEvent');
    }

    public function term()
    {
        return $this->belongsTo('SC\ClassTerm');
    }
}
