<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use App\Models\OrderI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class OrderIController extends Controller
{
    //
    public function add(Request $request) {
        $order = new OrderI;
        $order->equipment = $request->equipment;
        $order->signature = $request->signature;
        $order->number = $request->number;
        $order->date_start = $request->date_start;
        $order->date_stop = $request->date_stop;
        $order->worker = $request->worker;
        $order->save();
        $equip  = Equipment::where('name', $request->equipment)->first();
        if ($equip->date < $request->date_stop) {
            # code...
            $equip->date = $request->date_stop;
            $equip->signature = $request->signature;
            $equip->save();
        }

        return Redirect::to('/equip_show');
    }

    public function show() {

    }
}
