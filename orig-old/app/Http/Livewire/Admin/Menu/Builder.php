<?php

namespace App\Http\Livewire\Admin\Menu;

use App\Models\Menu;
use App\Models\Menuitems;
use Livewire\Component;

class Builder extends Component
{

    public $submenus, $menu, $type = 'store', $menu_id;
    public $name, $url, $target;


    protected $rules = [
        'name' => 'required',
        'url' => 'required'
    ];

    public function type($menu_id,$value)
    {
        $this->type = $value;
        $this->menu_id = $menu_id;
        if($this->menu_id != 0)
        {
            $submenu = Menuitems::findOrFail($menu_id);
            $data = json_decode($submenu->data);
            $this->name = $submenu->name;
            $this->url = $data->url;
            $this->target = $data->target;
        }

    }

    public function store()
    {
        $this->validate();

        if($this->type == 'store')
        {
            $data = [
                'url' => $this->url,
                'target' => $this->target ?? '_self'
            ];

            $menuitem = new Menuitems();
            $menuitem->menu_id = $this->menu;
            $menuitem->name = $this->name;
            $menuitem->data = json_encode($data);
            $menuitem->order = 100;
            $menuitem->save();
        }elseif($this->type == 'update')
        {

            $menuitem = Menuitems::findOrFail($this->menu_id);

            $data = [
                'url' => $this->url ?? $menuitem->url,
                'target' => $this->target ?? $menuitem->target
            ];

            $menuitem->name = $this->name ?? $menuitem->name;
            $menuitem->data = json_encode($data);
            $menuitem->order = $menuitem->order ?? 100;
            $menuitem->save();
        }


        return redirect()->route('admin.menu.builder',$this->menu);

    }

    public function delete($id)
    {
        Menuitems::findOrFail($id)->delete();
        return redirect()->route('admin.menu.builder',$this->menu);
    }

    public function mount($id)
    {
        $menu = Menu::findOrFail($id);
        $this->submenus = $menu->submenu;
        $this->menu = $menu->id;
    }

    public function render()
    {
        return view('livewire.admin.menu.builder');
    }
}
