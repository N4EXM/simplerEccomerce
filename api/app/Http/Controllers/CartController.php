<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    
    public function getUserCart(User $user) {

        $cart = $user
                ->cart()
                ->cart_items()
                ->get();

        if ($cart) {
            return response()->json([
                'success' => true,
                'cart' => $cart
            ]);
        }
        else {
            return response()->json([
                'success' => false,
            ]);
        }

    }

}
