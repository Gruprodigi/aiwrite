<?php

namespace App\Http\Livewire\Admin\Plan;

use App\Models\Plan;
use Livewire\Component;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;


class Create extends Component
{
    public $name, $price, $api_id, $wordCount, $durationType = 'monthly', $wordLimit, $status = 'approved', $customerSupport = 0, $isTrial = 0, $short_content;
    public $trial_word, $trial_period;
    public $is_default;

    protected $rules = [
      'name' => 'required',
      'price' => 'required',
      'wordCount' => 'required|numeric',
      'short_content' => 'required',
      'api_id' => 'required',
    ];

    public function mount()
    {
        $this->is_default = 0;
        $this->isTrial = 0;
    }

    public function store()
    {

        $this->validate();

        $slug = Str::slug($this->name);
        $plan_check = Plan::where('slug',$slug)->first();
        if($plan_check)
        {
            $slug = Str::slug($this->name).Str::random(10);
        }

        if($this->isTrial)
        {
            $this->validate([
                'trial_word' => 'required|numeric'
            ]);
        }

        $plan = new Plan();
        $plan->name = $this->name;
        $plan->slug = $slug;
        $plan->price = $this->price;
        $plan->word_limit = $this->wordCount;
        $plan->duration_type = $this->durationType;
        if($this->isTrial)
        {
           $plan->is_trial = $this->isTrial;
        }

        $data = [
            'customerSupport' => $this->customerSupport,
            'short_content' => $this->short_content,
            'api_id' => $this->api_id,
            'trial_word' => $this->trial_word ?? 0,
            'trial_period' => $this->trial_period ?? 0,
        ];

        $plan->data = json_encode($data);
        $plan->status = $this->status ?? 'approved';
        $plan->save();

        return redirect()->route('admin.plan.index');
    }

    public function render()
    {
        return view('livewire.admin.plan.create');
    }
}
