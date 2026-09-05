<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $subtotal = fake()->randomFloat(2, 10, 500);
        $tax = round($subtotal * 0.1, 2);
        $total = $subtotal + $tax;
        return [
            'order_number' => 'POS-' . now()->format('Ymd') . '-' . strtoupper(Str::random(6)),
            'subtotal'=> $subtotal,
            'tax' => $tax,
            'total' => $total,
            'payment_method' => fake()->randomElement(['cash', 'card', 'mobile']),
            'status' => 'completed',
        ];
    }
}
