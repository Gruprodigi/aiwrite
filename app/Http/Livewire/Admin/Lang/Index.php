<?php

namespace App\Http\Livewire\Admin\Lang;

use App\Models\Lang;
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
                    $lang = Lang::find($value);
                    $lang->delete();
                    $this->checklistId = [];
                }
            }else{
                foreach($this->checklistId as $value)
                {
                    $page = Lang::find($value);
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
                $langs = Lang::where([
                    ['name','like', $searchTerm]
                ])->latest()->paginate(20);
            }else{
                $langs = Lang::where([
                    ['name','like', $searchTerm],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }

        }else{
            $langs = Lang::where([
                ['name','like', $searchTerm]
            ])->latest()->paginate(20);
        }

        return view('livewire.admin.lang.index',[
            'langs' => $langs
        ]);
    }
}
