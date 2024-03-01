<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Processzor extends Model
{
    use HasFactory;
    protected $fillable = ['gyarto', 'tipus', 'orajel', 'architektura', 'megjelenes_datuma'];
}
