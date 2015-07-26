<!DOCTYPE html>
<html class="no-js">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Sistema ADRA</title>
    
    <?= HTML::style('css/bootstrap.min.css') ?>
    <?= HTML::style('font-awesome/css/font-awesome.css') ?>
    <!--<link href="css/bootstrap.min.css" rel="stylesheet">-->
    <!--<link href="font-awesome/css/font-awesome.css" rel="stylesheet">-->
    <?= HTML::style('css/animate.css') ?>
    <?= HTML::style('css/style.css') ?>
<!--    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">-->

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen animated fadeInDown">
        @yield('content')
    </div>

    <!-- Mainly scripts -->
    <?= HTML::script('js/jquery-2.1.1.js') ?>
    <?= HTML::script('js/bootstrap.min.js') ?>
<!--    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>-->

</body>

</html>

