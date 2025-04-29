<?php

use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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
    Route::get('/users', [UserController::class, 'showUsers'])->name('ec.equipmentGraph');
    Route::get('/equip', [EquipmentController::class, 'index'])->name('ec.equip');
    Route::post('/equip', [EquipmentController::class, 'add'])->name('ec.test');
    Route::get('/equip_show', [EquipmentController::class, 'show']);
    Route::post('/equip_update', [EquipmentController::class, 'update'])->name('ec.update');
    Route::get('/user_id', [UserController::class, 'showId']);

});

require __DIR__.'/auth.php';
