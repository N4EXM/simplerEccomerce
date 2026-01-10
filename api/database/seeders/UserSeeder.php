<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        // User::factory()->create([
        //     'name' => 'app admin',
        //     'email' => 'appAdmin@example.com',
        //     'user_type' => 'admin',
        //     'password' => bcrypt('admin1234'),
        //     'profile_image' => 'userImage.jpg'
        // ]);

        User::factory()->create([
            'name' => 'John Doe',
            'email' => 'JohnDoe@example.com',
            'user_type' => 'customer',
            'password' => bcrypt('pass1234'),
            'profile_image' => 'user2.jpg'
        ]);

        // User::factory()->count(10)->create();

    }
}
