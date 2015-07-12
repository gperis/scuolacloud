<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    public function user()
    {
        return $this->belongsTo('SC\User');
    }

    public function schoolClasses()
    {
        return $this->belongsToMany('SC\ScholClass');
    }
}
