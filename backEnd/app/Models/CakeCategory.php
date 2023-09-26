<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CakeCategory extends Model
{
    use HasFactory;

    protected $table = 'CakeCategory';

    public function cakes(): HasMany
    {
        return $this->hasMany('App\Models\Cake', 'categoryId', 'id');
    }
    public $fillable = [
        'name',
    ];
}
