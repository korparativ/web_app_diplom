<?php

namespace App\Http\Controllers\Ec;

use App\Http\Controllers\Controller;
use App\Models\Bearing;
use App\Models\Engine;
use App\Models\Mechanism;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Laravel\Prompts\alert;

class MechanismController extends Controller
{
    //
    public function show(){

        $bearing = Bearing::all();
        $engine = Engine::all();
        $mechanism = Mechanism::all();
        return Inertia::render('Ec/Engine/MechanismSchedule', ['bearing' => $bearing, 'engine' => $engine, 'mechanism' => $mechanism]);
    }

    public function add(Request $request){
        $mechanism = new Mechanism;
        $mechanism->name = $request->name;
        $mechanism->guild = $request->guild;
        $mechanism->signature = $request->signature;
        $mechanism->save();
    }

    public function update(Request $request){

        $mechanism = Mechanism::where('id', $request->mechanism_id)->first();
        $engine = Engine::where('id', $request->engine_id)->first();

        if($mechanism->engine_id == $request->engine_id){
            $mechanism->engine_id = 0;
            $engine->mechanism = "Резерв";
        } else {
            $mechanism->engine_id = $request->engine_id;
            $engine->mechanism = $mechanism->name;
        }

        $mechanism->save();
        $engine->save();


        // return response()->json([
        //     $request->mechanism_id,
        //     $request->engine_id
        // ]);
    }

    public function remove(Request $request){
        // if ($request->mechanism_id and $request->engine_id != null){

        // }
        // $mechanism = Mechanism::where('id', $request->mechanism_id)->first();
        // $engine = Engine::where('id', $request->engine_id)->first();

        // $mechanism->engine_id = '0';
        // $engine->mechanism = "Резерв";
        // $mechanism->save();
        // $engine->save();



         return response()->json([
            $request->mechanism_id,
            $request->engine_id

        ]);
    }




}
