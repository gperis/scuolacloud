<?php namespace SC\Http\Requests;

class ModuleRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'subject_id'        => 'required|exists:subjects,id',
            'num'               => 'required|integer',
            'short_description' => 'required|min:3|max:255',
            'long_description'  => 'required',
        ];
    }

}
