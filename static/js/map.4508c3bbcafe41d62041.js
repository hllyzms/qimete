!function(e){function t(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=13)}({13:function(e,t,r){"use strict";function o(){var e=[{featureType:"administrative",stylers:[{color:"#083858"}]},{featureType:"landscape",stylers:[{color:"#c6bda5"},{visibility:"simplified"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#083858"}]},{elementType:"labels",stylers:[{visibility:"off"}]}],t={name:"Custom Style"},r=new google.maps.StyledMapType(e,t),o={center:n,disableDefaultUI:!0,mapTypeId:"mirumee",scrollwheel:!1,draggable:!1,zoom:5};i=new google.maps.Map(document.getElementById("hq-map"),o),i.mapTypes.set("mirumee",r);new google.maps.Marker({position:n,map:i,title:"Mirumee Software"})}var i,n=new google.maps.LatLng(51.109597,17.031504);google.maps.event.addDomListener(window,"load",o),google.maps.event.addDomListener(window,"resize",function(){var e=i.getCenter();google.maps.event.trigger(i,"resize"),i.setCenter(e)})}});
//# sourceMappingURL=map.4508c3bbcafe41d62041.js.map