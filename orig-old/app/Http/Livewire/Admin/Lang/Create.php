<?php

namespace App\Http\Livewire\Admin\Lang;

use App\Models\Lang;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;

class Create extends Component
{

    use LivewireAlert;

    public $lang = 'ps', $description, $languages, $status, $lang_name = 'Pashto';

    public function mount()
    {
        $langs_file = file_get_contents(resource_path('json/countrylists.json'));
        $langs = json_decode($langs_file,true);
        $this->languages = $langs;
    }


    public function store()
    {
        $langs_file = file_get_contents(resource_path('json/countrylists.json'));
        $langs = json_decode($langs_file,true);

        foreach ($langs as $key => $value) {
            if ($value['language']['code'] == $this->lang) {
                $this->lang_name = $value['language']['name'];
            }
        }

        $lang_check = Lang::where('code',$this->lang)->first();


        if($lang_check)
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


        $lang = new Lang();
        $lang->name = $this->lang_name;
        $lang->code = $this->lang ?? 'ps';
        $lang->status = $this->status ?? 'approved';
        $lang->save();

        return redirect()->route('admin.lang.index');
    }



    public function render()
    {
        return view('livewire.admin.lang.create');
    }
}
