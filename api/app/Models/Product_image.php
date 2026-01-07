<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product_image extends Model
{
    
    protected $fillable = [
        'image_url'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'image_url' => 'string'
    ];

    public function products() {
        return $this->belongsTo(Product::class);
    }

}
