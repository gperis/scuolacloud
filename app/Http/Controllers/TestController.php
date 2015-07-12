<?php namespace SC\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use SC\Http\Requests;
use SC\Http\Requests\TestRequest;
use SC\Module;
use SC\Subject;
use SC\Test;

class TestController extends BackendController
{

    protected $teacherSubjects;

    public function __construct(Auth $auth)
    {
        parent::__construct($auth);

        $lessonsSubjects       = $this->currentUser->lessons()->groupBy('subject_id')->lists('subject_id');
        $this->teacherSubjects = Subject::whereIn('id', array_flatten($lessonsSubjects))->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $tests = $this->currentUser->tests()->toDo()->orderBy('date', 'asc')->get();

        return view('test.index', compact('tests'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $subjects = $this->teacherSubjects;
        $modules  = Module::whereIn('subject_id', array_flatten($subjects->lists('id')))->get()->map(function ($module) {
            return ['id' => $module->id, 'name' => "N. {$module->num} - {$module->short_description}"];
        });
        $classes  = $this->currentUser->lessons()->groupBy('class_id')->get()->map(function ($lesson) {
            return $lesson->schoolClass;
        });

        return view('test.create', compact('subjects', 'modules', 'classes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TestRequest $request
     *
     * @return Response
     */
    public function store(TestRequest $request)
    {
        $this->currentUser->tests()->create($request->all());

        return redirect(action('TestController@index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $test     = $this->currentUser->tests()->findOrFail($id);
        $results  = $test->results->keyBy('user_id');
        $students = $test->schoolClass->students;

        return view('test.show', compact('test', 'students', 'results'));
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
        $test     = $this->currentUser->tests()->findOrFail($id);
        $subjects = $this->teacherSubjects;
        $modules  = Module::whereIn('subject_id', array_flatten($subjects->lists('id')))->get()->map(function ($module) {
            return ['id' => $module->id, 'name' => "N. {$module->num} - {$module->short_description}"];
        });
        $classes  = $this->currentUser->lessons()->groupBy('class_id')->get()->map(function ($lesson) {
            return $lesson->schoolClass;
        });

        return view('test.edit', compact('test', 'modules', 'classes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TestRequest $request
     * @param  int $id
     *
     * @return Response
     */
    public function update(TestRequest $request, $id)
    {
        Test::findOrFail($id)->update($request->all());

        return redirect(action('TestController@index'));
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
        $this->currentUser->tests()->find($id)->delete();

        return redirect(action('TestController@index'));
    }

}
