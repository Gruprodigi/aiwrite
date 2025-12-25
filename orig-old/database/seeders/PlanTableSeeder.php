<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plans = array(
            array('id' => '1','name' => 'Starter Plan','slug' => 'starter-plan','word_limit' => '1000','price' => '8.99','duration_type' => 'monthly','data' => '{"customerSupport":"0","short_content":"It is a long established fact that a reader will be distracted.","api_id":"price_1MLRdSBtOV9TPFO6WhVX8ban"}','status' => 'approved','is_trial' => '0','created_at' => '2023-01-01 17:17:12','updated_at' => '2023-01-21 13:08:16'),
            array('id' => '2','name' => 'Standard Plan','slug' => 'standard-plan','word_limit' => '2000','price' => '14.99','duration_type' => 'monthly','data' => '{"customerSupport":"1","short_content":"It is a long established fact that a reader will be distracted.","api_id":"price_1MLRdSBtOV9TPFO6WhVX8ban"}','status' => 'approved','is_trial' => '0','created_at' => '2023-01-21 13:09:46','updated_at' => '2023-01-21 13:09:54'),
            array('id' => '3','name' => 'Premium Plan','slug' => 'premium-plan','word_limit' => '5000','price' => '28.99','duration_type' => 'monthly','data' => '{"customerSupport":"1","short_content":"It is a long established fact that a reader will be distracted.","api_id":"price_1MLRdSBtOV9TPFO6WhVX8ban"}','status' => 'approved','is_trial' => '0','created_at' => '2023-01-21 13:10:31','updated_at' => '2023-01-21 13:10:31')
          );

        Plan::insert($plans);

    }
}
