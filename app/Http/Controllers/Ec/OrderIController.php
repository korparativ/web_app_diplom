<?php

namespace App\Http\Controllers\Ec;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use App\Models\OrderI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

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
            $equip->date = $request->date_stop;
            $equip->signature = $request->signature;
            $equip->save();
        }

        return Redirect::to('/equip_show');
    }

    public function show($name) {
        $order = DB::table('order_i_s')->where('equipment', $name)->get();
        // $order = OrderI::all()->where('equipment', $name);

        return Inertia::render('Ec/OrderSchedule', ['order' => $order]);
    }
}
