<?php namespace SC;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use DateToDbFormatTrait;

    protected $fillable = ['module_id', 'date', 'user_id', 'class_id'];

    public function module()
    {
        return $this->belongsTo('SC\Module');
    }

    public function results()
    {
        return $this->hasMany('SC\TestResult');
    }

    public function schoolClass()
    {
        return $this->belongsTo('SC\SchoolClass', 'class_id');
    }

    public function getDateAttribute($value)
    {
        return Carbon::parse($value);
    }

    public function scopeToDo($query)
    {
        return $query->where('date', '>=', Carbon::today());
    }
}
