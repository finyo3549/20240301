<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Processzor>
 */
class ProcesszorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'gyarto' => $this->faker->randomElement(['Intel', 'AMD']),
            'tipus' => $this->faker->word,
            'orajel' => $this->faker->randomFloat(2, 1, 5),
            'architektura' => $this->faker->randomElement(['x86', 'x64', 'IA-64', 'ARM']),
            'megjelenes_datuma' => $this->faker->date(),
        ];
    }
}
