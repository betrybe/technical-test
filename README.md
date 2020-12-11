BeTryBr Teste Técnico
=======================

Tecnologias utilizadas:
-----------------------

 * PHP v7.3 or higher
 * Laravel v8.12
 * MySql v8.0.22
 * Vue v2.6.11

Instação e execução do projeto
------------

A instalação do projeto pode ser muito simples utilizando o docker-composer, você deve apenas seguir este passo a passo:

Clone o projeto:

    https://github.com/PedroFellipe/technical-test.git
    
Após efetuar o clone do projeto acesse a pasta e rode o seguinte comando para instalar as dependências:

    composer install
   
Após a instalação copie o arquivo .env.example (Caso esteja em um ambiente linux, basta executar o seguinte comando):

    cp .env.example .env
    
Utilize o seguinte comando para subir a aplicação usando docker-compose:

    docker-compose --build    

Logo em seguinte execute o comando abaixo para rodar as migrations do projeto:

    docker-compose exec php-fpm php artisan migrate
    
Utilize o seguinte comando para rodar os seeds para popular a base de dados com o usuário padrão:

    docker-compose exec php-fpm php artisan db:seed
    
Execute o comando abaixo para gerar a chave da aplicação:

    docker-compose exec php-fpm php artisan key:generate

Agora, você deve dar permissões na pasta storage
    
    docker-compose exec php-fpm chmod -R 777 storage

Após isso, acesse a URL abaixo e o projeto já deve estar funcionando corretamente:

    http://localhost:8000/
      
Os dados para login do usuário são:

    email: admin@admin.com
    senha: 123456

-----------------------
Caso você prefira fazer a instalação do projeto sem utilizar o docker, poderá seguir os seguintes passos:

Clone o projeto:

    https://github.com/PedroFellipe/netshowme-test.git

Após efetuar o clone do projeto acesse a pasta e rode o seguinte comando para instalar as dependências:


    composer install
    
Após a instalação copie o arquivo .env.example (Caso esteja em um ambiente linux, basta executar o seguinte comando):


    cp .env.example .env

Agora insira as informações do seu banco local nas seguintes variáveis:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=database
    DB_USERNAME=user
    DB_PASSWORD=password

Logo em seguida execute o comando abaixo para rodar as migrations do projeto:

    php artisan migrate
    
Utilize o seguinte comando para rodar os seeds para popular a base de dados com o usuário padrão:

    php artisan db:seed
        
Execute o comando abaixo para gerar a chave da aplicação:

    php artisan key:generate

Para instalar as dependências do node e buildar o projeto, execute o comando abaixo:

    npm install && npm run dev

Para executar a aplicação execute o server do laravel:

    php artisan serve
    
Logo em seguida acesse a URL:

    http://localhost:8000/
      
Execução dos testes unitários:

    php artisan test

Após rodar os testes unitários, você deverá receber isto como resultado
    
  ![Alt text](unit_tests.png?raw=true "Title")

