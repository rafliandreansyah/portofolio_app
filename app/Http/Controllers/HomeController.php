<?php

namespace App\Http\Controllers;

use App\Models\ContentApp;
use App\Models\Portfolio;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $projects = Portfolio::with('tools')->take(9)->get();
        $skills = Skill::all();

        $job = ContentApp::where('content_key', 'job-key')->get()->first();
        $jobPosition = ContentApp::where('content_key', 'job-position-key')->get()->first();
        $jobDescription = ContentApp::where('content_key', 'job-description-key')->get()->first();
        $userImage = ContentApp::where('content_key', 'user-image-key')->get()->first();
        $serviceDescription = ContentApp::where('content_key', 'service-description-key')->get()->first();
        $latestProjectDescription = ContentApp::where('content_key', 'latest-project-description-key')->get()->first();
        $contactDescription = ContentApp::where('content_key', 'contact-description-key')->get()->first();
        $contactUrl = ContentApp::where('content_key', 'contact-url-key')->get()->first();
        $instagramUrl = ContentApp::where('content_key', 'instagram-url-key')->get()->first();
        $facebookUrl = ContentApp::where('content_key', 'facebook-url-key')->get()->first();
        $linkedInUrl = ContentApp::where('content_key', 'linkedin-url-key')->get()->first();
        return Inertia::render('Home/Index', [
            'projects' => $projects,
            'skills' => $skills,
            'content' => [
                'job' => $job->content_value,
                'jobPosition' => $jobPosition->content_value,
                'jobDescription' => $jobDescription->content_value,
                'userImage' => $userImage->content_image,
                'serviceDescription' => $serviceDescription->content_value,
                'latestProjectDescription' => $latestProjectDescription->content_value,
                'contactDescription' => $contactDescription->content_value,
                'contactUrl' => $contactUrl->content_value
            ],
            'title' => 'home',
            'socialMedia' => [
                'instagram' => $instagramUrl->content_value,
                'facebook' => $facebookUrl->content_value,
                'linkedIn' => $linkedInUrl->content_value
            ]
        ]);
    }
}
