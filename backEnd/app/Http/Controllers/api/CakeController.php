<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Cake;
use Carbon\Exceptions\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CakeController extends Controller
{
    /**
     * Display all product.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if ($_GET) {
            $id = $_GET['id'];
            try {
                $res = DB::table('Cake')->where('id', '=', $id)->get();
                return $this->sendResponse(`Get product id ` . $id . ` success`, $res);
            } catch (Exception $e) {
                return $this->sendError('can`t get product id ' . $id, [$e]);
            }
        }
        try {
            $res = DB::table('Cake')->get();
            return $this->sendResponse('Get all Cake success', $res);
        } catch (Exception $e) {
            return $this->sendError('can`t get all product', [$e]);
        }
    }


    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'price'     => 'required|numeric',
            'quantity'  => 'required|numeric|min:1',
            'detail'    => 'string',
            'picture'   => 'image|mimes:jpg,png,jpeg,gif,svg'
        ]);
        if ($validator->fails()) {
            return $this->sendError('validator Error', $validator->errors());
        }

        // $Cake = Cake::create([
        //     'name' => $request->name,
        //     'price' => $request->price,
        //     // ''
        // ]);

        $Cake = new Cake();
        $Cake->name = $request->name;
        $Cake->price = $request->price;
        $Cake->detail = $request->detail ? $request->detail : "";
        $Cake->quantity = $request->quantity;
        $Cake->save();
        return $this->sendResponse('create product success', [$Cake]);
    }

    /**
     * update product
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $validator = Validator::make($request->all(), [
            'key' => 'required|string',
            'value' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validator Error', $validator->errors());
        }
        if (DB::table('Cake')->where('id', $id)->exists()) {
            Cake::where('id', '=', $id)->update([$request->key => $request->value]);
            return $this->sendResponse('update product has id = ' . $id . ' success');
        }
        return $this->sendError('not fount product has id = ' . $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, int $CakeId)
    {
        try {
            Cake::where('id', $CakeId)->delete();
            return $this->sendResponse("delete product has id = " . $CakeId . " success");
        } catch (Exception $e) {
            return $this->sendError('err', [$e]);
        }
    }
}
