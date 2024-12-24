<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])
    ->name('home');
Route::get('/project', [ProjectController::class, 'index'])
    ->name('project');
Route::get('/contact', [ContactController::class, 'index'])
    ->name('contact');
