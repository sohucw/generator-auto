define(["angular","js/services",""],function(o){"use strict";return o.module("myApp.controllers",["myApp.services","tm.pagination"]).controller("mainCtr",["$location","$http","$scope","version",function(o,t,e,n){e.scopedAppVersion=n,e.books=[{title:"《Ext江湖》",author:"大漠穷秋"},{title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},{title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}],e.paginationConf={currentPage:1,totalItems:8e3,itemsPerPage:15,pagesLength:15,perPageOptions:[10,20,30,40,50],onChange:function(){}}}]).controller("actCtr",["$location","$http","$scope","version",function(o,t,e,n){e.moduleName="act",t.get("/data/data.json").success(function(o,t,n,c){console.log(o.data.data),e.dataList=o.data.data})}]).controller("ehcacheCtr",["$location","$http","$scope","version",function(o,t,e,n){e.scopedAppVersion=n}]).controller("logCtr",["$http","$scope",function(o,t){t.moudleName="log",o.get("/data/1.json").success(function(o,t,e,n){console.log(o)})}]).controller("offlineCtr",["$http","$scope",function(o,t){t.moudleName="offline",o.get("/data/1.json").success(function(o,t,e,n){console.log(o)})}]).controller("metaCtr",["$http","$scope",function(o,t){t.moudleName="meta",o.get("/data/1.json").success(function(o,t,e,n){console.log(o)})}]).controller("noticeCtr",["$http","$scope",function(o,t){t.moudleName="notice",o.get("/data/1.json").success(function(o,t,e,n){console.log(o)})}]).controller("MyCtrl2",["$scope","$injector",function(o,t){require(["controllers/myctrl2"],function(e){t.invoke(e,this,{$scope:o})})}])});