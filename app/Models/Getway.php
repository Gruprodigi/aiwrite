<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Getway extends Model
{
    protected $fillable = [
        'name', 'logo', 'rate', 'charge', 'namespace', 'currency_name', 'image_accept', 'is_auto', 'test_mode', 'status', 'phone_required', 'instruction', 'data'
    ];

    use HasFactory;
}
