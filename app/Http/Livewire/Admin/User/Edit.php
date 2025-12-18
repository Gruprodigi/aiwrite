<?php

namespace App\Http\Livewire\Admin\User;

use DB;
use Hash;
use App\Models\User;
use Livewire\Component;
use App\Models\Usermeta;
use App\Models\Plan;
use Carbon\Carbon;

class Edit extends Component
{

    public $user, $name, $email, $status, $password, $password_confirmation;
    public $plans, $wordLimit, $current_plan;

    public function mount($id)
    {


        $user = User::find($id);
        $info = json_decode($user->data);

        $this->user = $user;
        $this->fill([
            'name' => $user->name,
            'email' => $user->email,
            'wordLimit' => $info->wordCount ?? 0
        ]);

        $this->status = $user->status;
        $this->current_plan = $user->plan_id;
        $plans = Plan::latest()->get();
        $this->plans = $plans;
    }

    public function update($id)
    {
        $this->validate([
            'name' => 'required',
            'email' => 'unique:users,email,'.$this->user->id
        ]);

        if($this->password)
        {
            $this->validate([
                'password' => 'required|confirmed'
            ]);
        }

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

        $user = User::find($id);
        $user->name = $this->name ?? $user->name;
        $user->email = $this->email ?? $user->email;
        if($this->password)
        {
            $user->password = Hash::make($this->password);
        }
        $user->will_expire = $will_expire;
        $user->status = $this->status ?? $user->status;
        $user->data = json_encode($data);
        $user->save();



        return redirect()->route('admin.user.index');


    }

    public function render()
    {
        return view('livewire.admin.user.edit');
    }
}
