<?php namespace SC\Http\Controllers;

use SC\Http\Requests;
use SC\Http\Requests\StudentRequest;
use SC\SchoolClass;
use SC\User;

class StudentController extends BackendController
{
    /**
     * Show the form for creating a new resource.
     *
     * @param int $classId
     *
     * @return Response
     */
    public function associate($classId)
    {
        $class        = SchoolClass::findOrFail($classId);
        $alreadyAdded = $class->students()->get()->lists('id');
        $students     = User::students()->get()->except($alreadyAdded);

        return view('student.associate', compact('class', 'students'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StudentRequest $request
     * @param $classId
     *
     * @return Response
     */
    public function storeAssociation(StudentRequest $request, $classId)
    {
        $class = SchoolClass::findOrFail($classId);
        $class->students()->attach($request->input('students'));

        return redirect(action('SchoolClassController@show', [$classId]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $classId
     * @param $studentId
     *
     * @return Response
     */
    public function disassociate($classId, $studentId)
    {
        $class = SchoolClass::findOrFail($classId);
        $class->students()->detach($studentId);

        return redirect(action('SchoolClassController@show', [$classId]));
    }

}
