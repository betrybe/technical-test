# Boas vindas ao projeto Crypto Index!

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório.

---

## O que deverá ser desenvolvido

Você vai desenvolver um app full-stack! Isso significa que você vai construir tanto a API quanto o front-end! 😃

A aplicação a ser contruída é um "index" para vermos o preço do BitCoin em diferentes moedas.

---

## Desenvolvimento

Começando pela API, você vai desenvolver alguns endpoints conectando APIs externas e arquivos JSON locais do projeto.

A API externa que vamos utilizar é a da **CoinDesk**. A [documentação está disponível aqui](https://www.coindesk.com/coindesk-api).

O front-end, vai basicamente servir como expositor para a API que você vai criar. São três telas simples que você precisará desenvolver.

Você pode acessar um protótipo das telas [neste link](https://www.figma.com/file/7TbyLzHSCpMRNxHEAN0QOi/Crypto-Index?node-id=0%3A1).

---

## Requisitos do projeto

#### Endpoints

### 1 - A URL base da API deve ser `localhost:[PORTA]/api` para todos os endpoints

### 2 - O endpoint `/api/login` deve receber uma requisição do tipo `POST`. O corpo da request deve conter um e-mail e uma senha válidos

Um email será considerado válido se tiver o formato `<prefixo>@<domínio>`.

A senha deverá conter 6 caracteres, todos números.

O email e senha não precisam existir num banco de dados, devem apenas seguir as regras acima.

O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "email": "email@mail.com",
  "password": "135982"
}
```

### 3 - Caso algum desses campos seja inválido, retorne um código de status 400 com o corpo `{ message: "Campos inválidos" }`.

### 4 - Caso esteja tudo certo com o login, a resposta deve ser um token de 16 caracteres, contendo letras e números aleatórios

A resposta da requisição deve ter o seguinte formato:

```json
{
  "token": "token-aqui"
}
```

### 5 - O endpoint `/api/cryto/btc` deve retornar a cotação de câmbio

Esse endpoint deve receber uma requisição do tipo `GET` e retornar o mesmo objeto retornado por [este endpoint](https://api.coindesk.com/v1/bpi/currentprice/BTC.json) da API do CoinDesk. A única diferença é que você deverá adicionar algumas chaves na resposta.

Na resposta desse endpoint, você vai adicionar as chaves `BRL`, `EUR` e `CAD` (Real, Euro e Dólar Canadense). O valor dessas moedas será calculado sobre à cotação do dólar em relação a elas e à cotação do Bitcoin em dólares. 

O valor da cotação do dólar nessas moedas **será fixo em um dado momento e deverá ser salvo em um arquivo** chamado `currencies.json` na sua API. Inicialmente, esse arquivo deverá ter o conteúdo abaixo:

> currencies.json
```json
{
  "BRL": "5.400",
  "EUR": "0.920",
  "CAD": "1.440"
}
```

Isso significa, por exemplo, que a cotação inicial do dólar será de 5,40 reais.

O valor das chaves `rate` e `rate_float`, na resposta, devem ser calculados a partir dos valores no arquivo `currencies.json` e da cotação do Bitcoin em dólares retornado pela API do CoinDesk. Esses campos devem também respeitar a tipagem (`string` e `float`, respectivamente). Os valores dos demais campos podem ser vistos no exemplo abaixo.

O cálculo deverá ser realizado da seguinte forma, para cada uma das três moedas adicionais:

- 1 dólar = 5,40 reais (salvo no arquivo);

- 1 BTC em dolares = 6,506.6717 dólares (campo `rate_float` de USD no resultado da API)

- 1 BTC em reais = 5,40 (`rate_float` de BRL) * 6,506.6717 (`rate_float` de USD) = 35,136.02718 reais.

Lembre-se de que os retornos da API são no padrão americano.

**Exemplo de retorno:**

```json
/* Retorno do endpoint `/api/crypto/btc` */
{
  "time": {
    "updated": "Mar 22, 2020 23:54:00 UTC",
    "updatedISO": "2020-03-22T23:54:00+00:00",
    "updateduk": "Mar 22, 2020 at 23:54 GMT"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "bpi": {
    "USD": {
      "code": "USD",
      "rate": "6,506.6717",
      "description": "United States Dollar",
      "rate_float": 6506.6717
    },
    "BRL": {
      "code": "BRL",
      "rate": "#Valor calculado a partir do arquivo currencies.json e API CoinDesk",
      "description": "Brazilian Real",
      "rate_float": "#Valor calculado a partir do arquivo currencies.json e API CoinDesk"
    },
    "EUR": {
      "code": "EUR",
      "rate": "#Valor calculado a partir do arquivo currencies.json e API CoinDesk",
      "description": "Euro",
      "rate_float": "#Valor calculado a partir do arquivo currencies.json e API CoinDesk"
    },
    "CAD": {
      "code": "CAD",
      "rate": "#Valor calculado a partir do arquivo currencies.json e API CoinDesk",
      "description": "Canadian Dollar",
      "rate_float": "#Valor calculado a partir do arquivo currencies.json e API CoinDesk"
    },
    "BTC": {
      "code": "BTC",
      "rate": "1.0000",
      "description": "Bitcoin",
      "rate_float": 1
    }
  }
}
```

### 6 - O endpoint `/api/crypto/btc` deve atualizar o valor da cotação das moedas `BRL`, `EUR` e `CAD`

O endpoint deve aceitar requisições `POST` e **atualizar o valor da cotação da moeda no arquivo** `currencies.json`.

O corpo da requisição deverá ter o seguinte formato:

```json
{
  "currency": "BRL",
  "value": 10000.0
}
```

O valor de `currency` só poderá ser `BRL`, `EUR` e `CAD`. `value` deve ser float e maior que zero. Ambos os campos são obrigatórios.

A resposta de uma requisição feita com sucesso será da seguinte forma:

```json
{
  "message": "Valor alterado com sucesso!"
}
```

### 7 - Caso o valor passado para atualização no endpoint `/api/crypto/btc` seja inválido, o endpoint deve retornar um código 400

Se o valor de `currency` for inválido, o corpo da resposta deve ser `{ message: "Moeda inválida" }`.

Se o valor do campo `value` for inválido, o corpo da resposta deve ser `{ message: "Valor inválido" }`.

### 8 - Requisições para o endpoint `/api/crypto/btc` devem conter um token no cabeçalho na chave `Authorization`

A chave deve ser preenchida com o valor do token que foi fornecido ao usuário no login, da seguinte forma: `Authorization: <TOKEN_DO_LOGIN>`.

Caso um token não esteja disponível ou seja inválido, deve ser retornado um erro 401, com o seguinte corpo:

```json
{
  "message": "Token inválido"
}
```

### 9 - Uma requisição para um endpoint que não exista deve retornar um código 404

O corpo da resposta deve ser o seguinte:

```json
{
  "message": "Endpoint não encontrado"
}
```

### Front-end

### 10 - A URL base do front-end deve ser `localhost:[PORTA]`

### 11 - Crie uma página de login, com a rota `login`

Essa página deve conter um formulário de e-mail e senha e um botão "Entrar".

Ao clicar no botão, deve ser feita uma requisição para o endpoint de `/api/login` da API.

Caso a requisição seja bem sucedida, o token retornado deve ser salvo no `localStorage`, e a página deve ser redirecionada para a raiz da aplicação `("/")`.

Caso contrário, a mensagem de erro deve ser exibida na tela.

Consulte o [protótipo](https://www.figma.com/file/7TbyLzHSCpMRNxHEAN0QOi/Crypto-Index?node-id=0%3A1) para ter uma ideia de como sua tela deve se parecer.

### 13 - Crie a página home, com a cotação do Bitcoin em várias moedas

Essa página é onde será possível ver a conversão de Bitcoin em outras moedas.

Ao carregar, a página deve fazer uma requisição `GET` para o endpoint `/api/crypto/btc` para obter os valores de conversão.

A página deve conter um input onde será possível digitar um valor em Bitcoins e quatro campos com os valores correspondentes em `USD`, `BRL`, `EUR` e `CAD`. Ao digitar o valor no input, os quatros campos devem ser atualizados.

Consulte o [protótipo](https://www.figma.com/file/7TbyLzHSCpMRNxHEAN0QOi/Crypto-Index?node-id=0%3A1) para ter uma ideia de como sua tela deve se parecer.

### 14 - Crie uma página para atualizar o valor da cotação de uma moeda

A página deverá conter:

- Um select onde deverá ser possível selecionar a moeda cuja cotação se deseja atualizar. Os valores possíveis devem ser `BRL`, `EUR` e `CAD`;

- Após ter selecionado uma moeda, um texto deve mostrar o valor atual da cotação;

- Um input onde o novo valor de cotação poderá ser digitado;

- Um botão "Atualizar". Ao clicar nesse botão, deve ser feita uma requisição `POST` para o endpoint `/api/crypto/btc`, com o novo valor da moeda selecionada. Caso a requisição seja bem sucedida, a página deverá ser redirecionada para a **home**. Caso contrário, a mensagem de erro retornada pela API deve ser exibida na página;

- Um botão "Voltar" que, quando clicado, redireciona para a **home**, sem atualizar o valor da moeda selecionada.

Consulte o [protótipo](https://www.figma.com/file/7TbyLzHSCpMRNxHEAN0QOi/Crypto-Index?node-id=0%3A1) para ter uma ideia de como sua tela deve se parecer.

## Comentários

* Fique à vontade para usar as boas práticas que entender necessárias para o projeto, como escolhas de arquitetura, uso de testes, linters, documentação, etc.

---

## Instruções para entregar seu projeto:

Crie esse projeto em sua conta no **GitHub** e nos envie o link do repositório.
Você pode utilizar a tecnologia que quiser tanto para o _backend_ como para o _frontend_.

ps: Lembre-se de deixar o repositório público para que possamos ter acesso ao código
