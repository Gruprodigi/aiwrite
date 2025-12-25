<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Option;
use App\Models\Plan;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);
        return Inertia::render('Auth/Register', [
            'logo' => $settings->site_logo
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $plan = Plan::where('is_trial', 1)->first();

        if($plan)
        {
            $info = json_decode($plan->data);

            $data = [
                'wordCount' => $info->trial_word,
                'customerSupport' => $info->customerSupport,
                'current_word' => 0
            ];

            $will_expire = Carbon::now()->addDays($info->trial_period);
        }else{

            $first_plan = Plan::first();

            $data = [
                'wordCount' => $first_plan->word_limit ?? 500,
                'customerSupport' => 0,
                'current_word' => 0
            ];

            if($first_plan->duration_type == 'monthly')
            {
                $will_expire = Carbon::now()->addDays(30);
            }else{
                $will_expire = Carbon::now()->addDays(365);
            }
        }

        $user = new User();
        $user->plan_id = 1;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->will_expire = $will_expire;
        $user->password = Hash::make($request->password);
        $user->data = json_encode($data);
        $user->save();

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
