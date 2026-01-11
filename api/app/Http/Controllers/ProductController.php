<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    
    public function index(Request $request, Product $product) {

        $products = $product->where('status', true)->orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'success' => true,
            'products' => $products
        ]);

    }

    // public function getUserProducts(User $user) {

    //     $products = $user
    //             ->products()
    //             ->latest()
    //             ->get();

    //     // Always return products, just indicate if empty
    //     return response()->json([
    //         'success' => true,
    //         'products' => $products,
    //         'has_products' => $products->isNotEmpty(),
    //         'count' => $products->count()
    //     ]);

    // }

    public function getMyProducts(User $user) 
    {    
        $products = $user->products()->get();
    
        return response()->json([
            'success' => true,
            'products' => $products
        ]);
    }

}
