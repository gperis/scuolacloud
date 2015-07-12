<?php namespace SC\Http\Controllers;

use SC\ClassTerm;
use SC\Http\Requests;
use SC\Http\Requests\ClassTermRequest;

class ClassTermController extends BackendController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $terms = ClassTerm::all();

        return view('term.index', compact('terms'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('term.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ClassTermRequest $request
     *
     * @return Response
     */
    public function store(ClassTermRequest $request)
    {
        ClassTerm::create($request->all());

        return redirect(action('ClassTermController@index'));
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
        $term = ClassTerm::findOrFail($id);

        return view('term.edit', compact('term'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ClassTermRequest $request
     * @param int $id
     *
     * @return Response
     */
    public function update(ClassTermRequest $request, $id)
    {
        ClassTerm::findOrFail($id)->update($request->all());

        return redirect(action('ClassTermController@index'));
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
        ClassTerm::destroy($id);

        return redirect(action('ClassTermController@index'));
    }

}
