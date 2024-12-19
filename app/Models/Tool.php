<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tool extends Model
{
    use HasFactory;

    protected $fillable = [
        'tool_name',
        'tool_icon',
    ];

    // Relasi ke tabel pivot portfolio_tools
    public function portfolios()
    {
        return $this->belongsToMany(Portfolio::class, 'portfolio_tools', 'tool_id', 'portfolio_id')
            ->withTimestamps();
    }
}
