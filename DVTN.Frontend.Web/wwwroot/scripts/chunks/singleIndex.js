import{a as Oe,c as Pe}from"./_commonjsHelpers.js";var ae={exports:{}};/*! algoliasearch-lite.umd.js | 4.22.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */(function(c,l){(function(y,O){c.exports=O()})(Pe,function(){function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(n){y(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q(e,t){if(e==null)return{};var r,n,o=function(i,a){if(i==null)return{};var f,p,m={},b=Object.keys(i);for(p=0;p<b.length;p++)f=b[p],a.indexOf(f)>=0||(m[f]=i[f]);return m}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function A(e,t){return function(r){if(Array.isArray(r))return r}(e)||function(r,n){if(Symbol.iterator in Object(r)||Object.prototype.toString.call(r)==="[object Arguments]"){var o=[],u=!0,i=!1,a=void 0;try{for(var f,p=r[Symbol.iterator]();!(u=(f=p.next()).done)&&(o.push(f.value),!n||o.length!==n);u=!0);}catch(m){i=!0,a=m}finally{try{u||p.return==null||p.return()}finally{if(i)throw a}}return o}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function J(e){return function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}(e)||function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ue(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return t===void 0&&(t=e.localStorage||window.localStorage),t},o=function(){return JSON.parse(n().getItem(r)||"{}")},u=function(a){n().setItem(r,JSON.stringify(a))},i=function(){var a=e.timeToLive?1e3*e.timeToLive:null,f=o(),p=Object.fromEntries(Object.entries(f).filter(function(b){return A(b,2)[1].timestamp!==void 0}));if(u(p),a){var m=Object.fromEntries(Object.entries(p).filter(function(b){var g=A(b,2)[1],S=new Date().getTime();return!(g.timestamp+a<S)}));u(m)}};return{get:function(a,f){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){i();var m=JSON.stringify(a);return o()[m]}).then(function(m){return Promise.all([m?m.value:f(),m!==void 0])}).then(function(m){var b=A(m,2),g=b[0],S=b[1];return Promise.all([g,S||p.miss(g)])}).then(function(m){return A(m,1)[0]})},set:function(a,f){return Promise.resolve().then(function(){var p=o();return p[JSON.stringify(a)]={timestamp:new Date().getTime(),value:f},n().setItem(r,JSON.stringify(p)),f})},delete:function(a){return Promise.resolve().then(function(){var f=o();delete f[JSON.stringify(a)],n().setItem(r,JSON.stringify(f))})},clear:function(){return Promise.resolve().then(function(){n().removeItem(r)})}}}function E(e){var t=J(e.caches),r=t.shift();return r===void 0?{get:function(n,o){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},i=o();return i.then(function(a){return Promise.all([a,u.miss(a)])}).then(function(a){return A(a,1)[0]})},set:function(n,o){return Promise.resolve(o)},delete:function(n){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(n,o){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(n,o,u).catch(function(){return E({caches:t}).get(n,o,u)})},set:function(n,o){return r.set(n,o).catch(function(){return E({caches:t}).set(n,o)})},delete:function(n){return r.delete(n).catch(function(){return E({caches:t}).delete(n)})},clear:function(){return r.clear().catch(function(){return E({caches:t}).clear()})}}}function _(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},u=JSON.stringify(r);if(u in t)return Promise.resolve(e.serializable?JSON.parse(t[u]):t[u]);var i=n(),a=o&&o.miss||function(){return Promise.resolve()};return i.then(function(f){return a(f)}).then(function(){return i})},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function ie(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function M(e,t){return t&&Object.keys(t).forEach(function(r){e[r]=t[r](e)}),e}function R(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,function(){return encodeURIComponent(r[o++])})}var F={WithinQueryParameters:0,WithinHeaders:1};function U(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach(function(o){["timeout","headers","queryParameters","data","cacheable"].indexOf(o)===-1&&(n[o]=r[o])}),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var C={Read:1,Write:2,Any:3},z=1,se=2,V=3;function K(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z;return s(s({},e),{},{status:t,lastUpdate:Date.now()})}function G(e){return typeof e=="string"?{protocol:"https",url:e,accept:C.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||C.Any}}var H="GET",D="POST";function ce(e,t){return Promise.all(t.map(function(r){return e.get(r,function(){return Promise.resolve(K(r))})})).then(function(r){var n=r.filter(function(i){return function(a){return a.status===z||Date.now()-a.lastUpdate>12e4}(i)}),o=r.filter(function(i){return function(a){return a.status===V&&Date.now()-a.lastUpdate<=12e4}(i)}),u=[].concat(J(n),J(o));return{getTimeout:function(i,a){return(o.length===0&&i===0?1:o.length+3+i)*a},statelessHosts:u.length>0?u.map(function(i){return G(i)}):t}})}function $(e,t,r,n){var o=[],u=function(g,S){if(!(g.method===H||g.data===void 0&&S.data===void 0)){var d=Array.isArray(g.data)?g.data:s(s({},g.data),S.data);return JSON.stringify(d)}}(r,n),i=function(g,S){var d=s(s({},g.headers),S.headers),P={};return Object.keys(d).forEach(function(T){var j=d[T];P[T.toLowerCase()]=j}),P}(e,n),a=r.method,f=r.method!==H?{}:s(s({},r.data),n.data),p=s(s(s({"x-algolia-agent":e.userAgent.value},e.queryParameters),f),n.queryParameters),m=0,b=function g(S,d){var P=S.pop();if(P===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:X(o)};var T={data:u,headers:i,method:a,url:fe(P,r.path,p),connectTimeout:d(m,e.timeouts.connect),responseTimeout:d(m,n.timeout)},j=function(v){var h={request:T,response:v,host:P,triesLeft:S.length};return o.push(h),h},W={onSuccess:function(v){return function(h){try{return JSON.parse(h.content)}catch(w){throw function(x,N){return{name:"DeserializationError",message:x,response:N}}(w.message,h)}}(v)},onRetry:function(v){var h=j(v);return v.isTimedOut&&m++,Promise.all([e.logger.info("Retryable failure",Y(h)),e.hostsCache.set(P,K(P,v.isTimedOut?V:se))]).then(function(){return g(S,d)})},onFail:function(v){throw j(v),function(h,w){var x=h.content,N=h.status,I=x;try{I=JSON.parse(x).message}catch{}return function(L,Q,be){return{name:"ApiError",message:L,status:Q,transporterStackTrace:be}}(I,N,w)}(v,X(o))}};return e.requester.send(T).then(function(v){return function(h,w){return function(x){var N=x.status;return x.isTimedOut||function(I){var L=I.isTimedOut,Q=I.status;return!L&&~~Q==0}(x)||~~(N/100)!=2&&~~(N/100)!=4}(h)?w.onRetry(h):~~(h.status/100)==2?w.onSuccess(h):w.onFail(h)}(v,W)})};return ce(e.hostsCache,t).then(function(g){return b(J(g.statelessHosts).reverse(),g.getTimeout)})}function le(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(r){var n="; ".concat(r.segment).concat(r.version!==void 0?" (".concat(r.version,")"):"");return t.value.indexOf(n)===-1&&(t.value="".concat(t.value).concat(n)),t}};return t}function fe(e,t,r){var n=B(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat(t.charAt(0)==="/"?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function B(e){return Object.keys(e).map(function(t){return R("%s=%s",t,(r=e[t],Object.prototype.toString.call(r)==="[object Object]"||Object.prototype.toString.call(r)==="[object Array]"?JSON.stringify(e[t]):e[t]));var r}).join("&")}function X(e){return e.map(function(t){return Y(t)})}function Y(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return s(s({},e),{},{request:s(s({},e.request),{},{headers:s(s({},e.request.headers),t)})})}var me=function(e){var t=e.appId,r=function(o,u,i){var a={"x-algolia-api-key":i,"x-algolia-application-id":u};return{headers:function(){return o===F.WithinHeaders?a:{}},queryParameters:function(){return o===F.WithinQueryParameters?a:{}}}}(e.authMode!==void 0?e.authMode:F.WithinHeaders,t,e.apiKey),n=function(o){var u=o.hostsCache,i=o.logger,a=o.requester,f=o.requestsCache,p=o.responsesCache,m=o.timeouts,b=o.userAgent,g=o.hosts,S=o.queryParameters,d={hostsCache:u,logger:i,requester:a,requestsCache:f,responsesCache:p,timeouts:m,userAgent:b,headers:o.headers,queryParameters:S,hosts:g.map(function(P){return G(P)}),read:function(P,T){var j=U(T,d.timeouts.read),W=function(){return $(d,d.hosts.filter(function(h){return(h.accept&C.Read)!=0}),P,j)};if((j.cacheable!==void 0?j.cacheable:P.cacheable)!==!0)return W();var v={request:P,mappedRequestOptions:j,transporter:{queryParameters:d.queryParameters,headers:d.headers}};return d.responsesCache.get(v,function(){return d.requestsCache.get(v,function(){return d.requestsCache.set(v,W()).then(function(h){return Promise.all([d.requestsCache.delete(v),h])},function(h){return Promise.all([d.requestsCache.delete(v),Promise.reject(h)])}).then(function(h){var w=A(h,2);return w[0],w[1]})})},{miss:function(h){return d.responsesCache.set(v,h)}})},write:function(P,T){return $(d,d.hosts.filter(function(j){return(j.accept&C.Write)!=0}),P,U(T,d.timeouts.write))}};return d}(s(s({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:C.Read},{url:"".concat(t,".algolia.net"),accept:C.Write}].concat(ie([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:s(s(s({},r.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:s(s({},r.queryParameters()),e.queryParameters)}));return M({transporter:n,appId:t,addAlgoliaAgent:function(o,u){n.userAgent.add({segment:o,version:u})},clearCache:function(){return Promise.all([n.requestsCache.clear(),n.responsesCache.clear()]).then(function(){})}},e.methods)},he=function(e){return function(t,r){return t.method===H?e.transporter.read(t,r):e.transporter.write(t,r)}},Z=function(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return M(n,r.methods)}},ee=function(e){return function(t,r){var n=t.map(function(o){return s(s({},o),{},{params:B(o.params||{})})});return e.transporter.read({method:D,path:"1/indexes/*/queries",data:{requests:n},cacheable:!0},r)}},te=function(e){return function(t,r){return Promise.all(t.map(function(n){var o=n.params,u=o.facetName,i=o.facetQuery,a=q(o,["facetName","facetQuery"]);return Z(e)(n.indexName,{methods:{searchForFacetValues:re}}).searchForFacetValues(u,i,s(s({},r),a))}))}},de=function(e){return function(t,r,n){return e.transporter.read({method:D,path:R("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},pe=function(e){return function(t,r){return e.transporter.read({method:D,path:R("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},re=function(e){return function(t,r,n){return e.transporter.read({method:D,path:R("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},ge=1,ve=2,ye=3;function ne(e,t,r){var n,o={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(u){return new Promise(function(i){var a=new XMLHttpRequest;a.open(u.method,u.url,!0),Object.keys(u.headers).forEach(function(b){return a.setRequestHeader(b,u.headers[b])});var f,p=function(b,g){return setTimeout(function(){a.abort(),i({status:0,content:g,isTimedOut:!0})},1e3*b)},m=p(u.connectTimeout,"Connection timeout");a.onreadystatechange=function(){a.readyState>a.OPENED&&f===void 0&&(clearTimeout(m),f=p(u.responseTimeout,"Socket timeout"))},a.onerror=function(){a.status===0&&(clearTimeout(m),clearTimeout(f),i({content:a.responseText||"Network request failed",status:a.status,isTimedOut:!1}))},a.onload=function(){clearTimeout(m),clearTimeout(f),i({content:a.responseText,status:a.status,isTimedOut:!1})},a.send(u.data)})}},logger:(n=ye,{debug:function(u,i){return ge>=n&&console.debug(u,i),Promise.resolve()},info:function(u,i){return ve>=n&&console.info(u,i),Promise.resolve()},error:function(u,i){return console.error(u,i),Promise.resolve()}}),responsesCache:_(),requestsCache:_({serializable:!1}),hostsCache:E({caches:[ue({key:"".concat("4.22.1","-").concat(e)}),_()]}),userAgent:le("4.22.1").add({segment:"Browser",version:"lite"}),authMode:F.WithinQueryParameters};return me(s(s(s({},o),r),{},{methods:{search:ee,searchForFacetValues:te,multipleQueries:ee,multipleSearchForFacetValues:te,customRequest:he,initIndex:function(u){return function(i){return Z(u)(i,{methods:{search:pe,searchForFacetValues:re,findAnswers:de}})}}}}))}return ne.version="4.22.1",ne})})(ae);var Se=ae.exports;const Ne=Oe(Se);function k(c){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},k(c)}var je=["configure"];function we(c,l,y){return l=qe(l),l in c?Object.defineProperty(c,l,{value:y,enumerable:!0,configurable:!0,writable:!0}):c[l]=y,c}function qe(c){var l=Te(c,"string");return k(l)==="symbol"?l:String(l)}function Te(c,l){if(k(c)!=="object"||c===null)return c;var y=c[Symbol.toPrimitive];if(y!==void 0){var O=y.call(c,l||"default");if(k(O)!=="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function xe(c,l){if(c==null)return{};var y=Ae(c,l),O,s;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(c);for(s=0;s<q.length;s++)O=q[s],!(l.indexOf(O)>=0)&&Object.prototype.propertyIsEnumerable.call(c,O)&&(y[O]=c[O])}return y}function Ae(c,l){if(c==null)return{};var y={},O=Object.keys(c),s,q;for(q=0;q<O.length;q++)s=O[q],!(l.indexOf(s)>=0)&&(y[s]=c[s]);return y}function oe(c){c.configure;var l=xe(c,je);return l}function Ee(c){return{$$type:"ais.singleIndex",stateToRoute:function(y){return oe(y[c]||{})},routeToState:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return we({},c,oe(y))}}}export{Ne as a,Ee as s};
