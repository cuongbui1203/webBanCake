<?php

use App\Http\Controllers\api\CakeCategoryController;
use App\Http\Controllers\api\CakeController;
use App\Http\Controllers\api\CartController;
use App\Http\Controllers\api\UserController;
use Illuminate\Routing\Router;
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


Route::get('/product', [CakeController::class,'index'])->name('get all product');
Route::post('/product', [CakeController::class,'store']);
Route::patch('/product/{id}/update', [CakeController::class,'update']);
Route::delete('product/{CakeId}/delete', [CakeController::class,'destroy']);

Route::post('/addItem', [UserController::class,'addItemToCart']);

Route::get('user/{userId}/cart', [CartController::class,'getCart']);
Route::post('user/{userId}/cart', [CartController::class,'updateCart']);
Route::delete('users/{id}/cart', [CartController::class,'removeCart']);
Route::get('category', [CakeCategoryController::class,'index']);
Route::post('category', [CakeCategoryController::class,'store']);
