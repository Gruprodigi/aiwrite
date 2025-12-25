<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'wordCount' => 500,
            'customerSupport' => 0,
            'current_word' => 0
        ];

        User::create([
            'user_type' => 'user',
            'plan_id' => 1,
            'name' => 'Arafat Hossain',
            'email' => 'user@gmail.com',
            'data' => json_encode($data),
            'password' => Hash::make('rootadmin'),
        ]);

        User::create([
            'user_type' => 'admin',
            'plan_id' => 1,
            'name' => 'Admin Hossain',
            'email' => 'admin@gmail.com',
            'data' => json_encode($data),
            'password' => Hash::make('rootadmin'),
        ]);
    }
}
