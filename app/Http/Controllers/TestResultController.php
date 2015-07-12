<?php namespace SC\Http\Controllers;

use SC\Http\Requests;
use SC\Http\Requests\TestResultRequest;
use SC\Test;
use SC\TestResult;
use SC\User;

class TestResultController extends Controller
{
    public function update(TestResultRequest $request, $id)
    {
        $user   = User::findOrFail($request->input('row_id'));
        $test   = Test::findOrFail($id);
        $result = TestResult::where('user_id', $user->id)->where('test_id', $test->id);
        $score  = $request->input('value');

        if ($result->count()) {
            if ( ! empty($score))
                $result->update(['score' => $score]);
            else
                $result->delete();
        } else {
            TestResult::create(['user_id' => $user->id, 'test_id' => $test->id, 'score' => $score]);
        }

        return $request->input('value');
    }
}
