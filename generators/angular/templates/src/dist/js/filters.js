define(["angular","js/services"],function(e,r){"use strict";e.module("myApp.filters",["myApp.services"]).filter("interpolate",["version",function(e){return function(r){return String(r).replace(/\%VERSION\%/gm,e)}}])});