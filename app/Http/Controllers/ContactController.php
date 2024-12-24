<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return inertia('Contact/Index');
    }
}
