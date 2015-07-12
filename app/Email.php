<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $fillable = ['to_id', 'from_id', 'subject', 'body', 'is_read'];

    public function to()
    {
        return $this->belongsTo('SC\User', 'to_id');
    }

    public function from()
    {
        return $this->belongsTo('SC\User', 'from_id');
    }

    public function markAsRead()
    {
        $this->update(['is_read' => 1]);
    }

    public function scopeUnread($query)
    {
        return $query->where('is_read', 0);
    }

    public function scopeTrashed($query)
    {
        return $query->whereNotNull('deleted_at');
    }
}
