<?php

namespace App\Http\Livewire\Admin\Menu;

use Livewire\Component;
use DB;
use App\Models\Menu;

class Create extends Component
{
    public $name, $position, $status, $lang = 'en';

    public function store()
    {
        $this->validate([
            'name' => 'required'
        ]);

        $menu = new Menu();
        $menu->name = $this->name;
        $menu->position = $this->position ?? 'header';
        $menu->lang = $this->lang ?? 'en';
        $menu->status = $this->status ?? 'approved';
        $menu->save();

        return redirect()->route('admin.menu.index');

    }

    public function render()
    {
        return view('livewire.admin.menu.create');
    }
}
