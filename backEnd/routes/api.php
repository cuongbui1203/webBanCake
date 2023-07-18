<?php

use App\Http\Controllers\CakeController;
use App\Http\Controllers\UserController;
use App\Models\cake;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/user/login', [UserController::class,'login']);
Route::post('/user/register', [UserController::class,'register']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::get('/user', [UserController::class,'me']);
});


Route::get('/product', [CakeController::class,'index']);
Route::get('/product/{id}', [CakeController::class,'getId']);
Route::post('/product', [CakeController::class,'store']);
