if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const o=e=>s(e,n),r={module:{uri:n},exports:c,require:o};a[n]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/caZ1_6fDLJV8ZOGgYVBKD/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/caZ1_6fDLJV8ZOGgYVBKD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/191-9eb936b007592772.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/231-19cbb3a2081217f4.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/2443530c-7c0701bcd76f0419.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/765-2e6bfca5c96cbf22.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/app/layout-80f38d258617be5c.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/app/page-44f1b70baddbfcbb.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/app/post/%5Bid%5D/page-b73442c6f5676785.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/app/search/page-349508649c5cd38a.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/app/subject/%5Bid%5D/page-4b7d954cfa821b20.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/main-app-7f512704980c0ca4.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/main-e410255746d0ee6e.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-193bd20931ab0314.js",revision:"caZ1_6fDLJV8ZOGgYVBKD"},{url:"/_next/static/css/6aa1e00a33d508e6.css",revision:"6aa1e00a33d508e6"},{url:"/_next/static/media/miya.61503739.jpg",revision:"77ee11790b5ba403d032349ffe25ca8a"},{url:"/_next/static/media/photo.57968345.webp",revision:"2e2d795777c7af82676eafc8c5493e3c"},{url:"/_next/static/media/photo_1.e6171553.jpeg",revision:"292c0b08f11635d545f6bf9cd5e49a3b"},{url:"/_next/static/media/photo_19.6c388076.jpg",revision:"772f0e9e89cf366cfa2e92cf7bd81eda"},{url:"/_next/static/media/photo_2.62e51724.jpg",revision:"4484041da67fcb960f2a4719a08bae09"},{url:"/_next/static/media/photo_20.b224f701.jpg",revision:"4fe5cdcf2aaf2aef2f9bc25f0f0e3d76"},{url:"/_next/static/media/photo_21.a85301e2.jpg",revision:"3e0a43378bcc6d74aee2d65311ab8337"},{url:"/_next/static/media/photo_26.2a47b310.jpg",revision:"ea3350ed5909c4514da5ee1e038aff20"},{url:"/_next/static/media/photo_2_1.bd94f52a.jpeg",revision:"d7450623047a1a03548033f236f2e186"},{url:"/_next/static/media/photo_4.5c7ac953.webp",revision:"dbedbe7038e436364df3ae2f7b460674"},{url:"/_next/static/media/photo_5.378f82f9.jpg",revision:"8167f77953ff3d40e421b0a9720a7357"},{url:"/_next/static/media/photo_7.8f96a465.jpg",revision:"2711e03113fb5f0d5cf67b4f67d68e0a"},{url:"/_next/static/media/photo_8.1c25177c.jpg",revision:"f999dac3a0654438cb056dbb8596ed17"},{url:"/_next/static/media/photo_9.928acac9.jpg",revision:"48b3a7fa314ebb02730a43728f01ec15"},{url:"/_next/static/media/shoukei.fc14ce28.png",revision:"79c058910950df3c431ed8c18a75d50c"},{url:"/_next/static/media/ue.e534938a.png",revision:"ec1ff3fb8ee3fd83a97d9139386e5d31"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!!e&&!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
