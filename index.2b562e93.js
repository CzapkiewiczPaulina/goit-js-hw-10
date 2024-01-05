function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,a,c,u,f=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,f=e,a=t.apply(r,n)}function b(t){return f=t,c=setTimeout(w,e),l?y(t):a}function E(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-f>=r}function w(){var t=m();if(E(t))return x(t);c=setTimeout(w,function(t){var n=e-(t-u);return s?p(n,r-(t-f)):n}(t))}function x(t){return c=void 0,v&&o?y(t):(o=i=void 0,a)}function C(){var t=m(),n=E(t);if(o=arguments,i=this,u=t,n){if(void 0===c)return b(u);if(s)return c=setTimeout(w,e),y(u)}return void 0===c&&(c=setTimeout(w,e)),a}return e=h(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(h(n.maxWait)||0,e):r,v="trailing"in n?!!n.trailing:v),C.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=u=i=c=void 0},C.flush=function(){return void 0===c?a:x(m())},C};var v=async t=>{try{const e=await fetch(`https://restcountries.com/v2/name/${t}?fields=name.official,capital,population,flags.svg,languages`);if(!e.ok)throw new Error(e.statusText);return await e.json()}catch(t){throw new Error(`Error fetching data: ${t.message}`)}};const y=document.getElementById("search-box"),b=document.getElementById("results-container");function E(){b.innerHTML=""}function w(t){const e=document.createElement("div");e.classList.add("country-card");const n=document.createElement("img");n.src=t.flags.svg,n.alt=`${t.name.official} flag`,e.appendChild(n);const o=document.createElement("div"),i=document.createElement("p");i.textContent=t.name.official;const r=document.createElement("p");r.textContent=`Capital: ${t.capital||"N/A"}`;const a=document.createElement("p");a.textContent=`Population: ${t.population||"N/A"}`;const c=document.createElement("p");return c.textContent=`Languages: ${t.languages?t.languages.join(", "):"N/A"}`,o.appendChild(i),o.appendChild(r),o.appendChild(a),o.appendChild(c),e.appendChild(o),e}function x(){notiflix.Notify.failure("Oops, there is no country with that name")}y.addEventListener("input",t(e)((function(){const t=y.value.trim();if(""===t)return void E();v(t).then((t=>{t.length>10?notiflix.Notify.warning("Too many matches found. Please enter a more specific name."):t.length>=2&&t.length<=10?function(t){E(),t.forEach((t=>{const e=w(t);b.appendChild(e)}))}(t):1===t.length?function(t){E();const e=w(t);b.appendChild(e)}(t[0]):x()})).catch((t=>{console.error(t.message),x()}))}),300));
//# sourceMappingURL=index.2b562e93.js.map
