<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    
    public function index(Request $request, Category $category) {

        $categories = $category->all();

        return response()->json([
            'success' => true,
            'categories' => $categories
        ]);

    }

}
