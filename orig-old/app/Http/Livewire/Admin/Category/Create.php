<?php

namespace App\Http\Livewire\Admin\Category;

use App\Models\Category;
use App\Models\Categorymeta;
use Livewire\Component;
use Illuminate\Support\Str;
use Auth;
use Livewire\WithFileUploads;

class Create extends Component
{

    public $name, $parent, $status, $category_image;

    protected $rules = [
      'name' => 'required',
      'category_image' => 'required|image|max:5120'
    ];

    use WithFileUploads;

    public function store()
    {
        
        $this->validate();

        $this->category_image->store('categories','public');

        $slug = Str::slug($this->name);
        $category_check = Category::where('slug',$slug)->first();
        if($category_check)
        {
            $slug = Str::slug($this->name).Str::random(10);
        }

        $category = new Category();
        $category->name = $this->name;
        $category->slug = $slug;
        $category->user_id = Auth::User()->id;
        if($this->parent != 'null')
        {
            $category->p_id = $this->parent;
        }
        $category->type = 'category';
        $category->status = $this->status ?? 'approved';
        $category->save();

        $categorymeta = new Categorymeta();
        $categorymeta->category_id = $category->id;
        $categorymeta->key = 'category_preview';
        $categorymeta->value = $this->category_image->hashName();
        $categorymeta->save();

        return redirect()->route('admin.category.index');
    }

    public function render()
    {
        $categories = Category::where([
            ['type','category'],
            ['p_id',null]
        ])->get();
        
        return view('livewire.admin.category.create',[
            'categories' => $categories
        ]);
    }
}
