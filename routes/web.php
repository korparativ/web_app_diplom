<?php

use App\Http\Controllers\Ec\BearingController;
use App\Http\Controllers\Ec\EngineController;
use App\Http\Controllers\Ec\EquipmentController;
use App\Http\Controllers\Ec\OrderTOController;
use App\Http\Controllers\Ec\ProtocolController;
use App\Http\Controllers\Ec\OrderIController;
use App\Http\Controllers\Ec\MechanismController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/showUsers', function () {
//     return Inertia::render('Ec/EquipmentGraph');
// })->middleware(['auth'])->name('showUsers');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/equip_show', [EquipmentController::class, 'show'])->name('ec.show');
    Route::get('/equip/{id}/{name}', [EquipmentController::class, 'index'])->name('ec.equip');
    Route::post('/equip_update', [EquipmentController::class, 'update'])->name('ec.update');

    Route::get('/equip', function () {
        return Inertia::render('Ec/EquipAdd');
    });
    Route::post('/equip', [EquipmentController::class, 'add'])->name('ec.add');

    Route::get('/equip_menu/{id}/{name}', function ($id, $name) {
        return Inertia::render('Ec/MenuTO', ['id' => $id, 'name' => $name]);
    });
    Route::get('/protocol_add/{id}/{name}', function ($id, $name) {
        return Inertia::render('Ec/ProtocolForm', ['id' => $id, 'name' => $name]);
    });
    Route::post('/protocol_add', [ProtocolController::class, 'add'])->name('ec.protocol_add');
    Route::get('/order_to_add/{id}/{name}', function ($id, $name) {
        return Inertia::render('Ec/OrderTOForm', ['id' => $id, 'name' => $name]);
    });
    Route::post('/order_to_add', [OrderTOController::class, 'add'])->name('ec.order_to_add');
    Route::get('/order_i_add/{id}/{name}', function ($id, $name) {
        return Inertia::render('Ec/OrderIForm', ['id' => $id, 'name' => $name]);
    });
    Route::post('/order_i_add', [OrderIController::class, 'add'])->name('ec.order_i_add');

    Route::get('/menu_info/{id}/{name}', function ($id, $name) {
        return Inertia::render('Ec/MenuInfo', ['id' => $id, 'name' => $name]);
    });
    Route::get('/order_info_i/{name}', [OrderIController::class, 'show']);
    Route::get('/order_info_to/{name}', [OrderTOController::class, 'show']);
    Route::get('/protocol_info/{name}', [ProtocolController::class, 'show']);



});

Route::middleware('auth')->group(function () {
    Route::get('/mechanisms', [MechanismController::class, 'show']);
    Route::post('/engine_add', [EngineController::class, 'add'])->name('ec.engine_add');
    Route::post('/bearing_add', [BearingController::class, 'add'])->name('ec.bearing_add');
    Route::post('/mechanism_add', [MechanismController::class, 'add'])->name('ec.mechanism_add');

    // Route::post('/mechanism/add', [MechanismController::class, 'store'])->name('ec.mechanism_add');
    Route::post('/engine/assign', [MechanismController::class, 'update'])->name('ec.engine_assign');
});

require __DIR__.'/auth.php';
