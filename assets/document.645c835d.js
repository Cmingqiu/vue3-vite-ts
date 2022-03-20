import{u as $e,_ as ge}from"./index.d3d957b9.js";import{a as Ae,y as Ne,a4 as _e,o as le,g as fe,j as E,k as A,u as Q,F as Pe,r as Te,i as Ue}from"./vendor.092955a4.js";var J={exports:{}},ce=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},je=ce,w=Object.prototype.toString;function V(r){return Array.isArray(r)}function I(r){return typeof r=="undefined"}function Be(r){return r!==null&&!I(r)&&r.constructor!==null&&!I(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function de(r){return w.call(r)==="[object ArrayBuffer]"}function De(r){return w.call(r)==="[object FormData]"}function Le(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&de(r.buffer),e}function qe(r){return typeof r=="string"}function Fe(r){return typeof r=="number"}function he(r){return r!==null&&typeof r=="object"}function P(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function ke(r){return w.call(r)==="[object Date]"}function He(r){return w.call(r)==="[object File]"}function Ie(r){return w.call(r)==="[object Blob]"}function pe(r){return w.call(r)==="[object Function]"}function Me(r){return he(r)&&pe(r.pipe)}function Je(r){return w.call(r)==="[object URLSearchParams]"}function Ve(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function We(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function W(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),V(r))for(var t=0,s=r.length;t<s;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function M(){var r={};function e(n,a){P(r[a])&&P(n)?r[a]=M(r[a],n):P(n)?r[a]=M({},n):V(n)?r[a]=n.slice():r[a]=n}for(var t=0,s=arguments.length;t<s;t++)W(arguments[t],e);return r}function ze(r,e,t){return W(e,function(n,a){t&&typeof n=="function"?r[a]=je(n,t):r[a]=n}),r}function Xe(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:V,isArrayBuffer:de,isBuffer:Be,isFormData:De,isArrayBufferView:Le,isString:qe,isNumber:Fe,isObject:he,isPlainObject:P,isUndefined:I,isDate:ke,isFile:He,isBlob:Ie,isFunction:pe,isStream:Me,isURLSearchParams:Je,isStandardBrowserEnv:We,forEach:W,merge:M,extend:ze,trim:Ve,stripBOM:Xe},R=h;function Z(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var me=function(e,t,s){if(!t)return e;var n;if(s)n=s(t);else if(R.isURLSearchParams(t))n=t.toString();else{var a=[];R.forEach(t,function(l,m){l===null||typeof l=="undefined"||(R.isArray(l)?m=m+"[]":l=[l],R.forEach(l,function(f){R.isDate(f)?f=f.toISOString():R.isObject(f)&&(f=JSON.stringify(f)),a.push(Z(m)+"="+Z(f))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Ke=h;function U(){this.handlers=[]}U.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};U.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};U.prototype.forEach=function(e){Ke.forEach(this.handlers,function(s){s!==null&&e(s)})};var Ge=U,Ye=h,Qe=function(e,t){Ye.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},ve=function(e,t,s,n,a){return e.config=t,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ze=ve,be=function(e,t,s,n,a){var o=new Error(e);return Ze(o,t,s,n,a)},er=be,rr=function(e,t,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):t(er("Request failed with status code "+s.status,s.config,null,s.request,s))},N=h,tr=N.isStandardBrowserEnv()?function(){return{write:function(t,s,n,a,o,u){var l=[];l.push(t+"="+encodeURIComponent(s)),N.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),N.isString(a)&&l.push("path="+a),N.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),nr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},sr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},ar=nr,ir=sr,or=function(e,t){return e&&!ar(t)?ir(e,t):t},q=h,ur=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],lr=function(e){var t={},s,n,a;return e&&q.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=q.trim(u.substr(0,a)).toLowerCase(),n=q.trim(u.substr(a+1)),s){if(t[s]&&ur.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([n]):t[s]=t[s]?t[s]+", "+n:n}}),t},ee=h,fr=ee.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),s;function n(a){var o=a;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=n(window.location.href),function(o){var u=ee.isString(o)?n(o):o;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function z(r){this.message=r}z.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};z.prototype.__CANCEL__=!0;var j=z,_=h,cr=rr,dr=tr,hr=me,pr=or,mr=lr,vr=fr,F=be,yr=ye,br=j,re=function(e){return new Promise(function(s,n){var a=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}_.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+y)}var d=pr(e.baseURL,e.url);i.open(e.method.toUpperCase(),hr(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function G(){if(!!i){var v="getAllResponseHeaders"in i?mr(i.getAllResponseHeaders()):null,x=!u||u==="text"||u==="json"?i.responseText:i.response,S={data:x,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};cr(function(L){s(L),m()},function(L){n(L),m()},S),i=null}}if("onloadend"in i?i.onloadend=G:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(G)},i.onabort=function(){!i||(n(F("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(F("Network Error",e,null,i)),i=null},i.ontimeout=function(){var x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",S=e.transitional||yr;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),n(F(x,e,S.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},_.isStandardBrowserEnv()){var Y=(e.withCredentials||vr(d))&&e.xsrfCookieName?dr.read(e.xsrfCookieName):void 0;Y&&(o[e.xsrfHeaderName]=Y)}"setRequestHeader"in i&&_.forEach(o,function(x,S){typeof a=="undefined"&&S.toLowerCase()==="content-type"?delete o[S]:i.setRequestHeader(S,x)}),_.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!i||(n(!v||v&&v.type?new br("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),i.send(a)})},c=h,te=Qe,Er=ve,wr=ye,Sr={"Content-Type":"application/x-www-form-urlencoded"};function ne(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Cr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=re),r}function xr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(r)}var B={transitional:wr,adapter:Cr(),transformRequest:[function(e,t){return te(t,"Accept"),te(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(ne(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(ne(t,"application/json"),xr(e)):e}],transformResponse:[function(e){var t=this.transitional||B.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?Er(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){B.headers[e]={}});c.forEach(["post","put","patch"],function(e){B.headers[e]=c.merge(Sr)});var X=B,Rr=h,Or=X,$r=function(e,t,s){var n=this||Or;return Rr.forEach(s,function(o){e=o.call(n,e,t)}),e},Ee=function(e){return!!(e&&e.__CANCEL__)},se=h,k=$r,gr=Ee,Ar=X,Nr=j;function H(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Nr("canceled")}var _r=function(e){H(e),e.headers=e.headers||{},e.data=k.call(e,e.data,e.headers,e.transformRequest),e.headers=se.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),se.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Ar.adapter;return t(e).then(function(n){return H(e),n.data=k.call(e,n.data,n.headers,e.transformResponse),n},function(n){return gr(n)||(H(e),n&&n.response&&(n.response.data=k.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,we=function(e,t){t=t||{};var s={};function n(i,f){return p.isPlainObject(i)&&p.isPlainObject(f)?p.merge(i,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function a(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!p.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function l(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var y=m[f]||a,d=y(f);p.isUndefined(d)&&y!==l||(s[f]=d)}),s},Se={version:"0.26.1"},Pr=Se.version,K={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){K[r]=function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r}});var ae={};K.transitional=function(e,t,s){function n(a,o){return"[Axios v"+Pr+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!ae[o]&&(ae[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,o,u):!0}};function Tr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var s=Object.keys(r),n=s.length;n-- >0;){var a=s[n],o=e[a];if(o){var u=r[a],l=u===void 0||o(u,a,r);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+a)}}var Ur={assertOptions:Tr,validators:K},Ce=h,jr=me,ie=Ge,oe=_r,D=we,xe=Ur,O=xe.validators;function g(r){this.defaults=r,this.interceptors={request:new ie,response:new ie}}g.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=D(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&xe.assertOptions(s,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(a=a&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!a){var l=[oe,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=t;n.length;){var i=n.shift(),f=n.shift();try{m=i(m)}catch(y){f(y);break}}try{u=oe(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};g.prototype.getUri=function(e){return e=D(this.defaults,e),jr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ce.forEach(["delete","get","head","options"],function(e){g.prototype[e]=function(t,s){return this.request(D(s||{},{method:e,url:t,data:(s||{}).data}))}});Ce.forEach(["post","put","patch"],function(e){g.prototype[e]=function(t,s,n){return this.request(D(n||{},{method:e,url:t,data:s}))}});var Br=g,Dr=j;function $(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(s){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](s);t._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(o){t.subscribe(o),n=o}).then(s);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Dr(n),e(t.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};$.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};$.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};$.source=function(){var e,t=new $(function(n){e=n});return{token:t,cancel:e}};var Lr=$,qr=function(e){return function(s){return e.apply(null,s)}},Fr=h,kr=function(e){return Fr.isObject(e)&&e.isAxiosError===!0},ue=h,Hr=ce,T=Br,Ir=we,Mr=X;function Re(r){var e=new T(r),t=Hr(T.prototype.request,e);return ue.extend(t,T.prototype,e),ue.extend(t,e),t.create=function(n){return Re(Ir(r,n))},t}var b=Re(Mr);b.Axios=T;b.Cancel=j;b.CancelToken=Lr;b.isCancel=Ee;b.VERSION=Se.version;b.all=function(e){return Promise.all(e)};b.spread=qr;b.isAxiosError=kr;J.exports=b;J.exports.default=b;var C=J.exports;C.defaults.baseURL="/api";C.defaults.timeout=1e4;C.defaults.headers.post["Content-Type"]="application/json;charset=utf-8";C.interceptors.request.use(r=>{const e=localStorage.getItem("token")||"";return e&&((r.headers=r.headers||{}).token=e),r},r=>Promise.reject(r));C.interceptors.response.use(r=>{const{status:e,data:t}=r;return e!==200?Promise.reject(`'\u54CD\u5E94\u5931\u8D25\uFF0C\u54CD\u5E94\u7801\uFF1A${e}\uFF01`):t.code===0?t.data:Promise.reject({})});function Jr(r){return C.post("/login",r)}function Vr(){return C.get("/currentUser")}const Wr=E("h1",null,"Hello World",-1),zr=E("hr",null,null,-1),Xr=E("div",null,"useStore:",-1),Kr=Ae({props:{msg:{default:""}},setup(r){const e=Ne(""),t=$e();function s(){Jr({username:"username",password:"password"}).then().catch()}function n(){t.increase(3)}return _e(async()=>{const a=await Vr();e.value=a,s()}),(a,o)=>(le(),fe(Pe,null,[Wr,E("div",null,"msg : "+A(r.msg),1),E("div",null,"user : "+A(e.value),1),zr,Xr,E("div",null,"count:"+A(Q(t).count),1),E("div",null,"double count:"+A(Q(t).doubleCount),1),E("button",{onClick:n},"+")],64))}}),Gr={name:"Document",components:{HelloWorld:Kr},setup(){return{}}},Yr=E("div",null,"document",-1);function Qr(r,e,t,s,n,a){const o=Te("HelloWorld");return le(),fe("section",null,[Yr,Ue(o,{msg:"Hello"})])}var rt=ge(Gr,[["render",Qr]]);export{rt as default};
