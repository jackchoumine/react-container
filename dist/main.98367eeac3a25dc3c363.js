(()=>{var e,r,t,n,a={7410:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof auth)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof auth)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"auth")})).then((()=>auth))},5662:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof dashboard)return e();t.l("http://localhost:3003/remoteEntry.js",(t=>{if("undefined"!=typeof dashboard)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"dashboard")})).then((()=>dashboard))},5070:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof marketing)return e();t.l("http://localhost:3001/remoteEntry.js",(t=>{if("undefined"!=typeof marketing)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"marketing")})).then((()=>marketing))}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return a[e](r,r.exports,i),r.exports}i.m=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{45:"c837dcbe5a47b262d7ac",52:"5b006bd93c750f9bac07",124:"84c37a49e0ac7e196c2d",271:"1dee78e0e71d537f0460",294:"ebbcda8f6a844faa12c6",518:"cc645c34059225ce70ac",647:"be35ffe46423d035c14b",671:"6a1b4d3f2c1ad41e7d6e",856:"d527bbeec289a298e5aa",935:"a0b3f91c31fce0e5d310"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="container:",i.l=(t,n,a)=>{if(e[t])e[t].push(n);else{var o,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",r+a),o.src=t),e[t]=[n];var l=(r,n)=>{o.onerror=o.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),s&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={45:[4688],518:[4323],647:[8507]},n={4323:["default","./AuthApp",7410],4688:["default","./MarketingApp",5070],8507:["default","./DashboardApp",5662]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var s=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),a[e]=()=>{throw r},o.p=0},u=(e,t,n,a,i,u)=>{try{var f=e(t,n);if(!f||!f.then)return i(f,a,u);var d=f.then((e=>i(e,a)),s);if(!u)return d;r.push(o.p=d)}catch(e){s(e)}},f=(e,r,n)=>u(r.get,o[1],t,0,d,n),d=r=>{o.p=1,a[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,f,t):s()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],s="container",u=(e,r,t)=>{var n=o[e]=o[e]||{},a=n[r];(!a||!a.loaded&&s>a.from)&&(n[r]={get:t,from:s})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return d.push(a.then(o,r));var s=o(a);if(s&&s.then)return d.push(s.catch(r))}catch(e){r(e)}},d=[];switch(t){case"default":u("react-dom","17.0.1",(()=>Promise.all([i.e(935),i.e(271)]).then((()=>()=>i(3935))))),u("react-router-dom","5.2.0",(()=>Promise.all([i.e(856),i.e(671),i.e(271)]).then((()=>()=>i(7856))))),u("react","17.0.1",(()=>i.e(294).then((()=>()=>i(7294))))),f(5070),f(7410),f(5662)}return d.length?e[t]=Promise.all(d).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,s=1,u=!0;;s++,i++){var f,d,l=s<t.length?(typeof t[s])[0]:"";if(i>=n.length||"o"==(d=(typeof(f=n[i]))[0]))return!u||("u"==l?s>a&&!o:""==l!=o);if("u"==d){if(!u||"u"!=l)return!1}else if(u)if(l==d)if(s<=a){if(f!=t[s])return!1}else{if(o?f>t[s]:f<t[s])return!1;f!=t[s]&&(u=!1)}else if("s"!=l&&"n"!=l){if(o||s<=a)return!1;u=!1,s--}else{if(s<=a||d<l!=o)return!1;u=!1}else"s"!=l&&"n"!=l&&(u=!1,s--)}}var p=[],c=p.pop.bind(p);for(i=1;i<t.length;i++){var h=t[i];p.push(1==h?c()|c():2==h?c()&c():h?r(h,n):!c())}return!!c()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],s=(typeof i)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var s=r&&i.o(r,n)&&t(r,n,a);return s?(e=>(e.loaded=1,e.get()))(s):o()})),s={},u={7271:()=>n("default","react",[1,17,0,1],(()=>i.e(294).then((()=>()=>i(7294))))),334:()=>n("default","react-router-dom",[1,5,2,0],(()=>i.e(856).then((()=>()=>i(7856))))),7650:()=>n("default","react-dom",[1,17,0,1],(()=>i.e(935).then((()=>()=>i(3935)))))},f={52:[334,7650],271:[7271]};i.f.consumes=(e,r)=>{i.o(f,e)&&f[e].forEach((e=>{if(i.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,a[e]=t=>{delete o[e],t.exports=r()}},n=r=>{delete s[e],a[e]=t=>{throw delete o[e],r}};try{var f=u[e]();f.then?r.push(s[e]=f.then(t).catch(n)):t(f)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(271!=r){var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=i.p+i.u(r),s=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+r)}else e[r]=0};var r=self.webpackChunkcontainer=self.webpackChunkcontainer||[],t=r.push.bind(r);r.push=r=>{for(var n,a,[o,s,u]=r,f=0,d=[];f<o.length;f++)a=o[f],i.o(e,a)&&e[a]&&d.push(e[a][0]),e[a]=0;for(n in s)i.o(s,n)&&(i.m[n]=s[n]);for(u&&u(i),t(r);d.length;)d.shift()()}})(),Promise.all([i.e(671),i.e(124),i.e(271),i.e(52)]).then(i.bind(i,8052))})();