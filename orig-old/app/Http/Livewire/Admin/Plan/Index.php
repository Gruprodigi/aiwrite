<?php

namespace App\Http\Livewire\Admin\Plan;

use App\Models\Option;
use App\Models\Plan;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{

    use WithPagination;
    use LivewireAlert;

    public $status;
    public $checklistId = [];
    public $search;
    public $filter_status;
    public $currency;


    protected $paginationTheme = 'bootstrap';

    public function change_status()
    {
        if($this->status)
        {
            if($this->status == 'delete')
            {

                $plans = Plan::all();

                $all_counts = $plans->count() - 1;

                if($all_counts < 1)
                {
                    $this->alert('error', "Need to add atleast one plan before delete this pla.", [
                        'position' => 'top-end',
                        'timer' => 3000,
                        'toast' => true,
                        'timerProgressBar' => true,
                        'text' => '',
                    ]);

                    return back();
                }

                foreach($this->checklistId as $value)
                {
                    $plan = Plan::findOrFail($value);

                    if($plan->users->count() > 0)
                    {
                        $this->alert('error', "Already active some users on this plan. You can't delete this plan.", [
                            'position' => 'top-end',
                            'timer' => 3000,
                            'toast' => true,
                            'timerProgressBar' => true,
                            'text' => '',
                        ]);

                        return back();
                    }else{
                        Plan::find($value)->delete();
                        $this->checklistId = [];
                    }


                }
            }else{
                foreach($this->checklistId as $value)
                {
                    $page = Plan::find($value);
                    $page->status = $this->status;
                    $page->save();
                    $this->checklistId = [];
                }
            }
        }
    }

    public function mount()
    {
        $currency = Option::where('key','currency_symbol')->first();
        $this->currency = $currency->value;
    }


    public function render()
    {
        $searchPlan = '%'.$this->search.'%';
        if($this->filter_status)
        {
            if($this->filter_status == 'all')
            {
                $plans = Plan::where([
                    ['name','like', $searchPlan]
                ])->latest()->paginate(20);
            }else{
                $plans = Plan::where([
                    ['name','like', $searchPlan],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }

        }else{
            $plans = Plan::where([
                ['name','like', $searchPlan]
            ])->latest()->paginate(20);
        }

        return view('livewire.admin.plan.index',[
            'plans' => $plans
        ]);
    }
}
