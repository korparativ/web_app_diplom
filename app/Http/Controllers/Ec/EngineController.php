<?php

namespace App\Http\Controllers\Ec;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Engine;

class EngineController extends Controller
{
    //
    public function add(Request $request){
        $engine = new Engine;
        $engine->name = $request->name;
        $engine->serial_number = $request->serial_number;
        $engine->power = $request->power;
        $engine->type = $request->type;
        $engine->fastening = $request->fastening;
        $engine->frequency = $request->frequency;
        $engine->voltage = $request->voltage;
        $engine->current = $request->current;
        $engine->year = $request->year;
        $engine->phases = $request->phases;
        $engine->efficiency = $request->efficiency;
        $engine->cosf = $request->cosf;
        $engine->type_rotor = $request->type_rotor;
        $engine->diameter_shaft = $request->diameter_shaft;
        $engine->diameter_flange = $request->diameter_flange;
        $engine->size = $request->size;
        $engine->weight = $request->weight;
        $engine->second_bearing = $request->second_bearing;
        $engine->first_bearing = $request->first_bearing;
        $engine->guild = $request->guild;
        $engine->signature = $request->signature;
        $engine->save();
    }
}
