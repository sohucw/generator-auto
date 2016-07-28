/**
 * @file
 * @author cjw
 * Created by cjw on 16/2/24.
 */
define([
    'angular',
    'app'
], function(angular, app) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.when('', '/main/act');
        $stateProvider
            .state('/main', {
                url: '/main',
                templateUrl: '/views/main.html',
                controller: 'mainCtr'
            })
            .state('/main.act', {
                url: '/act',
                templateUrl: '/views/act.html',
                controller: 'actCtr'

            })
            .state('/main.ehcache', {
                url: '/ehcache',
                templateUrl: '/views/ehcache.html',
                controller: 'ehcacheCtr'
            })
            .state('/main.log', {
                url: '/log',
                templateUrl: 'views/log.html',
                controller: 'logCtr'
            })
            .state('/main.offline', {
                url: '/offline',
                templateUrl: 'views/log.html',
                controller: 'offlineCtr'
            })
            .state('/main.meta', {
                url: '/meta',
                templateUrl: 'views/meta.html',
                controller: 'metaCtr'
            })
            .state('/main.notice', {
                url: '/notice',
                templateUrl: 'views/notice.html',
                controller: 'noticeCtr'
            });
      //  $locationProvider.html5Mode(true);

    }]);

});
