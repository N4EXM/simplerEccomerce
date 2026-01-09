<?php

namespace App\Http\Controllers;

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

}
