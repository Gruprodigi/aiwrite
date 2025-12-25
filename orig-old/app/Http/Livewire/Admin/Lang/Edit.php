<?php

namespace App\Http\Livewire\Admin\Lang;

use App\Models\Lang;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;

class Edit extends Component
{

    use LivewireAlert;

    public $lang, $status, $lang_name, $language, $languages;

    public function mount($id)
    {
        $lang = Lang::find($id);
        $this->language = $lang;
        $this->lang = $lang->code;
        $this->status = $lang->status;

        $langs_file = file_get_contents(resource_path('json/countrylists.json'));
        $langs = json_decode($langs_file,true);
        $this->languages = $langs;
    }

    public function update($id)
    {
        $langs_file = file_get_contents(resource_path('json/countrylists.json'));
        $langs = json_decode($langs_file,true);

        foreach ($langs as $key => $value) {
            if ($value['language']['code'] == $this->lang) {
                $this->lang_name = $value['language']['name'];
            }
        }


        $lang_check = Lang::where('code',$this->lang)->first();
        $lang = Lang::find($id);

        if($lang_check)
        {
            if($lang_check->id != $lang->id)
            {
                $this->alert('error', "It's Already Exists!", [
                    'position' => 'top-end',
                    'timer' => 3000,
                    'toast' => true,
                    'timerProgressBar' => true,
                    'text' => '',
                ]);

                return back();
            }

        }




        $lang->name = $this->lang_name ?? $lang->name;
        $lang->code = $this->lang ?? $lang->code;
        $lang->status = $this->status ?? $lang->status;
        $lang->save();

        return redirect()->route('admin.lang.index');


    }

    public function render()
    {
        return view('livewire.admin.lang.edit');
    }
}
