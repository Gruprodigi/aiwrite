<?php

namespace App\Http\Livewire\Admin\Lang;

use App\Models\Lang;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;

class Customize extends Component
{

    public $langs, $value = [], $key = [], $lang_code, $data;

    use LivewireAlert;

    public function mount($id)
    {
        $lang = Lang::find($id);
        $this->lang_code = $lang->code;
        $lang_file = file_get_contents(resource_path('lang/'.$lang->code.'.json'));
        $this->langs = json_decode($lang_file,true);

        foreach ($this->langs as $key => $lang) {
            $this->value[$lang] = $lang;
            $this->key[$key] = $lang;
        }
    }

    public function customize()
    {
        $data = [];
        foreach ($this->key as $key => $value) {
            $data[$key]=$this->value[$value];
        }

        $this->data = $data;

        file_put_contents(resource_path('lang/'.$this->lang_code.'.json'),json_encode($this->data,JSON_PRETTY_PRINT));

        $this->alert('success', 'Successfully Updated', [
            'position' => 'top-end',
            'timer' => 3000,
            'toast' => true,
            'timerProgressBar' => true,
            'text' => '',
        ]);

        return true;
    }

    public function render()
    {
        return view('livewire.admin.lang.customize');
    }
}
