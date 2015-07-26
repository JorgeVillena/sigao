<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sistema ADRA</title>
        
        <!--<link href="css/bootstrap.min.css" rel="stylesheet">-->
        <!--<link href="font-awesome/css/font-awesome.css" rel="stylesheet">-->
        <!-- Toastr style -->
        <!--<link href="css/plugins/toastr/toastr.min.css" rel="stylesheet">-->
        <!-- Gritter -->
        <!--<link href="js/plugins/gritter/jquery.gritter.css" rel="stylesheet">-->
        <!--<link href="css/animate.css" rel="stylesheet">-->
        <!--<link href="css/style.css" rel="stylesheet">-->
        <?= HTML::style('css/bootstrap.min.css') ?>
        <?= HTML::style('font-awesome/css/font-awesome.css') ?>
        <?= HTML::style('css/plugins/toastr/toastr.min.css') ?>
        <?= HTML::script('js/plugins/gritter/jquery.gritter.css') ?>
        <?= HTML::style('css/animate.css') ?>
        <?= HTML::style('css/style.css') ?>
    </head>
    <body>
        <div id="wrapper">
            @include('layouts.main.menu')

            <div id="page-wrapper" class="gray-bg dashbard-1">
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                        </div>
                        <ul class="nav navbar-top-links navbar-right">
                            <li>
                                {{ HTML::image('img/profile_small.jpg', 'image', ['class' => 'img-circle']) }}
                                <!--<img alt="image" class="img-circle" src="img/profile_small.jpg" />-->
                                <span class="m-r-sm text-muted welcome-message">Welcome <strong class="font-bold">David Williams</strong></span>
                            </li>
                            <li class="dropdown">
                                <ul class="dropdown-menu dropdown-messages">
                                    <li>
                                        <div class="dropdown-messages-box">
                                            <a href="profile.html" class="pull-left">
                                                {{ HTML::image('img/a7.jpg', 'image', ['class' => 'img-circle']) }}
                                                <!--<img alt="image" class="img-circle" src="img/a7.jpg">-->
                                            </a>
                                            <div class="media-body">
                                                <small class="pull-right">46h ago</small>
                                                <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>
                                                <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <div class="dropdown-messages-box">
                                            <a href="profile.html" class="pull-left">
                                                {{ HTML::image('img/a4.jpg', 'image', ['class' => 'img-circle']) }}
                                                <!--<img alt="image" class="img-circle" src="img/a4.jpg">-->
                                            </a>
                                            <div class="media-body ">
                                                <small class="pull-right text-navy">5h ago</small>
                                                <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>
                                                <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <div class="dropdown-messages-box">
                                            <a href="profile.html" class="pull-left">
                                                {{ HTML::image('img/profile.jpg', 'image', ['class' => 'img-circle']) }}
                                                <!--<img alt="image" class="img-circle" src="img/profile.jpg">-->
                                            </a>
                                            <div class="media-body ">
                                                <small class="pull-right">23h ago</small>
                                                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>
                                                <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <div class="text-center link-block">
                                            <a href="mailbox.html">
                                                <i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i class="fa fa-bell"></i>  <span class="label label-primary">8</span>
                                </a>
                                <ul class="dropdown-menu dropdown-alerts">
                                    <li>
                                        <a href="mailbox.html">
                                            <div>
                                                <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                                                <span class="pull-right text-muted small">4 minutes ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="profile.html">
                                            <div>
                                                <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                                <span class="pull-right text-muted small">12 minutes ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="grid_options.html">
                                            <div>
                                                <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                                <span class="pull-right text-muted small">4 minutes ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <div class="text-center link-block">
                                            <a href="notifications.html">
                                                <strong>See All Alerts</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login.html">
                                    <i class="fa fa-sign-out"></i> Log out
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="row">
                    @yield('content')
                </div>
            </div>
        </div>

        <!-- Mainly scripts -->
        <?= HTML::script('js/jquery-2.1.1.js') ?>
        <?= HTML::script('js/bootstrap.min.js') ?>
        <?= HTML::script('js/plugins/metisMenu/jquery.metisMenu.js') ?>
        <?= HTML::script('js/plugins/slimscroll/jquery.slimscroll.min.js') ?>
<!--        <script src="js/jquery-2.1.1.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
        <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>-->
        <!-- Flot -->
        <?= HTML::script('js/plugins/flot/jquery.flot.js') ?>
        <?= HTML::script('js/plugins/flot/jquery.flot.tooltip.min.js') ?>
        <?= HTML::script('js/plugins/flot/jquery.flot.spline.js') ?>
        <?= HTML::script('js/plugins/flot/jquery.flot.resize.js') ?>
        <?= HTML::script('js/plugins/flot/jquery.flot.pie.js') ?>
<!--        <script src="js/plugins/flot/jquery.flot.js"></script>
        <script src="js/plugins/flot/jquery.flot.tooltip.min.js"></script>
        <script src="js/plugins/flot/jquery.flot.spline.js"></script>
        <script src="js/plugins/flot/jquery.flot.resize.js"></script>
        <script src="js/plugins/flot/jquery.flot.pie.js"></script>-->
        <!-- Peity -->
        <?= HTML::script('js/plugins/peity/jquery.peity.min.js') ?>
        <?= HTML::script('js/demo/peity-demo.js') ?>
<!--        <script src="js/plugins/peity/jquery.peity.min.js"></script>
        <script src="js/demo/peity-demo.js"></script>-->
        <!-- Custom and plugin javascript -->
        <?= HTML::script('js/inspinia.js') ?>
        <?= HTML::script('js/plugins/pace/pace.min.js') ?>
<!--        <script src="js/inspinia.js"></script>
        <script src="js/plugins/pace/pace.min.js"></script>-->
        <!-- jQuery UI -->
        <?= HTML::script('js/plugins/jquery-ui/jquery-ui.min.js') ?>
        <!--<script src="js/plugins/jquery-ui/jquery-ui.min.js"></script>-->
        <!-- GITTER -->
        <?= HTML::script('js/plugins/gritter/jquery.gritter.min.js') ?>
        <!--<script src="js/plugins/gritter/jquery.gritter.min.js"></script>-->
        <!-- Sparkline -->
        <?= HTML::script('js/plugins/sparkline/jquery.sparkline.min.js') ?>
        <!--<script src="js/plugins/sparkline/jquery.sparkline.min.js"></script>-->
        <!-- Sparkline demo data  -->
        <?= HTML::script('js/demo/sparkline-demo.js') ?>
        <!--<script src="js/demo/sparkline-demo.js"></script>-->
        <!-- ChartJS-->
        <?= HTML::script('js/plugins/chartJs/Chart.min.js') ?>
        <!--<script src="js/plugins/chartJs/Chart.min.js"></script>-->
        <!-- Toastr -->
        <?= HTML::script('js/plugins/toastr/toastr.min.js') ?>
        <!--<script src="js/plugins/toastr/toastr.min.js"></script>-->
    </body>
</html>

