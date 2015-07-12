<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function users()
    {
        return $this->belongsToMany('SC\User', 'group_user', 'group_id', 'user_id');
    }

    public function scopeNotBanned($query)
    {
        return $query->where('permissions', '>', 0);
    }
}
