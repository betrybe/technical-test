<?php

namespace App\Http\Requests;

class CryptoBtcRequest extends BaseRequest
{
    /**
     * Register* Determine if the user is authorized to make this request.
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
            'currency' => 'required|in:BRL,EUR,CAD',
            'value' => 'required|numeric|min:1',
        ];
    }
}
