parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var n=document.querySelector(".container"),e="O",r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];v();for(var t=document.querySelectorAll(".box"),o=0;o<t.length;o++){var i=t[o];i.addEventListener("click",c)}function c(n){this.removeEventListener("click",c),e="X"===e?"O":"X",this.innerHTML=e,a()}function a(){r.forEach(function(n){var e=t[n[0]],r=t[n[1]],o=t[n[2]];e.innerHTML===r.innerHTML&&e.innerHTML===o.innerHTML&&""!=e.innerHTML&&(e.style.background="tomato",r.style.background="tomato",o.style.background="tomato")}),l()}function l(){for(var n=0;n<t.length;n++)t[n].removeEventListener("click",c)}function v(){for(var e="",r=0;r<9;r++)e+='<div class="box"></div>';n.innerHTML=e}
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.e798ba30.js.map