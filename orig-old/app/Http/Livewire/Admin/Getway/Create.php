<?php

namespace App\Http\Livewire\Admin\Getway;

use App\Models\Getway;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithFileUploads;

class Create extends Component
{

    public $name, $logo, $rate = 1, $charge = 0, $currency_name, $image_accept = 0, $test_mode = 0, $status = 'approved', $phone_required = 0, $instruction;

    use WithFileUploads;

    public function store()
    {
        $this->validate([
            'name' => 'required',
            'logo' => 'image|required',
            'currency_name' => 'required',
            'status' => 'required',
        ]);

        if($this->logo)
        {
            $this->logo->store('getway','public');

            $logo = Storage::url('getway/'.$this->logo->hashName());
        }else{
            $logo = '';
        }

        Getway::create([
            'name' => $this->name,
            'logo' => $logo,
            'rate' => $this->rate,
            'charge' => $this->charge,
            'currency_name' => $this->currency_name,
            'namespace' => 'custom',
            'is_auto' => 0,
            'image_accept' => $this->image_accept,
            'test_mode' => $this->test_mode,
            'status' => $this->status,
            'phone_required' => $this->phone_required,
            'instruction' => $this->instruction,
            'data' => null
        ]);

        return redirect()->route('admin.gateway.index');
    }


    public function render()
    {
        return view('livewire.admin.getway.create');
    }
}
