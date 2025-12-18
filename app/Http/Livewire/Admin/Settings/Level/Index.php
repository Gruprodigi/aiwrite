<?php

namespace App\Http\Livewire\Admin\Settings\Level;

use App\Models\Option;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;

class Index extends Component
{

    public $title, $description, $button_title, $button_url, $level_list1, $level_list2, $level_list3;

    public $level;

    use LivewireAlert;

    public function mount()
    {
        $level = Option::where('key','level')->first();

        if($level)
        {
            $data = json_decode($level->value);
            $this->level = $level;
            $this->fill([
                'title' => $data->title ?? '',
                'description' => $data->description ?? '',
                'button_title' => $data->button_title ?? '',
                'button_url' => $data->button_url ?? '',
                'level_list1' => $data->level_list1 ?? '',
                'level_list2' => $data->level_list2 ?? '',
                'level_list3' => $data->level_list3 ?? '',
            ]);
        }
    }

    public function update()
    {
        if($this->level)
        {
            $level = Option::findOrFail($this->level->id);
        }else{
            $level = new Option();
            $level->key = 'level';
        }

        $this->validate([
            'title' => 'required',
            'description' => 'required',
            'button_title' => 'required',
            'button_url' => 'required',
            'level_list1' => 'required',
            'level_list2' => 'required',
            'level_list3' => 'required'
        ]);

        $data = [
            'title' => $this->title,
            'description' => $this->description,
            'button_title' => $this->button_title,
            'button_url' => $this->button_url,
            'level_list1' => $this->level_list1,
            'level_list2' => $this->level_list2,
            'level_list3' => $this->level_list3
        ];

        $level->value = json_encode($data);
        $level->save();

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
        return view('livewire.admin.settings.level.index');
    }
}
