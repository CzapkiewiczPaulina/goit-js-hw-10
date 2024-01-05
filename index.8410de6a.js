!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),h=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return s.Date.now()};function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=a.test(e);return f||c.test(e)?u(e.slice(2),f?2:8):i.test(e)?NaN:+e}e=function(t,e,n){var r,o,i,a,c,u,f=0,l=!1,s=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=r,i=o;return r=o=void 0,f=e,a=t.apply(i,n)}function w(t){return f=t,c=setTimeout(x,e),l?g(t):a}function b(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-f>=i}function x(){var t=v();if(b(t))return E(t);c=setTimeout(x,function(t){var n=e-(t-u);return s?d(n,i-(t-f)):n}(t))}function E(t){return c=void 0,h&&r?g(t):(r=o=void 0,a)}function L(){var t=v(),n=b(t);if(r=arguments,o=this,u=t,n){if(void 0===c)return w(u);if(s)return c=setTimeout(x,e),g(u)}return void 0===c&&(c=setTimeout(x,e)),a}return e=m(e)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?p(m(n.maxWait)||0,e):i,h="trailing"in n?!!n.trailing:h),L.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=u=o=c=void 0},L.flush=function(){return void 0===c?a:E(v())},L};var g={};function w(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){w(i,r,o,a,c,"next",t)}function c(t){w(i,r,o,a,c,"throw",t)}a(void 0)}))}};var b={},x=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=function(t,e,n){var r=s;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(C([])));x&&x!==n&&r.call(x,i)&&(w=x);var E=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=g,u(E,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new j(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(b);try{regeneratorRuntime=x}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=x:Function("r","regeneratorRuntime = r")(x)}var E,L=(E=t(g)(t(b).mark((function e(n){var r,o;return t(b).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://restcountries.com/v2/name/".concat(n,"?fields=name.official,capital,population,flags.svg,languages"));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error(r.statusText);case 6:return t.next=8,r.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:throw t.prev=12,t.t0=t.catch(0),new Error("Error fetching data: ".concat(t.t0.message));case 15:case"end":return t.stop()}}),e,null,[[0,12]])}))),function(t){return E.apply(this,arguments)}),j=L,O=document.getElementById("search-box"),_=document.getElementById("results-container");function T(){_.innerHTML=""}function N(t){var e=document.createElement("div");e.classList.add("country-card");var n=document.createElement("img");n.src=t.flags.svg,n.alt="".concat(t.name.official," flag"),e.appendChild(n);var r=document.createElement("div"),o=document.createElement("p");o.textContent=t.name.official;var i=document.createElement("p");i.textContent="Capital: ".concat(t.capital||"N/A");var a=document.createElement("p");a.textContent="Population: ".concat(t.population||"N/A");var c=document.createElement("p");return c.textContent="Languages: ".concat(t.languages?t.languages.join(", "):"N/A"),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(c),e.appendChild(r),e}function C(){notiflix.Notify.failure("Oops, there is no country with that name")}O.addEventListener("input",t(e)((function(){var t=O.value.trim();if(""===t)return void T();j(t).then((function(t){t.length>10?notiflix.Notify.warning("Too many matches found. Please enter a more specific name."):t.length>=2&&t.length<=10?function(t){T(),t.forEach((function(t){var e=N(t);_.appendChild(e)}))}(t):1===t.length?function(t){T();var e=N(t);_.appendChild(e)}(t[0]):C()})).catch((function(t){console.error(t.message),C()}))}),300))}();
//# sourceMappingURL=index.8410de6a.js.map
