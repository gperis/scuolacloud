<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    public function to()
    {
        return $this->belongsTo('SC\User');
    }

    public function from()
    {
        return $this->belongsTo('SC\User');
    }
}
