<?php namespace SC\Http\Requests;

class UserRequest extends Request
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
            'ssn'               => 'required|alpha_num|size:16|unique:users,ssn,' . $this->route('user') . ',id',
            'email'             => 'required|email|unique:users,email,' . $this->route('user') . ',id',
            'password'          => 'required|min:6|confirmed',
            'first_name'        => 'required|min:2|max:50',
            'last_name'         => 'required|min:2|max:50',
            'gender'            => 'required|in:m,f',
            'birthdate'         => 'required|date_format:"d/m/Y"',
            'birth_location_id' => 'required|exists:geo_places,woeid',
            'res_location_id'   => 'required|exists:geo_places,woeid',
            'primary_group'     => 'required|exists:groups,id',
            'secondary_group'   => 'array|exists:groups,id',
        ];

        if ($this->method() == 'PUT') {
            $rules['password'] = 'min:6|confirmed';
        }

        return $rules;
    }

}
