<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(){
        return view('Login');
    }

    function submit(Request $request){
        $request->validate([
            "email" => 'required|email',
            'password' => "required",
        ]);

        $data = $request->only('email', 'password');
        if(Auth::attempt($data)){
            $user = Auth::user();

            if($user->role === 'admin'){
                return redirect()->route('admin.dashboard')->with('berhasil', 'selamat datang');
            }else{
                return redirect()->route('user.home');
            }
        }else{
            return redirect()->back()->with('gagal', 'Email atau Password yang anda masukkan salah');
        }

    }

    function logout(){
        Auth::logout();
        return redirect()->route('login');
    }
}
