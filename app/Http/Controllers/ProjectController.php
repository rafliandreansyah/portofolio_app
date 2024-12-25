<?php

namespace App\Http\Controllers;

use App\Models\ContentApp;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        $projects = Portfolio::with('tools')->get();
        $allProjectDescription = ContentApp::where('content_key', 'all-project-description-key')->get()->first();
        $contactDescription = ContentApp::where('content_key', 'contact-description-key')->get()->first();
        $contactUrl = ContentApp::where('content_key', 'contact-url-key')->get()->first();
        $instagramUrl = ContentApp::where('content_key', 'instagram-url-key')->get()->first();
        $facebookUrl = ContentApp::where('content_key', 'facebook-url-key')->get()->first();
        $linkedInUrl = ContentApp::where('content_key', 'linkedin-url-key')->get()->first();
        return inertia('Project/Index', [
            'title' => 'project',
            'projects' => $projects,
            'content' => [
                'contactDescription' => $contactDescription->content_value,
                'allProjectDescription' => $allProjectDescription->content_value,
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
