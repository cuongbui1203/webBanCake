<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cake extends Model
{
    use HasFactory;

    protected $table = 'Cake';

    public function cakeCategory(): HasOne
    {
        return $this->hasOne(CakeCategory::class, 'id', 'categoryId');
    }

    protected $fillable = [
        'name',
        'detail',
        'detailShot',
        'price',
        'picture',
        'quantity',
        'categoryId'
    ];
}