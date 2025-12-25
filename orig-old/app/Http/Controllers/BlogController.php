<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Models\Term;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $menuitems = menu('header');

        $footer_first_menuitems = menu('footer_first');
        $footer_second_menuitems = menu('footer_second');
        $footer_third_menuitems = menu('footer_third');
        $footer_four_menuitems = menu('footer_four');

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        $hero = json_decode(Option::where('key','hero_data')->first()->value);

        $blogs = Term::with('blogmeta')->where([
            ['status', 'approved'],
            ['type', 'blog']
        ])->paginate(9);

        $seo_blog = Term::with('seometa')->where([
            ['slug', 'blogs'],
            ['type', 'seo']
        ])->first();

        return Inertia::render('Blogs',[
            'blogs' => $blogs,
            'settings' => $settings,
            'menuitems' => $menuitems,
            'footer_first_menuitems' => $footer_first_menuitems,
            'footer_second_menuitems' => $footer_second_menuitems,
            'footer_third_menuitems' => $footer_third_menuitems,
            'footer_four_menuitems' => $footer_four_menuitems,
            'hero' => $hero,
            'seo_blog' => $seo_blog
        ]);
    }

    public function show($slug)
    {
        $menuitems = menu('header');

        $footer_first_menuitems = menu('footer_first');
        $footer_second_menuitems = menu('footer_second');
        $footer_third_menuitems = menu('footer_third');
        $footer_four_menuitems = menu('footer_four');

        $hero = json_decode(Option::where('key','hero_data')->first()->value);

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        $blog = Term::with('blogmeta')->where([
            ['slug', $slug],
            ['type', 'blog'],
            ['status', 'approved']
        ])->first();

        if(!$blog)
        {
            return abort(404);
        }

        return Inertia::render('Blogdetails',[
            'blog' => $blog,
            'url' => asset('/'),
            'settings' => $settings,
            'menuitems' => $menuitems,
            'footer_first_menuitems' => $footer_first_menuitems,
            'footer_second_menuitems' => $footer_second_menuitems,
            'footer_third_menuitems' => $footer_third_menuitems,
            'footer_four_menuitems' => $footer_four_menuitems,
            'hero' => $hero
        ]);
    }
}
