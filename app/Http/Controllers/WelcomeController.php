<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Option;
use App\Models\Plan;
use App\Models\Term;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Pixamo\Installer\Installer;


class WelcomeController extends Controller
{
    public function index()
    {
        if(Installer::isActive())
        {
            return redirect('install');
        }

        $plans = Plan::where('status', 'approved')->get();
        $hero = json_decode(Option::where('key','hero_data')->first()->value);
        $brands = Term::where([
            ['type', 'brand'],
            ['status', 'approved']
        ])->get();

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        $usecases = Term::with('useCaseMeta')->where([
            ['status', 'approved'],
            ['type', 'useCase']
        ])->get();

        $howitworks = json_decode(Option::where('key', 'howItWorks')->first()->value);

        $level = json_decode(Option::where('key', 'level')->first()->value);

        $menuitems = menu('header');

        $footer_first_menuitems = menu('footer_first');
        $footer_second_menuitems = menu('footer_second');
        $footer_third_menuitems = menu('footer_third');
        $footer_four_menuitems = menu('footer_four');

        $currency = Option::where('key','currency_symbol')->first();

        $seo_home = Term::with('seometa')->where([
            ['slug', 'home'],
            ['type', 'seo']
        ])->first();

        return Inertia::render('Welcome',[
            'plans' => $plans,
            'hero' => $hero,
            'brands' => $brands,
            'settings' => $settings,
            'usecases' => $usecases,
            'howitworks' => $howitworks,
            'level' => $level,
            'menuitems' => $menuitems,
            'footer_first_menuitems' => $footer_first_menuitems,
            'footer_second_menuitems' => $footer_second_menuitems,
            'footer_third_menuitems' => $footer_third_menuitems,
            'footer_four_menuitems' => $footer_four_menuitems,
            'seo_home' => $seo_home,
            'currency' => $currency->value
        ]);
    }

    public function page($slug)
    {
        $page = Term::with('pagemeta')->where([
            ['type', 'page'],
            ['status', 'approved'],
            ['slug', $slug]
        ])->first();

        if(!$page)
        {
            return abort(404);
        }

        $hero = json_decode(Option::where('key','hero_data')->first()->value);

        $menuitems = menu('header');

        $footer_first_menuitems = menu('footer_first');
        $footer_second_menuitems = menu('footer_second');
        $footer_third_menuitems = menu('footer_third');
        $footer_four_menuitems = menu('footer_four');

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        return Inertia::render('Pageshow', [
            'settings' => $settings,
            'menuitems' => $menuitems,
            'footer_first_menuitems' => $footer_first_menuitems,
            'footer_second_menuitems' => $footer_second_menuitems,
            'footer_third_menuitems' => $footer_third_menuitems,
            'footer_four_menuitems' => $footer_four_menuitems,
            'hero' => $hero,
            'page' => $page
        ]);
    }
}
