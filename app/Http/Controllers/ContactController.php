<?php

namespace App\Http\Controllers;

use App\Models\ContentApp;
use Illuminate\Http\Request;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        $imageContact = ContentApp::where('content_key', 'image-contact-key')->get()->first();
        $emailContact = ContentApp::where('content_key', 'email-contact-key')->get()->first();
        $phoneContact = ContentApp::where('content_key', 'phone-contact-key')->get()->first();
        $contactUrl = ContentApp::where('content_key', 'contact-url-key')->get()->first();
        $instagramUrl = ContentApp::where('content_key', 'instagram-url-key')->get()->first();
        $facebookUrl = ContentApp::where('content_key', 'facebook-url-key')->get()->first();
        $linkedInUrl = ContentApp::where('content_key', 'linkedin-url-key')->get()->first();
        return inertia('Contact/Index', [
            'title' => 'contact',
            'content' => [
                'imageContact' => $imageContact->content_image,
                'emailContact' => $emailContact->content_value,
                'phoneContact' => $phoneContact->content_value,
                'contactUrl' => $contactUrl->content_value
            ],
            'socialMedia' => [
                'instagram' => $instagramUrl->content_value,
                'facebook' => $facebookUrl->content_value,
                'linkedIn' => $linkedInUrl->content_value
            ]
        ]);
    }
}
