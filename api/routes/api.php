<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ProductController;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// products
Route::get('/products', [ProductController::class, 'index']);

// user api functions
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// user authorised api functions
Route::middleware('auth:sanctum')->group(function() {

    // cart
    Route::get('/cart', [Cart::class, 'getUserCart']);

});