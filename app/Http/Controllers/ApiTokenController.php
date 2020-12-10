<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApiTokenController extends Controller
{
    /**
     * Update the authenticated user's API token.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function login(Request $request)
    {
        if (!$token = auth()->attempt($request->all())) {
            return response()->json(['message' => 'Campos inválidos'], 400);
        }

        $token = Str::random(16);

        $request->user()->forceFill([
            'api_token' => $token,
        ])->save();

        return $this->respondWithToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token
        ])->header('Authorization', $token);
    }

    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function me()
    {
        $user = auth()->user();

        return new JsonResponse(new UserResource($user), JsonResponse::HTTP_OK);
    }
}
