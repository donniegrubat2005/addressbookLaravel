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

Route::prefix('auth')->group(function () {
    // Create New User
    Route::post('register', 'Auth\AuthController@register');
    // Login User
    Route::post('login', 'Auth\AuthController@login');

    // Refresh the JWT Token
    Route::get('refresh', 'Auth\AuthController@refresh');

    // Below mention routes are available only for the authenticated users.
    Route::middleware('auth:api')->group(function () {
        // Get user info
        Route::get('user', 'Auth\AuthController@user');
        // Logout user from application
        Route::post('logout', 'Auth\AuthController@logout');
    });
});

Route::resource('contacts', 'Contact\ContactController');
