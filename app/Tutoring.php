<?php namespace SC;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Tutoring extends Model
{
    use DateToDbFormatTrait;

    protected $table    = 'tutoring';
    protected $fillable = ['class_id', 'date', 'start_time', 'end_time'];

    public function schoolClass()
    {
        return $this->belongsTo('SC\SchoolClass', 'class_id');
    }

    public function modules()
    {
        return $this->belongsToMany('SC\Module');
    }

    public function users()
    {
        return $this->belongsToMany('SC\User');
    }

    public function getDateAttribute($value)
    {
        return Carbon::parse($value);
    }

    public function scopeToDo($query)
    {
        return $query->where('date', '>=', Carbon::today())->orderBy('date', 'asc');
    }

    public function getStartTimeAttribute($value)
    {
        return Carbon::parse($value);
    }

    public function getEndTimeAttribute($value)
    {
        return Carbon::parse($value);
    }
}
