<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class ClassTerm extends Model
{
    public    $timestamps = false;
    protected $fillable   = ['term'];

    public function classes()
    {
        return $this->hasMany('SC\SchoolClass', 'term_id');
    }

    public function scopeYear($query, $year)
    {
        return $query->where('term', 'LIKE', "%{$year}%");
    }

}
