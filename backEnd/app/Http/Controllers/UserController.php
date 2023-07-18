<?php

namespace App\Http\Controllers;

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
     * @return void
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
     * @return void
     */
    public function me()
    {
        return response()->json(['user' => auth()->user()], 200);
    }
    /**
     * change password for user
     *
     * @param Request $request
     * @return void
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
     * @return void
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
     * @return void
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
     * @return void
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }


    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    
}