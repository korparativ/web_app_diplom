<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bearing extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'name_gost',
        'name_iso',
        'inner_diameter',
        'outside_diameter',
        'width',
        'signature',
    ];
}
