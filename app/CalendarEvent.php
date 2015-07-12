<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class CalendarEvent extends Model
{
    public function schoolClass()
    {
        return $this->belongsTo('SC\SchoolClass');
    }

    public function created_by()
    {
        return $this->belongsTo('SC\User');
    }
}
