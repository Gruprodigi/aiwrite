<?php

namespace App\Http\Livewire\Admin\User;

use App\Models\Plan;
use App\Models\User;
use App\Models\Usermeta;
use Carbon\Carbon;
use Hash;
use Livewire\Component;
use Illuminate\Support\Str;

class Create extends Component
{

    public $name, $email, $password, $password_confirmation, $status;
    public $plans, $wordLimit, $current_plan;

    protected $rules = [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|confirmed',
        'wordLimit' => 'required|numeric'
    ];

    public function mount()
    {
        $this->current_plan = Plan::first()->id;

        $plans = Plan::latest()->get();
        $this->plans = $plans;
    }

    public function store()
    {
        $this->validate();

        $plan = Plan::where([
            ['status', 'approved'],
            ['id', $this->current_plan]
        ])->first();

        $info = json_decode($plan->value);

        $data = [
            'wordCount' => $this->wordLimit ?? $plan->word_limit,
            'customerSupport' => $info->customerSupport ?? 0,
            'current_word' => 0
        ];

        if($plan->duration_type == 'monthly')
        {
            $will_expire = Carbon::now()->addDays(30);
        }else{
            $will_expire = Carbon::now()->addDays(365);
        }

        $user = new User();
        $user->name = $this->name;
        $user->plan_id = $this->current_plan;
        $user->email = $this->email;
        $user->password = Hash::make($this->password);
        $user->status = $this->status ?? 'active';
        $user->will_expire = $will_expire;
        $user->data = json_encode($data);
        $user->save();

        return redirect()->route('admin.user.index');
    }

    public function render()
    {
        return view('livewire.admin.user.create');
    }
}
