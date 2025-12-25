<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Option;
use App\Models\Plan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PlanController extends Controller
{
    public function index()
    {
        $plans = Plan::where([
            'status' => 'approved'
        ])->get();
        $user = Auth::User();

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);

        $currency = Option::where('key','currency_symbol')->first();

        return Inertia::render('User/Plan', [
            'plans' => $plans,
            'user' => $user,
            'logo' => $settings->site_logo,
            'currency' => $currency->value
        ]);
    }

    public function check(){

        $user = Auth::user();
        $data = json_decode($user->data);

        if($user->will_expire <= Carbon::now())
        {
            return response()->json(['errors' => "We noticed that your subscription has expired. If you'd like to continue using our service, please renew your subscription."], 401);
        }

        if($data->current_word >= $data->wordCount)
        {
            return response()->json(['errors' => "You have exceeded the usage limit for your subscription. Please upgrade to continue using our service."], 401);
        }
    }
}
