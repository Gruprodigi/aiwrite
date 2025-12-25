<?php

namespace App\Http\Livewire\Admin\Settings;

use App\Models\Option;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Artisan;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class Index extends Component
{
    public $site_logo, $site_favicon, $settings, $copyright, $case_title, $case_description, $how_it_works_title, $brand_title, $plan_title, $currency = '$';

    use LivewireAlert;

    use WithFileUploads;

    public function mount()
    {
        $this->settings = Option::where('key','site_settings')->first();
        $value = json_decode($this->settings?->value);
        $currency = Option::where('key','currency_symbol')->first();

        $this->fill([
            'copyright' => $value->copyright ?? '',
            'case_title' => $value->case_title ?? '',
            'case_description' => $value->case_description ?? '',
            'how_it_works_title' => $value->how_it_works_title ?? '',
            'brand_title' => $value->brand_title ?? '',
            'plan_title' => $value->plan_title ?? '',
            'currency' => $currency->value ?? '$'
        ]);
    }

    public function update()
    {
        $this->validate([
            'copyright' => 'required',
        ]);

        if($this->site_logo)
        {
            $this->validate([
                'site_logo' => 'required|image'
            ]);

            $this->site_logo->store('logo','public');

            $logo = 'logo/'.$this->site_logo->hashName();

        }else{
            $logo = json_decode($this->settings->value)->site_logo;
        }

        if($this->site_favicon)
        {
            $this->validate([
                'site_favicon' => 'required|image'
            ]);

            $this->site_favicon->store('favicon','public');

            $favicon = 'favicon/'.$this->site_favicon->hashName();
        }else{
            $favicon = json_decode($this->settings->value)->site_favicon;
        }

        $currency = Option::where('key','currency_symbol')->first();
        $currency->value = $this->currency;
        $currency->save();

        $data = [
            'copyright' => $this->copyright,
            'site_logo' => $logo,
            'site_favicon' => $favicon,
            'case_title' => $this->case_title,
            'case_description' => $this->case_description,
            'how_it_works_title' => $this->how_it_works_title,
            'brand_title' => $this->brand_title,
            'plan_title' => $this->plan_title,
        ];

        $site_settings = Option::where('key','site_settings')->first();



        if($site_settings)
        {
             $this->settings->key = 'site_settings';
             $this->settings->value = json_encode($data);
             $this->settings->save();
        }else{
            $option = new Option();
            $option->key = 'site_settings';
            $option->value = json_encode($data);
            $option->save();
        }

        $this->alert('success', 'Settings Successfully Updated', [
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
        return view('livewire.admin.settings.index');
    }
}
