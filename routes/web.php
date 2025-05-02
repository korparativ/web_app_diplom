<?php

use App\Http\Controllers\Ec\EquipmentController;
use App\Http\Controllers\Ec\OrderTOController;
use App\Http\Controllers\Ec\ProtocolController;
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


});

require __DIR__.'/auth.php';
