(()=>{"use strict";var e,t,r,a,o,f={},c={};function n(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return f[e].call(r.exports,r,r.exports,n),r.exports}n.m=f,e=[],n.O=(t,r,a,o)=>{if(!r){var f=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var c=!0,b=0;b<r.length;b++)(!1&o||f>=o)&&Object.keys(n.O).every((e=>n.O[e](r[b])))?r.splice(b--,1):(c=!1,o<f&&(f=o));if(c){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,n.d(o,f),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({13:"01a85c17",53:"935f2afb",89:"62a401e9",103:"ccc49370",157:"283e63f8",195:"c4f5d8e4",301:"b2f554cd",309:"4fb2b91a",358:"f3200a52",372:"1db64337",455:"07df3158",477:"1957547a",514:"1be78505",533:"b2b675dd",535:"814f3328",608:"9e4087bc",610:"6875c492",661:"3806ecb0",713:"a7023ddc",716:"a0405932",719:"8f4159f2",757:"57a16c1d",794:"02514dc9",804:"2cbf1097",817:"14eb3368",832:"ece86388",886:"a6aa9e1f",918:"17896441",948:"e19a6781",983:"ae4554eb"}[e]||e)+"."+{13:"3397570e",53:"f828429f",89:"79c3c952",103:"1536bedc",157:"c5889d28",195:"6fc9a0b5",301:"01304f6e",309:"c4e0977c",358:"3a8c6075",372:"7baed11e",455:"5ec2c321",477:"840edb05",506:"8dd92e91",514:"bf9ed0cc",529:"2a6fecbd",533:"035f3452",535:"03be8526",608:"5d00d7d2",610:"5f8b7a56",661:"d2c86b76",713:"edd4bb6a",716:"5faea452",719:"99986870",757:"325d98c7",794:"a7883f1d",804:"07acd207",817:"cfb577e6",832:"f1337e80",886:"65b2b652",918:"091b1783",948:"39489a1f",972:"5fafb8e0",983:"e605a507"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="opendal-website:",n.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var c,b;if(void 0!==r)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){c=u;break}}c||(b=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),b&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"918","01a85c17":"13","935f2afb":"53","62a401e9":"89",ccc49370:"103","283e63f8":"157",c4f5d8e4:"195",b2f554cd:"301","4fb2b91a":"309",f3200a52:"358","1db64337":"372","07df3158":"455","1957547a":"477","1be78505":"514",b2b675dd:"533","814f3328":"535","9e4087bc":"608","6875c492":"610","3806ecb0":"661",a7023ddc:"713",a0405932:"716","8f4159f2":"719","57a16c1d":"757","02514dc9":"794","2cbf1097":"804","14eb3368":"817",ece86388:"832",a6aa9e1f:"886",e19a6781:"948",ae4554eb:"983"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=n.p+n.u(t),c=new Error;n.l(f,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",c.name="ChunkLoadError",c.type=o,c.request=f,a[1](c)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],c=r[1],b=r[2],d=0;if(f.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(b)var i=b(n)}for(t&&t(r);d<f.length;d++)o=f[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},r=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();