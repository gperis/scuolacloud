<?php namespace SC\Http\Requests;

class LessonRequest extends Request
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
        $rules = [
            'class_id'    => 'required|exists:classes,id',
            'subject_id'  => 'required|exists:subjects,id',
            'dow'         => 'required|unique:lessons,dow,' . $this->route('lesson') . ',id,class_id,' . $this->input('class_id') . ',subject_id,' . $this->input('subject_id'),
            'add_teacher' => 'exists:users,id',
        ];

        if ($this->method() != 'PUT') {
            foreach ($this->input('dow') as $day) {
                $rules['start_time_' . $day] = 'required|date_format:"H:i"';
                $rules['end_time_' . $day]   = 'required|date_format:"H:i"|after:' . $this->input('start_time_' . $day);
            }
        } else {
            $rules['start_time'] = 'required|date_format:"H:i"';
            $rules['end_time']   = 'required|date_format:"H:i"|after:' . $this->input('start_time');
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'dow.unique' => 'Esiste già una lezione di questa materia in questo giorno',
        ];
    }
}
