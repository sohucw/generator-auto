/**
 * @file
 * @author cjw
 * Created by cjw on 16/2/24.
 */
'use strict';
(function (win) {
    var config = {
        baseUrl: '',
        // 配置路径
        paths: {
            jquery: 'lib/jquery',
            angular: 'lib/angular',
            'angular-route': 'lib/angular-ui-router',
            'tm-pagination': 'lib/tm.pagination',
            text: 'lib/text'
        },
        // 设置引入依赖包时候的别名
        shim: {
            angular: {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular'],
                exports: 'angular-route'
            },
            'tm-pagination': {
                deps: ['angular'],
                exports: 'tm-pagination'
            }
        },
        deps: ['jquery'],  // 先加载的文件...
        urlArgs: 'v='+ new Date().getTime()
    };
    require.config(config);

    require([
        'angular',
        'app',
        'routes'
    ], function (angular) {
        angular.bootstrap(document, ['myApp']);
    });

})(window);