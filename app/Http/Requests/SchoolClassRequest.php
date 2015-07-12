<?php namespace SC\Http\Requests;

class SchoolClassRequest extends Request
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

    public function messages()
    {
        return ['name.unique' => "Esiste già questa classe per quest'anno scolastico"];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'term_id' => 'required|integer|exists:class_terms,id',
            'name'    => 'required|unique:classes,name,null,null,term_id,' . $this->input('term_id'),
        ];
    }

}
