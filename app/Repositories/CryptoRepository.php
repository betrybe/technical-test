<?php

namespace App\Repositories;

use Illuminate\Http\UploadedFile;

class CryptoRepository
{
    /**
     * Upload an attachment
     * @return array
     */
    public function getData()
    {
        $json = storage_path('app/public/currencies.json');
        $currencies = json_decode(file_get_contents($json), true);

        $url = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";
        $json = file_get_contents($url);
        $json_data = json_decode($json, true);

        $rate_float = (float)number_format((float)$json_data['bpi']['USD']['rate_float'] * (float)$currencies['BRL'], 4, '.', '');
        $json_data['bpi']['BRL']['code'] = "BRL";
        $json_data['bpi']['BRL']['rate'] = number_format($rate_float, 4, '.', ',');
        $json_data['bpi']['BRL']['description'] = "Brazilian Real";
        $json_data['bpi']['BRL']['rate_float'] = $rate_float;

        $rate_float = (float)number_format((float)$json_data['bpi']['USD']['rate_float'] * (float)$currencies['CAD'], 4, '.', '');
        $json_data['bpi']['CAD']['code'] = "CAD";
        $json_data['bpi']['CAD']['rate'] = number_format($rate_float, 4, '.', ',');
        $json_data['bpi']['CAD']['description'] = "Canadian Dollar";
        $json_data['bpi']['CAD']['rate_float'] = $rate_float;

        $rate_float = (float)number_format((float)$json_data['bpi']['USD']['rate_float'] * (float)$currencies['EUR'], 4, '.', '');
        $json_data['bpi']['EUR']['code'] = "EUR";
        $json_data['bpi']['EUR']['rate'] = number_format($rate_float, 4, '.', ',');
        $json_data['bpi']['EUR']['description'] = "Euro";
        $json_data['bpi']['EUR']['rate_float'] = $rate_float;

        return $json_data;
    }

    /**
     * Update crypto data
     * @param array $data
     * @return array
     */
    public function update(array $data)
    {
        $json = storage_path('app/public/currencies.json');
        $currencies = json_decode(file_get_contents($json), true);
        $currencies[$data['currency']] = number_format($data['value'], 3, '.', ',');
        $newJsonString = json_encode($currencies);
        file_put_contents(storage_path('app/public/currencies.json'), stripslashes($newJsonString));
        $json = storage_path('app/public/currencies.json');
        $currencies = json_decode(file_get_contents($json), true);

        return $currencies;
    }

    /**
     * Update crypto data
     * @param array $data
     * @return array
     */
    public function currenciesJsonData()
    {
        $json = storage_path('app/public/currencies.json');
        $currencies = json_decode(file_get_contents($json), true);

        $data = [];

        foreach ($currencies as $key => $currency) {

            $returnData['currency'] = $key;
            $returnData['value'] = $currency;

            $data[] = $returnData;
        }

        return ['data' => $data, 'currencies' => $currencies];
    }
}
