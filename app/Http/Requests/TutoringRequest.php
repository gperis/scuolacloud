<?php namespace SC\Http\Requests;

use Carbon\Carbon;

class TutoringRequest extends Request
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
            'subject_id' => 'required|exists:subjects,id',
            'date'       => 'required|date_format:"d/m/Y"|after:' . Carbon::today()->format('d/m/Y'),
            'start_time' => 'required|date_format:"H:i"',
            'end_time'   => 'required|date_format:"H:i"|after:' . $this->input('start_time'),
            'modules'    => 'required|exists:modules,id',
        ];
    }

}
