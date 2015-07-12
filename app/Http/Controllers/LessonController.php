<?php namespace SC\Http\Controllers;

use SC\Group;
use SC\Http\Requests;
use SC\Http\Requests\LessonRequest;
use SC\Lesson;
use SC\SchoolClass;
use SC\Subject;
use SC\User;

class LessonController extends BackendController
{

    /**
     * Display a listing of the resource.
     *
     * @param int $teacherId
     *
     * @return Response
     */
    public function index($teacherId)
    {
        $teacher = User::findOrFail($teacherId);
        $lessons = $teacher->lessons()->get();

        return view('lesson.index', compact('teacher', 'lessons'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param $teacherId
     *
     * @return Response
     */
    public function create($teacherId)
    {
        $teacher    = User::findOrFail($teacherId);
        $adTeachers = Group::findOrFail(3)->users->except($teacherId)->map(function ($user) {
            return ['id' => $user->id, 'name' => $user->fullName()];
        });
        $subjects   = Subject::all();
        $days       = Lesson::getDays();
        $classes    = SchoolClass::all();

        return view('lesson.create', compact('teacher', 'subjects', 'days', 'classes', 'adTeachers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param LessonRequest $request
     * @param $teacherId
     *
     * @return Response
     */
    public function store(LessonRequest $request, $teacherId)
    {
        foreach ($request->input('dow') as $day) {
            $fields    = [
                'dow'        => $day,
                'class_id'   => $request->input('class_id'),
                'subject_id' => $request->input('subject_id'),
                'start_time' => $request->input('start_time_' . $day),
                'end_time'   => $request->input('end_time_' . $day),
            ];
            $adTeacher = $request->input('ad_teacher_' . $day);

            $lesson = Lesson::create($fields);
            $lesson->teachers()->attach($teacherId);

            if ( ! empty($adTeacher))
                $lesson->teachers()->attach($adTeacher);
        }

        return redirect(action('LessonController@index', [$teacherId]));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param $teacherId
     * @param $lessonId
     *
     * @return Response
     */
    public function edit($teacherId, $lessonId)
    {
        $teacher    = User::findOrFail($teacherId);
        $lesson     = Lesson::findOrFail($lessonId);
        $subjects   = Subject::all();
        $classes    = SchoolClass::all();
        $days       = Lesson::getDays();
        $adTeachers = Group::findOrFail(3)->users->except($teacherId)->map(function ($user) {
            return ['id' => $user->id, 'name' => $user->fullName()];
        });
        $adTeacher  = $lesson->teachers->except($teacher->id)->first();

        return view('lesson.edit', compact('teacher', 'lesson', 'subjects', 'classes', 'days', 'adTeachers', 'adTeacher'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param LessonRequest $request
     * @param $teacherId
     * @param $lessonId
     *
     * @return Response
     */
    public function update(LessonRequest $request, $teacherId, $lessonId)
    {
        $lesson    = Lesson::findOrFail($lessonId);
        $adTeacher = $request->input('ad_teacher');

        $lesson->update($request->all());

        if ( ! empty($adTeacher))
            $lesson->teachers()->sync([$teacherId, $adTeacher]);

        return redirect(action('LessonController@index', [$teacherId]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $teacherId
     * @param $lessonId
     *
     * @return Response
     */
    public function destroy($teacherId, $lessonId)
    {
        Lesson::destroy($lessonId);

        return redirect(action('LessonController@index', [$teacherId]));
    }

}
