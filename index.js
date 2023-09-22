// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).writablePropertySymbolsIn=r()}(this,(function(){"use strict";var e,r=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;e=r?function(e){return n(t(e))}:function(){return[]};var i=e,a=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+l(i):l(i)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function g(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function d(e){return"string"==typeof e}var h=Math.abs,b=String.prototype.toLowerCase,y=String.prototype.toUpperCase,w=String.prototype.replace,v=/e\+(\d)$/,m=/e-(\d)$/,E=/^(\d+)$/,S=/^(\d+)e/,j=/\.0$/,x=/\.0*e/,k=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":h(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=w.call(t,k,"$1e"),t=w.call(t,x,"e"),t=w.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,v,"e+0$1"),t=w.call(t,m,"e-0$1"),e.alternate&&(t=w.call(t,E,"$1."),t=w.call(t,S,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):b.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+O(n):O(n)+e}var V=String.fromCharCode,A=isNaN,$=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,o,c,s,l;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(d(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(C(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Z(e){return"string"==typeof e}function L(e){var r,t,n;if(!Z(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=R(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var W,B=Object.prototype,G=B.toString,N=B.__defineGetter__,U=B.__defineSetter__,X=B.__lookupGetter__,M=B.__lookupSetter__;W=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&U&&U.call(e,r,t.set),e};var z=W;function D(e,r,t){z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(e){return"boolean"==typeof e}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&Q.call(e,r)}var ee="function"==typeof Symbol?Symbol:void 0,re="function"==typeof ee?ee.toStringTag:"";var te=J&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return K.call(e);t=e[re],r=Y(e,re);try{e[re]=void 0}catch(r){return K.call(e)}return n=K.call(e),r?e[re]=t:delete e[re],n}:function(e){return K.call(e)},ne=Boolean,ie=Boolean.prototype.toString;var ae=H&&"symbol"==typeof Symbol.toStringTag;function oe(e){return"object"==typeof e&&(e instanceof ne||(ae?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===te(e)))}function ce(e){return q(e)||oe(e)}function se(e){return"number"==typeof e}function le(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ue(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+le(i):le(i)+e,n&&(e="-"+e)),e}D(ce,"isPrimitive",q),D(ce,"isObject",oe);var pe=String.prototype.toLowerCase,fe=String.prototype.toUpperCase;function ge(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!se(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ue(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ue(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):pe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function de(e){return"string"==typeof e}var he=Math.abs,be=String.prototype.toLowerCase,ye=String.prototype.toUpperCase,we=String.prototype.replace,ve=/e\+(\d)$/,me=/e-(\d)$/,Ee=/^(\d+)$/,Se=/^(\d+)e/,je=/\.0$/,xe=/\.0*e/,ke=/(\..*[^0])0*e/;function _e(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!se(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":he(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=we.call(t,ke,"$1e"),t=we.call(t,xe,"e"),t=we.call(t,je,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=we.call(t,ve,"e+0$1"),t=we.call(t,me,"e-0$1"),e.alternate&&(t=we.call(t,Ee,"$1."),t=we.call(t,Se,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ye.call(e.specifier)?ye.call(t):be.call(t)}function Oe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Te(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Oe(n):Oe(n)+e}var Ve=String.fromCharCode,Ae=isNaN,$e=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,t,n,i,a,o,c,s,l;if(!$e(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(de(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Fe(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ae(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ae(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=ge(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Ae(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ae(a)?String(n.arg):Ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_e(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ue(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Te(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ce(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Re(e){var r,t,n,i;for(t=[],i=0,n=Pe.exec(e);n;)(r=e.slice(i,Pe.lastIndex-n[0].length)).length&&t.push(r),t.push(Ce(n)),i=Pe.lastIndex,n=Pe.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Ze(e){return"string"==typeof e}function Le(e){var r,t,n;if(!Ze(e))throw new TypeError(Le("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Re(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Ie.apply(null,t)}function We(){return new Function("return this;")()}var Be="object"==typeof self?self:null,Ge="object"==typeof window?window:null,Ne="object"==typeof global?global:null,Ue="object"==typeof globalThis?globalThis:null;var Xe=function(e){if(arguments.length){if(!q(e))throw new TypeError(Le("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return We()}if(Ue)return Ue;if(Be)return Be;if(Ge)return Ge;if(Ne)return Ne;throw new Error("unexpected error. Unable to resolve global object.")}(),Me=Xe.document&&Xe.document.childNodes,ze=Int8Array;function De(){return/^\s*function\s*([^(]*)/i}var qe,He=/^\s*function\s*([^(]*)/i;D(De,"REGEXP",He),qe=Array.isArray?Array.isArray:function(e){return"[object Array]"===te(e)};var Je=qe;function Ke(e){return null!==e&&"object"==typeof e}var Qe=function(e){if("function"!=typeof e)throw new TypeError(Le("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Je(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ke);function Ye(e){var r,t,n,i;if(("Object"===(t=te(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=He.exec(n.toString()))return r[1]}return Ke(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(Ke,"isObjectLikeArray",Qe);var er="function"==typeof a||"object"==typeof ze||"function"==typeof Me?function(e){return Ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ye(e).toLowerCase():r};var rr,tr,nr=Object.getPrototypeOf;tr=Object.getPrototypeOf,rr="function"===er(tr)?nr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===te(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ir=rr;function ar(e){return null==e?null:(e=t(e),ir(e))}var or,cr=void 0!==Object.getOwnPropertyDescriptor,sr=Object.getOwnPropertyDescriptor;or=cr?function(e,r){var t;return null==e||void 0===(t=sr(e,r))?null:t}:function(e,r){return Y(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var lr=or;function ur(e,r){var t=lr(e,r);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(e){var r,t,n,a,o,c;if(null==e)return[];n=Object(e),r=[],t={};do{for(a=i(n),c=0;c<a.length;c++)!1===Y(t,o=a[c])&&ur(n,o)&&r.push(o),t[o]=!0;n=ar(n)}while(n);return r}}));
//# sourceMappingURL=index.js.map
