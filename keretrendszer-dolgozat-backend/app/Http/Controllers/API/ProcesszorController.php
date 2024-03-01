<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Processzor;

class ProcesszorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \App\Models\Processzor::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $processzor = Processzor::create([
            'gyarto' => $request->gyarto,
            'tipus' => $request->tipus,
            'orajel' => $request->orajel,
            'architektura' => $request->architektura,
            'megjelenes_datuma' => $request->megjelenes_datuma,
        ]);
        return response()->json($processzor, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $processzor = Processzor::find($id);
        if(is_null($processzor)) {
            return response()->json(['message' => "Nincs ilyen processzor: $id"], 404);
        } else {
            return response()->json($processzor, 200);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $processzor = Processzor::find($id);
        if(is_null($processzor)) {
            return response()->json(['message' => "Nincs ilyen processzor: $id"], 404);
        } else {
            $processzor->update($request->all());
            $processzor->save();
            return response()->json($processzor, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $processzor = Processzor::find($id);
        if(is_null($processzor)) {
            return response()->json(['message' => "Nincs ilyen processzor: $id"], 404);
        } else {
            $processzor->delete();

            return response()->noContent();
        }
    }
}
