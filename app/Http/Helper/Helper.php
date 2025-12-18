<?php

use App\Models\Menu;


function menu($name)
{
    $menu = Menu::where('position',$name)->first();

    if($menu)
    {
        $menuitems = $menu->submenu()->with('childs')->get();
        return [
            'menuitems' => $menuitems,
            'name' => $menu->name
        ];
    }else{
        return [
            'menuitems' => [],
            'name' => ''
        ];
    }
}
