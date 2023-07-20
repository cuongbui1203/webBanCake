<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    /**
     * Register new account
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => "required|string|min:6",
        'name' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));
        return response()->json([
        'message' => 'register new user success',
        'user' => $user
        ], 200);
    }

    /**
     * Get user info
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(['user' => auth()->user()], 200);
    }
    /**
     * change password for user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'old_password' => 'required|string|min:6',
        'new_password' => 'required|string|confirmed|min:6'
        ]);
        if ($validator->fails()) {
            return $request->json($validator->errors(), 400);
        }
        $userId = auth()->user()->id;
        $user = User::where('id', $userId)->update([
        'password' => bcrypt($request->new_password)
        ]);
        return response()->json([
        'success' => true,
        'message' => 'change Password Success',
        'user' => $user
        ], 201);
    }

    /**
     * user login
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required|string|min:6'
        ]);
        if (! $token = auth()->attempt($validator->validated())) {
            return $this->sendError('Validator Error', $validator->errors(), 422);
        }
        return $this->respondWithToken($token);
    }

    /**
     * user logout
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json([
        'success' => true,
        'message' => 'Logout success'
        ]);
    }

    /**
     * refresh user token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * add Item to Cart
     *
     * @param Request $request
     * @return void|\Illuminate\Http\JsonResponse
     */
    public function addItemToCart(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'itemId' => "required",
        "quantity" => "required|numeric|min:0",
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validator Error', $validator->errors(), 422);
        }
        $cart = json_decode(auth()->user()->cart);
        if ($cart[$request->id]) {
            $cart[$request->id] += $request->quantity;
        } else {
            $cart[$request->id] = $request->quantity;
        }
        return response()->json($cart);
    }

    /**
     * Send token back to user
     *
     * @param string $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken(string $token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
