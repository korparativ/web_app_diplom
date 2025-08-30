<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Engine extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'serial_number',
        'mechanism',
        'guild',
        'power',
        'type',
        'fastening',
        'frequency',
        'voltage',
        'current',
        'year',
        'phases',
        'efficiency',
        'cosf',
        'type_rotor',
        'diameter_shaft',
        'diameter_flange',
        'size',
        'weight',
        'second_bearing',
        'first_bearing',
        'signature',
    ];
}
