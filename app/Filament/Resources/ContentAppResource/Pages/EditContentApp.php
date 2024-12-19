<?php

namespace App\Filament\Resources\ContentAppResource\Pages;

use App\Filament\Resources\ContentAppResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditContentApp extends EditRecord
{
    protected static string $resource = ContentAppResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
