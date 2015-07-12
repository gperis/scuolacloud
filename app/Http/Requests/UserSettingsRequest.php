<?php namespace SC\Http\Requests;

class UserSettingsRequest extends Request
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
            'email'        => 'required|email|unique:users,email,' . $this->user()->id . ',id',
            'old_password' => 'required_with:password,password_confirmation|password_check:' . $this->user()->password,
            'password'     => 'required_with:old_password|confirmed|min:6',
        ];
    }

    public function messages()
    {
        return [
            'old_password.password_check' => 'La vecchia password non è valida',
        ];
    }

}
