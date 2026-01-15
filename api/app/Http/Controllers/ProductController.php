<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    
    public function index(Request $request, Product $product) {

        $products = $product
                    ->where('status', true)
                    ->orderBy('created_at', 'desc')
                    ->get();


        return response()->json([
            'success' => true,
            'products' => $products,
            // 'categories' => $categories
        ]);

    }


    public function getMyProducts(User $user) 
    {    
        $products = $user->products()->get();
    
        return response()->json([
            'success' => true,
            'products' => $products
        ]);
    }

}
