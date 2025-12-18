<?php

namespace App\Http\Livewire\Admin\Settings\Profile;

use Livewire\Component;
use Auth;
use Hash;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class Index extends Component
{

    use LivewireAlert;

    public $name, $email, $current_password, $password, $password_confirmation, $user;

    protected $rules = [
        'name' => 'required',
        'email' => 'required|email',
        'current_password' => 'required',
        'password' => 'required|confirmed'
    ];

    public function mount()
    {
        $this->user = Auth::User();

        $this->fill([
            'name' => $this->user->name,
            'email' => $this->user->email
        ]);
    }

    public function save()
    {
        $this->validate();

        $user = Auth::user();
        $user->name = $this->name;
        $user->email = $this->email;
        $user->password = Hash::make($this->password);
        $user->save();

        $this->alert('success', 'Profile Updated', [
            'position' => 'top-end',
            'timer' => 3000,
            'toast' => true,
            'timerProgressBar' => true,
            'text' => '',
        ]);

        $this->fill([
            'current_password' => '',
            'password' => '',
            'password_confirmation' => ''
        ]);

        return back();
    }

    public function render()
    {
        return view('livewire.admin.settings.profile.index');
    }
}
