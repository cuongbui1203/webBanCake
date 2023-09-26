<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Cake;
use App\Models\CakeCategory;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CakeCategoryController extends Controller
{
    /**
     * get all cake category
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if (isset($_GET['id'])) {
            try {
                $res = CakeCategory::where('id', '=', $_GET['id'])->get();
                return $this->sendResponse('lay category co id = ' . $_GET['id'] . ' thanh cong', $res);
            } catch (Exception $e) {
                return $this->sendError('co loi khi lay du lieu', [$e]);
            }
        }
        $limit = isset($_GET['limit']) ? $_GET['limit'] : 10;
        $offset = isset($_GET['offset']) ? $_GET['offset'] : 0;

        $res = CakeCategory::limit($limit)->offset($offset)->get();
        $next = null;
        $previous = null;
        if (count($res) == $limit) {
            $next = $this->createUrl([
                'limit' => $limit,
                'offset' => $limit + $offset
            ]);
        }
        if ($offset != 0) {
            if ($offset - $limit >= 0) {
                $previous = $this->createUrl([
                                    'limit' => $limit,
                                    'offset' => $offset - $limit
                                ]);
            } else {
                $previous = $this->createUrl(['limit' => $offset,'offset' => 0]);
            }
        }
        return $this->sendResponse('gui thanh cong category cho client', $res, $next, $previous);
    }

    /**
     * create 1 record of cake category
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('validator error', $validator->errors());
        }
        $cate = new CakeCategory();
        $cate->name = $request->name;
        $cate->save();
        return $this->sendResponse('tao category thanh cong', [$cate]);
    }

    public function getProductInCategory(int $categoryId)
    {
        $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
        try {
            $cakes = Cake::where('categoryId', '=', $categoryId)->offset($offset)->limit($limit)->get();
            if (count($cakes) === 0) {
                return $this->sendError('k co du lieu');
            }
            $next = count($cakes) < $limit ? null : $this->createUrl([
                                                'offset' => $offset + $limit,
                                                'limit' => $limit
                                            ]);
            $previous = $offset === 0 ? null : $this->createUrl([
                                                'offset' => $offset - $limit < 0 ? 0 : $offset - $limit,
                                                'limit' => $offset - $limit < 0 ? $offset : $limit
                                            ]);

            return $this->sendResponse("lay du lieu thanh cong", $cakes, $next, $previous);
        } catch (Exception $e) {
            return $this->sendError("lay that bai", [$e]);
        }
    }

    public function test()
    {
        return response()->json([
            'add' => Cake::where('categoryId', '=', 2)->get()
        ]);
    }
}
