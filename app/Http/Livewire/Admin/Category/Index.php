<?php

namespace App\Http\Livewire\Admin\Category;

use Livewire\Component;
use App\Models\Category;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $status;
    public $checklistId = [];
    public $search;
    public $filter_status;


    protected $paginationTheme = 'bootstrap';

    public function change_status()
    {
        if($this->status)
        {
            if($this->status == 'delete')
            {
                foreach($this->checklistId as $value)
                {
                    Category::find($value)->delete();
                    $this->checklistId = [];
                }
            }else{
                foreach($this->checklistId as $value)
                {
                    $page = Category::find($value);
                    $page->status = $this->status;
                    $page->save();
                    $this->checklistId = [];
                }
            }
        }
    }

    public function render()
    {
        $searchCategories = '%'.$this->search.'%';
        if($this->filter_status)
        {
            if($this->filter_status == 'all')
            {
                $categories = Category::where([
                    ['type','category'],
                    ['name','like', $searchCategories]
                ])->latest()->paginate(20);
            }else{
                $categories = Category::where([
                    ['type','category'],
                    ['name','like', $searchCategories],
                    ['status', $this->filter_status]
                ])->latest()->paginate(20);
            }
            
        }else{
            $categories = Category::with('parentcategories')->where([
                ['type','category'],
                ['name','like', $searchCategories]
            ])->latest()->paginate(20);
        }
        return view('livewire.admin.category.index',[
            'categories' => $categories
        ]);
    }
}
