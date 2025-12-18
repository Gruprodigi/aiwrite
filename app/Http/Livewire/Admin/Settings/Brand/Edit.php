<?php

namespace App\Http\Livewire\Admin\Settings\Brand;

use App\Models\Term;
use Livewire\Component;
use Livewire\WithFileUploads;

class Edit extends Component
{

    public $image, $status, $brand;

    use WithFileUploads;

    public function mount($id)
    {
        $brand = Term::find($id);
        $this->brand = $brand;
        $this->status = $brand->status;
    }

    public function update($id)
    {


        if($this->image)
        {
            $this->validate([
                'image' => 'image'
            ]);

            $this->image->store('brand','public');
            $imageName = $this->image->hashName();
        }else{
            $imageName = $this->brand->name;
        }

        $brand = Term::find($id);
        $brand->name = $imageName;
        $brand->status = $this->status ?? $brand->status;
        $brand->save();

        return redirect()->route('admin.brand.index');
    }

    public function render()
    {
        return view('livewire.admin.settings.brand.edit');
    }
}
