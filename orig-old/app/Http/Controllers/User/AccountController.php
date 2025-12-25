<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Option;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Hash;


class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);
        $user = Auth::User();
        return Inertia::render('User/Account', [
            'user' => $user,
            'logo' => $settings->site_logo
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = Auth::User();
        $user->name = $request->name;
        $user->email = $request->email;


        if($request->currentPassword)
        {
            if(Hash::check($request->currentPassword, $user->password)){

                $user->password = Hash::make($request->password);
                $user->save();

                return back();

            }else{
                return redirect()->back()->withErrors(['currentPassword' => 'The Current Password Is Invalid']);
            }
        }

        $user->save();
        return redirect()->back();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
