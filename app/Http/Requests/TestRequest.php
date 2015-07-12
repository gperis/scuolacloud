<?php namespace SC\Http\Requests;

class TestRequest extends Request
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
            'class_id'  => 'required|exists:classes,id',
            'module_id' => 'required|exists:modules,id',
            'date'      => 'required|date_format:"d/m/Y"|after:' . date('d/m/Y'),
        ];
    }

}
