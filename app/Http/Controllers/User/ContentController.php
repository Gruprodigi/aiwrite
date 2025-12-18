<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function generator()
    {
        return response()->json(['message'=> 'Hello World']);
    }
}
