define(['angular', 'js/services', ''], function (angular) {
    'use strict';

    /* Controllers */

    return angular.module('myApp.controllers', ['myApp.services','tm.pagination'])
        .controller('mainCtr', ['$location', '$http', '$scope', 'version', function ($location, $http, $scope, version) {
            $scope.scopedAppVersion = version;
            $scope.books =[
                {title:"《Ext江湖》",author:"大漠穷秋"},
                {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
                {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
            ];
            $scope.paginationConf = {
                currentPage: 1,
                totalItems: 8000,
                itemsPerPage: 15,
                pagesLength: 15,
                perPageOptions: [10, 20, 30, 40, 50],
                onChange: function(){

                }
            };
            /*$scope.location = function (param) {
             $location.path(param);

             };*/

        }])
        .controller('actCtr', ['$location', '$http', '$scope', 'version', function ($location, $http, $scope, version) {
            $scope.moduleName = 'act';
            $http.get('/data/data.json').success(function (data, status, headers, config) {
                console.log(data.data.data);
                $scope.dataList = data.data.data;
            });
        }])
        .controller('ehcacheCtr', ['$location', '$http', '$scope', 'version', function ($location, $http, $scope, version) {
            $scope.scopedAppVersion = version;

        }])
        .controller('logCtr', ['$http','$scope', function ($http, $scope) {
            $scope.moudleName = 'log';
            $http.get('/data/1.json').success(function (data, status, headers, config) {
                console.log(data);
            });
        }])
        .controller('offlineCtr', ['$http','$scope', function ($http, $scope) {
            $scope.moudleName = 'offline';
            $http.get('/data/1.json').success(function (data, status, headers, config) {
                console.log(data);

            });
        }])
        .controller('metaCtr', ['$http','$scope', function ($http, $scope) {
            $scope.moudleName = 'meta';
            $http.get('/data/1.json').success(function (data, status, headers, config) {
                console.log(data);

            });
        }])
        .controller('noticeCtr', ['$http','$scope', function ($http, $scope) {
            $scope.moudleName = 'notice';
            $http.get('/data/1.json').success(function (data, status, headers, config) {
                console.log(data);

            });
        }])
        // More involved example where controller is required from an external file
        .controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/myctrl2'], function(myctrl2) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(myctrl2, this, {'$scope': $scope});
            });
        }])
});

/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */