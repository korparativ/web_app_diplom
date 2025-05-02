<?php

namespace App\Http\Controllers\Ec;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class EquipmentController extends Controller
{
    //
    public function index($id, $name){

        return Inertia::render('Ec/ProtocolForm', ['id' => $id, 'name' => $name]);

    }



    public function add(Request $request){
        $equip = new Equipment();
        $equip->name = $request->name;
        // $equip->protocol = $request->protocol;
        $equip->signature = $request->user_signature;
        // $equip->date = $request->date;
        $equip->save();

        return Redirect::to('/equip_show');
    }

    public function show(){
        $equip = Equipment::all();

        return Inertia::render('Ec/EquipSchedule', ['equip' => $equip]);
    }

    public function update(Request $request){

        $equip  = Equipment::where('id', $request->id)->first();
        $equip->date = $request->date;
        $equip->save();

        return redirect()->intended(route('ec.show', absolute: false));
    }
}
