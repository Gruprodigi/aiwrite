<?php

namespace App\Http\Livewire\Admin\Transcation;

use App\Models\Transcation;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{

    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public function change_status()
    {
        if($this->status)
        {
            if($this->status == 'delete')
            {
                foreach($this->checklistId as $value)
                {
                    Transcation::find($value)->delete();
                    $this->checklistId = [];
                }
            }
        }
    }

    public $status;
    public $checklistId = [];
    public $search;
    public $filter_status;

    public function render()
    {
        $searchTerm = '%'.$this->search.'%';
        if($this->filter_status)
        {
            if($this->filter_status == 'all')
            {
                $transcations = Transcation::where([
                    ['trx_id','like', $searchTerm]
                ])->latest()->paginate(20);
            }else{
                $transcations = Transcation::where([
                    ['trx_id','like', $searchTerm],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }
            
        }else{
            $transcations = Transcation::where([
                ['trx_id','like', $searchTerm]
            ])->latest()->paginate(20); 
        }

        return view('livewire.admin.transcation.index',[
            'transcations' => $transcations
        ]);
    }
}
