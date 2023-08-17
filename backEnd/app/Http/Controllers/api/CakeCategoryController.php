<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\CakeCategory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CakeCategoryController extends Controller
{
    /**
     * get all cake category
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->sendResponse('gui thanh cong category cho client', [CakeCategory::get()]);
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
        return $this->sendResponse('tao thanh cong');
    }
}
