<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Cake;
use App\Models\CakeCategory;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $user = new User();
        $user->name = 'cuong';
        $user->email = 'cuongbui1203@gmail.com';
        $user->password = Hash::make("cuongbui1203");
        $user->save();

        $this->call([
            createCakeCategory::class,
            createCake::class
        ]);
    }
}
