<?php

namespace Database\Seeders;

use App\Models\Getway;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GetwayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $getways = array(
            array('id' => '1','name' => 'Paypal','logo' => '/storage/getway/UeT4csqRBGPwsaSgzDWbse3k9DDEltKlnXae0Uod.png','rate' => '1','charge' => '0','namespace' => 'paypal','currency_name' => 'USD','image_accept' => '0','is_auto' => '1','test_mode' => '0','status' => 'approved','phone_required' => '0','instruction' => 'dsdsd','data' => '{"PAYPAL_CLIENT_ID":"dd","PAYPAL_SECRET":"sdsd","PAYPAL_MODE":"sandbox"}','created_at' => '2023-01-26 15:21:40','updated_at' => '2023-01-27 16:43:59'),
            array('id' => '2','name' => 'Stripe','logo' => '/storage/getway/r7BI7r8MlUbO3V0V4gJY8vVzyMIIyzEAFutCrEUZ.png','rate' => '1','charge' => '0','namespace' => 'stripe','currency_name' => 'USD','image_accept' => '0','is_auto' => '1','test_mode' => '0','status' => 'approved','phone_required' => '0','instruction' => '','data' => '{"STRIPE_SECRET_KEY":"","STRIPE_PUBLISHABLE_KEY":""}','created_at' => '2023-01-26 15:21:40','updated_at' => '2023-01-27 16:44:07')
        );

        Getway::insert($getways);


    }
}
