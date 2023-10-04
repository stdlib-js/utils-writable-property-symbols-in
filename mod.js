// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function s(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var f=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=s(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=s(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===p.call(r.specifier)?p.call(t):f.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function d(r){return"string"==typeof r}var b=Math.abs,y=String.prototype.toLowerCase,h=String.prototype.toUpperCase,v=String.prototype.replace,w=/e\+(\d)$/,m=/e-(\d)$/,j=/^(\d+)$/,_=/^(\d+)e/,O=/\.0$/,E=/\.0*e/,S=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,S,"$1e"),t=v.call(t,E,"e"),t=v.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,w,"e+0$1"),t=v.call(t,m,"e-0$1"),r.alternate&&(t=v.call(t,j,"$1."),t=v.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):y.call(t)}function k(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+k(n):k(n)+r}var P=String.fromCharCode,T=isNaN,V=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,t,n,i,o,a,c,u,l;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(d(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):P(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function B(r){var e,t,n,i;for(t=[],i=0,n=C.exec(r);n;)(e=r.slice(i,C.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=C.lastIndex,n=C.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function R(r){return"string"==typeof r}function L(r){var e,t,n;if(!R(r))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=B(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return $.apply(null,t)}var G,Z=Object.prototype,W=Z.toString,M=Z.__defineGetter__,N=Z.__defineSetter__,U=Z.__lookupGetter__,X=Z.__lookupSetter__;G=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||X.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var D=G;function z(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return H&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&Q.call(r,e)}var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var tr=J()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[er],e=Y(r,er);try{r[er]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[er]=t:delete r[er],n}:function(r){return K.call(r)},nr=Boolean,ir=Boolean.prototype.toString;var or=J();function ar(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===tr(r)))}function cr(r){return q(r)||ar(r)}function ur(){return new Function("return this;")()}z(cr,"isPrimitive",q),z(cr,"isObject",ar);var lr="object"==typeof self?self:null,sr="object"==typeof window?window:null,fr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},pr="object"==typeof fr?fr:null,gr="object"==typeof globalThis?globalThis:null;var dr=function(r){if(arguments.length){if(!q(r))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ur()}if(gr)return gr;if(lr)return lr;if(sr)return sr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),br=dr.document&&dr.document.childNodes,yr=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var vr,wr=/^\s*function\s*([^(]*)/i;z(hr,"REGEXP",wr),vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)};var mr=vr;function jr(r){return null!==r&&"object"==typeof r}var _r=function(r){if("function"!=typeof r)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(jr);function Or(r){var e,t,n,i;if(("Object"===(t=tr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=wr.exec(n.toString()))return e[1]}return jr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}z(jr,"isObjectLikeArray",_r);var Er="function"==typeof o||"object"==typeof yr||"function"==typeof br?function(r){return Or(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Or(r).toLowerCase():e};var Sr,xr,kr=Object.getPrototypeOf;xr=Object.getPrototypeOf,Sr="function"===Er(xr)?kr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ar=Sr;function Pr(r){return null==r?null:(r=t(r),Ar(r))}var Tr,Vr=void 0!==Object.getOwnPropertyDescriptor,Fr=Object.getOwnPropertyDescriptor;Tr=Vr?function(r,e){var t;return null==r||void 0===(t=Fr(r,e))?null:t}:function(r,e){return Y(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var $r=Tr;function Cr(r,e){var t=$r(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}function Ir(r){var e,t,n,o,a,c;if(null==r)return[];n=Object(r),e=[],t={};do{for(o=i(n),c=0;c<o.length;c++)!1===Y(t,a=o[c])&&Cr(n,a)&&e.push(a),t[a]=!0;n=Pr(n)}while(n);return e}export{Ir as default};
//# sourceMappingURL=mod.js.map
