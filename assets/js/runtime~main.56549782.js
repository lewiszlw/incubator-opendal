(()=>{"use strict";var e,t,r,a,o,c={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return c[e].call(r.exports,r,r.exports,n),r.exports}n.m=c,e=[],n.O=(t,r,a,o)=>{if(!r){var c=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var f=!0,b=0;b<r.length;b++)(!1&o||c>=o)&&Object.keys(n.O).every((e=>n.O[e](r[b])))?r.splice(b--,1):(f=!1,o<c&&(c=o));if(f){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,n.d(o,c),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({13:"01a85c17",53:"935f2afb",89:"62a401e9",96:"7f3d7384",103:"ccc49370",157:"283e63f8",195:"c4f5d8e4",212:"20f77fac",309:"4fb2b91a",358:"f3200a52",372:"1db64337",477:"b2f554cd",514:"1be78505",533:"b2b675dd",535:"814f3328",608:"9e4087bc",610:"6875c492",661:"3806ecb0",713:"a7023ddc",757:"57a16c1d",817:"14eb3368",832:"ece86388",886:"a6aa9e1f",918:"17896441",948:"e19a6781",983:"ae4554eb"}[e]||e)+"."+{13:"287b54fd",53:"6dbf45de",89:"d56a4a7e",96:"7c0b7562",103:"1536bedc",157:"c5889d28",195:"afa21a77",210:"5a199272",212:"4a6cd8f4",309:"c4e0977c",358:"3a8c6075",372:"1963a497",477:"f67273fa",514:"f44eed00",529:"1811366d",533:"035f3452",535:"03be8526",608:"c481a347",610:"5f8b7a56",661:"d2c86b76",713:"edd4bb6a",757:"edaa5791",817:"cd092571",832:"f1337e80",886:"65b2b652",918:"a9c0d133",948:"39489a1f",972:"6be868f4",983:"16bcad40"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="opendal-website:",n.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var f,b;if(void 0!==r)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){f=u;break}}f||(b=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),b&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"918","01a85c17":"13","935f2afb":"53","62a401e9":"89","7f3d7384":"96",ccc49370:"103","283e63f8":"157",c4f5d8e4:"195","20f77fac":"212","4fb2b91a":"309",f3200a52:"358","1db64337":"372",b2f554cd:"477","1be78505":"514",b2b675dd:"533","814f3328":"535","9e4087bc":"608","6875c492":"610","3806ecb0":"661",a7023ddc:"713","57a16c1d":"757","14eb3368":"817",ece86388:"832",a6aa9e1f:"886",e19a6781:"948",ae4554eb:"983"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=n.p+n.u(t),f=new Error;n.l(c,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],f=r[1],b=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(b)var i=b(n)}for(t&&t(r);d<c.length;d++)o=c[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},r=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();