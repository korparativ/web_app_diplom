<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class UserController extends Controller
{
    public function showUsers(Request $request){
        // $users = DB::connection('mysql')->table('users')->select(['id', 'name', 'email'])->get();
        $users = DB::table('users')->select(['id', 'name', 'email', 'role_id'])->get();
        $user = DB::table('users')->find(3);
        // print_r($request);
        return Inertia::render('Ec/EquipmentGraph', [
            'users' => $users,
            'user' => $user,
        ]);
    }

    public function showId( ){
        // $userId = $model->all();
        // $userId = Route::has('login');
        // return response()->json($userId);
        return Inertia::render('Ec/User_id', [
            'canLogin' => Route::has('login'),
            ]);
    }

}
