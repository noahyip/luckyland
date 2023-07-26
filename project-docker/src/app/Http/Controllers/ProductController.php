<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all()->toArray();
        return array_reverse($products);      
    }

    public function store(Request $request)
    {
        $input = $request->all();
        print_r($input);
        $rawData = $input['rawData'];
        $dataArray = explode(";", $rawData);
        
        $product = new Product([
            'poNum' => substr($dataArray[0], 2),
            'quantity' => substr($dataArray[2], 3),
            'platNum' => $input['platNum']
        ]);
        $product->save();
        
        return response()->json(['product' => $product]);
    }
    
    public function destroy($id)
    {   
        $dataArray = explode(";", $id);
        print_r($id);
        $product = Product::where([
            ['poNum', substr($dataArray[1], 2)],
            ['quantity', substr($dataArray[3], 2)],
            ['platNum', $dataArray[0]],
        ])->first();
        $product->delete();
        return response()->json('Product deleted!');
    }
}
