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

    // public function product_image() {
    //     return $this->hasOne(Product_image::class);
    // }

    // accessor for profile image
    public function getProductImageUrl() {
        
        if ($this->product_image_url) {
            return asset('storage/product_images/'. $this->profile_image_url);
        }
        else {
            return false;
        }

    }


}
