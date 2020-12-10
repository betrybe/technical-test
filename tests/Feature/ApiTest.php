<?php

namespace Tests\Feature;

use App\Models\User;

use Tests\TestCase;

class ApiTest extends TestCase
{

    public function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->create();
        $this->withHeader('Authorization', 'Bearer ' . $user->api_token);

    }

    /**
     * Test Get Contacts
     *
     * @return void
     */
    public function testLogin()
    {
        $user = User::factory()->create(['password' => bcrypt(123456)]);
        $response = $this->post(route('login'), ['email' => $user->email, 'password' => 123456]);

        $response->assertStatus(200);
    }

    /**
     * Test Post Contacts
     *
     * @return void
     */
    public function testGetCryptoRoute()
    {
        $response = $this->get(
            route('crypto.btc'));
        $response->assertStatus(200);

    }

    /**
     * Test Post Contacts
     *
     * @return void
     */
    public function testPutCryptoRoute()
    {
        $response = $this->put(
            route('crypto.btc'), ['currency' => 'BRL', 'value' => 5.50]);
        $response->assertStatus(200);

    }

    /**
     * Test Get Currencies
     *
     * @return void
     */
    public function testGetCurrencies()
    {
        $response = $this->get(
            route('currencies'));
        $response->assertStatus(200);

    }

    /**
     * Test Get Me
     *
     * @return void
     */
    public function testGetMe()
    {
        $response = $this->get(
            route('me'));
        $response->assertStatus(200);

    }

    /**
     * Test PUT Currency
     *
     * @return void
     */
    public function testPutCryptoInvalidCurrency()
    {

        $response = $this->put(
            route('crypto.btc'), ['currency' => 'JPY', 'value' => 5.50]);
        $response->assertStatus(400)->assertExactJson(['message' => 'Moeda inválida']);
    }

    /**
     * Test PUT Currency
     *
     * @return void
     */
    public function testPutCryptoInvalidValue()
    {

        $response = $this->put(
            route('crypto.btc'), ['currency' => 'BRL', 'value' => 'some_string']);
        $response->assertStatus(400)->assertExactJson(['message' => 'Valor inválido']);
    }
}
