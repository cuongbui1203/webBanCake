<?php

use App\Http\Controllers\api\CakeCategoryController;
use App\Http\Controllers\api\CakeController;
use App\Http\Controllers\api\CartController;
use App\Http\Controllers\api\UserController;
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
    Route::get('/product/category/{categoryId}', [CakeCategoryController::class,'getProductInCategory']);
});
Route::get('/user/logout', [UserController::class,'logout']);

//product
Route::get('/product', [CakeController::class,'index'])->name('get all product');
Route::post('/product', [CakeController::class,'store']);
Route::patch('/product/{id}/update', [CakeController::class,'update']);
Route::delete('product/{CakeId}/delete', [CakeController::class,'destroy']);
Route::get('product/search', [CakeController::class,'search']);

// cart
Route::post('/addItem', [UserController::class,'addItemToCart']);
Route::get('user/{userId}/cart', [CartController::class,'getCart']);
Route::post('user/{userId}/cart', [CartController::class,'updateCart']);
Route::delete('users/{id}/cart', [CartController::class,'removeCart']);

//category
Route::get('category', [CakeCategoryController::class,'index']);
Route::post('category', [CakeCategoryController::class,'store']);
Route::get('/product/category/{categoryId}', [CakeCategoryController::class,'getProductInCategory']);

Route::get('test', [CakeCategoryController::class,'test']);

// Route::get('/test', function (Request $request) {
//     $response = new \Symfony\Component\HttpFoundation\StreamedResponse(function () {
//         while (true) {
//             // $data = fetchDataFromDatabase(); // Lấy dữ liệu mới từ CSDL
//             $arr = ['success' => true];
//             echo "data: " . json_encode($arr) . " \n\n";
//             ob_flush();
//             flush();
//             sleep(1);
//         }
//     });

//     $response->headers->set('Content-Type', 'text/event-stream');
//     $response->headers->set('Cache-Control', 'no-cache');
//     $response->headers->set('Connection', 'keep-alive');

//     return $response;
// });
