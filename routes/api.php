<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('login')->group(function () {
    Route::post('/', 'App\Http\Controllers\ApiTokenController@login')->name('login');
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::prefix('crypto')->group(function () {
        Route::get('/btc', 'App\Http\Controllers\CryptoController@index')->name('crypto.btc');
        Route::put('/btc', 'App\Http\Controllers\CryptoController@update')->name('crypto.btc');
    });

    Route::get('/currencies', 'App\Http\Controllers\CryptoController@currencies')->name('currencies');

    Route::get('/me', 'App\Http\Controllers\ApiTokenController@me')->name('me');
});
