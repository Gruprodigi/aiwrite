<?php

namespace App\Http\Livewire\Admin;

use App\Http\Livewire\Cart;
use App\Models\Option;
use Carbon\Carbon;
use App\Models\Order;
use App\Models\Product;
use App\Models\Transcation;
use App\Models\User;
use Livewire\Component;

class Dashboard extends Component
{

    public $monthly_revenue, $total_revenue, $currency;
    public $monthly_customers, $revenue_monthly, $monthly_transaction;
    public $all_transactions;
    public $all_customers;

    public function mount()
    {
        for ($i=1; $i < 13; $i++) {
            $monthly_revenue[] = Transcation::where([
                ['status','approved'],

            ])->whereMonth('created_at', $i)->sum('amount');
        }

        $this->monthly_revenue = json_encode($monthly_revenue);

        $total_revenue = Transcation::where([
            ['status','approved'],
        ])->sum('amount');

        $this->total_revenue = $total_revenue;

        $currency = Option::where('key','currency_symbol')->first();

        $this->currency = $currency->value;

        $monthly_customers = User::where('user_type','user')->whereMonth('created_at', Carbon::now()->month)->count();

        $this->monthly_customers = $monthly_customers;

        $revenue_monthly = Transcation::whereMonth('created_at', Carbon::now()->month)->sum('amount');

        $this->revenue_monthly = $revenue_monthly;

        $monthly_transaction = Transcation::whereMonth('created_at', Carbon::now()->month)->count();

        $this->monthly_transaction = $monthly_transaction;

        $all_transactions = Transcation::latest()->take(20)->get();
        $this->all_transactions = $all_transactions;

        $all_customers = User::where('user_type', 'user')->latest()->take(20)->get();
        $this->all_customers = $all_customers;

    }

    public function render()
    {

        return view('livewire.admin.dashboard');
    }
}
