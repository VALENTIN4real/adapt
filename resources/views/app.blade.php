<!doctype html>

<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>Document</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>

    <body>
        <div id="app">
            <double-line-dark-blue></double-line-dark-blue>
            <type-one></type-one>
            <content-area-simple></content-area-simple>
            <footer-simple></footer-simple>
            @yield('content')
        </div>
    </body>
</html>
