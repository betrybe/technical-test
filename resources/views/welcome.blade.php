<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Teste-TryBe</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }
        .full-height {
            height: 100vh;
        }
        .flex-center {
            align-items: center;

            justify-content: center;
            margin-left: 10%;
            margin-right: 10%;
        }
        .position-ref {
            position: relative;
        }
        .content {
            text-align: center;
        }
        .title {
            margin-top: 40px;
            text-align: center;
            font-size: 50px;
        }
        .m-b-md {
            margin-bottom: 30px;
        }
    </style>

</head>
<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed" ref="body">
<div id="app">
    <index></index>
</div>

<!-- REQUIRED SCRIPTS -->
<script src={{ mix('js/app.js') }}></script>

<div id="toastsContainerTopRight" class="toasts-top-right fixed"></div>
</body>
</html>
