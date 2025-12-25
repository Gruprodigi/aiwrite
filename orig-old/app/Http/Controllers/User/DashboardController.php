<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Lang;
use App\Models\Option;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $openAi_api_key = env('OPENAI_API_KEY');

        if($request->favorite)
        {
            $documents = Document::latest()->where([
                ['user_id', Auth::User()->id],
                ['is_favourite', 1]
            ])->paginate(10);
        }else{
            $documents = Document::latest()->where('user_id', Auth::User()->id)->paginate(10);
        }

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        $langs = Lang::where('status', 'approved')->get();

        return Inertia::render('User/Dashboard',[
            'openAi_api_key' => $openAi_api_key,
            'documents' => $documents,
            'logo' => $settings->site_logo,
            'langs' => $langs
        ]);
    }
}
