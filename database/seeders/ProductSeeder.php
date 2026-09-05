<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $products = [
            [
                'category' => 'Burgers',
                'name' => 'Classic Beef Burger',
                'description' => 'Beef patty with lettuce, tomato, onion, and house sauce.',
                'price' => 8.50,
                'stock' => 25,
            ],
            [
                'category' => 'Burgers',
                'name' => 'Crispy Chicken Burger',
                'description' => 'Crispy chicken fillet with lettuce and spicy mayo.',
                'price' => 7.50,
                'stock' => 20,
            ],
            [
                'category' => 'Pizza',
                'name' => 'Margherita Pizza',
                'description' => 'Tomato sauce, mozzarella, and fresh basil.',
                'price' => 10.00,
                'stock' => 15,
            ],
            [
                'category' => 'Pizza',
                'name' => 'Chicken BBQ Pizza',
                'description' => 'Chicken, mozzarella, onion, and BBQ sauce.',
                'price' => 12.50,
                'stock' => 12,
            ],
            [
                'category' => 'Pasta',
                'name' => 'Creamy Alfredo Pasta',
                'description' => 'Creamy Alfredo sauce with pasta and parmesan.',
                'price' => 9.50,
                'stock' => 18,
            ],
            [
                'category' => 'Pasta',
                'name' => 'Spicy Chicken Pasta',
                'description' => 'Pasta with spicy tomato sauce and grilled chicken.',
                'price' => 10.50,
                'stock' => 16,
            ],
            [
                'category' => 'Drinks',
                'name' => 'Cola',
                'description' => 'Chilled carbonated soft drink.',
                'price' => 2.00,
                'stock' => 50,
            ],
            [
                'category' => 'Drinks',
                'name' => 'Fresh Orange Juice',
                'description' => 'Freshly squeezed orange juice.',
                'price' => 3.50,
                'stock' => 30,
            ],
            [
                'category' => 'Desserts',
                'name' => 'Chocolate Cake',
                'description' => 'Rich chocolate cake with chocolate frosting.',
                'price' => 5.00,
                'stock' => 10,
            ],
            [
                'category' => 'Desserts',
                'name' => 'Vanilla Ice Cream',
                'description' => 'Creamy vanilla ice cream.',
                'price' => 3.50,
                'stock' => 20,
            ],
            [
                'category' => 'Salads',
                'name' => 'Caesar Salad',
                'description' => 'Romaine lettuce, parmesan, croutons, and Caesar dressing.',
                'price' => 6.50,
                'stock' => 14,
            ],
            [
                'category' => 'Salads',
                'name' => 'Greek Salad',
                'description' => 'Tomato, cucumber, olives, feta cheese, and herbs.',
                'price' => 6.00,
                'stock' => 14,
            ],
        ];

        foreach ($products as $productData) {
            $category = Category::where('name', $productData['category'])->firstOrFail();

            Product::create([
                'category_id' => $category->id,
                'name' => $productData['name'],
                'description' => $productData['description'],
                'price' => $productData['price'],
                'stock' => $productData['stock'],
                'is_active' => true,
            ]);
        }
    }
}