<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProcesszorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'gyarto' => ['required', Rule::in(['AMD', 'Intel'])],
            'tipus' => 'required|string',
            'orajel' => 'required|numeric|between:1,5',
            'architektura' => ['required', Rule::in(['x86', 'x64', 'IA-64', 'ARM'])],
            'megjelenes_datuma' => 'required|date'
        ];
    }
    public function messages()
    {
        return [
            'gyarto.in' => 'The :attribute must be either AMD or Intel.',
            'architektura.in' => 'The :attribute must be one of: x86, x64, IA-64, ARM.',
        ];
    }
}
