<?php

namespace App\Http\Livewire\Admin\Settings\Brand;

use App\Models\Term;
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
                $brands = Term::where([
                    ['type','brand'],
                    ['name','like', $searchTerm]
                ])->latest()->paginate(20);
            }else{
                $brands = Term::where([
                    ['type','brand'],
                    ['name','like', $searchTerm],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }

        }else{
            $brands = Term::where([
                ['type','brand'],
                ['name','like', $searchTerm]
            ])->latest()->paginate(20);
        }

        return view('livewire.admin.settings.brand.index', [
            'brands' => $brands
        ]);
    }
}
