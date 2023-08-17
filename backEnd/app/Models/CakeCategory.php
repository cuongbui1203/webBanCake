<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CakeCategory extends Model
{
    use HasFactory;

    protected $table = 'CakeCategory';
    public $fillable = [
        'name',
    ];
}
