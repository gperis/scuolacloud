<?php namespace SC\Http\Controllers;

use SC\Group;
use SC\Http\Requests;

class TeacherController extends BackendController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $teachers  = Group::findOrFail(3)->users()->orderBy('first_name')->get();
        $tSubjects = [];

        foreach ($teachers as $teacher) {
            $tSubjects[$teacher->id] = [];

            $teacher->lessons->each(function ($lesson) use ($teacher, &$tSubjects) {
                if ( ! in_array($lesson->subject->name, $tSubjects[$teacher->id]))
                    $tSubjects[$teacher->id][] = $lesson->subject->name;
            });
        }

        return view('teacher.index', compact('teachers', 'tSubjects'));
    }
}
