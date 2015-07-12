<?php namespace SC\Http\Controllers;

use Illuminate\Support\Facades\Input;
use SC\Http\Requests;
use SC\Location;

class SearchController extends Controller
{
    public function location($locId = 0)
    {
        if ($locId)
            return Location::findOrFail($locId);

        return Location::where('name', 'LIKE', Input::get('q') . '%')
                       ->orderBy('name')
                       ->groupBy(['name', 'country'])
                       ->get();
    }
}
