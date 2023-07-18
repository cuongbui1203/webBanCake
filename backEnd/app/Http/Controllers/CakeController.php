<?php

namespace App\Http\Controllers;

use App\Models\cake;
use Carbon\Exceptions\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;

class CakeController extends Controller
{
    /**
     * Display all product.
     */
    public function index()
    {
        try {
            $res = DB::table('cake')->select('name', 'price', "detail")->get();
            return $this->sendResponse($res, 'Get all cake success');
        } catch (Exception $e) {
            return $this->sendError('can`t get all product', [$e]);
        }
    }

    /**
     * Get Product by ID
     */
    public function getId($id)
    {

        try {
            $res = DB::table('cake')->where('id', '=', $id)->get();
            return $this->sendResponse($res, `Get product id ` . $id . ` success`);
        } catch (Exception $e) {
            return $this->sendError('can`t get product id ' . $id, [$e]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required|numeric',
            'detail' => 'string',
            'picture' => 'image|mimes:jpg,png,jpeg,gif,svg'
        ]);
        if ($validator->fails()) {
            return $this->sendError('validator Error', $validator->errors());
        }

        // $cake = cake::create([
        //     'name' => $request->name,
        //     'price' => $request->price,
        //     // ''
        // ]);

        $cake = new cake();
        $cake->name = $request->name;
        $cake->price = $request->price;
        $cake->detail = $request->detail ? $request->detail : "";
        $cake->save();
        return $this->sendResponse([$cake], 'create product success');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|numeric',
            'value' => 'required',
            'id' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validator Error', $validator->errors());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        try {
            cake::where('id', $request->cakeId)->delete();
            return $this->sendResponse([], "delete product has id = " . $request->cakeId . " success");
        } catch (Exception $e) {
            return $this->sendError('err', [$e]);
        }
    }
}
