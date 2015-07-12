<?php namespace SC;

use Illuminate\Database\Eloquent\Model;

class TestResult extends Model
{
    protected $fillable = ['test_id', 'user_id', 'score'];

    public function test()
    {
        return $this->belongsTo('SC\Test');
    }

    public function user()
    {
        return $this->belongsTo('SC\User');
    }
}
