<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'msg' => 'Login gagal'
            ], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('token_login')->plainTextToken;

        return response()->json([
            'msg' => 'Berhasil Login',
            'token' => $token,
            'user' => $user,
        ], 200);
    }


    function readLogin()
    {
        $tokens = \Laravel\Sanctum\PersonalAccessToken::with('tokenable')->get();

        $logins = $tokens->map(function ($token) {
            return [
                'user_id' => $token->tokenable->id,
                'user_name' => $token->tokenable->name,
                'email' => $token->tokenable->email,
                'token' => $token->token
            ];
        });

        return response()->json([
            'active_logins' => $logins
        ]);
    }

    function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'msg' => 'Berhasil logout'
        ], 200);
    }
}
