<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    use HasFactory;

    public function pagemeta()
    {
        return $this->hasOne('App\Models\Termmeta')->where('key','pagemeta');
    }

    public function blogmeta()
    {
        return $this->hasOne('App\Models\Termmeta')->where('key','blogmeta');
    }

    public function seometa()
    {
        return $this->hasOne('App\Models\Termmeta')->where('key', 'seometa');
    }

    public function useCaseMeta()
    {
        return $this->hasOne('App\Models\Termmeta')->where('key','useCaseMeta');
    }
}
