<?php namespace SC\Http\Controllers;

use SC\Http\Requests;
use SC\Http\Requests\TutoringRequest;
use SC\Module;
use SC\Subject;
use SC\Tutoring;

class TutoringController extends BackendController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $tutoring = $this->currentUser->tutoring()->toDo()->get();

        return view('tutoring.index', compact('tutoring'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $lessonsSubjects = $this->currentUser->lessons()->groupBy('subject_id')->lists('subject_id');

        $subjects = Subject::whereIn('id', array_flatten($lessonsSubjects))->get();
        $modules  = Module::whereIn('subject_id', array_flatten($subjects->lists('id')))->get()->map(function ($module) {
            return (object) ['id' => $module->id, 'name' => "N. {$module->num} - {$module->short_description}", 'subject_id' => $module->subject_id];
        });
        $classes  = $this->currentUser->lessons()->groupBy('class_id')->get()->map(function ($lesson) {
            return $lesson->schoolClass;
        });


        return view('tutoring.create', compact('subjects', 'modules', 'classes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TutoringRequest $request
     *
     * @return Response
     */
    public function store(TutoringRequest $request)
    {
        $tutoring = Tutoring::create($request->only(['class_id', 'date', 'start_time', 'end_time']));
        $modules  = array_flatten($request->only('modules'));

        $tutoring->modules()->sync($modules);
        $tutoring->users()->sync([$this->currentUser->id]);

        return redirect(action('TutoringController@index'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $lessonsSubjects = $this->currentUser->lessons()->groupBy('subject_id')->lists('subject_id');

        $tutoring = Tutoring::findOrFail($id);
        $subjects = Subject::whereIn('id', array_flatten($lessonsSubjects))->get();
        $modules  = Module::whereIn('subject_id', array_flatten($subjects->lists('id')))->get()->map(function ($module) {
            return (object) ['id' => $module->id, 'name' => "N. {$module->num} - {$module->short_description}", 'subject_id' => $module->subject_id];
        });
        $classes  = $this->currentUser->lessons()->groupBy('class_id')->get()->map(function ($lesson) {
            return $lesson->schoolClass;
        });

        return view('tutoring.edit', compact('tutoring', 'subjects', 'modules', 'classes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TutoringRequest $request
     * @param  int $id
     *
     * @return Response
     */
    public function update(TutoringRequest $request, $id)
    {
        $tutoring = Tutoring::findOrFail($id);
        $modules  = array_flatten($request->only('modules'));

        $tutoring->update($request->only(['class_id', 'date', 'start_time', 'end_time']));
        $tutoring->modules()->sync($modules);

        return redirect(action('TutoringController@index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $this->currentUser->tutoring()->find($id)->delete();

        return redirect(action('TutoringController@index'));
    }

}
