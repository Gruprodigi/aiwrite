<?php

namespace App\Http\Livewire\Admin\Menu;

use App\Models\Menu;
use Livewire\Component;

class Edit extends Component
{

    public $name, $position, $lang = 'en', $status, $menu;

    public function mount($id)
    {
        $menu = Menu::find($id);
        $this->menu = $menu;

        $this->fill([
            'name' => $menu->name,
        ]);

        $this->status = $menu->status;
        $this->position = $menu->position;
        $this->lang = $menu->lang;
    }

    public function update($id)
    {
        $this->validate([
            'name' => 'required'
        ]);

        $menu = Menu::findOrFail($id);
        $menu->name = $this->name;
        $menu->position = $this->position ?? 'header';
        $menu->lang = $this->lang ?? 'en';
        $menu->status = $this->status ?? 'approved';
        $menu->save();


        return redirect()->route('admin.menu.index');
    }

    public function render()
    {
        return view('livewire.admin.menu.edit');
    }
}
