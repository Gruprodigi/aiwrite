<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Models\Plan;
use App\Models\Term;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingController extends Controller
{
    public function index()
    {
        $menuitems = menu('header');

        $footer_first_menuitems = menu('footer_first');
        $footer_second_menuitems = menu('footer_second');
        $footer_third_menuitems = menu('footer_third');
        $footer_four_menuitems = menu('footer_four');

        $hero = json_decode(Option::where('key','hero_data')->first()->value);

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);
        $plans = Plan::where('status', 'approved')->get();

        $seo_pricing = Term::with('seometa')->where([
            ['slug', 'pricing'],
            ['type', 'seo']
        ])->first();

        $currency = Option::where('key','currency_symbol')->first();


        return Inertia::render('Pricing', [
            'plans' => $plans,
            'settings' => $settings,
            'hero' => $hero,
            'menuitems' => $menuitems,
            'footer_first_menuitems' => $footer_first_menuitems,
            'footer_second_menuitems' => $footer_second_menuitems,
            'footer_third_menuitems' => $footer_third_menuitems,
            'footer_four_menuitems' => $footer_four_menuitems,
            'seo_pricing' => $seo_pricing,
            'currency' => $currency->value
        ]);
    }
}
