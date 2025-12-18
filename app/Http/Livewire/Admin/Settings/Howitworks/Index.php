<?php

namespace App\Http\Livewire\Admin\Settings\Howitworks;

use App\Models\Option;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{

    public $step1_title, $step1_des, $step1_image;
    public $step2_title, $step2_des, $step2_image;
    public $step3_title, $step3_des;
    public $howItWork;
    public $data;

    use WithFileUploads;

    use LivewireAlert;

    public function mount()
    {
        $howItWork = Option::where('key','howItWorks')->first();

        if($howItWork)
        {
            $data = json_decode($howItWork->value);
            $this->howItWork = $howItWork;
            $this->fill([
                'step1_title' => $data->step1_title ?? '',
                'step1_des' => $data->step1_des ?? '',
                'step2_title' => $data->step2_title ?? '',
                'step2_des' => $data->step2_des ?? '',
                'step3_title' => $data->step3_title ?? '',
                'step3_des' => $data->step3_des ?? '',
            ]);
        }
    }


    public function update()
    {
        if($this->howItWork)
        {
            $howItWork = Option::findOrFail($this->howItWork->id);
            $data = json_decode($howItWork->value);
        }else{
            $howItWork = new Option();
            $howItWork->key = 'howItWorks';
        }

        $this->validate([
            'step1_title' => 'required',
            'step1_des' => 'required',
            'step2_title' => 'required',
            'step2_des' => 'required',
            'step3_title' => 'required',
            'step3_des' => 'required'
        ]);

        if($this->step1_image)
        {

            $this->validate([
                'step1_image' => 'required|image'
            ]);

            $this->step1_image->store('howitworks','public');

            $step1_image = $this->step1_image->hashName();

        }else{
            $step1_image = $data->step1_image ?? '';
        }

        if($this->step2_image)
        {
            $this->validate([
                'step2_image' => 'required|image'
            ]);

            $this->step2_image->store('howitworks','public');

            $step2_image = $this->step2_image->hashName();

        }else{
            $step2_image = $data->step2_image?? '';
        }

        $data = [
            'step1_title' => $this->step1_title,
            'step1_des' => $this->step1_des,
            'step2_title' => $this->step2_title,
            'step2_des' => $this->step2_des,
            'step3_title' => $this->step3_title,
            'step3_des' => $this->step3_des,
            'step1_image' => $step1_image,
            'step2_image' => $step2_image,
        ];

        $howItWork->value = json_encode($data);
        $howItWork->save();


        $this->alert('success', 'Successfully Updated', [
            'position' => 'top-end',
            'timer' => 3000,
            'toast' => true,
            'timerProgressBar' => true,
            'text' => '',
        ]);

        return redirect()->back();

    }


    public function render()
    {
        return view('livewire.admin.settings.howitworks.index');
    }
}
