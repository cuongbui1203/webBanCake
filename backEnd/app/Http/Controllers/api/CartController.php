<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:api");
    }

    /**
     * get cart info of user
     *
     * @param integer $userId
     * @return \Illuminate\Http\JsonResponse
     */
    function getCart(int $userId)
    {
        $cart = User::where("id", "=", $userId)->select("cart")->get()[0]->cart;
        if ($cart == "") {
            return $this->sendResponse("no item");
        }
        $cart =  json_decode(base64_decode($cart));
        return $this->sendResponse("get Cart success", $cart);
    }


    /**
     * Update Cart
     *
     * @param Request $request
     * @param int $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateCart(Request $request, int $userId)
    {
        $validator = Validator::make($request->all(), [
            "idProduct" => "required",
            'quantity' => 'required|numeric|min:1',
            'type' => 'required|in:0,1|numeric'
        ]);
        if ($validator->fails()) {
            return $this->sendError("Validator Error", $validator->errors(), 422);
        }
        $idProduct = $request->idProduct;
        $quantity = (int)$request->quantity;
        $type = $request->type;
        $tt = false;
        $cart = $this->base64ToArr(User::where("id", "=", $userId)->select("cart")->get()[0]->cart);
        // return response()->json($cart);
        if (count($cart) != 0) {
            for ($i = 0; $i < count($cart); $i++) {
                if ($cart[$i][0] == $idProduct) {
                    $tt = true;
                    if ($type == 1) {
                        $cart[$i][1] += $quantity;
                    } else {
                        $cart[$i][1] -= $quantity;
                    }
                }
            }
        } else {
            $tt = true;
            array_push($cart, [$idProduct,$quantity]);
        }
        if (!$tt) {
            array_push($cart, [$idProduct,$quantity]);
        }
        User::where('id', '=', $userId)->update(['cart' => $this->arrToBase64($cart)]);
        return response()->json($cart);
    }

    /**
     * remove All Item in cart
     *
     * @param integer $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function removeCart(int $userId)
    {
        try {
            User::where('id', '=', $userId)->update(['cart' => $this->arrToBase64([])]);
            return $this->sendResponse("remove Cart success");
        } catch (Exception $e) {
            return $this->sendError('Error', [$e]);
        }
    }

    /**
     * convert base64 hash to array
     *
     * @param string $hash
     * @return array
     */
    protected function base64ToArr(string $hash)
    {
        return (json_decode(base64_decode($hash)));
    }

    /**
     * convert array to base64 hash
     *
     * @param array $arr
     * @return string
     */
    protected function arrToBase64(array $arr)
    {
        return base64_encode(json_encode($arr));
    }
}
