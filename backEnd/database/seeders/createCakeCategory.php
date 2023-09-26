<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class createCakeCategory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 11; $i++) {
            DB::table('cakeCategory')->insert([[
                'name' => 'loai ' . $i + 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]]);
        }
    }
}
