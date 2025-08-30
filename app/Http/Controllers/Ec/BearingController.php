<?php

namespace App\Http\Controllers\Ec;

use App\Http\Controllers\Controller;
use App\Models\Bearing;
use Illuminate\Http\Request;

class BearingController extends Controller
{
    //
    public function add(Request $request){
        $bearing = new Bearing;
        $bearing->name = $request->name;
        $bearing->name_gost = $request->name_gost;
        $bearing->name_iso = $request->name_iso;
        $bearing->inner_diameter = $request->inner_diameter;
        $bearing->outside_diameter = $request->outside_diameter;
        $bearing->width = $request->width;
        $bearing->signature = $request->signature;
        $bearing->save();
    }
}
