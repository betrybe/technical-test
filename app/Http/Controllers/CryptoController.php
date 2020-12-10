<?php

namespace App\Http\Controllers;

use App\Http\Requests\CryptoBtcRequest;
use App\Repositories\CryptoRepository;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

class CryptoController extends Controller
{
    protected $cryptoRepository;

    public function __construct(CryptoRepository $crypto)
    {
        $this->cryptoRepository = $crypto;
    }

    /**
     * Index Route
     * @return JsonResponse
     */
    public function index()
    {
        return new JsonResponse($this->cryptoRepository->getData(), JsonResponse::HTTP_OK);
    }

    /**
     * Update Route
     * @param CryptoBtcRequest $request
     * @return JsonResponse
     */
    public function update(CryptoBtcRequest $request)
    {
        $data = $request->validated();

        $this->cryptoRepository->update($data);

        return new JsonResponse(['message' => "Valor alterado com sucesso!"], JsonResponse::HTTP_OK);
    }

    /**
     * Get Currencies Json Data
     * @return JsonResponse
     */
    public function currencies()
    {
        $data = $this->cryptoRepository->currenciesJsonData();

        return new JsonResponse(['data' => $data['data'], 'currencies' => $data['currencies']], JsonResponse::HTTP_OK);
    }
}
