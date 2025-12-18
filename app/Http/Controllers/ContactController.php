<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Option;
use App\Models\Term;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menuitems = menu('header');

        $footer_first_menuitems = menu('footer_first');
        $footer_second_menuitems = menu('footer_second');
        $footer_third_menuitems = menu('footer_third');
        $footer_four_menuitems = menu('footer_four');

        $hero = json_decode(Option::where('key','hero_data')->first()->value);

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        $seo_contact = Term::with('seometa')->where([
            ['slug', 'contact'],
            ['type', 'seo']
        ])->first();

        return Inertia::render('Contact', [
            'menuitems' => $menuitems,
            'footer_first_menuitems' => $footer_first_menuitems,
            'footer_second_menuitems' => $footer_second_menuitems,
            'footer_third_menuitems' => $footer_third_menuitems,
            'footer_four_menuitems' => $footer_four_menuitems,
            'hero' => $hero,
            'settings' => $settings,
            'seo_contact' => $seo_contact
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @return \Illuminate\Http\Response
    */

    public function store(Request $request)
    {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message
        ];
        Mail::to(env('MAIL_TO'))->send(new ContactMail($data));

        return redirect()->back();
    }


}
