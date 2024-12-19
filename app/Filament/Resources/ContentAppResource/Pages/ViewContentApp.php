<?php

namespace App\Filament\Resources\ContentAppResource\Pages;

use App\Filament\Resources\ContentAppResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewContentApp extends ViewRecord
{
    protected static string $resource = ContentAppResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
