<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function showUsers(){
        $users = DB::connection('mysql')->table('users')->select(['id', 'name', 'email'])->get();
        print_r($users);
    }
}
