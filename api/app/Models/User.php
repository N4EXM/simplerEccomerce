<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Cart;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_image'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = ['profile_image_url']; // Add this line

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // relationships 
    public function cart() {
        return $this->hasOne(Cart::class);
    } 

    // Accessor method - note the naming convention
    public function getProfileImageUrlAttribute() {
        if ($this->profile_image) {
            return asset('storage/avatar_images/'. $this->profile_image);
        }
        return null; // Return null instead of false
    }

    // Alternative: If you want to keep your original method name
    // public function getAvatarImageUrl() {
    //     return $this->profile_image_url;
    // }

    // Optional: You can remove the toArray() method override
    // since the accessor is already appending the attribute
    // public function toArray() {
    //     $array = parent::toArray();
    //     $array['profile_image_url'] = $this->profile_image_url;
    //     return $array;
    // }
}