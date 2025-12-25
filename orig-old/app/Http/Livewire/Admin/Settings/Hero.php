<?php

namespace App\Http\Livewire\Admin\Settings;

use Livewire\Component;
use App\Models\Option;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithFileUploads;

class Hero extends Component
{
    public $hero_title, $description, $hero_img, $hero_data, $button_title, $button_url;

    use WithFileUploads;
    use LivewireAlert;

    public function mount()
    {
        $this->hero_data = Option::where('key','hero_data')->first();
        $value = json_decode($this->hero_data?->value);

        $this->fill([
            'hero_title' => $value->hero_title ?? '',
            'description' => $value->description ?? '',
            'button_title' => $value->button_title ?? '',
            'button_url' => $value->button_url ?? ''
        ]);
    }

    public function update()
    {
        $this->validate([
            'hero_title' => 'required',
            'description' => 'required',
            'button_title' => 'required',
            'button_url' => 'required'
        ]);

        if($this->hero_img)
        {
            $this->validate([
                'hero_img' => 'required|image'
            ]);

            $this->hero_img->store('hero_img','public');

            $hero_img = $this->hero_img->hashName();

        }else{
            $hero_img = json_decode($this->hero_data?->value)?->hero_img;
        }

        $data = [
            'hero_title' => $this->hero_title,
            'hero_img' => $hero_img,
            'description' => $this->description,
            'button_title' => $this->button_title,
            'button_url' => $this->button_url
        ];

        $hero_data_option = Option::where('key','hero_data')->first();

        if($hero_data_option)
        {
             $this->hero_data->value = json_encode($data);
             $this->hero_data->save();
        }else{
            $option = new Option();
            $option->key = 'hero_data';
            $option->value = json_encode($data);
            $option->save();

        }

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
        return view('livewire.admin.settings.hero');
    }
}
