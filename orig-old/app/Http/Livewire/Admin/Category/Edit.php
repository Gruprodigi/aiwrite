<?php

namespace App\Http\Livewire\Admin\Category;

use Livewire\Component;
use App\Models\Category;
use App\Models\Categorymeta;
use Illuminate\Support\Str;
use Livewire\WithFileUploads;

class Edit extends Component
{
    public $name, $parent, $status, $category, $category_image; 

    use WithFileUploads;

    protected $rules = [
        'name' => 'required',
        
    ];

    public function mount($id)
    {
        $category = Category::find($id);
        $this->category = $category;
        $this->fill([
            'name' => $category->name
        ]);
        $this->status = $category->status;
        $this->parent = $category->p_id ?? '';
    }

    public function update($id)
    {
        $this->validate();

        $category = Category::find($id);

        if($this->name)
        {
            $slug = Str::slug($this->name);
            if($category->slug != $slug)
            {
                $category_check = Category::where('slug',$slug)->first();
                if($category_check)
                {
                    $slug = Str::slug($this->name).Str::random(10);
                }
            }else{
                $slug = $category->slug;
            }
        }
        
    
        $category->name = $this->name ?? $category->name;
        $category->slug = $slug;
        if($this->parent)
        {
            $category->p_id = $this->parent ?? $category->p_id;
        }
        $category->status = $this->status ?? $category->status;
        $category->save();

       

        if($this->category_image)
        {
            
            $this->validate([
                'category_image' => 'image|max:5120'
            ]);

            $this->category_image->store('categories','public');

            $category_meta = Categorymeta::where([
                ['category_id',$category->id],
                ['key','category_preview']
            ])->first();

            if($category_meta)
            {
                $category_meta->value = $this->category_image->hashName();
                $category_meta->save();
            }
        }
        

        return redirect()->route('admin.category.index');
        
    }

    public function render()
    {
        $categories = Category::where([
            ['type','category'],
            ['p_id',null]
        ])->get();

        return view('livewire.admin.category.edit',[
            'categories' => $categories
        ]);
    }
}
