// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;e=r?function(e){return n(t(e))}:function(){return[]};var i=e,o=Object,a=/./,c="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty;function l(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+s(i):s(i)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function d(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!l(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,y=String.prototype.toLowerCase,h=String.prototype.toUpperCase,v=String.prototype.replace,w=/e\+(\d)$/,m=/e-(\d)$/,j=/^(\d+)$/,_=/^(\d+)e/,O=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function x(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!l(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=v.call(t,E,"$1e"),t=v.call(t,S,"e"),t=v.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,w,"e+0$1"),t=v.call(t,m,"e-0$1"),e.alternate&&(t=v.call(t,j,"$1."),t=v.call(t,_,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):y.call(t)}function k(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var T=String.fromCharCode,P=isNaN,A=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,i,o,a,c,u,l,s,p,g,b;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=d(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!P(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,p=n.width,g=n.padRight,b=void 0,(b=p-s.length)<0?s:s=g?s+k(b):k(b)+s)),a+=n.arg||"",c+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function B(e){var r,t;if("string"!=typeof e)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var R,L=Object.prototype,G=L.toString,Z=L.__defineGetter__,W=L.__defineSetter__,M=L.__lookupGetter__,N=L.__lookupSetter__;R=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(e,r,t.get),a&&W&&W.call(e,r,t.set),e};var U=R;function X(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"",ee=q()?function(e){var r,t,n;if(null==e)return H.call(e);t=e[Y],r=K(e,Y);try{e[Y]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return H.call(e)},re=Boolean,te=Boolean.prototype.toString,ne=q();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function oe(e){return D(e)||ie(e)}X(oe,"isPrimitive",D),X(oe,"isObject",ie);var ae="object"==typeof self?self:null,ce="object"==typeof window?window:null,ue="object"==typeof globalThis?globalThis:null,le=function(e){if(arguments.length){if(!D(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ue)return ue;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=le.document&&le.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge,de=/^\s*function\s*([^(]*)/i;X(pe,"REGEXP",de),ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};var be=ge;function ye(e){return null!==e&&"object"==typeof e}var he=function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye);function ve(e){var r,t,n,i;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(ye,"isObjectLikeArray",he);var we,me,je="function"==typeof a||"object"==typeof fe||"function"==typeof se?function(e){return ve(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ve(e).toLowerCase():r},_e=Object.getPrototypeOf;me=Object.getPrototypeOf,we="function"===je(me)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===ee(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Oe=we;function Se(e){return null==e?null:(e=o(e),Oe(e))}var Ee,xe=void 0!==Object.getOwnPropertyDescriptor,ke=Object.getOwnPropertyDescriptor;Ee=xe?function(e,r){var t;return null==e||void 0===(t=ke(e,r))?null:t}:function(e,r){return K(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var Te=Ee;function Pe(e,r){var t=Te(e,r);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(e){var r,t,n,o,a,c;if(null==e)return[];n=Object(e),r=[],t={};do{for(o=i(n),c=0;c<o.length;c++)!1===K(t,a=o[c])&&Pe(n,a)&&r.push(a),t[a]=!0;n=Se(n)}while(n);return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).writablePropertySymbolsIn=r();
//# sourceMappingURL=browser.js.map
