<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Getway;
use App\Models\Option;
use App\Models\Plan;
use App\Models\Transcation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

class BillingController extends Controller
{
    public function index()
    {

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);
        $currency = Option::where('key','currency_symbol')->first();
        $transactions = Transcation::latest()->where('user_id', Auth::User()->id)->paginate(20);
        return Inertia::render('User/Billing', [
            'transactions' => $transactions,
            'currency' => $currency->value,
            'logo' => $settings->site_logo
        ]);
    }

    public function payment($id)
    {
        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);
        $plan = Plan::findOrFail($id);
        Session::put('plan_id', $plan->id);
        Session::put('price', $plan->price);
        $gateways = Getway::all();
        $data = [
            'url' => asset('/'),
            'STRIPE_PUBLISHABLE_KEY' => env('STRIPE_PUBLISHABLE_KEY'),
            'PAYPAL_CLIENT_ID' => env('PAYPAL_CLIENT_ID')
        ];
        return Inertia::render('User/SelectPayment', [
            'gateways' => $gateways,
            'data' => $data,
            'plan' => $plan,
            'logo' => $settings->site_logo
        ]);
    }

    public function success(Request $request)
    {

        if(!Session::has('plan_id'))
        {
            return abort(404);
        }

        if($request->status)
        {
            $transaction = new Transcation();
            $transaction->trx_id = Str::random(10);
            $transaction->user_id = Auth::User()->id;
            $transaction->payment_method = $request->method ?? '';
            $transaction->amount = Session::get('price') ?? 0;
            $transaction->status = 'approved';
            $transaction->save();
        }

        $plan_id = Session::get('plan_id');

        $plan = Plan::findOrFail($plan_id);

        $info = json_decode($plan->data);

        $data = [
            'wordCount' => $plan->word_limit,
            'customerSupport' => $info->customerSupport,
            'current_word' => 0
        ];

        if($plan->duration_type == 'monthly')
        {
            $date = 30;
        }else{
            $date = 365;
        }

        $user = Auth::User();
        $user->plan_id = $plan_id;
        $user->will_expire = Carbon::now()->addDays($date);
        $user->data = $data;
        $user->save();

        Session::forget('price');
        Session::forget('plan_id');

        return redirect()->route('user.payment.history');
    }

    public function failed()
    {
        return redirect('user/plan')->withErrors('Your payment has failed. Please try again or contact us for assistance. We apologize for any inconvenience.');
    }

    public function cancel()
    {
        return redirect()->back()->withErrors('Payment cancelled. Please contact us if you have any issues or concerns.');
    }
}
