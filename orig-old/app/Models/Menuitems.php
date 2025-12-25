<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menuitems extends Model
{
    use HasFactory;

    public function childs(){
        return $this->hasMany('App\Models\Menuitems','parent_id','id');
    }

    public function parent()
    {
        return $this->belongsTo('App\Models\Menuitems','parent_id','id');
    }
}
