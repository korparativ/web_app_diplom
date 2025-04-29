<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Expr\BinaryOp\Equal;

class EquipmentController extends Controller
{
    //
    public function index(){

        return Inertia::render('Ec/Equip');

    }

    public function store(Request $request){
        $data = ['Id' => $request->id, 'Name' => $request->name, 'Protocol' => $request->protocol, 'User' => $request->user_name];

        // return response()->json($data);
        return Inertia::render('Ec/EquipTest', ['equip' => response()->json($data) ]);
    }

    public function add(Request $request){
        $equip = new Equipment();
        $equip->name = $request->name;
        $equip->protocol = $request->protocol;
        $equip->user_name = $request->user_name;
        $equip->date = $request->date;
        $equip->save();

        $move = true;

        return Inertia::render('Ec/EquipTest', ['equip' => $equip, 'move' => $move]);
    }

    public function show(){
        $equip = Equipment::all();

        $move = false;
        return Inertia::render('Ec/EquipTest', ['equip' => $equip, 'move' => $move]);
    }

    public function update(Request $request){

        $equip  = Equipment::where('id', $request->id)->first();
        $equip->date = $request->date;
        $equip->save();

        $move = true;

        return Inertia::render('Ec/EquipTest', ['equip' => $equip, 'move' => $move]);
    }
}
