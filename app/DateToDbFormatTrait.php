<?php namespace SC;

use Carbon\Carbon;

trait DateToDbFormatTrait
{
    public function setDateAttribute($value)
    {
        $this->attributes['date'] = Carbon::createFromFormat('d/m/Y', $value)->format('Y-m-d');
    }
}