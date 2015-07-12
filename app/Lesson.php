<?php namespace SC;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected static $days = [
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato',
    ];
    public    $timestamps = false;
    protected $fillable   = ['subject_id', 'class_id', 'dow', 'start_time', 'end_time'];

    public static function getDays($day = null)
    {
        if ( ! is_null($day))
            return self::$days[$day];

        return self::$days;
    }

    public function teachers()
    {
        return $this->belongsToMany('SC\User');
    }

    public function schoolClass()
    {
        return $this->belongsTo('SC\SchoolClass', 'class_id', 'id');
    }

    public function subject()
    {
        return $this->belongsTo('SC\Subject');
    }

    public function modules()
    {
        return $this->belongsToMany('SC\Module');
    }

    public function getStartTimeAttribute($value)
    {
        return Carbon::createFromFormat('H:i:s', $value);
    }

    public function getEndTimeAttribute($value)
    {
        return Carbon::createFromFormat('H:i:s', $value);
    }

    public function hours()
    {
        return $this->start_time->format('H:i') . ' - ' . $this->end_time->format('H:i');
    }
}

