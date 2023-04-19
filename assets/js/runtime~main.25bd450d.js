(()=>{"use strict";var e,t,r,a,o,f={},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return f[e].call(r.exports,r,r.exports,c),r.exports}c.m=f,e=[],c.O=(t,r,a,o)=>{if(!r){var f=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(n=!1,o<f&&(f=o));if(n){e.splice(d--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,c.d(o,f),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({13:"01a85c17",53:"935f2afb",89:"a6aa9e1f",96:"7f3d7384",103:"ccc49370",157:"283e63f8",195:"c4f5d8e4",212:"20f77fac",309:"4fb2b91a",358:"f3200a52",477:"b2f554cd",514:"1be78505",533:"b2b675dd",535:"814f3328",608:"9e4087bc",610:"6875c492",661:"3806ecb0",713:"a7023ddc",832:"ece86388",918:"17896441",971:"c377a04b",983:"ae4554eb"}[e]||e)+"."+{13:"287b54fd",36:"f2337da6",48:"5a81fd4c",53:"df72863b",89:"1049ea14",96:"882542d4",103:"1536bedc",157:"c5889d28",195:"2cbb4039",212:"8aa0c248",309:"c4e0977c",358:"3a8c6075",477:"63d13840",514:"3c796d84",533:"035f3452",535:"03be8526",608:"c481a347",610:"5f8b7a56",661:"d2c86b76",713:"edd4bb6a",832:"f1337e80",918:"49094f9c",971:"58dacdfc",972:"6be868f4",983:"ddb62539"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="opendal-website:",c.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var b=document.getElementsByTagName("script"),d=0;d<b.length;d++){var u=b[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),i&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"918","01a85c17":"13","935f2afb":"53",a6aa9e1f:"89","7f3d7384":"96",ccc49370:"103","283e63f8":"157",c4f5d8e4:"195","20f77fac":"212","4fb2b91a":"309",f3200a52:"358",b2f554cd:"477","1be78505":"514",b2b675dd:"533","814f3328":"535","9e4087bc":"608","6875c492":"610","3806ecb0":"661",a7023ddc:"713",ece86388:"832",c377a04b:"971",ae4554eb:"983"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=c.p+c.u(t),n=new Error;c.l(f,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],i=r[2],b=0;if(f.some((t=>0!==e[t]))){for(a in n)c.o(n,a)&&(c.m[a]=n[a]);if(i)var d=i(c)}for(t&&t(r);b<f.length;b++)o=f[b],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(d)},r=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();