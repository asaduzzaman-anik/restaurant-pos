<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Burgers',
                'description' => 'Freshly prepared burgers and sandwiches.',
            ],
            [
                'name' => 'Pizza',
                'description' => 'Handcrafted pizzas with fresh toppings.',
            ],
            [
                'name' => 'Pasta',
                'description' => 'Classic and modern pasta dishes.',
            ],
            [
                'name' => 'Drinks',
                'description' => 'Cold drinks, juices, and beverages.',
            ],
            [
                'name' => 'Desserts',
                'description' => 'Sweet desserts and treats.',
            ],
            [
                'name' => 'Salads',
                'description' => 'Fresh and healthy salads.',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}