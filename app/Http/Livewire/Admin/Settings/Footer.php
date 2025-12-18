<?php

namespace App\Http\Livewire\Admin\Settings;

use Livewire\Component;
use Livewire\WithFileUploads;
use Livewire\WithPagination;
use App\Models\Option;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class Footer extends Component
{
    public $newsletter_title, $newsletter_des, $copyright, $footer, $icon, $link, $inputs = [], $i = 1, $address;

    use WithPagination;
    use WithFileUploads;
    use LivewireAlert;

    public function add($i)
    {
        $i = $i + 1;
        $this->i = $i;
        array_push($this->inputs ,$i);
    }
 
    public function remove($i)
    {
        unset($this->inputs[$i]);
        unset($this->icon[$i]);
        unset($this->link[$i]);
    }

    public function mount()
    {
        $this->footer = Option::where('key','footer')->first();
        $value = json_decode($this->footer?->value);

        

        $this->fill([
            'newsletter_title' => $value->newsletter_title ?? '',
            'address' => $value->address ?? '',
            'newsletter_des' => $value->newsletter_des ?? '',
            'copyright' => $value->copyright ?? ''
        ]);

        foreach ($value->social ?? [] as $key => $value) {
            $this->link[$key] = $value->link;
            $this->icon[$key] = $value->icon;
            array_push($this->inputs ,$key);

            $this->i = $key + 1;
        }
    }

    public function update()
    {

        

        $this->validate([
            'newsletter_title' => 'required',
            'newsletter_des' => 'required',
            'address' => 'required',
            'copyright' => 'required',
            'icon.*' => 'required',
            'link.*' => 'required',
        ]);

        foreach ($this->icon ?? [] as $key=>$value) {
            $social[] = [
                'icon' => $this->icon[$key],
                'link' => $this->link[$key] ?? ''
            ];
        }

        $data = [
            'newsletter_title' => $this->newsletter_title,
            'newsletter_des' => $this->newsletter_des,
            'address' => $this->address,
            'copyright' => $this->copyright,
            'social' => $social ?? []
        ];

        $footer = Option::where('key','footer')->first();

        if($footer)
        {
             $this->footer->value = json_encode($data);
             $this->footer->save();
        }else{
            $option = new Option();
            $option->key = 'footer';
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
        return view('livewire.admin.settings.footer');
    }
}
