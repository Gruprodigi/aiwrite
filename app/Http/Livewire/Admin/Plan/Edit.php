<?php

namespace App\Http\Livewire\Admin\Plan;

use App\Models\Plan;
use Livewire\Component;
use Illuminate\Support\Str;

class Edit extends Component
{
    public $name, $plan, $api_id, $price, $wordCount, $durationType = 'monthly', $wordLimit, $status = 'approved', $customerSupport = 0, $isTrial, $short_content;
    public $trial_word, $trial_period;

    protected $rules = [
        'name' => 'required',
        'price' => 'required',
        'wordCount' => 'required|numeric',
        'short_content' => 'required',
        'api_id' => 'required'
    ];

    public function mount($id)
    {
        $plan = Plan::find($id);
        $this->plan = $plan;
        $info = json_decode($plan->data);
        $this->fill([
            'name' => $plan->name,
            'wordCount' => $plan->word_limit,
            'price' => $plan->price,
            'short_content' => $info->short_content ?? '',
            'api_id' => $info->api_id ?? '',
            'trial_word' => $info->trial_word ?? 0,
            'trial_period' => $info->trial_period ?? 0
        ]);

        $this->status = $plan->status;
        $this->durationType = $plan->duration_type;
        $this->isTrial = $plan->is_trial;
        $this->customerSupport = $info->customerSupport;

    }

    public function update($id)
    {
        $this->validate();

        $plan = Plan::find($id);
        $info = json_decode($plan->data);

        if($this->name)
        {
            $slug = Str::slug($this->name);
            if($plan->slug != $slug)
            {
                $plan_check = Plan::where('slug',$slug)->first();
                if($plan_check)
                {
                    $slug = Str::slug($this->name).Str::random(10);
                }
            }else{
                $slug = $plan->slug;
            }
        }


        $plan->name = $this->name ?? $plan->name;
        $plan->slug = $slug;
        $plan->price = $this->price ?? $plan->price;
        $plan->word_limit = $this->wordCount ?? $plan->word_limit;
        $plan->duration_type = $this->durationType ?? $plan->duration_type;
        if($this->isTrial)
        {
            $this->validate([
                'trial_word' => 'required|numeric',
                'trial_period' => 'required|numeric'
            ]);
            $plan->is_trial = $this->isTrial ?? $plan->is_trial;
        }

        $data = [
            'customerSupport' => $this->customerSupport ?? $info->customerSupport,
            'short_content' => $this->short_content ?? $info->short_content,
            'api_id' => $this->api_id ?? $info->api_id,
            'trial_word' => $this->trial_word ?? 0,
            'trial_period' => $this->trial_period ?? 0
        ];

        $plan->data = json_encode($data);
        $plan->status = $this->status ?? $plan->status;
        $plan->save();


        return redirect()->route('admin.plan.index');

    }

    public function render()
    {
        return view('livewire.admin.plan.edit');
    }
}
