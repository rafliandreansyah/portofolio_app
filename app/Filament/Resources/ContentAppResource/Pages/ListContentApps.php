<?php

namespace App\Filament\Resources\ContentAppResource\Pages;

use App\Filament\Resources\ContentAppResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListContentApps extends ListRecords
{
    protected static string $resource = ContentAppResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
