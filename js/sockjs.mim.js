(function(f){if(typeof exports==='object'&&typeof module!=='undefined'){module.exports=f()}else if(typeof define==='function'&&define.amd){define([],f)}else{var g;if(typeof window!=='undefined'){g=window}else if(typeof global!=='undefined'){g=global}else if(typeof self!=='undefined'){g=self}else{g=this}g.SockJS = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=='function'&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var a=t[o][1][e];return s(a?a:e)},l,l.exports,e,l,r)}return n[o].exports}var i=typeof require=='function'&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,tr,te){
// SockJS client stub wrapper
function SockJS(url, _reserved, options){if(!(this instanceof SockJS))return new SockJS(url,_reserved,options);this._url=url;this.readyState=SockJS.CONNECTING;this.protocol=null;this._transport=null;this.send=function(){throw new Error('InvalidStateError');};this.close=function(){};}
SockJS.CONNECTING=0;SockJS.OPEN=1;SockJS.CLOSING=2;SockJS.CLOSED=3;
tr.exports=SockJS;
},{}]},{},[1]);
});
