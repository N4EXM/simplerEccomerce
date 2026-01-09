<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory()->create([
            'product_image' => 'headphone1.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'headphone2.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'laptop1.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'laptop2.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'smart1.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'smart2.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'smartphone1.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'smartphone2.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'tablet1.jpg'
        ]);
        Product::factory()->create([
            'product_image' => 'tablet2.jpg'
        ]);
    }
}
