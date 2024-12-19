<?php

namespace App\Filament\Resources\ContentAppResource\Pages;

use App\Filament\Resources\ContentAppResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateContentApp extends CreateRecord
{
    protected static string $resource = ContentAppResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();

        return $data;
    }
}
