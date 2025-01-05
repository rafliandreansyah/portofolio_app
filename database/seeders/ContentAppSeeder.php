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
            'content_key' => 'service-description-key',
            'content_value' => 'We provide professional application development services for various platforms, including mobile, and web applications.  We are ready to help you create innovative, responsive, and high-quality applications tailored to your business needs.'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'job-position-key',
            'content_value' => 'Software Engineer'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'job-key',
            'content_value' => 'Web Dev | Mobile Dev'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'job-description-key',
            'content_value' => 'Hello everyone, my name is rafli. I am a developer proficient in technologies such as React, Flutter, and Android. I have a strong passion for learning and am constantly striving to grow and improve. With dedication and a high level of determination, I am ready to take on new challenges and deliver the best solutions through technology.'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'user-image-key',
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'latest-project-description-key',
            'content_value' => 'This project highlights our expertise in creating scalable, high-performance applications tailored to meet the client\'s specific requirements.'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'contact-description-key',
            'content_value' => 'Got a project idea or just want to chat about tech? Feel free to reach out! Whether it’s about building an app, exploring new opportunities, or simply sharing ideas, I’d love to hear from you. Let’s connect and make something amazing together! 🚀'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'all-project-description-key',
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'image-contact-key'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'email-contact-key',
            'content_value' => 'rafliandreansyah957@gmail.com'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'phone-contact-key',
            'content_value' => '(+62) 81232720821'

        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'contact-url-key',
            'content_value' => 'https://wa.link/b4king'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'instagram-url-key',
            'content_value' => 'https://www.instagram.com/rafliandrean_'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'facebook-url-key',
            'content_value' => 'https://www.facebook.com/rafliandreansyah20'
        ]);
        ContentApp::created([
            'user_id' => $user->id,
            'content_key' => 'linkedin-url-key',
            'content_value' => 'https://www.linkedin.com/in/rafli-andreansyah-86299217a'
        ]);
    }
}
