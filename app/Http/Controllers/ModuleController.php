<?php namespace SC\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use SC\Http\Requests;
use SC\Http\Requests\ModuleRequest;
use SC\Module;
use SC\Subject;

class ModuleController extends BackendController
{
    protected $teacherSubjects;

    public function __construct(Auth $auth)
    {
        parent::__construct($auth);

        $lessonsSubjects       = $this->currentUser->lessons()->groupBy('subject_id')->lists('subject_id');
        $this->teacherSubjects = Subject::whereIn('id', array_Flatten($lessonsSubjects))->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $modules = Module::whereIn('subject_id', array_flatten($this->teacherSubjects->lists('id')))
                         ->orderBy('subject_id')->get();

        return view('module.index', compact('modules'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $subjects = $this->teacherSubjects;

        return view('module.create', compact('subjects'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ModuleRequest $request
     *
     * @return Response
     */
    public function store(ModuleRequest $request)
    {
        Module::create($request->all());

        return redirect(action('ModuleController@index'));
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
        $module   = Module::findOrFail($id);
        $subjects = $this->teacherSubjects;

        return view('module.edit', compact('module', 'subjects'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ModuleRequest $request
     * @param  int $id
     *
     * @return Response
     */
    public function update(ModuleRequest $request, $id)
    {
        Module::findOrFail($id)->update($request->all());

        return redirect(action('ModuleController@index'));
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
        Module::findOrFail($id)->delete();

        return redirect(action('ModuleController@index'));
    }

}
