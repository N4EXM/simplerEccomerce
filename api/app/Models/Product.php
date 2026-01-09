<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'product_image_url'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    // public function product_image() {
    //     return $this->hasOne(Product_image::class);
    // }

    protected $appends = ['product_image_url'];

    // accessor for profile image
    public function getProductImageUrlAttribute() {
        if ($this->product_image) {
            return asset('storage/product_images/'. $this->product_image);
        }
        return null; // Return null instead of false
    }


}
