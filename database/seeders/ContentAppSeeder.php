<?php

namespace Database\Seeders;

use App\Models\ContentApp;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentAppSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('email', 'rafli@gmail.com')->first();
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'service-description-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'job-position-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'job-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'job-description-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'user-image-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'latest-project-description-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'contact-description-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'all-project-description-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'image-contact-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'email-contact-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'phone-contact-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'contact-url-key'
        ]);
    }
}
