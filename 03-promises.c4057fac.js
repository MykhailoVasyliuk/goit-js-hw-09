var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("iQIUW");const i=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),l=document.querySelector("input[name=step]"),a=document.querySelector('input[name="amount"]');function d(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();const n=Number(a.value),t=Number(u.value),o=Number(l.value);for(let e=0;e<n;e+=1)d(e+1,o*e+t).then((({position:e,delay:n})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.c4057fac.js.map
