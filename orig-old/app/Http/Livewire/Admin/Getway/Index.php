<?php

namespace App\Http\Livewire\Admin\Getway;

use App\Models\Getway;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{

    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public $status;
    public $checklistId = [];
    public $search;
    public $filter_status;


    public function change_status()
    {
        if($this->status)
        {
            if($this->status == 'delete')
            {
                foreach($this->checklistId as $value)
                {
                    $getway = Getway::find($value);
                    if($getway->is_auto == 0)
                    {
                        $this->checklistId = [];
                        $getway->delete();
                    }else {
                        session()->flash('message', 'You can not delete auto getway');
                    }
                }
            }else{
                foreach($this->checklistId as $value)
                {
                    $page = Getway::find($value);
                    $page->status = $this->status;
                    $page->save();
                    $this->checklistId = [];
                }
            }
        }
    }

    public function render()
    {
        $searchTerm = '%'.$this->search.'%';
        if($this->filter_status)
        {
            if($this->filter_status == 'all')
            {
                $gateways = Getway::where([
                    ['name','like', $searchTerm]
                ])->latest()->paginate(20);
            }else{
                $gateways = Getway::where([
                    ['name','like', $searchTerm],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }
            
        }else{
            $gateways = Getway::where([
                ['name','like', $searchTerm]
            ])->latest()->paginate(20);
        }

        return view('livewire.admin.getway.index',[
            'gateways' => $gateways
        ]);
    }
}
