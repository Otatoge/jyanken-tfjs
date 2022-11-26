function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t,e){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t}var r={},a={},s=e.parcelRequiree52c;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},e.parcelRequiree52c=s),s.register("27Lyk",(function(e,n){var r,a;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>a),(t=>a=t));var s={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},a=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("kjyEk",(function(t,e){})),s.register("cmoHh",(function(t,e){!function(t,e,n){function r(t){var e,n=this,r=(e=4022871197,function(t){t=String(t);for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function a(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function s(t,e){var n=new r(t),s=e&&e.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}e&&e.exports?e.exports=s:n&&n.amd?n((function(){return s})):this.alea=s}(0,t,"function"==typeof define&&define)})),s.register("euRi5",(function(t,e){!function(t,e,n){function r(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function a(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function s(t,e){var n=new r(t),s=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===t);return t},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}e&&e.exports?e.exports=s:n&&n.amd?n((function(){return s})):this.xor128=s}(0,t,"function"==typeof define&&define)})),s.register("hDsEw",(function(t,e){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function a(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function s(t,e){var n=new r(t),s=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===t);return t},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}e&&e.exports?e.exports=s:n&&n.amd?n((function(){return s})):this.xorwow=s}(0,t,"function"==typeof define&&define)})),s.register("3J2Zm",(function(t,e){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.x,a=e.i;return t=r[a],n=(t^=t>>>7)^t<<24,n^=(t=r[a+1&7])^t>>>10,n^=(t=r[a+3&7])^t>>>3,n^=(t=r[a+4&7])^t<<7,t=r[a+7&7],n^=(t^=t<<13)^t<<9,r[a]=n,e.i=a+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function a(t,e){return e.x=t.x.slice(),e.i=t.i,e}function s(t,e){null==t&&(t=+new Date);var n=new r(t),s=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===t);return t},o.int32=n.next,o.quick=o,s&&(s.x&&a(s,n),o.state=function(){return a(n,{})}),o}e&&e.exports?e.exports=s:n&&n.amd?n((function(){return s})):this.xorshift7=s}(0,t,"function"==typeof define&&define)})),s.register("6Px8M",(function(t,e){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.w,a=e.X,s=e.i;return e.w=r=r+1640531527|0,n=a[s+34&127],t=a[s=s+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=a[s]=n^t,e.i=s,n+(r^r>>>16)|0},function(t,e){var n,r,a,s,o,i=[],u=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,u=Math.max(u,e.length)),a=0,s=-32;s<u;++s)e&&(r^=e.charCodeAt((s+32)%e.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,a=0==(n=i[127&s]^=r+o)?a+1:0);for(a>=128&&(i[127&(e&&e.length||0)]=-1),a=127,s=512;s>0;--s)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;t.w=o,t.X=i,t.i=a}(e,t)}function a(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function s(t,e){null==t&&(t=+new Date);var n=new r(t),s=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===t);return t},o.int32=n.next,o.quick=o,s&&(s.X&&a(s,n),o.state=function(){return a(n,{})}),o}e&&e.exports?e.exports=s:n&&n.amd?n((function(){return s})):this.xor4096=s}(0,t,"function"==typeof define&&define)})),s.register("lDm0S",(function(t,e){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,a=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^a,e.a=a-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function a(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function s(t,e){var n=new r(t),s=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===t);return t},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}e&&e.exports?e.exports=s:n&&n.amd?n((function(){return s})):this.tychei=s}(0,t,"function"==typeof define&&define)})),s("27Lyk").register(JSON.parse('{"auyDg":"index.06b4b043.js","4PsyW":"gu.d16b80f0.png","8uYMa":"choki.877af9d5.png","493dy":"pa.c66f6e00.png"}'));
/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
var o={};(function(){var t;function n(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var a=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof e&&e];for(var n=0;n<t.length;++n){var r=t[n];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function s(t,e){if(e)t:{var n=a;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in n))break t;n=n[o]}(e=e(s=n[t=t[t.length-1]]))!=s&&null!=e&&r(n,t,{configurable:!0,writable:!0,value:e})}}function o(t){return(t={next:t})[Symbol.iterator]=function(){return this},t}function i(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:n(t)}}function u(t){if(!(t instanceof Array)){t=i(t);for(var e,n=[];!(e=t.next()).done;)n.push(e.value);t=n}return t}s("Symbol",(function(t){function e(t,e){this.g=t,r(this,"description",{configurable:!0,writable:!0,value:e})}if(t)return t;e.prototype.toString=function(){return this.g};var n="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",a=0;return function t(r){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new e(n+(r||"")+"_"+a++,r)}})),s("Symbol.iterator",(function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var e="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),s=0;s<e.length;s++){var i=a[e[s]];"function"==typeof i&&"function"!=typeof i.prototype[t]&&r(i.prototype,t,{configurable:!0,writable:!0,value:function(){return o(n(this))}})}return t}));var l,c="function"==typeof Object.create?Object.create:function(t){function e(){}return e.prototype=t,new e};if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var p;t:{var h={};try{h.__proto__={a:!0},p=h.a;break t}catch(t){}p=!1}l=p?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var d=l;function f(t,e){if(t.prototype=c(e.prototype),t.prototype.constructor=t,d)d(t,e);else for(var n in e)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r)}else t[n]=e[n];t.ra=e.prototype}function m(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function g(t){if(t.l)throw new TypeError("Generator is already running");t.l=!0}function y(t,e){t.j={fa:e,ga:!0},t.g=t.o||t.u}function b(t,e,n){return t.g=n,{value:e}}function w(t){this.g=new m,this.h=t}function v(t,e,n,r){try{var a=e.call(t.g.i,n);if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");if(!a.done)return t.g.l=!1,a;var s=a.value}catch(e){return t.g.i=null,y(t.g,e),x(t)}return t.g.i=null,r.call(t.g,s),x(t)}function x(t){for(;t.g.g;)try{var e=t.h(t.g);if(e)return t.g.l=!1,{value:e.value,done:!1}}catch(e){t.g.h=void 0,y(t.g,e)}if(t.g.l=!1,t.g.j){if(e=t.g.j,t.g.j=null,e.ga)throw e.fa;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function N(t){this.next=function(e){return g(t.g),t.g.i?e=v(t,t.g.i.next,e,t.g.s):(t.g.s(e),e=x(t)),e},this.throw=function(e){return g(t.g),t.g.i?e=v(t,t.g.i.throw,e,t.g.s):(y(t.g,e),e=x(t)),e},this.return=function(e){return function(t,e){g(t.g);var n=t.g.i;return n?v(t,"return"in n?n.return:function(t){return{value:t,done:!0}},e,t.g.return):(t.g.return(e),x(t))}(t,e)},this[Symbol.iterator]=function(){return this}}function T(t){return function(t){function e(e){return t.next(e)}function n(e){return t.throw(e)}return new Promise((function(r,a){!function t(s){s.done?r(s.value):Promise.resolve(s.value).then(e,n).then(t,a)}(t.next())}))}(new N(new w(t)))}m.prototype.s=function(t){this.h=t},m.prototype.return=function(t){this.j={return:t},this.g=this.u},s("Promise",(function(t){function e(t){this.h=0,this.i=void 0,this.g=[],this.s=!1;var e=this.j();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function n(){this.g=null}function r(t){return t instanceof e?t:new e((function(e){e(t)}))}if(t)return t;n.prototype.h=function(t){if(null==this.g){this.g=[];var e=this;this.i((function(){e.l()}))}this.g.push(t)};var s=a.setTimeout;n.prototype.i=function(t){s(t,0)},n.prototype.l=function(){for(;this.g&&this.g.length;){var t=this.g;this.g=[];for(var e=0;e<t.length;++e){var n=t[e];t[e]=null;try{n()}catch(t){this.j(t)}}}this.g=null},n.prototype.j=function(t){this.i((function(){throw t}))},e.prototype.j=function(){function t(t){return function(r){n||(n=!0,t.call(e,r))}}var e=this,n=!1;return{resolve:t(this.D),reject:t(this.l)}},e.prototype.D=function(t){if(t===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof e)this.H(t);else{t:switch(typeof t){case"object":var n=null!=t;break t;case"function":n=!0;break t;default:n=!1}n?this.A(t):this.o(t)}},e.prototype.A=function(t){var e=void 0;try{e=t.then}catch(t){return void this.l(t)}"function"==typeof e?this.I(e,t):this.o(t)},e.prototype.l=function(t){this.u(2,t)},e.prototype.o=function(t){this.u(1,t)},e.prototype.u=function(t,e){if(0!=this.h)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.h);this.h=t,this.i=e,2===this.h&&this.G(),this.B()},e.prototype.G=function(){var t=this;s((function(){if(t.C()){var e=a.console;void 0!==e&&e.error(t.i)}}),1)},e.prototype.C=function(){if(this.s)return!1;var t=a.CustomEvent,e=a.Event,n=a.dispatchEvent;return void 0===n||("function"==typeof t?t=new t("unhandledrejection",{cancelable:!0}):"function"==typeof e?t=new e("unhandledrejection",{cancelable:!0}):(t=a.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,t),t.promise=this,t.reason=this.i,n(t))},e.prototype.B=function(){if(null!=this.g){for(var t=0;t<this.g.length;++t)o.h(this.g[t]);this.g=null}};var o=new n;return e.prototype.H=function(t){var e=this.j();t.M(e.resolve,e.reject)},e.prototype.I=function(t,e){var n=this.j();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function r(t,e){return"function"==typeof t?function(e){try{a(t(e))}catch(t){s(t)}}:e}var a,s,o=new e((function(t,e){a=t,s=e}));return this.M(r(t,a),r(n,s)),o},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.M=function(t,e){function n(){switch(r.h){case 1:t(r.i);break;case 2:e(r.i);break;default:throw Error("Unexpected state: "+r.h)}}var r=this;null==this.g?o.h(n):this.g.push(n),this.s=!0},e.resolve=r,e.reject=function(t){return new e((function(e,n){n(t)}))},e.race=function(t){return new e((function(e,n){for(var a=i(t),s=a.next();!s.done;s=a.next())r(s.value).M(e,n)}))},e.all=function(t){var n=i(t),a=n.next();return a.done?r([]):new e((function(t,e){function s(e){return function(n){o[e]=n,0==--i&&t(o)}}var o=[],i=0;do{o.push(void 0),i++,r(a.value).M(s(o.length-1),e),a=n.next()}while(!a.done)}))},e}));var k="function"==typeof Object.assign?Object.assign:function(t,e){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t};s("Object.assign",(function(t){return t||k})),s("Object.is",(function(t){return t||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}})),s("Array.prototype.includes",(function(t){return t||function(t,e){var n=this;n instanceof String&&(n=String(n));var r=n.length;for(0>(e=e||0)&&(e=Math.max(e+r,0));e<r;e++){var a=n[e];if(a===t||Object.is(a,t))return!0}return!1}})),s("String.prototype.includes",(function(t){return t||function(t,e){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(t instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(t,e||0)}})),s("Array.prototype.keys",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,a={next:function(){if(!r&&n<t.length){var a=n++;return{value:e(a,t[a]),done:!1}}return r=!0,{done:!0,value:void 0}}};return a[Symbol.iterator]=function(){return a},a}(this,(function(t){return t}))}}));var E=this||self;function S(t,e){t=t.split(".");var n,r=E;t[0]in r||void 0===r.execScript||r.execScript("var "+t[0]);for(;t.length&&(n=t.shift());)t.length||void 0===e?r=r[n]&&r[n]!==Object.prototype[n]?r[n]:r[n]={}:r[n]=e}function _(){throw Error("Invalid UTF8")}function A(t,e){return e=String.fromCharCode.apply(null,e),null==t?e:t+e}var I,M,O="undefined"!=typeof TextDecoder,$="undefined"!=typeof TextEncoder,D={},C=null;function F(t){var e;void 0===e&&(e=0),L(),e=D[e];for(var n=Array(Math.floor(t.length/3)),r=e[64]||"",a=0,s=0;a<t.length-2;a+=3){var o=t[a],i=t[a+1],u=t[a+2],l=e[o>>2];o=e[(3&o)<<4|i>>4],i=e[(15&i)<<2|u>>6],u=e[63&u],n[s++]=l+o+i+u}switch(l=0,u=r,t.length-a){case 2:u=e[(15&(l=t[a+1]))<<2]||r;case 1:t=t[a],n[s]=e[t>>2]+e[(3&t)<<4|l>>4]+u+r}return n.join("")}function R(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):-1!="=.".indexOf(t[e-1])&&(n=-1!="=.".indexOf(t[e-2])?n-2:n-1);var r=new Uint8Array(n),a=0;return function(t,e){function n(e){for(;r<t.length;){var n=t.charAt(r++),a=C[n];if(null!=a)return a;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}L();for(var r=0;;){var a=n(-1),s=n(0),o=n(64),i=n(64);if(64===i&&-1===a)break;e(a<<2|s>>4),64!=o&&(e(s<<4&240|o>>2),64!=i&&e(o<<6&192|i))}}(t,(function(t){r[a++]=t})),a!==n?r.subarray(0,a):r}function L(){if(!C){C={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var r=t.concat(e[n].split(""));D[n]=r;for(var a=0;a<r.length;a++){var s=r[a];void 0===C[s]&&(C[s]=a)}}}}var B,P="function"==typeof Uint8Array;function z(t){return P&&null!=t&&t instanceof Uint8Array}function U(t){if(this.L=t,null!==t&&0===t.length)throw Error("ByteString should be constructed with non-empty values")}var V="function"==typeof Uint8Array.prototype.slice,j=0;function H(t,e){return Error("Invalid wire type: "+t+" (at position "+e+")")}function K(){return Error("Failed to read varint, encoding is invalid.")}function q(t,e){e=void 0!==(e=void 0===e?{}:e).v&&e.v,this.h=null,this.g=this.i=this.j=0,this.v=e,t&&W(this,t)}function W(t,e){t.h=function(t,e){if(t.constructor===Uint8Array)return t;if(t.constructor===ArrayBuffer)return new Uint8Array(t);if(t.constructor===Array)return new Uint8Array(t);if(t.constructor===String)return R(t);if(t.constructor===U)return!e&&(e=t.L)&&e.constructor===Uint8Array?e:(e=null==(e=t.L)||z(e)?e:"string"==typeof e?R(e):null,(t=t.L=e)?new Uint8Array(t):B||(B=new Uint8Array(0)));if(t instanceof Uint8Array)return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(e,t.v),t.j=0,t.i=t.h.length,t.g=t.j}function G(t){if(t.g>t.i)throw Error("Tried to read past the end of the data "+t.g+" > "+t.i)}function Y(t){var e=t.h,n=e[t.g],r=127&n;if(128>n)return t.g+=1,G(t),r;if(r|=(127&(n=e[t.g+1]))<<7,128>n)return t.g+=2,G(t),r;if(r|=(127&(n=e[t.g+2]))<<14,128>n)return t.g+=3,G(t),r;if(r|=(127&(n=e[t.g+3]))<<21,128>n)return t.g+=4,G(t),r;if(n=e[t.g+4],t.g+=5,r|=(15&n)<<28,128>n)return G(t),r;if(128<=e[t.g++]&&128<=e[t.g++]&&128<=e[t.g++]&&128<=e[t.g++]&&128<=e[t.g++])throw K();return G(t),r}q.prototype.reset=function(){this.g=this.j};var X=[];function J(){this.g=[]}function Z(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Q(t){var e={},n=void 0!==e.W&&e.W;this.l={v:void 0!==e.v&&e.v},this.W=n,e=this.l,X.length?(n=X.pop(),e&&(n.v=e.v),t&&W(n,t),t=n):t=new q(t,e),this.g=t,this.j=this.g.g,this.h=this.i=-1}function tt(t){var e=t.g;if(e.g==e.i)return!1;t.j=t.g.g;var n=Y(t.g)>>>0;if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw H(n,t.j);if(1>e)throw Error("Invalid field number: "+e+" (at position "+t.j+")");return t.i=e,t.h=n,!0}function et(t){switch(t.h){case 0:if(0!=t.h)et(t);else t:{for(var e=(t=t.g).g,n=e+10;e<n;)if(0==(128&t.h[e++])){t.g=e,G(t);break t}throw K()}break;case 1:(t=t.g).g+=8,G(t);break;case 2:2!=t.h?et(t):(e=Y(t.g)>>>0,(t=t.g).g+=e,G(t));break;case 5:(t=t.g).g+=4,G(t);break;case 3:for(e=t.i;;){if(!tt(t))throw Error("Unmatched start-group tag: stream EOF");if(4==t.h){if(t.i!=e)throw Error("Unmatched end-group tag");break}et(t)}break;default:throw H(t.h,t.j)}}J.prototype.length=function(){return this.g.length},J.prototype.end=function(){var t=this.g;return this.g=[],t},Q.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var nt=[];function rt(){this.i=[],this.h=0,this.g=new J}function at(t,e){0!==e.length&&(t.i.push(e),t.h+=e.length)}var st="function"==typeof Symbol&&"symbol"==typeof Symbol()?Symbol(void 0):void 0;function ot(t,e){Object.isFrozen(t)||(st?t[st]|=e:void 0!==t.N?t.N|=e:Object.defineProperties(t,{N:{value:e,configurable:!0,writable:!0,enumerable:!1}}))}function it(t){var e;return null==(e=st?t[st]:t.N)?0:e}function ut(t){return ot(t,1),t}function lt(t){return!!Array.isArray(t)&&!!(2&it(t))}function ct(t){if(!Array.isArray(t))throw Error("cannot mark non-array as immutable");ot(t,2)}function pt(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)&&t.constructor===Object}var ht=Object.freeze(ut([]));function dt(t){if(lt(t.m))throw Error("Cannot mutate an immutable Message")}var ft,mt="undefined"!=typeof Symbol&&void 0!==Symbol.hasInstance;function gt(t){return{value:t,configurable:!1,writable:!1,enumerable:!1}}function yt(t,e,n){return-1===e?null:e>=t.i?t.g?t.g[e]:void 0:void 0!==n&&n&&t.g&&null!=(n=t.g[e])?n:t.m[e+t.h]}function bt(t,e,n,r){r=void 0!==r&&r,dt(t),e<t.i&&!r?t.m[e+t.h]=n:(t.g||(t.g=t.m[t.i+t.h]={}))[e]=n}function wt(t,e,n,r){n=void 0===n||n;var a=yt(t,e,r=void 0!==r&&r);return null==a&&(a=ht),lt(t.m)?n&&(ct(a),Object.freeze(a)):(a===ht||lt(a))&&bt(t,e,a=ut(a.slice()),r),a}function vt(t,e,n){return null==(t=null==(t=yt(t,e))?t:+t)?void 0===n?0:n:t}function xt(t,e,n,r){t.j||(t.j={});var a=lt(t.m),s=t.j[n];if(!s){r=wt(t,n,!0,void 0!==r&&r),s=[],a=a||lt(r);for(var o=0;o<r.length;o++)s[o]=new e(r[o]),a&&ct(s[o].m);a&&(ct(s),Object.freeze(s)),t.j[n]=s}return s}function Nt(t,e,n,r,a){var s=void 0!==s&&s;return dt(t),s=xt(t,n,e,s),n=r||new n,t=wt(t,e),null!=a?(s.splice(a,0,n),t.splice(a,0,n.m)):(s.push(n),t.push(n.m)),n}function Tt(t,e){return null==(t=yt(t,e))?0:t}function kt(t,e){return null==(t=yt(t,e))?"":t}function Et(t){var e=At;return _t(t,e=void 0===e?It:e)}function St(t,e){if(null!=t){if(Array.isArray(t))t=_t(t,e);else if(pt(t)){var n,r={};for(n in t)r[n]=St(t[n],e);t=r}else t=e(t);return t}}function _t(t,e){for(var n=t.slice(),r=0;r<n.length;r++)n[r]=St(n[r],e);return Array.isArray(t)&&1&it(t)&&ut(n),n}function At(t){return t&&"object"==typeof t&&t.toJSON?t.toJSON():(t=function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"object":if(t&&!Array.isArray(t)){if(z(t))return F(t);if(t instanceof U){var e=t.L;return e=null==e||"string"==typeof e?e:P&&e instanceof Uint8Array?F(e):null,(t.L=e)||""}}}return t}(t),Array.isArray(t)?Et(t):t)}function It(t){return z(t)?new Uint8Array(t):t}function Mt(t,e,n){t||(t=ft),ft=null;var r=this.constructor.h;if(t||(t=r?[r]:[]),this.h=(r?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=t,t=(r=this.m.length)-1,r&&pt(r=this.m[t])?(this.i=t-this.h,this.g=r):void 0!==e&&-1<e?(this.i=Math.max(e,t+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,n)for(e=0;e<n.length;e++)if((t=n[e])<this.i)t+=this.h,(r=this.m[t])?Array.isArray(r)&&ut(r):this.m[t]=ht;else{var a=(r=this.g||(this.g=this.m[this.i+this.h]={}))[t];a?Array.isArray(a)&&ut(a):r[t]=ht}}function Ot(){Mt.apply(this,arguments)}if(Mt.prototype.toJSON=function(){return Et(this.m)},Mt.prototype.toString=function(){return this.m.toString()},f(Ot,Mt),mt){var $t={};Object.defineProperties(Ot,($t[Symbol.hasInstance]=gt((function(){throw Error("Cannot perform instanceof checks for MutableMessage")})),$t))}function Dt(t,e,n){if(n){var r,a={};for(r in n){var s=n[r],o=s.ja;o||(a.F=s.pa||s.ha.P,s.ba?(a.U=zt(s.ba),o=function(t){return function(e,n,r){return t.F(e,n,r,t.U)}}(a)):s.da?(a.T=Ut(s.X.g,s.da),o=function(t){return function(e,n,r){return t.F(e,n,r,t.T)}}(a)):o=a.F,s.ja=o),o(e,t,s.X),a={F:a.F,U:a.U,T:a.T}}}!function(t,e){if(e=e.ca){at(t,t.g.end());for(var n=0;n<e.length;n++)at(t,e[n])}}(e,t)}var Ct=Symbol();function Ft(t,e,n){return t[Ct]||(t[Ct]=function(t,r){return e(t,r,n)})}function Rt(t){var e=t[Ct];if(!e){var n=Qt(t);e=function(t,e){return te(t,e,n)},t[Ct]=e}return e}function Lt(t){var e=function(t){var e=t.ba;return e?Rt(e):(e=t.oa)?Ft(t.X.g,e,t.da):void 0}(t),n=t.X,r=t.ha.O;return e?function(t,a){return r(t,a,n,e)}:function(t,e){return r(t,e,n)}}function Bt(t,e,n,r,a,s){var o=0;for((t=t()).length&&"number"!=typeof t[0]&&(n(e,t[0]),o++);o<t.length;){n=t[o++];for(var i=o+1;i<t.length&&"number"!=typeof t[i];)i++;var u=t[o++];switch(i-=o){case 0:r(e,n,u);break;case 1:r(e,n,u,t[o++]);break;case 2:a(e,n,u,t[o++],t[o++]);break;case 3:i=t[o++];var l=t[o++],c=t[o++];Array.isArray(c)?a(e,n,u,i,l,c):s(e,n,u,i,l,c);break;case 4:s(e,n,u,t[o++],t[o++],t[o++],t[o++]);break;default:throw Error("unexpected number of binary field arguments: "+i)}}return e}var Pt=Symbol();function zt(t){var e=t[Pt];if(!e){var n=Wt(t);e=function(t,e){return ne(t,e,n)},t[Pt]=e}return e}function Ut(t,e){var n=t[Pt];return n||(n=function(t,n){return Dt(t,n,e)},t[Pt]=n),n}var Vt=Symbol();function jt(t,e){t.push(e)}function Ht(t,e,n){t.push(e,n.P)}function Kt(t,e,n,r,a){var s=zt(a),o=n.P;t.push(e,(function(t,e,n){return o(t,e,n,r,s)}))}function qt(t,e,n,r,a,s){var o=Ut(r,s),i=n.P;t.push(e,(function(t,e,n){return i(t,e,n,r,o)}))}function Wt(t){var e=t[Vt];return e||Bt(t,t[Vt]=[],jt,Ht,Kt,qt)}var Gt=Symbol();function Yt(t,e){t[0]=e}function Xt(t,e,n,r){var a=n.O;t[e]=r?function(t,e,n){return a(t,e,n,r)}:a}function Jt(t,e,n,r,a,s){var o=n.O,i=Rt(a);t[e]=function(t,e,n){return o(t,e,n,r,i,s)}}function Zt(t,e,n,r,a,s,o){var i=n.O,u=Ft(r,a,s);t[e]=function(t,e,n){return i(t,e,n,r,u,o)}}function Qt(t){var e=t[Gt];return e||Bt(t,t[Gt]={},Yt,Xt,Jt,Zt)}function te(t,e,n){for(;tt(e)&&4!=e.h;){var r=e.i,a=n[r];if(!a){var s=n[0];s&&(s=s[r])&&(a=n[r]=Lt(s))}if(!(a&&a(e,t,r)||(r=t,s=(a=e).j,et(a),a.W))){var o=a.g.h;a=s===(a=a.g.g)?B||(B=new Uint8Array(0)):V?o.slice(s,a):new Uint8Array(o.subarray(s,a)),(s=r.ca)?s.push(a):r.ca=[a]}}return t}function ee(t,e,n){if(nt.length){var r=nt.pop();t&&(W(r.g,t),r.i=-1,r.h=-1),t=r}else t=new Q(t);try{return te(new e,t,Qt(n))}finally{(e=t.g).h=null,e.j=0,e.i=0,e.g=0,e.v=!1,t.i=-1,t.h=-1,100>nt.length&&nt.push(t)}}function ne(t,e,n){for(var r=n.length,a=1==r%2,s=a?1:0;s<r;s+=2)(0,n[s+1])(e,t,n[s]);Dt(t,e,a?n[0]:void 0)}function re(t,e){var n=new rt;ne(t,n,Wt(e)),at(n,n.g.end()),t=new Uint8Array(n.h);for(var r=(e=n.i).length,a=0,s=0;s<r;s++){var o=e[s];t.set(o,a),a+=o.length}return n.i=[t],t}function ae(t,e){return{O:t,P:e}}var se=ae((function(t,e,n){if(5!==t.h)return!1;var r=(t=t.g).h[t.g],a=t.h[t.g+1],s=t.h[t.g+2],o=t.h[t.g+3];return t.g+=4,G(t),t=2*((a=(r<<0|a<<8|s<<16|o<<24)>>>0)>>31)+1,r=a>>>23&255,a&=8388607,bt(e,n,255==r?a?NaN:1/0*t:0==r?t*Math.pow(2,-149)*a:t*Math.pow(2,r-150)*(a+Math.pow(2,23))),!0}),(function(t,e,n){if(null!=(e=yt(e,n))){Z(t.g,8*n+5),t=t.g;var r=e;0===(r=(n=0>r?1:0)?-r:r)?0<1/r?j=0:(0,j=2147483648):isNaN(r)?(0,j=2147483647):34028234663852886e22<r?(0,j=(n<<31|2139095040)>>>0):11754943508222875e-54>r?(r=Math.round(r/Math.pow(2,-149)),0,j=(n<<31|r)>>>0):(e=Math.floor(Math.log(r)/Math.LN2),r*=Math.pow(2,-e),16777216<=(r=Math.round(8388608*r))&&++e,0,j=(n<<31|e+127<<23|8388607&r)>>>0),n=j,t.g.push(n>>>0&255),t.g.push(n>>>8&255),t.g.push(n>>>16&255),t.g.push(n>>>24&255)}})),oe=ae((function(t,e,n){if(0!==t.h)return!1;for(var r=t.g,a=128,s=0,o=t=0;4>o&&128<=a;o++)a=r.h[r.g++],G(r),s|=(127&a)<<7*o;if(128<=a&&(a=r.h[r.g++],G(r),s|=(127&a)<<28,t|=(127&a)>>4),128<=a)for(o=0;5>o&&128<=a;o++)a=r.h[r.g++],G(r),t|=(127&a)<<7*o+3;if(!(128>a))throw K();return r=s>>>0,(t=2147483648&(a=t>>>0))&&(a=~a>>>0,0==(r=1+~r>>>0)&&(a=a+1>>>0)),r=4294967296*a+(r>>>0),bt(e,n,t?-r:r),!0}),(function(t,e,n){if(null!=(e=yt(e,n))&&null!=e){Z(t.g,8*n),t=t.g;var r=e;for(n=0>r,e=(r=Math.abs(r))>>>0,r=Math.floor((r-e)/4294967296),r>>>=0,n&&(r=~r>>>0,4294967295<(e=1+(~e>>>0))&&(e=0,4294967295<++r&&(r=0))),n=j=e,e=r;0<e||127<n;)t.g.push(127&n|128),n=(n>>>7|e<<25)>>>0,e>>>=7;t.g.push(n)}})),ie=ae((function(t,e,n){return 0===t.h&&(bt(e,n,Y(t.g)),!0)}),(function(t,e,n){if(null!=(e=yt(e,n))&&null!=e)if(Z(t.g,8*n),t=t.g,0<=(n=e))Z(t,n);else{for(e=0;9>e;e++)t.g.push(127&n|128),n>>=7;t.g.push(1)}})),ue=ae((function(t,e,n){if(2!==t.h)return!1;var r,a=Y(t.g)>>>0,s=(t=t.g).g;if(t.g+=a,G(t),t=t.h,O)(r=I)||(r=I=new TextDecoder("utf-8",{fatal:!0})),r=r.decode(t.subarray(s,s+a));else{a=s+a;for(var o,i,u,l=[],c=null;s<a;)128>(o=t[s++])?l.push(o):224>o?s>=a?_():(i=t[s++],194>o||128!=(192&i)?(s--,_()):l.push((31&o)<<6|63&i)):240>o?s>=a-1?_():128!=(192&(i=t[s++]))||224===o&&160>i||237===o&&160<=i||128!=(192&(r=t[s++]))?(s--,_()):l.push((15&o)<<12|(63&i)<<6|63&r):244>=o?s>=a-2?_():128!=(192&(i=t[s++]))||0!=i-144+(o<<28)>>30||128!=(192&(r=t[s++]))||128!=(192&(u=t[s++]))?(s--,_()):(o=(7&o)<<18|(63&i)<<12|(63&r)<<6|63&u,o-=65536,l.push(55296+(o>>10&1023),56320+(1023&o))):_(),8192<=l.length&&(c=A(c,l),l.length=0);r=A(c,l)}return bt(e,n,r),!0}),(function(t,e,n){if(null!=(e=yt(e,n))){var r=!1;if(r=void 0!==r&&r,$){if(r&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(e))throw Error("Found an unpaired surrogate");e=(M||(M=new TextEncoder)).encode(e)}else{for(var a=0,s=new Uint8Array(3*e.length),o=0;o<e.length;o++){var i=e.charCodeAt(o);if(128>i)s[a++]=i;else{if(2048>i)s[a++]=i>>6|192;else{if(55296<=i&&57343>=i){if(56319>=i&&o<e.length){var u=e.charCodeAt(++o);if(56320<=u&&57343>=u){i=1024*(i-55296)+u-56320+65536,s[a++]=i>>18|240,s[a++]=i>>12&63|128,s[a++]=i>>6&63|128,s[a++]=63&i|128;continue}o--}if(r)throw Error("Found an unpaired surrogate");i=65533}s[a++]=i>>12|224,s[a++]=i>>6&63|128}s[a++]=63&i|128}}e=s.subarray(0,a)}Z(t.g,8*n+2),Z(t.g,e.length),at(t,t.g.end()),at(t,e)}})),le=ae((function(t,e,n,r,a){if(2!==t.h)return!1;e=Nt(e,n,r),n=t.g.i,r=Y(t.g)>>>0;var s=t.g.g+r,o=s-n;if(0>=o&&(t.g.i=s,a(e,t),o=s-t.g.g),o)throw Error("Message parsing ended unexpectedly. Expected to read "+r+" bytes, instead read "+(r-o)+" bytes, either the data ended unexpectedly or the message misreported its own length");return t.g.g=s,t.g.i=n,!0}),(function(t,e,n,r,a){if(null!=(e=xt(e,r,n)))for(r=0;r<e.length;r++){var s=t;Z(s.g,8*n+2);var o=s.g.end();at(s,o),o.push(s.h),s=o,a(e[r],t),o=t;var i=s.pop();for(i=o.h+o.g.length()-i;127<i;)s.push(127&i|128),i>>>=7,o.h++;s.push(i),o.h++}}));function ce(){Ot.apply(this,arguments)}if(f(ce,Ot),mt){var pe={};Object.defineProperties(ce,(pe[Symbol.hasInstance]=gt(Object[Symbol.hasInstance]),pe))}function he(t){ce.call(this,t)}function de(){return[1,ie,2,se,3,ue,4,ue]}function fe(t){ce.call(this,t,-1,ge)}function me(){return[1,le,he,de]}f(he,ce),f(fe,ce),fe.prototype.addClassification=function(t,e){return Nt(this,1,he,t,e),this};var ge=[1];function ye(t){ce.call(this,t)}function be(){return[1,se,2,se,3,se,4,se,5,se]}function we(t){ce.call(this,t,-1,xe)}function ve(){return[1,le,ye,be]}f(ye,ce),f(we,ce);var xe=[1];function Ne(t){ce.call(this,t)}function Te(){return[1,se,2,se,3,se,4,se,5,se,6,oe]}function ke(t,e,n){if(n=t.createShader(0===n?t.VERTEX_SHADER:t.FRAGMENT_SHADER),t.shaderSource(n,e),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+t.getShaderInfoLog(n));return n}function Ee(t){return xt(t,he,1).map((function(t){return{index:Tt(t,1),score:vt(t,2),label:null!=yt(t,3)?kt(t,3):void 0,displayName:null!=yt(t,4)?kt(t,4):void 0}}))}function Se(t){return{x:vt(t,1),y:vt(t,2),z:vt(t,3),visibility:null!=yt(t,4)?vt(t,4):void 0}}function _e(t){return t.map((function(t){return xt(ee(t,we,ve),ye,1).map(Se)}))}function Ae(t,e){this.h=t,this.g=e,this.l=0}function Ie(t,e,n){return function(t,e){var n=t.g;if(void 0===t.o){var r=ke(n,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),a=ke(n,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),s=n.createProgram();if(n.attachShader(s,r),n.attachShader(s,a),n.linkProgram(s),!n.getProgramParameter(s,n.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+n.getProgramInfoLog(s));r=t.o=s,n.useProgram(r),a=n.getUniformLocation(r,"sampler0"),t.j={K:n.getAttribLocation(r,"aVertex"),J:n.getAttribLocation(r,"aTex"),qa:a},t.u=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,t.u),n.enableVertexAttribArray(t.j.K),n.vertexAttribPointer(t.j.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),t.s=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,t.s),n.enableVertexAttribArray(t.j.J),n.vertexAttribPointer(t.j.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.uniform1i(a,0)}r=t.j,n.useProgram(t.o),n.canvas.width=e.width,n.canvas.height=e.height,n.viewport(0,0,e.width,e.height),n.activeTexture(n.TEXTURE0),t.h.bindTexture2d(e.glName),n.enableVertexAttribArray(r.K),n.bindBuffer(n.ARRAY_BUFFER,t.u),n.vertexAttribPointer(r.K,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(r.J),n.bindBuffer(n.ARRAY_BUFFER,t.s),n.vertexAttribPointer(r.J,2,n.FLOAT,!1,0,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER?n.DRAW_FRAMEBUFFER:n.FRAMEBUFFER,null),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.colorMask(!0,!0,!0,!0),n.drawArrays(n.TRIANGLE_FAN,0,4),n.disableVertexAttribArray(r.K),n.disableVertexAttribArray(r.J),n.bindBuffer(n.ARRAY_BUFFER,null),t.h.bindTexture2d(0)}(t,e),"function"==typeof t.g.canvas.transferToImageBitmap?Promise.resolve(t.g.canvas.transferToImageBitmap()):n?Promise.resolve(t.g.canvas):"function"==typeof createImageBitmap?createImageBitmap(t.g.canvas):(void 0===t.i&&(t.i=document.createElement("canvas")),new Promise((function(e){t.i.height=t.g.canvas.height,t.i.width=t.g.canvas.width,t.i.getContext("2d",{}).drawImage(t.g.canvas,0,0,t.g.canvas.width,t.g.canvas.height),e(t.i)})))}function Me(t){this.g=t}f(Ne,ce);var Oe=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function $e(t,e){return e+t}function De(t,e){window[t]=e}function Ce(t){if(this.g=t,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.$=!0,this.D=Promise.resolve(),this.Z="",this.C={},this.locateFile=t&&t.locateFile||$e,"object"==typeof window)var e=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if("undefined"==typeof location)throw Error("solutions can only be loaded on a web page or in a web worker");e=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.aa=e,t.options)for(var n=(e=i(Object.keys(t.options))).next();!n.done;n=e.next()){n=n.value;var r=t.options[n].default;void 0!==r&&(this.j[n]="function"==typeof r?r():r)}}function Fe(t){var e,n,r,a,s,o,i,l,c,p,h;return T((function(d){switch(d.g){case 1:return t.$?(e=void 0===t.g.files?[]:"function"==typeof t.g.files?t.g.files(t.j):t.g.files,b(d,T((function(t){switch(t.g){case 1:return t.o=2,b(t,WebAssembly.instantiate(Oe),4);case 4:t.g=3,t.o=0;break;case 2:return t.o=0,t.j=null,t.return(!1);case 3:return t.return(!0)}})),2)):d.return();case 2:if(n=d.h,"object"==typeof window)return De("createMediapipeSolutionsWasm",{locateFile:t.locateFile}),De("createMediapipeSolutionsPackedAssets",{locateFile:t.locateFile}),o=e.filter((function(t){return void 0!==t.data})),i=e.filter((function(t){return void 0===t.data})),l=Promise.all(o.map((function(e){var n=Re(t,e.url);if(void 0!==e.path){var r=e.path;n=n.then((function(e){return t.overrideFile(r,e),Promise.resolve(e)}))}return n}))),c=Promise.all(i.map((function(e){return void 0===e.simd||e.simd&&n||!e.simd&&!n?function(t){var e=document.createElement("script");return e.setAttribute("src",t),e.setAttribute("crossorigin","anonymous"),new Promise((function(t){e.addEventListener("load",(function(){t()}),!1),e.addEventListener("error",(function(){t()}),!1),document.body.appendChild(e)}))}(t.locateFile(e.url,t.aa)):Promise.resolve()}))).then((function(){var e,n,r;return T((function(a){if(1==a.g)return e=window.createMediapipeSolutionsWasm,n=window.createMediapipeSolutionsPackedAssets,r=t,b(a,e(n),2);r.h=a.h,a.g=0}))})),p=T((function(e){return t.g.graph&&t.g.graph.url?e=b(e,Re(t,t.g.graph.url),0):(e.g=0,e=void 0),e})),b(d,Promise.all([c,l,p]),7);if("function"!=typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");return r=e.filter((function(t){return void 0===t.simd||t.simd&&n||!t.simd&&!n})).map((function(e){return t.locateFile(e.url,t.aa)})),importScripts.apply(null,u(r)),a=t,b(d,createMediapipeSolutionsWasm(Module),6);case 6:a.h=d.h,t.l=new OffscreenCanvas(1,1),t.h.canvas=t.l,s=t.h.GL.createContext(t.l,{antialias:!1,alpha:!1,na:"undefined"!=typeof WebGL2RenderingContext?2:1}),t.h.GL.makeContextCurrent(s),d.g=4;break;case 7:if(t.l=document.createElement("canvas"),!(h=t.l.getContext("webgl2",{}))&&!(h=t.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),d.return();t.G=h,t.h.canvas=t.l,t.h.createContext(t.l,!0,!0,{});case 4:t.i=new t.h.SolutionWasm,t.$=!1,d.g=0}}))}function Re(t,e){var n,r;return T((function(a){return e in t.H?a.return(t.H[e]):(n=t.locateFile(e,""),r=fetch(n).then((function(t){return t.arrayBuffer()})),t.H[e]=r,a.return(r))}))}function Le(t,e,n){var r,a,s,o,u,l,c,p,h,d,f,m,g,y;return T((function(w){switch(w.g){case 1:if(!n)return w.return(e);for(r={},a=0,s=i(Object.keys(n)),o=s.next();!o.done;o=s.next())u=o.value,"string"!=typeof(l=n[u])&&"texture"===l.type&&void 0!==e[l.stream]&&++a;1<a&&(t.I=!1),c=i(Object.keys(n)),o=c.next();case 2:if(o.done){w.g=4;break}if(p=o.value,"string"==typeof(h=n[p]))return g=r,y=p,b(w,function(t,e,n){var r;return T((function(a){return"number"==typeof n||n instanceof Uint8Array||n instanceof t.h.Uint8BlobList?a.return(n):n instanceof t.h.Texture2dDataOut?((r=t.u[e])||(r=new Ae(t.h,t.G),t.u[e]=r),a.return(Ie(r,n,t.I))):a.return(void 0)}))}(t,p,e[h]),14);if(d=e[h.stream],"detection_list"===h.type){if(d){for(var v=d.getRectList(),x=d.getLandmarksList(),N=d.getClassificationsList(),k=[],E=0;E<v.size();++E){var S=ee(v.get(E),Ne,Te);S={ea:{ka:vt(S,1),la:vt(S,2),height:vt(S,3),width:vt(S,4),rotation:vt(S,5,0),ia:Tt(S,6)},Y:xt(ee(x.get(E),we,ve),ye,1).map(Se),V:Ee(ee(N.get(E),fe,me))},k.push(S)}v=k}else v=[];r[p]=v,w.g=7;break}if("proto_list"===h.type){if(d){for(v=Array(d.size()),x=0;x<d.size();x++)v[x]=d.get(x);d.delete()}else v=[];r[p]=v,w.g=7;break}if(void 0===d){w.g=3;break}if("float_list"===h.type){r[p]=d,w.g=7;break}if("proto"===h.type){r[p]=d,w.g=7;break}if("texture"!==h.type)throw Error("Unknown output config type: '"+h.type+"'");return(f=t.u[p])||(f=new Ae(t.h,t.G),t.u[p]=f),b(w,Ie(f,d,t.I),13);case 13:m=w.h,r[p]=m;case 7:h.transform&&r[p]&&(r[p]=h.transform(r[p])),w.g=3;break;case 14:g[y]=w.h;case 3:o=c.next(),w.g=2;break;case 4:return w.return(r)}}))}function Be(t,e){for(var n=e.name||"$",r=[].concat(u(e.wants)),a=new t.h.StringList,s=i(e.wants),o=s.next();!o.done;o=s.next())a.push_back(o.value);s=t.h.PacketListener.implement({onResults:function(a){for(var s={},o=0;o<e.wants.length;++o)s[r[o]]=a.get(o);var i=t.listeners[n];i&&(t.D=Le(t,s,e.outs).then((function(n){n=i(n);for(var a=0;a<e.wants.length;++a){var o=s[r[a]];"object"==typeof o&&o.hasOwnProperty&&o.hasOwnProperty("delete")&&o.delete()}n&&(t.D=n)})))}}),t.i.attachMultiListener(a,s),a.delete()}function Pe(t){return void 0===t&&(t=0),1===t?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function ze(t){var e=this;t=t||{},this.g=new Ce({locateFile:t.locateFile,files:function(t){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Pe(t.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:_e},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:_e},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(t){return t.map((function(t){return Ee(ee(t,fe,me))[0]}))}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"object"==typeof window&&void 0!==window.navigator&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(t){var n,r,a;return T((function(s){return 1==s.g?(n=Pe(t),r="third_party/mediapipe/modules/hand_landmark/"+n,b(s,Re(e.g,n),2)):(a=s.h,e.g.overrideFile(r,a),s.return(!0))}))}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}(t=Ce.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},t.reset=function(){var t=this;return T((function(e){t.i&&(t.i.reset(),t.o={},t.u={}),e.g=0}))},t.setOptions=function(t,e){var n=this;if(e=e||this.g.options){for(var r=[],a=[],s={},o=i(Object.keys(t)),u=o.next();!u.done;s={R:s.R,S:s.S},u=o.next()){var l=u.value;l in this.j&&this.j[l]===t[l]||(this.j[l]=t[l],void 0!==(u=e[l])&&(u.onChange&&(s.R=u.onChange,s.S=t[l],r.push(function(t){return function(){return T((function(e){if(1==e.g)return b(e,t.R(t.S),2);!0===e.h&&(n.s=!0),e.g=0}))}}(s))),u.graphOptionXref&&(l={valueNumber:1===u.type?t[l]:0,valueBoolean:0===u.type&&t[l],valueString:2===u.type?t[l]:""},u=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),u.graphOptionXref),l),a.push(u))))}0===r.length&&0===a.length||(this.s=!0,this.B=(void 0===this.B?[]:this.B).concat(a),this.A=(void 0===this.A?[]:this.A).concat(r))}},t.initialize=function(){var t=this;return T((function(e){return 1==e.g?b(e,Fe(t),2):3!=e.g?b(e,function(t){var e,n,r,a,s,o,u,l;return T((function(c){if(1==c.g)return t.g.graph&&t.g.graph.url&&t.Z===t.g.graph.url?c.return():(t.s=!0,t.g.graph&&t.g.graph.url?(t.Z=t.g.graph.url,b(c,Re(t,t.g.graph.url),3)):void(c.g=2));for(2!=c.g&&(e=c.h,t.i.loadGraph(e)),n=i(Object.keys(t.C)),r=n.next();!r.done;r=n.next())a=r.value,t.i.overrideFile(a,t.C[a]);if(t.C={},t.g.listeners)for(s=i(t.g.listeners),o=s.next();!o.done;o=s.next())u=o.value,Be(t,u);l=t.j,t.j={},t.setOptions(l),c.g=0}))}(t),3):b(e,function(t){var e,n,r,a,s,o;return T((function(u){switch(u.g){case 1:if(!t.s)return u.return();if(!t.A){u.g=2;break}e=i(t.A),n=e.next();case 3:if(n.done){u.g=5;break}return b(u,(0,n.value)(),4);case 4:n=e.next(),u.g=3;break;case 5:t.A=void 0;case 2:if(t.B){for(r=new t.h.GraphOptionChangeRequestList,a=i(t.B),s=a.next();!s.done;s=a.next())o=s.value,r.push_back(o);t.i.changeOptions(r),r.delete(),t.B=void 0}t.s=!1,u.g=0}}))}(t),0)}))},t.overrideFile=function(t,e){this.i?this.i.overrideFile(t,e):this.C[t]=e},t.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},t.send=function(t,e){var n,r,a,s,o,u,l,c,p,h=this;return T((function(d){switch(d.g){case 1:return h.g.inputs?(n=1e3*(null==e?performance.now():e),b(d,h.D,2)):d.return();case 2:return b(d,h.initialize(),3);case 3:for(r=new h.h.PacketDataList,a=i(Object.keys(t)),s=a.next();!s.done;s=a.next())if(o=s.value,u=h.g.inputs[o]){t:{var f=t[o];switch(u.type){case"video":var m=h.o[u.stream];if(m||(m=new Ae(h.h,h.G),h.o[u.stream]=m),0===m.l&&(m.l=m.h.createTexture()),"undefined"!=typeof HTMLVideoElement&&f instanceof HTMLVideoElement)var g=f.videoWidth,y=f.videoHeight;else"undefined"!=typeof HTMLImageElement&&f instanceof HTMLImageElement?(g=f.naturalWidth,y=f.naturalHeight):(g=f.width,y=f.height);y={glName:m.l,width:g,height:y},(g=m.g).canvas.width=y.width,g.canvas.height=y.height,g.activeTexture(g.TEXTURE0),m.h.bindTexture2d(m.l),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,f),m.h.bindTexture2d(0),m=y;break t;case"detections":for((m=h.o[u.stream])||(m=new Me(h.h),h.o[u.stream]=m),m.data||(m.data=new m.g.DetectionListData),m.data.reset(f.length),y=0;y<f.length;++y){g=f[y];var w=m.data,v=w.setBoundingBox,x=y,N=g.ea,T=new Ne;if(bt(T,1,N.ka),bt(T,2,N.la),bt(T,3,N.height),bt(T,4,N.width),bt(T,5,N.rotation),bt(T,6,N.ia),N=re(T,Te),v.call(w,x,N),g.Y)for(w=0;w<g.Y.length;++w){var k=!!(T=g.Y[w]).visibility;x=(v=m.data).addNormalizedLandmark,N=y,T=Object.assign(Object.assign({},T),{visibility:k?T.visibility:0}),bt(k=new ye,1,T.x),bt(k,2,T.y),bt(k,3,T.z),T.visibility&&bt(k,4,T.visibility),T=re(k,be),x.call(v,N,T)}if(g.V)for(w=0;w<g.V.length;++w)x=(v=m.data).addClassification,N=y,T=g.V[w],bt(k=new he,2,T.score),T.index&&bt(k,1,T.index),T.label&&bt(k,3,T.label),T.displayName&&bt(k,4,T.displayName),T=re(k,de),x.call(v,N,T)}m=m.data;break t;default:m={}}}switch(l=m,c=u.stream,u.type){case"video":r.pushTexture2d(Object.assign(Object.assign({},l),{stream:c,timestamp:n}));break;case"detections":(p=l).stream=c,p.timestamp=n,r.pushDetectionList(p);break;default:throw Error("Unknown input config type: '"+u.type+"'")}}return h.i.send(r),b(d,h.D,4);case 4:r.delete(),d.g=0}}))},t.onResults=function(t,e){this.listeners[e||"$"]=t},S("Solution",Ce),S("OptionType",{BOOL:0,NUMBER:1,ma:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(t=ze.prototype).close=function(){return this.g.close(),Promise.resolve()},t.onResults=function(t){this.g.onResults(t)},t.initialize=function(){var t=this;return T((function(e){return b(e,t.g.initialize(),0)}))},t.reset=function(){this.g.reset()},t.send=function(t){var e=this;return T((function(n){return b(n,e.g.send(t),0)}))},t.setOptions=function(t){this.g.setOptions(t)},S("Hands",ze),S("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),S("VERSION","0.4.1646424915")}).call(o);class i{refCount(t){return u("refCount")}incRef(t){return u("incRef")}timerAvailable(){return!0}time(t){return u("time")}read(t){return u("read")}readSync(t){return u("readSync")}readToGPU(t,e){return u("readToGPU")}numDataIds(){return u("numDataIds")}disposeData(t,e){return u("disposeData")}write(t,e,n){return u("write")}move(t,e,n,r,a){return u("move")}memory(){return u("memory")}floatPrecision(){return u("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return u("dispose")}}function u(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var l={};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function c(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,f(t,e,n)}function p(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let n=t.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,f(t,n,r),f(e,n,r)}function h(t,e,n){return Math.max(t,Math.min(e,n))}function d(t){return t%2==0?t:t+1}function f(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function m(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function g(t,e){const n=Math.random();return e*n+(1-n)*t}function y(t,e){let n=0;for(let r=0;r<t.length;r++){const a=Number(t[r])-Number(e[r]);n+=a*a}return n}function b(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function w(t,e,n=""){b(k(t,e),(()=>n+` Shapes ${t} and ${e} must match`))}function v(t){b(null!=t,(()=>"The input to the tensor constructor must be a non-null value."))}function x(t,e=[],n=!1){if(null==e&&(e=[]),Array.isArray(t)||P(t)&&!n)for(let r=0;r<t.length;++r)x(t[r],e,n);else e.push(t);return e}function N(t){if(0===t.length)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function T(t){return 0===t.length}function k(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function E(t){return t%1==0}function S(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function _(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function A(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return c(e),e}function I(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function M(t,e=(t=>0),n,r=setTimeout){return new Promise(((a,s)=>{let o=0;const i=()=>{if(t())return void a();o++;const u=e(o);null!=n&&o>=n?s():r(i,u)};i()}))}function O(t,e){let n=1,r=-1;for(let e=0;e<t.length;++e)if(t[e]>=0)n*=t[e];else if(-1===t[e]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${e}`);r=e}else if(t[e]<0)throw Error(`Shapes can not be < 0. Found ${t[e]} at dim ${e}`);if(-1===r){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(0===n)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const a=t.slice();return a[r]=e/n,a}function $(t,e){const n=e.length;return b((t=null==t?e.map(((t,e)=>e)):[].concat(t)).every((t=>t>=-n&&t<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`)),b(t.every((t=>E(t))),(()=>`All values in axis param must be integers but got axis ${t}`)),t.map((t=>t<0?n+t:t))}function D(t,e){const n=[],r=[],a=null!=e&&Array.isArray(e)&&0===e.length,s=null==e||a?null:$(e,t).sort();let o=0;for(let e=0;e<t.length;++e){if(null!=s){if(s[o]===e&&1!==t[e])throw new Error(`Can't squeeze axis ${e} since its dim '${t[e]}' is not 1`);(null==s[o]||s[o]>e)&&1===t[e]&&(n.push(t[e]),r.push(e)),s[o]<=e&&o++}1!==t[e]&&(n.push(t[e]),r.push(e))}return{newShape:n,keptDims:r}}function C(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error(`Unknown data type ${t}`);n=new Uint8Array(e)}return n}function F(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error(`Unknown data type ${t}`);n=new Array(e)}return n}function R(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function L(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function B(t,e){return"complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function P(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function z(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error(`Unknown dtype ${t}`)}function U(t){if(null==t)return 0;let e=0;return t.forEach((t=>e+=t.length)),e}function V(t){return"string"==typeof t||t instanceof String}function j(t){return"boolean"==typeof t}function H(t){return"number"==typeof t}function K(t){return Array.isArray(t)?K(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":H(t)?"float32":V(t)?"string":j(t)?"bool":"float32"}function q(t){return!!(t&&t.constructor&&t.call&&t.apply)}function W(t,e){for(let n=e;n<t;++n)if(t%n==0)return n;return t}function G(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function Y(t,e,n,r=!1){const a=new Array;if(1===e.length){const s=e[0]*(r?2:1);for(let e=0;e<s;e++)a[e]=n[t+e]}else{const s=e[0],o=e.slice(1),i=o.reduce(((t,e)=>t*e))*(r?2:1);for(let e=0;e<s;e++)a[e]=Y(t+e*i,o,n,r)}return a}function X(t,e,n=!1){if(0===t.length)return e[0];const r=t.reduce(((t,e)=>t*e))*(n?2:1);if(0===r)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return Y(0,t,e,n)}function J(t,e){const n=Z(t,e);for(let t=0;t<n.length;t++)n[t]=1;return n}function Z(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function Q(t,e){const n=t.reduce(((t,e)=>t*e),1);if(null==e||"float32"===e)return X(t,new Float32Array(n));if("int32"===e)return X(t,new Int32Array(n));if("bool"===e)return X(t,new Uint8Array(n));throw new Error(`Unknown data type ${e}`)}function tt(t){t.forEach((e=>{b(Number.isInteger(e)&&e>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`))}))}function et(t,e,n){if(0===e)return 0;if(1===e)return t[0];let r=t[t.length-1];for(let e=0;e<t.length-1;++e)r+=n[e]*t[e];return r}function nt(t,e,n){if(0===e)return[];if(1===e)return[t];const r=new Array(e);for(let e=0;e<r.length-1;++e)r[e]=Math.floor(t/n[e]),t-=r[e]*n[e];return r[r.length-1]=t,r}function rt(t){return t&&t.then&&"function"==typeof t.then}t(l,"shuffle",(()=>c)),t(l,"swap",(()=>f)),t(l,"shuffleCombo",(()=>p)),t(l,"clamp",(()=>h)),t(l,"nearestLargerEven",(()=>d)),t(l,"sum",(()=>m)),t(l,"randUniform",(()=>g)),t(l,"distSquared",(()=>y)),t(l,"assert",(()=>b)),t(l,"assertShapesMatch",(()=>w)),t(l,"arraysEqual",(()=>k)),t(l,"assertNonNull",(()=>v)),t(l,"flatten",(()=>x)),t(l,"isTypedArray",(()=>P)),t(l,"sizeFromShape",(()=>N)),t(l,"isScalarShape",(()=>T)),t(l,"isInt",(()=>E)),t(l,"tanh",(()=>S)),t(l,"sizeToSquarishShape",(()=>_)),t(l,"createShuffledIndices",(()=>A)),t(l,"rightPad",(()=>I)),t(l,"repeatedTry",(()=>M)),t(l,"inferFromImplicitShape",(()=>O)),t(l,"parseAxisParam",(()=>$)),t(l,"squeezeShape",(()=>D)),t(l,"getTypedArrayFromDType",(()=>C)),t(l,"getArrayFromDType",(()=>F)),t(l,"checkConversionForErrors",(()=>R)),t(l,"isValidDtype",(()=>L)),t(l,"hasEncodingLoss",(()=>B)),t(l,"bytesPerElement",(()=>z)),t(l,"bytesFromStringArray",(()=>U)),t(l,"isString",(()=>V)),t(l,"isBoolean",(()=>j)),t(l,"isNumber",(()=>H)),t(l,"inferDtype",(()=>K)),t(l,"isFunction",(()=>q)),t(l,"nearestDivisor",(()=>W)),t(l,"computeStrides",(()=>G)),t(l,"toNestedArray",(()=>X)),t(l,"makeOnesTypedArray",(()=>J)),t(l,"makeZerosTypedArray",(()=>Z)),t(l,"makeZerosNestedTypedArray",(()=>Q)),t(l,"assertNonNegativeIntegerDimensions",(()=>tt)),t(l,"locToIndex",(()=>et)),t(l,"indexToLoc",(()=>nt)),t(l,"isPromise",(()=>rt));class at{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=st,this.populateURLFlags()}setPlatform(t,e){null!=this.platform&&(ot().getBool("IS_TEST")||ot().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){const e=this.urlFlags[t];ot().getBool("IS_TEST")||ot().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${e}.`),this.set(t,e)}}async getAsync(t){return t in this.flags||(this.flags[t]=await this.evaluateFlag(t)),this.flags[t]}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(rt(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(null==this.flagRegistry[t])throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(null==this.flagRegistry[t])throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const t=this.getQueryParams(this.global.location.search);if("tfjsflags"in t){t.tfjsflags.split(",").forEach((t=>{const[e,n]=t.split(":");this.urlFlags[e]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return"true"===e;if(""+ +e===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}(e,n)}))}}}function st(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((t,...n)=>(function(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}(e,n[0],n[1]),n.join("=")))),e}function ot(){return it}let it=null;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var ut,lt,ct={},pt=ct={};function ht(){throw new Error("setTimeout has not been defined")}function dt(){throw new Error("clearTimeout has not been defined")}function ft(t){if(ut===setTimeout)return setTimeout(t,0);if((ut===ht||!ut)&&setTimeout)return ut=setTimeout,setTimeout(t,0);try{return ut(t,0)}catch(e){try{return ut.call(null,t,0)}catch(e){return ut.call(this,t,0)}}}!function(){try{ut="function"==typeof setTimeout?setTimeout:ht}catch(t){ut=ht}try{lt="function"==typeof clearTimeout?clearTimeout:dt}catch(t){lt=dt}}();var mt,gt=[],yt=!1,bt=-1;function wt(){yt&&mt&&(yt=!1,mt.length?gt=mt.concat(gt):bt=-1,gt.length&&vt())}function vt(){if(!yt){var t=ft(wt);yt=!0;for(var e=gt.length;e;){for(mt=gt,gt=[];++bt<e;)mt&&mt[bt].run();bt=-1,e=gt.length}mt=null,yt=!1,function(t){if(lt===clearTimeout)return clearTimeout(t);if((lt===dt||!lt)&&clearTimeout)return lt=clearTimeout,clearTimeout(t);try{lt(t)}catch(e){try{return lt.call(null,t)}catch(e){return lt.call(this,t)}}}(t)}}function xt(t,e){this.fun=t,this.array=e}function Nt(){}let Tt;function kt(){if(null==Tt){let t;if("undefined"!=typeof window)t=window;else if(void 0!==e)t=e;else if(void 0!==ct)t=ct;else{if("undefined"==typeof self)throw new Error("Could not find a global object");t=self}Tt=t}return Tt}function Et(t,e){const n=function(){const t=kt();return null==t._tfGlobals&&(t._tfGlobals=new Map),t._tfGlobals}();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}pt.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];gt.push(new xt(t,e)),1!==gt.length||yt||ft(vt)},xt.prototype.run=function(){this.fun.apply(null,this.array)},pt.title="browser",pt.browser=!0,pt.env={},pt.argv=[],pt.version="",pt.versions={},pt.on=Nt,pt.addListener=Nt,pt.once=Nt,pt.off=Nt,pt.removeListener=Nt,pt.removeAllListeners=Nt,pt.emit=Nt,pt.prependListener=Nt,pt.prependOnceListener=Nt,pt.listeners=function(t){return[]},pt.binding=function(t){throw new Error("process.binding is not supported")},pt.cwd=function(){return"/"},pt.chdir=function(t){throw new Error("process.chdir is not supported")},pt.umask=function(){return 0};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function St(...t){ot().getBool("IS_TEST")||ot().getBool("PROD")||console.warn(...t)}const _t=Et("kernelRegistry",(()=>new Map)),At=Et("gradRegistry",(()=>new Map));function It(t,e){const n=$t(t,e);return _t.get(n)}function Mt(t){return At.get(t)}function Ot(t){const e=_t.entries(),n=[];for(;;){const{done:r,value:a}=e.next();if(r)break;const[s,o]=a,[i]=s.split("_");i===t&&n.push(o)}return n}function $t(t,e){return`${e}_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Dt={};t(Dt,"createScalarValue",(()=>we)),t(Dt,"encodeString",(()=>Te)),t(Dt,"toTypedArray",(()=>ve)),t(Dt,"now",(()=>xe)),t(Dt,"fetch",(()=>Ne)),t(Dt,"decodeString",(()=>ke));
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Ct={};t(Ct,"hexToLong",(()=>ie)),t(Ct,"fingerPrint64",(()=>be));
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Ft;Ft=Lt;var Rt=null;try{Rt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(t){}function Lt(t,e,n){this.low=0|t,this.high=0|e,this.unsigned=!!n}function Bt(t){return!0===(t&&t.__isLong__)}Lt.prototype.__isLong__,Object.defineProperty(Lt.prototype,"__isLong__",{value:!0}),Lt.isLong=Bt;var Pt={},zt={};function Ut(t,e){var n,r,a;return e?(a=0<=(t>>>=0)&&t<256)&&(r=zt[t])?r:(n=jt(t,(0|t)<0?-1:0,!0),a&&(zt[t]=n),n):(a=-128<=(t|=0)&&t<128)&&(r=Pt[t])?r:(n=jt(t,t<0?-1:0,!1),a&&(Pt[t]=n),n)}function Vt(t,e){if(isNaN(t))return e?Zt:Jt;if(e){if(t<0)return Zt;if(t>=Gt)return re}else{if(t<=-Yt)return ae;if(t+1>=Yt)return ne}return t<0?Vt(-t,e).neg():jt(t%Wt|0,t/Wt|0,e)}function jt(t,e,n){return new Lt(t,e,n)}Lt.fromInt=Ut,Lt.fromNumber=Vt,Lt.fromBits=jt;var Ht=Math.pow;function Kt(t,e,n){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return Jt;if("number"==typeof e?(n=e,e=!1):e=!!e,(n=n||10)<2||36<n)throw RangeError("radix");var r;if((r=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return Kt(t.substring(1),e,n).neg();for(var a=Vt(Ht(n,8)),s=Jt,o=0;o<t.length;o+=8){var i=Math.min(8,t.length-o),u=parseInt(t.substring(o,o+i),n);if(i<8){var l=Vt(Ht(n,i));s=s.mul(l).add(Vt(u))}else s=(s=s.mul(a)).add(Vt(u))}return s.unsigned=e,s}function qt(t,e){return"number"==typeof t?Vt(t,e):"string"==typeof t?Kt(t,e):jt(t.low,t.high,"boolean"==typeof e?e:t.unsigned)}Lt.fromString=Kt,Lt.fromValue=qt;var Wt=4294967296,Gt=Wt*Wt,Yt=Gt/2,Xt=Ut(16777216),Jt=Ut(0);Lt.ZERO=Jt;var Zt=Ut(0,!0);Lt.UZERO=Zt;var Qt=Ut(1);Lt.ONE=Qt;var te=Ut(1,!0);Lt.UONE=te;var ee=Ut(-1);Lt.NEG_ONE=ee;var ne=jt(-1,2147483647,!1);Lt.MAX_VALUE=ne;var re=jt(-1,-1,!0);Lt.MAX_UNSIGNED_VALUE=re;var ae=jt(0,-2147483648,!1);Lt.MIN_VALUE=ae;var se=Lt.prototype;se.toInt=function(){return this.unsigned?this.low>>>0:this.low},se.toNumber=function(){return this.unsigned?(this.high>>>0)*Wt+(this.low>>>0):this.high*Wt+(this.low>>>0)},se.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(ae)){var e=Vt(t),n=this.div(e),r=n.mul(e).sub(this);return n.toString(t)+r.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var a=Vt(Ht(t,6),this.unsigned),s=this,o="";;){var i=s.div(a),u=(s.sub(i.mul(a)).toInt()>>>0).toString(t);if((s=i).isZero())return u+o;for(;u.length<6;)u="0"+u;o=""+u+o}},se.getHighBits=function(){return this.high},se.getHighBitsUnsigned=function(){return this.high>>>0},se.getLowBits=function(){return this.low},se.getLowBitsUnsigned=function(){return this.low>>>0},se.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ae)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,e=31;e>0&&0==(t&1<<e);e--);return 0!=this.high?e+33:e+1},se.isZero=function(){return 0===this.high&&0===this.low},se.eqz=se.isZero,se.isNegative=function(){return!this.unsigned&&this.high<0},se.isPositive=function(){return this.unsigned||this.high>=0},se.isOdd=function(){return 1==(1&this.low)},se.isEven=function(){return 0==(1&this.low)},se.equals=function(t){return Bt(t)||(t=qt(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&(this.high===t.high&&this.low===t.low)},se.eq=se.equals,se.notEquals=function(t){return!this.eq(t)},se.neq=se.notEquals,se.ne=se.notEquals,se.lessThan=function(t){return this.comp(t)<0},se.lt=se.lessThan,se.lessThanOrEqual=function(t){return this.comp(t)<=0},se.lte=se.lessThanOrEqual,se.le=se.lessThanOrEqual,se.greaterThan=function(t){return this.comp(t)>0},se.gt=se.greaterThan,se.greaterThanOrEqual=function(t){return this.comp(t)>=0},se.gte=se.greaterThanOrEqual,se.ge=se.greaterThanOrEqual,se.compare=function(t){if(Bt(t)||(t=qt(t)),this.eq(t))return 0;var e=this.isNegative(),n=t.isNegative();return e&&!n?-1:!e&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},se.comp=se.compare,se.negate=function(){return!this.unsigned&&this.eq(ae)?ae:this.not().add(Qt)},se.neg=se.negate,se.add=function(t){Bt(t)||(t=qt(t));var e=this.high>>>16,n=65535&this.high,r=this.low>>>16,a=65535&this.low,s=t.high>>>16,o=65535&t.high,i=t.low>>>16,u=0,l=0,c=0,p=0;return c+=(p+=a+(65535&t.low))>>>16,l+=(c+=r+i)>>>16,u+=(l+=n+o)>>>16,u+=e+s,jt((c&=65535)<<16|(p&=65535),(u&=65535)<<16|(l&=65535),this.unsigned)},se.subtract=function(t){return Bt(t)||(t=qt(t)),this.add(t.neg())},se.sub=se.subtract,se.multiply=function(t){if(this.isZero())return Jt;if(Bt(t)||(t=qt(t)),Rt)return jt(Rt.mul(this.low,this.high,t.low,t.high),Rt.get_high(),this.unsigned);if(t.isZero())return Jt;if(this.eq(ae))return t.isOdd()?ae:Jt;if(t.eq(ae))return this.isOdd()?ae:Jt;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Xt)&&t.lt(Xt))return Vt(this.toNumber()*t.toNumber(),this.unsigned);var e=this.high>>>16,n=65535&this.high,r=this.low>>>16,a=65535&this.low,s=t.high>>>16,o=65535&t.high,i=t.low>>>16,u=65535&t.low,l=0,c=0,p=0,h=0;return p+=(h+=a*u)>>>16,c+=(p+=r*u)>>>16,p&=65535,c+=(p+=a*i)>>>16,l+=(c+=n*u)>>>16,c&=65535,l+=(c+=r*i)>>>16,c&=65535,l+=(c+=a*o)>>>16,l+=e*u+n*i+r*o+a*s,jt((p&=65535)<<16|(h&=65535),(l&=65535)<<16|(c&=65535),this.unsigned)},se.mul=se.multiply,se.divide=function(t){if(Bt(t)||(t=qt(t)),t.isZero())throw Error("division by zero");var e,n,r;if(Rt)return this.unsigned||-2147483648!==this.high||-1!==t.low||-1!==t.high?jt((this.unsigned?Rt.div_u:Rt.div_s)(this.low,this.high,t.low,t.high),Rt.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?Zt:Jt;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Zt;if(t.gt(this.shru(1)))return te;r=Zt}else{if(this.eq(ae))return t.eq(Qt)||t.eq(ee)?ae:t.eq(ae)?Qt:(e=this.shr(1).div(t).shl(1)).eq(Jt)?t.isNegative()?Qt:ee:(n=this.sub(t.mul(e)),r=e.add(n.div(t)));if(t.eq(ae))return this.unsigned?Zt:Jt;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();r=Jt}for(n=this;n.gte(t);){e=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(e)/Math.LN2),s=a<=48?1:Ht(2,a-48),o=Vt(e),i=o.mul(t);i.isNegative()||i.gt(n);)i=(o=Vt(e-=s,this.unsigned)).mul(t);o.isZero()&&(o=Qt),r=r.add(o),n=n.sub(i)}return r},se.div=se.divide,se.modulo=function(t){return Bt(t)||(t=qt(t)),Rt?jt((this.unsigned?Rt.rem_u:Rt.rem_s)(this.low,this.high,t.low,t.high),Rt.get_high(),this.unsigned):this.sub(this.div(t).mul(t))},se.mod=se.modulo,se.rem=se.modulo,se.not=function(){return jt(~this.low,~this.high,this.unsigned)},se.and=function(t){return Bt(t)||(t=qt(t)),jt(this.low&t.low,this.high&t.high,this.unsigned)},se.or=function(t){return Bt(t)||(t=qt(t)),jt(this.low|t.low,this.high|t.high,this.unsigned)},se.xor=function(t){return Bt(t)||(t=qt(t)),jt(this.low^t.low,this.high^t.high,this.unsigned)},se.shiftLeft=function(t){return Bt(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?jt(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):jt(0,this.low<<t-32,this.unsigned)},se.shl=se.shiftLeft,se.shiftRight=function(t){return Bt(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?jt(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):jt(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},se.shr=se.shiftRight,se.shiftRightUnsigned=function(t){if(Bt(t)&&(t=t.toInt()),0===(t&=63))return this;var e=this.high;return t<32?jt(this.low>>>t|e<<32-t,e>>>t,this.unsigned):jt(32===t?e:e>>>t-32,0,this.unsigned)},se.shru=se.shiftRightUnsigned,se.shr_u=se.shiftRightUnsigned,se.toSigned=function(){return this.unsigned?jt(this.low,this.high,!1):this},se.toUnsigned=function(){return this.unsigned?this:jt(this.low,this.high,!0)},se.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},se.toBytesLE=function(){var t=this.high,e=this.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},se.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,e>>>24,e>>>16&255,e>>>8&255,255&e]},Lt.fromBytes=function(t,e,n){return n?Lt.fromBytesLE(t,e):Lt.fromBytesBE(t,e)},Lt.fromBytesLE=function(t,e){return new Lt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)},Lt.fromBytesBE=function(t,e){return new Lt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)};const oe=Ft.default||Ft;function ie(t){return oe.fromString(t,!0,16)}const ue=ie("c3a5c85c97cb3127"),le=ie("b492b66fbe98f273"),ce=ie("9ae16a3b2f90404f");function pe(t){return t.xor(t.shru(47))}function he(t,e,n){const r=t.slice(e,e+n);return oe.fromBytes(Array.from(r),!0,!0)}function de(t,e){return he(t,e,8)}function fe(t,e){return he(t,e,4)}function me(t,e){return 0===e?t:t.shru(e).or(t.shl(64-e))}function ge(t,e,n=ie("9ddfea08eb382d69")){let r=t.xor(e).mul(n);r=r.xor(r.shru(47));let a=e.xor(r).mul(n);return a=a.xor(a.shru(47)),a=a.mul(n),a}function ye(t,e,n,r){return function(t,e,n,r,a,s){a=a.add(t),s=me(s.add(a).add(r),21);const o=a;return a=(a=a.add(e)).add(n),s=s.add(me(a,44)),[a.add(r),s.add(o)]}(de(t,e),de(t,e+8),de(t,e+16),de(t,e+24),n,r)}function be(t,e=t.length){const n=oe.fromNumber(81,!0);if(e<=32)return e<=16?function(t,e=t.length){if(e>=8){const n=ce.add(2*e),r=de(t,0).add(ce),a=de(t,e-8);return ge(me(a,37).mul(n).add(r),me(r,25).add(a).mul(n),n)}if(e>=4){const n=ce.add(2*e);return ge(fe(t,0).shl(3).add(e),fe(t,e-4),n)}if(e>0){const n=t[0]+(t[e>>1]<<8),r=e+(t[e-1]<<2);return pe(ce.mul(n).xor(ue.mul(r))).mul(ce)}return ce}(t,e):function(t,e=t.length){const n=ce.add(2*e),r=de(t,0).mul(le),a=de(t,8),s=de(t,e-8).mul(n),o=de(t,e-16).mul(ce);return ge(me(r.add(a),43).add(me(s,30)).add(o),r.add(me(a.add(ce),18)).add(s),n)}(t,e);if(e<=64)return function(t,e=t.length){const n=ce.add(2*e),r=de(t,0).mul(ce),a=de(t,8),s=de(t,e-8).mul(n),o=de(t,e-16).mul(ce),i=me(r.add(a),43).add(me(s,30)).add(o),u=ge(i,r.add(me(a.add(ce),18)).add(s),n),l=de(t,16).mul(n),c=de(t,24),p=i.add(de(t,e-32)).mul(n),h=u.add(de(t,e-24)).mul(n);return ge(me(l.add(c),43).add(me(p,30)).add(h),l.add(me(c.add(r),18)).add(p),n)}(t,e);let r=n,a=n.mul(le).add(113),s=pe(a.mul(ce).add(113)).mul(ce),o=[oe.UZERO,oe.UZERO],i=[oe.UZERO,oe.UZERO];r=r.mul(ce).add(de(t,0));let u=0;const l=64*(e-1>>6),c=l+(e-1&63)-63;do{r=me(r.add(a).add(o[0]).add(de(t,u+8)),37).mul(le),a=me(a.add(o[1]).add(de(t,u+48)),42).mul(le),r=r.xor(i[1]),a=a.add(o[0]).add(de(t,u+40)),s=me(s.add(i[0]),33).mul(le),o=ye(t,u,o[1].mul(le),r.add(i[0])),i=ye(t,u+32,s.add(i[1]),a.add(de(t,u+16))),[s,r]=[r,s],u+=64}while(u!==l);const p=le.add(s.and(255).shl(1));return u=c,i[0]=i[0].add(e-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=me(r.add(a).add(o[0]).add(de(t,u+8)),37).mul(p),a=me(a.add(o[1]).add(de(t,u+48)),42).mul(p),r=r.xor(i[1].mul(9)),a=a.add(o[0].mul(9).add(de(t,u+40))),s=me(s.add(i[0]),33).mul(p),o=ye(t,u,o[1].mul(p),r.add(i[0])),i=ye(t,u+32,s.add(i[1]),a.add(de(t,u+16))),[s,r]=[r,s],ge(ge(o[0],i[0],p).add(pe(a).mul(ue)).add(s),ge(o[1],i[1],p).add(r),p)}function we(t,e){return"string"===e?Te(t):ve([t],e)}function ve(t,e){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=x(t)),ot().getBool("DEBUG")&&R(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){const e=new Uint8Array(t.length);for(let n=0;n<e.length;++n)0!==Math.round(t[n])&&(e[n]=1);return e}throw new Error(`Unknown data type ${e}`)}function xe(){return ot().platform.now()}function Ne(t,e){return ot().platform.fetch(t,e)}function Te(t,e="utf-8"){return e=e||"utf-8",ot().platform.encode(t,e)}function ke(t,e="utf-8"){return e=e||"utf-8",ot().platform.decode(t,e)}n(Dt,l),n(Dt,Ct);class Ee{constructor(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new _e)}profileKernel(t,e,n){let r;const a=()=>{r=n()};let s;const o=xe();if(this.backendTimer.timerAvailable())s=this.backendTimer.time(a);else{a();for(const t of r)t.dataSync();s=Promise.resolve({kernelMs:xe()-o})}if(ot().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let e=0;e<r.length;e++){const n=r[e];n.data().then((e=>{Se(e,n.dtype,t)}))}return{kernelName:t,outputs:r,inputs:e,timeMs:s.then((t=>t.kernelMs)),extraInfo:s.then((t=>null!=t.getExtraProfileInfo?t.getExtraProfileInfo():""))}}logKernelProfile(t){const{kernelName:e,outputs:n,timeMs:r,inputs:a,extraInfo:s}=t;n.forEach((t=>{Promise.all([t.data(),r,s]).then((n=>{this.logger.logKernelProfile(e,t,n[0],n[1],a,n[2])}))}))}}function Se(t,e,n){if("float32"!==e)return!1;for(let e=0;e<t.length;e++){const r=t[e];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class _e{logKernelProfile(t,e,n,r,a,s){const o="number"==typeof r?I(`${r}ms`,9):r.error,i=I(t,25),u=e.rank,l=e.size,c=I(e.shape.toString(),14);let p="";for(const t in a){const n=a[t];if(null!=n){const r=n.shape||e.shape,a=r.length;p+=`${t}: ${a}D ${a>0?r:""} `}}console.log(`%c${i}\t%c${o}\t%c${u}D ${c}\t%c${l}\t%c${p}\t%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ae(t,e,n){const r={},a={};for(let t=0;t<e.length;t++)r[e[t].id]=!0;for(let n=0;n<t.length;n++){const s=t[n],o=s.inputs;for(const t in o){const n=o[t];let i=!1;for(let t=0;t<e.length;t++)if(r[n.id]){s.outputs.forEach((t=>r[t.id]=!0)),i=!0,a[s.id]=!0;break}if(i)break}}const s={};s[n.id]=!0;const o={};for(let e=t.length-1;e>=0;e--){const n=t[e],r=n.inputs;for(let t=0;t<n.outputs.length;t++)if(s[n.outputs[t].id]){for(const t in r)s[r[t].id]=!0,o[n.id]=!0;break}}const i=[];for(let e=0;e<t.length;e++){const n=t[e];if(a[n.id]&&o[n.id]){const t={};for(const e in n.inputs){const a=n.inputs[e];r[a.id]&&(t[e]=a)}const e=Object.assign({},n);e.inputs=t,e.outputs=n.outputs,i.push(e)}}return i}function Ie(t,e,n,r){for(let a=e.length-1;a>=0;a--){const s=e[a],o=[];if(s.outputs.forEach((e=>{const n=t[e.id];null!=n?o.push(n):o.push(null)})),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const i=s.gradient(o);for(const e in s.inputs){if(!(e in i))throw new Error(`Cannot backprop through input ${e}. Available gradients found: ${Object.keys(i)}.`);const a=n((()=>i[e]()));if("float32"!==a.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${e} must have 'float32' dtype, but has '${a.dtype}'`);const o=s.inputs[e];if(!k(a.shape,o.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${e}' has shape '${a.shape}', which does not match the shape of the input '${o.shape}'`);if(null==t[o.id])t[o.id]=a;else{const e=t[o.id];t[o.id]=r(e,a),e.dispose()}}}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Me(t,e,n,r){const a=G(e),s=function(t,e,n,r){const a=N(e),s=r[r.length-1],o=new Array(s).fill(0),i=e.length,u="complex64"===n?Ce(t):t;if(i>1)for(let t=0;t<a/s;t++){const e=t*s;for(let t=0;t<s;t++)o[t]=Math.max(o[t],Oe(u[e+t],0,n).length)}return o}(t,e,n,a),o=e.length,i=De(t,e,n,a,s),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(i.map((t=>"    "+t)).join("\n")),u.join("\n")}function Oe(t,e,n){let r;return r=Array.isArray(t)?`${parseFloat(t[0].toFixed(7))} + ${parseFloat(t[1].toFixed(7))}j`:V(t)?`'${t}'`:"bool"===n?$e(t):parseFloat(t.toFixed(7)).toString(),I(r,e)}function $e(t){return 0===t?"false":"true"}function De(t,e,n,r,a,s=!0){const o="complex64"===n?2:1,i=e[0],u=e.length;if(0===u){if("complex64"===n){return[Oe(Ce(t)[0],0,n)]}return"bool"===n?[$e(t[0])]:[t[0].toString()]}if(1===u){if(i>20){const e=3*o;let r=Array.from(t.slice(0,e)),s=Array.from(t.slice((i-3)*o,i*o));return"complex64"===n&&(r=Ce(r),s=Ce(s)),["["+r.map(((t,e)=>Oe(t,a[e],n))).join(", ")+", ..., "+s.map(((t,e)=>Oe(t,a[i-3+e],n))).join(", ")+"]"]}return["["+("complex64"===n?Ce(t):Array.from(t)).map(((t,e)=>Oe(t,a[e],n))).join(", ")+"]"]}const l=e.slice(1),c=r.slice(1),p=r[0]*o,h=[];if(i>20){for(let e=0;e<3;e++){const r=e*p,s=r+p;h.push(...De(t.slice(r,s),l,n,c,a,!1))}h.push("...");for(let e=i-3;e<i;e++){const r=e*p,s=r+p;h.push(...De(t.slice(r,s),l,n,c,a,e===i-1))}}else for(let e=0;e<i;e++){const r=e*p,s=r+p;h.push(...De(t.slice(r,s),l,n,c,a,e===i-1))}const d=2===u?",":"";h[0]="["+h[0]+d;for(let t=1;t<h.length-1;t++)h[t]=" "+h[t]+d;let f=",\n";for(let t=2;t<u;t++)f+="\n";return h[h.length-1]=" "+h[h.length-1]+"]"+(s?"":f),h}function Ce(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}class Fe{constructor(t,e,n){if(this.dtype=e,this.shape=t.slice(),this.size=N(t),null!=n){const t=n.length;b(t===this.size,(()=>`Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||F(e,this.size),this.strides=G(t)}set(t,...e){0===e.length&&(e=[0]),b(e.length===this.rank,(()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`));const n=this.locToIndex(e);this.values[n]=t}get(...t){0===t.length&&(t=[0]);let e=0;for(const n of t){if(n<0||n>=this.shape[e]){const e=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(e)}e++}let n=t[t.length-1];for(let e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return this.values[n]}locToIndex(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];let e=t[t.length-1];for(let n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e}indexToLoc(t){if(0===this.rank)return[];if(1===this.rank)return[t];const e=new Array(this.shape.length);for(let n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Re().makeTensor(this.values,this.shape,this.dtype)}}let Re=null,Le=null,Be=null;class Pe{constructor(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=N(t),this.strides=G(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Le.buffer(this.shape,this.dtype,t)}bufferSync(){return Le.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return X(this.shape,t,"complex64"===this.dtype)}arraySync(){return X(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const t=Re().read(this.dataId);if("string"===this.dtype){const e=await t;try{return e.map((t=>ke(t)))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Re().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Re().readSync(this.dataId);if("string"===this.dtype)try{return t.map((t=>ke(t)))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Re().read(this.dataId);return"string"===this.dtype?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Re().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Le.print(this,t)}clone(){return this.throwIfDisposed(),Le.clone(this)}toString(t=!1){return Me(this.dataSync(),this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Le.cast(this,t)}variable(t=!0,e,n){return this.throwIfDisposed(),Re().makeVariable(this,t,e,n)}}Object.defineProperty(Pe,Symbol.hasInstance,{value:t=>!!t&&null!=t.data&&null!=t.dataSync&&null!=t.throwIfDisposed}),Et("Tensor",(()=>Pe));class ze extends Pe{constructor(t,e,n,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=n}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!k(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Re().disposeTensor(this),this.dataId=t.dataId,Re().incRef(this,null)}dispose(){Re().disposeVariable(this),this.isDisposedInternal=!0}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Ue,Ve,je,He,Ke,qe,We,Ge,Ye,Xe;Object.defineProperty(ze,Symbol.hasInstance,{value:t=>t instanceof Pe&&null!=t.assign&&t.assign instanceof Function}),(Ve=Ue||(Ue={})).R0="R0",Ve.R1="R1",Ve.R2="R2",Ve.R3="R3",Ve.R4="R4",Ve.R5="R5",Ve.R6="R6",(He=je||(je={})).float32="float32",He.int32="int32",He.bool="int32",He.complex64="complex64",(qe=Ke||(Ke={})).float32="float32",qe.int32="int32",qe.bool="bool",qe.complex64="complex64",(Ge=We||(We={})).float32="float32",Ge.int32="float32",Ge.bool="float32",Ge.complex64="complex64",(Xe=Ye||(Ye={})).float32="complex64",Xe.int32="complex64",Xe.bool="complex64",Xe.complex64="complex64";const Je={float32:We,int32:je,bool:Ke,complex64:Ye};function Ze(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return Je[t][e]}function Qe(t,e){if(t.dtype===e.dtype)return[t,e];const n=Ze(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function tn(t){const e=[];return en(t,e,new Set),e}function en(t,e,n){if(null==t)return;if(t instanceof Pe)return void e.push(t);if(r=t,!Array.isArray(r)&&"object"!=typeof r)return;var r;const a=t;for(const t in a){const r=a[t];n.has(r)||(n.add(r),en(r,e,n))}}function nn(t){return null!=t.kernelName}class rn{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((t=>t.name))))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class an{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new rn}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;{const{asyncInit:e}=this.initializeBackend(t);if(e)return null}}return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,n=1){return t in this.registryFactory?(St(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:n},!0)}async setBackend(t){if(null==this.registryFactory[t])throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,null==this.registry[t]){this.backendInstance=null;const{success:e,asyncInit:n}=this.initializeBackend(t);if(!(n?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Ee(this.backendInstance),!0}setupRegisteredKernels(){Ot(this.backendName).forEach((t=>{null!=t.setupFunc&&t.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(t){Ot(t).forEach((e=>{null!=e.disposeFunc&&e.disposeFunc(this.registry[t])}))}initializeBackend(t){const e=this.registryFactory[t];if(null==e)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const n=e.factory();if(!n||n instanceof i||"function"!=typeof n.then)return this.registry[t]=n,{success:!0,asyncInit:!1};{const e=++this.pendingBackendInitId,r=n.then((n=>!(e<this.pendingBackendInitId)&&(this.registry[t]=n,this.pendingBackendInit=null,!0))).catch((n=>(e<this.pendingBackendInitId||(this.pendingBackendInit=null,St(`Initialization of backend ${t} failed`),St(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(e){return St(`Initialization of backend ${t} failed`),St(e.stack||e.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority))}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const n=this.state.tensorInfo.get(e),r=n.backend,a=this.readSync(e),s=r.refCount(e);r.disposeData(e,!0),n.backend=t,t.move(e,a,n.shape,n.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let n,r=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=e(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(t,e,n){t();try{const t=n();return e(),t}catch(t){throw e(),t}}nextTensorId(){return an.nextTensorId++}nextVariableId(){return an.nextVariableId++}clone(t){const e=on.runKernel("Identity",{x:t}),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],(t=>({x:()=>{const e={x:t},n={dtype:"float32"};return on.runKernel("Cast",e,n)}})),[],{}),e}runKernel(t,e,n){null==this.backendName&&this.backend;if(!(null!=It(t,this.backendName)))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,n){const r=this.backend.numDataIds();let a=0;n.forEach((t=>{a+="complex64"===t.dtype?3:1}));const s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-e-a-s;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${t}'`)}runKernelFunc(t){let e,n=[];const r=this.isTapeOn(),a=this.state.numBytes,s=this.state.numTensors;let o,i;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const u=nn(t)?t.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(nn(t)){const{kernelName:e,inputs:a,attrs:s}=t;null==this.backendName&&this.backend;const u=It(e,this.backendName);b(null!=u,(()=>`Cannot find registered kernel '${e}' for backend '${this.backendName}'`)),o=()=>{const t=this.backend.numDataIds();i=u.kernelFunc({inputs:a,attrs:s,backend:this.backend});const o=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(e,t,o);const l=o.map((t=>null!=t.rank?t:this.makeTensorFromTensorInfo(t)));if(r){const t=this.getTensorsForGradient(e,a,l);n=this.saveTensorsForBackwardMode(t)}return l}}else{const{forwardFunc:e}=t,a=t=>{r&&(n=t.map((t=>this.keep(this.clone(t)))))};o=()=>{const t=this.backend.numDataIds();i=this.tidy((()=>e(this.backend,a)));const n=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,t,n),n}}const{inputs:l,attrs:c}=t,p=nn(t)?null:t.backwardsFunc;let h;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(h=this.profiler.profileKernel(u,l,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),e=h.outputs):e=o()})),r&&this.addTapeNode(u,l,e,p,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-s,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map((t=>null!=l[t]?l[t].shape:null)),outputShapes:e.map((t=>t.shape)),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(i)?e:e[0]}saveTensorsForBackwardMode(t){return t.map((t=>this.keep(this.clone(t))))}getTensorsForGradient(t,e,n){const r=Mt(t);if(null!=r){const t=r.inputsToSave||[],a=r.outputsToSave||[];let s;r.saveAllInputs?(b(Array.isArray(e),(()=>"saveAllInputs is true, expected inputs to be an array.")),s=Object.keys(e).map((t=>e[t]))):s=t.map((t=>e[t]));const o=n.filter(((t,e)=>a[e]));return s.concat(o)}return[]}makeTensor(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=t;"string"===n&&V(t[0])&&(a=t.map((t=>Te(t))));const s=r.write(a,e,n),o=new Pe(e,n,s,this.nextTensorId());if(this.trackTensor(o,r),"string"===n){const t=this.state.tensorInfo.get(s),e=U(a);this.state.numBytes+=e-t.bytes,t.bytes=e}return o}makeTensorFromDataId(t,e,n,r){const a={dataId:t,shape:e,dtype:n=n||"float32"};return this.makeTensorFromTensorInfo(a,r)}makeTensorFromTensorInfo(t,e){const{dataId:n,shape:r,dtype:a}=t,s=new Pe(r,a,n,this.nextTensorId());return this.trackTensor(s,e),s}makeVariable(t,e=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.cast(r));const a=new ze(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(t,e){this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(n=t.size*z(t.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:n})),t instanceof ze||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,"string"===t.dtype&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),"complex64"!==t.dtype&&"string"!==t.dtype){const e=t.size*z(t.dtype);this.state.numBytes-=e}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((t=>t.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const t of this.state.activeProfile.kernels)t.kernelTimeMs=await t.kernelTimeMs,t.extraInfo=await t.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(t,e,n,r,a,s){const o={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},i=Mt(t);null!=i&&(r=i.gradFunc),null!=r&&(o.gradient=t=>(t=t.map(((t,e)=>{if(null==t){const t=n[e],r=Z(t.size,t.dtype);return this.makeTensor(r,t.shape,t.dtype)}return t})),r(t.length>1?t:t[0],a,s))),this.state.activeTape.push(o)}keep(t){return t.kept=!0,t}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=tn(t),n=new Set(e.map((t=>t.id)));for(let t=0;t<this.state.activeScope.track.length;t++){const e=this.state.activeScope.track[t];e.kept||n.has(e.id)||e.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach((t=>{t.kept||t.scopeId!==r.id||this.track(t)}))}gradients(t,e,n,r=!1){if(b(e.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",t)));b(a instanceof Pe,(()=>"The result y returned by f() must be a tensor."));const s=Ae(this.state.activeTape,e,a);if(!r&&0===s.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const t={};t[a.id]=null==n?function(t){const e=J(N(t),"float32");return on.makeTensor(e,t,"float32")}(a.shape):n,Ie(t,s,(t=>this.tidy(t)),un);const r=e.map((e=>t[e.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((t=>{for(const e of t.saved)e.dispose()})),this.state.activeTape=null),{value:a,grads:r}}))}customGrad(t){return b(q(t),(()=>"The f passed in customGrad(f) must be a function.")),(...e)=>{let n;b(e.every((t=>t instanceof Pe)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};e.forEach(((t,e)=>{r[e]=t}));return this.runKernelFunc({forwardFunc:(r,a)=>(n=t(...e,a),b(n.value instanceof Pe,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),b(q(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value),backwardsFunc:(t,r)=>{const a=n.gradFunc(t,r),s=Array.isArray(a)?a:[a];b(s.length===e.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),b(s.every((t=>t instanceof Pe)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return s.forEach(((t,e)=>{o[e]=()=>t})),o},inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=xe(),n=await this.backend.time(t);return n.wallMs=xe()-e,n}track(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new rn;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function sn(){const t=kt();if(null==t._tfengine){const e=new at(t);t._tfengine=new an(e)}var e;return e=t._tfengine.ENV,it=e,Re=()=>t._tfengine,t._tfengine}an.nextTensorId=0,an.nextVariableId=0;const on=sn();function un(t,e){const n={a:t,b:e};return on.runKernel("Add",n)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ln=ot();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function cn(t,e){let n=t;if(P(t))return"string"===e?[]:[t.length];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||P(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&ot().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&pn(t,r,[]),r}function pn(t,e,n){if(n=n||[],!Array.isArray(t)&&!P(t))return void b(0===e.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`));b(e.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`)),b(t.length===e[0],(()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`));const r=e.slice(1);for(let e=0;e<t.length;++e)pn(t[e],r,n.concat(e))}function hn(t,e,n,r){if("string_or_numeric"!==t){if(null==t)throw new Error("Expected dtype cannot be null.");if("numeric"!==t&&t!==e||"numeric"===t&&"string"===e)throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function dn(t,e,n,r="numeric"){if(t instanceof Pe)return hn(r,t.dtype,e,n),t;let a=K(t);if("string"!==a&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),hn(r,a,e,n),null==t||!P(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){const r=null==t?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const s=cn(t,a);P(t)||Array.isArray(t)||(t=[t]);const o="string"!==a?ve(t,a):x(t,[],!0);return on.makeTensor(o,s,a)}function fn(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map(((t,a)=>dn(t,`${e}[${a}]`,n,r)))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ln.registerFlag("DEBUG",(()=>!1),(t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),ln.registerFlag("IS_BROWSER",(()=>"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope)),ln.registerFlag("IS_NODE",(()=>void 0!==ct&&void 0!==ct.versions&&void 0!==ct.versions.node)),ln.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),ln.registerFlag("PROD",(()=>!1)),ln.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>ln.getBool("DEBUG"))),ln.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),ln.registerFlag("IS_TEST",(()=>!1)),ln.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),ln.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),ln.registerFlag("ENGINE_COMPILE_ONLY",(()=>!1)),ln.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",(()=>!1)),ln.registerFlag("USE_SETTIMEOUTCUSTOM",(()=>!1));function mn(t){const e=Object.keys(t);if(1!==e.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+="__op";const a=(...t)=>{on.startScope(n);try{const e=r(...t);return rt(e)&&console.error("Cannot return a Promise inside of tidy."),on.endScope(e),e}catch(t){throw on.endScope(null),t}};return Object.defineProperty(a,"name",{value:n,configurable:!0}),a}const gn=mn({complex_:function(t,e){const n=dn(t,"real","complex"),r=dn(e,"imag","complex");w(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const a={real:n,imag:r};return on.runKernel("Complex",a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(t,e,n,r){if(null==r&&(r=K(t)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!P(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){tt(e);const t=N(e),r=N(n);b(t===r,(()=>`Based on the provided shape, [${e}], the tensor should have ${t} values but has ${r}`));for(let t=0;t<n.length;++t){const r=n[t],a=t!==n.length-1||r!==N(e.slice(t));b(n[t]===e[t]||!a,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `))}}return P(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==r?ve(t,r):x(t,[],!0),on.makeTensor(t,e,r)}function bn(t,e,n){return yn(t,e,cn(t,n),n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wn={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var vn,xn,Nn;xn=function(t){var e,n,r=On(t),a=r[0],s=r[1],o=new _n(function(t,e,n){return 3*(e+n)/4-n}(0,a,s)),i=0,u=s>0?a-4:a;for(n=0;n<u;n+=4)e=Sn[t.charCodeAt(n)]<<18|Sn[t.charCodeAt(n+1)]<<12|Sn[t.charCodeAt(n+2)]<<6|Sn[t.charCodeAt(n+3)],o[i++]=e>>16&255,o[i++]=e>>8&255,o[i++]=255&e;2===s&&(e=Sn[t.charCodeAt(n)]<<2|Sn[t.charCodeAt(n+1)]>>4,o[i++]=255&e);1===s&&(e=Sn[t.charCodeAt(n)]<<10|Sn[t.charCodeAt(n+1)]<<4|Sn[t.charCodeAt(n+2)]>>2,o[i++]=e>>8&255,o[i++]=255&e);return o},Nn=function(t){for(var e,n=t.length,r=n%3,a=[],s=16383,o=0,i=n-r;o<i;o+=s)a.push($n(t,o,o+s>i?i:o+s));1===r?(e=t[n-1],a.push(En[e>>2]+En[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],a.push(En[e>>10]+En[e>>4&63]+En[e<<2&63]+"="));return a.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Tn,kn,En=[],Sn=[],_n="undefined"!=typeof Uint8Array?Uint8Array:Array,An="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",In=0,Mn=An.length;In<Mn;++In)En[In]=An[In],Sn[An.charCodeAt(In)]=In;function On(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function $n(t,e,n){for(var r,a,s=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(En[(a=r)>>18&63]+En[a>>12&63]+En[a>>6&63]+En[63&a]);return s.join("")}Sn["-".charCodeAt(0)]=62,Sn["_".charCodeAt(0)]=63,Tn=function(t,e,n,r,a){var s,o,i=8*a-r-1,u=(1<<i)-1,l=u>>1,c=-7,p=n?a-1:0,h=n?-1:1,d=t[e+p];for(p+=h,s=d&(1<<-c)-1,d>>=-c,c+=i;c>0;s=256*s+t[e+p],p+=h,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=r;c>0;o=256*o+t[e+p],p+=h,c-=8);if(0===s)s=1-l;else{if(s===u)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=l}return(d?-1:1)*o*Math.pow(2,s-r)},kn=function(t,e,n,r,a,s){var o,i,u,l=8*s-a-1,c=(1<<l)-1,p=c>>1,h=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,f=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+p>=1?h/u:h*Math.pow(2,1-p))*u>=2&&(o++,u/=2),o+p>=c?(i=0,o=c):o+p>=1?(i=(e*u-1)*Math.pow(2,a),o+=p):(i=e*Math.pow(2,p-1)*Math.pow(2,a),o=0));a>=8;t[n+d]=255&i,d+=f,i/=256,a-=8);for(o=o<<a|i,l+=a;l>0;t[n+d]=255&o,d+=f,o/=256,l-=8);t[n+d-f]|=128*m};var Dn="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;vn=Fn;function Cn(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,Fn.prototype),e}function Fn(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return Bn(t)}return Rn(t,e,n)}function Rn(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Fn.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=0|Vn(t,e),r=Cn(n),a=r.write(t,e);a!==n&&(r=r.slice(0,a));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(dr(t,Uint8Array)){var e=new Uint8Array(t);return zn(e.buffer,e.byteOffset,e.byteLength)}return Pn(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(dr(t,ArrayBuffer)||t&&dr(t.buffer,ArrayBuffer))return zn(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(dr(t,SharedArrayBuffer)||t&&dr(t.buffer,SharedArrayBuffer)))return zn(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return Fn.from(r,e,n);var a=function(t){if(Fn.isBuffer(t)){var e=0|Un(t.length),n=Cn(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||fr(t.length)?Cn(0):Pn(t);if("Buffer"===t.type&&Array.isArray(t.data))return Pn(t.data)}(t);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Fn.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function Ln(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Bn(t){return Ln(t),Cn(t<0?0:0|Un(t))}function Pn(t){for(var e=t.length<0?0:0|Un(t.length),n=Cn(e),r=0;r<e;r+=1)n[r]=255&t[r];return n}function zn(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,Fn.prototype),r}function Un(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function Vn(t,e){if(Fn.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||dr(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return cr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return pr(t).length;default:if(a)return r?-1:cr(t).length;e=(""+e).toLowerCase(),a=!0}}function jn(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return nr(this,e,n);case"utf8":case"utf-8":return Qn(this,e,n);case"ascii":return tr(this,e,n);case"latin1":case"binary":return er(this,e,n);case"base64":return Zn(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rr(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function Hn(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function Kn(t,e,n,r,a){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),fr(n=+n)&&(n=a?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(a)return-1;n=t.length-1}else if(n<0){if(!a)return-1;n=0}if("string"==typeof e&&(e=Fn.from(e,r)),Fn.isBuffer(e))return 0===e.length?-1:qn(t,e,n,r,a);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):qn(t,[e],n,r,a);throw new TypeError("val must be string, number or Buffer")}function qn(t,e,n,r,a){var s,o=1,i=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,i/=2,u/=2,n/=2}function l(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(a){var c=-1;for(s=n;s<i;s++)if(l(t,s)===l(e,-1===c?0:s-c)){if(-1===c&&(c=s),s-c+1===u)return c*o}else-1!==c&&(s-=s-c),c=-1}else for(n+u>i&&(n=i-u),s=n;s>=0;s--){for(var p=!0,h=0;h<u;h++)if(l(t,s+h)!==l(e,h)){p=!1;break}if(p)return s}return-1}function Wn(t,e,n,r){n=Number(n)||0;var a=t.length-n;r?(r=Number(r))>a&&(r=a):r=a;var s=e.length;r>s/2&&(r=s/2);for(var o=0;o<r;++o){var i=parseInt(e.substr(2*o,2),16);if(fr(i))return o;t[n+o]=i}return o}function Gn(t,e,n,r){return hr(cr(e,t.length-n),t,n,r)}function Yn(t,e,n,r){return hr(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function Xn(t,e,n,r){return hr(pr(e),t,n,r)}function Jn(t,e,n,r){return hr(function(t,e){for(var n,r,a,s=[],o=0;o<t.length&&!((e-=2)<0);++o)r=(n=t.charCodeAt(o))>>8,a=n%256,s.push(a),s.push(r);return s}(e,t.length-n),t,n,r)}function Zn(t,e,n){return 0===e&&n===t.length?Nn(t):Nn(t.slice(e,n))}function Qn(t,e,n){n=Math.min(t.length,n);for(var r=[],a=e;a<n;){var s,o,i,u,l=t[a],c=null,p=l>239?4:l>223?3:l>191?2:1;if(a+p<=n)switch(p){case 1:l<128&&(c=l);break;case 2:128==(192&(s=t[a+1]))&&(u=(31&l)<<6|63&s)>127&&(c=u);break;case 3:s=t[a+1],o=t[a+2],128==(192&s)&&128==(192&o)&&(u=(15&l)<<12|(63&s)<<6|63&o)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:s=t[a+1],o=t[a+2],i=t[a+3],128==(192&s)&&128==(192&o)&&128==(192&i)&&(u=(15&l)<<18|(63&s)<<12|(63&o)<<6|63&i)>65535&&u<1114112&&(c=u)}null===c?(c=65533,p=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),a+=p}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}Fn.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Fn.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Fn.prototype,"parent",{enumerable:!0,get:function(){if(Fn.isBuffer(this))return this.buffer}}),Object.defineProperty(Fn.prototype,"offset",{enumerable:!0,get:function(){if(Fn.isBuffer(this))return this.byteOffset}}),Fn.poolSize=8192,Fn.from=function(t,e,n){return Rn(t,e,n)},Object.setPrototypeOf(Fn.prototype,Uint8Array.prototype),Object.setPrototypeOf(Fn,Uint8Array),Fn.alloc=function(t,e,n){return function(t,e,n){return Ln(t),t<=0?Cn(t):void 0!==e?"string"==typeof n?Cn(t).fill(e,n):Cn(t).fill(e):Cn(t)}(t,e,n)},Fn.allocUnsafe=function(t){return Bn(t)},Fn.allocUnsafeSlow=function(t){return Bn(t)},Fn.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Fn.prototype},Fn.compare=function(t,e){if(dr(t,Uint8Array)&&(t=Fn.from(t,t.offset,t.byteLength)),dr(e,Uint8Array)&&(e=Fn.from(e,e.offset,e.byteLength)),!Fn.isBuffer(t)||!Fn.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var n=t.length,r=e.length,a=0,s=Math.min(n,r);a<s;++a)if(t[a]!==e[a]){n=t[a],r=e[a];break}return n<r?-1:r<n?1:0},Fn.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Fn.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Fn.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=Fn.allocUnsafe(e),a=0;for(n=0;n<t.length;++n){var s=t[n];if(dr(s,Uint8Array))a+s.length>r.length?Fn.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else{if(!Fn.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,a)}a+=s.length}return r},Fn.byteLength=Vn,Fn.prototype._isBuffer=!0,Fn.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)Hn(this,e,e+1);return this},Fn.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)Hn(this,e,e+3),Hn(this,e+1,e+2);return this},Fn.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)Hn(this,e,e+7),Hn(this,e+1,e+6),Hn(this,e+2,e+5),Hn(this,e+3,e+4);return this},Fn.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?Qn(this,0,t):jn.apply(this,arguments)},Fn.prototype.toLocaleString=Fn.prototype.toString,Fn.prototype.equals=function(t){if(!Fn.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Fn.compare(this,t)},Fn.prototype.inspect=function(){var t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Dn&&(Fn.prototype[Dn]=Fn.prototype.inspect),Fn.prototype.compare=function(t,e,n,r,a){if(dr(t,Uint8Array)&&(t=Fn.from(t,t.offset,t.byteLength)),!Fn.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),e<0||n>t.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&e>=n)return 0;if(r>=a)return-1;if(e>=n)return 1;if(this===t)return 0;for(var s=(a>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0),i=Math.min(s,o),u=this.slice(r,a),l=t.slice(e,n),c=0;c<i;++c)if(u[c]!==l[c]){s=u[c],o=l[c];break}return s<o?-1:o<s?1:0},Fn.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Fn.prototype.indexOf=function(t,e,n){return Kn(this,t,e,n,!0)},Fn.prototype.lastIndexOf=function(t,e,n){return Kn(this,t,e,n,!1)},Fn.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var a=this.length-e;if((void 0===n||n>a)&&(n=a),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return Wn(this,t,e,n);case"utf8":case"utf-8":return Gn(this,t,e,n);case"ascii":case"latin1":case"binary":return Yn(this,t,e,n);case"base64":return Xn(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Jn(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Fn.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function tr(t,e,n){var r="";n=Math.min(t.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(127&t[a]);return r}function er(t,e,n){var r="";n=Math.min(t.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(t[a]);return r}function nr(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=e;s<n;++s)a+=mr[t[s]];return a}function rr(t,e,n){for(var r=t.slice(e,n),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+256*r[s+1]);return a}function ar(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function sr(t,e,n,r,a,s){if(!Fn.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function or(t,e,n,r,a,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ir(t,e,n,r,a){return e=+e,n>>>=0,a||or(t,0,n,4),kn(t,e,n,r,23,4),n+4}function ur(t,e,n,r,a){return e=+e,n>>>=0,a||or(t,0,n,8),kn(t,e,n,r,52,8),n+8}Fn.prototype.slice=function(t,e){var n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var r=this.subarray(t,e);return Object.setPrototypeOf(r,Fn.prototype),r},Fn.prototype.readUintLE=Fn.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||ar(t,e,this.length);for(var r=this[t],a=1,s=0;++s<e&&(a*=256);)r+=this[t+s]*a;return r},Fn.prototype.readUintBE=Fn.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||ar(t,e,this.length);for(var r=this[t+--e],a=1;e>0&&(a*=256);)r+=this[t+--e]*a;return r},Fn.prototype.readUint8=Fn.prototype.readUInt8=function(t,e){return t>>>=0,e||ar(t,1,this.length),this[t]},Fn.prototype.readUint16LE=Fn.prototype.readUInt16LE=function(t,e){return t>>>=0,e||ar(t,2,this.length),this[t]|this[t+1]<<8},Fn.prototype.readUint16BE=Fn.prototype.readUInt16BE=function(t,e){return t>>>=0,e||ar(t,2,this.length),this[t]<<8|this[t+1]},Fn.prototype.readUint32LE=Fn.prototype.readUInt32LE=function(t,e){return t>>>=0,e||ar(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Fn.prototype.readUint32BE=Fn.prototype.readUInt32BE=function(t,e){return t>>>=0,e||ar(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Fn.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||ar(t,e,this.length);for(var r=this[t],a=1,s=0;++s<e&&(a*=256);)r+=this[t+s]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*e)),r},Fn.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||ar(t,e,this.length);for(var r=e,a=1,s=this[t+--r];r>0&&(a*=256);)s+=this[t+--r]*a;return s>=(a*=128)&&(s-=Math.pow(2,8*e)),s},Fn.prototype.readInt8=function(t,e){return t>>>=0,e||ar(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Fn.prototype.readInt16LE=function(t,e){t>>>=0,e||ar(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Fn.prototype.readInt16BE=function(t,e){t>>>=0,e||ar(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Fn.prototype.readInt32LE=function(t,e){return t>>>=0,e||ar(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Fn.prototype.readInt32BE=function(t,e){return t>>>=0,e||ar(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Fn.prototype.readFloatLE=function(t,e){return t>>>=0,e||ar(t,4,this.length),Tn(this,t,!0,23,4)},Fn.prototype.readFloatBE=function(t,e){return t>>>=0,e||ar(t,4,this.length),Tn(this,t,!1,23,4)},Fn.prototype.readDoubleLE=function(t,e){return t>>>=0,e||ar(t,8,this.length),Tn(this,t,!0,52,8)},Fn.prototype.readDoubleBE=function(t,e){return t>>>=0,e||ar(t,8,this.length),Tn(this,t,!1,52,8)},Fn.prototype.writeUintLE=Fn.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e>>>=0,n>>>=0,r)||sr(this,t,e,n,Math.pow(2,8*n)-1,0);var a=1,s=0;for(this[e]=255&t;++s<n&&(a*=256);)this[e+s]=t/a&255;return e+n},Fn.prototype.writeUintBE=Fn.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e>>>=0,n>>>=0,r)||sr(this,t,e,n,Math.pow(2,8*n)-1,0);var a=n-1,s=1;for(this[e+a]=255&t;--a>=0&&(s*=256);)this[e+a]=t/s&255;return e+n},Fn.prototype.writeUint8=Fn.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,1,255,0),this[e]=255&t,e+1},Fn.prototype.writeUint16LE=Fn.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Fn.prototype.writeUint16BE=Fn.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Fn.prototype.writeUint32LE=Fn.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Fn.prototype.writeUint32BE=Fn.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Fn.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){var a=Math.pow(2,8*n-1);sr(this,t,e,n,a-1,-a)}var s=0,o=1,i=0;for(this[e]=255&t;++s<n&&(o*=256);)t<0&&0===i&&0!==this[e+s-1]&&(i=1),this[e+s]=(t/o>>0)-i&255;return e+n},Fn.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){var a=Math.pow(2,8*n-1);sr(this,t,e,n,a-1,-a)}var s=n-1,o=1,i=0;for(this[e+s]=255&t;--s>=0&&(o*=256);)t<0&&0===i&&0!==this[e+s+1]&&(i=1),this[e+s]=(t/o>>0)-i&255;return e+n},Fn.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Fn.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Fn.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Fn.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Fn.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||sr(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Fn.prototype.writeFloatLE=function(t,e,n){return ir(this,t,e,!0,n)},Fn.prototype.writeFloatBE=function(t,e,n){return ir(this,t,e,!1,n)},Fn.prototype.writeDoubleLE=function(t,e,n){return ur(this,t,e,!0,n)},Fn.prototype.writeDoubleBE=function(t,e,n){return ur(this,t,e,!1,n)},Fn.prototype.copy=function(t,e,n,r){if(!Fn.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var a=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),a},Fn.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Fn.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){var a=t.charCodeAt(0);("utf8"===r&&a<128||"latin1"===r)&&(t=a)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var s;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(s=e;s<n;++s)this[s]=t;else{var o=Fn.isBuffer(t)?t:Fn.from(t,r),i=o.length;if(0===i)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(s=0;s<n-e;++s)this[s+e]=o[s%i]}return this};var lr=/[^+/0-9A-Za-z-_]/g;function cr(t,e){var n;e=e||1/0;for(var r=t.length,a=null,s=[],o=0;o<r;++o){if((n=t.charCodeAt(o))>55295&&n<57344){if(!a){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),a=n;continue}n=65536+(a-55296<<10|n-56320)}else a&&(e-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function pr(t){return xn(function(t){if((t=(t=t.split("=")[0]).trim().replace(lr,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function hr(t,e,n,r){for(var a=0;a<r&&!(a+n>=e.length||a>=t.length);++a)e[a+n]=t[a];return a}function dr(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function fr(t){return t!=t}var mr=function(){for(var t="0123456789abcdef",e=new Array(256),n=0;n<16;++n)for(var r=16*n,a=0;a<16;++a)e[r+a]=t[n]+t[a];return e}(),gr=vn;async function yr(t,e){const n=[],r=[],a=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);for(let s=0;s<a.length;++s){const o=a[s],i=Array.isArray(t)?t[s].tensor:t[o];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw new Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);const u={name:o,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){const t=new Promise((async t=>{const e=await i.bytes(),n=e.reduce(((t,e)=>t+e.length),0)+4*e.length,r=new Uint8Array(n);let a=0;for(let t=0;t<e.length;t++){const n=e[t],s=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(s,a),a+=4,r.set(n,a),a+=n.length}t(r)}));r.push(t)}else r.push(i.data());null!=e&&(u.group=e),n.push(u)}return{data:wr(await Promise.all(r)),specs:n}}function br(t,e){const n={};let r,a=0;for(const s of e){const e=s.name,o=s.dtype,i=s.shape,u=N(i);let l;if("quantization"in s){const n=s.quantization;if("uint8"===n.dtype||"uint16"===n.dtype){if(!("min"in n)||!("scale"in n))throw new Error(`Weight ${s.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==n.dtype)throw new Error(`Weight ${s.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==o)throw new Error(`Weight ${s.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${o}.`)}const i=wn[n.dtype],c=t.slice(a,a+u*i),p="uint8"===n.dtype?new Uint8Array(c):new Uint16Array(c);if("float32"===o)if("uint8"===n.dtype||"uint16"===n.dtype){l=new Float32Array(p.length);for(let t=0;t<p.length;t++){const e=p[t];l[t]=e*n.scale+n.min}}else{if("float16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type float32.`);void 0===r&&(r=Or()),l=r(p)}else{if("int32"!==o)throw new Error(`Unsupported dtype in weight '${e}': ${o}`);if("uint8"!==n.dtype&&"uint16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);l=new Int32Array(p.length);for(let t=0;t<p.length;t++){const e=p[t];l[t]=Math.round(e*n.scale+n.min)}}a+=u*i}else if("string"===o){const e=N(s.shape);l=[];for(let n=0;n<e;n++){const e=new Uint32Array(t.slice(a,a+4))[0];a+=4;const n=new Uint8Array(t.slice(a,a+e));l.push(n),a+=e}}else{const r=wn[o],s=t.slice(a,a+u*r);if("float32"===o)l=new Float32Array(s);else if("int32"===o)l=new Int32Array(s);else if("bool"===o)l=new Uint8Array(s);else{if("complex64"!==o)throw new Error(`Unsupported dtype in weight '${e}': ${o}`);{l=new Float32Array(s);const t=new Float32Array(l.length/2),r=new Float32Array(l.length/2);for(let e=0;e<t.length;e++)t[e]=l[2*e],r[e]=l[2*e+1];const a=bn(t,i,"float32"),o=bn(r,i,"float32");n[e]=gn(a,o),a.dispose(),o.dispose()}}a+=u*r}"complex64"!==o&&(n[e]=bn(l,i,o))}return n}function wr(t){if(null===t)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach((t=>{if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${t.constructor.name}`)}));const r=new Uint8Array(e);let a=0;return n.forEach((t=>{r.set(new Uint8Array(t.buffer),a),a+=t.byteLength})),r.buffer}const vr=void 0!==gr&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function xr(t){return vr?gr.byteLength(t):new Blob([t]).size}function Nr(t){if(vr)return gr.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let t=0,r=e.length;t<r;t++)n+=String.fromCharCode(e[t]);return btoa(n)}function Tr(t){if(vr){const e=gr.from(t,"base64");return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<e.length;++t)n.set([e.charCodeAt(t)],t);return n.buffer}function kr(t){if(1===t.length)return t[0];let e=0;t.forEach((t=>{e+=t.byteLength}));const n=new Uint8Array(e);let r=0;return t.forEach((t=>{n.set(new Uint8Array(t),r),r+=t.byteLength})),n.buffer}function Er(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);const e=t.split("/");return e[e.length-1]}function Sr(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return null!=t.signature&&(n.signature=t.signature),null!=t.userDefinedMetadata&&(n.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(n.modelInitializer=t.modelInitializer),null!=t.trainingConfig&&(n.trainingConfig=t.trainingConfig),n}function _r(t,e,n){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(null!=t.trainingConfig&&(r.trainingConfig=t.trainingConfig),null!=t.weightsManifest){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=n}return null!=t.signature&&(r.signature=t.signature),null!=t.userDefinedMetadata&&(r.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(r.modelInitializer=t.modelInitializer),r}async function Ar(t,e){let n,r;return null!=t.weightsManifest&&([n,r]=await e(t.weightsManifest)),_r(t,n,r)}function Ir(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:xr(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:xr(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}function Mr(t){const e=[];for(const n of t)e.push(...n.weights);return e}function Or(){const t=function(){const t=t=>{let e=t<<13,n=0;for(;0==(8388608&e);)n-=8388608,e<<=1;return e&=-8388609,n+=947912704,e|n},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}(),e=function(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}(),n=function(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}();return r=>{const a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let a=0;a<r.length;a++){const o=r[a],i=t[n[o>>10]+(1023&o)]+e[o>>10];s[a]=i}return new Float32Array(a)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $r{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==$r.instance&&($r.instance=new $r),$r.instance}static registerSaveRouter(t){$r.getInstance().saveRouters.push(t)}static registerLoadRouter(t){$r.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return $r.getHandlers(t,"save")}static getLoadHandlers(t,e){return $r.getHandlers(t,"load",e)}static getHandlers(t,e,n){const r=[];return("load"===e?$r.getInstance().loadRouters:$r.getInstance().saveRouters).forEach((e=>{const a=e(t,n);null!==a&&r.push(a)})),r}}const Dr=t=>$r.registerSaveRouter(t),Cr=t=>$r.registerLoadRouter(t),Fr=t=>$r.getSaveHandlers(t),Rr=(t,e)=>$r.getLoadHandlers(t,e);function Lr(){if(!ot().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t="undefined"==typeof window?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Br(t){const e=t.result;e.createObjectStore("models_store",{keyPath:"modelPath"}),e.createObjectStore("model_info_store",{keyPath:"modelPath"})}class Pr{constructor(t){if(this.indexedDB=Lr(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise(((t,n)=>{const r=this.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=()=>Br(r),r.onsuccess=()=>{const a=r.result;if(null==e){const e=a.transaction("models_store","readonly"),r=e.objectStore("models_store").get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));t(r.result.modelArtifacts)},r.onerror=t=>(a.close(),n(r.error)),e.oncomplete=()=>a.close()}else{const r=Ir(e),s=a.transaction("model_info_store","readwrite");let o=s.objectStore("model_info_store");const i=o.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;i.onsuccess=()=>{u=a.transaction("models_store","readwrite");const i=u.objectStore("models_store").put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:r});i.onsuccess=()=>t({modelArtifactsInfo:r}),i.onerror=t=>{o=s.objectStore("model_info_store");const e=o.delete(this.modelPath);e.onsuccess=()=>(a.close(),n(i.error)),e.onerror=t=>(a.close(),n(i.error))}},i.onerror=t=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=t=>n(r.error)}))}}Pr.URL_SCHEME="indexeddb://";const zr=t=>{return ot().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Pr.URL_SCHEME)?(e=t.slice(Pr.URL_SCHEME.length),new Pr(e)):null;var e};$r.registerSaveRouter(zr),$r.registerLoadRouter(zr);class Ur{constructor(){this.indexedDB=Lr()}async listModels(){return new Promise(((t,e)=>{const n=this.indexedDB.open("tensorflowjs",1);n.onupgradeneeded=()=>Br(n),n.onsuccess=()=>{const r=n.result,a=r.transaction("model_info_store","readonly"),s=a.objectStore("model_info_store").getAll();s.onsuccess=()=>{const e={};for(const t of s.result)e[t.modelPath]=t.modelArtifactsInfo;t(e)},s.onerror=t=>(r.close(),e(s.error)),a.oncomplete=()=>r.close()},n.onerror=t=>e(n.error)}))}async removeModel(t){var e;return t=(e=t).startsWith(Pr.URL_SCHEME)?e.slice(Pr.URL_SCHEME.length):e,new Promise(((e,n)=>{const r=this.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=()=>Br(r),r.onsuccess=()=>{const a=r.result,s=a.transaction("model_info_store","readwrite"),o=s.objectStore("model_info_store"),i=o.get(t);let u;i.onsuccess=()=>{if(null==i.result)return a.close(),n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const r=o.delete(t),s=()=>{u=a.transaction("models_store","readwrite");const r=u.objectStore("models_store").delete(t);r.onsuccess=()=>e(i.result.modelArtifactsInfo),r.onerror=t=>n(i.error)};r.onsuccess=s,r.onerror=t=>(s(),a.close(),n(i.error))}},i.onerror=t=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}},r.onerror=t=>n(r.error)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vr="tensorflowjs_models",jr="info",Hr="model_topology",Kr="weight_specs",qr="weight_data",Wr="model_metadata";function Gr(t){return{info:[Vr,t,jr].join("/"),topology:[Vr,t,Hr].join("/"),weightSpecs:[Vr,t,Kr].join("/"),weightData:[Vr,t,qr].join("/"),modelMetadata:[Vr,t,Wr].join("/")}}function Yr(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function Xr(t){const e=t.split("/");if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join("/")}class Jr{constructor(t){if(!ot().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Gr(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),r=Ir(t);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Nr(t.weightData));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:null!=t.signature?t.signature:void 0,userDefinedMetadata:null!=t.userDefinedMetadata?t.userDefinedMetadata:void 0,modelInitializer:null!=t.modelInitializer?t.modelInitializer:void 0,trainingConfig:null!=t.trainingConfig?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(t){throw Yr(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(null==t)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){const t=JSON.parse(a);e.format=t.format,e.generatedBy=t.generatedBy,e.convertedBy=t.convertedBy,null!=t.signature&&(e.signature=t.signature),null!=t.userDefinedMetadata&&(e.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(e.modelInitializer=t.modelInitializer),null!=t.trainingConfig&&(e.trainingConfig=t.trainingConfig)}const s=this.LS.getItem(this.keys.weightData);if(null==s)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=Tr(s),e}}Jr.URL_SCHEME="localstorage://";const Zr=t=>{return ot().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Jr.URL_SCHEME)?(e=t.slice(Jr.URL_SCHEME.length),new Jr(e)):null;var e};$r.registerSaveRouter(Zr),$r.registerLoadRouter(Zr);class Qr{constructor(){b(ot().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),b("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const t={},e=Vr+"/",n="/"+jr;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(e)&&a.endsWith(n)){t[Xr(a)]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){var e;const n=Gr(t=(e=t).startsWith(Jr.URL_SCHEME)?e.slice(Jr.URL_SCHEME.length):e);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return Yr(n),r}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ta{constructor(){this.managers={}}static getInstance(){return null==ta.instance&&(ta.instance=new ta),ta.instance}static registerManager(t,e){b(null!=t,(()=>"scheme must not be undefined or null.")),t.endsWith("://")&&(t=t.slice(0,t.indexOf("://"))),b(t.length>0,(()=>"scheme must not be an empty string."));const n=ta.getInstance();b(null==n.managers[t],(()=>`A model store manager is already registered for scheme '${t}'.`)),n.managers[t]=e}static getManager(t){const e=ta.getInstance().managers[t];if(null==e)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(ta.getInstance().managers)}}function ea(t){if(-1===t.indexOf("://"))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ta.getSchemes().join(",")}`);return{scheme:t.split("://")[0],path:t.split("://")[1]}}async function na(t,e,n=!1){b(t!==e,(()=>`Old path and new path are the same: '${t}'`));const r=$r.getLoadHandlers(t);b(r.length>0,(()=>`Copying failed because no load handler is found for source URL ${t}.`)),b(r.length<2,(()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`));const a=r[0],s=$r.getSaveHandlers(e);b(s.length>0,(()=>`Copying failed because no save handler is found for destination URL ${e}.`)),b(s.length<2,(()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`));const o=s[0],i=ea(t).scheme,u=ea(t).path,l=i===ea(t).scheme,c=await a.load();n&&l&&await ta.getManager(i).removeModel(u);const p=await o.save(c);return n&&!l&&await ta.getManager(i).removeModel(u),p.modelArtifactsInfo}async function ra(){const t=ta.getSchemes(),e={};for(const n of t){const t=await ta.getManager(n).listModels();for(const r in t){e[n+"://"+r]=t[r]}}return e}async function aa(t){const e=ea(t);return ta.getManager(e.scheme).removeModel(e.path)}async function sa(t,e){return na(t,e,!1)}async function oa(t,e){return na(t,e,!0)}class ia{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){window&&ot().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(t),setTimeout((()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")}),e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",(t=>{if(t.source===window&&t.data.name===this.messageName){t.stopPropagation();(0,this.functionRefs[t.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}}),!0))):setTimeout(t,e)}}if(ot().get("IS_BROWSER")){ot().setPlatform("browser",new ia);try{ta.registerManager(Jr.URL_SCHEME,new Qr)}catch(t){}try{ta.registerManager(Pr.URL_SCHEME,new Ur)}catch(t){}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ua=()=>s("kjyEk");let la;
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ca(t,e="float32",n){return e=e||"float32",tt(t),new Fe(t,e,n)}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ot().get("IS_NODE")&&!ot().get("IS_BROWSER")&&ot().setPlatform("node",new class{constructor(){this.util=s("kjyEk"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return null!=ot().global.fetch?ot().global.fetch(t,e):(null==la&&(la=ua()),la(t,e))}now(){const t=ct.hrtime();return 1e3*t[0]+t[1]/1e6}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)}});const pa=mn({cast_:function(t,e){const n=dn(t,"x","cast");if(!L(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},a={dtype:e};return on.runKernel("Cast",r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ha=mn({clone_:function(t){const e={x:dn(t,"x","clone","string_or_numeric")};return on.runKernel("Identity",e)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function da(t,e=!1){console.log(t.toString(e))}sn();Le={buffer:ca,cast:pa,clone:ha,print:da};const fa=mn({add_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=dn(t,"a","add"),r=dn(e,"b","add");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("Add",a)}});var ma={};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ga(t,e,n){if(v(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");const r=cn(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return yn(t,e,r,n)}let ya;function ba(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,a=!1,s=!1,o=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)a=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)s=!0;else if(null!=t.getContext)o=!0;else{if(!("undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);i=!0}if(null!=It("FromPixels",on.backendName)){const n={pixels:t},r={numChannels:e};return on.runKernel("FromPixels",n,r)}const[u,l]=a?[t.videoWidth,t.videoHeight]:[t.width,t.height];let c,p;if(o)c=t.getContext("2d").getImageData(0,0,u,l).data;else if(r||n)c=t.data;else if(s||a||i){if(null==ya)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");ya=new OffscreenCanvas(1,1).getContext("2d")}else ya=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});ya.canvas.width=u,ya.canvas.height=l,ya.drawImage(t,0,0,u,l),c=ya.getImageData(0,0,u,l).data}if(4===e)p=new Int32Array(c);else{const t=u*l;p=new Int32Array(t*e);for(let n=0;n<t;n++)for(let t=0;t<e;++t)p[n*e+t]=c[4*n+t]}return ga(p,[l,u,e],"int32")}function wa(t){return"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(t instanceof ImageBitmap)&&function(t){return null!=t&&0!==t.width&&0!==t.height}(t)&&!function(t){return null!=t&&t.data instanceof Uint8Array}(t)}async function va(t,e=3){let n=null;if(ot().getBool("WRAP_TO_IMAGEBITMAP")&&wa(t)){let e;try{e=await createImageBitmap(t,{premultiplyAlpha:"none"})}catch(t){e=null}n=null!=e&&e.width===t.width&&e.height===t.height?e:t}else n=t;return ba(n,e)}async function xa(t,e){let n=dn(t,"img","toPixels");if(!(t instanceof Pe)){const t=n;n=pa(t,"int32"),t.dispose()}if(2!==n.rank&&3!==n.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,a]=n.shape.slice(0,2),s=2===n.rank?1:n.shape[2];if(s>4||2===s)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if("float32"!==n.dtype&&"int32"!==n.dtype)throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const o=await n.data(),i="float32"===n.dtype?255:1,u=new Uint8ClampedArray(a*r*4);for(let t=0;t<r*a;++t){const e=[0,0,0,255];for(let r=0;r<s;r++){const a=o[t*s+r];if("float32"===n.dtype){if(a<0||a>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${a}.`)}else if("int32"===n.dtype&&(a<0||a>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${a}.`);1===s?(e[0]=a*i,e[1]=a*i,e[2]=a*i):e[r]=a*i}const r=4*t;u[r+0]=Math.round(e[0]),u[r+1]=Math.round(e[1]),u[r+2]=Math.round(e[2]),u[r+3]=Math.round(e[3])}if(null!=e){e.width=a,e.height=r;const t=e.getContext("2d"),n=new ImageData(u,a,r);t.putImageData(n,0,0)}return n!==t&&n.dispose(),u}t(ma,"fromPixelsAsync",(()=>va)),t(ma,"toPixels",(()=>xa)),t(ma,"fromPixels",(()=>Na));const Na=mn({fromPixels_:ba});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ta(t,e,n){const r={shape:t,value:e,dtype:n};return on.runKernel("Fill",{},r)}const ka=mn({clipByValue_:function(t,e,n){const r=dn(t,"x","clipByValue");if(b(e<=n,(()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`)),e===n)return Ta(r.shape,e,r.dtype);const a={x:r},s={clipValueMin:e,clipValueMax:n};return on.runKernel("ClipByValue",a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ea=mn({concat_:function(t,e=0){b(t.length>=1,(()=>"Pass at least one tensor to concat"));const n=fn(t,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach((t=>{if("complex64"!==t.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `)})),1===n.length)return ha(n[0]);const r=n,a={axis:e};return on.runKernel("Concat",r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sa(t,e){return on.tidy(t,e)}function _a(t){tn(t).forEach((t=>t.dispose()))}function Aa(t){return on.keep(t)}Be=function(t){ot().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")};const Ia=mn({floorDiv_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){let n=dn(t,"a","floorDiv"),r=dn(e,"b","floorDiv");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("FloorDiv",a)}});const Ma=mn({div_:function(t,e){let n=dn(t,"a","div"),r=dn(e,"b","div");if([n,r]=Qe(n,r),"int32"===n.dtype&&"int32"===r.dtype)return Ia(n,r);const a={a:n,b:r};return on.runKernel("RealDiv",a,{})}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oa=mn({exp_:function(t){const e={x:dn(t,"x","exp")};return on.runKernel("Exp",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $a=mn({expandDims_:function(t,e=0){const n=dn(t,"x","expandDims","string_or_numeric");b(e<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:n},a={dim:e};return on.runKernel("ExpandDims",r,a)}});var Da={};t(Da,"spectral",(()=>Ql)),t(Da,"signal",(()=>tc)),t(Da,"image",(()=>ec)),t(Da,"linalg",(()=>nc)),t(Da,"losses",(()=>rc)),t(Da,"sparse",(()=>ac)),t(Da,"string",(()=>sc)),t(Da,"abs",(()=>Ca)),t(Da,"acos",(()=>Fa)),t(Da,"acosh",(()=>Ra)),t(Da,"add",(()=>fa)),t(Da,"addN",(()=>La)),t(Da,"all",(()=>Ba)),t(Da,"any",(()=>Pa)),t(Da,"argMax",(()=>za)),t(Da,"argMin",(()=>Ua)),t(Da,"asin",(()=>Va)),t(Da,"asinh",(()=>ja)),t(Da,"atan",(()=>Ha)),t(Da,"atan2",(()=>Ka)),t(Da,"atanh",(()=>qa)),t(Da,"avgPool",(()=>ns)),t(Da,"avgPool3d",(()=>rs)),t(Da,"basicLSTMCell",(()=>ls)),t(Da,"batchToSpaceND",(()=>cs)),t(Da,"batchNorm",(()=>hs)),t(Da,"batchNorm2d",(()=>ds)),t(Da,"batchNorm3d",(()=>fs)),t(Da,"batchNorm4d",(()=>ms)),t(Da,"bincount",(()=>gs)),t(Da,"broadcastArgs",(()=>ys)),t(Da,"broadcastTo",(()=>bs)),t(Da,"buffer",(()=>ca)),t(Da,"cast",(()=>pa)),t(Da,"ceil",(()=>ws)),t(Da,"clipByValue",(()=>ka)),t(Da,"clone",(()=>ha)),t(Da,"complex",(()=>gn)),t(Da,"concat",(()=>Ea)),t(Da,"concat1d",(()=>vs)),t(Da,"concat2d",(()=>xs)),t(Da,"concat3d",(()=>Ns)),t(Da,"concat4d",(()=>Ts)),t(Da,"conv1d",(()=>Es)),t(Da,"conv2d",(()=>ks)),t(Da,"conv2dTranspose",(()=>_s)),t(Da,"conv3d",(()=>As)),t(Da,"conv3dTranspose",(()=>Ms)),t(Da,"cos",(()=>Os)),t(Da,"cosh",(()=>$s)),t(Da,"cumprod",(()=>Ds)),t(Da,"cumsum",(()=>Cs)),t(Da,"denseBincount",(()=>Fs)),t(Da,"depthToSpace",(()=>Rs)),t(Da,"depthwiseConv2d",(()=>Ls)),t(Da,"diag",(()=>Bs)),t(Da,"dilation2d",(()=>Ps)),t(Da,"div",(()=>Ma)),t(Da,"divNoNan",(()=>Hs)),t(Da,"dot",(()=>Ks)),t(Da,"einsum",(()=>qs)),t(Da,"elu",(()=>Ws)),t(Da,"equal",(()=>Us)),t(Da,"erf",(()=>Gs)),t(Da,"euclideanNorm",(()=>oo)),t(Da,"exp",(()=>Oa)),t(Da,"expandDims",(()=>$a)),t(Da,"expm1",(()=>io)),t(Da,"eye",(()=>lo)),t(Da,"fill",(()=>Ta)),t(Da,"floor",(()=>co)),t(Da,"floorDiv",(()=>Ia)),t(Da,"gather",(()=>po)),t(Da,"greater",(()=>ho)),t(Da,"greaterEqual",(()=>fo)),t(Da,"imag",(()=>mo)),t(Da,"isFinite",(()=>go)),t(Da,"isInf",(()=>yo)),t(Da,"isNaN",(()=>bo)),t(Da,"leakyRelu",(()=>wo)),t(Da,"less",(()=>vo)),t(Da,"lessEqual",(()=>xo)),t(Da,"linspace",(()=>No)),t(Da,"localResponseNormalization",(()=>To)),t(Da,"log",(()=>ko)),t(Da,"log1p",(()=>Eo)),t(Da,"logSigmoid",(()=>Io)),t(Da,"logSoftmax",(()=>Oo)),t(Da,"logSumExp",(()=>$o)),t(Da,"logicalAnd",(()=>Do)),t(Da,"logicalNot",(()=>Co)),t(Da,"logicalOr",(()=>Fo)),t(Da,"logicalXor",(()=>Ro)),t(Da,"lowerBound",(()=>Po)),t(Da,"matMul",(()=>as)),t(Da,"max",(()=>Js)),t(Da,"maxPool",(()=>zo)),t(Da,"maxPool3d",(()=>Uo)),t(Da,"maxPoolWithArgmax",(()=>Vo)),t(Da,"maximum",(()=>jo)),t(Da,"mean",(()=>Ho)),t(Da,"meshgrid",(()=>Wo)),t(Da,"min",(()=>Zs)),t(Da,"minimum",(()=>Go)),t(Da,"mirrorPad",(()=>Yo)),t(Da,"mod",(()=>Xo)),t(Da,"moments",(()=>Jo)),t(Da,"mul",(()=>ss)),t(Da,"multiRNNCell",(()=>Zo)),t(Da,"multinomial",(()=>Qo)),t(Da,"neg",(()=>_o)),t(Da,"notEqual",(()=>ti)),t(Da,"oneHot",(()=>ei)),t(Da,"ones",(()=>qo)),t(Da,"onesLike",(()=>ni)),t(Da,"outerProduct",(()=>ri)),t(Da,"pad",(()=>ai)),t(Da,"pad1d",(()=>si)),t(Da,"pad2d",(()=>oi)),t(Da,"pad3d",(()=>ii)),t(Da,"pad4d",(()=>ui)),t(Da,"pool",(()=>ci)),t(Da,"pow",(()=>Qs)),t(Da,"prelu",(()=>pi)),t(Da,"print",(()=>da)),t(Da,"prod",(()=>hi)),t(Da,"raggedGather",(()=>di)),t(Da,"raggedTensorToTensor",(()=>fi)),t(Da,"rand",(()=>mi)),t(Da,"randomGamma",(()=>_i)),t(Da,"randomNormal",(()=>Ai)),t(Da,"randomStandardNormal",(()=>Ii)),t(Da,"randomUniform",(()=>Mi)),t(Da,"range",(()=>Oi)),t(Da,"real",(()=>$i)),t(Da,"reciprocal",(()=>Di)),t(Da,"relu",(()=>Ci)),t(Da,"relu6",(()=>Fi)),t(Da,"reshape",(()=>es)),t(Da,"reverse",(()=>Ri)),t(Da,"reverse1d",(()=>Li)),t(Da,"reverse2d",(()=>Bi)),t(Da,"reverse3d",(()=>Pi)),t(Da,"reverse4d",(()=>zi)),t(Da,"round",(()=>Ui)),t(Da,"rsqrt",(()=>Vi)),t(Da,"scalar",(()=>to)),t(Da,"selu",(()=>ji)),t(Da,"separableConv2d",(()=>Hi)),t(Da,"setdiff1dAsync",(()=>Ki)),t(Da,"sigmoid",(()=>os)),t(Da,"sign",(()=>qi)),t(Da,"sin",(()=>Wi)),t(Da,"sinh",(()=>Gi)),t(Da,"slice",(()=>is)),t(Da,"slice1d",(()=>Yi)),t(Da,"slice2d",(()=>Xi)),t(Da,"slice3d",(()=>Ji)),t(Da,"slice4d",(()=>Zi)),t(Da,"softmax",(()=>Qi)),t(Da,"softplus",(()=>Ao)),t(Da,"spaceToBatchND",(()=>li)),t(Da,"fft",(()=>tu)),t(Da,"ifft",(()=>eu)),t(Da,"irfft",(()=>nu)),t(Da,"rfft",(()=>au)),t(Da,"split",(()=>ru)),t(Da,"sqrt",(()=>eo)),t(Da,"square",(()=>no)),t(Da,"squaredDifference",(()=>su)),t(Da,"squeeze",(()=>ou)),t(Da,"stack",(()=>iu)),t(Da,"step",(()=>uu)),t(Da,"stridedSlice",(()=>lu)),t(Da,"sub",(()=>Mo)),t(Da,"sum",(()=>ro)),t(Da,"tan",(()=>cu)),t(Da,"tanh",(()=>us)),t(Da,"tensor",(()=>bn)),t(Da,"tensor1d",(()=>pu)),t(Da,"tensor2d",(()=>hu)),t(Da,"tensor3d",(()=>ga)),t(Da,"tensor4d",(()=>du)),t(Da,"tensor5d",(()=>fu)),t(Da,"tensor6d",(()=>mu)),t(Da,"tile",(()=>uo)),t(Da,"topk",(()=>gu)),t(Da,"truncatedNormal",(()=>yu)),t(Da,"unique",(()=>bu)),t(Da,"unsortedSegmentSum",(()=>wu)),t(Da,"unstack",(()=>vu)),t(Da,"upperBound",(()=>xu)),t(Da,"variable",(()=>Nu)),t(Da,"where",(()=>Vs)),t(Da,"whereAsync",(()=>ku)),t(Da,"zeros",(()=>Ko)),t(Da,"zerosLike",(()=>js)),t(Da,"op",(()=>mn)),t(Da,"OP_SCOPE_SUFFIX",(()=>"__op")),t(Da,"fused",(()=>qu));const Ca=mn({abs_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=dn(t,"x","abs");if("complex64"===e.dtype){const t={x:e};return on.runKernel("ComplexAbs",t)}{const t={x:e};return on.runKernel("Abs",t)}}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fa=mn({acos_:function(t){const e={x:dn(t,"x","acos")};return on.runKernel("Acos",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ra=mn({acosh_:function(t){const e={x:dn(t,"x","acosh")};return on.runKernel("Acosh",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const La=mn({addN_:function(t){b(Array.isArray(t),(()=>"The argument passed to tf.addN() must be a list of tensors")),b(t.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`));const e=t.map(((t,e)=>dn(t,`tensors${e}`,"addN"))),n=e[0];e.forEach((t=>{if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),e.forEach((t=>{if(!k(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const r=e;return on.runKernel("AddN",r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ba=mn({all_:function(t,e=null,n=!1){const r={x:dn(t,"x","all","bool")},a={axis:e,keepDims:n};return on.runKernel("All",r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pa=mn({any_:function(t,e=null,n=!1){const r={x:dn(t,"x","any","bool")},a={axis:e,keepDims:n};return on.runKernel("Any",r,a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const za=mn({argMax_:function(t,e=0){const n={x:dn(t,"x","argMax")},r={axis:e};return on.runKernel("ArgMax",n,r)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ua=mn({argMin_:function(t,e=0){const n={x:dn(t,"x","argMin")},r={axis:e};return on.runKernel("ArgMin",n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Va=mn({asin_:function(t){const e={x:dn(t,"x","asin")};return on.runKernel("Asin",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ja=mn({asinh_:function(t){const e={x:dn(t,"x","asinh")};return on.runKernel("Asinh",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ha=mn({atan_:function(t){const e={x:dn(t,"x","atan")};return on.runKernel("Atan",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ka=mn({atan2_:function(t,e){let n=dn(t,"a","atan2"),r=dn(e,"b","atan2");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("Atan2",a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qa=mn({atanh_:function(t){const e={x:dn(t,"x","atanh")};return on.runKernel("Atanh",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wa(t,e,n,r,a,s,o=!1,i="channelsLast"){let[u,l,c,p]=[-1,-1,-1,-1];if("channelsLast"===i)[u,l,c,p]=t;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[u,p,l,c]=t}const[h,d,,f]=e,[m,g]=Ya(n),[y,b]=Ya(r),w=Xa(h,y),v=Xa(d,b),{padInfo:x,outHeight:N,outWidth:T}=function(t,e,n,r,a,s,o,i,u){let l,c,p;if("number"==typeof t){l={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};const a=function(t,e,n,r,a){null==r&&(r=Ga(t,e,n));const s=t[0],o=t[1],i=Ja((s-e+2*r)/n+1,a),u=Ja((o-e+2*r)/n+1,a);return[i,u]}([e,n],s,r,t,i);c=a[0],p=a[1]}else if("same"===t){c=Math.ceil(e/r),p=Math.ceil(n/a);const t=Math.max(0,(c-1)*r+s-e),i=Math.max(0,(p-1)*a+o-n),u=Math.floor(t/2),h=t-u,d=Math.floor(i/2);l={top:u,bottom:h,left:d,right:i-d,type:"SAME"}}else if("valid"===t)l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-s+1)/r),p=Math.ceil((n-o+1)/a);else{if("object"!=typeof t)throw Error(`Unknown padding parameter: ${t}`);{const h="channelsLast"===u?t[1][0]:t[2][0],d="channelsLast"===u?t[1][1]:t[2][1],f="channelsLast"===u?t[2][0]:t[3][0],m="channelsLast"===u?t[2][1]:t[3][1];l={top:h,bottom:d,left:f,right:m,type:0===h&&0===d&&0===f&&0===m?"VALID":"EXPLICIT"},c=Ja((e-s+h+d)/r+1,i),p=Ja((n-o+f+m)/a+1,i)}}return{padInfo:l,outHeight:c,outWidth:p}}(a,l,c,m,g,w,v,s,i),k=o?f*p:f;let E;return"channelsFirst"===i?E=[u,k,N,T]:"channelsLast"===i&&(E=[u,N,T,k]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:c,inChannels:p,outHeight:N,outWidth:T,outChannels:k,padInfo:x,strideHeight:m,strideWidth:g,filterHeight:h,filterWidth:d,effectiveFilterHeight:w,effectiveFilterWidth:v,dilationHeight:y,dilationWidth:b,inShape:t,outShape:E,filterShape:e}}function Ga(t,e,n,r=1){const a=Xa(e,r);return Math.floor((t[0]*(n-1)-n+a)/2)}function Ya(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function Xa(t,e){return e<=1?t:t+(t-1)*(e-1)}function Ja(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Za(t){const[e,n,r]=Ya(t);return 1===e&&1===n&&1===r}function Qa(t,e){return Za(t)||Za(e)}function ts(t,e,n){if(null!=n){if("string"==typeof e)throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if("number"==typeof e)b(E(e),(()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`));else{if("object"!=typeof e)throw Error(`Error in ${t}: Unknown padding parameter: ${e}`);e.forEach((e=>{e.forEach((e=>{b(E(e),(()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`))}))}))}}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const es=mn({reshape_:function(t,e){const n={x:dn(t,"x","reshape","string_or_numeric")},r={shape:e};return on.runKernel("Reshape",n,r)}});const ns=mn({avgPool_:function(t,e,n,r,a){const s=dn(t,"x","avgPool","float32");b(Qa(n,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`));let o=s,i=!1;3===s.rank&&(i=!0,o=es(s,[1,s.shape[0],s.shape[1],s.shape[2]])),b(4===o.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`)),ts("avgPool",r,a);const u={x:o},l={filterSize:e,strides:n,pad:r,dimRoundingMode:a};let c=on.runKernel("AvgPool",u,l);return c=pa(c,s.dtype),i?es(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rs=mn({avgPool3d_:function(t,e,n,r,a,s="NDHWC"){const o=dn(t,"x","avgPool3d","float32");let i=o,u=!1;4===o.rank&&(u=!0,i=es(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),b(5===i.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`)),b("NDHWC"===s,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`)),ts("avgPool3d",r,a);const l={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:a,dataFormat:s};let p=on.runKernel("AvgPool3D",l,c);return p=pa(p,i.dtype),u?es(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const as=mn({matMul_:function(t,e,n=!1,r=!1){let a=dn(t,"a","matMul"),s=dn(e,"b","matMul");[a,s]=Qe(a,s);const o={a:a,b:s},i={transposeA:n,transposeB:r};return on.runKernel("BatchMatMul",o,i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ss=mn({mul_:function(t,e){let n=dn(t,"a","mul"),r=dn(e,"b","mul");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("Multiply",a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const os=mn({sigmoid_:function(t){const e={x:dn(t,"x","sigmoid","float32")};return on.runKernel("Sigmoid",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const is=mn({slice_:function(t,e,n){const r=dn(t,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const a={x:r},s={begin:e,size:n};return on.runKernel("Slice",a,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const us=mn({tanh_:function(t){const e={x:dn(t,"x","tanh","float32")};return on.runKernel("Tanh",e)}});const ls=mn({basicLSTMCell_:function(t,e,n,r,a,s){const o=dn(t,"forgetBias","basicLSTMCell"),i=dn(e,"lstmKernel","basicLSTMCell"),u=dn(n,"lstmBias","basicLSTMCell"),l=dn(r,"data","basicLSTMCell"),c=dn(a,"c","basicLSTMCell"),p=dn(s,"h","basicLSTMCell"),h=Ea([l,p],1),d=as(h,i),f=fa(d,u),m=f.shape[0],g=f.shape[1]/4,y=[m,g],b=is(f,[0,0],y),w=is(f,[0,g],y),v=is(f,[0,2*g],y),x=is(f,[0,3*g],y),N=fa(ss(os(b),us(w)),ss(c,os(fa(o,v))));return[N,ss(us(N),os(x))]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cs=mn({batchToSpaceND_:function(t,e,n){const r=dn(t,"x","batchToSpaceND"),a=e.reduce(((t,e)=>t*e));b(r.rank>=1+e.length,(()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`)),b(n.length===e.length,(()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`)),b(r.shape[0]%a==0,(()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${a}`));const s={x:r},o={blockShape:e,crops:n};return on.runKernel("BatchToSpaceND",s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ps(t){let e;return e=0===t.rank||1===t.rank?es(t,[1,1,1,t.size]):2===t.rank?es(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?es(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t,e}const hs=mn({batchNorm_:function(t,e,n,r,a,s){null==s&&(s=.001);const o=dn(t,"x","batchNorm"),i=dn(e,"mean","batchNorm"),u=dn(n,"variance","batchNorm");let l,c;null!=a&&(l=dn(a,"scale","batchNorm")),null!=r&&(c=dn(r,"offset","batchNorm")),b(i.rank===u.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),b(null==c||i.rank===c.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),b(null==l||i.rank===l.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const p={x:ps(o),scale:l,offset:c,mean:i,variance:u},h={varianceEpsilon:s},d=on.runKernel("FusedBatchNorm",p,h);return es(d,o.shape)}});const ds=mn({batchNorm2d_:function(t,e,n,r,a,s){const o=dn(t,"x","batchNorm"),i=dn(e,"mean","batchNorm"),u=dn(n,"variance","batchNorm");let l,c;return null!=a&&(l=dn(a,"scale","batchNorm")),null!=r&&(c=dn(r,"offset","batchNorm")),b(2===o.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`)),b(2===i.rank||1===i.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`)),b(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`)),null!=l&&b(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`)),null!=c&&b(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`)),hs(o,i,u,c,l,s)}});const fs=mn({batchNorm3d_:function(t,e,n,r,a,s){const o=dn(t,"x","batchNorm"),i=dn(e,"mean","batchNorm"),u=dn(n,"variance","batchNorm");let l,c;return null!=a&&(l=dn(a,"scale","batchNorm")),null!=r&&(c=dn(r,"offset","batchNorm")),b(3===o.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`)),b(3===i.rank||1===i.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`)),b(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`)),null!=l&&b(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`)),null!=c&&b(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`)),hs(o,i,u,c,l,s)}});const ms=mn({batchNorm4d_:function(t,e,n,r,a,s){const o=dn(t,"x","batchNorm"),i=dn(e,"mean","batchNorm"),u=dn(n,"variance","batchNorm");let l,c;return null!=a&&(l=dn(a,"scale","batchNorm")),null!=r&&(c=dn(r,"offset","batchNorm")),b(4===o.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`)),b(4===i.rank||1===i.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`)),b(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`)),null!=l&&b(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`)),null!=c&&b(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`)),hs(o,i,u,c,l,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gs=mn({bincount_:function(t,e,n){const r=dn(t,"x","bincount"),a=dn(e,"weights","bincount");b("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),b(n>=0,(()=>`size must be non-negative, but got ${n}.`)),b(a.size===r.size||0===a.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`));const s={x:r,weights:a},o={size:n};return on.runKernel("Bincount",s,o)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys=mn({broadcastArgs_:function(t,e){const n=dn(t,"s0","broadcastArgs","int32"),r=dn(e,"s1","broadcastArgs","int32");if(1!==n.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(1!==r.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const a={s0:n,s1:r};return on.runKernel("BroadcastArgs",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bs=mn({broadcastTo_:function(t,e){let n=dn(t,"broadcastTo","x");const r=n.shape;if(e.some((t=>!(t>0)||t%1!=0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const t=n.shape.slice();for(;t.length<e.length;)t.unshift(1);n=es(n,t)}const a=n.shape,s=Array.from(e);for(let t=e.length-1;t>=0;t--)if(a[t]===e[t])s[t]=1;else if(1!==n.shape[t])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(0===s.map(((t,e)=>t>1?e:-1)).filter((t=>t>=0)).length)return ha(n);const o={x:n},i={reps:s};return on.runKernel("Tile",o,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ws=mn({ceil_:function(t){const e={x:dn(t,"x","ceil","float32")};return on.runKernel("Ceil",e)}});const vs=mn({concat1d_:function(t){return Ea(t,0)}});const xs=mn({concat2d_:function(t,e){return Ea(t,e)}});const Ns=mn({concat3d_:function(t,e){return Ea(t,e)}});const Ts=mn({concat4d_:function(t,e){return Ea(t,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ks=mn({conv2d_:function(t,e,n,r,a="NHWC",s=[1,1],o){const i=dn(t,"x","conv2d","float32"),u=dn(e,"filter","conv2d","float32");let l=i,c=!1;3===i.rank&&(c=!0,l=es(i,[1,i.shape[0],i.shape[1],i.shape[2]])),b(4===l.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`)),b(4===u.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`)),ts("conv2d",r,o);const p="NHWC"===a?l.shape[3]:l.shape[1];b(p===u.shape[2],(()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`)),b(Qa(n,s),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`));const h={x:l,filter:u},d={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},f=on.runKernel("Conv2D",h,d);return c?es(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const Es=mn({conv1d_:function(t,e,n,r,a="NWC",s=1,o){const i=dn(t,"x","conv1d"),u=dn(e,"filter","conv1d");let l=i,c=!1;2===i.rank&&(c=!0,l=es(i,[1,i.shape[0],i.shape[1]])),b(3===l.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`)),b(3===u.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`)),ts("conv1d",r,o),b(l.shape[2]===u.shape[1],(()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`)),b(Qa(n,s),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${s}'`)),b("NWC"===a,(()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`));const p=es(u,[1,u.shape[0],u.shape[1],u.shape[2]]),h=es(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d=ks(h,p,[1,n],r,"NHWC",[1,s],o);return es(d,c?[d.shape[2],d.shape[3]]:[d.shape[0],d.shape[2],d.shape[3]])}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ss=mn({conv2DBackpropInput_:function(t,e,n,r,a,s="NHWC",o){b(t.length===e.rank,(()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`));let i=t,u=e,l=!1;3===e.rank&&(l=!0,u=es(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,t[0],t[1],t[2]]),b(4===i.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`)),b(4===u.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`)),b(4===n.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`));const c="NHWC"===s?i[3]:i[1],p="NHWC"===s?u.shape[3]:u.shape[1];b(c===n.shape[2],(()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`)),b(p===n.shape[3],(()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`)),ts("conv2dDerInput",a,o);const h={dy:u,filter:n},d={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,inputShape:i},f=on.runKernel("Conv2DBackpropInput",h,d);return l?es(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const _s=mn({conv2dTranspose_:function(t,e,n,r,a,s){const o=dn(t,"x","conv2dTranspose"),i=dn(e,"filter","conv2dTranspose");return Ss(n,o,i,r,a,"NHWC",s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const As=mn({conv3d_:function(t,e,n,r,a="NDHWC",s=[1,1,1]){const o=dn(t,"x","conv3d"),i=dn(e,"filter","conv3d");let u=o,l=!1;4===o.rank&&(l=!0,u=es(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),b(5===u.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`)),b(5===i.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`)),b(u.shape[4]===i.shape[3],(()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`)),b(Qa(n,s),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`)),b("NDHWC"===a,(()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`));const c={x:u,filter:i},p={strides:n,pad:r,dataFormat:a,dilations:s},h=on.runKernel("Conv3D",c,p);return l?es(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Is=mn({conv3DBackpropInput_:function(t,e,n,r,a){b(t.length===e.rank,(()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`));let s=t,o=e,i=!1;4===e.rank&&(i=!0,o=es(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,t[0],t[1],t[2],t[3]]);const u=s[4],l=o.shape[4];b(5===s.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`)),b(5===o.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`)),b(5===n.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`)),b(u===n.shape[3],(()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`)),b(l===n.shape[4],(()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`));const c={dy:o,filter:n},p={pad:a,strides:r,inputShape:s},h=on.runKernel("Conv3DBackpropInputV2",c,p);return i?es(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}});const Ms=mn({conv3dTranspose_:function(t,e,n,r,a){const s=dn(t,"x","conv3dTranspose"),o=dn(e,"filter","conv3dTranspose");return Is(n,s,o,r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Os=mn({cos_:function(t){const e={x:dn(t,"x","cos","float32")};return on.runKernel("Cos",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $s=mn({cosh_:function(t){const e={x:dn(t,"x","cosh","float32")};return on.runKernel("Cosh",e)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ds=mn({cumprod_:function(t,e=0,n=!1,r=!1){const a={x:dn(t,"x","cumprod")},s={axis:e,exclusive:n,reverse:r};return on.runKernel("Cumprod",a,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cs=mn({cumsum_:function(t,e=0,n=!1,r=!1){const a={x:dn(t,"x","cumsum")},s={axis:e,exclusive:n,reverse:r};return on.runKernel("Cumsum",a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fs=mn({denseBincount_:function(t,e,n,r=!1){const a=dn(t,"x","denseBincount"),s=dn(e,"weights","denseBincount");b("int32"===a.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`)),b(a.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`)),b(n>=0,(()=>`size must be non-negative, but got ${n}.`)),b(s.size===a.size||0===s.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${s.shape}.`));const o={x:a,weights:s},i={size:n,binaryOutput:r};return on.runKernel("DenseBincount",o,i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rs=mn({depthToSpace_:function(t,e,n="NHWC"){const r=dn(t,"x","depthToSpace","float32"),a="NHWC"===n?r.shape[1]:r.shape[2],s="NHWC"===n?r.shape[2]:r.shape[3],o="NHWC"===n?r.shape[3]:r.shape[1];b(e>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`)),b(a*e>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${a} and ${e}  for depthToSpace with input shape\n    ${r.shape}`)),b(s*e>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${s} and ${e} for depthToSpace with input shape\n        ${r.shape}`)),b(o%(e*e)==0,(()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`));const i={x:r},u={blockSize:e,dataFormat:n};return on.runKernel("DepthToSpace",i,u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ls=mn({depthwiseConv2d_:function(t,e,n,r,a="NHWC",s=[1,1],o){const i=dn(t,"x","depthwiseConv2d","float32"),u=dn(e,"filter","depthwiseConv2d","float32");let l=i,c=!1;3===i.rank&&(c=!0,l=es(i,[1,i.shape[0],i.shape[1],i.shape[2]])),b(4===l.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`)),b(4===u.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`));const p="NHWC"===a?l.shape[3]:l.shape[1];b(p===u.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`)),ts("depthwiseConv2d",r,o);const h={x:l,filter:u},d={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},f=on.runKernel("DepthwiseConv2dNative",h,d);return c?es(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bs=mn({diag_:function(t){const e={x:dn(t,"x","diag")};return on.runKernel("Diag",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ps=mn({dilation2d_:function(t,e,n,r,a=[1,1],s="NHWC"){const o=dn(t,"x","dilation2d"),i=dn(e,"filter","dilation2d");b(3===o.rank||4===o.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`)),b(3===i.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`)),b("NHWC"===s,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`));let u=o,l=!1;3===o.rank&&(u=es(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);const c={x:u,filter:i},p={strides:n,pad:r,dilations:a},h=on.runKernel("Dilation2D",c,p);return l?es(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zs(t,e){const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++){let r=t[t.length-a-1];null==r&&(r=1);let s=e[e.length-a-1];if(null==s&&(s=1),1===r)n.unshift(s);else if(1===s)n.unshift(r);else{if(r!==s){throw Error(`Operands could not be broadcast together with shapes ${t} and ${e}.`)}n.unshift(r)}}return n}const Us=mn({equal_:function(t,e){let n=dn(t,"a","equal","string_or_numeric"),r=dn(e,"b","equal","string_or_numeric");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("Equal",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vs=mn({where_:function(t,e,n){const r=dn(e,"a","where"),a=dn(n,"b","where"),s=dn(t,"condition","where","bool"),o=zs(zs(s.shape,r.shape),a.shape),i={condition:bs(s,o),t:bs(r,o),e:bs(a,o)};return on.runKernel("Select",i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const js=mn({zerosLike_:function(t){const e={x:dn(t,"x","zerosLike")};return on.runKernel("ZerosLike",e)}});const Hs=mn({divNoNan_:function(t,e){let n=dn(t,"a","div"),r=dn(e,"b","div");[n,r]=Qe(n,r);const a=Ma(n,r),s=js(a),o=Us(r,s);return Vs(o,s,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ks=mn({dot_:function(t,e){const n=dn(t,"t1","dot"),r=dn(e,"t2","dot");b(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`));const a=1===n.rank?n.size:n.shape[1],s=1===r.rank?r.size:r.shape[0];if(b(a===s,(()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`)),1===n.rank&&1===r.rank){const t=es(n,[1,-1]),e=es(r,[-1,1]),a=as(t,e);return es(a,[])}if(1===n.rank&&2===r.rank){const t=es(n,[1,-1]),e=es(r,[r.shape[0],r.shape[1]]),a=as(t,e);return es(a,[a.size])}if(2===n.rank&&1===r.rank){const t=es(r,[-1,1]),e=as(n,t);return es(e,[e.size])}{const t=es(r,[r.shape[0],r.shape[1]]);return as(n,t)}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qs=mn({einsum_:function(t,...e){const n=e.map(((t,e)=>dn(t,`tensors${e}`,"einsum"))),r={equation:t};return on.runKernel("Einsum",n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ws=mn({elu_:function(t){const e={x:dn(t,"x","elu","float32")};return on.runKernel("Elu",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gs=mn({erf_:function(t){let e=dn(t,"x","erf");b("int32"===e.dtype||"float32"===e.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===e.dtype&&(e=pa(e,"float32"));const n={x:e};return on.runKernel("Erf",n)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ys={};function Xs(t,e){return function(t,e,n){const r=t.length+e.length,a=[];let s=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(t[s++]):a.push(e[o++]);return a}(t,e.map((t=>1)),e)}t(Ys,"norm",(()=>so));const Js=mn({max_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e=null,n=!1){const r={x:dn(t,"x","max")},a={reductionIndices:e,keepDims:n};return on.runKernel("Max",r,a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zs=mn({min_:function(t,e=null,n=!1){const r={x:dn(t,"x","min")},a={axis:e,keepDims:n};return on.runKernel("Min",r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qs=mn({pow_:function(t,e){let n=dn(t,"base","pow"),r=dn(e,"exp","pow");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("Pow",a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(t,e){if((P(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&P(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return yn(t,[],[],e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eo=mn({sqrt_:function(t){const e={x:dn(t,"x","sqrt","float32")};return on.runKernel("Sqrt",e)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const no=mn({square_:function(t){const e=dn(t,"x","square");return on.runKernel("Square",{x:e},{})}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ro=mn({sum_:function(t,e=null,n=!1){let r=dn(t,"x","sum");"bool"===r.dtype&&(r=pa(r,"int32"));const a={x:r},s={axis:e,keepDims:n};return on.runKernel("Sum",a,s)}});function ao(t,e,n=null){if(0===t.rank)return Ca(t);if(1!==t.rank&&null===n)return ao(es(t,[-1]),e,n);if(1===t.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===e)return ro(Ca(t),n);if(e===1/0)return Js(Ca(t),n);if(e===-1/0)return Zs(Ca(t),n);if("euclidean"===e||2===e)return eo(ro(Qs(Ca(t),to(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&2===n.length){if(1===e)return Js(ro(Ca(t),n[0]),n[1]-1);if(e===1/0)return Js(ro(Ca(t),n[1]),n[0]);if(e===-1/0)return Zs(ro(Ca(t),n[1]),n[0]);if("fro"===e||"euclidean"===e)return eo(ro(no(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const so=mn({norm_:function(t,e="euclidean",n=null,r=!1){const a=ao(t=dn(t,"x","norm"),e,n);let s=a.shape;if(r){const e=$(n,t.shape);s=Xs(a.shape,e)}return es(a,s)}});const oo=mn({euclideanNorm_:function(t,e=null,n=!1){return so(t,"euclidean",e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const io=mn({expm1_:function(t){const e={x:dn(t,"x","expm1")};return on.runKernel("Expm1",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uo=mn({tile_:function(t,e){const n=dn(t,"x","tile","string_or_numeric");b(n.rank===e.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`));const r={x:n},a={reps:e};return on.runKernel("Tile",r,a)}});const lo=mn({eye_:function(t,e,n,r="float32"){null==e&&(e=t);const a=ca([t,e],r),s=t<=e?t:e;for(let t=0;t<s;++t)a.set(1,t,t);const o=es(a.toTensor(),[t,e]);if(null==n)return o;if(1===n.length)return uo($a(o,0),[n[0],1,1]);if(2===n.length)return uo($a($a(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return uo($a($a($a(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const co=mn({floor_:function(t){const e={x:dn(t,"x","floor","float32")};return on.runKernel("Floor",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const po=mn({gather_:function(t,e,n=0,r=0){const a={x:dn(t,"x","gather"),indices:dn(e,"indices","gather","int32")},s={axis:n,batchDims:r};return on.runKernel("GatherV2",a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ho=mn({greater_:function(t,e){let n=dn(t,"a","greater","string_or_numeric"),r=dn(e,"b","greater","string_or_numeric");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("Greater",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fo=mn({greaterEqual_:function(t,e){let n=dn(t,"a","greaterEqual","string_or_numeric"),r=dn(e,"b","greaterEqual","string_or_numeric");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("GreaterEqual",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mo=mn({imag_:function(t){const e={input:dn(t,"input","imag")};return on.runKernel("Imag",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const go=mn({isFinite_:function(t){const e={x:dn(t,"x","isFinite")};return on.runKernel("IsFinite",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yo=mn({isInf_:function(t){const e={x:dn(t,"x","isInf")};return on.runKernel("IsInf",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bo=mn({isNaN_:function(t){const e={x:dn(t,"x","isNaN")};return on.runKernel("IsNan",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wo=mn({leakyRelu_:function(t,e=.2){const n={x:dn(t,"x","leakyRelu")},r={alpha:e};return on.runKernel("LeakyRelu",n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vo=mn({less_:function(t,e){let n=dn(t,"a","less","string_or_numeric"),r=dn(e,"b","less","string_or_numeric");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("Less",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xo=mn({lessEqual_:function(t,e){let n=dn(t,"a","lessEqual","string_or_numeric"),r=dn(e,"b","lessEqual","string_or_numeric");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("LessEqual",a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function No(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return on.runKernel("LinSpace",{},r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const To=mn({localResponseNormalization_:function(t,e=5,n=1,r=1,a=.5){const s=dn(t,"x","localResponseNormalization");b(4===s.rank||3===s.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${s.rank}.`)),b(E(e),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`));let o=s,i=!1;3===s.rank&&(i=!0,o=es(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const u={x:o},l={depthRadius:e,bias:n,alpha:r,beta:a},c=on.runKernel("LRN",u,l);return i?es(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ko=mn({log_:function(t){const e={x:dn(t,"x","log","float32")};return on.runKernel("Log",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eo=mn({log1p_:function(t){const e={x:dn(t,"x","log1p")};return on.runKernel("Log1p",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function So(t){return on.customGrad(t)}const _o=mn({neg_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e={x:dn(t,"x","neg")};return on.runKernel("Neg",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ao=mn({softplus_:function(t){const e={x:dn(t,"x","softplus")};return on.runKernel("Softplus",e)}});const Io=mn({logSigmoid_:function(t){const e=dn(t,"x","logSigmoid"),n=So((t=>({value:_o(Ao(_o(t))),gradFunc:e=>ss(e,os(_o(t)))})));return n(e)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mo=mn({sub_:function(t,e){let n=dn(t,"a","sub"),r=dn(e,"b","sub");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("Sub",a)}});const Oo=mn({logSoftmax_:function(t,e=-1){const n=dn(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);const r=So(((t,n)=>{const r=Js(t,e,!0),a=Mo(t,r),s=Mo(pa(a,"float32"),ko(ro(Oa(a),e,!0)));n([s]);return{value:s,gradFunc:(t,n)=>{const[r]=n,a=Oa(r);return Mo(t,ss(ro(t,e,!0),a))}}}));return r(n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $o=mn({logSumExp_:function(t,e=null,n=!1){const r=dn(t,"x","logSumExp"),a=$(e,r.shape),s=Js(r,a,!0),o=Mo(r,s),i=Oa(o),u=ro(i,a),l=ko(u),c=fa(es(s,l.shape),l);if(n){const t=Xs(c.shape,a);return es(c,t)}return c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Do=mn({logicalAnd_:function(t,e){const n=dn(t,"a","logicalAnd","bool"),r=dn(e,"b","logicalAnd","bool");zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("LogicalAnd",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Co=mn({logicalNot_:function(t){const e={x:dn(t,"x","logicalNot","bool")};return on.runKernel("LogicalNot",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fo=mn({logicalOr_:function(t,e){const n=dn(t,"a","logicalOr","bool"),r=dn(e,"b","logicalOr","bool");zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("LogicalOr",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ro=mn({logicalXor_:function(t,e){const n=dn(t,"a","logicalXor","bool"),r=dn(e,"b","logicalXor","bool");return zs(n.shape,r.shape),Do(Fo(t,e),Co(Do(t,e)))}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Lo={};t(Lo,"searchSorted",(()=>Bo));const Bo=mn({searchSorted_:function(t,e,n="left"){const r=dn(t,"sortedSequence","searchSorted"),a=dn(e,"values","searchSorted"),s=r.shape[r.shape.length-1],o=a.shape[a.shape.length-1],i=es(r,[-1,s]),u=es(a,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(N(u.shape)>=2147483648)throw new Error("values tensor size must less than 2147483648");if(i.shape[1]>=2147483648)throw new Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:u},c={side:n};return on.runKernel("SearchSorted",l,c)}});function Po(t,e){return Bo(t,e,"left")}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zo=mn({maxPool_:function(t,e,n,r,a){const s=dn(t,"x","maxPool");let o=s,i=!1;3===s.rank&&(i=!0,o=es(s,[1,s.shape[0],s.shape[1],s.shape[2]])),b(4===o.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`)),b(Qa(n,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`)),ts("maxPool",r,a);const u={x:o},l={filterSize:e,strides:n,pad:r,dimRoundingMode:a},c=on.runKernel("MaxPool",u,l);return i?es(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uo=mn({maxPool3d_:function(t,e=[1,1,1],n,r,a,s="NDHWC"){const o=dn(t,"x","maxPool3d");let i=o,u=!1;4===o.rank&&(u=!0,i=es(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),b(5===i.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`)),b("NDHWC"===s,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`)),ts("maxPool3d",r,a);const l={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:a,dataFormat:s},p=on.runKernel("MaxPool3D",l,c);return u?es(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vo=mn({maxPoolWithArgmax_:function(t,e,n,r,a=!1){const s={x:dn(t,"x","maxPoolWithArgmax")},o={filterSize:e,strides:n,pad:r,includeBatchInIndex:a},i=on.runKernel("MaxPoolWithArgmax",s,o);return{result:i[0],indexes:i[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jo=mn({maximum_:function(t,e){let n=dn(t,"a","maximum"),r=dn(e,"b","maximum");[n,r]=Qe(n,r),"bool"===n.dtype&&(n=pa(n,"int32"),r=pa(r,"int32")),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("Maximum",a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ho=mn({mean_:function(t,e=null,n=!1){const r={x:dn(t,"x","mean")},a={axis:e,keepDims:n};return on.runKernel("Mean",r,a)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ko(t,e="float32"){if("complex64"===e){const e=Ko(t,"float32"),n=Ko(t,"float32");return gn(e,n)}const n=Z(N(t),e);return on.makeTensor(n,t,e)}function qo(t,e="float32"){if("complex64"===e){const e=qo(t,"float32"),n=Ko(t,"float32");return gn(e,n)}const n=J(N(t),e);return on.makeTensor(n,t,e)}function Wo(t,e,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(void 0===t)return[];let r=dn(t,"x","meshgrid",t instanceof Pe?t.dtype:"float32");if(void 0===e)return[r];let a=dn(e,"y","meshgrid",e instanceof Pe?e.dtype:"float32");const s=N(r.shape),o=N(a.shape);return"xy"===n?(r=es(r,[1,-1]),a=es(a,[-1,1]),[as(qo([o,1],r.dtype),r),as(a,qo([1,s],a.dtype))]):(r=es(r,[-1,1]),a=es(a,[1,-1]),[as(r,qo([1,o],r.dtype)),as(qo([s,1],a.dtype),a)])}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Go=mn({minimum_:function(t,e){let n=dn(t,"a","minimum"),r=dn(e,"b","minimum");[n,r]=Qe(n,r),"bool"===n.dtype&&(n=pa(n,"int32"),r=pa(r,"int32")),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("Minimum",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yo=mn({mirrorPad_:function(t,e,n){b("reflect"===n||"symmetric"===n,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`));const r=dn(t,"x","mirrorPad");if(0===r.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");b(e.length===r.rank,(()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`));const a="reflect"===n?1:0;for(let t=0;t<r.rank;t++)b(2===e[t].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),b(e[t][0]>=0&&e[t][0]<=r.shape[t]-a&&e[t][1]>=0&&e[t][1]<=r.shape[t]-a,(()=>`Padding in dimension ${t} cannot be greater than or equal to ${r.shape[t]-a} or less than 0 for input of shape ${r.shape}`));const s={paddings:e,mode:n},o={x:r};return on.runKernel("MirrorPad",o,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xo=mn({mod_:function(t,e){let n=dn(t,"a","mod"),r=dn(e,"b","mod");[n,r]=Qe(n,r);const a={a:n,b:r};return on.runKernel("Mod",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jo=mn({moments_:function(t,e=null,n=!1){const r=$(e,(t=dn(t,"x","moments")).shape),a=Ho(t,r,n);let s=a.shape;n||(s=Xs(a.shape,r));const o=no(Mo(pa(t,"float32"),es(a,s)));return{mean:a,variance:Ho(o,r,n)}}});const Zo=mn({multiRNNCell_:function(t,e,n,r){const a=dn(e,"data","multiRNNCell"),s=fn(n,"c","multiRNNCell"),o=fn(r,"h","multiRNNCell");let i=a;const u=[];for(let e=0;e<t.length;e++){const n=t[e](i,s[e],o[e]);u.push(n[0]),u.push(n[1]),i=n[1]}const l=[],c=[];for(let t=0;t<u.length;t+=2)l.push(u[t]),c.push(u[t+1]);return[l,c]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qo=mn({multinomial_:function(t,e,n,r=!1){const a=dn(t,"logits","multinomial"),s=a.size,o=a.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const i={logits:1===o?es(a,[1,-1]):a},u={numSamples:e,seed:n,normalized:r},l=on.runKernel("Multinomial",i,u);return 1===o?es(l,[l.size]):l}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ti=mn({notEqual_:function(t,e){let n=dn(t,"a","notEqual","string_or_numeric"),r=dn(e,"b","notEqual","string_or_numeric");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("NotEqual",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ei=mn({oneHot_:function(t,e,n=1,r=0,a="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const s={indices:dn(t,"indices","oneHot","int32")},o={dtype:a,depth:e,onValue:n,offValue:r};return on.runKernel("OneHot",s,o)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ni=mn({onesLike_:function(t){const e={x:dn(t,"x","onesLike")};return on.runKernel("OnesLike",e)}});const ri=mn({outerProduct_:function(t,e){const n=dn(t,"v1","outerProduct"),r=dn(e,"v2","outerProduct");b(1===n.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`));const a=es(n,[-1,1]),s=es(r,[1,-1]);return as(a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ai=mn({pad_:function(t,e,n=0){const r=dn(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const a={paddings:e,constantValue:n},s={x:r};return on.runKernel("PadV2",s,a)}});const si=mn({pad1d_:function(t,e,n=0){return b(2===e.length,(()=>"Invalid number of paddings. Must be length of 2.")),ai(t,[e],n)}});const oi=mn({pad2d_:function(t,e,n=0){return b(2===e.length&&2===e[0].length&&2===e[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),ai(t,e,n)}});const ii=mn({pad3d_:function(t,e,n=0){return b(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),ai(t,e,n)}});const ui=mn({pad4d_:function(t,e,n=0){return b(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),ai(t,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const li=mn({spaceToBatchND_:function(t,e,n){const r=dn(t,"x","spaceToBatchND");b(r.rank>=1+e.length,(()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`)),b(n.length===e.length,(()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`)),b(r.shape.reduce(((t,r,a)=>a>0&&a<=e.length?t&&(r+n[a-1][0]+n[a-1][1])%e[a-1]==0:t),!0),(()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`));const a={x:r},s={blockShape:e,paddings:n};return on.runKernel("SpaceToBatchND",a,s)}});const ci=mn({pool_:function(t,e,n,r,a,s,o){null==a&&(a=[1,1]),null==s&&(s=1),0===r&&(r="valid");const i=dn(t,"x","maxPool");let u=i,l=!1;3===i.rank&&(l=!0,u=es(i,[1,i.shape[0],i.shape[1],i.shape[2]])),b(Qa(s,a),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`));const c=function(t,e,n,r,a,s,o="channelsLast"){const[i,u]=Ya(e);let l;if("channelsLast"===o)l=[i,u,t[3],t[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);l=[i,u,t[1],t[1]]}return Wa(t,l,n,r,a,s,!1,o)}(u.shape,e,s,a,r),p=[c.dilationHeight,c.dilationWidth];let h;h="same"===r?function(t,e){const n=t.map(((t,n)=>t+(t-1)*(e[n]-1))).map((t=>t-1)),r=n.map((t=>Math.floor(t/2))),a=n.map(((t,e)=>t-r[e]));return n.map(((t,e)=>[r[e],a[e]]))}([c.filterHeight,c.filterWidth],p):[[0,0],[0,0]];const d=1===p[0]&&1===p[1],[f,m]=function(t,e,n){const r=n.map((t=>t[0])),a=n.map((t=>t[1])),s=t.concat(r,a),o=e.map(((t,e)=>(t-s[e]%t)%t)),i=a.map(((t,e)=>t+o[e])),u=e.map(((t,e)=>[r[e],i[e]])),l=e.map(((t,e)=>[0,o[e]]));return[u,l]}([c.inHeight,c.inWidth],p,h),g=d?r:"valid",y=d?u:li(u,p,f),w=("avg"===n?()=>ns(y,e,s,g,o):()=>zo(y,e,s,g,o))(),v=d?w:cs(w,p,m);return l?es(v,[v.shape[1],v.shape[2],v.shape[3]]):v}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pi=mn({prelu_:function(t,e){const n={x:dn(t,"x","prelu"),alpha:dn(e,"alpha","prelu")};return on.runKernel("Prelu",n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hi=mn({prod_:function(t,e=null,n=!1){let r=dn(t,"x","prod");"bool"===r.dtype&&(r=pa(r,"int32"));const a={x:r},s={axis:e,keepDims:n};return on.runKernel("Prod",a,s)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const di=mn({raggedGather_:function(t,e,n,r){const a={paramsNestedSplits:t.map(((t,e)=>dn(t,`tensors${e}`,"raggedGather","int32"))),paramsDenseValues:dn(e,"paramsDenseValues","raggedGather"),indices:dn(n,"indices","raggedGather","int32")},s={outputRaggedRank:r},o=on.runKernel("RaggedGather",a,s);return{outputNestedSplits:o.slice(0,o.length-1),outputDenseValues:o[o.length-1]}}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fi=mn({raggedTensorToTensor_:function(t,e,n,r,a){const s=dn(t,"shape","raggedTensorToTensor","int32"),o=dn(e,"values","raggedTensorToTensor"),i={shape:s,values:o,defaultValue:dn(n,"defaultValue","raggedTensorToTensor",o.dtype),rowPartitionTensors:r.map(((t,e)=>dn(t,`tensors${e}`,"raggedTensorToTensor","int32")))},u={rowPartitionTypes:a};return on.runKernel("RaggedTensorToTensor",i,u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mi=mn({rand_:function(t,e,n){const r=N(t);let a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else{if("bool"!==n)throw new Error(`Unknown data type ${n}`);a=new Uint8Array(r)}for(let t=0;t<r;t++)a[t]=e();return on.makeTensor(a,t,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var gi={},yi=s("cmoHh"),bi=s("euRi5"),wi=s("hDsEw"),vi=s("3J2Zm"),xi=s("6Px8M"),Ni=s("lDm0S"),Ti={};!function(t,e,n){var r,a=256,o=n.pow(a,6),i=n.pow(2,52),u=2*i,l=255;function c(s,l,c){var g=[],y=f(d((l=1==l?{entropy:!0}:l||{}).entropy?[s,m(e)]:null==s?function(){try{var n;return r&&(n=r.randomBytes)?n=n(a):(n=new Uint8Array(a),(t.crypto||t.msCrypto).getRandomValues(n)),m(n)}catch(n){var s=t.navigator,o=s&&s.plugins;return[+new Date,t,o,t.screen,m(e)]}}():s,3),g),b=new p(g),w=function(){for(var t=b.g(6),e=o,n=0;t<i;)t=(t+n)*a,e*=a,n=b.g(1);for(;t>=u;)t/=2,e/=2,n>>>=1;return(t+n)/e};return w.int32=function(){return 0|b.g(4)},w.quick=function(){return b.g(4)/4294967296},w.double=w,f(m(b.S),e),(l.pass||c||function(t,e,r,a){return a&&(a.S&&h(a,b),t.state=function(){return h(b,{})}),r?(n.random=t,e):t})(w,y,"global"in l?l.global:this==n,l.state)}function p(t){var e,n=t.length,r=this,s=0,o=r.i=r.j=0,i=r.S=[];for(n||(t=[n++]);s<a;)i[s]=s++;for(s=0;s<a;s++)i[s]=i[o=l&o+t[s%n]+(e=i[s])],i[o]=e;(r.g=function(t){for(var e,n=0,s=r.i,o=r.j,i=r.S;t--;)e=i[s=l&s+1],n=n*a+i[l&(i[s]=i[o=l&o+e])+(i[o]=e)];return r.i=s,r.j=o,n})(a)}function h(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function d(t,e){var n,r=[],a=typeof t;if(e&&"object"==a)for(n in t)try{r.push(d(t[n],e-1))}catch(t){}return r.length?r:"string"==a?t:t+"\0"}function f(t,e){for(var n,r=t+"",a=0;a<r.length;)e[l&a]=l&(n^=19*e[l&a])+r.charCodeAt(a++);return m(e)}function m(t){return String.fromCharCode.apply(0,t)}if(f(n.random(),e),Ti){Ti=c;try{r=s("kjyEk")}catch(t){}}else"function"==typeof define&&define.amd?define((function(){return c})):n.seedrandom=c}("undefined"!=typeof self?self:Ti,[],Math),Ti.alea=yi,Ti.xor128=bi,Ti.xorwow=wi,Ti.xorshift7=vi,Ti.xor4096=xi,Ti.tychei=Ni,gi=Ti;class ki{constructor(t,e,n,r,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const s=a||Math.random();this.random=gi.alea(s.toString())}nextValue(){if(!isNaN(this.nextVal)){const t=this.nextVal;return this.nextVal=NaN,t}let t,e,n=!1;for(;!n;){let r,a,s;do{r=2*this.random()-1,a=2*this.random()-1,s=r*r+a*a}while(s>=1||0===s);const o=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*r*o,e=this.mean+this.stdDev*a*o,this.truncated&&!this.isValidTruncated(t)||(n=!0)}return this.truncated&&!this.isValidTruncated(e)||(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Ei{constructor(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;const a=r||Math.random();this.randu=gi.alea(a.toString()),this.randn=new ki(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,n,r,a,s;for(;;){do{r=this.randn.nextValue(),s=1+this.c*r}while(s<=0);if(s*=s*s,t=r*r,e=1-.331*t*t,n=.5*t+this.d*(1-s+Math.log(s)),a=this.randu(),a<e||Math.log(a)<n)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(t){return"float32"===this.dtype?t:Math.round(t)}}class Si{constructor(t=0,e=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=gi.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}const _i=mn({randomGamma_:function(t,e,n=1,r="float32",a){if(null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error(`Unsupported data type ${r}`);const s=new Ei(e,n,r,a),o=ca(t,r);for(let t=0;t<o.values.length;t++)o.values[t]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ai=mn({randomNormal_:function(t,e=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error(`Unsupported data type ${r}`);const s=new ki(e,n,r,!1,a),o=ca(t,r);for(let t=0;t<o.values.length;t++)o.values[t]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ii=mn({randomStandardNormal_:function(t,e,n){if(null!=e&&"bool"===e)throw new Error(`Unsupported data type ${e}`);return Ai(t,0,1,e,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mi=mn({randomUniform_:function(t,e=0,n=1,r="float32",a){const s=ca(t,r),o=new Si(e,n,null,a);for(let t=0;t<s.values.length;t++)s.values[t]=o.nextValue();return s.toTensor()}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oi(t,e,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const a={start:t,stop:e,step:n,dtype:r};return on.runKernel("Range",{},a)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $i=mn({real_:function(t){const e={input:dn(t,"input","real")};return on.runKernel("Real",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Di=mn({reciprocal_:function(t){const e={x:dn(t,"x","reciprocal")};return on.runKernel("Reciprocal",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ci=mn({relu_:function(t){const e={x:dn(t,"x","relu")};return on.runKernel("Relu",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fi=mn({relu6_:function(t){const e={x:dn(t,"x","relu6")};return on.runKernel("Relu6",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ri=mn({reverse_:function(t,e){const n={x:dn(t,"x","reverse")},r={dims:e};return on.runKernel("Reverse",n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Li=mn({reverse1d_:function(t){const e=dn(t,"x","reverse");return b(1===e.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`)),Ri(e,0)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bi=mn({reverse2d_:function(t,e){const n=dn(t,"x","reverse");return b(2===n.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`)),Ri(n,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pi=mn({reverse3d_:function(t,e){const n=dn(t,"x","reverse");return b(3===n.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`)),Ri(n,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zi=mn({reverse4d_:function(t,e){const n=dn(t,"x","reverse");return b(4===n.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`)),Ri(n,e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ui=mn({round_:function(t){const e={x:dn(t,"x","round")};return on.runKernel("Round",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vi=mn({rsqrt_:function(t){const e={x:dn(t,"x","rsqrt","float32")};return on.runKernel("Rsqrt",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ji=mn({selu_:function(t){const e={x:dn(t,"x","selu")};return on.runKernel("Selu",e)}});const Hi=mn({separableConv2d_:function(t,e,n,r,a,s=[1,1],o="NHWC"){const i=dn(t,"x","separableConv2d"),u=dn(e,"depthwiseFilter","separableConv2d"),l=dn(n,"pointwiseFilter","separableConv2d");let c=i,p=!1;if(3===i.rank&&(p=!0,c=es(i,[1,i.shape[0],i.shape[1],i.shape[2]])),"NCHW"===o)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");b(4===c.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`)),b(4===u.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`)),b(4===l.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`)),b(1===l.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`)),b(1===l.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`));const h=u.shape[2],d=u.shape[3];b(l.shape[2]===h*d,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${h*d}, but got ${l.shape[2]}.`));const f=Ls(c,u,r,a,o,s),m=ks(f,l,1,"valid",o);return p?es(m,[m.shape[1],m.shape[2],m.shape[3]]):m}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ki=async function(t,e){const n=dn(t,"x","setdiff1d"),r=dn(e,"y","setdiff1d");b(n.dtype===r.dtype,(()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`)),b(1===n.rank,(()=>`x should be 1D tensor, but got x (${n.shape}).`)),b(1===r.rank,(()=>`y should be 1D tensor, but got y (${r.shape}).`));const a=await n.data(),s=await r.data(),o=new Set(s);let i=0;for(let t=0;t<a.length;t++)o.has(a[t])||i++;const u=new Fe([i],n.dtype),l=new Fe([i],"int32");for(let t=0,e=0;t<a.length;t++)o.has(a[t])||(u.values[e]=a[t],l.values[e]=t,e++);return[u.toTensor(),l.toTensor()]};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qi=mn({sign_:function(t){const e={x:dn(t,"x","sign")};return on.runKernel("Sign",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wi=mn({sin_:function(t){const e={x:dn(t,"x","sin","float32")};return on.runKernel("Sin",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gi=mn({sinh_:function(t){const e={x:dn(t,"x","sinh")};return on.runKernel("Sinh",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yi=mn({slice1d_:function(t,e,n){const r=dn(t,"x","slice1d");return b(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),is(r,[e],[n])}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xi=mn({slice2d_:function(t,e,n){const r=dn(t,"x","slice2d");return b(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),is(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ji=mn({slice3d_:function(t,e,n){const r=dn(t,"x","slice3d");return b(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),is(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zi=mn({slice4d_:function(t,e,n){const r=dn(t,"x","slice4d");return b(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),is(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qi=mn({softmax_:function(t,e=-1){const n=dn(t,"logits","softmax","float32");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},a={dim:e};return on.runKernel("Softmax",r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tu=mn({fft_:function(t){b("complex64"===t.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`));const e={input:t};return on.runKernel("FFT",e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eu=mn({ifft_:function(t){b("complex64"===t.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`));const e={input:t};return on.runKernel("IFFT",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nu=mn({irfft_:function(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const a=es(t,[n,e]);r=eu(a)}else{const a=[n,2*(e-1)],s=es($i(t),[n,e]),o=es(mo(t),[n,e]),i=Ri(is(s,[0,1],[n,e-2]),1),u=ss(Ri(is(o,[0,1],[n,e-2]),1),to(-1)),l=Ea([s,i],1),c=Ea([o,u],1),p=es(gn(l,c),[a[0],a[1]]);r=eu(p)}if(r=$i(r),3===t.rank&&0!==t.shape[0]){const e=r,n=t.shape[0];r=es(r,[n,r.shape[0]/n,r.shape[1]]),e.dispose()}return r}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ru=mn({split_:function(t,e,n=0){const r={x:dn(t,"x","split")},a={numOrSizeSplits:e,axis:n};return on.runKernel("SplitV",r,a)}});const au=mn({rfft_:function(t,e){b("float32"===t.dtype,(()=>`The dtype for rfft() must be real value but got ${t.dtype}`));let n=t.shape[t.shape.length-1];const r=t.size/n;let a;if(null!=e&&e<n){const r=t.shape.map((t=>0)),s=t.shape.map((t=>t));s[t.shape.length-1]=e,a=is(t,r,s),n=e}else if(null!=e&&e>n){const r=t.shape.map((t=>t));r[t.shape.length-1]=e-n,a=Ea([t,Ko(r)],t.shape.length-1),n=e}else a=t;const s=js(a),o=es(gn(a,s),[r,n]),i=tu(o),u=Math.floor(n/2)+1,l=$i(i),c=mo(i),p=ru(l,[u,n-u],l.shape.length-1),h=ru(c,[u,n-u],c.shape.length-1),d=a.shape.slice();return d[a.shape.length-1]=u,es(gn(p[0],h[0]),d)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const su=mn({squaredDifference_:function(t,e){let n=dn(t,"a","squaredDifference"),r=dn(e,"b","squaredDifference");[n,r]=Qe(n,r),zs(n.shape,r.shape);const a={a:n,b:r};return on.runKernel("SquaredDifference",a,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ou=mn({squeeze_:function(t,e){const n=dn(t,"x","squeeze","string_or_numeric");return es(n,D(n.shape,e).newShape)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iu=mn({stack_:function(t,e=0){const n=fn(t,"tensors","stack","string_or_numeric");b(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),n.length>0&&b(e<=n[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=n,a={axis:e};return on.runKernel("Pack",r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uu=mn({step_:function(t,e=0){const n={x:dn(t,"x","step")},r={alpha:e};return on.runKernel("Step",n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lu=mn({stridedSlice_:function(t,e,n,r,a=0,s=0,o=0,i=0,u=0){const l={x:dn(t,"x","stridedSlice","string_or_numeric")},c={begin:e,end:n,strides:r,beginMask:a,endMask:s,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return on.runKernel("StridedSlice",l,c)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cu=mn({tan_:function(t){const e={x:dn(t,"x","tan","float32")};return on.runKernel("Tan",e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pu(t,e){v(t);const n=cn(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return yn(t,null,n,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hu(t,e,n){if(v(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");const r=cn(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return yn(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function du(t,e,n){if(v(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");const r=cn(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return yn(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fu(t,e,n){if(v(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");const r=cn(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return yn(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mu(t,e,n){if(v(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");const r=cn(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return yn(t,e=e||r,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gu=mn({topk_:function(t,e=1,n=!0){const r=dn(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const a=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${e}`);const s={x:r},o={k:e,sorted:n},[i,u]=on.runKernel("TopK",s,o);return{values:i,indices:u}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yu=mn({truncatedNormal_:function(t,e=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const s=new ki(e,n,r,!0,a),o=ca(t,r);for(let t=0;t<o.values.length;t++)o.values[t]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bu=mn({unique_:function(t,e=0){const n=dn(t,"x","unique","string_or_numeric");b(n.rank>0,(()=>"The input tensor must be at least 1D"));const r={x:n},a={axis:e},[s,o]=on.runKernel("Unique",r,a);return{values:s,indices:o}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wu=mn({unsortedSegmentSum_:function(t,e,n){const r=dn(t,"x","unsortedSegmentSum"),a=dn(e,"segmentIds","unsortedSegmentSum","int32");b(E(n),(()=>"numSegments must be of dtype int"));const s={x:r,segmentIds:a},o={numSegments:n};return on.runKernel("UnsortedSegmentSum",s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vu=mn({unstack_:function(t,e=0){const n=dn(t,"x","unstack","string_or_numeric");b(e>=-n.shape.length&&e<n.shape.length,(()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`));const r={value:n},a={axis:e};return on.runKernel("Unpack",r,a)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xu(t,e){return Bo(t,e,"right")}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nu(t,e=!0,n,r){return on.makeVariable(t,e,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tu(t,e){const n=[];for(let t=0;t<e.length;t++)e[t]&&n.push(t);const r=ca(t,"int32"),a=ca([n.length,t.length],"int32");for(let e=0;e<n.length;e++){const s=r.indexToLoc(n[e]),o=e*t.length;a.values.set(s,o)}return a.toTensor()}const ku=async function(t){const e=dn(t,"condition","whereAsync","bool"),n=await e.data(),r=Tu(e.shape,n);return t!==e&&e.dispose(),r};var Eu={};t(Eu,"booleanMaskAsync",(()=>Su));const Su=
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(t,e,n){const r=dn(t,"tensor","boolMask"),a=dn(e,"mask","boolMask","bool"),s=null==n?0:n,o=a.rank,i=r.shape;b(o>0,(()=>"mask cannot be scalar")),w(i.slice(s,s+o),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let t=s;t<s+o;t++)u*=i[t];const l=i.slice(0,s).concat([u],i.slice(s+o)),c=es(r,l),p=es(a,[-1]),h=await ku(p),d=ou(h,[1]),f=po(c,d,s);return t!==r&&r.dispose(),e!==a&&a.dispose(),d.dispose(),c.dispose(),p.dispose(),h.dispose(),f};var _u={};t(_u,"transpose",(()=>Au));const Au=mn({transpose_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=dn(t,"x","transpose");if(null==e&&(e=r.shape.map(((t,e)=>e)).reverse()),b(r.rank===e.length,(()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`)),e.forEach((t=>{b(t>=0&&t<r.rank,(()=>"All entries in 'perm' must be between 0 and "+(r.rank-1)+` but got ${e}`))})),r.rank<=1)return r.clone();const a={x:r},s={perm:e};return"complex64"===r.dtype?Sa((()=>{let t=$i(r),e=mo(r);return t=on.runKernel("Transpose",{x:t},s),e=on.runKernel("Transpose",{x:e},s),n&&(e=_o(e)),gn(t,e)})):on.runKernel("Transpose",a,s)}});var Iu={};t(Iu,"movingAverage",(()=>Mu));const Mu=mn({movingAverage_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a=!0){const s=dn(t,"v","movingAverage"),o=dn(e,"x","movingAverage"),i=dn(n,"decay","movingAverage");var u,l;l=o,b((u=s).dtype===l.dtype,(()=>`The dtypes of the first(${u.dtype}) and second(${l.dtype}) input must match`)),b(k(s.shape,o.shape),(()=>"Shape mismatch in v and x"));const c=to(1),p=Mo(c,i);let h=ss(Mo(o,s),p);if(a){b(null!=r,(()=>"When using zeroDebias: true, step is required."));const t=dn(r,"step","movingAverage");h=Ma(h,Mo(c,Qs(i,t)))}return fa(s,h)}});var Ou={};function $u(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if("int32"!==e.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===e.size)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(0===t.size)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}!
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,a=e.rank>1?e.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(s+` update.rank < ${a}. `);if(t.length<r+(n.rank-a))throw new Error(s+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+t.length-r)throw new Error(s+" update.rank != "+(a+t.length-r));for(let t=0;t<a;++t)if(n.shape[t]!==e.shape[t])throw new Error(s+` updates.shape[${t}] (${n.shape[t]}) != indices.shape[${t}] (${e.shape[t]}).`);for(let e=0;e<n.rank-a;++e)if(n.shape[e+a]!==t[e+r])throw new Error(s+` updates.shape[${e+a}] (${n.shape[e+a]}) != shape[${e+a}] (${t[e+a]})`)}(n,e,t)}t(Ou,"scatterND",(()=>Du));const Du=mn({scatterND_:function(t,e,n){const r=dn(t,"indices","scatterND","int32"),a=dn(e,"updates","scatterND");$u(a,r,n);const s={indices:r,updates:a},o={shape:n};return on.runKernel("ScatterNd",s,o)}});var Cu={};t(Cu,"sparseToDense",(()=>Fu));const Fu=mn({sparseToDense_:function(t,e,n,r=0){const a=dn(t,"sparseIndices","sparseToDense","int32"),s=dn(e,"sparseValues","sparseToDense","string_or_numeric"),o=dn(r,"defaultValue","sparseToDense",s.dtype);!
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r){if("int32"!==t.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const a=t.rank>0?t.shape[0]:1,s=t.rank>1?t.shape[1]:1;if(n.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${s}.`);const o=e.size;if(0!==e.rank&&(1!==e.rank||o!==a))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${a}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(a,s,n,o);const i={sparseIndices:a,sparseValues:s,defaultValue:o},u={outputShape:n};return on.runKernel("SparseToDense",i,u)}});var Ru={};t(Ru,"gatherND",(()=>Lu));const Lu=mn({gatherND_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=dn(e,"indices","gatherND","int32"),r={params:dn(t,"x","gatherND","string_or_numeric"),indices:n};return on.runKernel("GatherNd",r)}});var Bu={};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pu(t,e){if(null==e)return t.shape.slice();if(k(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}t(Bu,"dropout",(()=>zu));const zu=mn({dropout_:function(t,e,n,r){const a=dn(t,"x","dropout");if(b("float32"===a.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`)),b(e>=0&&e<1,(()=>`rate must be a float in the range [0, 1), but got ${e}.`)),0===e)return t instanceof Pe?a.clone():a;const s=Pu(a,n),o=1-e,i=Ma(co(fa(Mi(s,0,1,"float32",r),o)),o);return ss(a,i)}});var Uu={};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vu(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function ju(t,e,n){const r=1-t%2,a=new Float32Array(t);for(let s=0;s<t;++s){const o=2*Math.PI*s/(t+r-1);a[s]=e-n*Math.cos(o)}return pu(a,"float32")}t(Uu,"enclosingPowerOfTwo",(()=>Vu)),t(Uu,"cosineWindow",(()=>ju));var Hu={};t(Hu,"inTopKAsync",(()=>Ku));const Ku=
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(t,e,n=1){const r=dn(t,"predictions","inTopK"),a=dn(e,"targets","inTopK");b(r.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`)),b(r.rank-1===a.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`)),w(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const s=r.shape[r.shape.length-1];b(n>0&&n<=s,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${n}`));const o=await r.data(),i=await a.data(),[u,l]=[o.length/s,s],c=C("bool",u);for(let t=0;t<u;t++){const e=t*l,r=o.subarray(e,e+l),a=[];for(let t=0;t<r.length;t++)a.push({value:r[t],index:t});a.sort(((t,e)=>e.value-t.value)),c[t]=0;for(let e=0;e<n;e++)if(a[e].index===i[t]){c[t]=1;break}}return t!==r&&r.dispose(),e!==a&&a.dispose(),bn(c,a.shape,"bool")};var qu={};t(qu,"conv2d",(()=>Zu)),t(qu,"depthwiseConv2d",(()=>el)),t(qu,"matMul",(()=>nl));const Wu=mn({conv2DBackpropFilter_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,s="NHWC",o){let i=t;3===t.rank&&(i=es(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u=e;3===u.rank&&(u=es(e,[1,e.shape[0],e.shape[1],e.shape[2]])),b(4===i.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`)),b(4===u.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`)),b(4===n.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`));const l="NHWC"===s?i.shape[3]:i.shape[1],c="NHWC"===s?u.shape[3]:u.shape[1];b(l===n[2],(()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`)),b(c===n[3],(()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`)),ts("conv2dDerFilter",a,o);const p={x:i,dy:u},h={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,filterShape:n};return on.runKernel("Conv2DBackpropFilter",p,h)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gu(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return ss(t,uu(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Yu(t,e){let n=e;const r=function(t,e){const n=[];for(let r=0;r<e.length;r++){const a=t[t.length-r-1],s=e.length-r-1,o=e[s];(null==a||1===a&&o>1)&&n.unshift(s)}return n}(t.shape,e.shape);return r.length>0&&(n=ro(n,r)),es(n,t.shape)}function Xu(t,e,n,r){if("linear"===e)return t;if("relu"===e)return Ci(t);if("elu"===e)return Ws(t);if("relu6"===e)return Fi(t);if("prelu"===e)return pi(t,n);if("leakyrelu"===e)return wo(t,r);if("sigmoid"===e)return os(t);throw new Error(`Unknown fused activation ${e}.`)}const Ju=(t,e)=>!(t>0)||"linear"===e;const Zu=mn({fusedConv2d_:function({x:t,filter:e,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(u=u||"linear",!1===Ju(on.state.gradientDepth,u)){b("NHWC"===a,(()=>`Error in fused conv2d: got dataFormat of ${a} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let p=ks(t,e,n,r,a,s,o);return null!=i&&(p=fa(p,i)),Xu(p,u,l,c)}const p=dn(t,"x","conv2d","float32"),h=dn(e,"filter","conv2d","float32");let d=p,f=!1;3===p.rank&&(f=!0,d=es(p,[1,p.shape[0],p.shape[1],p.shape[2]])),b(4===d.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`)),b(4===h.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${h.rank}.`)),ts("fused conv2d",r,o);const m="NHWC"===a?d.shape[3]:d.shape[1];b(h.shape[2]===m,(()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${h.shape[2]}.`)),b(Qa(n,s),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`));const g=Wa(d.shape,h.shape,n,s,r,o);let y,w;if(null!=i&&(y=dn(i,"bias","fused conv2d"),[y]=Qe(y,p),"NHWC"===a?zs(g.outShape,y.shape):(b(y.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${y.shape.length}.`)),b(0===y.shape.length||y.shape[0]===g.outChannels||1===y.shape[0],(()=>`Error in fused conv2d: bias shape (${y.shape}) is not compatible with the number of output channels (${g.outChannels})`)))),null!=l){const t=l.shape;if(b(t.length<=1||3===t.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${t.length}.`)),1===t.length)b(1===t[0]||t[0]===g.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${t}) is not compatible with the number of output channels (${g.outChannels}).`));else if(3===t.length)try{zs(t,g.outShape)}catch(e){const n=`Error in fused conv2d: PReLU activation weights (${t}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(n)}w=dn(l,"prelu weights","fused conv2d")}const v=(t,e)=>{b("NHWC"===a,(()=>`Error in gradient of fused conv2D: got dataFormat of ${a} but only NHWC is currently supported.`));const[o,i,l,c]=e,p=Gu(t,l,u);b(Za(s),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`));const h=[Ss(i.shape,p,o,n,r),Wu(i,p,o.shape,n,r)];if(null!=c){const t=Yu(c,p);h.push(t)}return h},x={x:d,filter:h,bias:y,preluActivationWeights:w},N={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:c};if(null==i){const t=So(((t,e,n)=>{let r=on.runKernel("FusedConv2D",x,N);return n([e,t,r]),f&&(r=es(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}}));return t(d,h)}{const t=So(((t,e,n,r)=>{let a=on.runKernel("FusedConv2D",x,N);return r([e,t,a,n]),f&&(a=es(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:v}}));return t(d,h,y)}}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qu=mn({depthwiseConv2dNativeBackpropFilter_:function(t,e,n,r,a,s=[1,1],o){let i=t;3===t.rank&&(i=es(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u=e;3===u.rank&&(u=es(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const l={x:i,dy:u},c={strides:r,pad:a,dimRoundingMode:o,dilations:s,filterShape:n};return on.runKernel("DepthwiseConv2dNativeBackpropFilter",l,c)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tl=mn({depthwiseConv2dNativeBackpropInput_:function(t,e,n,r,a,s=[1,1],o){let i=e,u=!1;3===e.rank&&(u=!0,i=es(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const l={dy:i,filter:n},c={strides:r,pad:a,dimRoundingMode:o,dilations:s,inputShape:t},p=on.runKernel("DepthwiseConv2dNativeBackpropInput",l,c);return u?es(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const el=mn({fusedDepthwiseConv2d_:function({x:t,filter:e,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(!1===Ju(on.state.gradientDepth,u)){let p=Ls(t,e,n,r,a,s,o);return null!=i&&(p=fa(p,i)),Xu(p,u,l,c)}const p=dn(t,"x","depthwiseConv2d","float32"),h=dn(e,"filter","depthwiseConv2d","float32");let d=p,f=!1;3===p.rank&&(f=!0,d=es(p,[1,p.shape[0],p.shape[1],p.shape[2]])),b(4===d.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`)),b(4===h.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`)),b(d.shape[3]===h.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${h.shape[2]}.`)),null==s&&(s=[1,1]),b(Qa(n,s),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`)),ts("fused depthwiseConv2d",r,o);const m=Wa(d.shape,h.shape,n,s,r,o,!0);let g,y;null!=i&&(g=dn(i,"bias","fused conv2d"),[g]=Qe(g,p),zs(m.outShape,g.shape)),null!=l&&(y=dn(l,"prelu weights","fused depthwiseConv2d"));const w=(t,e)=>{b(Za(s),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`));const[a,i,l,c]=e,p=Gu(t,l,u),h=tl(i.shape,p,a,n,r,s,o),d=Qu(i,p,a.shape,n,r,s,o);if(null!=c){return[h,d,Yu(g,p)]}return[h,d]},v={x:d,filter:h,bias:g,preluActivationWeights:y},x={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:c};if(null==i){const t=So(((t,e,n)=>{let r=on.runKernel("FusedDepthwiseConv2D",v,x);return n([e,t,r]),f&&(r=es(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:w}}));return t(d,h)}{const t=So(((t,e,n,r)=>{let a=on.runKernel("FusedDepthwiseConv2D",v,x);return r([e,t,a,n]),f&&(a=es(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:w}}));return t(d,h,g)}}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nl=mn({fusedMatMul_:function({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(!1===Ju(on.state.gradientDepth,s)){let u=as(t,e,n,r);return null!=a&&(u=fa(u,a)),Xu(u,s,o,i)}let u=dn(t,"a","fused matMul"),l=dn(e,"b","fused matMul");[u,l]=Qe(u,l);const c=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],h=n?u.shape[u.rank-1]:u.shape[u.rank-2],d=r?l.shape[l.rank-2]:l.shape[l.rank-1],f=u.shape.slice(0,-2),m=l.shape.slice(0,-2),g=N(f),y=N(m);b(c===p,(()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`));const w=zs(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([h,d]),v=es(u,n?[g,c,h]:[g,h,c]),x=es(l,r?[y,d,p]:[y,p,d]);let T,k;null!=a&&(T=dn(a,"bias","fused matMul"),[T]=Qe(T,u),zs(w,T.shape)),null!=o&&(k=dn(o,"prelu weights","fused matMul"));const E=(t,e)=>{const[o,i,u,l]=e,c=Gu(es(t,u.shape),u,s);let p,h;if(n||r?!n&&r?(p=as(c,i,!1,!1),h=as(c,o,!0,!1)):n&&!r?(p=as(i,c,!1,!0),h=as(o,c,!1,!1)):(p=as(i,c,!0,!0),h=as(c,o,!0,!0)):(p=as(c,i,!1,!0),h=as(o,c,!0,!1)),null!=a){return[p,h,Yu(l,c)]}return[p,h]},S={a:v,b:x,bias:T,preluActivationWeights:k},_={transposeA:n,transposeB:r,activation:s,leakyreluAlpha:i};if(null==a){const t=So(((t,e,n)=>{const r=on.runKernel("_FusedMatMul",S,_);return n([t,e,r]),{value:es(r,w),gradFunc:E}}));return t(v,x)}{const t=So(((t,e,n,r)=>{const a=on.runKernel("_FusedMatMul",S,_);return r([t,e,a,n]),{value:es(a,w),gradFunc:E}}));return t(v,x,T)}}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rl=mn({hammingWindow_:function(t){return ju(t,.54,.46)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const al=mn({hannWindow_:function(t){return ju(t,.5,.5)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sl=mn({frame_:function(t,e,n,r=!1,a=0){let s=0;const o=[];for(;s+e<=t.size;)o.push(is(t,s,e)),s+=n;if(r)for(;s<t.size;){const r=s+e-t.size,i=Ea([is(t,s,e-r),Ta([r],a)]);o.push(i),s+=n}return 0===o.length?hu([],[0,e]):es(Ea(o),[o.length,e])}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ol=mn({stft_:function(t,e,n,r,a=al){null==r&&(r=Vu(e));const s=sl(t,e,n),o=ss(s,a(e));return au(o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const il=mn({cropAndResize_:function(t,e,n,r,a="bilinear",s=0){const o=dn(t,"image","cropAndResize"),i=dn(e,"boxes","cropAndResize","float32"),u=dn(n,"boxInd","cropAndResize","int32"),l=i.shape[0];b(4===o.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`)),b(2===i.rank&&4===i.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`)),b(1===u.rank&&u.shape[0]===l,(()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`)),b(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),b(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),b("bilinear"===a||"nearest"===a,(()=>`method must be bilinear or nearest, but was ${a}`));const c={image:o,boxes:i,boxInd:u},p={method:a,extrapolationValue:s,cropSize:r};return on.runKernel("CropAndResize",c,p)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ul=mn({flipLeftRight_:function(t){const e=dn(t,"image","flipLeftRight","float32");b(4===e.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`));const n={image:e};return on.runKernel("FlipLeftRight",n,{})}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ll=mn({grayscaleToRGB_:function(t){const e=dn(t,"image","grayscaleToRGB"),n=e.rank-1,r=e.shape[n];b(e.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`)),b(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const a=new Array(e.rank);return a.fill(1,0,n),a[n]=3,uo(e,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=mn({rotateWithOffset_:function(t,e,n=0,r=.5){const a=dn(t,"image","rotateWithOffset","float32");b(4===a.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`));const s={image:a},o={radians:e,fillValue:n,center:r};return on.runKernel("RotateWithOffset",s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pl(t,e,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);const o=t.shape[0];return n=Math.min(n,o),b(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),b(2===t.rank,(()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`)),b(4===t.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`)),b(1===e.rank,(()=>"scores must be a 1D tensor")),b(e.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`)),b(0<=s&&s<=1,(()=>`softNmsSigma must be in [0, 1], but was '${s}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}const hl=mn({nonMaxSuppression_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=dn(t,"boxes","nonMaxSuppression","float32"),o=dn(e,"scores","nonMaxSuppression","float32"),i=pl(s,o,n,r,a),u={maxOutputSize:n=i.maxOutputSize,iouThreshold:r=i.iouThreshold,scoreThreshold:a=i.scoreThreshold};return on.runKernel("NonMaxSuppressionV3",{boxes:s,scores:o},u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dl(t,e,n){const r=function(t,e,n){return function(t,e,n){let r=0,a=t.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);const i=n(e,t[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}(t,e,n||fl)}(t,e,n),a=r<0?-(r+1):r;t.splice(a,0,e)}function fl(t,e){return t>e?1:t<e?-1:0}function ml(t,e,n,r,a){return bl(t,e,n,r,a,0)}function gl(t,e,n,r,a,s){return bl(t,e,n,r,a,0,!1,s,!0)}function yl(t,e,n,r,a,s){return bl(t,e,n,r,a,s,!0)}function bl(t,e,n,r,a,s,o=!1,i=!1,u=!1){const l=[];for(let t=0;t<e.length;t++)e[t]>a&&l.push({score:e[t],boxIndex:t,suppressBeginIndex:0});l.sort(xl);const c=s>0?-.5/s:0,p=[],h=[];for(;p.length<n&&l.length>0;){const e=l.pop(),{score:n,boxIndex:s,suppressBeginIndex:o}=e;if(n<a)break;let i=!1;for(let n=p.length-1;n>=o;--n){const o=wl(t,s,p[n]);if(o>=r){i=!0;break}if(e.score=e.score*vl(r,c,o),e.score<=a)break}e.suppressBeginIndex=p.length,i||(e.score===n?(p.push(s),h.push(e.score)):e.score>a&&dl(l,e,xl))}const d=p.length,f=n-d;i&&f>0&&(p.push(...new Array(f).fill(0)),h.push(...new Array(f).fill(0)));const m={selectedIndices:p};return o&&(m.selectedScores=h),u&&(m.validOutputs=d),m}function wl(t,e,n){const r=t.subarray(4*e,4*e+4),a=t.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),c=Math.min(a[1],a[3]),p=Math.max(a[0],a[2]),h=Math.max(a[1],a[3]),d=(i-s)*(u-o),f=(p-l)*(h-c);if(d<=0||f<=0)return 0;const m=Math.max(s,l),g=Math.max(o,c),y=Math.min(i,p),b=Math.min(u,h),w=Math.max(y-m,0)*Math.max(b-g,0);return w/(d+f-w)}function vl(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function xl(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}const Nl=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=dn(t,"boxes","nonMaxSuppressionAsync"),o=dn(e,"scores","nonMaxSuppressionAsync"),i=pl(s,o,n,r,a);n=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;const u=await Promise.all([s.data(),o.data()]),l=u[0],c=u[1],{selectedIndices:p}=ml(l,c,n,r,a);return s!==t&&s.dispose(),o!==e&&o.dispose(),pu(p,"int32")};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl=mn({nonMaxSuppressionWithScore_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=dn(t,"boxes","nonMaxSuppression"),i=dn(e,"scores","nonMaxSuppression"),u=pl(o,i,n,r,a,s),l={boxes:o,scores:i},c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:s=u.softNmsSigma},p=on.runKernel("NonMaxSuppressionV5",l,c);return{selectedIndices:p[0],selectedScores:p[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kl=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=dn(t,"boxes","nonMaxSuppressionAsync"),i=dn(e,"scores","nonMaxSuppressionAsync"),u=pl(o,i,n,r,a,s);n=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;const l=await Promise.all([o.data(),i.data()]),c=l[0],p=l[1],{selectedIndices:h,selectedScores:d}=yl(c,p,n,r,a,s);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:pu(h,"int32"),selectedScores:pu(d)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=mn({nonMaxSuppressionPadded_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=dn(t,"boxes","nonMaxSuppression"),i=dn(e,"scores","nonMaxSuppression"),u=pl(o,i,n,r,a,null),l={boxes:o,scores:i},c={maxOutputSize:u.maxOutputSize,iouThreshold:u.iouThreshold,scoreThreshold:u.scoreThreshold,padToMaxOutputSize:s},p=on.runKernel("NonMaxSuppressionV4",l,c);return{selectedIndices:p[0],validOutputs:p[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sl=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=dn(t,"boxes","nonMaxSuppressionAsync"),i=dn(e,"scores","nonMaxSuppressionAsync"),u=pl(o,i,n,r,a,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,[h,d]=await Promise.all([o.data(),i.data()]),{selectedIndices:f,validOutputs:m}=gl(h,d,l,c,p,s);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:pu(f,"int32"),validOutputs:to(m,"int32")}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _l=mn({resizeBilinear_:function(t,e,n=!1,r=!1){const a=dn(t,"images","resizeBilinear");b(3===a.rank||4===a.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`)),b(2===e.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`)),b(!1===r||!1===n,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=es(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=e,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:e},l=on.runKernel("ResizeBilinear",i,u);return o?es(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Al=mn({resizeNearestNeighbor_:function(t,e,n=!1,r=!1){const a=dn(t,"images","resizeNearestNeighbor");b(3===a.rank||4===a.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`)),b(2===e.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`)),b("float32"===a.dtype||"int32"===a.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),b(!1===r||!1===n,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=es(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=e,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:e},l=on.runKernel("ResizeNearestNeighbor",i,u);return o?es(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Il=mn({threshold_:function(t,e="binary",n=!1,r=.5){const a=dn(t,"image","threshold"),s=a.shape[0]*a.shape[1];let o,i,u,l,c=ss(pu([r]),255);if(b(3===a.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${a.rank}.`)),b(3===a.shape[2]||1===a.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${a.shape[2]}.`)),b("int32"===a.dtype||"float32"===a.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${a.dtype}.`)),b("otsu"===e||"binary"===e,(()=>`Method must be binary or otsu, but was ${e}`)),3===a.shape[2]){[o,i,u]=ru(a,[1,1,1],-1);const t=ss(o,.2989),e=ss(i,.587),n=ss(u,.114);l=fa(fa(t,e),n)}else l=t;if("otsu"===e){c=function(t,e){let n,r,a,s,o,i,u=pu([-1]),l=pu([0]),c=pu([0]);for(let p=0;p<t.size-1;p++){n=is(t,0,p+1),r=is(t,p+1),o=Ma(ro(n),e),i=Ma(ro(r),e);const h=ro(ss(n,Oi(0,n.size)));a=Ma(h,ro(n));const d=Ta(r.shape,n.size),f=fa(Oi(0,r.size),d),m=ss(r,f);s=Ma(ro(m),ro(r));const g=Mo(a,s),y=Mo(a,s),b=ss(o,i);c=ss(ss(b,g),y);const w=ho(c,l);l=Vs(w,c,l),u=Vs(w,pu([p]),u)}return u}(gs(pa(Ui(l),"int32"),bn([]),256),s)}const p=n?xo(l,c):ho(l,c);return pa(ss(p,255),"int32")}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ml=mn({transform_:function(t,e,n="nearest",r="constant",a=0,s){const o=dn(t,"image","transform","float32"),i=dn(e,"transforms","transform","float32");b(4===o.rank,(()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`)),b(2===i.rank&&(i.shape[0]===o.shape[0]||1===i.shape[0])&&8===i.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),b(null==s||2===s.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`));const u={image:o,transforms:i},l={interpolation:n,fillMode:r,fillValue:a,outputShape:s};return on.runKernel("Transform",u,l)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ol=mn({bandPart_:function(t,e,n){b(e%1==0,(()=>`bandPart(): numLower must be an integer, got ${e}.`)),b(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`));const r=dn(t,"a","bandPart");b(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const a=r.shape,[s,o]=r.shape.slice(-2);if(!(e<=s))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);e<0&&(e=s),n<0&&(n=o);const i=es(Oi(0,s,1,"int32"),[-1,1]),u=Oi(0,o,1,"int32"),l=Mo(i,u),c=Do(xo(l,to(+e,"int32")),fo(l,to(-n,"int32"))),p=Ko([s,o],r.dtype);return es(iu(vu(es(r,[-1,s,o])).map((t=>Vs(c,t,p)))),a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $l=mn({gramSchmidt_:function(t){let e;if(Array.isArray(t)){e=!1,b(null!=t&&t.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=t[0].shape[0];for(let e=1;e<t.length;++e)b(t[e].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[e].shape[0]} vs. ${n})`))}else e=!0,t=ru(t,t.shape[0],0).map((t=>ou(t,[0])));b(t.length<=t[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`));const n=[],r=t;for(let e=0;e<t.length;++e)n.push(on.tidy((()=>{let t=r[e];if(e>0)for(let r=0;r<e;++r){const e=ss(ro(ss(n[r],t)),n[r]);t=Mo(t,e)}return Ma(t,so(t,"euclidean"))})));return e?iu(n,0):n}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dl(t,e=!1){return on.tidy((()=>{b(2===t.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`));const n=t.shape[0],r=t.shape[1];let a=lo(n),s=ha(t);const o=hu([[1]],[1,1]);let i=ha(o);const u=n>=r?r:n;for(let t=0;t<u;++t){const e=s,u=i,l=a;[i,s,a]=on.tidy((()=>{const e=is(s,[t,t],[n-t,1]),u=so(e),l=is(s,[t,t],[1,1]),c=Vs(ho(l,0),hu([[-1]]),hu([[1]])),p=Mo(l,ss(c,u)),h=Ma(e,p);i=1===h.shape[0]?ha(o):Ea([o,is(h,[1,0],[h.shape[0]-1,h.shape[1]])],0);const d=_o(Ma(as(c,p),u)),f=is(s,[t,0],[n-t,r]),m=ss(d,i),g=Au(i);if(0===t)s=Mo(f,as(m,as(g,f)));else{const e=Mo(f,as(m,as(g,f)));s=Ea([is(s,[0,0],[t,r]),e],0)}const y=Au(m),b=is(a,[0,t],[n,a.shape[1]-t]);if(0===t)a=Mo(b,as(as(b,i),y));else{const e=Mo(b,as(as(b,i),y));a=Ea([is(a,[0,0],[n,t]),e],1)}return[i,s,a]})),_a([e,u,l])}return!e&&n>r&&(a=is(a,[0,0],[n,r]),s=is(s,[0,0],[r,r])),[a,s]}))}const Cl=mn({qr_:function(t,e=!1){if(b(t.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`)),2===t.rank)return Dl(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce(((t,e)=>t*e)),r=vu(es(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),a=[],s=[];r.forEach((t=>{const[n,r]=Dl(t,e);a.push(n),s.push(r)}));return[es(iu(a,0),t.shape),es(iu(s,0),t.shape)]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Fl,Rl;(Rl=Fl||(Fl={}))[Rl.NONE=0]="NONE",Rl[Rl.MEAN=1]="MEAN",Rl[Rl.SUM=2]="SUM",Rl[Rl.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";const Ll=mn({computeWeightedLoss_:function(t,e,n=Fl.SUM_BY_NONZERO_WEIGHTS){const r=dn(t,"losses","computeWeightedLoss");let a=null;null!=e&&(a=dn(e,"weights","computeWeightedLoss"));const s=null==a?r:ss(r,a);if(n===Fl.NONE)return s;if(n===Fl.SUM)return ro(s);if(n===Fl.MEAN){if(null==a)return Ho(s);{const t=r.size/a.size,e=Ma(ro(s),ro(a));return t>1?Ma(e,to(t)):e}}if(n===Fl.SUM_BY_NONZERO_WEIGHTS){if(null==a)return Ma(ro(s),to(r.size));{const t=ss(a,qo(r.shape)),e=pa(ro(ti(t,to(0))),"float32");return Ma(ro(s),e)}}throw Error(`Unknown reduction: ${n}`)}});const Bl=mn({absoluteDifference_:function(t,e,n,r=Fl.SUM_BY_NONZERO_WEIGHTS){const a=dn(t,"labels","absoluteDifference"),s=dn(e,"predictions","absoluteDifference");let o=null;null!=n&&(o=dn(n,"weights","absoluteDifference")),w(a.shape,s.shape,"Error in absoluteDifference: ");const i=Ca(Mo(a,s));return Ll(i,o,r)}});const Pl=mn({cosineDistance_:function(t,e,n,r,a=Fl.SUM_BY_NONZERO_WEIGHTS){const s=dn(t,"labels","cosineDistance"),o=dn(e,"predictions","cosineDistance");let i=null;null!=r&&(i=dn(r,"weights","cosineDistance")),w(s.shape,o.shape,"Error in cosineDistance: ");const u=to(1),l=Mo(u,ro(ss(s,o),n,!0));return Ll(l,i,a)}});const zl=mn({hingeLoss_:function(t,e,n,r=Fl.SUM_BY_NONZERO_WEIGHTS){let a=dn(t,"labels","hingeLoss");const s=dn(e,"predictions","hingeLoss");let o=null;null!=n&&(o=dn(n,"weights","hingeLoss")),w(a.shape,s.shape,"Error in hingeLoss: ");const i=to(1);a=Mo(ss(to(2),a),i);const u=Ci(Mo(i,ss(a,s)));return Ll(u,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ul=mn({huberLoss_:function(t,e,n,r=1,a=Fl.SUM_BY_NONZERO_WEIGHTS){const s=dn(t,"labels","huberLoss"),o=dn(e,"predictions","huberLoss");let i=null;null!=n&&(i=dn(n,"weights","huberLoss")),w(s.shape,o.shape,"Error in huberLoss: ");const u=to(r),l=Ca(Mo(o,s)),c=Go(l,u),p=Mo(l,c),h=fa(ss(to(.5),no(c)),ss(u,p));return Ll(h,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vl=mn({logLoss_:function(t,e,n,r=1e-7,a=Fl.SUM_BY_NONZERO_WEIGHTS){const s=dn(t,"labels","logLoss"),o=dn(e,"predictions","logLoss");let i=null;null!=n&&(i=dn(n,"weights","logLoss")),w(s.shape,o.shape,"Error in logLoss: ");const u=to(1),l=to(r),c=_o(ss(s,ko(fa(o,l)))),p=ss(Mo(u,s),ko(fa(Mo(u,o),l))),h=Mo(c,p);return Ll(h,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jl=mn({meanSquaredError_:function(t,e,n,r=Fl.SUM_BY_NONZERO_WEIGHTS){const a=dn(t,"labels","meanSquaredError"),s=dn(e,"predictions","meanSquaredError");let o=null;null!=n&&(o=dn(n,"weights","meanSquaredError")),w(a.shape,s.shape,"Error in meanSquaredError: ");const i=su(a,s);return Ll(i,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=mn({sigmoidCrossEntropy_:function(t,e,n,r=0,a=Fl.SUM_BY_NONZERO_WEIGHTS){let s=dn(t,"multiClassLabels","sigmoidCrossEntropy");const o=dn(e,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=dn(n,"weights","sigmoidCrossEntropy")),w(s.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const t=to(r),e=to(1),n=to(.5);s=fa(ss(s,Mo(e,t)),ss(n,t))}const u=function(t,e){const n=dn(t,"labels","sigmoidCrossEntropyWithLogits"),r=dn(e,"logits","sigmoidCrossEntropyWithLogits");w(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=Ci(r),s=ss(r,n),o=Eo(Oa(_o(Ca(r))));return fa(Mo(a,s),o)}(s,o);return Ll(u,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kl=mn({softmaxCrossEntropy_:function(t,e,n,r=0,a=Fl.SUM_BY_NONZERO_WEIGHTS){let s=dn(t,"onehotLabels","softmaxCrossEntropy");const o=dn(e,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=dn(n,"weights","softmaxCrossEntropy")),w(s.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const t=to(r),e=to(1),n=to(s.shape[1]);s=fa(ss(s,Mo(e,t)),Ma(t,n))}const u=function(t,e,n=-1){if(-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);const r=So(((t,e,r)=>{const a=$o(e,[n],!0),s=Mo(pa(e,"float32"),a);r([t,s]);const o=_o(ss(s,t));return{value:ro(o,[n]),gradFunc:(t,e)=>{const[r,a]=e,s=Xs(t.shape,[n]);return[ss(es(t,s),Mo(pa(r,"float32"),Oa(a))),ss(es(t,s),Mo(Oa(a),pa(r,"float32")))]}}}));return r(t,e)}(s,o);return Ll(u,i,a)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ql=mn({sparseFillEmptyRows_:function(t,e,n,r){const a=dn(t,"indices","sparseFillEmptyRows","int32"),s=dn(e,"values","sparseFillEmptyRows"),o=dn(n,"denseShape","sparseFillEmptyRows","int32"),i=dn(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(2!==a.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${a.shape}`);if(1!==s.rank)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(1!==o.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(0!==i.rank)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:a,values:s,denseShape:o,defaultValue:i},l=on.runKernel("SparseFillEmptyRows",u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wl=mn({sparseReshape_:function(t,e,n){const r=dn(t,"inputIndices","sparseReshape","int32"),a=dn(e,"inputShape","sparseReshape","int32"),s=dn(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==a.rank)throw new Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(1!==s.rank)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const o={inputIndices:r,inputShape:a,newShape:s},i=on.runKernel("SparseReshape",o);return{outputIndices:i[0],outputShape:i[1]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gl=mn({sparseSegmentMean_:function(t,e,n){const r=dn(t,"data","sparseSegmentMean"),a=dn(e,"indices","sparseSegmentMean","int32"),s=dn(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return on.runKernel("SparseSegmentMean",o)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yl=mn({sparseSegmentSum_:function(t,e,n){const r=dn(t,"data","sparseSegmentSum"),a=dn(e,"indices","sparseSegmentSum","int32"),s=dn(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return on.runKernel("SparseSegmentSum",o)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xl=mn({stringNGrams_:function(t,e,n,r,a,s,o,i){const u=dn(t,"data","stringNGrams","string");if("string"!==u.dtype)throw new Error("Data must be of datatype string");if(1!==u.shape.length)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=dn(e,"dataSplits","stringNGrams");if("int32"!==l.dtype)throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:a,rightPad:s,padWidth:o,preserveShortSequences:i},p={data:u,dataSplits:l},h=on.runKernel("StringNGrams",p,c);return{nGrams:h[0],nGramsSplits:h[1]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jl=mn({stringSplit_:function(t,e,n=!0){const r=dn(t,"input","stringSplit","string"),a=dn(e,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==a.rank)throw new Error(`Delimiter should be a scalar but received shape ${a.shape}`);const s={skipEmpty:n},o={input:r,delimiter:a},i=on.runKernel("StringSplit",o,s);return{indices:i[0],values:i[1],shape:i[2]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zl=mn({stringToHashBucketFast_:function(t,e){const n=dn(t,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const a={input:n};return on.runKernel("StringToHashBucketFast",a,r)}}),Ql={fft:tu,ifft:eu,rfft:au,irfft:nu},tc={hammingWindow:rl,hannWindow:al,frame:sl,stft:ol},ec={flipLeftRight:ul,grayscaleToRGB:ll,resizeNearestNeighbor:Al,resizeBilinear:_l,rotateWithOffset:cl,cropAndResize:il,nonMaxSuppression:hl,nonMaxSuppressionAsync:Nl,nonMaxSuppressionWithScore:Tl,nonMaxSuppressionWithScoreAsync:kl,nonMaxSuppressionPadded:El,nonMaxSuppressionPaddedAsync:Sl,threshold:Il,transform:Ml},nc={bandPart:Ol,gramSchmidt:$l,qr:Cl},rc={absoluteDifference:Bl,computeWeightedLoss:Ll,cosineDistance:Pl,hingeLoss:zl,huberLoss:Ul,logLoss:Vl,meanSquaredError:jl,sigmoidCrossEntropy:Hl,softmaxCrossEntropy:Kl},ac={sparseFillEmptyRows:ql,sparseReshape:Wl,sparseSegmentMean:Gl,sparseSegmentSum:Yl},sc={stringNGrams:Xl,stringSplit:Jl,stringToHashBucketFast:Zl};n(Da,Eu),n(Da,_u),n(Da,Ys),n(Da,Iu),n(Da,Ou),n(Da,Lo),n(Da,Cu),n(Da,Ru),n(Da,Bu),n(Da,Uu),n(Da,Hu);var oc={};t(oc,"copyModel",(()=>sa)),t(oc,"listModels",(()=>ra)),t(oc,"moveModel",(()=>oa)),t(oc,"removeModel",(()=>aa)),t(oc,"browserFiles",(()=>cc)),t(oc,"browserHTTPRequest",(()=>wc)),t(oc,"concatenateArrayBuffers",(()=>kr)),t(oc,"decodeWeights",(()=>br)),t(oc,"encodeWeights",(()=>yr)),t(oc,"fromMemory",(()=>Tc)),t(oc,"fromMemorySync",(()=>kc)),t(oc,"getLoadHandlers",(()=>Rr)),t(oc,"getModelArtifactsForJSON",(()=>Ar)),t(oc,"getModelArtifactsForJSONSync",(()=>_r)),t(oc,"getModelArtifactsInfoForJSON",(()=>Ir)),t(oc,"getSaveHandlers",(()=>Fr)),t(oc,"getWeightSpecs",(()=>Mr)),t(oc,"http",(()=>bc)),t(oc,"isHTTPScheme",(()=>gc)),t(oc,"loadWeights",(()=>dc)),t(oc,"registerLoadRouter",(()=>Cr)),t(oc,"registerSaveRouter",(()=>Dr)),t(oc,"weightsLoaderFactory",(()=>fc)),t(oc,"withSaveHandler",(()=>Ec)),t(oc,"withSaveHandlerSync",(()=>Sc));function ic(t){return new Promise((t=>setTimeout(t))).then(t)}class uc{constructor(t){if(!ot().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(uc.URL_SCHEME)&&(t=t.slice(uc.URL_SCHEME.length)),null!=t&&0!==t.length||(t="model"),this.modelJsonFileName=t+".json",this.weightDataFileName=t+".weights.bin"}async save(t){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=Sr(t,[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=r,await ic((()=>a.dispatchEvent(new MouseEvent("click")))),null!=t.weightData){const t=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;t.download=this.weightDataFileName,t.href=e,await ic((()=>t.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:Ir(t)}}}}uc.URL_SCHEME="downloads://";class lc{constructor(t){if(null==t||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise(((t,e)=>{const n=new FileReader;n.onload=n=>{const r=JSON.parse(n.target.result),a=r.modelTopology;if(null==a)return void e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));if(null==r.weightsManifest)return void e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void t({modelTopology:a});const s=Ar(r,(t=>this.loadWeights(t)));t(s)},n.onerror=t=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)}))}loadWeights(t){const e=[],n=[];for(const r of t)e.push(...r.weights),n.push(...r.paths);const r=this.checkManifestAndWeightFiles(t),a=n.map((t=>this.loadWeightsFile(t,r[t])));return Promise.all(a).then((t=>[e,kr(t)]))}loadWeightsFile(t,e){return new Promise(((n,r)=>{const a=new FileReader;a.onload=t=>{const e=t.target.result;n(e)},a.onerror=e=>r(`Failed to weights data from file of path '${t}'.`),a.readAsArrayBuffer(e)}))}checkManifestAndWeightFiles(t){const e=[],n=this.weightsFiles.map((t=>Er(t.name))),r={};for(const a of t)a.paths.forEach((t=>{const a=Er(t);if(-1!==e.indexOf(a))throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(e.push(a),-1===n.indexOf(a))throw new Error(`Weight file with basename '${a}' is not provided.`);r[t]=this.weightsFiles[n.indexOf(a)]}));if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}function cc(t){return new lc(t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pc(t,e,n,r){!function(t){b(null!=t&&Array.isArray(t)&&t.length>0,(()=>"promises must be a none empty array"))}(t),function(t,e){b(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${t}`)),b(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${e}`)),b(e>=t,(()=>`startFraction must be no more than endFraction, but got startFraction ${t} and endFraction ${e}`))}(n=null==n?0:n,r=null==r?1:r);let a=0;return Promise.all(t.map((s=>(s.then((s=>{const o=n+ ++a/t.length*(r-n);return e(o),s})),s))))}async function hc(t,e){null==e&&(e={});const n=null==e.fetchFunc?ot().platform.fetch:e.fetchFunc,r=t.map((t=>n(t,e.requestInit,{isBinary:!0}))),a=(null==e.onProgress?await Promise.all(r):await pc(r,e.onProgress,0,.5)).map((t=>t.arrayBuffer()));return null==e.onProgress?await Promise.all(a):await pc(a,e.onProgress,.5,1)}async function dc(t,e="",n,r){return fc((t=>hc(t,{requestInit:r})))(t,e,n)}function fc(t){return async(e,n="",r)=>{const a=e.map((()=>!1)),s={},o=null!=r?r.map((()=>!1)):[],i=[];if(e.forEach(((t,e)=>{let n=0;t.weights.forEach((t=>{const u="quantization"in t?t.quantization.dtype:t.dtype,l=wn[u]*N(t.shape),c=()=>{a[e]=!0,null==s[e]&&(s[e]=[]),s[e].push({manifestEntry:t,groupOffset:n,sizeBytes:l})};null!=r?r.forEach(((e,n)=>{e===t.name&&(c(),o[n]=!0)})):c(),i.push(t.name),n+=l}))})),!o.every((t=>t))){const t=r.filter(((t,e)=>!o[e]));throw new Error(`Could not find weights in manifest with names: ${t.join(", ")}. \nManifest JSON has weights with names: ${i.join(", ")}.`)}const u=a.reduce(((t,e,n)=>(e&&t.push(n),t)),[]),l=[];u.forEach((t=>{e[t].paths.forEach((t=>{const e=n+(n.endsWith("/")?"":"/")+t;l.push(e)}))}));const c=await t(l),p={};let h=0;return u.forEach((t=>{const n=e[t].paths.length;let r=0;for(let t=0;t<n;t++)r+=c[h+t].byteLength;const a=new ArrayBuffer(r),o=new Uint8Array(a);let i=0;for(let t=0;t<n;t++){const e=new Uint8Array(c[h+t]);o.set(e,i),i+=e.byteLength}s[t].forEach((t=>{const e=br(a.slice(t.groupOffset,t.groupOffset+t.sizeBytes),[t.manifestEntry]);for(const t in e)p[t]=e[t]})),h+=n})),p}}$r.registerSaveRouter((t=>ot().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(uc.URL_SCHEME)?function(t="model"){return new uc(t)}(t.slice(uc.URL_SCHEME.length)):null));class mc{constructor(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,null!=e.fetchFunc?(b("function"==typeof e.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=e.fetchFunc):this.fetch=ot().platform.fetch,b(null!=t&&t.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(t)&&b(2===t.length,(()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`)),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const n=Sr(t,[{paths:["./model.weights.bin"],weights:t.weightSpecs}]);e.body.append("model.json",new Blob([JSON.stringify(n)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin");const r=await this.fetch(this.path,e);if(r.ok)return{modelArtifactsInfo:Ir(t),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",new Error(e)}const n=e.modelTopology,r=e.weightsManifest;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ar(e,(t=>this.loadWeights(t)))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),a=n>e?t.substring(n):"";return[r+"/",a]}(e),a=this.weightPathPrefix||n,s=Mr(t),o=[],i=[];for(const e of t)for(const t of e.paths)null!=this.weightUrlConverter?i.push(this.weightUrlConverter(t)):o.push(a+t+r);this.weightUrlConverter&&o.push(...await Promise.all(i));return[s,kr(await hc(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function gc(t){return null!=t.match(mc.URL_SCHEME_REGEX)}mc.URL_SCHEME_REGEX=/^https?:\/\//;const yc=(t,e)=>{if("undefined"==typeof fetch&&(null==e||null==e.fetchFunc))return null;{let n=!0;if(n=Array.isArray(t)?t.every((t=>gc(t))):gc(t),n)return bc(t,e)}return null};function bc(t,e){return new mc(t,e)}function wc(t,e){return bc(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */$r.registerSaveRouter(yc),$r.registerLoadRouter(yc);class vc{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class xc{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Nc{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}}function Tc(t,e,n,r){const a=arguments;return new Nc(kc(...a))}function kc(t,e,n,r){if(1===arguments.length){return null!=t.modelTopology||null!=t.weightSpecs?new vc(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new vc({modelTopology:t}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new vc({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r})}function Ec(t){return new xc(t)}function Sc(t){return new xc(t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var _c,Ac,Ic;ot().registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),(Ac=_c||(_c={}))[Ac.DT_INVALID=0]="DT_INVALID",Ac[Ac.DT_FLOAT=1]="DT_FLOAT",Ac[Ac.DT_DOUBLE=2]="DT_DOUBLE",Ac[Ac.DT_INT32=3]="DT_INT32",Ac[Ac.DT_UINT8=4]="DT_UINT8",Ac[Ac.DT_INT16=5]="DT_INT16",Ac[Ac.DT_INT8=6]="DT_INT8",Ac[Ac.DT_STRING=7]="DT_STRING",Ac[Ac.DT_COMPLEX64=8]="DT_COMPLEX64",Ac[Ac.DT_INT64=9]="DT_INT64",Ac[Ac.DT_BOOL=10]="DT_BOOL",Ac[Ac.DT_QINT8=11]="DT_QINT8",Ac[Ac.DT_QUINT8=12]="DT_QUINT8",Ac[Ac.DT_QINT32=13]="DT_QINT32",Ac[Ac.DT_BFLOAT16=14]="DT_BFLOAT16",Ac[Ac.DT_QINT16=15]="DT_QINT16",Ac[Ac.DT_QUINT16=16]="DT_QUINT16",Ac[Ac.DT_UINT16=17]="DT_UINT16",Ac[Ac.DT_COMPLEX128=18]="DT_COMPLEX128",Ac[Ac.DT_HALF=19]="DT_HALF",Ac[Ac.DT_RESOURCE=20]="DT_RESOURCE",Ac[Ac.DT_VARIANT=21]="DT_VARIANT",Ac[Ac.DT_UINT32=22]="DT_UINT32",Ac[Ac.DT_UINT64=23]="DT_UINT64",Ac[Ac.DT_FLOAT_REF=101]="DT_FLOAT_REF",Ac[Ac.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",Ac[Ac.DT_INT32_REF=103]="DT_INT32_REF",Ac[Ac.DT_UINT8_REF=104]="DT_UINT8_REF",Ac[Ac.DT_INT16_REF=105]="DT_INT16_REF",Ac[Ac.DT_INT8_REF=106]="DT_INT8_REF",Ac[Ac.DT_STRING_REF=107]="DT_STRING_REF",Ac[Ac.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",Ac[Ac.DT_INT64_REF=109]="DT_INT64_REF",Ac[Ac.DT_BOOL_REF=110]="DT_BOOL_REF",Ac[Ac.DT_QINT8_REF=111]="DT_QINT8_REF",Ac[Ac.DT_QUINT8_REF=112]="DT_QUINT8_REF",Ac[Ac.DT_QINT32_REF=113]="DT_QINT32_REF",Ac[Ac.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",Ac[Ac.DT_QINT16_REF=115]="DT_QINT16_REF",Ac[Ac.DT_QUINT16_REF=116]="DT_QUINT16_REF",Ac[Ac.DT_UINT16_REF=117]="DT_UINT16_REF",Ac[Ac.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",Ac[Ac.DT_HALF_REF=119]="DT_HALF_REF",Ac[Ac.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",Ac[Ac.DT_VARIANT_REF=121]="DT_VARIANT_REF",Ac[Ac.DT_UINT32_REF=122]="DT_UINT32_REF",Ac[Ac.DT_UINT64_REF=123]="DT_UINT64_REF",function(t){let e;!function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"}(e=t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))}(Ic||(Ic={}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Mc={};function Oc(t){return Mc[t]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $c(t,e,n,r,a){const s=e.inputParams[t];if(s&&void 0!==s.inputIndexStart){const t=s.inputIndexStart,o=0===s.inputIndexEnd?void 0:void 0===s.inputIndexEnd?t+1:s.inputIndexEnd;if("tensor"===s.type)return Dc(e.inputNames[s.inputIndexStart],n,r,a);if("tensors"===s.type){return e.inputNames.slice(t,o).map((t=>Dc(t,n,r,a)))}const i=Dc(e.inputNames.slice(t)[0],n,r,a),u=i.dataSync();return"number"===s.type?u[0]:$d2cc08cc2aa8032f$exports.util.toNestedArray(i.shape,u)}const o=e.attrParams[t];return o&&o.value}function Dc(t,e,n,r){const[a,s]=Lc(t);if(null!=r){const t=r.getHashTableHandleByName(a);if(null!=t)return t}const o=n.currentContextIds.find((t=>!!e[Rc(a,t)]));return void 0!==o?e[Rc(a,o)][s]:void 0}function Cc(t,e,n){return e[Rc(t,n.currentContextId)]}function Fc(t,e){const[n,r,a]=Lc(t);return[Rc(n,e&&e.currentContextId),r,a]}function Rc(t,e){return e?`${t}-${e}`:t}function Lc(t){const e=t.split(":");if(1===e.length)return[t,0,void 0];const n=e[0],r=3===e.length?e[1]:void 0;return[n,Number(e[e.length-1]),r]}function Bc(t,e,n){let r=$c("pad",t,e,n);if("explicit"===r){r=$c("explicitPaddings",t,e,n);const a=[[0,0],[0,0],[0,0],[0,0]];for(let t=0;t<4;t++)a[t][0]=r[2*t],a[t][1]=r[2*t+1];return a}return r}function Pc(t){return t.kept?t:ha(t)}var zc={};t(zc,"json",(()=>Uc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Uc=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Vc={};t(Vc,"json",(()=>jc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const jc=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Hc={};t(Hc,"json",(()=>Kc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Kc=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var qc={};t(qc,"json",(()=>Wc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Wc=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var Gc={};t(Gc,"json",(()=>Yc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Yc=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var Xc={};t(Xc,"json",(()=>Jc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jc=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Zc={};t(Zc,"json",(()=>Qc));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Qc=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var tp={};t(tp,"json",(()=>ep));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ep=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var np={};t(np,"json",(()=>rp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const rp=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var ap={};t(ap,"json",(()=>sp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sp=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var op={};t(op,"json",(()=>ip));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ip=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var up={};t(up,"json",(()=>lp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const lp=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var cp={};t(cp,"json",(()=>pp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const pp=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var hp={};t(hp,"json",(()=>dp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const dp=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var fp={};t(fp,"json",(()=>mp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mp=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var gp={};t(gp,"json",(()=>yp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const yp=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var bp={};t(bp,"json",(()=>wp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wp=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var vp={};t(vp,"json",(()=>xp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xp=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var Np={};t(Np,"json",(()=>Tp));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Tp=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var kp=vn;class Ep{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[].concat(...[zc,Vc,Hc,qc,Gc,Xc,Zc,tp,np,ap,op,up,cp,hp,fp,gp,bp,vp,Np].map((t=>t.json)));this.opMappers=t.reduce(((t,e)=>(t[e.tfOpName]=e,t)),{})}transformGraph(t,e={}){const n=t.node,r=[],a=[],s=[],o=n.reduce(((t,e)=>(t[e.name]=this.mapNode(e),e.op.startsWith("Placeholder")?r.push(t[e.name]):"Const"===e.op?a.push(t[e.name]):null!=e.input&&0!==e.input.length||s.push(t[e.name]),t)),{});let i=[];const u=[];let l={},c={};null!=e&&(l=this.mapSignatureEntries(e.inputs),c=this.mapSignatureEntries(e.outputs));const p=Object.keys(o);p.forEach((t=>{const e=o[t];e.inputNames.forEach(((t,n)=>{const[r,,a]=Fc(t),s=o[r];if(null!=s.outputs){const t=s.outputs.indexOf(a);if(-1!==t){const a=`${r}:${t}`;e.inputNames[n]=a}}e.inputs.push(s),s.children.push(e)}))})),0===Object.keys(c).length?p.forEach((t=>{const e=o[t];0===e.children.length&&u.push(e)})):Object.keys(c).forEach((t=>{const[e]=Fc(t),n=o[e];null!=n&&(n.signatureKey=c[t],u.push(n))})),Object.keys(l).length>0?Object.keys(l).forEach((t=>{const[e]=Fc(t),n=o[e];n&&(n.signatureKey=l[t],i.push(n))})):i=r;let h={};null!=t.library&&null!=t.library.function&&(h=t.library.function.reduce(((t,e)=>(t[e.signature.name]=this.mapFunction(e),t)),{}));const d={nodes:o,inputs:i,outputs:u,weights:a,placeholders:r,signature:e,functions:h};return s.length>0&&(d.initNodes=s),d}mapSignatureEntries(t){return Object.keys(t||{}).reduce(((e,n)=>(e[t[n].name]=n,e)),{})}mapNode(t){const e=Oc(t.op)||this.opMappers[t.op]||{};null==t.attr&&(t.attr={});const n={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map((t=>t.startsWith("^")?t.slice(1):t)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return null!=e.inputs&&(n.inputParams=e.inputs.reduce(((t,e)=>(t[e.name]={type:e.type,inputIndexStart:e.start,inputIndexEnd:e.end},t)),{})),null!=e.attrs&&(n.attrParams=e.attrs.reduce(((e,n)=>{const r=n.type;let a;switch(n.type){case"string":a=_p(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=_p(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":a=Lp(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Lp(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":a=Ip(t.attr,n.tfName,n.defaultValue||0),void 0===a&&n.tfDeprecatedName&&(a=Ip(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":a=Rp(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Rp(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":a=Ap(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Ap(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":a=Pp(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Pp(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":a=Fp(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Fp(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":a=Bp(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Bp(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":a=$p(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=$p(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":a=Dp(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Dp(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":a=Op(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Op(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`)}return e[n.name]={value:a,type:r},e}),{})),n}mapFunction(t){const e=t.nodeDef,n=[];let r={};null!=e&&(r=e.reduce(((t,e)=>(t[e.name]=this.mapNode(e),"Const"===e.op&&n.push(t[e.name]),t)),{}));const a=[],s=[];t.signature.inputArg.forEach((t=>{const[e]=Fc(t.name),n={name:e,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Mp(t.type),type:"dtype"}},children:[]};n.signatureKey=t.name,a.push(n),r[e]=n}));Object.keys(r).forEach((t=>{const e=r[t];e.inputNames.forEach(((t,n)=>{const[a,,s]=Fc(t),o=r[a];if(null!=o.outputs){const t=o.outputs.indexOf(s);if(-1!==t){const r=`${a}:${t}`;e.inputNames[n]=r}}e.inputs.push(o),o.children.push(e)}))}));const o=t.ret;t.signature.outputArg.forEach((t=>{const[e,n]=Fc(o[t.name]),a=r[e];null!=a&&(a.defaultOutput=n,s.push(a))}));const i=this.mapArgsToSignature(t);return{nodes:r,inputs:a,outputs:s,weights:n,placeholders:[],signature:i}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce(((t,e)=>(t[e.name]=this.mapArgToTensorInfo(e),t)),{}),outputs:t.signature.outputArg.reduce(((e,n)=>(e[n.name]=this.mapArgToTensorInfo(n,t.ret),e)),{})}}mapArgToTensorInfo(t,e){let n=t.name;return null!=e&&(n=e[n]),{name:n,dtype:t.type}}}function Sp(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):function(t){const e=ot().global;if(void 0!==e.atob)return e.atob(t);if(void 0!==kp)return new kp(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(t);return e?n:n.toLowerCase()}function _p(t,e,n,r=!1){const a=t[e];return null!=a?Sp(a.s,r):n}function Ap(t,e,n){const r=t[e];return r?r.b:n}function Ip(t,e,n){const r=t[e]||{},a=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof a?a:parseInt(a,10)}function Mp(t){switch("string"==typeof t&&(t=_c[t]),t){case _c.DT_FLOAT:case _c.DT_HALF:return"float32";case _c.DT_INT32:case _c.DT_INT64:case _c.DT_INT8:case _c.DT_UINT8:return"int32";case _c.DT_BOOL:return"bool";case _c.DT_DOUBLE:return"float32";case _c.DT_STRING:return"string";default:return null}}function Op(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function $p(t,e,n){const r=t[e];return r&&r.type?Mp(r.type):n}function Dp(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map((t=>Mp(t))):n}function Cp(t){if(!t.unknownRank)return null!=t.dim?t.dim.map((t=>"number"==typeof t.size?t.size:parseInt(t.size,10))):[]}function Fp(t,e,n){const r=t[e];return r&&r.shape?Cp(r.shape):n}function Rp(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map((t=>"number"==typeof t?t:parseInt(t,10))):n}function Lp(t,e,n,r=!1){const a=t[e];return a&&a.list&&a.list.s?a.list.s.map((t=>Sp(t,r))):n}function Bp(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map((t=>Cp(t))):n}function Pp(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zp{constructor(t,e,n){this.node=t,this.tensorMap=e,this.context=n,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map((t=>this.getInput(t))),null!=t.rawAttrs&&(this.attrs=Object.keys(t.rawAttrs).reduce(((t,e)=>(t[e]=this.getAttr(e),t)),{}))}getInput(t){return Dc(t,this.tensorMap,this.context)}getAttr(t,e){const n=this.node.rawAttrs[t];if(null!=n.tensor)return Dc(t,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return Ip(this.node.rawAttrs,t,e);if(null!=n.s)return _p(this.node.rawAttrs,t,e);if(null!=n.b)return Ap(this.node.rawAttrs,t,e);if(null!=n.shape)return Fp(this.node.rawAttrs,t,e);if(null!=n.type)return $p(this.node.rawAttrs,t,e);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return Rp(this.node.rawAttrs,t,e);if(null!=n.list.s)return Lp(this.node.rawAttrs,t,e);if(null!=n.list.shape)return Bp(this.node.rawAttrs,t,e);if(null!=n.list.b)return Pp(this.node.rawAttrs,t,e);if(null!=n.list.type)return Dp(this.node.rawAttrs,t,e)}return e}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Up={};t(Up,"*",(()=>$2937f01f2600aea0$exports)),t(Up,"scalar",(()=>to)),
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
n(Up,Da);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vp(t,e,n=""){if("number"!=typeof t&&"number"!=typeof e){$d2cc08cc2aa8032f$exports.util.assert(t.length===e.length,(()=>n+` Shapes ${t} and ${e} must match`));for(let r=0;r<t.length;r++){const a=t[r],s=e[r];$d2cc08cc2aa8032f$exports.util.assert(a<0||s<0||a===s,(()=>n+` Shapes ${t} and ${e} must match`))}}}function jp(t){return"number"!=typeof t&&!t.some((t=>t<0))}function Hp(t,e,n){let r=Kp(t,n);const a=!jp(r);if(a&&0===e.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(a&&e.forEach((t=>{r=Kp(t.shape,r)})),!jp(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Kp(t,e){if("number"==typeof t)return e;if("number"==typeof e)return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let r=0;r<t.length;++r){const a=t[r],s=e[r];if(a>=0&&s>=0&&a!==s)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[r]=a>=0?a:s}return n}class qp{constructor(t,e,n,r,a,s,o){this.name=t,this.dtype=e,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=s,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=to(0),Aa(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach((e=>{null!=t&&t.has(e.tensor.id)||e.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map((t=>this.read(t)))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},\n          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=e.shape),Vp(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);n.tensor=e,Aa(e),n.written=!0,this.tensors[t]=n}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach(((t,n)=>this.write(t,e[n])))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let e=0;e<this.size();e++)t.push(e)}if(0===t.length)return bn([],[0].concat(this.elementShape));const n=this.readMany(t);return Vp(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),iu(n,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(0===this.size())return bn([],[0].concat(this.elementShape));const e=[];for(let t=0;t<this.size();t++)e.push(t);const n=this.readMany(e);return Vp(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),Ea(n,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const n=Math.max(...t);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(t,vu(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let n=0;const r=t.map((t=>(n+=t,n)));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=0===n?0:e.size/n,s=[];Sa((()=>{e=es(e,[1,n,a]);for(let n=0;n<t.length;++n){const o=[0,0===n?0:r[n-1],0],i=[1,t[n],a];s[n]=es(is(e,o,i),this.elementShape)}return s}));const o=[];for(let e=0;e<t.length;e++)o[e]=e;this.writeMany(o,s)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wp{constructor(t,e,n,r=-1){this.tensors=t,this.elementShape=e,this.elementDtype=n,null!=t&&t.forEach((t=>{if(n!==t.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${t.dtype}`);Vp(e,t.shape,"TensorList shape mismatch: "),Aa(t)})),this.idTensor=to(0),this.maxNumElements=r,Aa(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Wp([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach((e=>{null!=t&&t.has(e.id)||e.dispose()})),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,n=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);Vp(t,this.elementShape,"TensorList shape mismatch: ");const r=Hp(this.elementShape,this.tensors,t);return Sa((()=>{const t=this.tensors.map((t=>es(t,r)));return iu(t,0)}))}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=Hp(this.elementShape,this.tensors,t),r=this.tensors.pop();return r.kept=!1,Vp(r.shape,t,"TensorList shape mismatch: "),es(r,n)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Vp(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Aa(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(-1!==this.maxNumElements&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const e=new Wp([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let n=0;n<Math.min(this.tensors.length,t);++n)e.tensors[n]=this.tensors[n];return e}getItem(t,e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[t])throw new Error(`element at index ${t} is null.`);Vp(this.tensors[t].shape,e,"TensorList shape mismatch: ");const r=Hp(this.elementShape,this.tensors,e);return es(this.tensors[t],r)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||-1!==this.maxNumElements&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Vp(this.elementShape,e.shape,"TensorList shape mismatch: "),Aa(e),null!=this.tensors[t]&&(this.tensors[t].kept=!1),this.tensors[t]=e}gather(t,e,n){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);Vp(this.elementShape,n,"TensorList shape mismatch: "),t=t.slice(0,this.size());const r=Hp(this.elementShape,this.tensors,n);return 0===t.length?bn([],[0].concat(r)):Sa((()=>{const e=t.map((t=>es(this.tensors[t],r)));return iu(e,0)}))}concat(t,e){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Vp(this.elementShape,e,"TensorList shape mismatch: ");const n=Hp(this.elementShape,this.tensors,e);return 0===this.size()?bn([],[0].concat(n)):Sa((()=>{const t=this.tensors.map((t=>es(t,n)));return Ea(t,0)}))}}function Gp(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);Vp(t.shape.slice(1),e,"TensorList shape mismatch: ");const a=vu(t);return new Wp(a,e,r)}function Yp(t,e,n,r){return new Wp([],t,e,r)}function Xp(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const a=Math.max(...e);if(null!=r&&-1!==r&&a>=r)throw new Error(`Max index must be < array size (${a}  vs. ${r})`);const s=new Wp([],n,t.dtype,r),o=vu(t,0);return e.forEach(((t,e)=>{s.setItem(t,o[e])})),s}function Jp(t,e,n){let r=0;const a=e.map((t=>(r+=t,r)));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${r}, and tensor's shape is: ${t.shape}`);const s=Kp(t.shape.slice(1),n),o=0===r?0:t.size/r,i=Sa((()=>{const n=[];t=es(t,[1,r,o]);for(let r=0;r<e.length;++r){const i=[0,0===r?0:a[r-1],0],u=[1,e[r],o];n[r]=es(is(t,i,u),s)}return t.dispose(),n})),u=new Wp([],n,t.dtype,e.length);for(let t=0;t<i.length;t++)u.setItem(t,i[t]);return u}const Zp=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=$c("thenBranch",t,e,n),a=$c("elseBranch",t,e,n),s=$c("cond",t,e,n),o=$c("args",t,e,n);return(await s.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=$c("body",t,e,n),a=$c("cond",t,e,n),s=$c("args",t,e,n),o=await n.functionMap[a].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap),i=s.map((t=>t.id));let u=await o[0].data();o.forEach((t=>{t.kept||-1!==i.indexOf(t.id)||t.dispose()}));let l=s;for(;u[0];){const t=l;l=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);const e=l.map((t=>t.id));t.forEach((t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()}));const s=await n.functionMap[a].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);u=await s[0].data(),s.forEach((t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()}))}return l}case"LoopCond":return[Pc($c("pred",t,e,n))];case"Switch":{const r=$c("pred",t,e,n);let a=$c("data",t,e,n);return a.kept||(a=Pc(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{const r=t.inputNames.find((t=>void 0!==Dc(t,e,n)));if(r){return[Pc(Dc(r,e,n))]}return}case"Enter":{const r=$c("frameName",t,e,n),a=$c("tensor",t,e,n);return n.enterFrame(r),[Pc(a)]}case"Exit":{const r=$c("tensor",t,e,n);return n.exitFrame(),[Pc(r)]}case"NextIteration":{const r=$c("tensor",t,e,n);return n.nextIteration(),[Pc(r)]}case"TensorArrayV3":{const r=$c("size",t,e,n),a=$c("dtype",t,e,n),s=$c("elementShape",t,e,n),o=$c("dynamicSize",t,e,n),i=$c("clearAfterRead",t,e,n),u=$c("identicalElementShapes",t,e,n),l=$c("name",t,e,n),c=new qp(l,a,r,s,u,o,i);return n.addTensorArray(c),[c.idTensor,to(1)]}case"TensorArrayWriteV3":{const r=$c("tensorArrayId",t,e,n),a=$c("index",t,e,n),s=$c("tensor",t,e,n),o=n.getTensorArray(r.id);return o.write(a,s),[o.idTensor]}case"TensorArrayReadV3":{const r=$c("tensorArrayId",t,e,n),a=$c("index",t,e,n);return[n.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{const r=$c("tensorArrayId",t,e,n),a=$c("indices",t,e,n),s=$c("dtype",t,e,n);return[n.getTensorArray(r.id).gather(a,s)]}case"TensorArrayScatterV3":{const r=$c("tensorArrayId",t,e,n),a=$c("indices",t,e,n),s=$c("tensor",t,e,n),o=n.getTensorArray(r.id);return o.scatter(a,s),[o.idTensor]}case"TensorArrayConcatV3":{const r=$c("tensorArrayId",t,e,n),a=n.getTensorArray(r.id),s=$c("dtype",t,e,n);return[a.concat(s)]}case"TensorArraySplitV3":{const r=$c("tensorArrayId",t,e,n),a=$c("tensor",t,e,n),s=$c("lengths",t,e,n),o=n.getTensorArray(r.id);return o.split(s,a),[o.idTensor]}case"TensorArraySizeV3":{const r=$c("tensorArrayId",t,e,n);return[to(n.getTensorArray(r.id).size(),"int32")]}case"TensorArrayCloseV3":{const r=$c("tensorArrayId",t,e,n),a=n.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{const r=$c("tensorListId",t,e,n),a=$c("index",t,e,n),s=$c("tensor",t,e,n),o=n.getTensorList(r.id);return o.setItem(a,s),[o.idTensor]}case"TensorListGetItem":{const r=$c("tensorListId",t,e,n),a=$c("index",t,e,n),s=$c("elementShape",t,e,n),o=$c("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(a,s,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=$c("indices",t,e,n),a=Xp($c("tensor",t,e,n),r,$c("elementShape",t,e,n),$c("numElements",t,e,n));return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=$c("elementShape",t,e,n),a=$c("elementDType",t,e,n);let s;s="TensorListReserve"===t.op?"numElements":"maxNumElements";const o=$c(s,t,e,n),i=Yp(r,a,0,"TensorListReserve"===t.op?-1:o);return n.addTensorList(i),[i.idTensor]}case"TensorListGather":{const r=$c("tensorListId",t,e,n),a=$c("indices",t,e,n),s=$c("elementShape",t,e,n),o=$c("elementDType",t,e,n);return[n.getTensorList(r.id).gather(a,o,s)]}case"TensorListStack":{const r=$c("tensorListId",t,e,n),a=$c("elementShape",t,e,n),s=$c("elementDType",t,e,n),o=$c("numElements",t,e,n);return[n.getTensorList(r.id).stack(a,s,o)]}case"TensorListFromTensor":{const r=Gp($c("tensor",t,e,n),$c("elementShape",t,e,n),$c("elementDType",t,e,n));return n.addTensorList(r),[r.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=$c("tensorListId",t,e,n),a=n.getTensorList(r.id),s=$c("dtype",t,e,n),o=$c("elementShape",t,e,n);return[a.concat(s,o)]}case"TensorListPushBack":{const r=$c("tensorListId",t,e,n),a=$c("tensor",t,e,n),s=n.getTensorList(r.id);return s.pushBack(a),[s.idTensor]}case"TensorListPopBack":{const r=$c("tensorListId",t,e,n),a=$c("elementShape",t,e,n),s=$c("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(a,s)]}case"TensorListSplit":{const r=$c("tensor",t,e,n),a=$c("elementShape",t,e,n),s=Jp(r,$c("lengths",t,e,n),a);return n.addTensorList(s),[s.idTensor]}case"TensorListLength":{const r=$c("tensorListId",t,e,n);return[to(n.getTensorList(r.id).size(),"int32")]}case"TensorListResize":{const r=$c("tensorListId",t,e,n),a=$c("size",t,e,n),s=n.getTensorList(r.id).resize(a);return n.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qp(t,e,n){const[r,a]=$c("fusedOps",t,e,n),s="biasadd"===r,o=!s,i="prelu"===a,u="fusedbatchnorm"===r,l=$c("numArgs",t,e,n);if(s){if(i&&2!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&1!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=$c("strides",t,e,n),p=Bc(t,e,n),h=$c("dataFormat",t,e,n).toUpperCase(),d=$c("dilations",t,e,n);let[f,m]=$c("args",t,e,n);o&&(m=f,f=void 0);return{stride:c,pad:p,dataFormat:h,dilations:d,biasArg:f,preluArg:m,activationFunc:a,leakyreluAlpha:$c("leakyreluAlpha",t,e,n)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function th(t,e,n){return{boxes:$c("boxes",t,e,n),scores:$c("scores",t,e,n),maxOutputSize:$c("maxOutputSize",t,e,n),iouThreshold:$c("iouThreshold",t,e,n),scoreThreshold:$c("scoreThreshold",t,e,n),softNmsSigma:$c("softNmsSigma",t,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class eh{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=to(0),this.tensorMap=new Map,Aa(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach((t=>t.dispose())),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return to(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);const n=await t.data();return this.tensorMap.forEach((t=>t.dispose())),this.tensorMap.clear(),Sa((()=>{const t=vu(e),r=n.length,a=t.length;$d2cc08cc2aa8032f$exports.util.assert(r===a,(()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${a} elements.`));for(let e=0;e<r;e++){const r=n[e],a=t[e];Aa(a),this.tensorMap.set(r,a)}return this.handle}))}async find(t,e){this.checkKeyAndValueTensor(t,e);const n=await t.data();return Sa((()=>{const t=[];for(let r=0;r<n.length;r++){const a=n[r],s=this.findWithDefault(a,e);t.push(s)}return iu(t)}))}findWithDefault(t,e){const n=this.tensorMap.get(t);return null!=n?n:e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}}function nh(t,e,n,r,a=Sa){const s=((t,e,n)=>{switch(t.category){case"arithmetic":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[r.add($c("a",t,e,n),$c("b",t,e,n))];case"AddN":return[r.addN($c("tensors",t,e,n))];case"FloorMod":case"Mod":return[r.mod($c("a",t,e,n),$c("b",t,e,n))];case"Mul":return[r.mul($c("a",t,e,n),$c("b",t,e,n))];case"RealDiv":case"Div":return[r.div($c("a",t,e,n),$c("b",t,e,n))];case"DivNoNan":return[r.divNoNan($c("a",t,e,n),$c("b",t,e,n))];case"FloorDiv":return[r.floorDiv($c("a",t,e,n),$c("b",t,e,n))];case"Sub":return[r.sub($c("a",t,e,n),$c("b",t,e,n))];case"Minimum":return[r.minimum($c("a",t,e,n),$c("b",t,e,n))];case"Maximum":return[r.maximum($c("a",t,e,n),$c("b",t,e,n))];case"Pow":return[r.pow($c("a",t,e,n),$c("b",t,e,n))];case"SquaredDifference":return[r.squaredDifference($c("a",t,e,n),$c("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"basic_math":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Abs":case"ComplexAbs":return[r.abs($c("x",t,e,n))];case"Acos":return[r.acos($c("x",t,e,n))];case"Acosh":return[r.acosh($c("x",t,e,n))];case"Asin":return[r.asin($c("x",t,e,n))];case"Asinh":return[r.asinh($c("x",t,e,n))];case"Atan":return[r.atan($c("x",t,e,n))];case"Atan2":return[r.atan2($c("x",t,e,n),$c("y",t,e,n))];case"Atanh":return[r.atanh($c("x",t,e,n))];case"Ceil":return[r.ceil($c("x",t,e,n))];case"Complex":return[r.complex($c("real",t,e,n),$c("imag",t,e,n))];case"Cos":return[r.cos($c("x",t,e,n))];case"Cosh":return[r.cosh($c("x",t,e,n))];case"Elu":return[r.elu($c("x",t,e,n))];case"Erf":return[r.erf($c("x",t,e,n))];case"Exp":return[r.exp($c("x",t,e,n))];case"Expm1":return[r.expm1($c("x",t,e,n))];case"Floor":return[r.floor($c("x",t,e,n))];case"Log":return[r.log($c("x",t,e,n))];case"Log1p":return[r.log1p($c("x",t,e,n))];case"Imag":return[r.imag($c("x",t,e,n))];case"Neg":return[r.neg($c("x",t,e,n))];case"Reciprocal":return[r.reciprocal($c("x",t,e,n))];case"Real":return[r.real($c("x",t,e,n))];case"Relu":return[r.relu($c("x",t,e,n))];case"Round":return[r.round($c("x",t,e,n))];case"Selu":return[r.selu($c("x",t,e,n))];case"Sigmoid":return[r.sigmoid($c("x",t,e,n))];case"Sin":return[r.sin($c("x",t,e,n))];case"Sign":return[r.sign($c("x",t,e,n))];case"Sinh":return[r.sinh($c("x",t,e,n))];case"Softplus":return[r.softplus($c("x",t,e,n))];case"Sqrt":return[r.sqrt($c("x",t,e,n))];case"Square":return[r.square($c("x",t,e,n))];case"Tanh":return[r.tanh($c("x",t,e,n))];case"Tan":return[r.tan($c("x",t,e,n))];case"ClipByValue":return[r.clipByValue($c("x",t,e,n),$c("clipValueMin",t,e,n),$c("clipValueMax",t,e,n))];case"Relu6":return[r.relu6($c("x",t,e,n))];case"Rsqrt":return[r.rsqrt(Dc(t.inputNames[0],e,n))];case"Prod":return[r.prod($c("x",t,e,n),$c("axes",t,e,n))];case"LeakyRelu":return[r.leakyRelu($c("x",t,e,n),$c("alpha",t,e,n))];case"Prelu":return[r.prelu($c("x",t,e,n),$c("alpha",t,e,n))];case"IsNan":return[r.isNaN(Dc(t.inputNames[0],e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"control":return Zp(t,e,n);case"convolution":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Conv1D":{const a=$c("stride",t,e,n),s=$c("pad",t,e,n),o=$c("dataFormat",t,e,n).toUpperCase(),i=$c("dilation",t,e,n);return[r.conv1d($c("x",t,e,n),$c("filter",t,e,n),a,s,o,i)]}case"Conv2D":{const a=$c("strides",t,e,n),s=Bc(t,e,n),o=$c("dataFormat",t,e,n).toUpperCase(),i=$c("dilations",t,e,n);return[r.conv2d($c("x",t,e,n),$c("filter",t,e,n),[a[1],a[2]],s,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:a,pad:s,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=Qp(t,e,n);return[r.fused.conv2d({x:$c("x",t,e,n),filter:$c("filter",t,e,n),strides:[a[1],a[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:a,pad:s,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=Qp(t,e,n);return[r.fused.depthwiseConv2d({x:$c("x",t,e,n),filter:$c("filter",t,e,n),strides:[a[1],a[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const a=$c("outputShape",t,e,n),s=$c("strides",t,e,n),o=Bc(t,e,n);return[r.conv2dTranspose($c("x",t,e,n),$c("filter",t,e,n),a,[s[1],s[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const a=$c("strides",t,e,n),s=Bc(t,e,n),o=$c("dilations",t,e,n),i=$c("dataFormat",t,e,n).toUpperCase();return[r.depthwiseConv2d($c("input",t,e,n),$c("filter",t,e,n),[a[1],a[2]],s,i,[o[1],o[2]])]}case"Conv3D":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("dataFormat",t,e,n).toUpperCase(),i=$c("dilations",t,e,n);return[r.conv3d($c("x",t,e,n),$c("filter",t,e,n),[a[1],a[2],a[3]],s,o,[i[1],i[2],i[3]])]}case"AvgPool":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("kernelSize",t,e,n);return[r.avgPool($c("x",t,e,n),[o[1],o[2]],[a[1],a[2]],s)]}case"MaxPool":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("kernelSize",t,e,n);return[r.maxPool($c("x",t,e,n),[o[1],o[2]],[a[1],a[2]],s)]}case"MaxPoolWithArgmax":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("kernelSize",t,e,n),i=$c("includeBatchInIndex",t,e,n),{result:u,indexes:l}=r.maxPoolWithArgmax($c("x",t,e,n),[o[1],o[2]],[a[1],a[2]],s,i);return[u,l]}case"AvgPool3D":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("kernelSize",t,e,n);return[r.avgPool3d($c("x",t,e,n),[o[1],o[2],o[3]],[a[1],a[2],a[3]],s)]}case"MaxPool3D":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("kernelSize",t,e,n);return[r.maxPool3d($c("x",t,e,n),[o[1],o[2],o[3]],[a[1],a[2],a[3]],s)]}case"Dilation2D":{const a=$c("strides",t,e,n),s=$c("pad",t,e,n),o=$c("dilations",t,e,n),i=a[1],u=a[2],l=o[1],c=o[2];return[r.dilation2d($c("x",t,e,n),$c("filter",t,e,n),[i,u],s,[l,c],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"creation":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Fill":{const a=$c("shape",t,e,n),s=$c("dtype",t,e,n),o=$c("value",t,e,n);return[r.fill(a,o,s)]}case"LinSpace":{const a=$c("start",t,e,n),s=$c("stop",t,e,n),o=$c("num",t,e,n);return[r.linspace(a,s,o)]}case"Multinomial":{const a=$c("logits",t,e,n),s=$c("numSamples",t,e,n),o=$c("seed",t,e,n);return[r.multinomial(a,s,o)]}case"OneHot":{const a=$c("indices",t,e,n),s=$c("depth",t,e,n),o=$c("onValue",t,e,n),i=$c("offValue",t,e,n),u=$c("dtype",t,e,n);return[r.oneHot(a,s,o,i,u)]}case"Ones":return[r.ones($c("shape",t,e,n),$c("dtype",t,e,n))];case"OnesLike":return[r.onesLike($c("x",t,e,n))];case"RandomStandardNormal":return[r.randomStandardNormal($c("shape",t,e,n),$c("dtype",t,e,n),$c("seed",t,e,n))];case"RandomUniform":return[r.randomUniform($c("shape",t,e,n),$c("minval",t,e,n),$c("maxval",t,e,n),$c("dtype",t,e,n))];case"Range":{const a=$c("start",t,e,n),s=$c("stop",t,e,n),o=$c("step",t,e,n);return[r.range(a,s,o,$c("dtype",t,e,n))]}case"TruncatedNormal":{const a=$c("shape",t,e,n),s=$c("mean",t,e,n),o=$c("stdDev",t,e,n),i=$c("seed",t,e,n);return[r.truncatedNormal(a,s,o,$c("dtype",t,e,n),i)]}case"Zeros":return[r.zeros($c("shape",t,e,n),$c("dtype",t,e,n))];case"ZerosLike":return[r.zerosLike($c("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"dynamic":return(async(t,e,n,r,a=Up)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:u,softNmsSigma:l}=th(t,e,n),c=await a.image.nonMaxSuppressionWithScoreAsync(r,s,o,i,u,l);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=th(t,e,n),l=$c("padToMaxOutputSize",t,e,n),c=await a.image.nonMaxSuppressionPaddedAsync(r,s,o,i,u,l);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=th(t,e,n);return[await a.image.nonMaxSuppressionAsync(r,s,o,i,u)]}case"Where":{const r=a.cast($c("condition",t,e,n),"bool"),s=[await a.whereAsync(r)];return r.dispose(),s}case"ListDiff":return a.setdiff1dAsync($c("x",t,e,n),$c("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n);case"evaluation":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"LowerBound":{const a=$c("sortedSequence",t,e,n),s=$c("values",t,e,n);return[r.lowerBound(a,s)]}case"TopKV2":{const a=$c("x",t,e,n),s=$c("k",t,e,n),o=$c("sorted",t,e,n),i=r.topk(a,s,o);return[i.values,i.indices]}case"UpperBound":{const a=$c("sortedSequence",t,e,n),s=$c("values",t,e,n);return[r.upperBound(a,s)]}case"Unique":{const a=$c("x",t,e,n),s=r.unique(a);return[s.values,s.indices]}case"UniqueV2":{const a=$c("x",t,e,n),s=$c("axis",t,e,n),o=r.unique(a,s);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"image":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"ResizeBilinear":{const a=$c("images",t,e,n),s=$c("size",t,e,n),o=$c("alignCorners",t,e,n),i=$c("halfPixelCenters",t,e,n);return[r.image.resizeBilinear(a,[s[0],s[1]],o,i)]}case"ResizeNearestNeighbor":{const a=$c("images",t,e,n),s=$c("size",t,e,n),o=$c("alignCorners",t,e,n),i=$c("halfPixelCenters",t,e,n);return[r.image.resizeNearestNeighbor(a,[s[0],s[1]],o,i)]}case"CropAndResize":{const a=$c("image",t,e,n),s=$c("boxes",t,e,n),o=$c("boxInd",t,e,n),i=$c("cropSize",t,e,n),u=$c("method",t,e,n),l=$c("extrapolationValue",t,e,n);return[r.image.cropAndResize(a,s,o,i,u,l)]}case"ImageProjectiveTransformV3":{const a=$c("images",t,e,n),s=$c("transforms",t,e,n),o=$c("outputShape",t,e,n),i=$c("fillValue",t,e,n),u=$c("interpolation",t,e,n),l=$c("fillMode",t,e,n);return[r.image.transform(a,s,u.toLowerCase(),l.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"graph":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const a=$c("default",t,e,n);return[Dc(t.name,e,n)||a];case"Placeholder":return[Dc(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":case"Snapshot":return[Pc($c("x",t,e,n))];case"IdentityN":return $c("x",t,e,n).map((t=>Pc(t)));case"Shape":return[r.tensor1d($c("x",t,e,n).shape,"int32")];case"ShapeN":return $c("x",t,e,n).map((t=>r.tensor1d(t.shape)));case"Size":return[r.scalar($c("x",t,e,n).size,"int32")];case"Rank":return[r.scalar($c("x",t,e,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const s=$c("x",t,e,n),o=$c("data",t,e,n),i=$c("message",t,e,n),u=$c("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(let t=0;t<o.length;t++)console.log(Array.prototype.slice.call(o[t].dataSync()).slice(0,u));return[s];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"logical":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Equal":return[r.equal($c("a",t,e,n),$c("b",t,e,n))];case"NotEqual":return[r.notEqual($c("a",t,e,n),$c("b",t,e,n))];case"Greater":return[r.greater($c("a",t,e,n),$c("b",t,e,n))];case"GreaterEqual":return[r.greaterEqual($c("a",t,e,n),$c("b",t,e,n))];case"Less":return[r.less($c("a",t,e,n),$c("b",t,e,n))];case"LessEqual":return[r.lessEqual($c("a",t,e,n),$c("b",t,e,n))];case"LogicalAnd":return[r.logicalAnd($c("a",t,e,n),$c("b",t,e,n))];case"LogicalNot":return[r.logicalNot($c("a",t,e,n))];case"LogicalOr":return[r.logicalOr($c("a",t,e,n),$c("b",t,e,n))];case"Select":case"SelectV2":return[r.where($c("condition",t,e,n),$c("a",t,e,n),$c("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"matrices":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul($c("a",t,e,n),$c("b",t,e,n),$c("transposeA",t,e,n),$c("transposeB",t,e,n))];case"Einsum":return[r.einsum($c("equation",t,e,n),...$c("tensors",t,e,n))];case"Transpose":return[r.transpose($c("x",t,e,n),$c("perm",t,e,n))];case"_FusedMatMul":const[a,s]=$c("fusedOps",t,e,n),o="biasadd"===a,i="prelu"===s,u=$c("numArgs",t,e,n),l=$c("leakyreluAlpha",t,e,n);if(o){if(i&&2!==u)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&1!==u)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,p]=$c("args",t,e,n);return[r.fused.matMul({a:$c("a",t,e,n),b:$c("b",t,e,n),transposeA:$c("transposeA",t,e,n),transposeB:$c("transposeB",t,e,n),bias:c,activation:s,preluActivationWeights:p,leakyreluAlpha:l})];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"normalization":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"EuclideanNorm":return[r.euclideanNorm($c("x",t,e,n),$c("axis",t,e,n),$c("keepDims",t,e,n))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[r.batchNorm($c("x",t,e,n),$c("mean",t,e,n),$c("variance",t,e,n),$c("offset",t,e,n),$c("scale",t,e,n),$c("epsilon",t,e,n))];case"LRN":return[r.localResponseNormalization($c("x",t,e,n),$c("radius",t,e,n),$c("bias",t,e,n),$c("alpha",t,e,n),$c("beta",t,e,n))];case"Softmax":return[r.softmax($c("x",t,e,n))];case"LogSoftmax":return[r.logSoftmax($c("x",t,e,n))];case"SparseToDense":return[r.sparseToDense($c("sparseIndices",t,e,n),$c("outputShape",t,e,n),$c("sparseValues",t,e,n),$c("defaultValue",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"reduction":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Max":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.max($c("x",t,e,n),a,s)]}case"Mean":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.mean($c("x",t,e,n),a,s)]}case"Min":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.min($c("x",t,e,n),a,s)]}case"Sum":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.sum($c("x",t,e,n),a,s)]}case"All":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.all($c("x",t,e,n),a,s)]}case"Any":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.any($c("x",t,e,n),a,s)]}case"ArgMax":{const a=$c("axis",t,e,n);return[r.argMax($c("x",t,e,n),a)]}case"ArgMin":{const a=$c("axis",t,e,n);return[r.argMin($c("x",t,e,n),a)]}case"Prod":{const a=$c("axis",t,e,n),s=$c("keepDims",t,e,n);return[r.prod($c("x",t,e,n),a,s)]}case"Cumprod":{const a=$c("axis",t,e,n),s=$c("exclusive",t,e,n),o=$c("reverse",t,e,n);return[r.cumprod($c("x",t,e,n),a,s,o)]}case"Cumsum":{const a=$c("axis",t,e,n),s=$c("exclusive",t,e,n),o=$c("reverse",t,e,n);return[r.cumsum($c("x",t,e,n),a,s,o)]}case"Bincount":const a=$c("x",t,e,n),s=$c("weights",t,e,n),o=$c("size",t,e,n);return[r.bincount(a,s,o)];case"DenseBincount":{const a=$c("x",t,e,n),s=$c("weights",t,e,n),o=$c("size",t,e,n),i=$c("binaryOutput",t,e,n);return[r.denseBincount(a,s,o,i)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"slice_join":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"ConcatV2":case"Concat":{const a=$c("n",t,e,n),s=$c("axis",t,e,n);let o=$c("tensors",t,e,n);return o=o.slice(0,a),[r.concat(o,s)]}case"Gather":{const a=$c("x",t,e,n),s=$c("indices",t,e,n);return[r.gather(a,r.cast(s,"int32"),0)]}case"GatherV2":{const a=$c("axis",t,e,n),s=$c("batchDims",t,e,n),o=$c("x",t,e,n),i=$c("indices",t,e,n);return[r.gather(o,r.cast(i,"int32"),a,s)]}case"Reverse":{const a=$c("dims",t,e,n),s=[];for(let t=0;t<a.length;t++)a[t]&&s.push(t);const o=$c("x",t,e,n);return[r.reverse(o,s)]}case"ReverseV2":{const a=$c("axis",t,e,n),s=$c("x",t,e,n);return[r.reverse(s,a)]}case"Slice":{const a=$c("begin",t,e,n),s=$c("size",t,e,n);return[r.slice($c("x",t,e,n),a,s)]}case"StridedSlice":{const a=$c("begin",t,e,n),s=$c("end",t,e,n),o=$c("strides",t,e,n),i=$c("beginMask",t,e,n),u=$c("endMask",t,e,n),l=$c("ellipsisMask",t,e,n),c=$c("newAxisMask",t,e,n),p=$c("shrinkAxisMask",t,e,n),h=$c("x",t,e,n);return[r.stridedSlice(h,a,s,o,i,u,l,c,p)]}case"Pack":return Sa((()=>{const a=$c("axis",t,e,n),s=$c("tensors",t,e,n),o=s[0].shape,i=r.squeeze(s[0]).shape,u=s.map((t=>{const e=$d2cc08cc2aa8032f$exports.util.arraysEqual(t.shape,o);if(!e&&!$d2cc08cc2aa8032f$exports.util.arraysEqual(r.squeeze(t).shape,i))throw new Error("the input tensors shape does not match");return e?t:r.reshape(t,o)}));return[r.stack(u,a)]}));case"Unpack":{const a=$c("axis",t,e,n),s=$c("tensor",t,e,n);return r.unstack(s,a)}case"Tile":{const a=$c("reps",t,e,n);return[r.tile($c("x",t,e,n),a)]}case"Split":case"SplitV":{const a=$c("axis",t,e,n),s=$c("numOrSizeSplits",t,e,n),o=$c("x",t,e,n);return r.split(o,s,a)}case"ScatterNd":{const a=$c("indices",t,e,n),s=$c("values",t,e,n),o=$c("shape",t,e,n);return[r.scatterND(a,s,o)]}case"GatherNd":{const a=$c("x",t,e,n),s=$c("indices",t,e,n);return[r.gatherND(a,s)]}case"SparseToDense":{const a=$c("sparseIndices",t,e,n),s=$c("outputShape",t,e,n),o=$c("sparseValues",t,e,n),i=$c("defaultValue",t,e,n);return[r.sparseToDense(a,o,s,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"sparse":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:a,outputValues:s,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows($c("indices",t,e,n),$c("values",t,e,n),$c("denseShape",t,e,n),$c("defaultValue",t,e,n));return[a,s,o,i]}case"SparseReshape":{const{outputIndices:a,outputShape:s}=r.sparse.sparseReshape($c("inputIndices",t,e,n),$c("inputShape",t,e,n),$c("newShape",t,e,n));return[a,s]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean($c("data",t,e,n),$c("indices",t,e,n),$c("segmentIds",t,e,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum($c("data",t,e,n),$c("indices",t,e,n),$c("segmentIds",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"spectral":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"FFT":return[r.fft($c("x",t,e,n))];case"IFFT":return[r.ifft($c("x",t,e,n))];case"RFFT":return[r.rfft($c("x",t,e,n))];case"IRFFT":return[r.irfft($c("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"string":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"StringNGrams":{const{nGrams:a,nGramsSplits:s}=r.string.stringNGrams($c("data",t,e,n),$c("dataSplits",t,e,n),$c("separator",t,e,n),$c("nGramWidths",t,e,n),$c("leftPad",t,e,n),$c("rightPad",t,e,n),$c("padWidth",t,e,n),$c("preserveShortSequences",t,e,n));return[a,s]}case"StringSplit":{const{indices:a,values:s,shape:o}=r.string.stringSplit($c("input",t,e,n),$c("delimiter",t,e,n),$c("skipEmpty",t,e,n));return[a,s,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast($c("input",t,e,n),$c("numBuckets",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"transformation":return a((()=>((t,e,n,r=Up)=>{switch(t.op){case"Cast":return[r.cast($c("x",t,e,n),$c("dtype",t,e,n))];case"ExpandDims":{const a=$c("axis",t,e,n);return[r.expandDims($c("x",t,e,n),a)]}case"Squeeze":{const a=$c("axis",t,e,n);return[r.squeeze($c("x",t,e,n),a)]}case"Reshape":return[r.reshape($c("x",t,e,n),$c("shape",t,e,n))];case"MirrorPad":return[r.mirrorPad($c("x",t,e,n),$c("padding",t,e,n),$c("mode",t,e,n))];case"PadV2":case"Pad":return[r.pad($c("x",t,e,n),$c("padding",t,e,n),$c("constantValue",t,e,n))];case"SpaceToBatchND":{const a=$c("blockShape",t,e,n),s=$c("paddings",t,e,n);return[r.spaceToBatchND($c("x",t,e,n),a,s)]}case"BatchToSpaceND":{const a=$c("blockShape",t,e,n),s=$c("crops",t,e,n);return[r.batchToSpaceND($c("x",t,e,n),a,s)]}case"DepthToSpace":{const a=$c("blockSize",t,e,n),s=$c("dataFormat",t,e,n).toUpperCase();return[r.depthToSpace($c("x",t,e,n),a,s)]}case"BroadcastTo":return[r.broadcastTo($c("x",t,e,n),$c("shape",t,e,n))];case"BroadcastArgs":return[r.broadcastArgs($c("s0",t,e,n),$c("s1",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"hash_table":return(async(t,e,n,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const a=$c("keyDType",t,e,n),s=$c("valueDType",t,e,n),o=new eh(a,s);return r.addHashTable(t.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const a=$c("tableHandle",t,e,n,r),s=$c("keys",t,e,n),o=$c("values",t,e,n),i=r.getHashTableById(a.id);return[await i.import(s,o)]}case"LookupTableFind":case"LookupTableFindV2":{const a=$c("tableHandle",t,e,n,r),s=$c("keys",t,e,n),o=$c("defaultValue",t,e,n),i=r.getHashTableById(a.id);return[await i.find(s,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const a=$c("tableHandle",t,e,n,r);return[r.getHashTableById(a.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n,r);case"custom":const s=Oc(t.op);if(s&&s.customExecutor)return s.customExecutor(new zp(t,e,n));throw TypeError(`Custom op ${t.op} is not registered.`);default:throw TypeError(`Unknown op '${t.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return $d2cc08cc2aa8032f$exports.util.isPromise(s)?s.then((t=>[].concat(t))):[].concat(s)}class rh{constructor(t={},e={},n={},r={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=n,this.functionMap=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const n=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(n))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map((t=>0===t.id&&0===t.iterationId?"":`${t.frameName}-${t.iterationId}`)).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ah(t,e,n,r){const a=new Set,s=[];let o=null,i=null;const u=new Set,l=Object.keys(t).map((t=>Lc(t)[0]));let c=[];null!=r&&(c=r.map((t=>Lc(t.name)[0])));const p=[...e];for(;p.length>0;){const t=p.pop();(lh(t)||ch(t)||ph(t))&&null==o&&(o=t,i=o.children.map((t=>t.name)).filter((t=>a.has(t)))),a.add(t.name),null==n[t.name]&&(-1===l.indexOf(t.name)&&-1===c.indexOf(t.name)&&(0!==t.inputs.length?t.inputs.forEach((t=>{u.has(t.name)||(u.add(t.name),p.push(t))})):s.push(t.name)))}return{inputs:t,outputs:e,usedNodes:a,missingInputs:s,dynamicNode:o,syncInputs:i}}function sh(t,e,n){const{usedNodes:r,inputs:a}=n,s=[],o=Object.keys(a).map((t=>Lc(t)[0])).map((e=>t.nodes[e])),i=t.initNodes;o.forEach((t=>{r.has(t.name)&&s.push(t)})),t.weights.forEach((t=>{r.has(t.name)&&s.push(t)})),null!=i&&i.forEach((t=>{r.has(t.name)&&s.push(t)}));const u=new Set,l=[];for(;s.length>0;){const t=s.pop();u.add(t.name),e[t.name]||l.push(t),t.children.forEach((t=>{!u.has(t.name)&&r.has(t.name)&&t.inputs.every((t=>u.has(t.name)))&&s.push(t)}))}return l}const oh=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],ih=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],uh=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function lh(t){return oh.indexOf(t.op)>=0}function ch(t){return ih.indexOf(t.op)>=0}function ph(t){return uh.indexOf(t.op)>=0}class hh{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,null!=t.functions&&Object.keys(t.functions).forEach((e=>{this._functionExecutorMap[e]=new hh(t.functions[e],this)}))}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map((e=>t[e].map((t=>t.id))));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map((t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0})))}get outputs(){return this._outputs.map((t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0})))}get inputNodes(){return this._inputs.map((t=>t.signatureKey||t.name))}get outputNodes(){return this._outputs.map((t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e}))}get functions(){return Object.keys(this._functions).reduce(((t,e)=>(t[e]=this._functions[e].signature,t)),{})}getCompilationKey(t,e){const n=t.map((t=>t.name)).sort(),r=e.map((t=>t.name)).sort();return n.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)}compile(t,e){const n=ah(t,e,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:s}=n;if(null!=a)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(r.length>0){const n=e.map((t=>t.name)),a=Object.keys(t);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${a}]. Missing the following inputs: [${r}]`)}return sh(this.graph,this.weightMap,n)}execute(t,e){t=this.mapInputs(t);const n=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const r=n.map((t=>this.graph.nodes[Lc(t)[0]])),a=e.map((t=>Lc(t)[0]));let s=a.map((t=>this.graph.nodes[t]));this.resetIntermediateTensors(),0===s.length&&(s=this._outputs);const o=this.getCompilationKey(r,s);let i=this.compiledMap.get(o);null==i&&(i=this.compile(t,s),this.compiledMap.set(o,i));const u={},l={};return Sa((()=>{const n=new rh(this.weightMap,u,l,this.functionExecutorMap),r=Object.assign({},this.weightMap);Object.keys(t).forEach((e=>{const[n,a]=Lc(e),s=[];s[a]=t[e],r[n]=s}));const s=this.getFrozenTensorIds(r),o={};for(let t=0;t<i.length;t++){const e=i[t];if(!r[e.name]){const t=nh(e,r,n,this._resourceManager);if($d2cc08cc2aa8032f$exports.util.isPromise(t))throw new Error(`The execution of the op '${e.op}' returned a promise. Please use model.executeAsync() instead.`);r[e.name]=t,this.checkTensorForDisposal(e.name,e,r,n,s,a,o)}}return null==this.parent&&n.dispose(s),e.map((t=>Dc(t,r,n)))}))}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map((e=>t[e])).map((t=>t.map((t=>t.id)))));return new Set(e)}checkTensorForDisposal(t,e,n,r,a,s,o){"control"!==e.category&&-1===s.indexOf(t)&&(n[t].forEach((t=>{null!=t&&(o[t.id]=(o[t.id]||0)+e.children.length)})),e.inputs.forEach((t=>{if("control"!==t.category){const s=Cc(t.name,n,r);null!=s&&s.forEach((t=>{if(t&&!t.kept&&!a.has(t.id)){const n=o[t.id];if(1===n){if(this.keepTensorForDebug){const[n,a]=Fc(e.name,r);this.intermediateTensors[n]||(this.intermediateTensors[n]=[]),this.intermediateTensors[n][a]=t}else t.dispose();delete o[t.id]}else null!=n&&o[t.id]--}}))}})))}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach((t=>this.intermediateTensors[t].forEach((t=>t.dispose())))),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach((t=>{this.tensorsMap[t].forEach((t=>{!t||t.kept||t.isDisposed||this.keepIds.has(t.id)||t.dispose()}))}))}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const t in this.intermediateTensors)this.intermediateTensors[t].forEach((t=>t.dispose())),delete this.intermediateTensors[t]}async _executeAsync(t,e,n=!1,r={},a={}){n||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepTensorForDebug=ot().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(t){console.warn(t.message)}this.resetIntermediateTensors();const s=new rh(this.weightMap,r,a,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,s,e,n);const o=e.map((t=>Dc(t,this.tensorsMap,s))),i=o.map((t=>t.id)),u=Object.keys(t).map((e=>t[e].id));return this.keepIds=new Set([...i,...u,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),null==this.parent&&s.dispose(this.keepIds),o}async executeFunctionAsync(t,e,n){const r=t.reduce(((t,e,n)=>(t[this.inputs[n].name]=e,t)),{});return this._executeAsync(r,this.outputNodes,!0,e,n)}async executeWithControlFlow(t,e,n,r){const a=Object.keys(t),s=a.map((t=>this.graph.nodes[Lc(t)[0]])),o=n.map((t=>Lc(t)[0]));let i=o.map((t=>this.graph.nodes[t]));0===i.length&&(i=this._outputs);const{usedNodes:u,missingInputs:l,dynamicNode:c,syncInputs:p}=ah(t,i,this.weightMap,this._initNodes),h=[...s,...this.graph.weights,...this._initNodes||[]].map((t=>({node:t,contexts:e.currentContext}))),d=Object.assign({},this.weightMap);Object.keys(t).forEach((e=>{const[n,r]=Lc(e),a=[];a[r]=t[e],d[n]=a}));const f={},m=this.getFrozenTensorIds(d),g={};for(;h.length>0;){const t=this.processStack(s,h,e,d,g,m,o,f,u);await Promise.all(t)}null!=c||r||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const y=i.filter((t=>!lh(t)&&!Dc(t.name,d,e))).map((t=>t.name));if(y.length>0){let t="";throw null!=c&&(t=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${p}]`),new Error(`Cannot compute the outputs [${y}] from the provided inputs [${a}]. Consider providing the following inputs: [${l}]. ${t}`)}return d}processStack(t,e,n,r,a,s,o,i,u){const l=[];for(;e.length>0;){const t=e.pop();n.currentContext=t.contexts;let c="";if("Enter"===t.node.op&&$c("isConstant",t.node,r,n)&&([c]=Fc(t.node.name,n)),null==r[t.node.name]){const p=nh(t.node,r,n,this._resourceManager);c||([c]=Fc(t.node.name,n));const h=n.currentContext;$d2cc08cc2aa8032f$exports.util.isPromise(p)?l.push(p.then((l=>(r[c]=l,n.currentContext=h,this.checkTensorForDisposal(c,t.node,r,n,s,o,i),this.processChildNodes(t.node,e,n,r,a,u),l)))):(r[c]=p,this.checkTensorForDisposal(c,t.node,r,n,s,o,i),this.processChildNodes(t.node,e,n,r,a,u))}else this.processChildNodes(t.node,e,n,r,a,u)}return l}processChildNodes(t,e,n,r,a,s){t.children.forEach((t=>{const[o]=Fc(t.name,n);!a[o]&&s.has(t.name)&&("Merge"===t.op?t.inputNames.some((t=>!!Dc(t,r,n)))&&(a[o]=!0,e.push({contexts:n.currentContext,node:t})):t.inputNames.every((t=>!!Dc(t,r,n)))&&(a[o]=!0,e.push({contexts:n.currentContext,node:t})))}))}dispose(){Object.keys(this.weightMap).forEach((t=>this.weightMap[t].forEach((t=>t.dispose()))))}checkInputShapeAndType(t){Object.keys(t).forEach((e=>{const n=t[e],[r]=Lc(e),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){const t=a.attrParams.shape.value,e=t.length===n.shape.length&&n.shape.every(((e,n)=>-1===t[n]||t[n]===e));$d2cc08cc2aa8032f$exports.util.assert(e,(()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${t}], but was [${n.shape}]`))}a.attrParams.dtype&&a.attrParams.dtype.value&&$d2cc08cc2aa8032f$exports.util.assert(n.dtype===a.attrParams.dtype.value,(()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`))}))}mapInputs(t){const e={};for(const n in t)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[n]){e[this._signature.inputs[n].name]=t[n]}else e[n]=t[n];return e}checkInputs(t){const e=Object.keys(t).filter((t=>{const[e]=Lc(t);return null==this.graph.nodes[e]}));if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map((t=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[t]){return this._signature.outputs[t].name}return t}),{})}checkOutputs(t){t.forEach((t=>{const[e]=Lc(t);if(!this.graph.nodes[e])throw new Error(`The output '${t}' is not found in the graph`)}))}}class dh{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}class fh{constructor(t,e={},n=$d2cc08cc2aa8032f$exports.io){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=n,null==e&&(this.loadOptions={}),this.resourceManager=new dh}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const t=this.modelUrl;if(null!=t.load)this.handler=t;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const e=this.io.getLoadHandlers(t,this.loadOptions);if(0===e.length)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return $d2cc08cc2aa8032f$exports.util.isPromise(t)?t.then((t=>this.loadSync(t))):this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let n=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){const t=this.artifacts.userDefinedMetadata;null!=t.signature&&(n=t.signature),null!=t.structuredOutputKeys&&(this.structuredOutputKeys=t.structuredOutputKeys)}this.signature=n,this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const r=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new hh(Ep.Instance.transformGraph(e,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),this.executor.resourceManager=this.resourceManager,null!=t.modelInitializer&&null!=t.modelInitializer.node){const e=Ep.Instance.transformGraph(t.modelInitializer);this.initializer=new hh(e),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if("string"==typeof t){const e=this.io.getSaveHandlers(t);if(0===e.length)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(e.length>1)throw new Error(`Found more than one (${e.length}) save handlers for URL '${t}'`);t=e[0]}if(null==t.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){const n=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){const t={};return(n instanceof Pe?[n]:n).forEach(((e,n)=>t[this.structuredOutputKeys[n]]=e)),t}return n}normalizeInputs(t){if(!(t instanceof Pe||Array.isArray(t)))return t;if((t=Array.isArray(t)?t:[t]).length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce(((e,n,r)=>(e[n]=t[r],e)),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=this.executor.execute(t,e);return n.length>1?n:n[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=await this.executor.executeAsync(t,e);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce(((e,n)=>(e[n]=[t[n]],e)),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function mh(t,e={},n=$d2cc08cc2aa8032f$exports.io){if(null==t)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==e&&(e={}),e.fromTFHub&&"string"==typeof t&&(t=function(t){t.endsWith("/")||(t+="/");return`${t}model.json?tfjs-format=file`}
/** @license See the LICENSE file. */(t));const r=new fh(t,e,n);return await r.load(),r}var gh=function(){return(gh=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};function yh(t,e,n,r){return new(n||(n=Promise))((function(a,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function i(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,i)}u((r=r.apply(t,e||[])).next())}))}function bh(t,e){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}var wh=["wrist","thumb_cmc","thumb_mcp","thumb_ip","thumb_tip","index_finger_mcp","index_finger_pip","index_finger_dip","index_finger_tip","middle_finger_mcp","middle_finger_pip","middle_finger_dip","middle_finger_tip","ring_finger_mcp","ring_finger_pip","ring_finger_dip","ring_finger_tip","pinky_finger_mcp","pinky_finger_pip","pinky_finger_dip","pinky_finger_tip"],vh={runtime:"mediapipe",maxHands:2,modelType:"full"},xh=function(){function t(t){var e,n=this;if("lite"===(this.width=0,this.height=0,this.selfieMode=!1,this.handsSolution=new(0,o.Hands)({locateFile:function(e,n){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+e:n+"/"+e}}),t.modelType))e=0;else e=1;this.handsSolution.setOptions({modelComplexity:e,selfieMode:this.selfieMode,maxNumHands:t.maxHands}),this.handsSolution.onResults((function(t){if(n.height=t.image.height,n.width=t.image.width,n.hands=[],null!==t.multiHandLandmarks)for(var e=t.multiHandedness,r=t.multiHandLandmarks,a=t.multiHandWorldLandmarks,s=0;s<e.length;s++)n.hands.push(gh(gh({},n.translateOutput(r[s],a[s])),{score:e[s].score,handedness:e[s].label}))}))}return t.prototype.translateOutput=function(t,e){var n=this;return{keypoints:t.map((function(t,e){return{x:t.x*n.width,y:t.y*n.height,score:t.visibility,name:wh[e]}})),keypoints3D:e.map((function(t,e){return{x:t.x,y:t.y,z:t.z,score:t.visibility,name:wh[e]}}))}},t.prototype.estimateHands=function(t,e){return yh(this,void 0,void 0,(function(){var n,r;return bh(this,(function(a){switch(a.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.handsSolution.setOptions({selfieMode:this.selfieMode})),t instanceof Pe?(r=ImageData.bind,[4,$d2cc08cc2aa8032f$exports.browser.toPixels(t)]):[3,2];case 1:return n=new(r.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:n=t,a.label=3;case 3:return t=n,[4,this.handsSolution.send({image:t})];case 4:return a.sent(),[2,this.hands]}}))}))},t.prototype.dispose=function(){this.handsSolution.close()},t.prototype.reset=function(){this.handsSolution.reset(),this.width=0,this.height=0,this.hands=null,this.selfieMode=!1},t.prototype.initialize=function(){return this.handsSolution.initialize()},t}();function Nh(t){return yh(this,void 0,void 0,(function(){var e,n;return bh(this,(function(r){switch(r.label){case 0:return e=function(t){if(null==t)return gh({},vh);var e=gh({},t);return e.runtime="mediapipe",null==e.maxHands&&(e.maxHands=vh.maxHands),null==e.modelType&&(e.modelType=vh.modelType),e}(t),[4,(n=new xh(e)).initialize()];case 1:return r.sent(),[2,n]}}))}))}function Th(t){return t.width*t.height}function kh(t){var e=t.xCenter-t.width/2,n=e+t.width,r=t.yCenter-t.height/2;return{xMin:e,xMax:n,yMin:r,yMax:r+t.height,width:t.width,height:t.height}}function Eh(t){return t instanceof Pe?{height:t.shape[0],width:t.shape[1]}:{height:t.height,width:t.width}}function Sh(t){return t-2*Math.PI*Math.floor((t+Math.PI)/(2*Math.PI))}function _h(t){return t instanceof Pe?t:$d2cc08cc2aa8032f$exports.browser.fromPixels(t)}function Ah(t,e){$d2cc08cc2aa8032f$exports.util.assert(0!==t.width,(function(){return e+" width cannot be 0."})),$d2cc08cc2aa8032f$exports.util.assert(0!==t.height,(function(){return e+" height cannot be 0."}))}function Ih(t,e,n){var r=e.outputTensorSize,a=e.keepAspectRatio,s=e.borderMode,o=e.outputTensorFloatRange,i=Eh(t),u=function(t,e){return e?{xCenter:e.xCenter*t.width,yCenter:e.yCenter*t.height,width:e.width*t.width,height:e.height*t.height,rotation:e.rotation}:{xCenter:.5*t.width,yCenter:.5*t.height,width:t.width,height:t.height,rotation:0}}(i,n),l=function(t,e,n){if(void 0===n&&(n=!1),!n)return{top:0,left:0,right:0,bottom:0};var r=e.height,a=e.width;Ah(e,"targetSize"),Ah(t,"roi");var s,o,i=r/a,u=t.height/t.width,l=0,c=0;return i>u?(s=t.width,o=t.width*i,c=(1-u/i)/2):(s=t.height/i,o=t.height,l=(1-i/u)/2),t.width=s,t.height=o,{top:c,left:l,right:l,bottom:c}}(u,r,a),c=function(t,e,n,r){var a=t.width,s=t.height,o=r?-1:1,i=Math.cos(t.rotation),u=Math.sin(t.rotation),l=t.xCenter,c=t.yCenter,p=1/e,h=1/n,d=new Array(16);return d[0]=a*i*o*p,d[1]=-s*u*p,d[2]=0,d[3]=(-.5*a*i*o+.5*s*u+l)*p,d[4]=a*u*o*h,d[5]=s*i*h,d[6]=0,d[7]=(-.5*s*i-.5*a*u*o+c)*h,d[8]=0,d[9]=0,d[10]=a*p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,function(t){if(16!==t.length)throw new Error("Array length must be 16 but got "+t.length);return[[t[0],t[1],t[2],t[3]],[t[4],t[5],t[6],t[7]],[t[8],t[9],t[10],t[11]],[t[12],t[13],t[14],t[15]]]}(d)}(u,i.width,i.height,!1);return{imageTensor:Sa((function(){var e=_h(t),n=hu(function(t,e,n){return Ah(n,"inputResolution"),[1/n.width*t[0][0]*e.width,1/n.height*t[0][1]*e.width,t[0][3]*e.width,1/n.width*t[1][0]*e.height,1/n.height*t[1][1]*e.height,t[1][3]*e.height,0,0]}(c,i,r),[1,8]),a="zero"===s?"constant":"nearest",u=ec.transform($a(pa(e,"float32")),n,"bilinear",a,0,[r.height,r.width]);return null!=o?function(t,e){var n=function(t,e,n,r){var a=(r-n)/255;return{scale:a,offset:n-0*a}}(0,0,e[0],e[1]);return Sa((function(){return fa(ss(t,n.scale),n.offset)}))}(u,o):u})),padding:l,transformationMatrix:c}}function Mh(t,e,n,r){return 1===r?.5*(t+e):t+(e-t)*n/(r-1)}function Oh(t){return{xCenter:t.xMin+t.width/2,yCenter:t.yMin+t.height/2,width:t.width,height:t.height}}function $h(t){var e=t.relativeKeypoints;if(e.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var n=Number.MAX_VALUE,r=Number.MAX_VALUE,a=Number.MIN_VALUE,s=Number.MIN_VALUE;return e.forEach((function(t){n=Math.min(n,t.x),a=Math.max(a,t.x),r=Math.min(r,t.y),s=Math.max(s,t.y)})),{xCenter:(n+a)/2,yCenter:(r+s)/2,width:a-n,height:s-r}}function Dh(t,e,n,r){return yh(this,void 0,void 0,(function(){var r,a,s,o,i;return bh(this,(function(u){switch(u.label){case 0:return t.sort((function(t,e){return Math.max.apply(Math,e.score)-Math.max.apply(Math,t.score)})),r=hu(t.map((function(t){return[t.locationData.relativeBoundingBox.yMin,t.locationData.relativeBoundingBox.xMin,t.locationData.relativeBoundingBox.yMax,t.locationData.relativeBoundingBox.xMax]}))),a=pu(t.map((function(t){return t.score[0]}))),[4,ec.nonMaxSuppressionAsync(r,a,e,n)];case 1:return[4,(s=u.sent()).array()];case 2:return o=u.sent(),i=t.filter((function(t,e){return o.indexOf(e)>-1})),_a([r,a,s]),[2,i]}}))}))}function Ch(t,e){return t.map((function(t){var n=gh(gh({},t),{x:t.x*e.width,y:t.y*e.height});return null!=t.z&&(n.z=t.z*e.width),n}))}function Fh(t,e,n){return yh(this,void 0,void 0,(function(){var r,a,s,o,i;return bh(this,(function(u){switch(u.label){case 0:return r=t[0],a=t[1],s=function(t,e,n){return Sa((function(){var r,a,s,o;n.reverseOutputOrder?(a=ou(is(t,[0,n.boxCoordOffset+0],[-1,1])),r=ou(is(t,[0,n.boxCoordOffset+1],[-1,1])),o=ou(is(t,[0,n.boxCoordOffset+2],[-1,1])),s=ou(is(t,[0,n.boxCoordOffset+3],[-1,1]))):(r=ou(is(t,[0,n.boxCoordOffset+0],[-1,1])),a=ou(is(t,[0,n.boxCoordOffset+1],[-1,1])),s=ou(is(t,[0,n.boxCoordOffset+2],[-1,1])),o=ou(is(t,[0,n.boxCoordOffset+3],[-1,1]))),a=fa(ss(Ma(a,n.xScale),e.w),e.x),r=fa(ss(Ma(r,n.yScale),e.h),e.y),n.applyExponentialOnBoxSize?(s=ss(Oa(Ma(s,n.hScale)),e.h),o=ss(Oa(Ma(o,n.wScale)),e.w)):(s=ss(Ma(s,n.hScale),e.h),o=ss(Ma(o,n.wScale),e.h));var i=Mo(r,Ma(s,2)),u=Mo(a,Ma(o,2)),l=fa(r,Ma(s,2)),c=fa(a,Ma(o,2)),p=Ea([es(i,[n.numBoxes,1]),es(u,[n.numBoxes,1]),es(l,[n.numBoxes,1]),es(c,[n.numBoxes,1])],1);if(n.numKeypoints)for(var h=0;h<n.numKeypoints;++h){var d=n.keypointCoordOffset+h*n.numValuesPerKeypoint,f=void 0,m=void 0;n.reverseOutputOrder?(f=ou(is(t,[0,d],[-1,1])),m=ou(is(t,[0,d+1],[-1,1]))):(m=ou(is(t,[0,d],[-1,1])),f=ou(is(t,[0,d+1],[-1,1])));var g=fa(ss(Ma(f,n.xScale),e.w),e.x),y=fa(ss(Ma(m,n.yScale),e.h),e.y);p=Ea([p,es(g,[n.numBoxes,1]),es(y,[n.numBoxes,1])],1)}return p}))}(a,e,n),o=Sa((function(){var t=r;return n.sigmoidScore?(null!=n.scoreClippingThresh&&(t=ka(r,-n.scoreClippingThresh,n.scoreClippingThresh)),t=os(t)):t})),[4,Rh(s,o,n)];case 1:return i=u.sent(),_a([s,o]),[2,i]}}))}))}function Rh(t,e,n){return yh(this,void 0,void 0,(function(){var r,a,s,o,i,u,l,c,p,h,d,f;return bh(this,(function(m){switch(m.label){case 0:return r=[],[4,t.data()];case 1:return a=m.sent(),[4,e.data()];case 2:for(s=m.sent(),o=0;o<n.numBoxes;++o)if(!(null!=n.minScoreThresh&&s[o]<n.minScoreThresh||(i=o*n.numCoords,u=Lh(a[i+0],a[i+1],a[i+2],a[i+3],s[o],n.flipVertically,o),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(n.numKeypoints>0)for((c=u.locationData).relativeKeypoints=[],p=n.numKeypoints*n.numValuesPerKeypoint,h=0;h<p;h+=n.numValuesPerKeypoint)d=i+n.keypointCoordOffset+h,f={x:a[d+0],y:n.flipVertically?1-a[d+1]:a[d+1]},c.relativeKeypoints.push(f);r.push(u)}return[2,r]}}))}))}function Lh(t,e,n,r,a,s,o){return{score:[a],ind:o,locationData:{relativeBoundingBox:{xMin:e,yMin:s?1-n:t,xMax:r,yMax:s?1-t:n,width:r-e,height:n-t}}}}function Bh(t,e){return"none"===t?e:function(t){return 1/(1+Math.exp(-t))}(e)}function Ph(t,e,n,r){return yh(this,void 0,void 0,(function(){var a,s,o,i,u,l,c,p;return bh(this,(function(h){switch(h.label){case 0:return n=n||e.flipHorizontally||!1,r=r||e.flipVertically||!1,a=t.size,s=a/e.numLandmarks,[4,t.data()];case 1:for(o=h.sent(),i=[],u=0;u<e.numLandmarks;++u)l=u*s,(p={x:0,y:0}).x=n?e.inputImageWidth-o[l]:o[l],s>1&&(p.y=r?e.inputImageHeight-o[l+1]:o[l+1]),s>2&&(p.z=o[l+2]),s>3&&(p.score=Bh(e.visibilityActivation,o[l+3])),i.push(p);for(c=0;c<i.length;++c)(p=i[c]).x=p.x/e.inputImageWidth,p.y=p.y/e.inputImageHeight,p.z=p.z/e.inputImageWidth/(e.normalizeZ||1);return[2,i]}}))}))}function zh(t,e,n){var r=t.width,a=t.height,s=t.rotation;if(null==n.rotation&&null==n.rotationDegree||(s=function(t,e){return null!=e.rotation?t+=e.rotation:null!=e.rotationDegree&&(t+=Math.PI*e.rotationDegree/180),Sh(t)}(s,n)),0===s)t.xCenter=t.xCenter+r*n.shiftX,t.yCenter=t.yCenter+a*n.shiftY;else{var o=(e.width*r*n.shiftX*Math.cos(s)-e.height*a*n.shiftY*Math.sin(s))/e.width,i=(e.width*r*n.shiftX*Math.sin(s)+e.height*a*n.shiftY*Math.cos(s))/e.height;t.xCenter=t.xCenter+o,t.yCenter=t.yCenter+i}if(n.squareLong){var u=Math.max(r*e.width,a*e.height);r=u/e.width,a=u/e.height}else if(n.squareShort){var l=Math.min(r*e.width,a*e.height);r=l/e.width,a=l/e.height}return t.width=r*n.scaleX,t.height=a*n.scaleY,t}var Uh,Vh={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},jh={runtime:"tfjs",modelType:"full",maxHands:2,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"},Hh={flipHorizontal:!1,staticImageMode:!1},Kh={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2016,numCoords:18,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:7,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.5},qh={shiftX:0,shiftY:-.5,scaleX:2.6,scaleY:2.6,squareLong:!0},Wh={shiftX:0,shiftY:-.1,scaleX:2,scaleY:2,squareLong:!0},Gh={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},Yh={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},Xh={numLandmarks:21,inputImageWidth:224,inputImageHeight:224,normalizeZ:.4,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Jh={numLandmarks:21,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Zh=function(){function t(t,e,n){this.detectorModel=t,this.landmarkModel=e,this.maxHands=n,this.prevHandRectsFromLandmarks=null,this.anchors=function(t){null==t.reduceBoxesInLowestLayer&&(t.reduceBoxesInLowestLayer=!1),null==t.interpolatedScaleAspectRatio&&(t.interpolatedScaleAspectRatio=1),null==t.fixedAnchorSize&&(t.fixedAnchorSize=!1);for(var e=[],n=0;n<t.numLayers;){for(var r=[],a=[],s=[],o=[],i=n;i<t.strides.length&&t.strides[i]===t.strides[n];){var u=Mh(t.minScale,t.maxScale,i,t.strides.length);if(0===i&&t.reduceBoxesInLowestLayer)s.push(1),s.push(2),s.push(.5),o.push(.1),o.push(u),o.push(u);else{for(var l=0;l<t.aspectRatios.length;++l)s.push(t.aspectRatios[l]),o.push(u);if(t.interpolatedScaleAspectRatio>0){var c=i===t.strides.length-1?1:Mh(t.minScale,t.maxScale,i+1,t.strides.length);o.push(Math.sqrt(u*c)),s.push(t.interpolatedScaleAspectRatio)}}i++}for(var p=0;p<s.length;++p){var h=Math.sqrt(s[p]);r.push(o[p]/h),a.push(o[p]*h)}var d=0,f=0;if(t.featureMapHeight.length>0)d=t.featureMapHeight[n],f=t.featureMapWidth[n];else{var m=t.strides[n];d=Math.ceil(t.inputSizeHeight/m),f=Math.ceil(t.inputSizeWidth/m)}for(var g=0;g<d;++g)for(var y=0;y<f;++y)for(var b=0;b<r.length;++b){var w={xCenter:(y+t.anchorOffsetX)/f,yCenter:(g+t.anchorOffsetY)/d,width:0,height:0};t.fixedAnchorSize?(w.width=1,w.height=1):(w.width=a[b],w.height=r[b]),e.push(w)}n=i}return e}(Vh);var r=pu(this.anchors.map((function(t){return t.width}))),a=pu(this.anchors.map((function(t){return t.height}))),s=pu(this.anchors.map((function(t){return t.xCenter}))),o=pu(this.anchors.map((function(t){return t.yCenter})));this.anchorTensor={x:s,y:o,w:r,h:a}}return t.prototype.estimateHands=function(t,e){return yh(this,void 0,void 0,(function(){var n,r,a,s,o,i,u,l,c,p,h,d,f,m,g,y,b,w,v=this;return bh(this,(function(x){switch(x.label){case 0:return n=function(t){if(null==t)return gh({},Hh);var e=gh({},t);return null==e.flipHorizontal&&(e.flipHorizontal=Hh.flipHorizontal),null==e.staticImageMode&&(e.staticImageMode=Hh.staticImageMode),e}(e),null==t?(this.reset(),[2,[]]):(r=Eh(t),a=Sa((function(){var e=pa(_h(t),"float32");return n.flipHorizontal&&(e=ou(ec.flipLeftRight($a(e,0)),[0])),e})),s=this.prevHandRectsFromLandmarks,n.staticImageMode||null==s||s.length<this.maxHands?[4,this.detectPalm(a)]:[3,2]);case 1:return 0===(i=x.sent()).length?(this.reset(),a.dispose(),[2,[]]):(u=i.map((function(t){return v.palmDetectionToRoi(t,r)})),o=u,[3,3]);case 2:o=s,x.label=3;case 3:return.5,N=[],[o].forEach((function(t){return t.forEach((function(t){(N=N.filter((function(e){return function(t,e){var n=kh(t),r=kh(e);if(!function(t,e){return!(t.xMax<e.xMin||e.xMax<t.xMin||t.yMax<e.yMin||e.yMax<t.yMin)}(n,r))return 0;var a=Th(function(t,e){var n=Math.max(t.xMin,e.xMin),r=Math.min(t.xMax,e.xMax),a=Math.max(t.yMin,e.yMin),s=Math.min(t.yMax,e.yMax);return{xMin:n,xMax:r,yMin:a,yMax:s,width:Math.max(r-n,0),height:Math.max(s-a,0)}}(n,r)),s=Th(n)+Th(r)-a;return s>0?a/s:0}(t,e)<=.5}))).push(t)}))})),o=N,[4,Promise.all(o.map((function(t){return v.handLandmarks(t,a)})))];case 4:for(l=x.sent(),c=[],this.prevHandRectsFromLandmarks=[],p=0,h=l;p<h.length;p++)null!=(d=h[p])&&(f=d.landmarks,m=d.worldLandmarks,g=d.handScore,y=d.handedness,this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(f,r)),null!=(b=Ch(f,r))&&b.forEach((function(t,e){delete t.z,t.name=wh[e]})),null!=(w=m)&&w.forEach((function(t,e){t.name=wh[e]})),c.push({keypoints:b,keypoints3D:w,handedness:y,score:g}));return a.dispose(),[2,c]}var N}))}))},t.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),_a([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},t.prototype.reset=function(){this.prevHandRectsFromLandmarks=null},t.prototype.detectPalm=function(t){return yh(this,void 0,void 0,(function(){var e,n,r,a,s,o,i,u,l,c;return bh(this,(function(p){switch(p.label){case 0:return e=Ih(t,Gh),n=e.imageTensor,r=e.padding,a=this.detectorModel.predict(n),s=function(t){return Sa((function(){var e=function(t){return Sa((function(){return[is(t,[0,0,0],[1,-1,1]),is(t,[0,0,1],[1,-1,-1])]}))}(t),n=e[0],r=e[1];return{boxes:ou(r),logits:ou(n)}}))}(a),o=s.boxes,[4,Fh([i=s.logits,o],this.anchorTensor,Kh)];case 1:return 0===(u=p.sent()).length?(_a([n,a,i,o]),[2,u]):[4,Dh(u,this.maxHands,.3)];case 2:return l=p.sent(),c=function(t,e){void 0===t&&(t=[]);for(var n=e.left,r=e.top,a=e.left+e.right,s=e.top+e.bottom,o=0;o<t.length;o++){var i=t[o],u=i.locationData.relativeBoundingBox,l=(u.xMin-n)/(1-a),c=(u.yMin-r)/(1-s),p=u.width/(1-a),h=u.height/(1-s);u.xMin=l,u.yMin=c,u.width=p,u.height=h,u.xMax=l+p,u.yMax=c+h;var d=i.locationData.relativeKeypoints;d&&d.forEach((function(t){var e=(t.x-n)/(1-a),o=(t.y-r)/(1-s);t.x=e,t.y=o}))}return t}(l,r),_a([n,a,i,o]),[2,c]}}))}))},t.prototype.palmDetectionToRoi=function(t,e){return zh(function(t,e,n,r,a){var s="rect"===n?function(t,e,n){var r,a=t.locationData;if("boundingbox"===e)r=Oh(a.boundingBox);else{r=$h(a);var s=n.width,o=n.height;r.xCenter=Math.round(r.xCenter*s),r.yCenter=Math.round(r.yCenter*o),r.width=Math.round(r.width*s),r.height=Math.round(r.height*o)}return r}(t,e,r):function(t,e){var n=t.locationData;return"boundingbox"===e?Oh(n.relativeBoundingBox):$h(n)}(t,e);return a&&(s.rotation=function(t,e,n){var r,a=t.locationData,s=n.rotationVectorStartKeypointIndex,o=n.rotationVectorEndKeypointIndex;r=n.rotationVectorTargetAngle?n.rotationVectorTargetAngle:Math.PI*n.rotationVectorTargetAngleDegree/180;var i=a.relativeKeypoints[s].x*e.width,u=a.relativeKeypoints[s].y*e.height,l=a.relativeKeypoints[o].x*e.width,c=a.relativeKeypoints[o].y*e.height;return Sh(r-Math.atan2(-(c-u),l-i))}(t,r,a)),s}(t,"boundingbox","normRect",e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:2,rotationVectorTargetAngleDegree:90}),e,qh)},t.prototype.handLandmarks=function(t,e){return yh(this,void 0,void 0,(function(){var n,r,a,s,o,i,u,l,c,p,h,d,f,m,g,y;return bh(this,(function(b){switch(b.label){case 0:return n=Ih(e,Yh,t),r=n.imageTensor,a=n.padding,s=this.landmarkModel.execute(r,["Identity_2:0","Identity_1:0","Identity:0","Identity_3:0"]),o=s[0],i=s[1],u=s[2],l=s[3],[4,i.data()];case 1:return(c=b.sent()[0])<.5?(_a(s),_a(r),[2,null]):[4,u.data()];case 2:return p=b.sent()[0],h=p>=.5?"Left":"Right",[4,Ph(o,Xh)];case 3:return d=b.sent(),[4,Ph(l,Jh)];case 4:return f=b.sent(),m=function(t,e){var n=e.left,r=e.top,a=e.left+e.right,s=e.top+e.bottom;return t.map((function(t){return gh(gh({},t),{x:(t.x-n)/(1-a),y:(t.y-r)/(1-s),z:t.z/(1-a)})}))}(d,a),g=function(t,e,n){void 0===n&&(n={ignoreRotation:!1});for(var r=[],a=0,s=t;a<s.length;a++){var o=s[a],i=o.x-.5,u=o.y-.5,l=n.ignoreRotation?0:e.rotation,c=Math.cos(l)*i-Math.sin(l)*u,p=Math.sin(l)*i+Math.cos(l)*u;c=c*e.width+e.xCenter,p=p*e.height+e.yCenter;var h=o.z*e.width,d=gh({},o);d.x=c,d.y=p,d.z=h,r.push(d)}return r}(m,t),y=function(t,e){for(var n=[],r=0,a=t;r<a.length;r++){var s=a[r],o=s.x,i=s.y,u=e.rotation,l=Math.cos(u)*o-Math.sin(u)*i,c=Math.sin(u)*o+Math.cos(u)*i,p=gh({},s);p.x=l,p.y=c,n.push(p)}return n}(f,t),_a(s),_a(r),[2,{landmarks:g,worldLandmarks:y,handScore:c,handedness:h}]}}))}))},t.prototype.handLandmarksToRoi=function(t,e){return zh(function(t,e){for(var n=function(t,e){var n=t[0].x*e.width,r=t[0].y*e.height,a=(t[4].x+t[8].x)/2,s=(t[4].y+t[8].y)/2;return a=(a+t[6].x)/2*e.width,s=(s+t[6].y)/2*e.height,Sh(Math.PI/2-Math.atan2(-(s-r),a-n))}(t,e),r=Sh(-n),a=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,u=0,l=t;u<l.length;u++){var c=(g=l[u]).x,p=g.y;a=Math.min(a,c),s=Math.max(s,c),o=Math.min(o,p),i=Math.max(i,p)}var h=(s+a)/2,d=(i+o)/2;a=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(var f=0,m=t;f<m.length;f++){var g,y=((g=m[f]).x-h)*e.width,b=(g.y-d)*e.height,w=y*Math.cos(r)-b*Math.sin(r),v=y*Math.sin(r)+b*Math.cos(r);a=Math.min(a,w),s=Math.max(s,w),o=Math.min(o,v),i=Math.max(i,v)}var x=(s+a)/2,N=(i+o)/2,T=x*Math.cos(n)-N*Math.sin(n)+e.width*h,k=x*Math.sin(n)+N*Math.cos(n)+e.height*d,E=(s-a)/e.width,S=(i-o)/e.height;return{xCenter:T/e.width,yCenter:k/e.height,width:E,height:S,rotation:n}}([].concat(t.slice(0,4),t.slice(5,7),t.slice(9,11),t.slice(13,15),t.slice(17,19)),e),e,Wh)},t}();function Qh(t){return yh(this,void 0,void 0,(function(){var e,n,r,a,s,o;return bh(this,(function(i){switch(i.label){case 0:return e=function(t){if(null==t)return gh({},jh);var e=gh({},t);if(e.runtime="tfjs",null==e.maxHands&&(e.maxHands=jh.maxHands),null==e.modelType&&(e.modelType=jh.modelType),"lite"!==e.modelType&&"full"!==e.modelType)throw new Error("Model type must be one of lite or full, but got "+e.modelType);if(null==e.detectorModelUrl)if("lite"===e.modelType)e.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1";else e.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1";if(null==e.landmarkModelUrl)if("lite"===e.modelType)e.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1";else e.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1";return e}(t),n=e.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=e.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([mh(e.detectorModelUrl,{fromTFHub:n}),mh(e.landmarkModelUrl,{fromTFHub:r})])];case 1:return a=i.sent(),s=a[0],o=a[1],[2,new Zh(s,o,e.maxHands)]}}))}))}(Uh||(Uh={})).MediaPipeHands="MediaPipeHands";var td;td=new URL(s("27Lyk").resolve("4PsyW"),import.meta.url).toString();var ed;ed=new URL(s("27Lyk").resolve("8uYMa"),import.meta.url).toString();var nd;nd=new URL(s("27Lyk").resolve("493dy"),import.meta.url).toString(),(async()=>{const t=await function(t,e){return yh(this,void 0,void 0,(function(){var n,r;return bh(this,(function(a){if(t===Uh.MediaPipeHands){if(r=void 0,null!=(n=e)){if("tfjs"===n.runtime)return[2,Qh(n)];if("mediapipe"===n.runtime)return[2,Nh(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(t+" is not a supported model name.")}))}))}(Uh.MediaPipeHands,{runtime:"mediapipe",maxHands:2,modelType:"full",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/hands"}),e=document.createElement("video"),n=document.getElementById("area"),r=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}});e.srcObject=r,await e.play(),n.height=e.videoHeight,n.width=e.videoWidth;const a=new Image;a.src=new URL(td),await new Promise((t=>{a.addEventListener("load",t)}));const s=new Image;s.src=new URL(ed),await new Promise((t=>{s.addEventListener("load",t)}));const o=new Image;o.src=new URL(nd),await new Promise((t=>{o.addEventListener("load",t)}));const i=async()=>{const r=n.getContext("2d");r.drawImage(e,0,0,e.videoWidth,e.videoHeight),t.estimateHands(e,{flipHorizontal:!1}).then((t=>{if("object"!=typeof t[0])return;let e={};t[0].keypoints.forEach((t=>{t.name&&(e[t.name]=t.y)}));const n=[!!e.thumb_ip&&(e.thumb_ip>e.thumb_tip??0),!!e.index_finger_pip&&(e.index_finger_pip>e.index_finger_tip??0),!!e.middle_finger_pip&&(e.middle_finger_pip>e.middle_finger_tip??0),!!e.ring_finger_pip&&(e.ring_finger_pip>e.ring_finger_tip??0),!!e.pinky_finger_pip&&(e.pinky_finger_pip>e.pinky_finger_tip??0)];n.slice(1).includes(!1)?n[1]&&n[2]?(r.drawImage(a,0,0),console.log(1)):n.slice(1).includes(!0)||(r.drawImage(o,0,0),console.log(2)):(r.drawImage(s,0,0),console.log(0))})).catch(alert),requestAnimationFrame(i)};i()})();
//# sourceMappingURL=index.06b4b043.js.map
