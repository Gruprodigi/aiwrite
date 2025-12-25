<?php

namespace App\Http\Livewire\Admin\Settings\Brand;

use App\Models\Term;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Str;

class Create extends Component
{

    public $image, $status;

    use WithFileUploads;

    public function store()
    {
        $this->validate([
            'image' => 'required|image'
        ]);

        $this->image->store('brand','public');

        $brand = new Term();
        $brand->user_id = Auth::User()->id;
        $brand->name = $this->image->hashName();
        $brand->slug = Str::slug($this->image->hashName());
        $brand->status = $this->status ?? 'approved';
        $brand->type = 'brand';
        $brand->save();

        return redirect()->route('admin.brand.index');

    }

    public function render()
    {
        return view('livewire.admin.settings.brand.create');
    }
}
