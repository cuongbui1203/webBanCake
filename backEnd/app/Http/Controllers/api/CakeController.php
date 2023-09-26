<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Cake;
use Carbon\Exceptions\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use SebastianBergmann\LinesOfCode\LineCountingVisitor;

class CakeController extends Controller
{
    /**
     * Display all product.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            try {
                $res = DB::table('Cake')->where('id', '=', $id)->get();
                return $this->sendResponse(`Get product id ` . $id . ` success`, $res);
            } catch (Exception $e) {
                return $this->sendError('can`t get product id ' . $id, [$e]);
            }
        }

        $limit = isset($_GET['limit']) ? $_GET['limit'] : 25;
        $offset = isset($_GET['offset']) ? $_GET['offset'] : 0;
        try {
            $res = DB::table('Cake')->limit($limit)->offset($offset)->get();

            $next = count($res) == $limit ? $this->createUrl(['limit' => $limit,'offset' => $limit + $offset]) : null;
            $previous = null;

            if ($offset !== 0) {
                if ($offset - $limit >= 0) {
                    $previous = $this->createUrl([
                                        'limit' => $limit,
                                        'offset' => $offset - $limit
                                    ]);
                } else {
                    $previous = $this->createUrl(['limit' => $offset,'offset' => 0]);
                }
            }

            return $this->sendResponse('Get all Cake success', $res, $next, $previous);
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
            'picture'   => 'image|mimes:jpg,png,jpeg,gif,svg',
            'categoryId' => 'required|exists:cakeCategory,id'
        ]);
        if ($validator->fails()) {
            return $this->sendError('validator Error', $validator->errors());
        }

        $cake = new cake();
        $cake->name = $request->name;
        $cake->price = $request->price;
        $cake->detail = $request->detail ? $request->detail : "";
        $cake->quantity = $request->quantity;
        $cake->categoryId = $request->categoryId;
        $cake->save();
        return $this->sendResponse('create product success', [$cake]);
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

    public function search(Request $req)
    {
        if (!isset($_GET['q'])) {
            return $this->sendError('k co truy van');
        } else {
            $limit = isset($_GET['limit']) ? $_GET['limit'] : 25;
            $offset = isset($_GET['offset']) ? $_GET['offset'] : 0;
            $res = Cake::where('name', 'like', '%' . $_GET['q'] . '%')->offset(2)->limit($limit)->get();

            $next = count($res) < $limit ? null : $this->createUrl([
                'q' => $_GET['q'],
                'offset' => $offset + $limit,
                'limit' => $limit
            ]);
            $previous = $offset == 0 ? null : $this->createUrl([
                'q' => $_GET['q'],
                'offset' => $offset - $limit < 0 ? 0 : $offset - $limit,
                'limit' => $offset - $limit < 0 ? $offset : $limit
            ]);


            return $this->sendResponse(result:$res, next:$next, previous:$previous);
        }
    }
}
