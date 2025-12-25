<?php

namespace App\Http\Livewire\Admin\Settings\System;

use Illuminate\Support\Facades\Artisan;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\Component;

class Index extends Component
{

    public $openai_api_key, $app_name, $MAIL_MAILER, $MAIL_HOST, $MAIL_PORT, $MAIL_USERNAME, $MAIL_PASSWORD, $MAIL_ENCRYPTION, $MAIL_FROM_ADDRESS, $MAIL_FROM_NAME, $MAIL_TO;

    use LivewireAlert;

    public function mount()
    {
        $this->fill([
            'openai_api_key' => env('OPENAI_API_KEY'),
            'app_name' => env('APP_NAME'),
            'MAIL_MAILER' => env('MAIL_MAILER'),
            'MAIL_HOST' => env('MAIL_HOST'),
            'MAIL_PORT' => env('MAIL_PORT'),
            'MAIL_USERNAME' => env('MAIL_USERNAME'),
            'MAIL_PASSWORD' => env('MAIL_PASSWORD'),
            'MAIL_ENCRYPTION' => env('MAIL_ENCRYPTION'),
            'MAIL_FROM_ADDRESS' => env('MAIL_FROM_ADDRESS'),
            'MAIL_FROM_NAME' => env('MAIL_FROM_NAME'),
            'MAIL_TO' => env('MAIL_TO'),
        ]);
    }

    public function update()
    {
        $this->validate([
            'openai_api_key' =>'required',
            'app_name' =>'required',
            'MAIL_MAILER' =>'required',
            'MAIL_HOST' =>'required',
            'MAIL_PORT' =>'required',
            'MAIL_USERNAME' =>'required',
            'MAIL_PASSWORD' =>'required',
            'MAIL_ENCRYPTION' =>'required',
            'MAIL_FROM_ADDRESS' =>'required',
            'MAIL_FROM_NAME' =>'required',
            'MAIL_TO' =>'required',
        ]);

        Artisan::call("env:set OPENAI_API_KEY='".str_replace(' ', '', $this->openai_api_key)."'");
        Artisan::call("env:set APP_NAME='".str_replace(' ', '', $this->app_name)."'");
        Artisan::call("env:set MAIL_MAILER='".str_replace(' ', '', $this->MAIL_MAILER)."'");
        Artisan::call("env:set MAIL_HOST='".str_replace(' ', '', $this->MAIL_HOST)."'");
        Artisan::call("env:set MAIL_PORT='".str_replace(' ', '', $this->MAIL_PORT)."'");
        Artisan::call("env:set MAIL_USERNAME='".str_replace(' ', '', $this->MAIL_USERNAME)."'");
        Artisan::call("env:set MAIL_PASSWORD='".str_replace(' ', '', $this->MAIL_PASSWORD)."'");
        Artisan::call("env:set MAIL_ENCRYPTION='".str_replace(' ', '', $this->MAIL_ENCRYPTION)."'");
        Artisan::call("env:set MAIL_FROM_ADDRESS='".str_replace(' ', '', $this->MAIL_FROM_ADDRESS)."'");
        Artisan::call("env:set MAIL_FROM_NAME='".str_replace(' ', '', $this->MAIL_FROM_NAME)."'");
        Artisan::call("env:set MAIL_TO='".str_replace(' ', '', $this->MAIL_TO)."'");

        $this->alert('success', 'Successfully Updated', [
            'position' => 'top-end',
            'timer' => 3000,
            'toast' => true,
            'timerProgressBar' => true,
            'text' => '',
        ]);

        return back();

    }

    public function render()
    {
        return view('livewire.admin.settings.system.index');
    }
}
