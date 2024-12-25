<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContentAppResource\Pages;
use App\Filament\Resources\ContentAppResource\RelationManagers;
use App\Models\ContentApp;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContentAppResource extends Resource
{
    protected static ?string $model = ContentApp::class;

    protected static ?string $navigationIcon = 'icon-body-text';

    protected static ?string $navigationLabel = 'Content';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('content_key')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                        Forms\Components\Textarea::make('content_value')
                            ->columnSpanFull(),
                        Forms\Components\FileUpload::make('content_image')
                            ->image()
                            ->directory('app-content')
                            ->columnSpanFull(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('content_key')
                    ->searchable(),
                Tables\Columns\TextColumn::make('content_value')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('content_image'),
                Tables\Columns\TextColumn::make('user.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContentApps::route('/'),
            'create' => Pages\CreateContentApp::route('/create'),
            'view' => Pages\ViewContentApp::route('/{record}'),
            'edit' => Pages\EditContentApp::route('/{record}/edit'),
        ];
    }
}
