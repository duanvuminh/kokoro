if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>a(e,n),r={module:{uri:n},exports:c,require:o};s[n]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/L6diEtMS02wSIEHjuCFSL/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/L6diEtMS02wSIEHjuCFSL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/114-608247ed9f4317b9.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/398-57eaa66c211a402a.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/659-4bbeb9eebc49098a.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/87bc1fd9-318ba5b8d6cee888.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/app/layout-166103f6142ef417.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/app/loading-58e27cd40cf5f3e6.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/app/mean/%5Bid%5D/page-ac7a222213c847be.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/app/page-95c82d1e248dbf28.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/app/post/%5BpostType%5D/%5Bid%5D/page-dcfe5907b45007e5.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/main-2c7babbe4da7226b.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/main-app-50111550f201ef5a.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4d87ac36366a6bb9.js",revision:"L6diEtMS02wSIEHjuCFSL"},{url:"/_next/static/css/c1df732698c1d933.css",revision:"c1df732698c1d933"},{url:"/_next/static/media/miya.61503739.jpg",revision:"77ee11790b5ba403d032349ffe25ca8a"},{url:"/_next/static/media/photo.57968345.webp",revision:"2e2d795777c7af82676eafc8c5493e3c"},{url:"/_next/static/media/photo_1.e6171553.jpeg",revision:"292c0b08f11635d545f6bf9cd5e49a3b"},{url:"/_next/static/media/photo_19.6c388076.jpg",revision:"772f0e9e89cf366cfa2e92cf7bd81eda"},{url:"/_next/static/media/photo_2.62e51724.jpg",revision:"4484041da67fcb960f2a4719a08bae09"},{url:"/_next/static/media/photo_20.b224f701.jpg",revision:"4fe5cdcf2aaf2aef2f9bc25f0f0e3d76"},{url:"/_next/static/media/photo_21.a85301e2.jpg",revision:"3e0a43378bcc6d74aee2d65311ab8337"},{url:"/_next/static/media/photo_26.2a47b310.jpg",revision:"ea3350ed5909c4514da5ee1e038aff20"},{url:"/_next/static/media/photo_2_1.bd94f52a.jpeg",revision:"d7450623047a1a03548033f236f2e186"},{url:"/_next/static/media/photo_4.5c7ac953.webp",revision:"dbedbe7038e436364df3ae2f7b460674"},{url:"/_next/static/media/photo_5.378f82f9.jpg",revision:"8167f77953ff3d40e421b0a9720a7357"},{url:"/_next/static/media/photo_7.8f96a465.jpg",revision:"2711e03113fb5f0d5cf67b4f67d68e0a"},{url:"/_next/static/media/photo_8.1c25177c.jpg",revision:"f999dac3a0654438cb056dbb8596ed17"},{url:"/_next/static/media/photo_9.928acac9.jpg",revision:"48b3a7fa314ebb02730a43728f01ec15"},{url:"/_next/static/media/shoukei.fc14ce28.png",revision:"79c058910950df3c431ed8c18a75d50c"},{url:"/_next/static/media/ue.e534938a.png",revision:"ec1ff3fb8ee3fd83a97d9139386e5d31"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
