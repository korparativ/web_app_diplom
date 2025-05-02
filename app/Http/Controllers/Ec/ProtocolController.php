<?php

namespace App\Http\Controllers\Ec;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use App\Models\Protocol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ProtocolController extends Controller
{
    //
    public function add(Request $request) {
        $protocol = new Protocol;
        $protocol->equipment = $request->equipment;
        $protocol->signature = $request->signature;
        $protocol->number = $request->number;
        $protocol->date = $request->date;
        $protocol->save();
        $equip  = Equipment::where('name', $request->equipment)->first();
        if ($equip->date < $request->date) {
            # code...
            $equip->date = $request->date;
            $equip->signature = $request->signature;
            $equip->save();
        }

        return Redirect::to('/equip_show');
    }

    public function show() {

    }
}
