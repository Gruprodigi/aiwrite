<?php

namespace Database\Seeders;

use App\Models\Menu;
use App\Models\Menuitems;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ManuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = array(
            array('id' => '1','name' => 'Header','position' => 'header','lang' => 'en','status' => 'approved','created_at' => '2023-01-20 19:29:03','updated_at' => '2023-01-20 19:29:03'),
            array('id' => '2','name' => 'Product','position' => 'footer_first','lang' => 'en','status' => 'approved','created_at' => '2023-01-21 14:39:17','updated_at' => '2023-01-21 14:39:17'),
            array('id' => '3','name' => 'Use Cases','position' => 'footer_second','lang' => 'en','status' => 'approved','created_at' => '2023-01-21 14:39:44','updated_at' => '2023-01-21 14:39:44'),
            array('id' => '4','name' => 'Support','position' => 'footer_third','lang' => 'en','status' => 'approved','created_at' => '2023-01-21 14:40:08','updated_at' => '2023-01-21 14:40:08'),
            array('id' => '5','name' => 'Resources','position' => 'footer_four','lang' => 'en','status' => 'approved','created_at' => '2023-01-21 14:40:42','updated_at' => '2023-01-21 14:40:42')
          );


        Menu::insert($menus);


        $menuitems = array(
            array('id' => '6','menu_id' => '1','parent_id' => NULL,'order' => '1','name' => 'Use Cases','data' => '{"url":"#","target":"_self"}','created_at' => '2023-01-21 14:17:08','updated_at' => '2023-01-21 14:17:40'),
            array('id' => '7','menu_id' => '1','parent_id' => '6','order' => '1','name' => 'Blog Idea & Outline','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:17:38','updated_at' => '2023-01-21 14:17:40'),
            array('id' => '8','menu_id' => '1','parent_id' => NULL,'order' => '2','name' => 'Resources','data' => '{"url":"#","target":"_self"}','created_at' => '2023-01-21 14:18:01','updated_at' => '2023-01-21 14:33:49'),
            array('id' => '9','menu_id' => '1','parent_id' => NULL,'order' => '3','name' => 'Pricing','data' => '{"url":"\\/pricing","target":"_self"}','created_at' => '2023-01-21 14:18:17','updated_at' => '2023-01-21 14:33:49'),
            array('id' => '10','menu_id' => '1','parent_id' => NULL,'order' => '4','name' => 'Blogs','data' => '{"url":"\\/blogs","target":"_self"}','created_at' => '2023-01-21 14:18:29','updated_at' => '2023-01-21 14:33:49'),
            array('id' => '11','menu_id' => '1','parent_id' => NULL,'order' => '5','name' => 'Contact','data' => '{"url":"\\/contact","target":"_self"}','created_at' => '2023-01-21 14:18:38','updated_at' => '2023-01-21 14:33:49'),
            array('id' => '12','menu_id' => '1','parent_id' => '6','order' => '2','name' => 'Blog Section Writing','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:20:41','updated_at' => '2023-01-21 14:20:45'),
            array('id' => '13','menu_id' => '1','parent_id' => '6','order' => '3','name' => 'Business Ideas','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:21:05','updated_at' => '2023-01-21 14:21:08'),
            array('id' => '14','menu_id' => '1','parent_id' => '6','order' => '4','name' => 'Cover Letter','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:21:22','updated_at' => '2023-01-21 14:21:26'),
            array('id' => '15','menu_id' => '1','parent_id' => '6','order' => '5','name' => 'Facebook, Twitter Ads','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:23:13','updated_at' => '2023-01-21 14:23:16'),
            array('id' => '16','menu_id' => '1','parent_id' => '6','order' => '6','name' => 'Post & Caption Ideas','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:23:55','updated_at' => '2023-01-21 14:33:44'),
            array('id' => '17','menu_id' => '1','parent_id' => '6','order' => '7','name' => 'Product Description','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:24:13','updated_at' => '2023-01-21 14:33:46'),
            array('id' => '18','menu_id' => '1','parent_id' => '6','order' => '8','name' => 'SEO Meta Description','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:24:28','updated_at' => '2023-01-21 14:33:49'),
            array('id' => '19','menu_id' => '1','parent_id' => '6','order' => '9','name' => 'SEO Meta Title','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:24:44','updated_at' => '2023-01-21 14:33:51'),
            array('id' => '20','menu_id' => '1','parent_id' => '6','order' => '10','name' => 'Video Description','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:25:03','updated_at' => '2023-01-21 14:33:53'),
            array('id' => '21','menu_id' => '1','parent_id' => '8','order' => '1','name' => 'Register','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:34:20','updated_at' => '2023-01-21 14:34:36'),
            array('id' => '22','menu_id' => '1','parent_id' => '8','order' => '2','name' => 'Login','data' => '{"url":"\\/login","target":"_self"}','created_at' => '2023-01-21 14:34:30','updated_at' => '2023-01-21 14:34:38'),
            array('id' => '23','menu_id' => '1','parent_id' => '8','order' => '3','name' => 'User Dashboard','data' => '{"url":"\\/user\\/dashboard","target":"_self"}','created_at' => '2023-01-21 14:35:16','updated_at' => '2023-01-21 14:35:20'),
            array('id' => '24','menu_id' => '2','parent_id' => NULL,'order' => '100','name' => 'Pricing','data' => '{"url":"\\/pricing","target":"_self"}','created_at' => '2023-01-21 14:42:23','updated_at' => '2023-01-21 14:42:23'),
            array('id' => '25','menu_id' => '2','parent_id' => NULL,'order' => '100','name' => 'Use Free AI Tools','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:43:05','updated_at' => '2023-01-21 14:43:05'),
            array('id' => '26','menu_id' => '2','parent_id' => NULL,'order' => '100','name' => 'Start Writing For Free','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:44:18','updated_at' => '2023-01-21 14:44:18'),
            array('id' => '27','menu_id' => '2','parent_id' => NULL,'order' => '100','name' => 'User Dashboard','data' => '{"url":"\\/user\\/dashboard","target":"_self"}','created_at' => '2023-01-21 14:45:00','updated_at' => '2023-01-21 14:45:00'),
            array('id' => '28','menu_id' => '3','parent_id' => NULL,'order' => '100','name' => 'Blog Idea & Outline','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:45:36','updated_at' => '2023-01-21 14:45:36'),
            array('id' => '29','menu_id' => '3','parent_id' => NULL,'order' => '100','name' => 'Blog Section Writing','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:45:47','updated_at' => '2023-01-21 14:45:47'),
            array('id' => '30','menu_id' => '3','parent_id' => NULL,'order' => '100','name' => 'Business Ideas','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:45:57','updated_at' => '2023-01-21 14:45:57'),
            array('id' => '31','menu_id' => '3','parent_id' => NULL,'order' => '100','name' => 'Google Search Ads','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:46:09','updated_at' => '2023-01-21 14:46:09'),
            array('id' => '32','menu_id' => '4','parent_id' => NULL,'order' => '3','name' => 'Contact Us','data' => '{"url":"\\/contact","target":"_self"}','created_at' => '2023-01-21 14:46:41','updated_at' => '2023-01-21 14:47:37'),
            array('id' => '33','menu_id' => '4','parent_id' => NULL,'order' => '1','name' => 'Register','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:46:57','updated_at' => '2023-01-21 14:47:37'),
            array('id' => '34','menu_id' => '4','parent_id' => NULL,'order' => '2','name' => 'Login','data' => '{"url":"\\/login","target":"_self"}','created_at' => '2023-01-21 14:47:04','updated_at' => '2023-01-21 14:47:37'),
            array('id' => '35','menu_id' => '4','parent_id' => NULL,'order' => '4','name' => 'SEO Meta Description','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:47:28','updated_at' => '2023-01-21 14:49:10'),
            array('id' => '36','menu_id' => '5','parent_id' => NULL,'order' => '100','name' => 'Pricing','data' => '{"url":"\\/pricing","target":"_self"}','created_at' => '2023-01-21 14:48:02','updated_at' => '2023-01-21 14:48:02'),
            array('id' => '37','menu_id' => '5','parent_id' => NULL,'order' => '100','name' => 'Blogs','data' => '{"url":"\\/blogs","target":"_self"}','created_at' => '2023-01-21 14:48:10','updated_at' => '2023-01-21 14:48:10'),
            array('id' => '38','menu_id' => '5','parent_id' => NULL,'order' => '100','name' => 'Product Description','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:48:25','updated_at' => '2023-01-21 14:48:25'),
            array('id' => '39','menu_id' => '5','parent_id' => NULL,'order' => '100','name' => 'Video Idea','data' => '{"url":"\\/register","target":"_self"}','created_at' => '2023-01-21 14:48:46','updated_at' => '2023-01-21 14:48:46')
          );

        Menuitems::insert($menuitems);

    }
}
