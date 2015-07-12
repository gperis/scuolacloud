<?php namespace SC\Http\Controllers;

use SC\ClassTerm;
use SC\Http\Requests;
use SC\Http\Requests\SchoolClassRequest;
use SC\SchoolClass;

class SchoolClassController extends BackendController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $classes = SchoolClass::all();

        return view('class.index', compact('classes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $terms = ClassTerm::orderBy('term')->lists('term', 'id');;

        return view('class.create', compact('terms'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param SchoolClassRequest $request
     *
     * @return Response
     */
    public function store(SchoolClassRequest $request)
    {
        SchoolClass::create($request->all());

        return redirect(action('SchoolClassController@index'));
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
        $class    = SchoolClass::findOrFail($id);
        $students = $class->students()->get();


        return view('class.show', compact('class', 'students'));
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
        $class = SchoolClass::findOrFail($id);
        $terms = ClassTerm::orderBy('term')->lists('term', 'id');

        return view('class.edit', compact('terms', 'class'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param SchoolClassRequest $request
     * @param  int $id
     *
     * @return Response
     */
    public function update(SchoolClassRequest $request, $id)
    {
        SchoolClass::findOrFail($id)->update($request->all());

        return redirect(action('SchoolClassController@index'));
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
        SchoolClass::findOrFail($id)->delete();

        return redirect(action('SchoolClassController@index'));
    }

}
