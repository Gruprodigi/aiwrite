<?php

namespace App\Http\Livewire\Admin\Seo;

use Livewire\Component;
use App\Models\Term;
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
                    Term::find($value)->delete();
                    $this->checklistId = [];
                }
            }else{
                foreach($this->checklistId as $value)
                {
                    $page = Term::find($value);
                    $page->status = $this->status;
                    $page->save();
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
                $seos = Term::where([
                    ['type','seo'],
                    ['name','like', $searchTerm]
                ])->latest()->paginate(20);
            }else{
                $seos = Term::where([
                    ['type','seo'],
                    ['name','like', $searchTerm],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }
            
        }else{
            $seos = Term::where([
                ['type','seo'],
                ['name','like', $searchTerm]
            ])->latest()->paginate(20);
        }

        return view('livewire.admin.seo.index',[
            'seos' => $seos
        ]);
    }
}
