<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderTO extends Model
{
    use HasFactory;

    protected $fillable = [
        'equipment',
        'namber',
        'date_start',
        'date_stop',
        'worker',
        'signature',
    ];
}
