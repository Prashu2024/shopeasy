(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function s0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sf={exports:{}},es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function LE(){if(jg)return es;jg=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var g in u)g!=="key"&&(f[g]=u[g])}else f=u;return u=f.ref,{$$typeof:r,type:l,key:d,ref:u!==void 0?u:null,props:f}}return es.Fragment=n,es.jsx=i,es.jsxs=i,es}var Lg;function kE(){return Lg||(Lg=1,sf.exports=LE()),sf.exports}var v=kE(),lf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function zE(){if(kg)return oe;kg=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,k={};function j(w,V,$){this.props=w,this.context=V,this.refs=k,this.updater=$||C}j.prototype.isReactComponent={},j.prototype.setState=function(w,V){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,V,"setState")},j.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function L(){}L.prototype=j.prototype;function G(w,V,$){this.props=w,this.context=V,this.refs=k,this.updater=$||C}var I=G.prototype=new L;I.constructor=G,_(I,j.prototype),I.isPureReactComponent=!0;var Q=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},Z=Object.prototype.hasOwnProperty;function X(w,V,$,K,ee,he){return $=he.ref,{$$typeof:r,type:w,key:V,ref:$!==void 0?$:null,props:he}}function ye(w,V){return X(w.type,V,void 0,void 0,void 0,w.props)}function ge(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function Ve(w){var V={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function($){return V[$]})}var ct=/\/+/g;function $e(w,V){return typeof w=="object"&&w!==null&&w.key!=null?Ve(""+w.key):V.toString(36)}function hn(){}function pn(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(hn,hn):(w.status="pending",w.then(function(V){w.status==="pending"&&(w.status="fulfilled",w.value=V)},function(V){w.status==="pending"&&(w.status="rejected",w.reason=V)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Xe(w,V,$,K,ee){var he=typeof w;(he==="undefined"||he==="boolean")&&(w=null);var re=!1;if(w===null)re=!0;else switch(he){case"bigint":case"string":case"number":re=!0;break;case"object":switch(w.$$typeof){case r:case n:re=!0;break;case b:return re=w._init,Xe(re(w._payload),V,$,K,ee)}}if(re)return ee=ee(w),re=K===""?"."+$e(w,0):K,Q(ee)?($="",re!=null&&($=re.replace(ct,"$&/")+"/"),Xe(ee,V,$,"",function(rt){return rt})):ee!=null&&(ge(ee)&&(ee=ye(ee,$+(ee.key==null||w&&w.key===ee.key?"":(""+ee.key).replace(ct,"$&/")+"/")+re)),V.push(ee)),1;re=0;var Fe=K===""?".":K+":";if(Q(w))for(var Ee=0;Ee<w.length;Ee++)K=w[Ee],he=Fe+$e(K,Ee),re+=Xe(K,V,$,he,ee);else if(Ee=T(w),typeof Ee=="function")for(w=Ee.call(w),Ee=0;!(K=w.next()).done;)K=K.value,he=Fe+$e(K,Ee++),re+=Xe(K,V,$,he,ee);else if(he==="object"){if(typeof w.then=="function")return Xe(pn(w),V,$,K,ee);throw V=String(w),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return re}function B(w,V,$){if(w==null)return w;var K=[],ee=0;return Xe(w,K,"","",function(he){return V.call($,he,ee++)}),K}function F(w){if(w._status===-1){var V=w._result;V=V(),V.then(function($){(w._status===0||w._status===-1)&&(w._status=1,w._result=$)},function($){(w._status===0||w._status===-1)&&(w._status=2,w._result=$)}),w._status===-1&&(w._status=0,w._result=V)}if(w._status===1)return w._result.default;throw w._result}var te=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function de(){}return oe.Children={map:B,forEach:function(w,V,$){B(w,function(){V.apply(this,arguments)},$)},count:function(w){var V=0;return B(w,function(){V++}),V},toArray:function(w){return B(w,function(V){return V})||[]},only:function(w){if(!ge(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},oe.Component=j,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=G,oe.StrictMode=l,oe.Suspense=h,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,oe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return Y.H.useMemoCache(w)}},oe.cache=function(w){return function(){return w.apply(null,arguments)}},oe.cloneElement=function(w,V,$){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var K=_({},w.props),ee=w.key,he=void 0;if(V!=null)for(re in V.ref!==void 0&&(he=void 0),V.key!==void 0&&(ee=""+V.key),V)!Z.call(V,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&V.ref===void 0||(K[re]=V[re]);var re=arguments.length-2;if(re===1)K.children=$;else if(1<re){for(var Fe=Array(re),Ee=0;Ee<re;Ee++)Fe[Ee]=arguments[Ee+2];K.children=Fe}return X(w.type,ee,void 0,void 0,he,K)},oe.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},oe.createElement=function(w,V,$){var K,ee={},he=null;if(V!=null)for(K in V.key!==void 0&&(he=""+V.key),V)Z.call(V,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ee[K]=V[K]);var re=arguments.length-2;if(re===1)ee.children=$;else if(1<re){for(var Fe=Array(re),Ee=0;Ee<re;Ee++)Fe[Ee]=arguments[Ee+2];ee.children=Fe}if(w&&w.defaultProps)for(K in re=w.defaultProps,re)ee[K]===void 0&&(ee[K]=re[K]);return X(w,he,void 0,void 0,null,ee)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(w){return{$$typeof:g,render:w}},oe.isValidElement=ge,oe.lazy=function(w){return{$$typeof:b,_payload:{_status:-1,_result:w},_init:F}},oe.memo=function(w,V){return{$$typeof:m,type:w,compare:V===void 0?null:V}},oe.startTransition=function(w){var V=Y.T,$={};Y.T=$;try{var K=w(),ee=Y.S;ee!==null&&ee($,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(de,te)}catch(he){te(he)}finally{Y.T=V}},oe.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},oe.use=function(w){return Y.H.use(w)},oe.useActionState=function(w,V,$){return Y.H.useActionState(w,V,$)},oe.useCallback=function(w,V){return Y.H.useCallback(w,V)},oe.useContext=function(w){return Y.H.useContext(w)},oe.useDebugValue=function(){},oe.useDeferredValue=function(w,V){return Y.H.useDeferredValue(w,V)},oe.useEffect=function(w,V,$){var K=Y.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(w,V)},oe.useId=function(){return Y.H.useId()},oe.useImperativeHandle=function(w,V,$){return Y.H.useImperativeHandle(w,V,$)},oe.useInsertionEffect=function(w,V){return Y.H.useInsertionEffect(w,V)},oe.useLayoutEffect=function(w,V){return Y.H.useLayoutEffect(w,V)},oe.useMemo=function(w,V){return Y.H.useMemo(w,V)},oe.useOptimistic=function(w,V){return Y.H.useOptimistic(w,V)},oe.useReducer=function(w,V,$){return Y.H.useReducer(w,V,$)},oe.useRef=function(w){return Y.H.useRef(w)},oe.useState=function(w){return Y.H.useState(w)},oe.useSyncExternalStore=function(w,V,$){return Y.H.useSyncExternalStore(w,V,$)},oe.useTransition=function(){return Y.H.useTransition()},oe.version="19.1.0",oe}var zg;function md(){return zg||(zg=1,lf.exports=zE()),lf.exports}var M=md();const cs=s0(M);var of={exports:{}},ts={},uf={exports:{}},cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function IE(){return Ig||(Ig=1,function(r){function n(B,F){var te=B.length;B.push(F);e:for(;0<te;){var de=te-1>>>1,w=B[de];if(0<u(w,F))B[de]=F,B[te]=w,te=de;else break e}}function i(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var F=B[0],te=B.pop();if(te!==F){B[0]=te;e:for(var de=0,w=B.length,V=w>>>1;de<V;){var $=2*(de+1)-1,K=B[$],ee=$+1,he=B[ee];if(0>u(K,te))ee<w&&0>u(he,K)?(B[de]=he,B[ee]=te,de=ee):(B[de]=K,B[$]=te,de=$);else if(ee<w&&0>u(he,te))B[de]=he,B[ee]=te,de=ee;else break e}}return F}function u(B,F){var te=B.sortIndex-F.sortIndex;return te!==0?te:B.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var d=Date,g=d.now();r.unstable_now=function(){return d.now()-g}}var h=[],m=[],b=1,S=null,T=3,C=!1,_=!1,k=!1,j=!1,L=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Q(B){for(var F=i(m);F!==null;){if(F.callback===null)l(m);else if(F.startTime<=B)l(m),F.sortIndex=F.expirationTime,n(h,F);else break;F=i(m)}}function Y(B){if(k=!1,Q(B),!_)if(i(h)!==null)_=!0,Z||(Z=!0,$e());else{var F=i(m);F!==null&&Xe(Y,F.startTime-B)}}var Z=!1,X=-1,ye=5,ge=-1;function Ve(){return j?!0:!(r.unstable_now()-ge<ye)}function ct(){if(j=!1,Z){var B=r.unstable_now();ge=B;var F=!0;try{e:{_=!1,k&&(k=!1,G(X),X=-1),C=!0;var te=T;try{t:{for(Q(B),S=i(h);S!==null&&!(S.expirationTime>B&&Ve());){var de=S.callback;if(typeof de=="function"){S.callback=null,T=S.priorityLevel;var w=de(S.expirationTime<=B);if(B=r.unstable_now(),typeof w=="function"){S.callback=w,Q(B),F=!0;break t}S===i(h)&&l(h),Q(B)}else l(h);S=i(h)}if(S!==null)F=!0;else{var V=i(m);V!==null&&Xe(Y,V.startTime-B),F=!1}}break e}finally{S=null,T=te,C=!1}F=void 0}}finally{F?$e():Z=!1}}}var $e;if(typeof I=="function")$e=function(){I(ct)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,pn=hn.port2;hn.port1.onmessage=ct,$e=function(){pn.postMessage(null)}}else $e=function(){L(ct,0)};function Xe(B,F){X=L(function(){B(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_next=function(B){switch(T){case 1:case 2:case 3:var F=3;break;default:F=T}var te=T;T=F;try{return B()}finally{T=te}},r.unstable_requestPaint=function(){j=!0},r.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=T;T=B;try{return F()}finally{T=te}},r.unstable_scheduleCallback=function(B,F,te){var de=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?de+te:de):te=de,B){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=te+w,B={id:b++,callback:F,priorityLevel:B,startTime:te,expirationTime:w,sortIndex:-1},te>de?(B.sortIndex=te,n(m,B),i(h)===null&&B===i(m)&&(k?(G(X),X=-1):k=!0,Xe(Y,te-de))):(B.sortIndex=w,n(h,B),_||C||(_=!0,Z||(Z=!0,$e()))),B},r.unstable_shouldYield=Ve,r.unstable_wrapCallback=function(B){var F=T;return function(){var te=T;T=F;try{return B.apply(this,arguments)}finally{T=te}}}}(cf)),cf}var Bg;function BE(){return Bg||(Bg=1,uf.exports=IE()),uf.exports}var ff={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function HE(){if(Hg)return st;Hg=1;var r=md();function n(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,m,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:h,containerInfo:m,implementation:b}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,st.createPortal=function(h,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return f(h,m,null,b)},st.flushSync=function(h){var m=d.T,b=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=m,l.p=b,l.d.f()}},st.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},st.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},st.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var b=m.as,S=g(b,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:C}):b==="script"&&l.d.X(h,{crossOrigin:S,integrity:T,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},st.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=g(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},st.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,S=g(b,m.crossOrigin);l.d.L(h,b,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},st.preloadModule=function(h,m){if(typeof h=="string")if(m){var b=g(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},st.requestFormReset=function(h){l.d.r(h)},st.unstable_batchedUpdates=function(h,m){return h(m)},st.useFormState=function(h,m,b){return d.H.useFormState(h,m,b)},st.useFormStatus=function(){return d.H.useHostTransitionStatus()},st.version="19.1.0",st}var Pg;function PE(){if(Pg)return ff.exports;Pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),ff.exports=HE(),ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function qE(){if(qg)return ts;qg=1;var r=BE(),n=md(),i=PE();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,s=t;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(s=o.return,s!==null){a=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return g(o),e;if(c===s)return g(o),t;c=c.sibling}throw Error(l(188))}if(a.return!==s.return)a=o,s=c;else{for(var p=!1,y=o.child;y;){if(y===a){p=!0,a=o,s=c;break}if(y===s){p=!0,s=o,a=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===a){p=!0,a=c,s=o;break}if(y===s){p=!0,s=c,a=o;break}y=y.sibling}if(!p)throw Error(l(189))}}if(a.alternate!==s)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=ct&&e[ct]||e["@@iterator"],typeof e=="function"?e:null)}var hn=Symbol.for("react.client.reference");function pn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===hn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case j:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case Z:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case I:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:pn(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return pn(e(t))}catch{}}return null}var Xe=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},de=[],w=-1;function V(e){return{current:e}}function $(e){0>w||(e.current=de[w],de[w]=null,w--)}function K(e,t){w++,de[w]=e.current,e.current=t}var ee=V(null),he=V(null),re=V(null),Fe=V(null);function Ee(e,t){switch(K(re,t),K(he,e),K(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?og(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=og(t),e=ug(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(ee),K(ee,e)}function rt(){$(ee),$(he),$(re)}function Er(e){e.memoizedState!==null&&K(Fe,e);var t=ee.current,a=ug(t,e.type);t!==a&&(K(he,e),K(ee,a))}function mn(e){he.current===e&&($(ee),$(he)),Fe.current===e&&($(Fe),Ki._currentValue=te)}var Ot=Object.prototype.hasOwnProperty,$o=r.unstable_scheduleCallback,Xo=r.unstable_cancelCallback,hb=r.unstable_shouldYield,pb=r.unstable_requestPaint,Jt=r.unstable_now,mb=r.unstable_getCurrentPriorityLevel,qd=r.unstable_ImmediatePriority,Vd=r.unstable_UserBlockingPriority,Ns=r.unstable_NormalPriority,gb=r.unstable_LowPriority,Gd=r.unstable_IdlePriority,yb=r.log,vb=r.unstable_setDisableYieldValue,ri=null,vt=null;function Hn(e){if(typeof yb=="function"&&vb(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ri,e)}catch{}}var bt=Math.clz32?Math.clz32:Eb,bb=Math.log,Sb=Math.LN2;function Eb(e){return e>>>=0,e===0?32:31-(bb(e)/Sb|0)|0}var Ms=256,Us=4194304;function _r(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function js(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=s&134217727;return y!==0?(s=y&~c,s!==0?o=_r(s):(p&=y,p!==0?o=_r(p):a||(a=y&~e,a!==0&&(o=_r(a))))):(y=s&~c,y!==0?o=_r(y):p!==0?o=_r(p):a||(a=s&~e,a!==0&&(o=_r(a)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:o}function ai(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _b(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(){var e=Ms;return Ms<<=1,(Ms&4194048)===0&&(Ms=256),e}function $d(){var e=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),e}function Fo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ii(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wb(e,t,a,s,o,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,E=e.expirationTimes,O=e.hiddenUpdates;for(a=p&~a;0<a;){var H=31-bt(a),q=1<<H;y[H]=0,E[H]=-1;var D=O[H];if(D!==null)for(O[H]=null,H=0;H<D.length;H++){var U=D[H];U!==null&&(U.lane&=-536870913)}a&=~q}s!==0&&Xd(e,s,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function Xd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-bt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Fd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-bt(a),o=1<<s;o&t|e[s]&t&&(e[s]|=t),a&=~o}}function Ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kd(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Cg(e.type))}function Tb(e,t){var a=F.p;try{return F.p=e,t()}finally{F.p=a}}var Pn=Math.random().toString(36).slice(2),at="__reactFiber$"+Pn,ft="__reactProps$"+Pn,Jr="__reactContainer$"+Pn,Zo="__reactEvents$"+Pn,xb="__reactListeners$"+Pn,Ab="__reactHandles$"+Pn,Qd="__reactResources$"+Pn,si="__reactMarker$"+Pn;function Jo(e){delete e[at],delete e[ft],delete e[Zo],delete e[xb],delete e[Ab]}function Wr(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Jr]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=hg(e);e!==null;){if(a=e[at])return a;e=hg(e)}return t}e=a,a=e.parentNode}return null}function ea(e){if(e=e[at]||e[Jr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ta(e){var t=e[Qd];return t||(t=e[Qd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[si]=!0}var Zd=new Set,Jd={};function wr(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(Jd[e]=t,e=0;e<t.length;e++)Zd.add(t[e])}var Rb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},eh={};function Cb(e){return Ot.call(eh,e)?!0:Ot.call(Wd,e)?!1:Rb.test(e)?eh[e]=!0:(Wd[e]=!0,!1)}function Ls(e,t,a){if(Cb(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ks(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function gn(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+s)}}var Wo,th;function ra(e){if(Wo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||"",th=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wo+e+th}var eu=!1;function tu(e,t){if(!e||eu)return"";eu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(U){var D=U}Reflect.construct(e,[],q)}else{try{q.call()}catch(U){D=U}e.call(q.prototype)}}else{try{throw Error()}catch(U){D=U}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(U){if(U&&D&&typeof U.stack=="string")return[U.stack,D.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var E=p.split(`
`),O=y.split(`
`);for(o=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(s===E.length||o===O.length)for(s=E.length-1,o=O.length-1;1<=s&&0<=o&&E[s]!==O[o];)o--;for(;1<=s&&0<=o;s--,o--)if(E[s]!==O[o]){if(s!==1||o!==1)do if(s--,o--,0>o||E[s]!==O[o]){var H=`
`+E[s].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=s&&0<=o);break}}}finally{eu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ra(a):""}function Ob(e){switch(e.tag){case 26:case 27:case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return tu(e.type,!1);case 11:return tu(e.type.render,!1);case 1:return tu(e.type,!0);case 31:return ra("Activity");default:return""}}function nh(e){try{var t="";do t+=Ob(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Db(e){var t=rh(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){s=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zs(e){e._valueTracker||(e._valueTracker=Db(e))}function ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=rh(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nb=/[\n"\\]/g;function Nt(e){return e.replace(Nb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function nu(e,t,a,s,o,c,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?ru(e,p,Dt(t)):a!=null?ru(e,p,Dt(a)):s!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Dt(y):e.removeAttribute("name")}function ih(e,t,a,s,o,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;a=a!=null?""+Dt(a):"",t=t!=null?""+Dt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=y?e.checked:!!s,e.defaultChecked=!!s,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function ru(e,t,a){t==="number"&&Is(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function aa(e,t,a,s){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Dt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function sh(e,t,a){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Dt(a):""}function lh(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(l(92));if(Xe(s)){if(1<s.length)throw Error(l(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=Dt(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Mb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oh(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||Mb.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function uh(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in t)s=t[o],t.hasOwnProperty(o)&&a[o]!==s&&oh(e,o,s)}else for(var c in t)t.hasOwnProperty(c)&&oh(e,c,t[c])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ub=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bs(e){return jb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var iu=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,la=null;function ch(e){var t=ea(e);if(t&&(e=t.stateNode)){var a=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(nu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var o=s[ft]||null;if(!o)throw Error(l(90));nu(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&ah(s)}break e;case"textarea":sh(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&aa(e,!!a.multiple,t,!1)}}}var lu=!1;function fh(e,t,a){if(lu)return e(t,a);lu=!0;try{var s=e(t);return s}finally{if(lu=!1,(sa!==null||la!==null)&&(Tl(),sa&&(t=sa,e=la,la=sa=null,ch(t),e)))for(t=0;t<e.length;t++)ch(e[t])}}function oi(e,t){var a=e.stateNode;if(a===null)return null;var s=a[ft]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(yn)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){ou=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{ou=!1}var qn=null,uu=null,Hs=null;function dh(){if(Hs)return Hs;var e,t=uu,a=t.length,s,o="value"in qn?qn.value:qn.textContent,c=o.length;for(e=0;e<a&&t[e]===o[e];e++);var p=a-e;for(s=1;s<=p&&t[a-s]===o[c-s];s++);return Hs=o.slice(e,1<s?1-s:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function hh(){return!1}function dt(e){function t(a,s,o,c,p){this._reactName=a,this._targetInst=o,this.type=s,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?qs:hh,this.isPropagationStopped=hh,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=dt(Tr),ci=b({},Tr,{view:0,detail:0}),Lb=dt(ci),cu,fu,fi,Gs=b({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(cu=e.screenX-fi.screenX,fu=e.screenY-fi.screenY):fu=cu=0,fi=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),ph=dt(Gs),kb=b({},Gs,{dataTransfer:0}),zb=dt(kb),Ib=b({},ci,{relatedTarget:0}),du=dt(Ib),Bb=b({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hb=dt(Bb),Pb=b({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qb=dt(Pb),Vb=b({},Tr,{data:0}),mh=dt(Vb),Gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$b[e])?!!t[e]:!1}function hu(){return Xb}var Fb=b({},ci,{key:function(e){if(e.key){var t=Gb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kb=dt(Fb),Qb=b({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=dt(Qb),Zb=b({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Jb=dt(Zb),Wb=b({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=dt(Wb),tS=b({},Gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=dt(tS),rS=b({},Tr,{newState:0,oldState:0}),aS=dt(rS),iS=[9,13,27,32],pu=yn&&"CompositionEvent"in window,di=null;yn&&"documentMode"in document&&(di=document.documentMode);var sS=yn&&"TextEvent"in window&&!di,yh=yn&&(!pu||di&&8<di&&11>=di),vh=" ",bh=!1;function Sh(e,t){switch(e){case"keyup":return iS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oa=!1;function lS(e,t){switch(e){case"compositionend":return Eh(t);case"keypress":return t.which!==32?null:(bh=!0,vh);case"textInput":return e=t.data,e===vh&&bh?null:e;default:return null}}function oS(e,t){if(oa)return e==="compositionend"||!pu&&Sh(e,t)?(e=dh(),Hs=uu=qn=null,oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yh&&t.locale!=="ko"?null:t.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uS[e.type]:t==="textarea"}function wh(e,t,a,s){sa?la?la.push(s):la=[s]:sa=s,t=Dl(t,"onChange"),0<t.length&&(a=new Vs("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var hi=null,pi=null;function cS(e){rg(e,0)}function Ys(e){var t=li(e);if(ah(t))return e}function Th(e,t){if(e==="change")return t}var xh=!1;if(yn){var mu;if(yn){var gu="oninput"in document;if(!gu){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),gu=typeof Ah.oninput=="function"}mu=gu}else mu=!1;xh=mu&&(!document.documentMode||9<document.documentMode)}function Rh(){hi&&(hi.detachEvent("onpropertychange",Ch),pi=hi=null)}function Ch(e){if(e.propertyName==="value"&&Ys(pi)){var t=[];wh(t,pi,e,su(e)),fh(cS,t)}}function fS(e,t,a){e==="focusin"?(Rh(),hi=t,pi=a,hi.attachEvent("onpropertychange",Ch)):e==="focusout"&&Rh()}function dS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ys(pi)}function hS(e,t){if(e==="click")return Ys(t)}function pS(e,t){if(e==="input"||e==="change")return Ys(t)}function mS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:mS;function mi(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var o=a[s];if(!Ot.call(t,o)||!St(e[o],t[o]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dh(e,t){var a=Oh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oh(a)}}function Nh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Is(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Is(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gS=yn&&"documentMode"in document&&11>=document.documentMode,ua=null,vu=null,gi=null,bu=!1;function Uh(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||ua==null||ua!==Is(s)||(s=ua,"selectionStart"in s&&yu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gi&&mi(gi,s)||(gi=s,s=Dl(vu,"onSelect"),0<s.length&&(t=new Vs("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=ua)))}function xr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ca={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},Su={},jh={};yn&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Ar(e){if(Su[e])return Su[e];if(!ca[e])return e;var t=ca[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in jh)return Su[e]=t[a];return e}var Lh=Ar("animationend"),kh=Ar("animationiteration"),zh=Ar("animationstart"),yS=Ar("transitionrun"),vS=Ar("transitionstart"),bS=Ar("transitioncancel"),Ih=Ar("transitionend"),Bh=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Vt(e,t){Bh.set(e,t),wr(t,[e])}var Hh=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var a=Hh.get(e);return a!==void 0?a:(t={value:e,source:t,stack:nh(t)},Hh.set(e,t),t)}return{value:e,source:t,stack:nh(t)}}var Ut=[],fa=0,_u=0;function $s(){for(var e=fa,t=_u=fa=0;t<e;){var a=Ut[t];Ut[t++]=null;var s=Ut[t];Ut[t++]=null;var o=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,s!==null&&o!==null){var p=s.pending;p===null?o.next=o:(o.next=p.next,p.next=o),s.pending=o}c!==0&&Ph(a,o,c)}}function Xs(e,t,a,s){Ut[fa++]=e,Ut[fa++]=t,Ut[fa++]=a,Ut[fa++]=s,_u|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function wu(e,t,a,s){return Xs(e,t,a,s),Fs(e)}function da(e,t){return Xs(e,null,null,t),Fs(e)}function Ph(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var o=!1,c=e.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-bt(a),e=c.hiddenUpdates,s=e[o],s===null?e[o]=[t]:s.push(t),t.lane=a|536870912),c):null}function Fs(e){if(50<Pi)throw Pi=0,Oc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ha={};function SS(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,a,s){return new SS(e,t,a,s)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var a=e.alternate;return a===null?(a=Et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qh(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ks(e,t,a,s,o,c){var p=0;if(s=e,typeof e=="function")Tu(e)&&(p=1);else if(typeof e=="string")p=_E(e,a,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=Et(31,a,t,o),e.elementType=ge,e.lanes=c,e;case _:return Rr(a.children,o,c,t);case k:p=8,o|=24;break;case j:return e=Et(12,a,t,o|2),e.elementType=j,e.lanes=c,e;case Y:return e=Et(13,a,t,o),e.elementType=Y,e.lanes=c,e;case Z:return e=Et(19,a,t,o),e.elementType=Z,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case I:p=10;break e;case G:p=9;break e;case Q:p=11;break e;case X:p=14;break e;case ye:p=16,s=null;break e}p=29,a=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=Et(p,a,t,o),t.elementType=e,t.type=s,t.lanes=c,t}function Rr(e,t,a,s){return e=Et(7,e,s,t),e.lanes=a,e}function xu(e,t,a){return e=Et(6,e,null,t),e.lanes=a,e}function Au(e,t,a){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pa=[],ma=0,Qs=null,Zs=0,jt=[],Lt=0,Cr=null,bn=1,Sn="";function Or(e,t){pa[ma++]=Zs,pa[ma++]=Qs,Qs=e,Zs=t}function Vh(e,t,a){jt[Lt++]=bn,jt[Lt++]=Sn,jt[Lt++]=Cr,Cr=e;var s=bn;e=Sn;var o=32-bt(s)-1;s&=~(1<<o),a+=1;var c=32-bt(t)+o;if(30<c){var p=o-o%5;c=(s&(1<<p)-1).toString(32),s>>=p,o-=p,bn=1<<32-bt(t)+o|a<<o|s,Sn=c+e}else bn=1<<c|a<<o|s,Sn=e}function Ru(e){e.return!==null&&(Or(e,1),Vh(e,1,0))}function Cu(e){for(;e===Qs;)Qs=pa[--ma],pa[ma]=null,Zs=pa[--ma],pa[ma]=null;for(;e===Cr;)Cr=jt[--Lt],jt[Lt]=null,Sn=jt[--Lt],jt[Lt]=null,bn=jt[--Lt],jt[Lt]=null}var ot=null,Le=null,Se=!1,Dr=null,Wt=!1,Ou=Error(l(519));function Nr(e){var t=Error(l(418,""));throw bi(Mt(t,e)),Ou}function Gh(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[at]=e,t[ft]=s,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<Vi.length;a++)me(Vi[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),ih(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),zs(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),lh(t,s.value,s.defaultValue,s.children),zs(t)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||lg(t.textContent,a)?(s.popover!=null&&(me("beforetoggle",t),me("toggle",t)),s.onScroll!=null&&me("scroll",t),s.onScrollEnd!=null&&me("scrollend",t),s.onClick!=null&&(t.onclick=Nl),t=!0):t=!1,t||Nr(e)}function Yh(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:ot=ot.return}}function yi(e){if(e!==ot)return!1;if(!Se)return Yh(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yc(e.type,e.memoizedProps)),a=!a),a&&Le&&Nr(e),Yh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Le=Yt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Le=null}}else t===27?(t=Le,ar(e.type)?(e=Kc,Kc=null,Le=e):Le=t):Le=ot?Yt(e.stateNode.nextSibling):null;return!0}function vi(){Le=ot=null,Se=!1}function $h(){var e=Dr;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),Dr=null),e}function bi(e){Dr===null?Dr=[e]:Dr.push(e)}var Du=V(null),Mr=null,En=null;function Vn(e,t,a){K(Du,t._currentValue),t._currentValue=a}function _n(e){e._currentValue=Du.current,$(Du)}function Nu(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function Mu(e,t,a,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var p=o.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=o;for(var E=0;E<t.length;E++)if(y.context===t[E]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),Nu(c.return,a,e),s||(p=null);break e}c=y.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(l(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Nu(p,a,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function Si(e,t,a,s){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(l(387));if(p=p.memoizedProps,p!==null){var y=o.type;St(o.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(o===Fe.current){if(p=o.alternate,p===null)throw Error(l(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ki):e=[Ki])}o=o.return}e!==null&&Mu(t,e,a,s),t.flags|=262144}function Js(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ur(e){Mr=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return Xh(Mr,e)}function Ws(e,t){return Mr===null&&Ur(e),Xh(e,t)}function Xh(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},En===null){if(e===null)throw Error(l(308));En=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else En=En.next=t;return a}var ES=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},_S=r.unstable_scheduleCallback,wS=r.unstable_NormalPriority,Ge={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new ES,data:new Map,refCount:0}}function Ei(e){e.refCount--,e.refCount===0&&_S(wS,function(){e.controller.abort()})}var _i=null,ju=0,ga=0,ya=null;function TS(e,t){if(_i===null){var a=_i=[];ju=0,ga=kc(),ya={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ju++,t.then(Fh,Fh),t}function Fh(){if(--ju===0&&_i!==null){ya!==null&&(ya.status="fulfilled");var e=_i;_i=null,ga=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xS(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(s.status="rejected",s.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),s}var Kh=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&TS(e,t),Kh!==null&&Kh(e,t)};var jr=V(null);function Lu(){var e=jr.current;return e!==null?e:De.pooledCache}function el(e,t){t===null?K(jr,jr.current):K(jr,t.pool)}function Qh(){var e=Lu();return e===null?null:{parent:Ge._currentValue,pool:e}}var wi=Error(l(460)),Zh=Error(l(474)),tl=Error(l(542)),ku={then:function(){}};function Jh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nl(){}function Wh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(nl,nl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tp(e),e;default:if(typeof t.status=="string")t.then(nl,nl);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=s}},function(s){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tp(e),e}throw Ti=t,wi}}var Ti=null;function ep(){if(Ti===null)throw Error(l(459));var e=Ti;return Ti=null,e}function tp(e){if(e===wi||e===tl)throw Error(l(483))}var Gn=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $n(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var o=s.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),s.pending=t,t=Fs(e),Ph(e,null,a),t}return Xs(e,s,t,a),Fs(e)}function xi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Fd(e,a)}}function Bu(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?o=c=t:c=c.next=t}else o=c=t;a={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hu=!1;function Ai(){if(Hu){var e=ya;if(e!==null)throw e}}function Ri(e,t,a,s){Hu=!1;var o=e.updateQueue;Gn=!1;var c=o.firstBaseUpdate,p=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var E=y,O=E.next;E.next=null,p===null?c=O:p.next=O,p=E;var H=e.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==p&&(y===null?H.firstBaseUpdate=O:y.next=O,H.lastBaseUpdate=E))}if(c!==null){var q=o.baseState;p=0,H=O=E=null,y=c;do{var D=y.lane&-536870913,U=D!==y.lane;if(U?(ve&D)===D:(s&D)===D){D!==0&&D===ga&&(Hu=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var se=e,ne=y;D=t;var Re=a;switch(ne.tag){case 1:if(se=ne.payload,typeof se=="function"){q=se.call(Re,q,D);break e}q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ne.payload,D=typeof se=="function"?se.call(Re,q,D):se,D==null)break e;q=b({},q,D);break e;case 2:Gn=!0}}D=y.callback,D!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[D]:U.push(D))}else U={lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(O=H=U,E=q):H=H.next=U,p|=D;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;U=y,y=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);H===null&&(E=q),o.baseState=E,o.firstBaseUpdate=O,o.lastBaseUpdate=H,c===null&&(o.shared.lanes=0),er|=p,e.lanes=p,e.memoizedState=q}}function np(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function rp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)np(a[e],t)}var va=V(null),rl=V(0);function ap(e,t){e=On,K(rl,e),K(va,t),On=e|t.baseLanes}function Pu(){K(rl,On),K(va,va.current)}function qu(){On=rl.current,$(va),$(rl)}var Xn=0,ce=null,xe=null,He=null,al=!1,ba=!1,Lr=!1,il=0,Ci=0,Sa=null,AS=0;function ze(){throw Error(l(321))}function Vu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!St(e[a],t[a]))return!1;return!0}function Gu(e,t,a,s,o,c){return Xn=c,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?Pp:qp,Lr=!1,c=a(s,o),Lr=!1,ba&&(c=sp(t,a,s,o)),ip(e),c}function ip(e){B.H=fl;var t=xe!==null&&xe.next!==null;if(Xn=0,He=xe=ce=null,al=!1,Ci=0,Sa=null,t)throw Error(l(300));e===null||Qe||(e=e.dependencies,e!==null&&Js(e)&&(Qe=!0))}function sp(e,t,a,s){ce=e;var o=0;do{if(ba&&(Sa=null),Ci=0,ba=!1,25<=o)throw Error(l(301));if(o+=1,He=xe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}B.H=US,c=t(a,s)}while(ba);return c}function RS(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Oi(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ce.flags|=1024),t}function Yu(){var e=il!==0;return il=0,e}function $u(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xu(e){if(al){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}al=!1}Xn=0,He=xe=ce=null,ba=!1,Ci=il=0,Sa=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ce.memoizedState=He=e:He=He.next=e,He}function Pe(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=He===null?ce.memoizedState:He.next;if(t!==null)He=t,xe=e;else{if(e===null)throw ce.alternate===null?Error(l(467)):Error(l(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},He===null?ce.memoizedState=He=e:He=He.next=e}return He}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oi(e){var t=Ci;return Ci+=1,Sa===null&&(Sa=[]),e=Wh(Sa,e,t),t=ce,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?Pp:qp),e}function sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oi(e);if(e.$$typeof===I)return it(e)}throw Error(l(438,String(e)))}function Ku(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Fu(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=Ve;return t.index++,a}function wn(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Pe();return Qu(t,xe,e)}function Qu(e,t,a){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=a;var o=e.baseQueue,c=s.pending;if(c!==null){if(o!==null){var p=o.next;o.next=c.next,c.next=p}t.baseQueue=o=c,s.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var y=p=null,E=null,O=t,H=!1;do{var q=O.lane&-536870913;if(q!==O.lane?(ve&q)===q:(Xn&q)===q){var D=O.revertLane;if(D===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),q===ga&&(H=!0);else if((Xn&D)===D){O=O.next,D===ga&&(H=!0);continue}else q={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(y=E=q,p=c):E=E.next=q,ce.lanes|=D,er|=D;q=O.action,Lr&&a(c,q),c=O.hasEagerState?O.eagerState:a(c,q)}else D={lane:q,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(y=E=D,p=c):E=E.next=D,ce.lanes|=q,er|=q;O=O.next}while(O!==null&&O!==t);if(E===null?p=c:E.next=y,!St(c,e.memoizedState)&&(Qe=!0,H&&(a=ya,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=E,s.lastRenderedState=c}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Zu(e){var t=Pe(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var s=a.dispatch,o=a.pending,c=t.memoizedState;if(o!==null){a.pending=null;var p=o=o.next;do c=e(c,p.action),p=p.next;while(p!==o);St(c,t.memoizedState)||(Qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,s]}function lp(e,t,a){var s=ce,o=Pe(),c=Se;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=t();var p=!St((xe||o).memoizedState,a);p&&(o.memoizedState=a,Qe=!0),o=o.queue;var y=cp.bind(null,s,o,e);if(Di(2048,8,y,[e]),o.getSnapshot!==t||p||He!==null&&He.memoizedState.tag&1){if(s.flags|=2048,Ea(9,ol(),up.bind(null,s,o,a,t),null),De===null)throw Error(l(349));c||(Xn&124)!==0||op(s,t,a)}return a}function op(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Fu(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function up(e,t,a,s){t.value=a,t.getSnapshot=s,fp(t)&&dp(e)}function cp(e,t,a){return a(function(){fp(t)&&dp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!St(e,a)}catch{return!0}}function dp(e){var t=da(e,2);t!==null&&At(t,e,2)}function Ju(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),Lr){Hn(!0);try{a()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function hp(e,t,a,s){return e.baseState=a,Qu(e,xe,typeof s=="function"?s:wn)}function CS(e,t,a,s,o){if(cl(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};B.T!==null?a(!0):c.isTransition=!1,s(c),a=t.pending,a===null?(c.next=t.pending=c,pp(t,c)):(c.next=a.next,t.pending=a.next=c)}}function pp(e,t){var a=t.action,s=t.payload,o=e.state;if(t.isTransition){var c=B.T,p={};B.T=p;try{var y=a(o,s),E=B.S;E!==null&&E(p,y),mp(e,t,y)}catch(O){Wu(e,t,O)}finally{B.T=c}}else try{c=a(o,s),mp(e,t,c)}catch(O){Wu(e,t,O)}}function mp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){gp(e,t,s)},function(s){return Wu(e,t,s)}):gp(e,t,a)}function gp(e,t,a){t.status="fulfilled",t.value=a,yp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,pp(e,a)))}function Wu(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,yp(t),t=t.next;while(t!==s)}e.action=null}function yp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vp(e,t){return t}function bp(e,t){if(Se){var a=De.formState;if(a!==null){e:{var s=ce;if(Se){if(Le){t:{for(var o=Le,c=Wt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Yt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Le=Yt(o.nextSibling),s=o.data==="F!";break e}}Nr(s)}s=!1}s&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vp,lastRenderedState:t},a.queue=s,a=Ip.bind(null,ce,s),s.dispatch=a,s=Ju(!1),c=ac.bind(null,ce,!1,s.queue),s=ht(),o={state:t,dispatch:null,action:e,pending:null},s.queue=o,a=CS.bind(null,ce,o,c,a),o.dispatch=a,s.memoizedState=e,[t,a,!1]}function Sp(e){var t=Pe();return Ep(t,xe,e)}function Ep(e,t,a){if(t=Qu(e,t,vp)[0],e=ll(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Oi(t)}catch(p){throw p===wi?tl:p}else s=t;t=Pe();var o=t.queue,c=o.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,Ea(9,ol(),OS.bind(null,o,a),null)),[s,c,e]}function OS(e,t){e.action=t}function _p(e){var t=Pe(),a=xe;if(a!==null)return Ep(t,a,e);Pe(),t=t.memoizedState,a=Pe();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function Ea(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Fu(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function ol(){return{destroy:void 0,resource:void 0}}function wp(){return Pe().memoizedState}function ul(e,t,a,s){var o=ht();s=s===void 0?null:s,ce.flags|=e,o.memoizedState=Ea(1|t,ol(),a,s)}function Di(e,t,a,s){var o=Pe();s=s===void 0?null:s;var c=o.memoizedState.inst;xe!==null&&s!==null&&Vu(s,xe.memoizedState.deps)?o.memoizedState=Ea(t,c,a,s):(ce.flags|=e,o.memoizedState=Ea(1|t,c,a,s))}function Tp(e,t){ul(8390656,8,e,t)}function xp(e,t){Di(2048,8,e,t)}function Ap(e,t){return Di(4,2,e,t)}function Rp(e,t){return Di(4,4,e,t)}function Cp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Op(e,t,a){a=a!=null?a.concat([e]):null,Di(4,4,Cp.bind(null,t,e),a)}function ec(){}function Dp(e,t){var a=Pe();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&Vu(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function Np(e,t){var a=Pe();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&Vu(t,s[1]))return s[0];if(s=e(),Lr){Hn(!0);try{e()}finally{Hn(!1)}}return a.memoizedState=[s,t],s}function tc(e,t,a){return a===void 0||(Xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=jm(),ce.lanes|=e,er|=e,a)}function Mp(e,t,a,s){return St(a,t)?a:va.current!==null?(e=tc(e,a,s),St(e,t)||(Qe=!0),e):(Xn&42)===0?(Qe=!0,e.memoizedState=a):(e=jm(),ce.lanes|=e,er|=e,t)}function Up(e,t,a,s,o){var c=F.p;F.p=c!==0&&8>c?c:8;var p=B.T,y={};B.T=y,ac(e,!1,t,a);try{var E=o(),O=B.S;if(O!==null&&O(y,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var H=xS(E,s);Ni(e,t,H,xt(e))}else Ni(e,t,s,xt(e))}catch(q){Ni(e,t,{then:function(){},status:"rejected",reason:q},xt())}finally{F.p=c,B.T=p}}function DS(){}function nc(e,t,a,s){if(e.tag!==5)throw Error(l(476));var o=jp(e).queue;Up(e,o,t,te,a===null?DS:function(){return Lp(e),a(s)})}function jp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lp(e){var t=jp(e).next.queue;Ni(e,t,{},xt())}function rc(){return it(Ki)}function kp(){return Pe().memoizedState}function zp(){return Pe().memoizedState}function NS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xt();e=Yn(a);var s=$n(t,e,a);s!==null&&(At(s,t,a),xi(s,t,a)),t={cache:Uu()},e.payload=t;return}t=t.return}}function MS(e,t,a){var s=xt();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cl(e)?Bp(t,a):(a=wu(e,t,a,s),a!==null&&(At(a,e,s),Hp(a,t,s)))}function Ip(e,t,a){var s=xt();Ni(e,t,a,s)}function Ni(e,t,a,s){var o={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cl(e))Bp(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,a);if(o.hasEagerState=!0,o.eagerState=y,St(y,p))return Xs(e,t,o,0),De===null&&$s(),!1}catch{}finally{}if(a=wu(e,t,o,s),a!==null)return At(a,e,s),Hp(a,t,s),!0}return!1}function ac(e,t,a,s){if(s={lane:2,revertLane:kc(),action:s,hasEagerState:!1,eagerState:null,next:null},cl(e)){if(t)throw Error(l(479))}else t=wu(e,a,s,2),t!==null&&At(t,e,2)}function cl(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Bp(e,t){ba=al=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hp(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Fd(e,a)}}var fl={readContext:it,use:sl,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze},Pp={readContext:it,use:sl,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Tp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ul(4194308,4,Cp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ul(4194308,4,e,t)},useInsertionEffect:function(e,t){ul(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var s=e();if(Lr){Hn(!0);try{e()}finally{Hn(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=ht();if(a!==void 0){var o=a(t);if(Lr){Hn(!0);try{a(t)}finally{Hn(!1)}}}else o=t;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=MS.bind(null,ce,e),[s.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,a=Ip.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ec,useDeferredValue:function(e,t){var a=ht();return tc(a,e,t)},useTransition:function(){var e=Ju(!1);return e=Up.bind(null,ce,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=ce,o=ht();if(Se){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),De===null)throw Error(l(349));(ve&124)!==0||op(s,t,a)}o.memoizedState=a;var c={value:a,getSnapshot:t};return o.queue=c,Tp(cp.bind(null,s,c,e),[e]),s.flags|=2048,Ea(9,ol(),up.bind(null,s,c,a,t),null),a},useId:function(){var e=ht(),t=De.identifierPrefix;if(Se){var a=Sn,s=bn;a=(s&~(1<<32-bt(s)-1)).toString(32)+a,t="«"+t+"R"+a,a=il++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=AS++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:bp,useActionState:bp,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ac.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return ht().memoizedState=NS.bind(null,ce)}},qp={readContext:it,use:sl,useCallback:Dp,useContext:it,useEffect:xp,useImperativeHandle:Op,useInsertionEffect:Ap,useLayoutEffect:Rp,useMemo:Np,useReducer:ll,useRef:wp,useState:function(){return ll(wn)},useDebugValue:ec,useDeferredValue:function(e,t){var a=Pe();return Mp(a,xe.memoizedState,e,t)},useTransition:function(){var e=ll(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:lp,useId:kp,useHostTransitionStatus:rc,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,t){var a=Pe();return hp(a,xe,e,t)},useMemoCache:Ku,useCacheRefresh:zp},US={readContext:it,use:sl,useCallback:Dp,useContext:it,useEffect:xp,useImperativeHandle:Op,useInsertionEffect:Ap,useLayoutEffect:Rp,useMemo:Np,useReducer:Zu,useRef:wp,useState:function(){return Zu(wn)},useDebugValue:ec,useDeferredValue:function(e,t){var a=Pe();return xe===null?tc(a,e,t):Mp(a,xe.memoizedState,e,t)},useTransition:function(){var e=Zu(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:lp,useId:kp,useHostTransitionStatus:rc,useFormState:_p,useActionState:_p,useOptimistic:function(e,t){var a=Pe();return xe!==null?hp(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:zp},_a=null,Mi=0;function dl(e){var t=Mi;return Mi+=1,_a===null&&(_a=[]),Wh(_a,e,t)}function Ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hl(e,t){throw t.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vp(e){var t=e._init;return t(e._payload)}function Gp(e){function t(A,x){if(e){var R=A.deletions;R===null?(A.deletions=[x],A.flags|=16):R.push(x)}}function a(A,x){if(!e)return null;for(;x!==null;)t(A,x),x=x.sibling;return null}function s(A){for(var x=new Map;A!==null;)A.key!==null?x.set(A.key,A):x.set(A.index,A),A=A.sibling;return x}function o(A,x){return A=vn(A,x),A.index=0,A.sibling=null,A}function c(A,x,R){return A.index=R,e?(R=A.alternate,R!==null?(R=R.index,R<x?(A.flags|=67108866,x):R):(A.flags|=67108866,x)):(A.flags|=1048576,x)}function p(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function y(A,x,R,P){return x===null||x.tag!==6?(x=xu(R,A.mode,P),x.return=A,x):(x=o(x,R),x.return=A,x)}function E(A,x,R,P){var J=R.type;return J===_?H(A,x,R.props.children,P,R.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ye&&Vp(J)===x.type)?(x=o(x,R.props),Ui(x,R),x.return=A,x):(x=Ks(R.type,R.key,R.props,null,A.mode,P),Ui(x,R),x.return=A,x)}function O(A,x,R,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==R.containerInfo||x.stateNode.implementation!==R.implementation?(x=Au(R,A.mode,P),x.return=A,x):(x=o(x,R.children||[]),x.return=A,x)}function H(A,x,R,P,J){return x===null||x.tag!==7?(x=Rr(R,A.mode,P,J),x.return=A,x):(x=o(x,R),x.return=A,x)}function q(A,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=xu(""+x,A.mode,R),x.return=A,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case T:return R=Ks(x.type,x.key,x.props,null,A.mode,R),Ui(R,x),R.return=A,R;case C:return x=Au(x,A.mode,R),x.return=A,x;case ye:var P=x._init;return x=P(x._payload),q(A,x,R)}if(Xe(x)||$e(x))return x=Rr(x,A.mode,R,null),x.return=A,x;if(typeof x.then=="function")return q(A,dl(x),R);if(x.$$typeof===I)return q(A,Ws(A,x),R);hl(A,x)}return null}function D(A,x,R,P){var J=x!==null?x.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return J!==null?null:y(A,x,""+R,P);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case T:return R.key===J?E(A,x,R,P):null;case C:return R.key===J?O(A,x,R,P):null;case ye:return J=R._init,R=J(R._payload),D(A,x,R,P)}if(Xe(R)||$e(R))return J!==null?null:H(A,x,R,P,null);if(typeof R.then=="function")return D(A,x,dl(R),P);if(R.$$typeof===I)return D(A,x,Ws(A,R),P);hl(A,R)}return null}function U(A,x,R,P,J){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return A=A.get(R)||null,y(x,A,""+P,J);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case T:return A=A.get(P.key===null?R:P.key)||null,E(x,A,P,J);case C:return A=A.get(P.key===null?R:P.key)||null,O(x,A,P,J);case ye:var fe=P._init;return P=fe(P._payload),U(A,x,R,P,J)}if(Xe(P)||$e(P))return A=A.get(R)||null,H(x,A,P,J,null);if(typeof P.then=="function")return U(A,x,R,dl(P),J);if(P.$$typeof===I)return U(A,x,R,Ws(x,P),J);hl(x,P)}return null}function se(A,x,R,P){for(var J=null,fe=null,W=x,ae=x=0,Je=null;W!==null&&ae<R.length;ae++){W.index>ae?(Je=W,W=null):Je=W.sibling;var be=D(A,W,R[ae],P);if(be===null){W===null&&(W=Je);break}e&&W&&be.alternate===null&&t(A,W),x=c(be,x,ae),fe===null?J=be:fe.sibling=be,fe=be,W=Je}if(ae===R.length)return a(A,W),Se&&Or(A,ae),J;if(W===null){for(;ae<R.length;ae++)W=q(A,R[ae],P),W!==null&&(x=c(W,x,ae),fe===null?J=W:fe.sibling=W,fe=W);return Se&&Or(A,ae),J}for(W=s(W);ae<R.length;ae++)Je=U(W,A,ae,R[ae],P),Je!==null&&(e&&Je.alternate!==null&&W.delete(Je.key===null?ae:Je.key),x=c(Je,x,ae),fe===null?J=Je:fe.sibling=Je,fe=Je);return e&&W.forEach(function(ur){return t(A,ur)}),Se&&Or(A,ae),J}function ne(A,x,R,P){if(R==null)throw Error(l(151));for(var J=null,fe=null,W=x,ae=x=0,Je=null,be=R.next();W!==null&&!be.done;ae++,be=R.next()){W.index>ae?(Je=W,W=null):Je=W.sibling;var ur=D(A,W,be.value,P);if(ur===null){W===null&&(W=Je);break}e&&W&&ur.alternate===null&&t(A,W),x=c(ur,x,ae),fe===null?J=ur:fe.sibling=ur,fe=ur,W=Je}if(be.done)return a(A,W),Se&&Or(A,ae),J;if(W===null){for(;!be.done;ae++,be=R.next())be=q(A,be.value,P),be!==null&&(x=c(be,x,ae),fe===null?J=be:fe.sibling=be,fe=be);return Se&&Or(A,ae),J}for(W=s(W);!be.done;ae++,be=R.next())be=U(W,A,ae,be.value,P),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?ae:be.key),x=c(be,x,ae),fe===null?J=be:fe.sibling=be,fe=be);return e&&W.forEach(function(jE){return t(A,jE)}),Se&&Or(A,ae),J}function Re(A,x,R,P){if(typeof R=="object"&&R!==null&&R.type===_&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case T:e:{for(var J=R.key;x!==null;){if(x.key===J){if(J=R.type,J===_){if(x.tag===7){a(A,x.sibling),P=o(x,R.props.children),P.return=A,A=P;break e}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ye&&Vp(J)===x.type){a(A,x.sibling),P=o(x,R.props),Ui(P,R),P.return=A,A=P;break e}a(A,x);break}else t(A,x);x=x.sibling}R.type===_?(P=Rr(R.props.children,A.mode,P,R.key),P.return=A,A=P):(P=Ks(R.type,R.key,R.props,null,A.mode,P),Ui(P,R),P.return=A,A=P)}return p(A);case C:e:{for(J=R.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===R.containerInfo&&x.stateNode.implementation===R.implementation){a(A,x.sibling),P=o(x,R.children||[]),P.return=A,A=P;break e}else{a(A,x);break}else t(A,x);x=x.sibling}P=Au(R,A.mode,P),P.return=A,A=P}return p(A);case ye:return J=R._init,R=J(R._payload),Re(A,x,R,P)}if(Xe(R))return se(A,x,R,P);if($e(R)){if(J=$e(R),typeof J!="function")throw Error(l(150));return R=J.call(R),ne(A,x,R,P)}if(typeof R.then=="function")return Re(A,x,dl(R),P);if(R.$$typeof===I)return Re(A,x,Ws(A,R),P);hl(A,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,x!==null&&x.tag===6?(a(A,x.sibling),P=o(x,R),P.return=A,A=P):(a(A,x),P=xu(R,A.mode,P),P.return=A,A=P),p(A)):a(A,x)}return function(A,x,R,P){try{Mi=0;var J=Re(A,x,R,P);return _a=null,J}catch(W){if(W===wi||W===tl)throw W;var fe=Et(29,W,null,A.mode);return fe.lanes=P,fe.return=A,fe}finally{}}}var wa=Gp(!0),Yp=Gp(!1),kt=V(null),en=null;function Fn(e){var t=e.alternate;K(Ye,Ye.current&1),K(kt,e),en===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(en=e)}function $p(e){if(e.tag===22){if(K(Ye,Ye.current),K(kt,e),en===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(en=e)}}else Kn()}function Kn(){K(Ye,Ye.current),K(kt,kt.current)}function Tn(e){$(kt),en===e&&(en=null),$(Ye)}var Ye=V(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Fc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ic(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sc={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=xt(),o=Yn(s);o.payload=t,a!=null&&(o.callback=a),t=$n(e,o,s),t!==null&&(At(t,e,s),xi(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=xt(),o=Yn(s);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=$n(e,o,s),t!==null&&(At(t,e,s),xi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xt(),s=Yn(a);s.tag=2,t!=null&&(s.callback=t),t=$n(e,s,a),t!==null&&(At(t,e,a),xi(t,e,a))}};function Xp(e,t,a,s,o,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,p):t.prototype&&t.prototype.isPureReactComponent?!mi(a,s)||!mi(o,c):!0}function Fp(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&sc.enqueueReplaceState(t,t.state,null)}function kr(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kp(e){ml(e)}function Qp(e){console.error(e)}function Zp(e){ml(e)}function gl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Jp(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function lc(e,t,a){return a=Yn(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(e,t)},a}function Wp(e){return e=Yn(e),e.tag=3,e}function em(e,t,a,s){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=s.value;e.payload=function(){return o(c)},e.callback=function(){Jp(t,a,s)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Jp(t,a,s),typeof o!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function jS(e,t,a,s,o){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&Si(t,a,o,!0),a=kt.current,a!==null){switch(a.tag){case 13:return en===null?Nc():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=o,s===ku?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Uc(e,s,o)),!1;case 22:return a.flags|=65536,s===ku?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Uc(e,s,o)),!1}throw Error(l(435,a.tag))}return Uc(e,s,o),Nc(),!1}if(Se)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,s!==Ou&&(e=Error(l(422),{cause:s}),bi(Mt(e,a)))):(s!==Ou&&(t=Error(l(423),{cause:s}),bi(Mt(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Mt(s,a),o=lc(e.stateNode,s,o),Bu(e,o),ke!==4&&(ke=2)),!1;var c=Error(l(520),{cause:s});if(c=Mt(c,a),Hi===null?Hi=[c]:Hi.push(c),ke!==4&&(ke=2),t===null)return!0;s=Mt(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=lc(a.stateNode,s,e),Bu(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(tr===null||!tr.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=Wp(o),em(o,e,a,s),Bu(a,o),!1}a=a.return}while(a!==null);return!1}var tm=Error(l(461)),Qe=!1;function et(e,t,a,s){t.child=e===null?Yp(t,null,a,s):wa(t,e.child,a,s)}function nm(e,t,a,s,o){a=a.render;var c=t.ref;if("ref"in s){var p={};for(var y in s)y!=="ref"&&(p[y]=s[y])}else p=s;return Ur(t),s=Gu(e,t,a,p,c,o),y=Yu(),e!==null&&!Qe?($u(e,t,o),xn(e,t,o)):(Se&&y&&Ru(t),t.flags|=1,et(e,t,s,o),t.child)}function rm(e,t,a,s,o){if(e===null){var c=a.type;return typeof c=="function"&&!Tu(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,am(e,t,c,s,o)):(e=Ks(a.type,null,s,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!mc(e,o)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:mi,a(p,s)&&e.ref===t.ref)return xn(e,t,o)}return t.flags|=1,e=vn(c,s),e.ref=t.ref,e.return=t,t.child=e}function am(e,t,a,s,o){if(e!==null){var c=e.memoizedProps;if(mi(c,s)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=s=c,mc(e,o))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,xn(e,t,o)}return oc(e,t,a,s,o)}function im(e,t,a){var s=t.pendingProps,o=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((t.flags&128)!==0){if(s=c!==null?c.baseLanes|a:a,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;t.childLanes=c&~s}else t.childLanes=0,t.child=null;return sm(e,t,s,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(t,c!==null?c.cachePool:null),c!==null?ap(t,c):Pu(),$p(t);else return t.lanes=t.childLanes=536870912,sm(e,t,c!==null?c.baseLanes|a:a,a)}else c!==null?(el(t,c.cachePool),ap(t,c),Kn(),t.memoizedState=null):(e!==null&&el(t,null),Pu(),Kn());return et(e,t,o,a),t.child}function sm(e,t,a,s){var o=Lu();return o=o===null?null:{parent:Ge._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&el(t,null),Pu(),$p(t),e!==null&&Si(e,t,s,!0),null}function yl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oc(e,t,a,s,o){return Ur(t),a=Gu(e,t,a,s,void 0,o),s=Yu(),e!==null&&!Qe?($u(e,t,o),xn(e,t,o)):(Se&&s&&Ru(t),t.flags|=1,et(e,t,a,o),t.child)}function lm(e,t,a,s,o,c){return Ur(t),t.updateQueue=null,a=sp(t,s,a,o),ip(e),s=Yu(),e!==null&&!Qe?($u(e,t,c),xn(e,t,c)):(Se&&s&&Ru(t),t.flags|=1,et(e,t,a,c),t.child)}function om(e,t,a,s,o){if(Ur(t),t.stateNode===null){var c=ha,p=a.contextType;typeof p=="object"&&p!==null&&(c=it(p)),c=new a(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=sc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},zu(t),p=a.contextType,c.context=typeof p=="object"&&p!==null?it(p):ha,c.state=t.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(ic(t,a,p,s),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&sc.enqueueReplaceState(c,c.state,null),Ri(t,s,c,o),Ai(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,E=kr(a,y);c.props=E;var O=c.context,H=a.contextType;p=ha,typeof H=="object"&&H!==null&&(p=it(H));var q=a.getDerivedStateFromProps;H=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||O!==p)&&Fp(t,c,s,p),Gn=!1;var D=t.memoizedState;c.state=D,Ri(t,s,c,o),Ai(),O=t.memoizedState,y||D!==O||Gn?(typeof q=="function"&&(ic(t,a,q,s),O=t.memoizedState),(E=Gn||Xp(t,a,E,s,D,O,p))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=O),c.props=s,c.state=O,c.context=p,s=E):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,Iu(e,t),p=t.memoizedProps,H=kr(a,p),c.props=H,q=t.pendingProps,D=c.context,O=a.contextType,E=ha,typeof O=="object"&&O!==null&&(E=it(O)),y=a.getDerivedStateFromProps,(O=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==q||D!==E)&&Fp(t,c,s,E),Gn=!1,D=t.memoizedState,c.state=D,Ri(t,s,c,o),Ai();var U=t.memoizedState;p!==q||D!==U||Gn||e!==null&&e.dependencies!==null&&Js(e.dependencies)?(typeof y=="function"&&(ic(t,a,y,s),U=t.memoizedState),(H=Gn||Xp(t,a,H,s,D,U,E)||e!==null&&e.dependencies!==null&&Js(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,U,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,U,E)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=U),c.props=s,c.state=U,c.context=E,s=H):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,yl(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=wa(t,e.child,null,o),t.child=wa(t,null,a,o)):et(e,t,a,o),t.memoizedState=c.state,e=t.child):e=xn(e,t,o),e}function um(e,t,a,s){return vi(),t.flags|=256,et(e,t,a,s),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:Qh()}}function fc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function cm(e,t,a){var s=t.pendingProps,o=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(o?Fn(t):Kn(),Se){var y=Le,E;if(E=y){e:{for(E=y,y=Wt;E.nodeType!==8;){if(!y){y=null;break e}if(E=Yt(E.nextSibling),E===null){y=null;break e}}y=E}y!==null?(t.memoizedState={dehydrated:y,treeContext:Cr!==null?{id:bn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},E=Et(18,null,null,0),E.stateNode=y,E.return=t,t.child=E,ot=t,Le=null,E=!0):E=!1}E||Nr(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return Fc(y)?t.lanes=32:t.lanes=536870912,null;Tn(t)}return y=s.children,s=s.fallback,o?(Kn(),o=t.mode,y=vl({mode:"hidden",children:y},o),s=Rr(s,o,a,null),y.return=t,s.return=t,y.sibling=s,t.child=y,o=t.child,o.memoizedState=cc(a),o.childLanes=fc(e,p,a),t.memoizedState=uc,s):(Fn(t),dc(t,y))}if(E=e.memoizedState,E!==null&&(y=E.dehydrated,y!==null)){if(c)t.flags&256?(Fn(t),t.flags&=-257,t=hc(e,t,a)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),o=s.fallback,y=t.mode,s=vl({mode:"visible",children:s.children},y),o=Rr(o,y,a,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,wa(t,e.child,null,a),s=t.child,s.memoizedState=cc(a),s.childLanes=fc(e,p,a),t.memoizedState=uc,t=o);else if(Fn(t),Fc(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var O=p.dgst;p=O,s=Error(l(419)),s.stack="",s.digest=p,bi({value:s,source:null,stack:null}),t=hc(e,t,a)}else if(Qe||Si(e,t,a,!1),p=(a&e.childLanes)!==0,Qe||p){if(p=De,p!==null&&(s=a&-a,s=(s&42)!==0?1:Ko(s),s=(s&(p.suspendedLanes|a))!==0?0:s,s!==0&&s!==E.retryLane))throw E.retryLane=s,da(e,s),At(p,e,s),tm;y.data==="$?"||Nc(),t=hc(e,t,a)}else y.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Le=Yt(y.nextSibling),ot=t,Se=!0,Dr=null,Wt=!1,e!==null&&(jt[Lt++]=bn,jt[Lt++]=Sn,jt[Lt++]=Cr,bn=e.id,Sn=e.overflow,Cr=t),t=dc(t,s.children),t.flags|=4096);return t}return o?(Kn(),o=s.fallback,y=t.mode,E=e.child,O=E.sibling,s=vn(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&65011712,O!==null?o=vn(O,o):(o=Rr(o,y,a,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,y=e.child.memoizedState,y===null?y=cc(a):(E=y.cachePool,E!==null?(O=Ge._currentValue,E=E.parent!==O?{parent:O,pool:O}:E):E=Qh(),y={baseLanes:y.baseLanes|a,cachePool:E}),o.memoizedState=y,o.childLanes=fc(e,p,a),t.memoizedState=uc,s):(Fn(t),a=e.child,e=a.sibling,a=vn(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=a,t.memoizedState=null,a)}function dc(e,t){return t=vl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vl(e,t){return e=Et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hc(e,t,a){return wa(t,e.child,null,a),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Nu(e.return,t,a)}function pc(e,t,a,s,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=a,c.tailMode=o)}function dm(e,t,a){var s=t.pendingProps,o=s.revealOrder,c=s.tail;if(et(e,t,s.children,a),s=Ye.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,a,t);else if(e.tag===19)fm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(K(Ye,s),o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&pl(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),pc(t,!1,o,a,c);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pl(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}pc(t,!0,a,null,c);break;case"together":pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Si(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=vn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=vn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function mc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Js(e)))}function LS(e,t,a){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),Vn(t,Ge,e.memoizedState.cache),vi();break;case 27:case 5:Er(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Fn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?cm(e,t,a):(Fn(t),e=xn(e,t,a),e!==null?e.sibling:null);Fn(t);break;case 19:var o=(e.flags&128)!==0;if(s=(a&t.childLanes)!==0,s||(Si(e,t,a,!1),s=(a&t.childLanes)!==0),o){if(s)return dm(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(Ye,Ye.current),s)break;return null;case 22:case 23:return t.lanes=0,im(e,t,a);case 24:Vn(t,Ge,e.memoizedState.cache)}return xn(e,t,a)}function hm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!mc(e,a)&&(t.flags&128)===0)return Qe=!1,LS(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,Se&&(t.flags&1048576)!==0&&Vh(t,Zs,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=t.elementType,o=s._init;if(s=o(s._payload),t.type=s,typeof s=="function")Tu(s)?(e=kr(s,e),t.tag=1,t=om(null,t,s,e,a)):(t.tag=0,t=oc(null,t,s,e,a));else{if(s!=null){if(o=s.$$typeof,o===Q){t.tag=11,t=nm(null,t,s,e,a);break e}else if(o===X){t.tag=14,t=rm(null,t,s,e,a);break e}}throw t=pn(s)||s,Error(l(306,t,""))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,o=kr(s,t.pendingProps),om(e,t,s,o,a);case 3:e:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var c=t.memoizedState;o=c.element,Iu(e,t),Ri(t,s,null,a);var p=t.memoizedState;if(s=p.cache,Vn(t,Ge,s),s!==c.cache&&Mu(t,[Ge],a,!0),Ai(),s=p.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=um(e,t,s,a);break e}else if(s!==o){o=Mt(Error(l(424)),t),bi(o),t=um(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Yt(e.firstChild),ot=t,Se=!0,Dr=null,Wt=!0,a=Yp(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vi(),s===o){t=xn(e,t,a);break e}et(e,t,s,a)}t=t.child}return t;case 26:return yl(e,t),e===null?(a=yg(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,s=Ml(re.current).createElement(a),s[at]=t,s[ft]=e,nt(s,a,e),Ke(s),t.stateNode=s):t.memoizedState=yg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Er(t),e===null&&Se&&(s=t.stateNode=pg(t.type,t.pendingProps,re.current),ot=t,Wt=!0,o=Le,ar(t.type)?(Kc=o,Le=Yt(s.firstChild)):Le=o),et(e,t,t.pendingProps.children,a),yl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((o=s=Le)&&(s=uE(s,t.type,t.pendingProps,Wt),s!==null?(t.stateNode=s,ot=t,Le=Yt(s.firstChild),Wt=!1,o=!0):o=!1),o||Nr(t)),Er(t),o=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,s=c.children,Yc(o,c)?s=null:p!==null&&Yc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=Gu(e,t,RS,null,null,a),Ki._currentValue=o),yl(e,t),et(e,t,s,a),t.child;case 6:return e===null&&Se&&((e=a=Le)&&(a=cE(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,ot=t,Le=null,e=!0):e=!1),e||Nr(t)),null;case 13:return cm(e,t,a);case 4:return Ee(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=wa(t,null,s,a):et(e,t,s,a),t.child;case 11:return nm(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return s=t.pendingProps,Vn(t,t.type,s.value),et(e,t,s.children,a),t.child;case 9:return o=t.type._context,s=t.pendingProps.children,Ur(t),o=it(o),s=s(o),t.flags|=1,et(e,t,s,a),t.child;case 14:return rm(e,t,t.type,t.pendingProps,a);case 15:return am(e,t,t.type,t.pendingProps,a);case 19:return dm(e,t,a);case 31:return s=t.pendingProps,a=t.mode,s={mode:s.mode,children:s.children},e===null?(a=vl(s,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=vn(e.child,s),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return im(e,t,a);case 24:return Ur(t),s=it(Ge),e===null?(o=Lu(),o===null&&(o=De,c=Uu(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),t.memoizedState={parent:s,cache:o},zu(t),Vn(t,Ge,o)):((e.lanes&a)!==0&&(Iu(e,t),Ri(t,null,null,a),Ai()),o=e.memoizedState,c=t.memoizedState,o.parent!==s?(o={parent:s,cache:s},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Vn(t,Ge,s)):(s=c.cache,Vn(t,Ge,s),s!==o.cache&&Mu(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function An(e){e.flags|=4}function pm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_g(t)){if(t=kt.current,t!==null&&((ve&4194048)===ve?en!==null:(ve&62914560)!==ve&&(ve&536870912)===0||t!==en))throw Ti=ku,Zh;e.flags|=8192}}function bl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$d():536870912,e.lanes|=t,Ra|=t)}function ji(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function kS(e,t,a){var s=t.pendingProps;switch(Cu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),_n(Ge),rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yi(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$h())),Ue(t),null;case 26:return a=t.memoizedState,e===null?(An(t),a!==null?(Ue(t),pm(t,a)):(Ue(t),t.flags&=-16777217)):a?a!==e.memoizedState?(An(t),Ue(t),pm(t,a)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==s&&An(t),Ue(t),t.flags&=-16777217),null;case 27:mn(t),a=re.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==s&&An(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ue(t),null}e=ee.current,yi(t)?Gh(t):(e=pg(o,s,a),t.stateNode=e,An(t))}return Ue(t),null;case 5:if(mn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&An(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ue(t),null}if(e=ee.current,yi(t))Gh(t);else{switch(o=Ml(re.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?o.createElement(a,{is:s.is}):o.createElement(a)}}e[at]=t,e[ft]=s;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(nt(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&An(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&An(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=re.current,yi(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,o=ot,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lg(e.nodeValue,a)),e||Nr(t)}else e=Ml(e).createTextNode(s),e[at]=t,t.stateNode=e}return Ue(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=yi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[at]=t}else vi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else o=$h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Tn(t),t):(Tn(t),null)}if(Tn(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=t.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool);var c=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),bl(t,t.updateQueue),Ue(t),null;case 4:return rt(),e===null&&Hc(t.stateNode.containerInfo),Ue(t),null;case 10:return _n(t.type),Ue(t),null;case 19:if($(Ye),o=t.memoizedState,o===null)return Ue(t),null;if(s=(t.flags&128)!==0,c=o.rendering,c===null)if(s)ji(o,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=pl(e),c!==null){for(t.flags|=128,ji(o,!1),e=c.updateQueue,t.updateQueue=e,bl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)qh(a,e),a=a.sibling;return K(Ye,Ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Jt()>_l&&(t.flags|=128,s=!0,ji(o,!1),t.lanes=4194304)}else{if(!s)if(e=pl(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,bl(t,e),ji(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Se)return Ue(t),null}else 2*Jt()-o.renderingStartTime>_l&&a!==536870912&&(t.flags|=128,s=!0,ji(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(e=o.last,e!==null?e.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Jt(),t.sibling=null,e=Ye.current,K(Ye,s?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return Tn(t),qu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),a=t.updateQueue,a!==null&&bl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&$(jr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_n(Ge),Ue(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function zS(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Ge),rt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mn(t),null;case 13:if(Tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Ye),null;case 4:return rt(),null;case 10:return _n(t.type),null;case 22:case 23:return Tn(t),qu(),e!==null&&$(jr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Ge),null;case 25:return null;default:return null}}function mm(e,t){switch(Cu(t),t.tag){case 3:_n(Ge),rt();break;case 26:case 27:case 5:mn(t);break;case 4:rt();break;case 13:Tn(t);break;case 19:$(Ye);break;case 10:_n(t.type);break;case 22:case 23:Tn(t),qu(),e!==null&&$(jr);break;case 24:_n(Ge)}}function Li(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&e)===e){s=void 0;var c=a.create,p=a.inst;s=c(),p.destroy=s}a=a.next}while(a!==o)}}catch(y){Ce(t,t.return,y)}}function Qn(e,t,a){try{var s=t.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){var p=s.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,o=t;var E=a,O=y;try{O()}catch(H){Ce(o,E,H)}}}s=s.next}while(s!==c)}}catch(H){Ce(t,t.return,H)}}function gm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{rp(t,a)}catch(s){Ce(e,e.return,s)}}}function ym(e,t,a){a.props=kr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ce(e,t,s)}}function ki(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(o){Ce(e,t,o)}}function tn(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(o){Ce(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Ce(e,t,o)}else a.current=null}function vm(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(o){Ce(e,e.return,o)}}function gc(e,t,a){try{var s=e.stateNode;aE(s,e.type,a,t),s[ft]=t}catch(o){Ce(e,e.return,o)}}function bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ar(e.type)||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Nl));else if(s!==4&&(s===27&&ar(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,a),e=e.sibling;e!==null;)vc(e,t,a),e=e.sibling}function Sl(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(s===27&&ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Sl(e,t,a),e=e.sibling;e!==null;)Sl(e,t,a),e=e.sibling}function Sm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);nt(t,s,a),t[at]=e,t[ft]=a}catch(c){Ce(e,e.return,c)}}var Rn=!1,Ie=!1,bc=!1,Em=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function IS(e,t){if(e=e.containerInfo,Vc=Il,e=Mh(e),yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var o=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,y=-1,E=-1,O=0,H=0,q=e,D=null;t:for(;;){for(var U;q!==a||o!==0&&q.nodeType!==3||(y=p+o),q!==c||s!==0&&q.nodeType!==3||(E=p+s),q.nodeType===3&&(p+=q.nodeValue.length),(U=q.firstChild)!==null;)D=q,q=U;for(;;){if(q===e)break t;if(D===a&&++O===o&&(y=p),D===c&&++H===s&&(E=p),(U=q.nextSibling)!==null)break;q=D,D=q.parentNode}q=U}a=y===-1||E===-1?null:{start:y,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:e,selectionRange:a},Il=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,o=c.memoizedProps,c=c.memoizedState,s=a.stateNode;try{var se=kr(a.type,o,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(se,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ce(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function _m(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Zn(e,a),s&4&&Li(5,a);break;case 1:if(Zn(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(p){Ce(a,a.return,p)}else{var o=kr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ce(a,a.return,p)}}s&64&&gm(a),s&512&&ki(a,a.return);break;case 3:if(Zn(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{rp(e,t)}catch(p){Ce(a,a.return,p)}}break;case 27:t===null&&s&4&&Sm(a);case 26:case 5:Zn(e,a),t===null&&s&4&&vm(a),s&512&&ki(a,a.return);break;case 12:Zn(e,a);break;case 13:Zn(e,a),s&4&&xm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XS.bind(null,a),fE(e,a))));break;case 22:if(s=a.memoizedState!==null||Rn,!s){t=t!==null&&t.memoizedState!==null||Ie,o=Rn;var c=Ie;Rn=s,(Ie=t)&&!c?Jn(e,a,(a.subtreeFlags&8772)!==0):Zn(e,a),Rn=o,Ie=c}break;case 30:break;default:Zn(e,a)}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,pt=!1;function Cn(e,t,a){for(a=a.child;a!==null;)Tm(e,t,a),a=a.sibling}function Tm(e,t,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ri,a)}catch{}switch(a.tag){case 26:Ie||tn(a,t),Cn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||tn(a,t);var s=Me,o=pt;ar(a.type)&&(Me=a.stateNode,pt=!1),Cn(e,t,a),Yi(a.stateNode),Me=s,pt=o;break;case 5:Ie||tn(a,t);case 6:if(s=Me,o=pt,Me=null,Cn(e,t,a),Me=s,pt=o,Me!==null)if(pt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(c){Ce(a,t,c)}else try{Me.removeChild(a.stateNode)}catch(c){Ce(a,t,c)}break;case 18:Me!==null&&(pt?(e=Me,dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Wi(e)):dg(Me,a.stateNode));break;case 4:s=Me,o=pt,Me=a.stateNode.containerInfo,pt=!0,Cn(e,t,a),Me=s,pt=o;break;case 0:case 11:case 14:case 15:Ie||Qn(2,a,t),Ie||Qn(4,a,t),Cn(e,t,a);break;case 1:Ie||(tn(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&ym(a,t,s)),Cn(e,t,a);break;case 21:Cn(e,t,a);break;case 22:Ie=(s=Ie)||a.memoizedState!==null,Cn(e,t,a),Ie=s;break;default:Cn(e,t,a)}}function xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wi(e)}catch(a){Ce(t,t.return,a)}}function BS(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Em),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Em),t;default:throw Error(l(435,e.tag))}}function Sc(e,t){var a=BS(e);t.forEach(function(s){var o=FS.bind(null,e,s);a.has(s)||(a.add(s),s.then(o,o))})}function _t(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var o=a[s],c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(ar(y.type)){Me=y.stateNode,pt=!1;break e}break;case 5:Me=y.stateNode,pt=!1;break e;case 3:case 4:Me=y.stateNode.containerInfo,pt=!0;break e}y=y.return}if(Me===null)throw Error(l(160));Tm(c,p,o),Me=null,pt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Am(t,e),t=t.sibling}var Gt=null;function Am(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),wt(e),s&4&&(Qn(3,e,e.return),Li(3,e),Qn(5,e,e.return));break;case 1:_t(t,e),wt(e),s&512&&(Ie||a===null||tn(a,a.return)),s&64&&Rn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var o=Gt;if(_t(t,e),wt(e),s&512&&(Ie||a===null||tn(a,a.return)),s&4){var c=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(s){case"title":c=o.getElementsByTagName("title")[0],(!c||c[si]||c[at]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(s),o.head.insertBefore(c,o.querySelector("head > title"))),nt(c,s,a),c[at]=e,Ke(c),s=c;break e;case"link":var p=Sg("link","href",o).get(s+(a.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(y,1);break t}}c=o.createElement(s),nt(c,s,a),o.head.appendChild(c);break;case"meta":if(p=Sg("meta","content",o).get(s+(a.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(y,1);break t}}c=o.createElement(s),nt(c,s,a),o.head.appendChild(c);break;default:throw Error(l(468,s))}c[at]=e,Ke(c),s=c}e.stateNode=s}else Eg(o,e.type,e.stateNode);else e.stateNode=bg(o,s,e.memoizedProps);else c!==s?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,s===null?Eg(o,e.type,e.stateNode):bg(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&gc(e,e.memoizedProps,a.memoizedProps)}break;case 27:_t(t,e),wt(e),s&512&&(Ie||a===null||tn(a,a.return)),a!==null&&s&4&&gc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_t(t,e),wt(e),s&512&&(Ie||a===null||tn(a,a.return)),e.flags&32){o=e.stateNode;try{ia(o,"")}catch(U){Ce(e,e.return,U)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,gc(e,o,a!==null?a.memoizedProps:o)),s&1024&&(bc=!0);break;case 6:if(_t(t,e),wt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(U){Ce(e,e.return,U)}}break;case 3:if(Ll=null,o=Gt,Gt=Ul(t.containerInfo),_t(t,e),Gt=o,wt(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(U){Ce(e,e.return,U)}bc&&(bc=!1,Rm(e));break;case 4:s=Gt,Gt=Ul(e.stateNode.containerInfo),_t(t,e),wt(e),Gt=s;break;case 12:_t(t,e),wt(e);break;case 13:_t(t,e),wt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ac=Jt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Sc(e,s)));break;case 22:o=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,O=Rn,H=Ie;if(Rn=O||o,Ie=H||E,_t(t,e),Ie=H,Rn=O,wt(e),s&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||E||Rn||Ie||zr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){E=a=t;try{if(c=E.stateNode,o)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=E.stateNode;var q=E.memoizedProps.style,D=q!=null&&q.hasOwnProperty("display")?q.display:null;y.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(U){Ce(E,E.return,U)}}}else if(t.tag===6){if(a===null){E=t;try{E.stateNode.nodeValue=o?"":E.memoizedProps}catch(U){Ce(E,E.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Sc(e,a))));break;case 19:_t(t,e),wt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Sc(e,s)));break;case 30:break;case 21:break;default:_t(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(bm(s)){a=s;break}s=s.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var o=a.stateNode,c=yc(e);Sl(e,c,o);break;case 5:var p=a.stateNode;a.flags&32&&(ia(p,""),a.flags&=-33);var y=yc(e);Sl(e,y,p);break;case 3:case 4:var E=a.stateNode.containerInfo,O=yc(e);vc(e,O,E);break;default:throw Error(l(161))}}catch(H){Ce(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_m(e,t.alternate,t),t=t.sibling}function zr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),zr(t);break;case 1:tn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ym(t,t.return,a),zr(t);break;case 27:Yi(t.stateNode);case 26:case 5:tn(t,t.return),zr(t);break;case 22:t.memoizedState===null&&zr(t);break;case 30:zr(t);break;default:zr(t)}e=e.sibling}}function Jn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,o=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Jn(o,c,a),Li(4,c);break;case 1:if(Jn(o,c,a),s=c,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Ce(s,s.return,O)}if(s=c,o=s.updateQueue,o!==null){var y=s.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)np(E[o],y)}catch(O){Ce(s,s.return,O)}}a&&p&64&&gm(c),ki(c,c.return);break;case 27:Sm(c);case 26:case 5:Jn(o,c,a),a&&s===null&&p&4&&vm(c),ki(c,c.return);break;case 12:Jn(o,c,a);break;case 13:Jn(o,c,a),a&&p&4&&xm(o,c);break;case 22:c.memoizedState===null&&Jn(o,c,a),ki(c,c.return);break;case 30:break;default:Jn(o,c,a)}t=t.sibling}}function Ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ei(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ei(e))}function nn(e,t,a,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cm(e,t,a,s),t=t.sibling}function Cm(e,t,a,s){var o=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,a,s),o&2048&&Li(9,t);break;case 1:nn(e,t,a,s);break;case 3:nn(e,t,a,s),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ei(e)));break;case 12:if(o&2048){nn(e,t,a,s),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ce(t,t.return,E)}}else nn(e,t,a,s);break;case 13:nn(e,t,a,s);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?nn(e,t,a,s):zi(e,t):c._visibility&2?nn(e,t,a,s):(c._visibility|=2,Ta(e,t,a,s,(t.subtreeFlags&10256)!==0)),o&2048&&Ec(p,t);break;case 24:nn(e,t,a,s),o&2048&&_c(t.alternate,t);break;default:nn(e,t,a,s)}}function Ta(e,t,a,s,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,p=t,y=a,E=s,O=p.flags;switch(p.tag){case 0:case 11:case 15:Ta(c,p,y,E,o),Li(8,p);break;case 23:break;case 22:var H=p.stateNode;p.memoizedState!==null?H._visibility&2?Ta(c,p,y,E,o):zi(c,p):(H._visibility|=2,Ta(c,p,y,E,o)),o&&O&2048&&Ec(p.alternate,p);break;case 24:Ta(c,p,y,E,o),o&&O&2048&&_c(p.alternate,p);break;default:Ta(c,p,y,E,o)}t=t.sibling}}function zi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,o=s.flags;switch(s.tag){case 22:zi(a,s),o&2048&&Ec(s.alternate,s);break;case 24:zi(a,s),o&2048&&_c(s.alternate,s);break;default:zi(a,s)}t=t.sibling}}var Ii=8192;function xa(e){if(e.subtreeFlags&Ii)for(e=e.child;e!==null;)Om(e),e=e.sibling}function Om(e){switch(e.tag){case 26:xa(e),e.flags&Ii&&e.memoizedState!==null&&TE(Gt,e.memoizedState,e.memoizedProps);break;case 5:xa(e);break;case 3:case 4:var t=Gt;Gt=Ul(e.stateNode.containerInfo),xa(e),Gt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ii,Ii=16777216,xa(e),Ii=t):xa(e));break;default:xa(e)}}function Dm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Ze=s,Mm(s,e)}Dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nm(e),e=e.sibling}function Nm(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,El(e)):Bi(e);break;default:Bi(e)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Ze=s,Mm(s,e)}Dm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),El(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,El(t));break;default:El(t)}e=e.sibling}}function Mm(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:Qn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ei(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Ze=s;else e:for(a=e;Ze!==null;){s=Ze;var o=s.sibling,c=s.return;if(wm(s),s===a){Ze=null;break e}if(o!==null){o.return=c,Ze=o;break e}Ze=c}}}var HS={getCacheForType:function(e){var t=it(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},PS=typeof WeakMap=="function"?WeakMap:Map,we=0,De=null,pe=null,ve=0,Te=0,Tt=null,Wn=!1,Aa=!1,wc=!1,On=0,ke=0,er=0,Ir=0,Tc=0,zt=0,Ra=0,Hi=null,mt=null,xc=!1,Ac=0,_l=1/0,wl=null,tr=null,tt=0,nr=null,Ca=null,Oa=0,Rc=0,Cc=null,Um=null,Pi=0,Oc=null;function xt(){if((we&2)!==0&&ve!==0)return ve&-ve;if(B.T!==null){var e=ga;return e!==0?e:kc()}return Kd()}function jm(){zt===0&&(zt=(ve&536870912)===0||Se?Yd():536870912);var e=kt.current;return e!==null&&(e.flags|=32),zt}function At(e,t,a){(e===De&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Da(e,0),rr(e,ve,zt,!1)),ii(e,a),((we&2)===0||e!==De)&&(e===De&&((we&2)===0&&(Ir|=a),ke===4&&rr(e,ve,zt,!1)),rn(e))}function Lm(e,t,a){if((we&6)!==0)throw Error(l(327));var s=!a&&(t&124)===0&&(t&e.expiredLanes)===0||ai(e,t),o=s?GS(e,t):Mc(e,t,!0),c=s;do{if(o===0){Aa&&!s&&rr(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!qS(a)){o=Mc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;o=Hi;var E=y.current.memoizedState.isDehydrated;if(E&&(Da(y,p).flags|=256),p=Mc(y,p,!1),p!==2){if(wc&&!E){y.errorRecoveryDisabledLanes|=c,Ir|=c,o=4;break e}c=mt,mt=o,c!==null&&(mt===null?mt=c:mt.push.apply(mt,c))}o=p}if(c=!1,o!==2)continue}}if(o===1){Da(e,0),rr(e,t,0,!0);break}e:{switch(s=e,c=o,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:rr(s,t,zt,!Wn);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(o=Ac+300-Jt(),10<o)){if(rr(s,t,zt,!Wn),js(s,0,!0)!==0)break e;s.timeoutHandle=cg(km.bind(null,s,a,mt,wl,xc,t,zt,Ir,Ra,Wn,c,2,-0,0),o);break e}km(s,a,mt,wl,xc,t,zt,Ir,Ra,Wn,c,0,-0,0)}}break}while(!0);rn(e)}function km(e,t,a,s,o,c,p,y,E,O,H,q,D,U){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(Fi={stylesheets:null,count:0,unsuspend:wE},Om(t),q=xE(),q!==null)){e.cancelPendingCommit=q(Vm.bind(null,e,t,c,a,s,o,p,y,E,H,1,D,U)),rr(e,c,p,!O);return}Vm(e,t,c,a,s,o,p,y,E)}function qS(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var o=a[s],c=o.getSnapshot;o=o.value;try{if(!St(c(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t,a,s){t&=~Tc,t&=~Ir,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var o=t;0<o;){var c=31-bt(o),p=1<<c;s[c]=-1,o&=~p}a!==0&&Xd(e,a,t)}function Tl(){return(we&6)===0?(qi(0),!1):!0}function Dc(){if(pe!==null){if(Te===0)var e=pe.return;else e=pe,En=Mr=null,Xu(e),_a=null,Mi=0,e=pe;for(;e!==null;)mm(e.alternate,e),e=e.return;pe=null}}function Da(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Dc(),De=e,pe=a=vn(e.current,null),ve=t,Te=0,Tt=null,Wn=!1,Aa=ai(e,t),wc=!1,Ra=zt=Tc=Ir=er=ke=0,mt=Hi=null,xc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var o=31-bt(s),c=1<<o;t|=e[o],s&=~c}return On=t,$s(),a}function zm(e,t){ce=null,B.H=fl,t===wi||t===tl?(t=ep(),Te=3):t===Zh?(t=ep(),Te=4):Te=t===tm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,pe===null&&(ke=1,gl(e,Mt(t,e.current)))}function Im(){var e=B.H;return B.H=fl,e===null?fl:e}function Bm(){var e=B.A;return B.A=HS,e}function Nc(){ke=4,Wn||(ve&4194048)!==ve&&kt.current!==null||(Aa=!0),(er&134217727)===0&&(Ir&134217727)===0||De===null||rr(De,ve,zt,!1)}function Mc(e,t,a){var s=we;we|=2;var o=Im(),c=Bm();(De!==e||ve!==t)&&(wl=null,Da(e,t)),t=!1;var p=ke;e:do try{if(Te!==0&&pe!==null){var y=pe,E=Tt;switch(Te){case 8:Dc(),p=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var O=Te;if(Te=0,Tt=null,Na(e,y,E,O),a&&Aa){p=0;break e}break;default:O=Te,Te=0,Tt=null,Na(e,y,E,O)}}VS(),p=ke;break}catch(H){zm(e,H)}while(!0);return t&&e.shellSuspendCounter++,En=Mr=null,we=s,B.H=o,B.A=c,pe===null&&(De=null,ve=0,$s()),p}function VS(){for(;pe!==null;)Hm(pe)}function GS(e,t){var a=we;we|=2;var s=Im(),o=Bm();De!==e||ve!==t?(wl=null,_l=Jt()+500,Da(e,t)):Aa=ai(e,t);e:do try{if(Te!==0&&pe!==null){t=pe;var c=Tt;t:switch(Te){case 1:Te=0,Tt=null,Na(e,t,c,1);break;case 2:case 9:if(Jh(c)){Te=0,Tt=null,Pm(t);break}t=function(){Te!==2&&Te!==9||De!==e||(Te=7),rn(e)},c.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Jh(c)?(Te=0,Tt=null,Pm(t)):(Te=0,Tt=null,Na(e,t,c,7));break;case 5:var p=null;switch(pe.tag){case 26:p=pe.memoizedState;case 5:case 27:var y=pe;if(!p||_g(p)){Te=0,Tt=null;var E=y.sibling;if(E!==null)pe=E;else{var O=y.return;O!==null?(pe=O,xl(O)):pe=null}break t}}Te=0,Tt=null,Na(e,t,c,5);break;case 6:Te=0,Tt=null,Na(e,t,c,6);break;case 8:Dc(),ke=6;break e;default:throw Error(l(462))}}YS();break}catch(H){zm(e,H)}while(!0);return En=Mr=null,B.H=s,B.A=o,we=a,pe!==null?0:(De=null,ve=0,$s(),ke)}function YS(){for(;pe!==null&&!hb();)Hm(pe)}function Hm(e){var t=hm(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?xl(e):pe=t}function Pm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=lm(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=lm(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Xu(t);default:mm(a,t),t=pe=qh(t,On),t=hm(a,t,On)}e.memoizedProps=e.pendingProps,t===null?xl(e):pe=t}function Na(e,t,a,s){En=Mr=null,Xu(t),_a=null,Mi=0;var o=t.return;try{if(jS(e,o,t,a,ve)){ke=1,gl(e,Mt(a,e.current)),pe=null;return}}catch(c){if(o!==null)throw pe=o,c;ke=1,gl(e,Mt(a,e.current)),pe=null;return}t.flags&32768?(Se||s===1?e=!0:Aa||(ve&536870912)!==0?e=!1:(Wn=e=!0,(s===2||s===9||s===3||s===6)&&(s=kt.current,s!==null&&s.tag===13&&(s.flags|=16384))),qm(t,e)):xl(t)}function xl(e){var t=e;do{if((t.flags&32768)!==0){qm(t,Wn);return}e=t.return;var a=kS(t.alternate,t,On);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ke===0&&(ke=5)}function qm(e,t){do{var a=zS(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);ke=6,pe=null}function Vm(e,t,a,s,o,c,p,y,E){e.cancelPendingCommit=null;do Al();while(tt!==0);if((we&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=_u,wb(e,a,c,p,y,E),e===De&&(pe=De=null,ve=0),Ca=t,nr=e,Oa=a,Rc=c,Cc=o,Um=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KS(Ns,function(){return Fm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,o=F.p,F.p=2,p=we,we|=4;try{IS(e,t,a)}finally{we=p,F.p=o,B.T=s}}tt=1,Gm(),Ym(),$m()}}function Gm(){if(tt===1){tt=0;var e=nr,t=Ca,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=F.p;F.p=2;var o=we;we|=4;try{Am(t,e);var c=Gc,p=Mh(e.containerInfo),y=c.focusedElem,E=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&Nh(y.ownerDocument.documentElement,y)){if(E!==null&&yu(y)){var O=E.start,H=E.end;if(H===void 0&&(H=O),"selectionStart"in y)y.selectionStart=O,y.selectionEnd=Math.min(H,y.value.length);else{var q=y.ownerDocument||document,D=q&&q.defaultView||window;if(D.getSelection){var U=D.getSelection(),se=y.textContent.length,ne=Math.min(E.start,se),Re=E.end===void 0?ne:Math.min(E.end,se);!U.extend&&ne>Re&&(p=Re,Re=ne,ne=p);var A=Dh(y,ne),x=Dh(y,Re);if(A&&x&&(U.rangeCount!==1||U.anchorNode!==A.node||U.anchorOffset!==A.offset||U.focusNode!==x.node||U.focusOffset!==x.offset)){var R=q.createRange();R.setStart(A.node,A.offset),U.removeAllRanges(),ne>Re?(U.addRange(R),U.extend(x.node,x.offset)):(R.setEnd(x.node,x.offset),U.addRange(R))}}}}for(q=[],U=y;U=U.parentNode;)U.nodeType===1&&q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<q.length;y++){var P=q[y];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}Il=!!Vc,Gc=Vc=null}finally{we=o,F.p=s,B.T=a}}e.current=t,tt=2}}function Ym(){if(tt===2){tt=0;var e=nr,t=Ca,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=F.p;F.p=2;var o=we;we|=4;try{_m(e,t.alternate,t)}finally{we=o,F.p=s,B.T=a}}tt=3}}function $m(){if(tt===4||tt===3){tt=0,pb();var e=nr,t=Ca,a=Oa,s=Um;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,Ca=nr=null,Xm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(tr=null),Qo(a),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ri,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=B.T,o=F.p,F.p=2,B.T=null;try{for(var c=e.onRecoverableError,p=0;p<s.length;p++){var y=s[p];c(y.value,{componentStack:y.stack})}}finally{B.T=t,F.p=o}}(Oa&3)!==0&&Al(),rn(e),o=e.pendingLanes,(a&4194090)!==0&&(o&42)!==0?e===Oc?Pi++:(Pi=0,Oc=e):Pi=0,qi(0)}}function Xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ei(t)))}function Al(e){return Gm(),Ym(),$m(),Fm()}function Fm(){if(tt!==5)return!1;var e=nr,t=Rc;Rc=0;var a=Qo(Oa),s=B.T,o=F.p;try{F.p=32>a?32:a,B.T=null,a=Cc,Cc=null;var c=nr,p=Oa;if(tt=0,Ca=nr=null,Oa=0,(we&6)!==0)throw Error(l(331));var y=we;if(we|=4,Nm(c.current),Cm(c,c.current,p,a),we=y,qi(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ri,c)}catch{}return!0}finally{F.p=o,B.T=s,Xm(e,t)}}function Km(e,t,a){t=Mt(a,t),t=lc(e.stateNode,t,2),e=$n(e,t,2),e!==null&&(ii(e,2),rn(e))}function Ce(e,t,a){if(e.tag===3)Km(e,e,a);else for(;t!==null;){if(t.tag===3){Km(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(tr===null||!tr.has(s))){e=Mt(a,e),a=Wp(2),s=$n(t,a,2),s!==null&&(em(a,s,t,e),ii(s,2),rn(s));break}}t=t.return}}function Uc(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new PS;var o=new Set;s.set(t,o)}else o=s.get(t),o===void 0&&(o=new Set,s.set(t,o));o.has(a)||(wc=!0,o.add(a),e=$S.bind(null,e,t,a),t.then(e,e))}function $S(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,De===e&&(ve&a)===a&&(ke===4||ke===3&&(ve&62914560)===ve&&300>Jt()-Ac?(we&2)===0&&Da(e,0):Tc|=a,Ra===ve&&(Ra=0)),rn(e)}function Qm(e,t){t===0&&(t=$d()),e=da(e,t),e!==null&&(ii(e,t),rn(e))}function XS(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qm(e,a)}function FS(e,t){var a=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),Qm(e,a)}function KS(e,t){return $o(e,t)}var Rl=null,Ma=null,jc=!1,Cl=!1,Lc=!1,Br=0;function rn(e){e!==Ma&&e.next===null&&(Ma===null?Rl=Ma=e:Ma=Ma.next=e),Cl=!0,jc||(jc=!0,ZS())}function qi(e,t){if(!Lc&&Cl){Lc=!0;do for(var a=!1,s=Rl;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var c=0;else{var p=s.suspendedLanes,y=s.pingedLanes;c=(1<<31-bt(42|e)+1)-1,c&=o&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,eg(s,c))}else c=ve,c=js(s,s===De?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||ai(s,c)||(a=!0,eg(s,c));s=s.next}while(a);Lc=!1}}function QS(){Zm()}function Zm(){Cl=jc=!1;var e=0;Br!==0&&(iE()&&(e=Br),Br=0);for(var t=Jt(),a=null,s=Rl;s!==null;){var o=s.next,c=Jm(s,t);c===0?(s.next=null,a===null?Rl=o:a.next=o,o===null&&(Ma=a)):(a=s,(e!==0||(c&3)!==0)&&(Cl=!0)),s=o}qi(e)}function Jm(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-bt(c),y=1<<p,E=o[p];E===-1?((y&a)===0||(y&s)!==0)&&(o[p]=_b(y,t)):E<=t&&(e.expiredLanes|=y),c&=~y}if(t=De,a=ve,a=js(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Xo(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ai(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&Xo(s),Qo(a)){case 2:case 8:a=Vd;break;case 32:a=Ns;break;case 268435456:a=Gd;break;default:a=Ns}return s=Wm.bind(null,e),a=$o(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&Xo(s),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Al()&&e.callbackNode!==a)return null;var s=ve;return s=js(e,e===De?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Lm(e,s,t),Jm(e,Jt()),e.callbackNode!=null&&e.callbackNode===a?Wm.bind(null,e):null)}function eg(e,t){if(Al())return null;Lm(e,t,!0)}function ZS(){lE(function(){(we&6)!==0?$o(qd,QS):Zm()})}function kc(){return Br===0&&(Br=Yd()),Br}function tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bs(""+e)}function ng(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function JS(e,t,a,s,o){if(t==="submit"&&a&&a.stateNode===o){var c=tg((o[ft]||null).action),p=s.submitter;p&&(t=(t=p[ft]||null)?tg(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var y=new Vs("action","action",null,s,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Br!==0){var E=p?ng(o,p):new FormData(o);nc(a,{pending:!0,data:E,method:o.method,action:c},null,E)}}else typeof c=="function"&&(y.preventDefault(),E=p?ng(o,p):new FormData(o),nc(a,{pending:!0,data:E,method:o.method,action:c},c,E))},currentTarget:o}]})}}for(var zc=0;zc<Eu.length;zc++){var Ic=Eu[zc],WS=Ic.toLowerCase(),eE=Ic[0].toUpperCase()+Ic.slice(1);Vt(WS,"on"+eE)}Vt(Lh,"onAnimationEnd"),Vt(kh,"onAnimationIteration"),Vt(zh,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(yS,"onTransitionRun"),Vt(vS,"onTransitionStart"),Vt(bS,"onTransitionCancel"),Vt(Ih,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wr("onBeforeInput",["compositionend","keypress","textInput","paste"]),wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vi));function rg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],o=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var p=s.length-1;0<=p;p--){var y=s[p],E=y.instance,O=y.currentTarget;if(y=y.listener,E!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=O;try{c(o)}catch(H){ml(H)}o.currentTarget=null,c=E}else for(p=0;p<s.length;p++){if(y=s[p],E=y.instance,O=y.currentTarget,y=y.listener,E!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=O;try{c(o)}catch(H){ml(H)}o.currentTarget=null,c=E}}}}function me(e,t){var a=t[Zo];a===void 0&&(a=t[Zo]=new Set);var s=e+"__bubble";a.has(s)||(ag(t,e,2,!1),a.add(s))}function Bc(e,t,a){var s=0;t&&(s|=4),ag(a,e,s,t)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Hc(e){if(!e[Ol]){e[Ol]=!0,Zd.forEach(function(a){a!=="selectionchange"&&(tE.has(a)||Bc(a,!1,e),Bc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ol]||(t[Ol]=!0,Bc("selectionchange",!1,t))}}function ag(e,t,a,s){switch(Cg(t)){case 2:var o=CE;break;case 8:o=OE;break;default:o=ef}a=o.bind(null,t,a,e),o=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Pc(e,t,a,s,o){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var y=s.stateNode.containerInfo;if(y===o)break;if(p===4)for(p=s.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;y!==null;){if(p=Wr(y),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){s=c=p;continue e}y=y.parentNode}}s=s.return}fh(function(){var O=c,H=su(a),q=[];e:{var D=Bh.get(e);if(D!==void 0){var U=Vs,se=e;switch(e){case"keypress":if(Ps(a)===0)break e;case"keydown":case"keyup":U=Kb;break;case"focusin":se="focus",U=du;break;case"focusout":se="blur",U=du;break;case"beforeblur":case"afterblur":U=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Jb;break;case Lh:case kh:case zh:U=Hb;break;case Ih:U=eS;break;case"scroll":case"scrollend":U=Lb;break;case"wheel":U=nS;break;case"copy":case"cut":case"paste":U=qb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=gh;break;case"toggle":case"beforetoggle":U=aS}var ne=(t&4)!==0,Re=!ne&&(e==="scroll"||e==="scrollend"),A=ne?D!==null?D+"Capture":null:D;ne=[];for(var x=O,R;x!==null;){var P=x;if(R=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||R===null||A===null||(P=oi(x,A),P!=null&&ne.push(Gi(x,P,R))),Re)break;x=x.return}0<ne.length&&(D=new U(D,se,null,a,H),q.push({event:D,listeners:ne}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",D&&a!==iu&&(se=a.relatedTarget||a.fromElement)&&(Wr(se)||se[Jr]))break e;if((U||D)&&(D=H.window===H?H:(D=H.ownerDocument)?D.defaultView||D.parentWindow:window,U?(se=a.relatedTarget||a.toElement,U=O,se=se?Wr(se):null,se!==null&&(Re=f(se),ne=se.tag,se!==Re||ne!==5&&ne!==27&&ne!==6)&&(se=null)):(U=null,se=O),U!==se)){if(ne=ph,P="onMouseLeave",A="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ne=gh,P="onPointerLeave",A="onPointerEnter",x="pointer"),Re=U==null?D:li(U),R=se==null?D:li(se),D=new ne(P,x+"leave",U,a,H),D.target=Re,D.relatedTarget=R,P=null,Wr(H)===O&&(ne=new ne(A,x+"enter",se,a,H),ne.target=R,ne.relatedTarget=Re,P=ne),Re=P,U&&se)t:{for(ne=U,A=se,x=0,R=ne;R;R=Ua(R))x++;for(R=0,P=A;P;P=Ua(P))R++;for(;0<x-R;)ne=Ua(ne),x--;for(;0<R-x;)A=Ua(A),R--;for(;x--;){if(ne===A||A!==null&&ne===A.alternate)break t;ne=Ua(ne),A=Ua(A)}ne=null}else ne=null;U!==null&&ig(q,D,U,ne,!1),se!==null&&Re!==null&&ig(q,Re,se,ne,!0)}}e:{if(D=O?li(O):window,U=D.nodeName&&D.nodeName.toLowerCase(),U==="select"||U==="input"&&D.type==="file")var J=Th;else if(_h(D))if(xh)J=pS;else{J=dS;var fe=fS}else U=D.nodeName,!U||U.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?O&&au(O.elementType)&&(J=Th):J=hS;if(J&&(J=J(e,O))){wh(q,J,a,H);break e}fe&&fe(e,D,O),e==="focusout"&&O&&D.type==="number"&&O.memoizedProps.value!=null&&ru(D,"number",D.value)}switch(fe=O?li(O):window,e){case"focusin":(_h(fe)||fe.contentEditable==="true")&&(ua=fe,vu=O,gi=null);break;case"focusout":gi=vu=ua=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Uh(q,a,H);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Uh(q,a,H)}var W;if(pu)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else oa?Sh(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(yh&&a.locale!=="ko"&&(oa||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&oa&&(W=dh()):(qn=H,uu="value"in qn?qn.value:qn.textContent,oa=!0)),fe=Dl(O,ae),0<fe.length&&(ae=new mh(ae,e,null,a,H),q.push({event:ae,listeners:fe}),W?ae.data=W:(W=Eh(a),W!==null&&(ae.data=W)))),(W=sS?lS(e,a):oS(e,a))&&(ae=Dl(O,"onBeforeInput"),0<ae.length&&(fe=new mh("onBeforeInput","beforeinput",null,a,H),q.push({event:fe,listeners:ae}),fe.data=W)),JS(q,e,O,a,H)}rg(q,t)})}function Gi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Dl(e,t){for(var a=t+"Capture",s=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=oi(e,a),o!=null&&s.unshift(Gi(e,o,c)),o=oi(e,t),o!=null&&s.push(Gi(e,o,c))),e.tag===3)return s;e=e.return}return[]}function Ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ig(e,t,a,s,o){for(var c=t._reactName,p=[];a!==null&&a!==s;){var y=a,E=y.alternate,O=y.stateNode;if(y=y.tag,E!==null&&E===s)break;y!==5&&y!==26&&y!==27||O===null||(E=O,o?(O=oi(a,c),O!=null&&p.unshift(Gi(a,O,E))):o||(O=oi(a,c),O!=null&&p.push(Gi(a,O,E)))),a=a.return}p.length!==0&&e.push({event:t,listeners:p})}var nE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function sg(e){return(typeof e=="string"?e:""+e).replace(nE,`
`).replace(rE,"")}function lg(e,t){return t=sg(t),sg(e)===t}function Nl(){}function Ae(e,t,a,s,o,c){switch(a){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||ia(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&ia(e,""+s);break;case"className":ks(e,"class",s);break;case"tabIndex":ks(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ks(e,a,s);break;case"style":uh(e,s,c);break;case"data":if(t!=="object"){ks(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Bs(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",o.name,o,null),Ae(e,t,"formEncType",o.formEncType,o,null),Ae(e,t,"formMethod",o.formMethod,o,null),Ae(e,t,"formTarget",o.formTarget,o,null)):(Ae(e,t,"encType",o.encType,o,null),Ae(e,t,"method",o.method,o,null),Ae(e,t,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Bs(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Nl);break;case"onScroll":s!=null&&me("scroll",e);break;case"onScrollEnd":s!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Bs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":me("beforetoggle",e),me("toggle",e),Ls(e,"popover",s);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ls(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ub.get(a)||a,Ls(e,a,s))}}function qc(e,t,a,s,o,c){switch(a){case"style":uh(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof s=="string"?ia(e,s):(typeof s=="number"||typeof s=="bigint")&&ia(e,""+s);break;case"onScroll":s!=null&&me("scroll",e);break;case"onScrollEnd":s!=null&&me("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),c=e[ft]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof s=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,s,o);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ls(e,a,s)}}}function nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var s=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ae(e,t,c,p,a,null)}}o&&Ae(e,t,"srcSet",a.srcSet,a,null),s&&Ae(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var y=c=p=o=null,E=null,O=null;for(s in a)if(a.hasOwnProperty(s)){var H=a[s];if(H!=null)switch(s){case"name":o=H;break;case"type":p=H;break;case"checked":E=H;break;case"defaultChecked":O=H;break;case"value":c=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,t));break;default:Ae(e,t,s,H,a,null)}}ih(e,c,y,E,O,p,o,!1),zs(e);return;case"select":me("invalid",e),s=p=c=null;for(o in a)if(a.hasOwnProperty(o)&&(y=a[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":s=y;default:Ae(e,t,o,y,a,null)}t=c,a=p,e.multiple=!!s,t!=null?aa(e,!!s,t,!1):a!=null&&aa(e,!!s,a,!0);return;case"textarea":me("invalid",e),c=o=s=null;for(p in a)if(a.hasOwnProperty(p)&&(y=a[p],y!=null))switch(p){case"value":s=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Ae(e,t,p,y,a,null)}lh(e,s,o,c),zs(e);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(s=a[E],s!=null))switch(E){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ae(e,t,E,s,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(s=0;s<Vi.length;s++)me(Vi[s],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ae(e,t,O,s,a,null)}return;default:if(au(t)){for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!==void 0&&qc(e,t,H,s,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(s=a[y],s!=null&&Ae(e,t,y,s,a,null))}function aE(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,p=null,y=null,E=null,O=null,H=null;for(U in a){var q=a[U];if(a.hasOwnProperty(U)&&q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":E=q;default:s.hasOwnProperty(U)||Ae(e,t,U,null,s,q)}}for(var D in s){var U=s[D];if(q=a[D],s.hasOwnProperty(D)&&(U!=null||q!=null))switch(D){case"type":c=U;break;case"name":o=U;break;case"checked":O=U;break;case"defaultChecked":H=U;break;case"value":p=U;break;case"defaultValue":y=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:U!==q&&Ae(e,t,D,U,s,q)}}nu(e,p,y,E,O,H,c,o);return;case"select":U=p=y=D=null;for(c in a)if(E=a[c],a.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":U=E;default:s.hasOwnProperty(c)||Ae(e,t,c,null,s,E)}for(o in s)if(c=s[o],E=a[o],s.hasOwnProperty(o)&&(c!=null||E!=null))switch(o){case"value":D=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==E&&Ae(e,t,o,c,s,E)}t=y,a=p,s=U,D!=null?aa(e,!!a,D,!1):!!s!=!!a&&(t!=null?aa(e,!!a,t,!0):aa(e,!!a,a?[]:"",!1));return;case"textarea":U=D=null;for(y in a)if(o=a[y],a.hasOwnProperty(y)&&o!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ae(e,t,y,null,s,o)}for(p in s)if(o=s[p],c=a[p],s.hasOwnProperty(p)&&(o!=null||c!=null))switch(p){case"value":D=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&Ae(e,t,p,o,s,c)}sh(e,D,U);return;case"option":for(var se in a)if(D=a[se],a.hasOwnProperty(se)&&D!=null&&!s.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Ae(e,t,se,null,s,D)}for(E in s)if(D=s[E],U=a[E],s.hasOwnProperty(E)&&D!==U&&(D!=null||U!=null))switch(E){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Ae(e,t,E,D,s,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)D=a[ne],a.hasOwnProperty(ne)&&D!=null&&!s.hasOwnProperty(ne)&&Ae(e,t,ne,null,s,D);for(O in s)if(D=s[O],U=a[O],s.hasOwnProperty(O)&&D!==U&&(D!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:Ae(e,t,O,D,s,U)}return;default:if(au(t)){for(var Re in a)D=a[Re],a.hasOwnProperty(Re)&&D!==void 0&&!s.hasOwnProperty(Re)&&qc(e,t,Re,void 0,s,D);for(H in s)D=s[H],U=a[H],!s.hasOwnProperty(H)||D===U||D===void 0&&U===void 0||qc(e,t,H,D,s,U);return}}for(var A in a)D=a[A],a.hasOwnProperty(A)&&D!=null&&!s.hasOwnProperty(A)&&Ae(e,t,A,null,s,D);for(q in s)D=s[q],U=a[q],!s.hasOwnProperty(q)||D===U||D==null&&U==null||Ae(e,t,q,D,s,U)}var Vc=null,Gc=null;function Ml(e){return e.nodeType===9?e:e.ownerDocument}function og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $c=null;function iE(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var cg=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,lE=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(oE)}:cg;function oE(e){setTimeout(function(){throw e})}function ar(e){return e==="head"}function dg(e,t){var a=t,s=0,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<s&&8>s){a=s;var p=e.ownerDocument;if(a&1&&Yi(p.documentElement),a&2&&Yi(p.body),a&4)for(a=p.head,Yi(a),p=a.firstChild;p;){var y=p.nextSibling,E=p.nodeName;p[si]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=y}}if(o===0){e.removeChild(c),Wi(t);return}o--}else a==="$"||a==="$?"||a==="$!"?o++:s=a.charCodeAt(0)-48;else s=0;a=c}while(a);Wi(t)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xc(a),Jo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uE(e,t,a,s){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function cE(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fE(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Kc=null;function hg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function pg(e,t,a){switch(t=Ml(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jo(e)}var It=new Map,mg=new Set;function Ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=F.d;F.d={f:dE,r:hE,D:pE,C:mE,L:gE,m:yE,X:bE,S:vE,M:SE};function dE(){var e=Dn.f(),t=Tl();return e||t}function hE(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?Lp(t):Dn.r(e)}var ja=typeof document>"u"?null:document;function gg(e,t,a){var s=ja;if(s&&typeof t=="string"&&t){var o=Nt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),mg.has(o)||(mg.add(o),e={rel:e,crossOrigin:a,href:t},s.querySelector(o)===null&&(t=s.createElement("link"),nt(t,"link",e),Ke(t),s.head.appendChild(t)))}}function pE(e){Dn.D(e),gg("dns-prefetch",e,null)}function mE(e,t){Dn.C(e,t),gg("preconnect",e,t)}function gE(e,t,a){Dn.L(e,t,a);var s=ja;if(s&&e&&t){var o='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Nt(a.imageSizes)+'"]')):o+='[href="'+Nt(e)+'"]';var c=o;switch(t){case"style":c=La(e);break;case"script":c=ka(e)}It.has(c)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),It.set(c,e),s.querySelector(o)!==null||t==="style"&&s.querySelector($i(c))||t==="script"&&s.querySelector(Xi(c))||(t=s.createElement("link"),nt(t,"link",e),Ke(t),s.head.appendChild(t)))}}function yE(e,t){Dn.m(e,t);var a=ja;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Nt(s)+'"][href="'+Nt(e)+'"]',c=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ka(e)}if(!It.has(c)&&(e=b({rel:"modulepreload",href:e},t),It.set(c,e),a.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xi(c)))return}s=a.createElement("link"),nt(s,"link",e),Ke(s),a.head.appendChild(s)}}}function vE(e,t,a){Dn.S(e,t,a);var s=ja;if(s&&e){var o=ta(s).hoistableStyles,c=La(e);t=t||"default";var p=o.get(c);if(!p){var y={loading:0,preload:null};if(p=s.querySelector($i(c)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=It.get(c))&&Qc(e,a);var E=p=s.createElement("link");Ke(E),nt(E,"link",e),E._p=new Promise(function(O,H){E.onload=O,E.onerror=H}),E.addEventListener("load",function(){y.loading|=1}),E.addEventListener("error",function(){y.loading|=2}),y.loading|=4,jl(p,t,s)}p={type:"stylesheet",instance:p,count:1,state:y},o.set(c,p)}}}function bE(e,t){Dn.X(e,t);var a=ja;if(a&&e){var s=ta(a).hoistableScripts,o=ka(e),c=s.get(o);c||(c=a.querySelector(Xi(o)),c||(e=b({src:e,async:!0},t),(t=It.get(o))&&Zc(e,t),c=a.createElement("script"),Ke(c),nt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function SE(e,t){Dn.M(e,t);var a=ja;if(a&&e){var s=ta(a).hoistableScripts,o=ka(e),c=s.get(o);c||(c=a.querySelector(Xi(o)),c||(e=b({src:e,async:!0,type:"module"},t),(t=It.get(o))&&Zc(e,t),c=a.createElement("script"),Ke(c),nt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function yg(e,t,a,s){var o=(o=re.current)?Ul(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=La(a.href),a=ta(o).hoistableStyles,s=a.get(t),s||(s={type:"style",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=La(a.href);var c=ta(o).hoistableStyles,p=c.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=o.querySelector($i(e)))&&!c._p&&(p.instance=c,p.state.loading=5),It.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},It.set(e,a),c||EE(o,e,a,p.state))),t&&s===null)throw Error(l(528,""));return p}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ka(a),a=ta(o).hoistableScripts,s=a.get(t),s||(s={type:"script",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function La(e){return'href="'+Nt(e)+'"'}function $i(e){return'link[rel="stylesheet"]['+e+"]"}function vg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function EE(e,t,a,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),nt(t,"link",a),Ke(t),e.head.appendChild(t))}function ka(e){return'[src="'+Nt(e)+'"]'}function Xi(e){return"script[async]"+e}function bg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(s)return t.instance=s,Ke(s),s;var o=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ke(s),nt(s,"style",o),jl(s,a.precedence,e),t.instance=s;case"stylesheet":o=La(a.href);var c=e.querySelector($i(o));if(c)return t.state.loading|=4,t.instance=c,Ke(c),c;s=vg(a),(o=It.get(o))&&Qc(s,o),c=(e.ownerDocument||e).createElement("link"),Ke(c);var p=c;return p._p=new Promise(function(y,E){p.onload=y,p.onerror=E}),nt(c,"link",s),t.state.loading|=4,jl(c,a.precedence,e),t.instance=c;case"script":return c=ka(a.src),(o=e.querySelector(Xi(c)))?(t.instance=o,Ke(o),o):(s=a,(o=It.get(c))&&(s=b({},a),Zc(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ke(o),nt(o,"link",s),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,jl(s,a.precedence,e));return t.instance}function jl(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,c=o,p=0;p<s.length;p++){var y=s[p];if(y.dataset.precedence===t)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ll=null;function Sg(e,t,a){if(Ll===null){var s=new Map,o=Ll=new Map;o.set(a,s)}else o=Ll,s=o.get(a),s||(s=new Map,o.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var c=a[o];if(!(c[si]||c[at]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var y=s.get(p);y?y.push(c):s.set(p,[c])}}return s}function Eg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function _E(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Fi=null;function wE(){}function TE(e,t,a){if(Fi===null)throw Error(l(475));var s=Fi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=La(a.href),c=e.querySelector($i(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=kl.bind(s),e.then(s,s)),t.state.loading|=4,t.instance=c,Ke(c);return}c=e.ownerDocument||e,a=vg(a),(o=It.get(o))&&Qc(a,o),c=c.createElement("link"),Ke(c);var p=c;p._p=new Promise(function(y,E){p.onload=y,p.onerror=E}),nt(c,"link",a),t.instance=c}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(s.count++,t=kl.bind(s),e.addEventListener("load",t),e.addEventListener("error",t))}}function xE(){if(Fi===null)throw Error(l(475));var e=Fi;return e.stylesheets&&e.count===0&&Jc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Jc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)Jc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zl=null;function Jc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zl=new Map,t.forEach(AE,e),zl=null,kl.call(e))}function AE(e,t){if(!(t.state.loading&4)){var a=zl.get(e);if(a)var s=a.get(null);else{a=new Map,zl.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var p=o[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),s=p)}s&&a.set(null,s)}o=t.instance,p=o.getAttribute("data-precedence"),c=a.get(p)||s,c===s&&a.set(null,o),a.set(p,o),this.count++,s=kl.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Ki={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function RE(e,t,a,s,o,c,p,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.hiddenUpdates=Fo(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function wg(e,t,a,s,o,c,p,y,E,O,H,q){return e=new RE(e,t,a,p,y,E,O,q),t=1,c===!0&&(t|=24),c=Et(3,null,null,t),e.current=c,c.stateNode=e,t=Uu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:t},zu(c),e}function Tg(e){return e?(e=ha,e):ha}function xg(e,t,a,s,o,c){o=Tg(o),s.context===null?s.context=o:s.pendingContext=o,s=Yn(t),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=$n(e,s,t),a!==null&&(At(a,e,t),xi(a,e,t))}function Ag(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wc(e,t){Ag(e,t),(e=e.alternate)&&Ag(e,t)}function Rg(e){if(e.tag===13){var t=da(e,67108864);t!==null&&At(t,e,67108864),Wc(e,67108864)}}var Il=!0;function CE(e,t,a,s){var o=B.T;B.T=null;var c=F.p;try{F.p=2,ef(e,t,a,s)}finally{F.p=c,B.T=o}}function OE(e,t,a,s){var o=B.T;B.T=null;var c=F.p;try{F.p=8,ef(e,t,a,s)}finally{F.p=c,B.T=o}}function ef(e,t,a,s){if(Il){var o=tf(s);if(o===null)Pc(e,t,s,Bl,a),Og(e,s);else if(NE(o,e,t,a,s))s.stopPropagation();else if(Og(e,s),t&4&&-1<DE.indexOf(e)){for(;o!==null;){var c=ea(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=_r(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var E=1<<31-bt(p);y.entanglements[1]|=E,p&=~E}rn(c),(we&6)===0&&(_l=Jt()+500,qi(0))}}break;case 13:y=da(c,2),y!==null&&At(y,c,2),Tl(),Wc(c,2)}if(c=tf(s),c===null&&Pc(e,t,s,Bl,a),c===o)break;o=c}o!==null&&s.stopPropagation()}else Pc(e,t,s,null,a)}}function tf(e){return e=su(e),nf(e)}var Bl=null;function nf(e){if(Bl=null,e=Wr(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bl=e,null}function Cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mb()){case qd:return 2;case Vd:return 8;case Ns:case gb:return 32;case Gd:return 268435456;default:return 32}default:return 32}}var rf=!1,ir=null,sr=null,lr=null,Qi=new Map,Zi=new Map,or=[],DE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function Ji(e,t,a,s,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[o]},t!==null&&(t=ea(t),t!==null&&Rg(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function NE(e,t,a,s,o){switch(t){case"focusin":return ir=Ji(ir,e,t,a,s,o),!0;case"dragenter":return sr=Ji(sr,e,t,a,s,o),!0;case"mouseover":return lr=Ji(lr,e,t,a,s,o),!0;case"pointerover":var c=o.pointerId;return Qi.set(c,Ji(Qi.get(c)||null,e,t,a,s,o)),!0;case"gotpointercapture":return c=o.pointerId,Zi.set(c,Ji(Zi.get(c)||null,e,t,a,s,o)),!0}return!1}function Dg(e){var t=Wr(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Tb(e.priority,function(){if(a.tag===13){var s=xt();s=Ko(s);var o=da(a,s);o!==null&&At(o,a,s),Wc(a,s)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);iu=s,a.target.dispatchEvent(s),iu=null}else return t=ea(a),t!==null&&Rg(t),e.blockedOn=a,!1;t.shift()}return!0}function Ng(e,t,a){Hl(e)&&a.delete(t)}function ME(){rf=!1,ir!==null&&Hl(ir)&&(ir=null),sr!==null&&Hl(sr)&&(sr=null),lr!==null&&Hl(lr)&&(lr=null),Qi.forEach(Ng),Zi.forEach(Ng)}function Pl(e,t){e.blockedOn===t&&(e.blockedOn=null,rf||(rf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ME)))}var ql=null;function Mg(e){ql!==e&&(ql=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],o=e[t+2];if(typeof s!="function"){if(nf(s||a)===null)continue;break}var c=ea(a);c!==null&&(e.splice(t,3),t-=3,nc(c,{pending:!0,data:o,method:a.method,action:s},s,o))}}))}function Wi(e){function t(E){return Pl(E,e)}ir!==null&&Pl(ir,e),sr!==null&&Pl(sr,e),lr!==null&&Pl(lr,e),Qi.forEach(t),Zi.forEach(t);for(var a=0;a<or.length;a++){var s=or[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var o=a[s],c=a[s+1],p=o[ft]||null;if(typeof c=="function")p||Mg(a);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,p=c[ft]||null)y=p.formAction;else if(nf(o)!==null)continue}else y=p.action;typeof y=="function"?a[s+1]=y:(a.splice(s,3),s-=3),Mg(a)}}}function af(e){this._internalRoot=e}Vl.prototype.render=af.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,s=xt();xg(a,s,e,t,null,null)},Vl.prototype.unmount=af.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xg(e.current,2,null,e,null,null),Tl(),t[Jr]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<or.length&&t!==0&&t<or[a].priority;a++);or.splice(a,0,e),a===0&&Dg(e)}};var Ug=n.version;if(Ug!=="19.1.0")throw Error(l(527,Ug,"19.1.0"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var UE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{ri=Gl.inject(UE),vt=Gl}catch{}}return ts.createRoot=function(e,t){if(!u(e))throw Error(l(299));var a=!1,s="",o=Kp,c=Qp,p=Zp,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=wg(e,1,!1,null,null,a,s,o,c,p,y,null),e[Jr]=t.current,Hc(e),new af(t)},ts.hydrateRoot=function(e,t,a){if(!u(e))throw Error(l(299));var s=!1,o="",c=Kp,p=Qp,y=Zp,E=null,O=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(E=a.unstable_transitionCallbacks),a.formState!==void 0&&(O=a.formState)),t=wg(e,1,!0,t,a??null,s,o,c,p,y,E,O),t.context=Tg(null),a=t.current,s=xt(),s=Ko(s),o=Yn(s),o.callback=null,$n(a,o,s),a=s,t.current.lanes=a,ii(t,a),rn(t),e[Jr]=t.current,Hc(e),new Vl(t)},ts.version="19.1.0",ts}var Vg;function VE(){if(Vg)return of.exports;Vg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),of.exports=qE(),of.exports}var GE=VE();const YE=s0(GE);var ns={},Gg;function $E(){if(Gg)return ns;Gg=1,Object.defineProperty(ns,"__esModule",{value:!0}),ns.parse=d,ns.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function d(T,C){const _=new f,k=T.length;if(k<2)return _;const j=(C==null?void 0:C.decode)||b;let L=0;do{const G=T.indexOf("=",L);if(G===-1)break;const I=T.indexOf(";",L),Q=I===-1?k:I;if(G>Q){L=T.lastIndexOf(";",G-1)+1;continue}const Y=g(T,L,G),Z=h(T,G,Y),X=T.slice(Y,Z);if(_[X]===void 0){let ye=g(T,G+1,Q),ge=h(T,Q,ye);const Ve=j(T.slice(ye,ge));_[X]=Ve}L=Q+1}while(L<k);return _}function g(T,C,_){do{const k=T.charCodeAt(C);if(k!==32&&k!==9)return C}while(++C<_);return _}function h(T,C,_){for(;C>_;){const k=T.charCodeAt(--C);if(k!==32&&k!==9)return C+1}return _}function m(T,C,_){const k=(_==null?void 0:_.encode)||encodeURIComponent;if(!r.test(T))throw new TypeError(`argument name is invalid: ${T}`);const j=k(C);if(!n.test(j))throw new TypeError(`argument val is invalid: ${C}`);let L=T+"="+j;if(!_)return L;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);L+="; Max-Age="+_.maxAge}if(_.domain){if(!i.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);L+="; Domain="+_.domain}if(_.path){if(!l.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);L+="; Path="+_.path}if(_.expires){if(!S(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);L+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(L+="; HttpOnly"),_.secure&&(L+="; Secure"),_.partitioned&&(L+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return L}function b(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function S(T){return u.call(T)==="[object Date]"}return ns}$E();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function XE(r={}){function n(l,u){let{pathname:f,search:d,hash:g}=l.location;return Gf("",{pathname:f,search:d,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){return typeof u=="string"?u:fs(u)}return KE(n,i,null,r)}function je(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function un(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function FE(){return Math.random().toString(36).substring(2,10)}function $g(r,n){return{usr:r.state,key:r.key,idx:n}}function Gf(r,n,i=null,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof n=="string"?Za(n):n,state:i,key:n&&n.key||l||FE()}}function fs({pathname:r="/",search:n="",hash:i=""}){return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Za(r){let n={};if(r){let i=r.indexOf("#");i>=0&&(n.hash=r.substring(i),r=r.substring(0,i));let l=r.indexOf("?");l>=0&&(n.search=r.substring(l),r=r.substring(0,l)),r&&(n.pathname=r)}return n}function KE(r,n,i,l={}){let{window:u=document.defaultView,v5Compat:f=!1}=l,d=u.history,g="POP",h=null,m=b();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function b(){return(d.state||{idx:null}).idx}function S(){g="POP";let j=b(),L=j==null?null:j-m;m=j,h&&h({action:g,location:k.location,delta:L})}function T(j,L){g="PUSH";let G=Gf(k.location,j,L);m=b()+1;let I=$g(G,m),Q=k.createHref(G);try{d.pushState(I,"",Q)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;u.location.assign(Q)}f&&h&&h({action:g,location:k.location,delta:1})}function C(j,L){g="REPLACE";let G=Gf(k.location,j,L);m=b();let I=$g(G,m),Q=k.createHref(G);d.replaceState(I,"",Q),f&&h&&h({action:g,location:k.location,delta:0})}function _(j){let L=u.location.origin!=="null"?u.location.origin:u.location.href,G=typeof j=="string"?j:fs(j);return G=G.replace(/ $/,"%20"),je(L,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,L)}let k={get action(){return g},get location(){return r(u,d)},listen(j){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Yg,S),h=j,()=>{u.removeEventListener(Yg,S),h=null}},createHref(j){return n(u,j)},createURL:_,encodeLocation(j){let L=_(j);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:T,replace:C,go(j){return d.go(j)}};return k}function l0(r,n,i="/"){return QE(r,n,i,!1)}function QE(r,n,i,l){let u=typeof n=="string"?Za(n):n,f=kn(u.pathname||"/",i);if(f==null)return null;let d=o0(r);ZE(d);let g=null;for(let h=0;g==null&&h<d.length;++h){let m=o1(f);g=s1(d[h],m,l)}return g}function o0(r,n=[],i=[],l=""){let u=(f,d,g)=>{let h={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(je(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let m=jn([l,h.relativePath]),b=i.concat(h);f.children&&f.children.length>0&&(je(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),o0(f.children,n,b,m)),!(f.path==null&&!f.index)&&n.push({path:m,score:a1(m,f.index),routesMeta:b})};return r.forEach((f,d)=>{var g;if(f.path===""||!((g=f.path)!=null&&g.includes("?")))u(f,d);else for(let h of u0(f.path))u(f,d,h)}),n}function u0(r){let n=r.split("/");if(n.length===0)return[];let[i,...l]=n,u=i.endsWith("?"),f=i.replace(/\?$/,"");if(l.length===0)return u?[f,""]:[f];let d=u0(l.join("/")),g=[];return g.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&g.push(...d),g.map(h=>r.startsWith("/")&&h===""?"/":h)}function ZE(r){r.sort((n,i)=>n.score!==i.score?i.score-n.score:i1(n.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var JE=/^:[\w-]+$/,WE=3,e1=2,t1=1,n1=10,r1=-2,Xg=r=>r==="*";function a1(r,n){let i=r.split("/"),l=i.length;return i.some(Xg)&&(l+=r1),n&&(l+=e1),i.filter(u=>!Xg(u)).reduce((u,f)=>u+(JE.test(f)?WE:f===""?t1:n1),l)}function i1(r,n){return r.length===n.length&&r.slice(0,-1).every((l,u)=>l===n[u])?r[r.length-1]-n[n.length-1]:0}function s1(r,n,i=!1){let{routesMeta:l}=r,u={},f="/",d=[];for(let g=0;g<l.length;++g){let h=l[g],m=g===l.length-1,b=f==="/"?n:n.slice(f.length)||"/",S=ho({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},b),T=h.route;if(!S&&m&&i&&!l[l.length-1].route.index&&(S=ho({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!S)return null;Object.assign(u,S.params),d.push({params:u,pathname:jn([f,S.pathname]),pathnameBase:d1(jn([f,S.pathnameBase])),route:T}),S.pathnameBase!=="/"&&(f=jn([f,S.pathnameBase]))}return d}function ho(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,l]=l1(r.path,r.caseSensitive,r.end),u=n.match(i);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:l.reduce((m,{paramName:b,isOptional:S},T)=>{if(b==="*"){let _=g[T]||"";d=f.slice(0,f.length-_.length).replace(/(.)\/+$/,"$1")}const C=g[T];return S&&!C?m[b]=void 0:m[b]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:r}}function l1(r,n=!1,i=!0){un(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,h)=>(l.push({paramName:g,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(l.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,n?void 0:"i"),l]}function o1(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return un(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),r}}function kn(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,l=r.charAt(i);return l&&l!=="/"?null:r.slice(i)||"/"}function u1(r,n="/"){let{pathname:i,search:l="",hash:u=""}=typeof r=="string"?Za(r):r;return{pathname:i?i.startsWith("/")?i:c1(i,n):n,search:h1(l),hash:p1(u)}}function c1(r,n){let i=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function df(r,n,i,l){return`Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f1(r){return r.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function c0(r){let n=f1(r);return n.map((i,l)=>l===n.length-1?i.pathname:i.pathnameBase)}function f0(r,n,i,l=!1){let u;typeof r=="string"?u=Za(r):(u={...r},je(!u.pathname||!u.pathname.includes("?"),df("?","pathname","search",u)),je(!u.pathname||!u.pathname.includes("#"),df("#","pathname","hash",u)),je(!u.search||!u.search.includes("#"),df("#","search","hash",u)));let f=r===""||u.pathname==="",d=f?"/":u.pathname,g;if(d==null)g=i;else{let S=n.length-1;if(!l&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),S-=1;u.pathname=T.join("/")}g=S>=0?n[S]:"/"}let h=u1(u,g),m=d&&d!=="/"&&d.endsWith("/"),b=(f||d===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||b)&&(h.pathname+="/"),h}var jn=r=>r.join("/").replace(/\/\/+/g,"/"),d1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),h1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,p1=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function m1(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var d0=["POST","PUT","PATCH","DELETE"];new Set(d0);var g1=["GET",...d0];new Set(g1);var Ja=M.createContext(null);Ja.displayName="DataRouter";var Ro=M.createContext(null);Ro.displayName="DataRouterState";var h0=M.createContext({isTransitioning:!1});h0.displayName="ViewTransition";var y1=M.createContext(new Map);y1.displayName="Fetchers";var v1=M.createContext(null);v1.displayName="Await";var cn=M.createContext(null);cn.displayName="Navigation";var vs=M.createContext(null);vs.displayName="Location";var fn=M.createContext({outlet:null,matches:[],isDataRoute:!1});fn.displayName="Route";var gd=M.createContext(null);gd.displayName="RouteError";function b1(r,{relative:n}={}){je(bs(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=M.useContext(cn),{hash:u,pathname:f,search:d}=Ss(r,{relative:n}),g=f;return i!=="/"&&(g=f==="/"?i:jn([i,f])),l.createHref({pathname:g,search:d,hash:u})}function bs(){return M.useContext(vs)!=null}function Qr(){return je(bs(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(vs).location}var p0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m0(r){M.useContext(cn).static||M.useLayoutEffect(r)}function Co(){let{isDataRoute:r}=M.useContext(fn);return r?U1():S1()}function S1(){je(bs(),"useNavigate() may be used only in the context of a <Router> component.");let r=M.useContext(Ja),{basename:n,navigator:i}=M.useContext(cn),{matches:l}=M.useContext(fn),{pathname:u}=Qr(),f=JSON.stringify(c0(l)),d=M.useRef(!1);return m0(()=>{d.current=!0}),M.useCallback((h,m={})=>{if(un(d.current,p0),!d.current)return;if(typeof h=="number"){i.go(h);return}let b=f0(h,JSON.parse(f),u,m.relative==="path");r==null&&n!=="/"&&(b.pathname=b.pathname==="/"?n:jn([n,b.pathname])),(m.replace?i.replace:i.push)(b,m.state,m)},[n,i,f,u,r])}M.createContext(null);function E1(){let{matches:r}=M.useContext(fn),n=r[r.length-1];return n?n.params:{}}function Ss(r,{relative:n}={}){let{matches:i}=M.useContext(fn),{pathname:l}=Qr(),u=JSON.stringify(c0(i));return M.useMemo(()=>f0(r,JSON.parse(u),l,n==="path"),[r,u,l,n])}function _1(r,n){return g0(r,n)}function g0(r,n,i,l){var G;je(bs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=M.useContext(cn),{matches:d}=M.useContext(fn),g=d[d.length-1],h=g?g.params:{},m=g?g.pathname:"/",b=g?g.pathnameBase:"/",S=g&&g.route;{let I=S&&S.path||"";y0(m,!S||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let T=Qr(),C;if(n){let I=typeof n=="string"?Za(n):n;je(b==="/"||((G=I.pathname)==null?void 0:G.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${I.pathname}" was given in the \`location\` prop.`),C=I}else C=T;let _=C.pathname||"/",k=_;if(b!=="/"){let I=b.replace(/^\//,"").split("/");k="/"+_.replace(/^\//,"").split("/").slice(I.length).join("/")}let j=!f&&i&&i.matches&&i.matches.length>0?i.matches:l0(r,{pathname:k});un(S||j!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),un(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=R1(j&&j.map(I=>Object.assign({},I,{params:Object.assign({},h,I.params),pathname:jn([b,u.encodeLocation?u.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?b:jn([b,u.encodeLocation?u.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),d,i,l);return n&&L?M.createElement(vs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},L):L}function w1(){let r=M1(),n=m1(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:f},"ErrorBoundary")," or"," ",M.createElement("code",{style:f},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},n),i?M.createElement("pre",{style:u},i):null,d)}var T1=M.createElement(w1,null),x1=class extends M.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?M.createElement(fn.Provider,{value:this.props.routeContext},M.createElement(gd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function A1({routeContext:r,match:n,children:i}){let l=M.useContext(Ja);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(fn.Provider,{value:r},i)}function R1(r,n=[],i=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(n.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let u=r,f=i==null?void 0:i.errors;if(f!=null){let h=u.findIndex(m=>m.route.id&&(f==null?void 0:f[m.route.id])!==void 0);je(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,g=-1;if(i)for(let h=0;h<u.length;h++){let m=u[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(g=h),m.route.id){let{loaderData:b,errors:S}=i,T=m.route.loader&&!b.hasOwnProperty(m.route.id)&&(!S||S[m.route.id]===void 0);if(m.route.lazy||T){d=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((h,m,b)=>{let S,T=!1,C=null,_=null;i&&(S=f&&m.route.id?f[m.route.id]:void 0,C=m.route.errorElement||T1,d&&(g<0&&b===0?(y0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,_=null):g===b&&(T=!0,_=m.route.hydrateFallbackElement||null)));let k=n.concat(u.slice(0,b+1)),j=()=>{let L;return S?L=C:T?L=_:m.route.Component?L=M.createElement(m.route.Component,null):m.route.element?L=m.route.element:L=h,M.createElement(A1,{match:m,routeContext:{outlet:h,matches:k,isDataRoute:i!=null},children:L})};return i&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?M.createElement(x1,{location:i.location,revalidation:i.revalidation,component:C,error:S,children:j(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):j()},null)}function yd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C1(r){let n=M.useContext(Ja);return je(n,yd(r)),n}function O1(r){let n=M.useContext(Ro);return je(n,yd(r)),n}function D1(r){let n=M.useContext(fn);return je(n,yd(r)),n}function vd(r){let n=D1(r),i=n.matches[n.matches.length-1];return je(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function N1(){return vd("useRouteId")}function M1(){var l;let r=M.useContext(gd),n=O1("useRouteError"),i=vd("useRouteError");return r!==void 0?r:(l=n.errors)==null?void 0:l[i]}function U1(){let{router:r}=C1("useNavigate"),n=vd("useNavigate"),i=M.useRef(!1);return m0(()=>{i.current=!0}),M.useCallback(async(u,f={})=>{un(i.current,p0),i.current&&(typeof u=="number"?r.navigate(u):await r.navigate(u,{fromRouteId:n,...f}))},[r,n])}var Fg={};function y0(r,n,i){!n&&!Fg[r]&&(Fg[r]=!0,un(!1,i))}M.memo(j1);function j1({routes:r,future:n,state:i}){return g0(r,void 0,i,n)}function Hr(r){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function L1({basename:r="/",children:n=null,location:i,navigationType:l="POP",navigator:u,static:f=!1}){je(!bs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),g=M.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof i=="string"&&(i=Za(i));let{pathname:h="/",search:m="",hash:b="",state:S=null,key:T="default"}=i,C=M.useMemo(()=>{let _=kn(h,d);return _==null?null:{location:{pathname:_,search:m,hash:b,state:S,key:T},navigationType:l}},[d,h,m,b,S,T,l]);return un(C!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:M.createElement(cn.Provider,{value:g},M.createElement(vs.Provider,{children:n,value:C}))}function k1({children:r,location:n}){return _1(Yf(r),n)}function Yf(r,n=[]){let i=[];return M.Children.forEach(r,(l,u)=>{if(!M.isValidElement(l))return;let f=[...n,u];if(l.type===M.Fragment){i.push.apply(i,Yf(l.props.children,f));return}je(l.type===Hr,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Yf(l.props.children,f)),i.push(d)}),i}var Jl="get",Wl="application/x-www-form-urlencoded";function Oo(r){return r!=null&&typeof r.tagName=="string"}function z1(r){return Oo(r)&&r.tagName.toLowerCase()==="button"}function I1(r){return Oo(r)&&r.tagName.toLowerCase()==="form"}function B1(r){return Oo(r)&&r.tagName.toLowerCase()==="input"}function H1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function P1(r,n){return r.button===0&&(!n||n==="_self")&&!H1(r)}var Yl=null;function q1(){if(Yl===null)try{new FormData(document.createElement("form"),0),Yl=!1}catch{Yl=!0}return Yl}var V1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hf(r){return r!=null&&!V1.has(r)?(un(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wl}"`),null):r}function G1(r,n){let i,l,u,f,d;if(I1(r)){let g=r.getAttribute("action");l=g?kn(g,n):null,i=r.getAttribute("method")||Jl,u=hf(r.getAttribute("enctype"))||Wl,f=new FormData(r)}else if(z1(r)||B1(r)&&(r.type==="submit"||r.type==="image")){let g=r.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||g.getAttribute("action");if(l=h?kn(h,n):null,i=r.getAttribute("formmethod")||g.getAttribute("method")||Jl,u=hf(r.getAttribute("formenctype"))||hf(g.getAttribute("enctype"))||Wl,f=new FormData(g,r),!q1()){let{name:m,type:b,value:S}=r;if(b==="image"){let T=m?`${m}.`:"";f.append(`${T}x`,"0"),f.append(`${T}y`,"0")}else m&&f.append(m,S)}}else{if(Oo(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Jl,l=null,u=Wl,d=r}return f&&u==="text/plain"&&(d=f,f=void 0),{action:l,method:i.toLowerCase(),encType:u,formData:f,body:d}}function bd(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}async function Y1(r,n){if(r.id in n)return n[r.id];try{let i=await import(r.module);return n[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function X1(r,n,i){let l=await Promise.all(r.map(async u=>{let f=n.routes[u.route.id];if(f){let d=await Y1(f,i);return d.links?d.links():[]}return[]}));return Z1(l.flat(1).filter($1).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Kg(r,n,i,l,u,f){let d=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,g=(h,m)=>{var b;return i[m].pathname!==h.pathname||((b=i[m].route.path)==null?void 0:b.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return f==="assets"?n.filter((h,m)=>d(h,m)||g(h,m)):f==="data"?n.filter((h,m)=>{var S;let b=l.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(d(h,m)||g(h,m))return!0;if(h.route.shouldRevalidate){let T=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function F1(r,n,{includeHydrateFallback:i}={}){return K1(r.map(l=>{let u=n.routes[l.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),i&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function K1(r){return[...new Set(r)]}function Q1(r){let n={},i=Object.keys(r).sort();for(let l of i)n[l]=r[l];return n}function Z1(r,n){let i=new Set;return new Set(n),r.reduce((l,u)=>{let f=JSON.stringify(Q1(u));return i.has(f)||(i.add(f),l.push({key:f,link:u})),l},[])}function J1(r,n){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":n&&kn(i.pathname,n)==="/"?i.pathname=`${n.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function v0(){let r=M.useContext(Ja);return bd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function W1(){let r=M.useContext(Ro);return bd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Sd=M.createContext(void 0);Sd.displayName="FrameworkContext";function b0(){let r=M.useContext(Sd);return bd(r,"You must render this element inside a <HydratedRouter> element"),r}function e_(r,n){let i=M.useContext(Sd),[l,u]=M.useState(!1),[f,d]=M.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:m,onMouseLeave:b,onTouchStart:S}=n,T=M.useRef(null);M.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let k=L=>{L.forEach(G=>{d(G.isIntersecting)})},j=new IntersectionObserver(k,{threshold:.5});return T.current&&j.observe(T.current),()=>{j.disconnect()}}},[r]),M.useEffect(()=>{if(l){let k=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(k)}}},[l]);let C=()=>{u(!0)},_=()=>{u(!1),d(!1)};return i?r!=="intent"?[f,T,{}]:[f,T,{onFocus:rs(g,C),onBlur:rs(h,_),onMouseEnter:rs(m,C),onMouseLeave:rs(b,_),onTouchStart:rs(S,C)}]:[!1,T,{}]}function rs(r,n){return i=>{r&&r(i),i.defaultPrevented||n(i)}}function t_({page:r,...n}){let{router:i}=v0(),l=M.useMemo(()=>l0(i.routes,r,i.basename),[i.routes,r,i.basename]);return l?M.createElement(r_,{page:r,matches:l,...n}):null}function n_(r){let{manifest:n,routeModules:i}=b0(),[l,u]=M.useState([]);return M.useEffect(()=>{let f=!1;return X1(r,n,i).then(d=>{f||u(d)}),()=>{f=!0}},[r,n,i]),l}function r_({page:r,matches:n,...i}){let l=Qr(),{manifest:u,routeModules:f}=b0(),{basename:d}=v0(),{loaderData:g,matches:h}=W1(),m=M.useMemo(()=>Kg(r,n,h,u,l,"data"),[r,n,h,u,l]),b=M.useMemo(()=>Kg(r,n,h,u,l,"assets"),[r,n,h,u,l]),S=M.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let _=new Set,k=!1;if(n.forEach(L=>{var I;let G=u.routes[L.route.id];!G||!G.hasLoader||(!m.some(Q=>Q.route.id===L.route.id)&&L.route.id in g&&((I=f[L.route.id])!=null&&I.shouldRevalidate)||G.hasClientLoader?k=!0:_.add(L.route.id))}),_.size===0)return[];let j=J1(r,d);return k&&_.size>0&&j.searchParams.set("_routes",n.filter(L=>_.has(L.route.id)).map(L=>L.route.id).join(",")),[j.pathname+j.search]},[d,g,l,u,m,n,r,f]),T=M.useMemo(()=>F1(b,u),[b,u]),C=n_(b);return M.createElement(M.Fragment,null,S.map(_=>M.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...i})),T.map(_=>M.createElement("link",{key:_,rel:"modulepreload",href:_,...i})),C.map(({key:_,link:k})=>M.createElement("link",{key:_,...k})))}function a_(...r){return n=>{r.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var S0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S0&&(window.__reactRouterVersion="7.5.0")}catch{}function i_({basename:r,children:n,window:i}){let l=M.useRef();l.current==null&&(l.current=XE({window:i,v5Compat:!0}));let u=l.current,[f,d]=M.useState({action:u.action,location:u.location}),g=M.useCallback(h=>{M.startTransition(()=>d(h))},[d]);return M.useLayoutEffect(()=>u.listen(g),[u,g]),M.createElement(L1,{basename:r,children:n,location:f.location,navigationType:f.action,navigator:u})}var E0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dn=M.forwardRef(function({onClick:n,discover:i="render",prefetch:l="none",relative:u,reloadDocument:f,replace:d,state:g,target:h,to:m,preventScrollReset:b,viewTransition:S,...T},C){let{basename:_}=M.useContext(cn),k=typeof m=="string"&&E0.test(m),j,L=!1;if(typeof m=="string"&&k&&(j=m,S0))try{let ge=new URL(window.location.href),Ve=m.startsWith("//")?new URL(ge.protocol+m):new URL(m),ct=kn(Ve.pathname,_);Ve.origin===ge.origin&&ct!=null?m=ct+Ve.search+Ve.hash:L=!0}catch{un(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=b1(m,{relative:u}),[I,Q,Y]=e_(l,T),Z=u_(m,{replace:d,state:g,target:h,preventScrollReset:b,relative:u,viewTransition:S});function X(ge){n&&n(ge),ge.defaultPrevented||Z(ge)}let ye=M.createElement("a",{...T,...Y,href:j||G,onClick:L||f?n:X,ref:a_(C,Q),target:h,"data-discover":!k&&i==="render"?"true":void 0});return I&&!k?M.createElement(M.Fragment,null,ye,M.createElement(t_,{page:G})):ye});dn.displayName="Link";var s_=M.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:l="",end:u=!1,style:f,to:d,viewTransition:g,children:h,...m},b){let S=Ss(d,{relative:m.relative}),T=Qr(),C=M.useContext(Ro),{navigator:_,basename:k}=M.useContext(cn),j=C!=null&&p_(S)&&g===!0,L=_.encodeLocation?_.encodeLocation(S).pathname:S.pathname,G=T.pathname,I=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(G=G.toLowerCase(),I=I?I.toLowerCase():null,L=L.toLowerCase()),I&&k&&(I=kn(I,k)||I);const Q=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Y=G===L||!u&&G.startsWith(L)&&G.charAt(Q)==="/",Z=I!=null&&(I===L||!u&&I.startsWith(L)&&I.charAt(L.length)==="/"),X={isActive:Y,isPending:Z,isTransitioning:j},ye=Y?n:void 0,ge;typeof l=="function"?ge=l(X):ge=[l,Y?"active":null,Z?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof f=="function"?f(X):f;return M.createElement(dn,{...m,"aria-current":ye,className:ge,ref:b,style:Ve,to:d,viewTransition:g},typeof h=="function"?h(X):h)});s_.displayName="NavLink";var l_=M.forwardRef(({discover:r="render",fetcherKey:n,navigate:i,reloadDocument:l,replace:u,state:f,method:d=Jl,action:g,onSubmit:h,relative:m,preventScrollReset:b,viewTransition:S,...T},C)=>{let _=d_(),k=h_(g,{relative:m}),j=d.toLowerCase()==="get"?"get":"post",L=typeof g=="string"&&E0.test(g),G=I=>{if(h&&h(I),I.defaultPrevented)return;I.preventDefault();let Q=I.nativeEvent.submitter,Y=(Q==null?void 0:Q.getAttribute("formmethod"))||d;_(Q||I.currentTarget,{fetcherKey:n,method:Y,navigate:i,replace:u,state:f,relative:m,preventScrollReset:b,viewTransition:S})};return M.createElement("form",{ref:C,method:j,action:k,onSubmit:l?h:G,...T,"data-discover":!L&&r==="render"?"true":void 0})});l_.displayName="Form";function o_(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _0(r){let n=M.useContext(Ja);return je(n,o_(r)),n}function u_(r,{target:n,replace:i,state:l,preventScrollReset:u,relative:f,viewTransition:d}={}){let g=Co(),h=Qr(),m=Ss(r,{relative:f});return M.useCallback(b=>{if(P1(b,n)){b.preventDefault();let S=i!==void 0?i:fs(h)===fs(m);g(r,{replace:S,state:l,preventScrollReset:u,relative:f,viewTransition:d})}},[h,g,m,i,l,n,r,u,f,d])}var c_=0,f_=()=>`__${String(++c_)}__`;function d_(){let{router:r}=_0("useSubmit"),{basename:n}=M.useContext(cn),i=N1();return M.useCallback(async(l,u={})=>{let{action:f,method:d,encType:g,formData:h,body:m}=G1(l,n);if(u.navigate===!1){let b=u.fetcherKey||f_();await r.fetch(b,i,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||g,flushSync:u.flushSync})}else await r.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,n,i])}function h_(r,{relative:n}={}){let{basename:i}=M.useContext(cn),l=M.useContext(fn);je(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),f={...Ss(r||".",{relative:n})},d=Qr();if(r==null){f.search=d.search;let g=new URLSearchParams(f.search),h=g.getAll("index");if(h.some(b=>b==="")){g.delete("index"),h.filter(S=>S).forEach(S=>g.append("index",S));let b=g.toString();f.search=b?`?${b}`:""}}return(!r||r===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:jn([i,f.pathname])),fs(f)}function p_(r,n={}){let i=M.useContext(h0);je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=_0("useViewTransitionState"),u=Ss(r,{relative:n.relative});if(!i.isTransitioning)return!1;let f=kn(i.currentLocation.pathname,l)||i.currentLocation.pathname,d=kn(i.nextLocation.pathname,l)||i.nextLocation.pathname;return ho(u.pathname,d)!=null||ho(u.pathname,f)!=null}new TextEncoder;var gt=function(){return gt=Object.assign||function(n){for(var i,l=1,u=arguments.length;l<u;l++){i=arguments[l];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(n[f]=i[f])}return n},gt.apply(this,arguments)};function po(r,n,i){if(i||arguments.length===2)for(var l=0,u=n.length,f;l<u;l++)(f||!(l in n))&&(f||(f=Array.prototype.slice.call(n,0,l)),f[l]=n[l]);return r.concat(f||Array.prototype.slice.call(n))}var Ne="-ms-",os="-moz-",_e="-webkit-",w0="comm",Do="rule",Ed="decl",m_="@import",T0="@keyframes",g_="@layer",x0=Math.abs,_d=String.fromCharCode,$f=Object.assign;function y_(r,n){return We(r,0)^45?(((n<<2^We(r,0))<<2^We(r,1))<<2^We(r,2))<<2^We(r,3):0}function A0(r){return r.trim()}function Nn(r,n){return(r=n.exec(r))?r[0]:r}function ue(r,n,i){return r.replace(n,i)}function eo(r,n,i){return r.indexOf(n,i)}function We(r,n){return r.charCodeAt(n)|0}function Ga(r,n,i){return r.slice(n,i)}function sn(r){return r.length}function R0(r){return r.length}function is(r,n){return n.push(r),r}function v_(r,n){return r.map(n).join("")}function Qg(r,n){return r.filter(function(i){return!Nn(i,n)})}var No=1,Ya=1,C0=0,qt=0,qe=0,Wa="";function Mo(r,n,i,l,u,f,d,g){return{value:r,root:n,parent:i,type:l,props:u,children:f,line:No,column:Ya,length:d,return:"",siblings:g}}function fr(r,n){return $f(Mo("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},n)}function za(r){for(;r.root;)r=fr(r.root,{children:[r]});is(r,r.siblings)}function b_(){return qe}function S_(){return qe=qt>0?We(Wa,--qt):0,Ya--,qe===10&&(Ya=1,No--),qe}function Kt(){return qe=qt<C0?We(Wa,qt++):0,Ya++,qe===10&&(Ya=1,No++),qe}function Gr(){return We(Wa,qt)}function to(){return qt}function Uo(r,n){return Ga(Wa,r,n)}function Xf(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E_(r){return No=Ya=1,C0=sn(Wa=r),qt=0,[]}function __(r){return Wa="",r}function pf(r){return A0(Uo(qt-1,Ff(r===91?r+2:r===40?r+1:r)))}function w_(r){for(;(qe=Gr())&&qe<33;)Kt();return Xf(r)>2||Xf(qe)>3?"":" "}function T_(r,n){for(;--n&&Kt()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Uo(r,to()+(n<6&&Gr()==32&&Kt()==32))}function Ff(r){for(;Kt();)switch(qe){case r:return qt;case 34:case 39:r!==34&&r!==39&&Ff(qe);break;case 40:r===41&&Ff(r);break;case 92:Kt();break}return qt}function x_(r,n){for(;Kt()&&r+qe!==57;)if(r+qe===84&&Gr()===47)break;return"/*"+Uo(n,qt-1)+"*"+_d(r===47?r:Kt())}function A_(r){for(;!Xf(Gr());)Kt();return Uo(r,qt)}function R_(r){return __(no("",null,null,null,[""],r=E_(r),0,[0],r))}function no(r,n,i,l,u,f,d,g,h){for(var m=0,b=0,S=d,T=0,C=0,_=0,k=1,j=1,L=1,G=0,I="",Q=u,Y=f,Z=l,X=I;j;)switch(_=G,G=Kt()){case 40:if(_!=108&&We(X,S-1)==58){eo(X+=ue(pf(G),"&","&\f"),"&\f",x0(m?g[m-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:X+=pf(G);break;case 9:case 10:case 13:case 32:X+=w_(_);break;case 92:X+=T_(to()-1,7);continue;case 47:switch(Gr()){case 42:case 47:is(C_(x_(Kt(),to()),n,i,h),h);break;default:X+="/"}break;case 123*k:g[m++]=sn(X)*L;case 125*k:case 59:case 0:switch(G){case 0:case 125:j=0;case 59+b:L==-1&&(X=ue(X,/\f/g,"")),C>0&&sn(X)-S&&is(C>32?Jg(X+";",l,i,S-1,h):Jg(ue(X," ","")+";",l,i,S-2,h),h);break;case 59:X+=";";default:if(is(Z=Zg(X,n,i,m,b,u,g,I,Q=[],Y=[],S,f),f),G===123)if(b===0)no(X,n,Z,Z,Q,f,S,g,Y);else switch(T===99&&We(X,3)===110?100:T){case 100:case 108:case 109:case 115:no(r,Z,Z,l&&is(Zg(r,Z,Z,0,0,u,g,I,u,Q=[],S,Y),Y),u,Y,S,g,l?Q:Y);break;default:no(X,Z,Z,Z,[""],Y,0,g,Y)}}m=b=C=0,k=L=1,I=X="",S=d;break;case 58:S=1+sn(X),C=_;default:if(k<1){if(G==123)--k;else if(G==125&&k++==0&&S_()==125)continue}switch(X+=_d(G),G*k){case 38:L=b>0?1:(X+="\f",-1);break;case 44:g[m++]=(sn(X)-1)*L,L=1;break;case 64:Gr()===45&&(X+=pf(Kt())),T=Gr(),b=S=sn(I=X+=A_(to())),G++;break;case 45:_===45&&sn(X)==2&&(k=0)}}return f}function Zg(r,n,i,l,u,f,d,g,h,m,b,S){for(var T=u-1,C=u===0?f:[""],_=R0(C),k=0,j=0,L=0;k<l;++k)for(var G=0,I=Ga(r,T+1,T=x0(j=d[k])),Q=r;G<_;++G)(Q=A0(j>0?C[G]+" "+I:ue(I,/&\f/g,C[G])))&&(h[L++]=Q);return Mo(r,n,i,u===0?Do:g,h,m,b,S)}function C_(r,n,i,l){return Mo(r,n,i,w0,_d(b_()),Ga(r,2,-2),0,l)}function Jg(r,n,i,l,u){return Mo(r,n,i,Ed,Ga(r,0,l),Ga(r,l+1,-1),l,u)}function O0(r,n,i){switch(y_(r,n)){case 5103:return _e+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+r+r;case 4789:return os+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+r+os+r+Ne+r+r;case 5936:switch(We(r,n+11)){case 114:return _e+r+Ne+ue(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return _e+r+Ne+ue(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return _e+r+Ne+ue(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return _e+r+Ne+r+r;case 6165:return _e+r+Ne+"flex-"+r+r;case 5187:return _e+r+ue(r,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Ne+"flex-$1$2")+r;case 5443:return _e+r+Ne+"flex-item-"+ue(r,/flex-|-self/g,"")+(Nn(r,/flex-|baseline/)?"":Ne+"grid-row-"+ue(r,/flex-|-self/g,""))+r;case 4675:return _e+r+Ne+"flex-line-pack"+ue(r,/align-content|flex-|-self/g,"")+r;case 5548:return _e+r+Ne+ue(r,"shrink","negative")+r;case 5292:return _e+r+Ne+ue(r,"basis","preferred-size")+r;case 6060:return _e+"box-"+ue(r,"-grow","")+_e+r+Ne+ue(r,"grow","positive")+r;case 4554:return _e+ue(r,/([^-])(transform)/g,"$1"+_e+"$2")+r;case 6187:return ue(ue(ue(r,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),r,"")+r;case 5495:case 3959:return ue(r,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return ue(ue(r,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+r+r;case 4200:if(!Nn(r,/flex-|baseline/))return Ne+"grid-column-align"+Ga(r,n)+r;break;case 2592:case 3360:return Ne+ue(r,"template-","")+r;case 4384:case 3616:return i&&i.some(function(l,u){return n=u,Nn(l.props,/grid-\w+-end/)})?~eo(r+(i=i[n].value),"span",0)?r:Ne+ue(r,"-start","")+r+Ne+"grid-row-span:"+(~eo(i,"span",0)?Nn(i,/\d+/):+Nn(i,/\d+/)-+Nn(r,/\d+/))+";":Ne+ue(r,"-start","")+r;case 4896:case 4128:return i&&i.some(function(l){return Nn(l.props,/grid-\w+-start/)})?r:Ne+ue(ue(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ue(r,/(.+)-inline(.+)/,_e+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(r)-1-n>6)switch(We(r,n+1)){case 109:if(We(r,n+4)!==45)break;case 102:return ue(r,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+os+(We(r,n+3)==108?"$3":"$2-$3"))+r;case 115:return~eo(r,"stretch",0)?O0(ue(r,"stretch","fill-available"),n,i)+r:r}break;case 5152:case 5920:return ue(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,f,d,g,h,m){return Ne+u+":"+f+m+(d?Ne+u+"-span:"+(g?h:+h-+f)+m:"")+r});case 4949:if(We(r,n+6)===121)return ue(r,":",":"+_e)+r;break;case 6444:switch(We(r,We(r,14)===45?18:11)){case 120:return ue(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(We(r,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Ne+"$2box$3")+r;case 100:return ue(r,":",":"+Ne)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(r,"scroll-","scroll-snap-")+r}return r}function mo(r,n){for(var i="",l=0;l<r.length;l++)i+=n(r[l],l,r,n)||"";return i}function O_(r,n,i,l){switch(r.type){case g_:if(r.children.length)break;case m_:case Ed:return r.return=r.return||r.value;case w0:return"";case T0:return r.return=r.value+"{"+mo(r.children,l)+"}";case Do:if(!sn(r.value=r.props.join(",")))return""}return sn(i=mo(r.children,l))?r.return=r.value+"{"+i+"}":""}function D_(r){var n=R0(r);return function(i,l,u,f){for(var d="",g=0;g<n;g++)d+=r[g](i,l,u,f)||"";return d}}function N_(r){return function(n){n.root||(n=n.return)&&r(n)}}function M_(r,n,i,l){if(r.length>-1&&!r.return)switch(r.type){case Ed:r.return=O0(r.value,r.length,i);return;case T0:return mo([fr(r,{value:ue(r.value,"@","@"+_e)})],l);case Do:if(r.length)return v_(i=r.props,function(u){switch(Nn(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":za(fr(r,{props:[ue(u,/:(read-\w+)/,":"+os+"$1")]})),za(fr(r,{props:[u]})),$f(r,{props:Qg(i,l)});break;case"::placeholder":za(fr(r,{props:[ue(u,/:(plac\w+)/,":"+_e+"input-$1")]})),za(fr(r,{props:[ue(u,/:(plac\w+)/,":"+os+"$1")]})),za(fr(r,{props:[ue(u,/:(plac\w+)/,Ne+"input-$1")]})),za(fr(r,{props:[u]})),$f(r,{props:Qg(i,l)});break}return""})}}var U_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},$a=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",D0="active",N0="data-styled-version",jo="6.1.17",wd=`/*!sc*/
`,go=typeof window<"u"&&"HTMLElement"in window,j_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),Lo=Object.freeze([]),Xa=Object.freeze({});function L_(r,n,i){return i===void 0&&(i=Xa),r.theme!==i.theme&&r.theme||n||i.theme}var M0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),k_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,z_=/(^-|-$)/g;function Wg(r){return r.replace(k_,"-").replace(z_,"")}var I_=/(a)(d)/gi,$l=52,ey=function(r){return String.fromCharCode(r+(r>25?39:97))};function Kf(r){var n,i="";for(n=Math.abs(r);n>$l;n=n/$l|0)i=ey(n%$l)+i;return(ey(n%$l)+i).replace(I_,"$1-$2")}var mf,U0=5381,Ia=function(r,n){for(var i=n.length;i;)r=33*r^n.charCodeAt(--i);return r},j0=function(r){return Ia(U0,r)};function B_(r){return Kf(j0(r)>>>0)}function H_(r){return r.displayName||r.name||"Component"}function gf(r){return typeof r=="string"&&!0}var L0=typeof Symbol=="function"&&Symbol.for,k0=L0?Symbol.for("react.memo"):60115,P_=L0?Symbol.for("react.forward_ref"):60112,q_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G_=((mf={})[P_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mf[k0]=z0,mf);function ty(r){return("type"in(n=r)&&n.type.$$typeof)===k0?z0:"$$typeof"in r?G_[r.$$typeof]:q_;var n}var Y_=Object.defineProperty,$_=Object.getOwnPropertyNames,ny=Object.getOwnPropertySymbols,X_=Object.getOwnPropertyDescriptor,F_=Object.getPrototypeOf,ry=Object.prototype;function I0(r,n,i){if(typeof n!="string"){if(ry){var l=F_(n);l&&l!==ry&&I0(r,l,i)}var u=$_(n);ny&&(u=u.concat(ny(n)));for(var f=ty(r),d=ty(n),g=0;g<u.length;++g){var h=u[g];if(!(h in V_||i&&i[h]||d&&h in d||f&&h in f)){var m=X_(n,h);try{Y_(r,h,m)}catch{}}}}return r}function Fa(r){return typeof r=="function"}function Td(r){return typeof r=="object"&&"styledComponentId"in r}function qr(r,n){return r&&n?"".concat(r," ").concat(n):r||n||""}function ay(r,n){if(r.length===0)return"";for(var i=r[0],l=1;l<r.length;l++)i+=r[l];return i}function ds(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Qf(r,n,i){if(i===void 0&&(i=!1),!i&&!ds(r)&&!Array.isArray(r))return n;if(Array.isArray(n))for(var l=0;l<n.length;l++)r[l]=Qf(r[l],n[l]);else if(ds(n))for(var l in n)r[l]=Qf(r[l],n[l]);return r}function xd(r,n){Object.defineProperty(r,"toString",{value:n})}function Es(r){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var K_=function(){function r(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return r.prototype.indexOfGroup=function(n){for(var i=0,l=0;l<n;l++)i+=this.groupSizes[l];return i},r.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,f=u;n>=f;)if((f<<=1)<0)throw Es(16,"".concat(n));this.groupSizes=new Uint32Array(f),this.groupSizes.set(l),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var g=this.indexOfGroup(n+1),h=(d=0,i.length);d<h;d++)this.tag.insertRule(g,i[d])&&(this.groupSizes[n]++,g++)},r.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],l=this.indexOfGroup(n),u=l+i;this.groupSizes[n]=0;for(var f=l;f<u;f++)this.tag.deleteRule(l)}},r.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var l=this.groupSizes[n],u=this.indexOfGroup(n),f=u+l,d=u;d<f;d++)i+="".concat(this.tag.getRule(d)).concat(wd);return i},r}(),ro=new Map,yo=new Map,ao=1,Xl=function(r){if(ro.has(r))return ro.get(r);for(;yo.has(ao);)ao++;var n=ao++;return ro.set(r,n),yo.set(n,r),n},Q_=function(r,n){ao=n+1,ro.set(r,n),yo.set(n,r)},Z_="style[".concat($a,"][").concat(N0,'="').concat(jo,'"]'),J_=new RegExp("^".concat($a,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),W_=function(r,n,i){for(var l,u=i.split(","),f=0,d=u.length;f<d;f++)(l=u[f])&&r.registerName(n,l)},ew=function(r,n){for(var i,l=((i=n.textContent)!==null&&i!==void 0?i:"").split(wd),u=[],f=0,d=l.length;f<d;f++){var g=l[f].trim();if(g){var h=g.match(J_);if(h){var m=0|parseInt(h[1],10),b=h[2];m!==0&&(Q_(b,m),W_(r,b,h[3]),r.getTag().insertRules(m,u)),u.length=0}else u.push(g)}}},iy=function(r){for(var n=document.querySelectorAll(Z_),i=0,l=n.length;i<l;i++){var u=n[i];u&&u.getAttribute($a)!==D0&&(ew(r,u),u.parentNode&&u.parentNode.removeChild(u))}};function tw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var B0=function(r){var n=document.head,i=r||n,l=document.createElement("style"),u=function(g){var h=Array.from(g.querySelectorAll("style[".concat($a,"]")));return h[h.length-1]}(i),f=u!==void 0?u.nextSibling:null;l.setAttribute($a,D0),l.setAttribute(N0,jo);var d=tw();return d&&l.setAttribute("nonce",d),i.insertBefore(l,f),l},nw=function(){function r(n){this.element=B0(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,u=0,f=l.length;u<f;u++){var d=l[u];if(d.ownerNode===i)return d}throw Es(17)}(this.element),this.length=0}return r.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},r.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},r}(),rw=function(){function r(n){this.element=B0(n),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[n]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},r.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},r}(),aw=function(){function r(n){this.rules=[],this.length=0}return r.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},r.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},r.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},r}(),sy=go,iw={isServer:!go,useCSSOMInjection:!j_},H0=function(){function r(n,i,l){n===void 0&&(n=Xa),i===void 0&&(i={});var u=this;this.options=gt(gt({},iw),n),this.gs=i,this.names=new Map(l),this.server=!!n.isServer,!this.server&&go&&sy&&(sy=!1,iy(this)),xd(this,function(){return function(f){for(var d=f.getTag(),g=d.length,h="",m=function(S){var T=function(L){return yo.get(L)}(S);if(T===void 0)return"continue";var C=f.names.get(T),_=d.getGroup(S);if(C===void 0||!C.size||_.length===0)return"continue";var k="".concat($a,".g").concat(S,'[id="').concat(T,'"]'),j="";C!==void 0&&C.forEach(function(L){L.length>0&&(j+="".concat(L,","))}),h+="".concat(_).concat(k,'{content:"').concat(j,'"}').concat(wd)},b=0;b<g;b++)m(b);return h}(u)})}return r.registerId=function(n){return Xl(n)},r.prototype.rehydrate=function(){!this.server&&go&&iy(this)},r.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new r(gt(gt({},this.options),n),this.gs,i&&this.names||void 0)},r.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var l=i.useCSSOMInjection,u=i.target;return i.isServer?new aw(u):l?new nw(u):new rw(u)}(this.options),new K_(n)));var n},r.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},r.prototype.registerName=function(n,i){if(Xl(n),this.names.has(n))this.names.get(n).add(i);else{var l=new Set;l.add(i),this.names.set(n,l)}},r.prototype.insertRules=function(n,i,l){this.registerName(n,i),this.getTag().insertRules(Xl(n),l)},r.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},r.prototype.clearRules=function(n){this.getTag().clearGroup(Xl(n)),this.clearNames(n)},r.prototype.clearTag=function(){this.tag=void 0},r}(),sw=/&/g,lw=/^\s*\/\/.*$/gm;function P0(r,n){return r.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(l){return"".concat(n," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=P0(i.children,n)),i})}function ow(r){var n,i,l,u=Xa,f=u.options,d=f===void 0?Xa:f,g=u.plugins,h=g===void 0?Lo:g,m=function(T,C,_){return _.startsWith(i)&&_.endsWith(i)&&_.replaceAll(i,"").length>0?".".concat(n):T},b=h.slice();b.push(function(T){T.type===Do&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(sw,i).replace(l,m))}),d.prefix&&b.push(M_),b.push(O_);var S=function(T,C,_,k){C===void 0&&(C=""),_===void 0&&(_=""),k===void 0&&(k="&"),n=k,i=C,l=new RegExp("\\".concat(i,"\\b"),"g");var j=T.replace(lw,""),L=R_(_||C?"".concat(_," ").concat(C," { ").concat(j," }"):j);d.namespace&&(L=P0(L,d.namespace));var G=[];return mo(L,D_(b.concat(N_(function(I){return G.push(I)})))),G};return S.hash=h.length?h.reduce(function(T,C){return C.name||Es(15),Ia(T,C.name)},U0).toString():"",S}var uw=new H0,Zf=ow(),q0=cs.createContext({shouldForwardProp:void 0,styleSheet:uw,stylis:Zf});q0.Consumer;cs.createContext(void 0);function ly(){return M.useContext(q0)}var cw=function(){function r(n,i){var l=this;this.inject=function(u,f){f===void 0&&(f=Zf);var d=l.name+f.hash;u.hasNameForId(l.id,d)||u.insertRules(l.id,d,f(l.rules,d,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,xd(this,function(){throw Es(12,String(l.name))})}return r.prototype.getName=function(n){return n===void 0&&(n=Zf),this.name+n.hash},r}(),fw=function(r){return r>="A"&&r<="Z"};function oy(r){for(var n="",i=0;i<r.length;i++){var l=r[i];if(i===1&&l==="-"&&r[0]==="-")return r;fw(l)?n+="-"+l.toLowerCase():n+=l}return n.startsWith("ms-")?"-"+n:n}var V0=function(r){return r==null||r===!1||r===""},G0=function(r){var n,i,l=[];for(var u in r){var f=r[u];r.hasOwnProperty(u)&&!V0(f)&&(Array.isArray(f)&&f.isCss||Fa(f)?l.push("".concat(oy(u),":"),f,";"):ds(f)?l.push.apply(l,po(po(["".concat(u," {")],G0(f),!1),["}"],!1)):l.push("".concat(oy(u),": ").concat((n=u,(i=f)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in U_||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function Yr(r,n,i,l){if(V0(r))return[];if(Td(r))return[".".concat(r.styledComponentId)];if(Fa(r)){if(!Fa(f=r)||f.prototype&&f.prototype.isReactComponent||!n)return[r];var u=r(n);return Yr(u,n,i,l)}var f;return r instanceof cw?i?(r.inject(i,l),[r.getName(l)]):[r]:ds(r)?G0(r):Array.isArray(r)?Array.prototype.concat.apply(Lo,r.map(function(d){return Yr(d,n,i,l)})):[r.toString()]}function dw(r){for(var n=0;n<r.length;n+=1){var i=r[n];if(Fa(i)&&!Td(i))return!1}return!0}var hw=j0(jo),pw=function(){function r(n,i,l){this.rules=n,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&dw(n),this.componentId=i,this.baseHash=Ia(hw,i),this.baseStyle=l,H0.registerId(i)}return r.prototype.generateAndInjectStyles=function(n,i,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))u=qr(u,this.staticRulesId);else{var f=ay(Yr(this.rules,n,i,l)),d=Kf(Ia(this.baseHash,f)>>>0);if(!i.hasNameForId(this.componentId,d)){var g=l(f,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,g)}u=qr(u,d),this.staticRulesId=d}else{for(var h=Ia(this.baseHash,l.hash),m="",b=0;b<this.rules.length;b++){var S=this.rules[b];if(typeof S=="string")m+=S;else if(S){var T=ay(Yr(S,n,i,l));h=Ia(h,T+b),m+=T}}if(m){var C=Kf(h>>>0);i.hasNameForId(this.componentId,C)||i.insertRules(this.componentId,C,l(m,".".concat(C),void 0,this.componentId)),u=qr(u,C)}}return u},r}(),Y0=cs.createContext(void 0);Y0.Consumer;var yf={};function mw(r,n,i){var l=Td(r),u=r,f=!gf(r),d=n.attrs,g=d===void 0?Lo:d,h=n.componentId,m=h===void 0?function(Q,Y){var Z=typeof Q!="string"?"sc":Wg(Q);yf[Z]=(yf[Z]||0)+1;var X="".concat(Z,"-").concat(B_(jo+Z+yf[Z]));return Y?"".concat(Y,"-").concat(X):X}(n.displayName,n.parentComponentId):h,b=n.displayName,S=b===void 0?function(Q){return gf(Q)?"styled.".concat(Q):"Styled(".concat(H_(Q),")")}(r):b,T=n.displayName&&n.componentId?"".concat(Wg(n.displayName),"-").concat(n.componentId):n.componentId||m,C=l&&u.attrs?u.attrs.concat(g).filter(Boolean):g,_=n.shouldForwardProp;if(l&&u.shouldForwardProp){var k=u.shouldForwardProp;if(n.shouldForwardProp){var j=n.shouldForwardProp;_=function(Q,Y){return k(Q,Y)&&j(Q,Y)}}else _=k}var L=new pw(i,T,l?u.componentStyle:void 0);function G(Q,Y){return function(Z,X,ye){var ge=Z.attrs,Ve=Z.componentStyle,ct=Z.defaultProps,$e=Z.foldedComponentIds,hn=Z.styledComponentId,pn=Z.target,Xe=cs.useContext(Y0),B=ly(),F=Z.shouldForwardProp||B.shouldForwardProp,te=L_(X,Xe,ct)||Xa,de=function(he,re,Fe){for(var Ee,rt=gt(gt({},re),{className:void 0,theme:Fe}),Er=0;Er<he.length;Er+=1){var mn=Fa(Ee=he[Er])?Ee(rt):Ee;for(var Ot in mn)rt[Ot]=Ot==="className"?qr(rt[Ot],mn[Ot]):Ot==="style"?gt(gt({},rt[Ot]),mn[Ot]):mn[Ot]}return re.className&&(rt.className=qr(rt.className,re.className)),rt}(ge,X,te),w=de.as||pn,V={};for(var $ in de)de[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&de.theme===te||($==="forwardedAs"?V.as=de.forwardedAs:F&&!F($,w)||(V[$]=de[$]));var K=function(he,re){var Fe=ly(),Ee=he.generateAndInjectStyles(re,Fe.styleSheet,Fe.stylis);return Ee}(Ve,de),ee=qr($e,hn);return K&&(ee+=" "+K),de.className&&(ee+=" "+de.className),V[gf(w)&&!M0.has(w)?"class":"className"]=ee,ye&&(V.ref=ye),M.createElement(w,V)}(I,Q,Y)}G.displayName=S;var I=cs.forwardRef(G);return I.attrs=C,I.componentStyle=L,I.displayName=S,I.shouldForwardProp=_,I.foldedComponentIds=l?qr(u.foldedComponentIds,u.styledComponentId):"",I.styledComponentId=T,I.target=l?u.target:r,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=l?function(Y){for(var Z=[],X=1;X<arguments.length;X++)Z[X-1]=arguments[X];for(var ye=0,ge=Z;ye<ge.length;ye++)Qf(Y,ge[ye],!0);return Y}({},u.defaultProps,Q):Q}}),xd(I,function(){return".".concat(I.styledComponentId)}),f&&I0(I,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function uy(r,n){for(var i=[r[0]],l=0,u=n.length;l<u;l+=1)i.push(n[l],r[l+1]);return i}var cy=function(r){return Object.assign(r,{isCss:!0})};function gw(r){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(Fa(r)||ds(r))return cy(Yr(uy(Lo,po([r],n,!0))));var l=r;return n.length===0&&l.length===1&&typeof l[0]=="string"?Yr(l):cy(Yr(uy(l,n)))}function Jf(r,n,i){if(i===void 0&&(i=Xa),!n)throw Es(1,n);var l=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return r(n,i,gw.apply(void 0,po([u],f,!1)))};return l.attrs=function(u){return Jf(r,n,gt(gt({},i),{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return Jf(r,n,gt(gt({},i),u))},l}var $0=function(r){return Jf(mw,r)},N=$0;M0.forEach(function(r){N[r]=$0(r)});function X0(r,n){return function(){return r.apply(n,arguments)}}const{toString:yw}=Object.prototype,{getPrototypeOf:Ad}=Object,ko=(r=>n=>{const i=yw.call(n);return r[i]||(r[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Zt=r=>(r=r.toLowerCase(),n=>ko(n)===r),zo=r=>n=>typeof n===r,{isArray:ei}=Array,hs=zo("undefined");function vw(r){return r!==null&&!hs(r)&&r.constructor!==null&&!hs(r.constructor)&&Ct(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const F0=Zt("ArrayBuffer");function bw(r){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(r):n=r&&r.buffer&&F0(r.buffer),n}const Sw=zo("string"),Ct=zo("function"),K0=zo("number"),Io=r=>r!==null&&typeof r=="object",Ew=r=>r===!0||r===!1,io=r=>{if(ko(r)!=="object")return!1;const n=Ad(r);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},_w=Zt("Date"),ww=Zt("File"),Tw=Zt("Blob"),xw=Zt("FileList"),Aw=r=>Io(r)&&Ct(r.pipe),Rw=r=>{let n;return r&&(typeof FormData=="function"&&r instanceof FormData||Ct(r.append)&&((n=ko(r))==="formdata"||n==="object"&&Ct(r.toString)&&r.toString()==="[object FormData]"))},Cw=Zt("URLSearchParams"),[Ow,Dw,Nw,Mw]=["ReadableStream","Request","Response","Headers"].map(Zt),Uw=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _s(r,n,{allOwnKeys:i=!1}={}){if(r===null||typeof r>"u")return;let l,u;if(typeof r!="object"&&(r=[r]),ei(r))for(l=0,u=r.length;l<u;l++)n.call(null,r[l],l,r);else{const f=i?Object.getOwnPropertyNames(r):Object.keys(r),d=f.length;let g;for(l=0;l<d;l++)g=f[l],n.call(null,r[g],g,r)}}function Q0(r,n){n=n.toLowerCase();const i=Object.keys(r);let l=i.length,u;for(;l-- >0;)if(u=i[l],n===u.toLowerCase())return u;return null}const Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Z0=r=>!hs(r)&&r!==Vr;function Wf(){const{caseless:r}=Z0(this)&&this||{},n={},i=(l,u)=>{const f=r&&Q0(n,u)||u;io(n[f])&&io(l)?n[f]=Wf(n[f],l):io(l)?n[f]=Wf({},l):ei(l)?n[f]=l.slice():n[f]=l};for(let l=0,u=arguments.length;l<u;l++)arguments[l]&&_s(arguments[l],i);return n}const jw=(r,n,i,{allOwnKeys:l}={})=>(_s(n,(u,f)=>{i&&Ct(u)?r[f]=X0(u,i):r[f]=u},{allOwnKeys:l}),r),Lw=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),kw=(r,n,i,l)=>{r.prototype=Object.create(n.prototype,l),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:n.prototype}),i&&Object.assign(r.prototype,i)},zw=(r,n,i,l)=>{let u,f,d;const g={};if(n=n||{},r==null)return n;do{for(u=Object.getOwnPropertyNames(r),f=u.length;f-- >0;)d=u[f],(!l||l(d,r,n))&&!g[d]&&(n[d]=r[d],g[d]=!0);r=i!==!1&&Ad(r)}while(r&&(!i||i(r,n))&&r!==Object.prototype);return n},Iw=(r,n,i)=>{r=String(r),(i===void 0||i>r.length)&&(i=r.length),i-=n.length;const l=r.indexOf(n,i);return l!==-1&&l===i},Bw=r=>{if(!r)return null;if(ei(r))return r;let n=r.length;if(!K0(n))return null;const i=new Array(n);for(;n-- >0;)i[n]=r[n];return i},Hw=(r=>n=>r&&n instanceof r)(typeof Uint8Array<"u"&&Ad(Uint8Array)),Pw=(r,n)=>{const l=(r&&r[Symbol.iterator]).call(r);let u;for(;(u=l.next())&&!u.done;){const f=u.value;n.call(r,f[0],f[1])}},qw=(r,n)=>{let i;const l=[];for(;(i=r.exec(n))!==null;)l.push(i);return l},Vw=Zt("HTMLFormElement"),Gw=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,u){return l.toUpperCase()+u}),fy=(({hasOwnProperty:r})=>(n,i)=>r.call(n,i))(Object.prototype),Yw=Zt("RegExp"),J0=(r,n)=>{const i=Object.getOwnPropertyDescriptors(r),l={};_s(i,(u,f)=>{let d;(d=n(u,f,r))!==!1&&(l[f]=d||u)}),Object.defineProperties(r,l)},$w=r=>{J0(r,(n,i)=>{if(Ct(r)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=r[i];if(Ct(l)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},Xw=(r,n)=>{const i={},l=u=>{u.forEach(f=>{i[f]=!0})};return ei(r)?l(r):l(String(r).split(n)),i},Fw=()=>{},Kw=(r,n)=>r!=null&&Number.isFinite(r=+r)?r:n;function Qw(r){return!!(r&&Ct(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const Zw=r=>{const n=new Array(10),i=(l,u)=>{if(Io(l)){if(n.indexOf(l)>=0)return;if(!("toJSON"in l)){n[u]=l;const f=ei(l)?[]:{};return _s(l,(d,g)=>{const h=i(d,u+1);!hs(h)&&(f[g]=h)}),n[u]=void 0,f}}return l};return i(r,0)},Jw=Zt("AsyncFunction"),Ww=r=>r&&(Io(r)||Ct(r))&&Ct(r.then)&&Ct(r.catch),W0=((r,n)=>r?setImmediate:n?((i,l)=>(Vr.addEventListener("message",({source:u,data:f})=>{u===Vr&&f===i&&l.length&&l.shift()()},!1),u=>{l.push(u),Vr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Ct(Vr.postMessage)),eT=typeof queueMicrotask<"u"?queueMicrotask.bind(Vr):typeof process<"u"&&process.nextTick||W0,z={isArray:ei,isArrayBuffer:F0,isBuffer:vw,isFormData:Rw,isArrayBufferView:bw,isString:Sw,isNumber:K0,isBoolean:Ew,isObject:Io,isPlainObject:io,isReadableStream:Ow,isRequest:Dw,isResponse:Nw,isHeaders:Mw,isUndefined:hs,isDate:_w,isFile:ww,isBlob:Tw,isRegExp:Yw,isFunction:Ct,isStream:Aw,isURLSearchParams:Cw,isTypedArray:Hw,isFileList:xw,forEach:_s,merge:Wf,extend:jw,trim:Uw,stripBOM:Lw,inherits:kw,toFlatObject:zw,kindOf:ko,kindOfTest:Zt,endsWith:Iw,toArray:Bw,forEachEntry:Pw,matchAll:qw,isHTMLForm:Vw,hasOwnProperty:fy,hasOwnProp:fy,reduceDescriptors:J0,freezeMethods:$w,toObjectSet:Xw,toCamelCase:Gw,noop:Fw,toFiniteNumber:Kw,findKey:Q0,global:Vr,isContextDefined:Z0,isSpecCompliantForm:Qw,toJSONObject:Zw,isAsyncFn:Jw,isThenable:Ww,setImmediate:W0,asap:eT};function le(r,n,i,l,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",n&&(this.code=n),i&&(this.config=i),l&&(this.request=l),u&&(this.response=u,this.status=u.status?u.status:null)}z.inherits(le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}});const ev=le.prototype,tv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{tv[r]={value:r}});Object.defineProperties(le,tv);Object.defineProperty(ev,"isAxiosError",{value:!0});le.from=(r,n,i,l,u,f)=>{const d=Object.create(ev);return z.toFlatObject(r,d,function(h){return h!==Error.prototype},g=>g!=="isAxiosError"),le.call(d,r.message,n,i,l,u),d.cause=r,d.name=r.name,f&&Object.assign(d,f),d};const tT=null;function ed(r){return z.isPlainObject(r)||z.isArray(r)}function nv(r){return z.endsWith(r,"[]")?r.slice(0,-2):r}function dy(r,n,i){return r?r.concat(n).map(function(u,f){return u=nv(u),!i&&f?"["+u+"]":u}).join(i?".":""):n}function nT(r){return z.isArray(r)&&!r.some(ed)}const rT=z.toFlatObject(z,{},null,function(n){return/^is[A-Z]/.test(n)});function Bo(r,n,i){if(!z.isObject(r))throw new TypeError("target must be an object");n=n||new FormData,i=z.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,j){return!z.isUndefined(j[k])});const l=i.metaTokens,u=i.visitor||b,f=i.dots,d=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(n);if(!z.isFunction(u))throw new TypeError("visitor must be a function");function m(_){if(_===null)return"";if(z.isDate(_))return _.toISOString();if(!h&&z.isBlob(_))throw new le("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(_)||z.isTypedArray(_)?h&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function b(_,k,j){let L=_;if(_&&!j&&typeof _=="object"){if(z.endsWith(k,"{}"))k=l?k:k.slice(0,-2),_=JSON.stringify(_);else if(z.isArray(_)&&nT(_)||(z.isFileList(_)||z.endsWith(k,"[]"))&&(L=z.toArray(_)))return k=nv(k),L.forEach(function(I,Q){!(z.isUndefined(I)||I===null)&&n.append(d===!0?dy([k],Q,f):d===null?k:k+"[]",m(I))}),!1}return ed(_)?!0:(n.append(dy(j,k,f),m(_)),!1)}const S=[],T=Object.assign(rT,{defaultVisitor:b,convertValue:m,isVisitable:ed});function C(_,k){if(!z.isUndefined(_)){if(S.indexOf(_)!==-1)throw Error("Circular reference detected in "+k.join("."));S.push(_),z.forEach(_,function(L,G){(!(z.isUndefined(L)||L===null)&&u.call(n,L,z.isString(G)?G.trim():G,k,T))===!0&&C(L,k?k.concat(G):[G])}),S.pop()}}if(!z.isObject(r))throw new TypeError("data must be an object");return C(r),n}function hy(r){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(l){return n[l]})}function Rd(r,n){this._pairs=[],r&&Bo(r,this,n)}const rv=Rd.prototype;rv.append=function(n,i){this._pairs.push([n,i])};rv.toString=function(n){const i=n?function(l){return n.call(this,l,hy)}:hy;return this._pairs.map(function(u){return i(u[0])+"="+i(u[1])},"").join("&")};function aT(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function av(r,n,i){if(!n)return r;const l=i&&i.encode||aT;z.isFunction(i)&&(i={serialize:i});const u=i&&i.serialize;let f;if(u?f=u(n,i):f=z.isURLSearchParams(n)?n.toString():new Rd(n,i).toString(l),f){const d=r.indexOf("#");d!==-1&&(r=r.slice(0,d)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class py{constructor(){this.handlers=[]}use(n,i,l){return this.handlers.push({fulfilled:n,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){z.forEach(this.handlers,function(l){l!==null&&n(l)})}}const iv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iT=typeof URLSearchParams<"u"?URLSearchParams:Rd,sT=typeof FormData<"u"?FormData:null,lT=typeof Blob<"u"?Blob:null,oT={isBrowser:!0,classes:{URLSearchParams:iT,FormData:sT,Blob:lT},protocols:["http","https","file","blob","url","data"]},Cd=typeof window<"u"&&typeof document<"u",td=typeof navigator=="object"&&navigator||void 0,uT=Cd&&(!td||["ReactNative","NativeScript","NS"].indexOf(td.product)<0),cT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fT=Cd&&window.location.href||"http://localhost",dT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cd,hasStandardBrowserEnv:uT,hasStandardBrowserWebWorkerEnv:cT,navigator:td,origin:fT},Symbol.toStringTag,{value:"Module"})),lt={...dT,...oT};function hT(r,n){return Bo(r,new lt.classes.URLSearchParams,Object.assign({visitor:function(i,l,u,f){return lt.isNode&&z.isBuffer(i)?(this.append(l,i.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},n))}function pT(r){return z.matchAll(/\w+|\[(\w*)]/g,r).map(n=>n[0]==="[]"?"":n[1]||n[0])}function mT(r){const n={},i=Object.keys(r);let l;const u=i.length;let f;for(l=0;l<u;l++)f=i[l],n[f]=r[f];return n}function sv(r){function n(i,l,u,f){let d=i[f++];if(d==="__proto__")return!0;const g=Number.isFinite(+d),h=f>=i.length;return d=!d&&z.isArray(u)?u.length:d,h?(z.hasOwnProp(u,d)?u[d]=[u[d],l]:u[d]=l,!g):((!u[d]||!z.isObject(u[d]))&&(u[d]=[]),n(i,l,u[d],f)&&z.isArray(u[d])&&(u[d]=mT(u[d])),!g)}if(z.isFormData(r)&&z.isFunction(r.entries)){const i={};return z.forEachEntry(r,(l,u)=>{n(pT(l),u,i,0)}),i}return null}function gT(r,n,i){if(z.isString(r))try{return(n||JSON.parse)(r),z.trim(r)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(r)}const ws={transitional:iv,adapter:["xhr","http","fetch"],transformRequest:[function(n,i){const l=i.getContentType()||"",u=l.indexOf("application/json")>-1,f=z.isObject(n);if(f&&z.isHTMLForm(n)&&(n=new FormData(n)),z.isFormData(n))return u?JSON.stringify(sv(n)):n;if(z.isArrayBuffer(n)||z.isBuffer(n)||z.isStream(n)||z.isFile(n)||z.isBlob(n)||z.isReadableStream(n))return n;if(z.isArrayBufferView(n))return n.buffer;if(z.isURLSearchParams(n))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let g;if(f){if(l.indexOf("application/x-www-form-urlencoded")>-1)return hT(n,this.formSerializer).toString();if((g=z.isFileList(n))||l.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Bo(g?{"files[]":n}:n,h&&new h,this.formSerializer)}}return f||u?(i.setContentType("application/json",!1),gT(n)):n}],transformResponse:[function(n){const i=this.transitional||ws.transitional,l=i&&i.forcedJSONParsing,u=this.responseType==="json";if(z.isResponse(n)||z.isReadableStream(n))return n;if(n&&z.isString(n)&&(l&&!this.responseType||u)){const d=!(i&&i.silentJSONParsing)&&u;try{return JSON.parse(n)}catch(g){if(d)throw g.name==="SyntaxError"?le.from(g,le.ERR_BAD_RESPONSE,this,null,this.response):g}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lt.classes.FormData,Blob:lt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],r=>{ws.headers[r]={}});const yT=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vT=r=>{const n={};let i,l,u;return r&&r.split(`
`).forEach(function(d){u=d.indexOf(":"),i=d.substring(0,u).trim().toLowerCase(),l=d.substring(u+1).trim(),!(!i||n[i]&&yT[i])&&(i==="set-cookie"?n[i]?n[i].push(l):n[i]=[l]:n[i]=n[i]?n[i]+", "+l:l)}),n},my=Symbol("internals");function as(r){return r&&String(r).trim().toLowerCase()}function so(r){return r===!1||r==null?r:z.isArray(r)?r.map(so):String(r)}function bT(r){const n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(r);)n[l[1]]=l[2];return n}const ST=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function vf(r,n,i,l,u){if(z.isFunction(l))return l.call(this,n,i);if(u&&(n=i),!!z.isString(n)){if(z.isString(l))return n.indexOf(l)!==-1;if(z.isRegExp(l))return l.test(n)}}function ET(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,i,l)=>i.toUpperCase()+l)}function _T(r,n){const i=z.toCamelCase(" "+n);["get","set","has"].forEach(l=>{Object.defineProperty(r,l+i,{value:function(u,f,d){return this[l].call(this,n,u,f,d)},configurable:!0})})}let yt=class{constructor(n){n&&this.set(n)}set(n,i,l){const u=this;function f(g,h,m){const b=as(h);if(!b)throw new Error("header name must be a non-empty string");const S=z.findKey(u,b);(!S||u[S]===void 0||m===!0||m===void 0&&u[S]!==!1)&&(u[S||h]=so(g))}const d=(g,h)=>z.forEach(g,(m,b)=>f(m,b,h));if(z.isPlainObject(n)||n instanceof this.constructor)d(n,i);else if(z.isString(n)&&(n=n.trim())&&!ST(n))d(vT(n),i);else if(z.isHeaders(n))for(const[g,h]of n.entries())f(h,g,l);else n!=null&&f(i,n,l);return this}get(n,i){if(n=as(n),n){const l=z.findKey(this,n);if(l){const u=this[l];if(!i)return u;if(i===!0)return bT(u);if(z.isFunction(i))return i.call(this,u,l);if(z.isRegExp(i))return i.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,i){if(n=as(n),n){const l=z.findKey(this,n);return!!(l&&this[l]!==void 0&&(!i||vf(this,this[l],l,i)))}return!1}delete(n,i){const l=this;let u=!1;function f(d){if(d=as(d),d){const g=z.findKey(l,d);g&&(!i||vf(l,l[g],g,i))&&(delete l[g],u=!0)}}return z.isArray(n)?n.forEach(f):f(n),u}clear(n){const i=Object.keys(this);let l=i.length,u=!1;for(;l--;){const f=i[l];(!n||vf(this,this[f],f,n,!0))&&(delete this[f],u=!0)}return u}normalize(n){const i=this,l={};return z.forEach(this,(u,f)=>{const d=z.findKey(l,f);if(d){i[d]=so(u),delete i[f];return}const g=n?ET(f):String(f).trim();g!==f&&delete i[f],i[g]=so(u),l[g]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const i=Object.create(null);return z.forEach(this,(l,u)=>{l!=null&&l!==!1&&(i[u]=n&&z.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,i])=>n+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...i){const l=new this(n);return i.forEach(u=>l.set(u)),l}static accessor(n){const l=(this[my]=this[my]={accessors:{}}).accessors,u=this.prototype;function f(d){const g=as(d);l[g]||(_T(u,d),l[g]=!0)}return z.isArray(n)?n.forEach(f):f(n),this}};yt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(yt.prototype,({value:r},n)=>{let i=n[0].toUpperCase()+n.slice(1);return{get:()=>r,set(l){this[i]=l}}});z.freezeMethods(yt);function bf(r,n){const i=this||ws,l=n||i,u=yt.from(l.headers);let f=l.data;return z.forEach(r,function(g){f=g.call(i,f,u.normalize(),n?n.status:void 0)}),u.normalize(),f}function lv(r){return!!(r&&r.__CANCEL__)}function ti(r,n,i){le.call(this,r??"canceled",le.ERR_CANCELED,n,i),this.name="CanceledError"}z.inherits(ti,le,{__CANCEL__:!0});function ov(r,n,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?r(i):n(new le("Request failed with status code "+i.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function wT(r){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return n&&n[1]||""}function TT(r,n){r=r||10;const i=new Array(r),l=new Array(r);let u=0,f=0,d;return n=n!==void 0?n:1e3,function(h){const m=Date.now(),b=l[f];d||(d=m),i[u]=h,l[u]=m;let S=f,T=0;for(;S!==u;)T+=i[S++],S=S%r;if(u=(u+1)%r,u===f&&(f=(f+1)%r),m-d<n)return;const C=b&&m-b;return C?Math.round(T*1e3/C):void 0}}function xT(r,n){let i=0,l=1e3/n,u,f;const d=(m,b=Date.now())=>{i=b,u=null,f&&(clearTimeout(f),f=null),r.apply(null,m)};return[(...m)=>{const b=Date.now(),S=b-i;S>=l?d(m,b):(u=m,f||(f=setTimeout(()=>{f=null,d(u)},l-S)))},()=>u&&d(u)]}const vo=(r,n,i=3)=>{let l=0;const u=TT(50,250);return xT(f=>{const d=f.loaded,g=f.lengthComputable?f.total:void 0,h=d-l,m=u(h),b=d<=g;l=d;const S={loaded:d,total:g,progress:g?d/g:void 0,bytes:h,rate:m||void 0,estimated:m&&g&&b?(g-d)/m:void 0,event:f,lengthComputable:g!=null,[n?"download":"upload"]:!0};r(S)},i)},gy=(r,n)=>{const i=r!=null;return[l=>n[0]({lengthComputable:i,total:r,loaded:l}),n[1]]},yy=r=>(...n)=>z.asap(()=>r(...n)),AT=lt.hasStandardBrowserEnv?((r,n)=>i=>(i=new URL(i,lt.origin),r.protocol===i.protocol&&r.host===i.host&&(n||r.port===i.port)))(new URL(lt.origin),lt.navigator&&/(msie|trident)/i.test(lt.navigator.userAgent)):()=>!0,RT=lt.hasStandardBrowserEnv?{write(r,n,i,l,u,f){const d=[r+"="+encodeURIComponent(n)];z.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),z.isString(l)&&d.push("path="+l),z.isString(u)&&d.push("domain="+u),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function CT(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function OT(r,n){return n?r.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):r}function uv(r,n,i){let l=!CT(n);return r&&(l||i==!1)?OT(r,n):n}const vy=r=>r instanceof yt?{...r}:r;function Xr(r,n){n=n||{};const i={};function l(m,b,S,T){return z.isPlainObject(m)&&z.isPlainObject(b)?z.merge.call({caseless:T},m,b):z.isPlainObject(b)?z.merge({},b):z.isArray(b)?b.slice():b}function u(m,b,S,T){if(z.isUndefined(b)){if(!z.isUndefined(m))return l(void 0,m,S,T)}else return l(m,b,S,T)}function f(m,b){if(!z.isUndefined(b))return l(void 0,b)}function d(m,b){if(z.isUndefined(b)){if(!z.isUndefined(m))return l(void 0,m)}else return l(void 0,b)}function g(m,b,S){if(S in n)return l(m,b);if(S in r)return l(void 0,m)}const h={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:g,headers:(m,b,S)=>u(vy(m),vy(b),S,!0)};return z.forEach(Object.keys(Object.assign({},r,n)),function(b){const S=h[b]||u,T=S(r[b],n[b],b);z.isUndefined(T)&&S!==g||(i[b]=T)}),i}const cv=r=>{const n=Xr({},r);let{data:i,withXSRFToken:l,xsrfHeaderName:u,xsrfCookieName:f,headers:d,auth:g}=n;n.headers=d=yt.from(d),n.url=av(uv(n.baseURL,n.url,n.allowAbsoluteUrls),r.params,r.paramsSerializer),g&&d.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let h;if(z.isFormData(i)){if(lt.hasStandardBrowserEnv||lt.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((h=d.getContentType())!==!1){const[m,...b]=h?h.split(";").map(S=>S.trim()).filter(Boolean):[];d.setContentType([m||"multipart/form-data",...b].join("; "))}}if(lt.hasStandardBrowserEnv&&(l&&z.isFunction(l)&&(l=l(n)),l||l!==!1&&AT(n.url))){const m=u&&f&&RT.read(f);m&&d.set(u,m)}return n},DT=typeof XMLHttpRequest<"u",NT=DT&&function(r){return new Promise(function(i,l){const u=cv(r);let f=u.data;const d=yt.from(u.headers).normalize();let{responseType:g,onUploadProgress:h,onDownloadProgress:m}=u,b,S,T,C,_;function k(){C&&C(),_&&_(),u.cancelToken&&u.cancelToken.unsubscribe(b),u.signal&&u.signal.removeEventListener("abort",b)}let j=new XMLHttpRequest;j.open(u.method.toUpperCase(),u.url,!0),j.timeout=u.timeout;function L(){if(!j)return;const I=yt.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),Y={data:!g||g==="text"||g==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:I,config:r,request:j};ov(function(X){i(X),k()},function(X){l(X),k()},Y),j=null}"onloadend"in j?j.onloadend=L:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(L)},j.onabort=function(){j&&(l(new le("Request aborted",le.ECONNABORTED,r,j)),j=null)},j.onerror=function(){l(new le("Network Error",le.ERR_NETWORK,r,j)),j=null},j.ontimeout=function(){let Q=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const Y=u.transitional||iv;u.timeoutErrorMessage&&(Q=u.timeoutErrorMessage),l(new le(Q,Y.clarifyTimeoutError?le.ETIMEDOUT:le.ECONNABORTED,r,j)),j=null},f===void 0&&d.setContentType(null),"setRequestHeader"in j&&z.forEach(d.toJSON(),function(Q,Y){j.setRequestHeader(Y,Q)}),z.isUndefined(u.withCredentials)||(j.withCredentials=!!u.withCredentials),g&&g!=="json"&&(j.responseType=u.responseType),m&&([T,_]=vo(m,!0),j.addEventListener("progress",T)),h&&j.upload&&([S,C]=vo(h),j.upload.addEventListener("progress",S),j.upload.addEventListener("loadend",C)),(u.cancelToken||u.signal)&&(b=I=>{j&&(l(!I||I.type?new ti(null,r,j):I),j.abort(),j=null)},u.cancelToken&&u.cancelToken.subscribe(b),u.signal&&(u.signal.aborted?b():u.signal.addEventListener("abort",b)));const G=wT(u.url);if(G&&lt.protocols.indexOf(G)===-1){l(new le("Unsupported protocol "+G+":",le.ERR_BAD_REQUEST,r));return}j.send(f||null)})},MT=(r,n)=>{const{length:i}=r=r?r.filter(Boolean):[];if(n||i){let l=new AbortController,u;const f=function(m){if(!u){u=!0,g();const b=m instanceof Error?m:this.reason;l.abort(b instanceof le?b:new ti(b instanceof Error?b.message:b))}};let d=n&&setTimeout(()=>{d=null,f(new le(`timeout ${n} of ms exceeded`,le.ETIMEDOUT))},n);const g=()=>{r&&(d&&clearTimeout(d),d=null,r.forEach(m=>{m.unsubscribe?m.unsubscribe(f):m.removeEventListener("abort",f)}),r=null)};r.forEach(m=>m.addEventListener("abort",f));const{signal:h}=l;return h.unsubscribe=()=>z.asap(g),h}},UT=function*(r,n){let i=r.byteLength;if(i<n){yield r;return}let l=0,u;for(;l<i;)u=l+n,yield r.slice(l,u),l=u},jT=async function*(r,n){for await(const i of LT(r))yield*UT(i,n)},LT=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const n=r.getReader();try{for(;;){const{done:i,value:l}=await n.read();if(i)break;yield l}}finally{await n.cancel()}},by=(r,n,i,l)=>{const u=jT(r,n);let f=0,d,g=h=>{d||(d=!0,l&&l(h))};return new ReadableStream({async pull(h){try{const{done:m,value:b}=await u.next();if(m){g(),h.close();return}let S=b.byteLength;if(i){let T=f+=S;i(T)}h.enqueue(new Uint8Array(b))}catch(m){throw g(m),m}},cancel(h){return g(h),u.return()}},{highWaterMark:2})},Ho=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",fv=Ho&&typeof ReadableStream=="function",kT=Ho&&(typeof TextEncoder=="function"?(r=>n=>r.encode(n))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),dv=(r,...n)=>{try{return!!r(...n)}catch{return!1}},zT=fv&&dv(()=>{let r=!1;const n=new Request(lt.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!n}),Sy=64*1024,nd=fv&&dv(()=>z.isReadableStream(new Response("").body)),bo={stream:nd&&(r=>r.body)};Ho&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!bo[n]&&(bo[n]=z.isFunction(r[n])?i=>i[n]():(i,l)=>{throw new le(`Response type '${n}' is not supported`,le.ERR_NOT_SUPPORT,l)})})})(new Response);const IT=async r=>{if(r==null)return 0;if(z.isBlob(r))return r.size;if(z.isSpecCompliantForm(r))return(await new Request(lt.origin,{method:"POST",body:r}).arrayBuffer()).byteLength;if(z.isArrayBufferView(r)||z.isArrayBuffer(r))return r.byteLength;if(z.isURLSearchParams(r)&&(r=r+""),z.isString(r))return(await kT(r)).byteLength},BT=async(r,n)=>{const i=z.toFiniteNumber(r.getContentLength());return i??IT(n)},HT=Ho&&(async r=>{let{url:n,method:i,data:l,signal:u,cancelToken:f,timeout:d,onDownloadProgress:g,onUploadProgress:h,responseType:m,headers:b,withCredentials:S="same-origin",fetchOptions:T}=cv(r);m=m?(m+"").toLowerCase():"text";let C=MT([u,f&&f.toAbortSignal()],d),_;const k=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let j;try{if(h&&zT&&i!=="get"&&i!=="head"&&(j=await BT(b,l))!==0){let Y=new Request(n,{method:"POST",body:l,duplex:"half"}),Z;if(z.isFormData(l)&&(Z=Y.headers.get("content-type"))&&b.setContentType(Z),Y.body){const[X,ye]=gy(j,vo(yy(h)));l=by(Y.body,Sy,X,ye)}}z.isString(S)||(S=S?"include":"omit");const L="credentials"in Request.prototype;_=new Request(n,{...T,signal:C,method:i.toUpperCase(),headers:b.normalize().toJSON(),body:l,duplex:"half",credentials:L?S:void 0});let G=await fetch(_);const I=nd&&(m==="stream"||m==="response");if(nd&&(g||I&&k)){const Y={};["status","statusText","headers"].forEach(ge=>{Y[ge]=G[ge]});const Z=z.toFiniteNumber(G.headers.get("content-length")),[X,ye]=g&&gy(Z,vo(yy(g),!0))||[];G=new Response(by(G.body,Sy,X,()=>{ye&&ye(),k&&k()}),Y)}m=m||"text";let Q=await bo[z.findKey(bo,m)||"text"](G,r);return!I&&k&&k(),await new Promise((Y,Z)=>{ov(Y,Z,{data:Q,headers:yt.from(G.headers),status:G.status,statusText:G.statusText,config:r,request:_})})}catch(L){throw k&&k(),L&&L.name==="TypeError"&&/fetch/i.test(L.message)?Object.assign(new le("Network Error",le.ERR_NETWORK,r,_),{cause:L.cause||L}):le.from(L,L&&L.code,r,_)}}),rd={http:tT,xhr:NT,fetch:HT};z.forEach(rd,(r,n)=>{if(r){try{Object.defineProperty(r,"name",{value:n})}catch{}Object.defineProperty(r,"adapterName",{value:n})}});const Ey=r=>`- ${r}`,PT=r=>z.isFunction(r)||r===null||r===!1,hv={getAdapter:r=>{r=z.isArray(r)?r:[r];const{length:n}=r;let i,l;const u={};for(let f=0;f<n;f++){i=r[f];let d;if(l=i,!PT(i)&&(l=rd[(d=String(i)).toLowerCase()],l===void 0))throw new le(`Unknown adapter '${d}'`);if(l)break;u[d||"#"+f]=l}if(!l){const f=Object.entries(u).map(([g,h])=>`adapter ${g} `+(h===!1?"is not supported by the environment":"is not available in the build"));let d=n?f.length>1?`since :
`+f.map(Ey).join(`
`):" "+Ey(f[0]):"as no adapter specified";throw new le("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return l},adapters:rd};function Sf(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ti(null,r)}function _y(r){return Sf(r),r.headers=yt.from(r.headers),r.data=bf.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),hv.getAdapter(r.adapter||ws.adapter)(r).then(function(l){return Sf(r),l.data=bf.call(r,r.transformResponse,l),l.headers=yt.from(l.headers),l},function(l){return lv(l)||(Sf(r),l&&l.response&&(l.response.data=bf.call(r,r.transformResponse,l.response),l.response.headers=yt.from(l.response.headers))),Promise.reject(l)})}const pv="1.8.4",Po={};["object","boolean","number","function","string","symbol"].forEach((r,n)=>{Po[r]=function(l){return typeof l===r||"a"+(n<1?"n ":" ")+r}});const wy={};Po.transitional=function(n,i,l){function u(f,d){return"[Axios v"+pv+"] Transitional option '"+f+"'"+d+(l?". "+l:"")}return(f,d,g)=>{if(n===!1)throw new le(u(d," has been removed"+(i?" in "+i:"")),le.ERR_DEPRECATED);return i&&!wy[d]&&(wy[d]=!0,console.warn(u(d," has been deprecated since v"+i+" and will be removed in the near future"))),n?n(f,d,g):!0}};Po.spelling=function(n){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${n}`),!0)};function qT(r,n,i){if(typeof r!="object")throw new le("options must be an object",le.ERR_BAD_OPTION_VALUE);const l=Object.keys(r);let u=l.length;for(;u-- >0;){const f=l[u],d=n[f];if(d){const g=r[f],h=g===void 0||d(g,f,r);if(h!==!0)throw new le("option "+f+" must be "+h,le.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new le("Unknown option "+f,le.ERR_BAD_OPTION)}}const lo={assertOptions:qT,validators:Po},an=lo.validators;let $r=class{constructor(n){this.defaults=n,this.interceptors={request:new py,response:new py}}async request(n,i){try{return await this._request(n,i)}catch(l){if(l instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const f=u.stack?u.stack.replace(/^.+\n/,""):"";try{l.stack?f&&!String(l.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+f):l.stack=f}catch{}}throw l}}_request(n,i){typeof n=="string"?(i=i||{},i.url=n):i=n||{},i=Xr(this.defaults,i);const{transitional:l,paramsSerializer:u,headers:f}=i;l!==void 0&&lo.assertOptions(l,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),u!=null&&(z.isFunction(u)?i.paramsSerializer={serialize:u}:lo.assertOptions(u,{encode:an.function,serialize:an.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),lo.assertOptions(i,{baseUrl:an.spelling("baseURL"),withXsrfToken:an.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let d=f&&z.merge(f.common,f[i.method]);f&&z.forEach(["delete","get","head","post","put","patch","common"],_=>{delete f[_]}),i.headers=yt.concat(d,f);const g=[];let h=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(i)===!1||(h=h&&k.synchronous,g.unshift(k.fulfilled,k.rejected))});const m=[];this.interceptors.response.forEach(function(k){m.push(k.fulfilled,k.rejected)});let b,S=0,T;if(!h){const _=[_y.bind(this),void 0];for(_.unshift.apply(_,g),_.push.apply(_,m),T=_.length,b=Promise.resolve(i);S<T;)b=b.then(_[S++],_[S++]);return b}T=g.length;let C=i;for(S=0;S<T;){const _=g[S++],k=g[S++];try{C=_(C)}catch(j){k.call(this,j);break}}try{b=_y.call(this,C)}catch(_){return Promise.reject(_)}for(S=0,T=m.length;S<T;)b=b.then(m[S++],m[S++]);return b}getUri(n){n=Xr(this.defaults,n);const i=uv(n.baseURL,n.url,n.allowAbsoluteUrls);return av(i,n.params,n.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(n){$r.prototype[n]=function(i,l){return this.request(Xr(l||{},{method:n,url:i,data:(l||{}).data}))}});z.forEach(["post","put","patch"],function(n){function i(l){return function(f,d,g){return this.request(Xr(g||{},{method:n,headers:l?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}$r.prototype[n]=i(),$r.prototype[n+"Form"]=i(!0)});let VT=class mv{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(f){i=f});const l=this;this.promise.then(u=>{if(!l._listeners)return;let f=l._listeners.length;for(;f-- >0;)l._listeners[f](u);l._listeners=null}),this.promise.then=u=>{let f;const d=new Promise(g=>{l.subscribe(g),f=g}).then(u);return d.cancel=function(){l.unsubscribe(f)},d},n(function(f,d,g){l.reason||(l.reason=new ti(f,d,g),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const i=this._listeners.indexOf(n);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const n=new AbortController,i=l=>{n.abort(l)};return this.subscribe(i),n.signal.unsubscribe=()=>this.unsubscribe(i),n.signal}static source(){let n;return{token:new mv(function(u){n=u}),cancel:n}}};function GT(r){return function(i){return r.apply(null,i)}}function YT(r){return z.isObject(r)&&r.isAxiosError===!0}const ad={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ad).forEach(([r,n])=>{ad[n]=r});function gv(r){const n=new $r(r),i=X0($r.prototype.request,n);return z.extend(i,$r.prototype,n,{allOwnKeys:!0}),z.extend(i,n,null,{allOwnKeys:!0}),i.create=function(u){return gv(Xr(r,u))},i}const Be=gv(ws);Be.Axios=$r;Be.CanceledError=ti;Be.CancelToken=VT;Be.isCancel=lv;Be.VERSION=pv;Be.toFormData=Bo;Be.AxiosError=le;Be.Cancel=Be.CanceledError;Be.all=function(n){return Promise.all(n)};Be.spread=GT;Be.isAxiosError=YT;Be.mergeConfig=Xr;Be.AxiosHeaders=yt;Be.formToJSON=r=>sv(z.isHTMLForm(r)?new FormData(r):r);Be.getAdapter=hv.getAdapter;Be.HttpStatusCode=ad;Be.default=Be;const{Axios:_N,AxiosError:wN,CanceledError:TN,isCancel:xN,CancelToken:AN,VERSION:RN,all:CN,Cancel:ON,isAxiosError:DN,spread:NN,toFormData:MN,AxiosHeaders:UN,HttpStatusCode:jN,formToJSON:LN,getAdapter:kN,mergeConfig:zN}=Be,$T="https://api.escuelajs.co/api/v1",Od=Be.create({baseURL:$T,headers:{"Content-Type":"application/json"}}),Ty=async(r=20,n=0)=>{try{return(await Od.get(`/products?limit=${r}&offset=${n}`)).data}catch(i){throw console.error("Error fetching products:",i),i}},XT=async r=>{try{return(await Od.get(`/products/${r}`)).data}catch(n){throw console.error(`Error fetching product with id ${r}:`,n),n}},FT=async()=>{try{return(await Od.get("/categories")).data}catch(r){throw console.error("Error fetching categories:",r),r}},yv=M.createContext(),KT=({children:r})=>{const[n,i]=M.useState(()=>{try{const S=localStorage.getItem("cart");return S?JSON.parse(S):[]}catch(S){return console.error("Error loading cart from localStorage:",S),[]}}),[l,u]=M.useState(0),[f,d]=M.useState(0);M.useEffect(()=>{try{localStorage.setItem("cart",JSON.stringify(n));const S=n.reduce((C,_)=>C+_.quantity,0),T=n.reduce((C,_)=>C+_.price*_.quantity,0);u(S),d(T)}catch(S){console.error("Error saving cart to localStorage:",S)}},[n]);const g=(S,T=1)=>{i(C=>C.find(k=>k.id===S.id)?C.map(k=>k.id===S.id?{...k,quantity:k.quantity+T}:k):[...C,{...S,quantity:T}])},h=S=>{i(T=>T.filter(C=>C.id!==S))},m=(S,T)=>{if(T<=0){h(S);return}i(C=>C.map(_=>_.id===S?{..._,quantity:T}:_))},b=()=>{i([])};return v.jsx(yv.Provider,{value:{cart:n,totalItems:l,totalPrice:f,addToCart:g,removeFromCart:h,updateQuantity:m,clearCart:b},children:r})},qo=()=>{const r=M.useContext(yv);if(!r)throw new Error("useCart must be used within a CartProvider");return r},QT=({product:r})=>{var u;const{addToCart:n}=qo(),i=f=>{f.target.src="https://via.placeholder.com/300x300?text=No+Image"},l=f=>{f.preventDefault(),f.stopPropagation(),n(r)};return v.jsx(vv,{children:v.jsxs(dn,{to:`/product/${r.id}`,children:[v.jsxs(ZT,{children:[v.jsx(JT,{src:r.images[0],alt:r.title,onError:i}),v.jsx(WT,{onClick:l,children:"Add to Cart"})]}),v.jsxs(ex,{children:[v.jsx(tx,{children:((u=r.category)==null?void 0:u.name)||"Uncategorized"}),v.jsx(nx,{children:r.title}),v.jsxs(rx,{children:["$",r.price.toFixed(2)]})]})]})})},vv=N.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`,ZT=N.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  &:hover button {
    opacity: 1;
  }
`,JT=N.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  
  ${vv}:hover & {
    transform: scale(1.05);
  }
`,WT=N.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  
  &:hover {
    background-color: #e53935;
  }
`,ex=N.div`
  padding: 1rem;
`,tx=N.p`
  color: #777;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`,nx=N.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  // Limit to 2 lines with ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,rx=N.p`
  font-weight: 600;
  color: #ff4500;
  font-size: 1.1rem;
`,ax=({categories:r,selectedCategory:n,onCategoryChange:i})=>{const l=[{id:0,name:"All Categories"},...r||[]];return v.jsxs(ix,{children:[v.jsx(sx,{children:"Categories"}),v.jsx(lx,{children:l.map(u=>v.jsx(ox,{isSelected:n===u.id,onClick:()=>i(u.id),children:u.name},u.id))})]})},ix=N.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,sx=N.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`,lx=N.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ox=N.li`
  padding: 0.75rem 0;
  cursor: pointer;
  transition: color 0.2s;
  border-bottom: 1px solid #eee;
  font-weight: ${r=>r.isSelected?"600":"400"};
  color: ${r=>r.isSelected?"#ff4500":"#333"};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: #ff4500;
  }
`,id=()=>v.jsxs(ux,{children:[v.jsx(cx,{}),v.jsx(fx,{children:"Loading..."})]}),ux=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`,cx=N.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 69, 0, 0.1);
  border-radius: 50%;
  border-top-color: #ff4500;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,fx=N.p`
  color: #666;
  font-size: 0.9rem;
`,dx=()=>{const[r,n]=M.useState([]),[i,l]=M.useState([]),[u,f]=M.useState(null),[d,g]=M.useState(!0),[h,m]=M.useState(null);M.useEffect(()=>{(async()=>{try{g(!0);const T=await FT();l(T);const C=await Ty(20);n(C),g(!1)}catch(T){console.error("Error fetching data:",T),m("Failed to load products. Please try again later."),g(!1)}})()},[]);const b=S=>{f(S)};return M.useEffect(()=>{if(u===null)return;(async()=>{try{if(g(!0),u===0){const T=await Ty(20);n(T)}else{const T=await getProductsByCategory(u);n(T)}g(!1)}catch(T){console.error(`Error fetching products for category ${u}:`,T),m("Failed to load products for this category. Please try again later."),g(!1)}})()},[u]),d&&r.length===0?v.jsx(id,{}):h?v.jsxs(Ex,{children:[v.jsx("h2",{children:"Oops!"}),v.jsx("p",{children:h}),v.jsx("button",{onClick:()=>window.location.reload(),children:"Try Again"})]}):v.jsxs(hx,{children:[v.jsx(px,{children:v.jsxs(mx,{children:[v.jsx("h1",{children:"Welcome to ShopEasy"}),v.jsx("p",{children:"Find the best products at the best prices"})]})}),v.jsxs(gx,{children:[v.jsx(yx,{children:v.jsx(ax,{categories:i,selectedCategory:u,onCategoryChange:b})}),v.jsxs(vx,{children:[v.jsx("h2",{children:"Our Products"}),d?v.jsx(id,{}):r.length>0?v.jsx(bx,{children:r.map(S=>v.jsx(QT,{product:S},S.id))}):v.jsx(Sx,{children:"No products found in this category."})]})]})]})},hx=N.div`
  width: 100%;
`,px=N.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 2rem;
`,mx=N.div`
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
  }
`,gx=N.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,yx=N.aside`
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,vx=N.section`
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`,bx=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`,Sx=N.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
`,Ex=N.div`
  text-align: center;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    color: #e53935;
    margin-bottom: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #e53935;
    }
  }
`,_x=()=>{var L;const{id:r}=E1(),n=Co(),{addToCart:i}=qo(),[l,u]=M.useState(null),[f,d]=M.useState(!0),[g,h]=M.useState(null),[m,b]=M.useState(1),[S,T]=M.useState(0);M.useEffect(()=>{(async()=>{try{d(!0);const I=await XT(r);u(I),d(!1)}catch(I){console.error(`Error fetching product ${r}:`,I),h("Failed to load product details. Please try again later."),d(!1)}})()},[r]);const C=G=>{const I=parseInt(G.target.value);I>0&&b(I)},_=()=>{l&&i(l,m)},k=()=>{l&&(i(l,m),n("/cart"))},j=G=>{G.target.src="https://via.placeholder.com/500x500?text=No+Image"};return f?v.jsx(id,{}):g?v.jsxs(xy,{children:[v.jsx("h2",{children:"Oops!"}),v.jsx("p",{children:g}),v.jsx("button",{onClick:()=>n("/"),children:"Back to Home"})]}):l?v.jsx(wx,{children:v.jsxs(Tx,{children:[v.jsxs(xx,{children:[v.jsx(Ax,{src:l.images[S]||l.images[0],alt:l.title,onError:j}),v.jsx(Rx,{children:l.images.map((G,I)=>v.jsx(Cx,{src:G,alt:`${l.title} - thumbnail ${I+1}`,isActive:I===S,onClick:()=>T(I),onError:Q=>{Q.target.src="https://via.placeholder.com/100x100?text=No+Image"}},I))})]}),v.jsxs(Ox,{children:[v.jsx(Dx,{children:((L=l.category)==null?void 0:L.name)||"Uncategorized"}),v.jsx(Nx,{children:l.title}),v.jsxs(Mx,{children:["$",l.price.toFixed(2)]}),v.jsx(Ux,{children:l.description}),v.jsxs(jx,{children:[v.jsx(Lx,{children:"Quantity:"}),v.jsx(kx,{type:"number",min:"1",value:m,onChange:C})]}),v.jsxs(zx,{children:[v.jsx(Ix,{onClick:_,children:"Add to Cart"}),v.jsx(Bx,{onClick:k,children:"Buy Now"})]})]})]})}):v.jsxs(xy,{children:[v.jsx("h2",{children:"Product Not Found"}),v.jsx("p",{children:"The product you're looking for doesn't exist or has been removed."}),v.jsx("button",{onClick:()=>n("/"),children:"Back to Home"})]})},wx=N.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,Tx=N.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,xx=N.div`
  display: flex;
  flex-direction: column;
`,Ax=N.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`,Rx=N.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  /* Hide scrollbar but allow scrolling */
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,Cx=N.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${r=>r.isActive?1:.6};
  border: ${r=>r.isActive?"2px solid #ff4500":"2px solid transparent"};
  transition: opacity 0.2s, border 0.2s;
  
  &:hover {
    opacity: 1;
  }
`,Ox=N.div`
  display: flex;
  flex-direction: column;
`,Dx=N.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,Nx=N.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,Mx=N.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff4500;
  margin-bottom: 1.5rem;
`,Ux=N.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`,jx=N.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Lx=N.label`
  margin-right: 1rem;
`,kx=N.input`
  width: 60px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,zx=N.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Ix=N.button`
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #ff4500;
  border: 2px solid #ff4500;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: #ff4500;
    color: white;
  }
`,Bx=N.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`,xy=N.div`
  text-align: center;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    color: #e53935;
    margin-bottom: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #e53935;
    }
  }
`,Hx=()=>{const{cart:r,totalItems:n,totalPrice:i,updateQuantity:l,removeFromCart:u,clearCart:f}=qo(),d=(m,b)=>{b<1||l(m,b)},g=m=>{u(m)},h=m=>{m.target.src="https://via.placeholder.com/80x80?text=No+Image"};return r.length===0?v.jsxs(Ay,{children:[v.jsx(Ry,{children:v.jsx("h1",{children:"Your Cart"})}),v.jsxs(gA,{children:[v.jsx(yA,{children:"Your cart is empty"}),v.jsx(vA,{children:"Looks like you haven't added anything to your cart yet."}),v.jsx(bA,{to:"/",children:"Continue Shopping"})]})]}):v.jsxs(Ay,{children:[v.jsxs(Ry,{children:[v.jsx("h1",{children:"Your Cart"}),v.jsxs(Px,{children:[n," ",n===1?"item":"items"]})]}),v.jsxs(qx,{children:[v.jsxs(Vx,{children:[v.jsxs(Gx,{children:[v.jsx(Yx,{children:"Product"}),v.jsx($x,{children:"Price"}),v.jsx(Xx,{children:"Quantity"}),v.jsx(Fx,{children:"Total"}),v.jsx(Kx,{})]}),r.map(m=>{var b;return v.jsxs(Qx,{children:[v.jsxs(Zx,{children:[v.jsx(Jx,{src:m.images[0],alt:m.title,onError:h}),v.jsxs(Wx,{children:[v.jsx(eA,{children:m.title}),v.jsx(tA,{children:((b=m.category)==null?void 0:b.name)||"Uncategorized"})]})]}),v.jsxs(nA,{children:["$",m.price.toFixed(2)]}),v.jsxs(rA,{children:[v.jsx(Cy,{onClick:()=>d(m.id,m.quantity-1),disabled:m.quantity<=1,children:"-"}),v.jsx(aA,{children:m.quantity}),v.jsx(Cy,{onClick:()=>d(m.id,m.quantity+1),children:"+"})]}),v.jsxs(iA,{children:["$",(m.price*m.quantity).toFixed(2)]}),v.jsx(sA,{onClick:()=>g(m.id),children:"✕"})]},m.id)}),v.jsxs(lA,{children:[v.jsx(oA,{onClick:f,children:"Clear Cart"}),v.jsx(uA,{to:"/",children:"Continue Shopping"})]})]}),v.jsxs(cA,{children:[v.jsx(fA,{children:"Order Summary"}),v.jsxs(Ef,{children:[v.jsx(_f,{children:"Subtotal"}),v.jsxs(wf,{children:["$",i.toFixed(2)]})]}),v.jsxs(Ef,{children:[v.jsx(_f,{children:"Shipping"}),v.jsx(wf,{children:"Free"})]}),v.jsxs(Ef,{children:[v.jsx(_f,{children:"Tax"}),v.jsxs(wf,{children:["$",(i*.1).toFixed(2)]})]}),v.jsxs(dA,{children:[v.jsx(hA,{children:"Total"}),v.jsxs(pA,{children:["$",(i+i*.1).toFixed(2)]})]}),v.jsx(mA,{to:"/checkout",children:"Proceed to Checkout"})]})]})]})},Ay=N.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,Ry=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`,Px=N.p`
  color: #777;
`,qx=N.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Vx=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,Gx=N.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  padding: 1rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Yx=N.div`
  font-weight: 600;
`,$x=N.div`
  font-weight: 600;
  text-align: center;
`,Xx=N.div`
  font-weight: 600;
  text-align: center;
`,Fx=N.div`
  font-weight: 600;
  text-align: center;
`,Kx=N.div``,Qx=N.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Zx=N.div`
  display: flex;
  align-items: center;
`,Jx=N.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`,Wx=N.div``,eA=N.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`,tA=N.p`
  color: #777;
  font-size: 0.8rem;
`,nA=N.div`
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
    &:before {
      content: 'Price: ';
      font-weight: 600;
    }
  }
`,rA=N.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    &:before {
      content: 'Quantity: ';
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`,Cy=N.button`
  width: 30px;
  height: 30px;
  background-color: ${r=>r.disabled?"#f0f0f0":"white"};
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  
  &:hover {
    background-color: ${r=>r.disabled?"#f0f0f0":"#f9f9f9"};
  }
`,aA=N.span`
  margin: 0 0.5rem;
  min-width: 20px;
  text-align: center;
`,iA=N.div`
  font-weight: 600;
  color: #ff4500;
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
    &:before {
      content: 'Total: ';
      font-weight: 600;
    }
  }
`,sA=N.button`
  background: none;
  border: none;
  color: #999;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  &:hover {
    color: #ff4500;
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`,lA=N.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,oA=N.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #f9f9f9;
  }
`,uA=N(dn)`
  color: #ff4500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,cA=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
`,fA=N.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`,Ef=N.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`,_f=N.span`
  color: #555;
`,wf=N.span`
  font-weight: 500;
`,dA=N.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`,hA=N.span`
  font-weight: 600;
  font-size: 1.1rem;
`,pA=N.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #ff4500;
`,mA=N(dn)`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #ff4500;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`,gA=N.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,yA=N.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,vA=N.p`
  color: #777;
  margin-bottom: 2rem;
`,bA=N(dn)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`,SA=()=>{};var Oy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=function(r){const n=[];let i=0;for(let l=0;l<r.length;l++){let u=r.charCodeAt(l);u<128?n[i++]=u:u<2048?(n[i++]=u>>6|192,n[i++]=u&63|128):(u&64512)===55296&&l+1<r.length&&(r.charCodeAt(l+1)&64512)===56320?(u=65536+((u&1023)<<10)+(r.charCodeAt(++l)&1023),n[i++]=u>>18|240,n[i++]=u>>12&63|128,n[i++]=u>>6&63|128,n[i++]=u&63|128):(n[i++]=u>>12|224,n[i++]=u>>6&63|128,n[i++]=u&63|128)}return n},EA=function(r){const n=[];let i=0,l=0;for(;i<r.length;){const u=r[i++];if(u<128)n[l++]=String.fromCharCode(u);else if(u>191&&u<224){const f=r[i++];n[l++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=r[i++],d=r[i++],g=r[i++],h=((u&7)<<18|(f&63)<<12|(d&63)<<6|g&63)-65536;n[l++]=String.fromCharCode(55296+(h>>10)),n[l++]=String.fromCharCode(56320+(h&1023))}else{const f=r[i++],d=r[i++];n[l++]=String.fromCharCode((u&15)<<12|(f&63)<<6|d&63)}}return n.join("")},Sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let u=0;u<r.length;u+=3){const f=r[u],d=u+1<r.length,g=d?r[u+1]:0,h=u+2<r.length,m=h?r[u+2]:0,b=f>>2,S=(f&3)<<4|g>>4;let T=(g&15)<<2|m>>6,C=m&63;h||(C=64,d||(T=64)),l.push(i[b],i[S],i[T],i[C])}return l.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(bv(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):EA(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let u=0;u<r.length;){const f=i[r.charAt(u++)],g=u<r.length?i[r.charAt(u)]:0;++u;const m=u<r.length?i[r.charAt(u)]:64;++u;const S=u<r.length?i[r.charAt(u)]:64;if(++u,f==null||g==null||m==null||S==null)throw new _A;const T=f<<2|g>>4;if(l.push(T),m!==64){const C=g<<4&240|m>>2;if(l.push(C),S!==64){const _=m<<6&192|S;l.push(_)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wA=function(r){const n=bv(r);return Sv.encodeByteArray(n,!0)},Ev=function(r){return wA(r).replace(/\./g,"")},_v=function(r){try{return Sv.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=()=>TA().__FIREBASE_DEFAULTS__,AA=()=>{if(typeof process>"u"||typeof Oy>"u")return;const r=Oy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},RA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&_v(r[1]);return n&&JSON.parse(n)},Dd=()=>{try{return SA()||xA()||AA()||RA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},CA=r=>{var n,i;return(i=(n=Dd())===null||n===void 0?void 0:n.emulatorHosts)===null||i===void 0?void 0:i[r]},wv=()=>{var r;return(r=Dd())===null||r===void 0?void 0:r.config},Tv=r=>{var n;return(n=Dd())===null||n===void 0?void 0:n[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,i)=>{this.resolve=n,this.reject=i})}wrapCallback(n){return(i,l)=>{i?this.reject(i):this.resolve(l),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(i):n(i,l))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function NA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function UA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jA(){const r=ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function LA(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((r,n)=>{try{let i=!0;const l="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(l);u.onsuccess=()=>{u.result.close(),i||self.indexedDB.deleteDatabase(l),r(!0)},u.onupgradeneeded=()=>{i=!1},u.onerror=()=>{var f;n(((f=u.error)===null||f===void 0?void 0:f.message)||"")}}catch(i){n(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="FirebaseError";class vr extends Error{constructor(n,i,l){super(i),this.code=n,this.customData=l,this.name=zA,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(n,i,l){this.service=n,this.serviceName=i,this.errors=l}create(n,...i){const l=i[0]||{},u=`${this.service}/${n}`,f=this.errors[n],d=f?IA(f,l):"Error",g=`${this.serviceName}: ${d} (${u}).`;return new vr(u,g,l)}}function IA(r,n){return r.replace(BA,(i,l)=>{const u=n[l];return u!=null?String(u):`<${l}?>`})}const BA=/\{\$([^}]+)}/g;function HA(r){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}function Ka(r,n){if(r===n)return!0;const i=Object.keys(r),l=Object.keys(n);for(const u of i){if(!l.includes(u))return!1;const f=r[u],d=n[u];if(Dy(f)&&Dy(d)){if(!Ka(f,d))return!1}else if(f!==d)return!1}for(const u of l)if(!i.includes(u))return!1;return!0}function Dy(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(r){const n=[];for(const[i,l]of Object.entries(r))Array.isArray(l)?l.forEach(u=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(u))}):n.push(encodeURIComponent(i)+"="+encodeURIComponent(l));return n.length?"&"+n.join("&"):""}function ss(r){const n={};return r.replace(/^\?/,"").split("&").forEach(l=>{if(l){const[u,f]=l.split("=");n[decodeURIComponent(u)]=decodeURIComponent(f)}}),n}function ls(r){const n=r.indexOf("?");if(!n)return"";const i=r.indexOf("#",n);return r.substring(n,i>0?i:void 0)}function PA(r,n){const i=new qA(r,n);return i.subscribe.bind(i)}class qA{constructor(n,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{n(this)}).catch(l=>{this.error(l)})}next(n){this.forEachObserver(i=>{i.next(n)})}error(n){this.forEachObserver(i=>{i.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,i,l){let u;if(n===void 0&&i===void 0&&l===void 0)throw new Error("Missing Observer.");VA(n,["next","error","complete"])?u=n:u={next:n,error:i,complete:l},u.next===void 0&&(u.next=Tf),u.error===void 0&&(u.error=Tf),u.complete===void 0&&(u.complete=Tf);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),f}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,n)}sendOne(n,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{i(this.observers[n])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VA(r,n){if(typeof r!="object"||r===null)return!1;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}function Tf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(r){return r&&r._delegate?r._delegate:r}class Qa{constructor(n,i,l){this.name=n,this.instanceFactory=i,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(n,i){this.name=n,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const i=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(i)){const l=new OA;if(this.instancesDeferred.set(i,l),this.isInitialized(i)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:i});u&&l.resolve(u)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(n){var i;const l=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),u=(i=n==null?void 0:n.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(l)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:l})}catch(f){if(u)return null;throw f}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if($A(n))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[i,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);try{const f=this.getOrInitializeService({instanceIdentifier:u});l.resolve(f)}catch{}}}}clearInstance(n=Pr){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...n.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=Pr){return this.instances.has(n)}getOptions(n=Pr){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:i={}}=n,l=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:l,options:i});for(const[f,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(f);l===g&&d.resolve(u)}return u}onInit(n,i){var l;const u=this.normalizeInstanceIdentifier(i),f=(l=this.onInitCallbacks.get(u))!==null&&l!==void 0?l:new Set;f.add(n),this.onInitCallbacks.set(u,f);const d=this.instances.get(u);return d&&n(d,u),()=>{f.delete(n)}}invokeOnInitCallbacks(n,i){const l=this.onInitCallbacks.get(i);if(l)for(const u of l)try{u(n,i)}catch{}}getOrInitializeService({instanceIdentifier:n,options:i={}}){let l=this.instances.get(n);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:YA(n),options:i}),this.instances.set(n,l),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(l,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,l)}catch{}return l||null}normalizeInstanceIdentifier(n=Pr){return this.component?this.component.multipleInstances?n:Pr:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YA(r){return r===Pr?void 0:r}function $A(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const i=this.getProvider(n.name);if(i.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);i.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const i=new GA(n,this);return this.providers.set(n,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const FA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},KA=Oe.INFO,QA={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},ZA=(r,n,...i)=>{if(n<r.logLevel)return;const l=new Date().toISOString(),u=QA[n];if(u)console[u](`[${l}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class xv{constructor(n){this.name=n,this._logLevel=KA,this._logHandler=ZA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in Oe))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?FA[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...n),this._logHandler(this,Oe.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...n),this._logHandler(this,Oe.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...n),this._logHandler(this,Oe.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...n),this._logHandler(this,Oe.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...n),this._logHandler(this,Oe.ERROR,...n)}}const JA=(r,n)=>n.some(i=>r instanceof i);let Ny,My;function WA(){return Ny||(Ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eR(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,sd=new WeakMap,Rv=new WeakMap,xf=new WeakMap,Nd=new WeakMap;function tR(r){const n=new Promise((i,l)=>{const u=()=>{r.removeEventListener("success",f),r.removeEventListener("error",d)},f=()=>{i(gr(r.result)),u()},d=()=>{l(r.error),u()};r.addEventListener("success",f),r.addEventListener("error",d)});return n.then(i=>{i instanceof IDBCursor&&Av.set(i,r)}).catch(()=>{}),Nd.set(n,r),n}function nR(r){if(sd.has(r))return;const n=new Promise((i,l)=>{const u=()=>{r.removeEventListener("complete",f),r.removeEventListener("error",d),r.removeEventListener("abort",d)},f=()=>{i(),u()},d=()=>{l(r.error||new DOMException("AbortError","AbortError")),u()};r.addEventListener("complete",f),r.addEventListener("error",d),r.addEventListener("abort",d)});sd.set(r,n)}let ld={get(r,n,i){if(r instanceof IDBTransaction){if(n==="done")return sd.get(r);if(n==="objectStoreNames")return r.objectStoreNames||Rv.get(r);if(n==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return gr(r[n])},set(r,n,i){return r[n]=i,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function rR(r){ld=r(ld)}function aR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...i){const l=r.call(Af(this),n,...i);return Rv.set(l,n.sort?n.sort():[n]),gr(l)}:eR().includes(r)?function(...n){return r.apply(Af(this),n),gr(Av.get(this))}:function(...n){return gr(r.apply(Af(this),n))}}function iR(r){return typeof r=="function"?aR(r):(r instanceof IDBTransaction&&nR(r),JA(r,WA())?new Proxy(r,ld):r)}function gr(r){if(r instanceof IDBRequest)return tR(r);if(xf.has(r))return xf.get(r);const n=iR(r);return n!==r&&(xf.set(r,n),Nd.set(n,r)),n}const Af=r=>Nd.get(r);function sR(r,n,{blocked:i,upgrade:l,blocking:u,terminated:f}={}){const d=indexedDB.open(r,n),g=gr(d);return l&&d.addEventListener("upgradeneeded",h=>{l(gr(d.result),h.oldVersion,h.newVersion,gr(d.transaction),h)}),i&&d.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),g.then(h=>{f&&h.addEventListener("close",()=>f()),u&&h.addEventListener("versionchange",m=>u(m.oldVersion,m.newVersion,m))}).catch(()=>{}),g}const lR=["get","getKey","getAll","getAllKeys","count"],oR=["put","add","delete","clear"],Rf=new Map;function Uy(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(Rf.get(n))return Rf.get(n);const i=n.replace(/FromIndex$/,""),l=n!==i,u=oR.includes(i);if(!(i in(l?IDBIndex:IDBObjectStore).prototype)||!(u||lR.includes(i)))return;const f=async function(d,...g){const h=this.transaction(d,u?"readwrite":"readonly");let m=h.store;return l&&(m=m.index(g.shift())),(await Promise.all([m[i](...g),u&&h.done]))[0]};return Rf.set(n,f),f}rR(r=>({...r,get:(n,i,l)=>Uy(n,i)||r.get(n,i,l),has:(n,i)=>!!Uy(n,i)||r.has(n,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(cR(i)){const l=i.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(i=>i).join(" ")}}function cR(r){const n=r.getComponent();return(n==null?void 0:n.type)==="VERSION"}const od="@firebase/app",jy="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new xv("@firebase/app"),fR="@firebase/app-compat",dR="@firebase/analytics-compat",hR="@firebase/analytics",pR="@firebase/app-check-compat",mR="@firebase/app-check",gR="@firebase/auth",yR="@firebase/auth-compat",vR="@firebase/database",bR="@firebase/data-connect",SR="@firebase/database-compat",ER="@firebase/functions",_R="@firebase/functions-compat",wR="@firebase/installations",TR="@firebase/installations-compat",xR="@firebase/messaging",AR="@firebase/messaging-compat",RR="@firebase/performance",CR="@firebase/performance-compat",OR="@firebase/remote-config",DR="@firebase/remote-config-compat",NR="@firebase/storage",MR="@firebase/storage-compat",UR="@firebase/firestore",jR="@firebase/vertexai",LR="@firebase/firestore-compat",kR="firebase",zR="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="[DEFAULT]",IR={[od]:"fire-core",[fR]:"fire-core-compat",[hR]:"fire-analytics",[dR]:"fire-analytics-compat",[mR]:"fire-app-check",[pR]:"fire-app-check-compat",[gR]:"fire-auth",[yR]:"fire-auth-compat",[vR]:"fire-rtdb",[bR]:"fire-data-connect",[SR]:"fire-rtdb-compat",[ER]:"fire-fn",[_R]:"fire-fn-compat",[wR]:"fire-iid",[TR]:"fire-iid-compat",[xR]:"fire-fcm",[AR]:"fire-fcm-compat",[RR]:"fire-perf",[CR]:"fire-perf-compat",[OR]:"fire-rc",[DR]:"fire-rc-compat",[NR]:"fire-gcs",[MR]:"fire-gcs-compat",[UR]:"fire-fst",[LR]:"fire-fst-compat",[jR]:"fire-vertex","fire-js":"fire-js",[kR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,BR=new Map,cd=new Map;function Ly(r,n){try{r.container.addComponent(n)}catch(i){zn.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,i)}}function ps(r){const n=r.name;if(cd.has(n))return zn.debug(`There were multiple attempts to register component ${n}.`),!1;cd.set(n,r);for(const i of So.values())Ly(i,r);for(const i of BR.values())Ly(i,r);return!0}function Cv(r,n){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(n)}function Xt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Ts("app","Firebase",HR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(n,i,l){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new Qa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=zR;function Ov(r,n={}){let i=r;typeof n!="object"&&(n={name:n});const l=Object.assign({name:ud,automaticDataCollectionEnabled:!1},n),u=l.name;if(typeof u!="string"||!u)throw yr.create("bad-app-name",{appName:String(u)});if(i||(i=wv()),!i)throw yr.create("no-options");const f=So.get(u);if(f){if(Ka(i,f.options)&&Ka(l,f.config))return f;throw yr.create("duplicate-app",{appName:u})}const d=new XA(u);for(const h of cd.values())d.addComponent(h);const g=new PR(i,l,d);return So.set(u,g),g}function qR(r=ud){const n=So.get(r);if(!n&&r===ud&&wv())return Ov();if(!n)throw yr.create("no-app",{appName:r});return n}function Ha(r,n,i){var l;let u=(l=IR[r])!==null&&l!==void 0?l:r;i&&(u+=`-${i}`);const f=u.match(/\s|\//),d=n.match(/\s|\//);if(f||d){const g=[`Unable to register library "${u}" with version "${n}":`];f&&g.push(`library name "${u}" contains illegal characters (whitespace or "/")`),f&&d&&g.push("and"),d&&g.push(`version name "${n}" contains illegal characters (whitespace or "/")`),zn.warn(g.join(" "));return}ps(new Qa(`${u}-version`,()=>({library:u,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="firebase-heartbeat-database",GR=1,ms="firebase-heartbeat-store";let Cf=null;function Dv(){return Cf||(Cf=sR(VR,GR,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(ms)}catch(i){console.warn(i)}}}}).catch(r=>{throw yr.create("idb-open",{originalErrorMessage:r.message})})),Cf}async function YR(r){try{const i=(await Dv()).transaction(ms),l=await i.objectStore(ms).get(Nv(r));return await i.done,l}catch(n){if(n instanceof vr)zn.warn(n.message);else{const i=yr.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});zn.warn(i.message)}}}async function ky(r,n){try{const l=(await Dv()).transaction(ms,"readwrite");await l.objectStore(ms).put(n,Nv(r)),await l.done}catch(i){if(i instanceof vr)zn.warn(i.message);else{const l=yr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});zn.warn(l.message)}}}function Nv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=1024,XR=30;class FR{constructor(n){this.container=n,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new QR(i),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var n,i;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=zy();if(((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(d=>d.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:u}),this._heartbeatsCache.heartbeats.length>XR){const d=ZR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){zn.warn(l)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=zy(),{heartbeatsToSend:l,unsentEntries:u}=KR(this._heartbeatsCache.heartbeats),f=Ev(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=i,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(i){return zn.warn(i),""}}}function zy(){return new Date().toISOString().substring(0,10)}function KR(r,n=$R){const i=[];let l=r.slice();for(const u of r){const f=i.find(d=>d.agent===u.agent);if(f){if(f.dates.push(u.date),Iy(i)>n){f.dates.pop();break}}else if(i.push({agent:u.agent,dates:[u.date]}),Iy(i)>n){i.pop();break}l=l.slice(1)}return{heartbeatsToSend:i,unsentEntries:l}}class QR{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LA()?kA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await YR(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var i;if(await this._canUseIndexedDBPromise){const u=await this.read();return ky(this.app,{lastSentHeartbeatDate:(i=n.lastSentHeartbeatDate)!==null&&i!==void 0?i:u.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var i;if(await this._canUseIndexedDBPromise){const u=await this.read();return ky(this.app,{lastSentHeartbeatDate:(i=n.lastSentHeartbeatDate)!==null&&i!==void 0?i:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...n.heartbeats]})}else return}}function Iy(r){return Ev(JSON.stringify({version:2,heartbeats:r})).length}function ZR(r){if(r.length===0)return-1;let n=0,i=r[0].date;for(let l=1;l<r.length;l++)r[l].date<i&&(i=r[l].date,n=l);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(r){ps(new Qa("platform-logger",n=>new uR(n),"PRIVATE")),ps(new Qa("heartbeat",n=>new FR(n),"PRIVATE")),Ha(od,jy,r),Ha(od,jy,"esm2017"),Ha("fire-js","")}JR("");function Md(r,n){var i={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&n.indexOf(l)<0&&(i[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(r);u<l.length;u++)n.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(r,l[u])&&(i[l[u]]=r[l[u]]);return i}function Mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WR=Mv,Uv=new Ts("auth","Firebase",Mv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new xv("@firebase/auth");function eC(r,...n){Eo.logLevel<=Oe.WARN&&Eo.warn(`Auth (${As}): ${r}`,...n)}function oo(r,...n){Eo.logLevel<=Oe.ERROR&&Eo.error(`Auth (${As}): ${r}`,...n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(r,...n){throw Ud(r,...n)}function ln(r,...n){return Ud(r,...n)}function jv(r,n,i){const l=Object.assign(Object.assign({},WR()),{[n]:i});return new Ts("auth","Firebase",l).create(n,{appName:r.name})}function Ln(r){return jv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ud(r,...n){if(typeof r!="string"){const i=n[0],l=[...n.slice(1)];return l[0]&&(l[0].appName=r.name),r._errorFactory.create(i,...l)}return Uv.create(r,...n)}function ie(r,n,...i){if(!r)throw Ud(n,...i)}function Mn(r){const n="INTERNAL ASSERTION FAILED: "+r;throw oo(n),new Error(n)}function In(r,n){r||Mn(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tC(){return By()==="http:"||By()==="https:"}function By(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tC()||MA()||"connection"in navigator)?navigator.onLine:!0}function rC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(n,i){this.shortDelay=n,this.longDelay=i,In(i>n,"Short delay should be less than long delay!"),this.isMobile=DA()||UA()}get(){return nC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(r,n){In(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return n?`${i}${n.startsWith("/")?n.slice(1):n}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{static initialize(n,i,l){this.fetchImpl=n,i&&(this.headersImpl=i),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sC=new Rs(3e4,6e4);function br(r,n){return r.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:r.tenantId}):n}async function Sr(r,n,i,l,u={}){return kv(r,u,async()=>{let f={},d={};l&&(n==="GET"?d=l:f={body:JSON.stringify(l)});const g=xs(Object.assign({key:r.config.apiKey},d)).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:n,headers:h},f);return NA()||(m.referrerPolicy="no-referrer"),Lv.fetch()(await zv(r,r.config.apiHost,i,g),m)})}async function kv(r,n,i){r._canInitEmulator=!1;const l=Object.assign(Object.assign({},aC),n);try{const u=new oC(r),f=await Promise.race([i(),u.promise]);u.clearNetworkTimeout();const d=await f.json();if("needConfirmation"in d)throw Fl(r,"account-exists-with-different-credential",d);if(f.ok&&!("errorMessage"in d))return d;{const g=f.ok?d.errorMessage:d.error.message,[h,m]=g.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fl(r,"credential-already-in-use",d);if(h==="EMAIL_EXISTS")throw Fl(r,"email-already-in-use",d);if(h==="USER_DISABLED")throw Fl(r,"user-disabled",d);const b=l[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw jv(r,b,m);Qt(r,b)}}catch(u){if(u instanceof vr)throw u;Qt(r,"network-request-failed",{message:String(u)})}}async function Cs(r,n,i,l,u={}){const f=await Sr(r,n,i,l,u);return"mfaPendingCredential"in f&&Qt(r,"multi-factor-auth-required",{_serverResponse:f}),f}async function zv(r,n,i,l){const u=`${n}${i}?${l}`,f=r,d=f.config.emulator?jd(r.config,u):`${r.config.apiScheme}://${u}`;return iC.includes(i)&&(await f._persistenceManagerAvailable,f._getPersistenceType()==="COOKIE")?f._getPersistence()._getFinalTarget(d).toString():d}function lC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((i,l)=>{this.timer=setTimeout(()=>l(ln(this.auth,"network-request-failed")),sC.get())})}}function Fl(r,n,i){const l={appName:r.name};i.email&&(l.email=i.email),i.phoneNumber&&(l.phoneNumber=i.phoneNumber);const u=ln(r,n,l);return u.customData._tokenResponse=i,u}function Hy(r){return r!==void 0&&r.enterprise!==void 0}class uC{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===n)return lC(i.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cC(r,n){return Sr(r,"GET","/v2/recaptchaConfig",br(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(r,n){return Sr(r,"POST","/v1/accounts:delete",n)}async function _o(r,n){return Sr(r,"POST","/v1/accounts:lookup",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(r){if(r)try{const n=new Date(Number(r));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function dC(r,n=!1){const i=Bn(r),l=await i.getIdToken(n),u=Ld(l);ie(u&&u.exp&&u.auth_time&&u.iat,i.auth,"internal-error");const f=typeof u.firebase=="object"?u.firebase:void 0,d=f==null?void 0:f.sign_in_provider;return{claims:u,token:l,authTime:us(Of(u.auth_time)),issuedAtTime:us(Of(u.iat)),expirationTime:us(Of(u.exp)),signInProvider:d||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function Of(r){return Number(r)*1e3}function Ld(r){const[n,i,l]=r.split(".");if(n===void 0||i===void 0||l===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const u=_v(i);return u?JSON.parse(u):(oo("Failed to decode base64 JWT payload"),null)}catch(u){return oo("Caught error parsing JWT payload as JSON",u==null?void 0:u.toString()),null}}function Py(r){const n=Ld(r);return ie(n,"internal-error"),ie(typeof n.exp<"u","internal-error"),ie(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(r,n,i=!1){if(i)return n;try{return await n}catch(l){throw l instanceof vr&&hC(l)&&r.auth.currentUser===r&&await r.auth.signOut(),l}}function hC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){var i;if(n){const l=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),l}else{this.errorBackoff=3e4;const u=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,u)}}schedule(n=!1){if(!this.isRunning)return;const i=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(n==null?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(n,i){this.createdAt=n,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(r){var n;const i=r.auth,l=await r.getIdToken(),u=await gs(r,_o(i,{idToken:l}));ie(u==null?void 0:u.users.length,i,"internal-error");const f=u.users[0];r._notifyReloadListener(f);const d=!((n=f.providerUserInfo)===null||n===void 0)&&n.length?Iv(f.providerUserInfo):[],g=gC(r.providerData,d),h=r.isAnonymous,m=!(r.email&&f.passwordHash)&&!(g!=null&&g.length),b=h?m:!1,S={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:g,metadata:new dd(f.createdAt,f.lastLoginAt),isAnonymous:b};Object.assign(r,S)}async function mC(r){const n=Bn(r);await wo(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function gC(r,n){return[...r.filter(l=>!n.some(u=>u.providerId===l.providerId)),...n]}function Iv(r){return r.map(n=>{var{providerId:i}=n,l=Md(n,["providerId"]);return{providerId:i,uid:l.rawId||"",displayName:l.displayName||null,email:l.email||null,phoneNumber:l.phoneNumber||null,photoURL:l.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(r,n){const i=await kv(r,{},async()=>{const l=xs({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:u,apiKey:f}=r.config,d=await zv(r,u,"/v1/token",`key=${f}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Lv.fetch()(d,{method:"POST",headers:g,body:l})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function vC(r,n){return Sr(r,"POST","/v2/accounts:revokeToken",br(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){ie(n.idToken,"internal-error"),ie(typeof n.idToken<"u","internal-error"),ie(typeof n.refreshToken<"u","internal-error");const i="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):Py(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,i)}updateFromIdToken(n){ie(n.length!==0,"internal-error");const i=Py(n);this.updateTokensAndExpiration(n,null,i)}async getToken(n,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,i){const{accessToken:l,refreshToken:u,expiresIn:f}=await yC(n,i);this.updateTokensAndExpiration(l,u,Number(f))}updateTokensAndExpiration(n,i,l){this.refreshToken=i||null,this.accessToken=n||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(n,i){const{refreshToken:l,accessToken:u,expirationTime:f}=i,d=new Pa;return l&&(ie(typeof l=="string","internal-error",{appName:n}),d.refreshToken=l),u&&(ie(typeof u=="string","internal-error",{appName:n}),d.accessToken=u),f&&(ie(typeof f=="number","internal-error",{appName:n}),d.expirationTime=f),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(r,n){ie(typeof r=="string"||typeof r>"u","internal-error",{appName:n})}class Ft{constructor(n){var{uid:i,auth:l,stsTokenManager:u}=n,f=Md(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=l,this.stsTokenManager=u,this.accessToken=u.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new dd(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(n){const i=await gs(this,this.stsTokenManager.getToken(this.auth,n));return ie(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(n){return dC(this,n)}reload(){return mC(this)}_assign(n){this!==n&&(ie(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(i=>Object.assign({},i)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const i=new Ft(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(n){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,i=!1){let l=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),l=!0),i&&await wo(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(Ln(this.auth));const n=await this.getIdToken();return await gs(this,fC(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,i){var l,u,f,d,g,h,m,b;const S=(l=i.displayName)!==null&&l!==void 0?l:void 0,T=(u=i.email)!==null&&u!==void 0?u:void 0,C=(f=i.phoneNumber)!==null&&f!==void 0?f:void 0,_=(d=i.photoURL)!==null&&d!==void 0?d:void 0,k=(g=i.tenantId)!==null&&g!==void 0?g:void 0,j=(h=i._redirectEventId)!==null&&h!==void 0?h:void 0,L=(m=i.createdAt)!==null&&m!==void 0?m:void 0,G=(b=i.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:I,emailVerified:Q,isAnonymous:Y,providerData:Z,stsTokenManager:X}=i;ie(I&&X,n,"internal-error");const ye=Pa.fromJSON(this.name,X);ie(typeof I=="string",n,"internal-error"),cr(S,n.name),cr(T,n.name),ie(typeof Q=="boolean",n,"internal-error"),ie(typeof Y=="boolean",n,"internal-error"),cr(C,n.name),cr(_,n.name),cr(k,n.name),cr(j,n.name),cr(L,n.name),cr(G,n.name);const ge=new Ft({uid:I,auth:n,email:T,emailVerified:Q,displayName:S,isAnonymous:Y,photoURL:_,phoneNumber:C,tenantId:k,stsTokenManager:ye,createdAt:L,lastLoginAt:G});return Z&&Array.isArray(Z)&&(ge.providerData=Z.map(Ve=>Object.assign({},Ve))),j&&(ge._redirectEventId=j),ge}static async _fromIdTokenResponse(n,i,l=!1){const u=new Pa;u.updateFromServerResponse(i);const f=new Ft({uid:i.localId,auth:n,stsTokenManager:u,isAnonymous:l});return await wo(f),f}static async _fromGetAccountInfoResponse(n,i,l){const u=i.users[0];ie(u.localId!==void 0,"internal-error");const f=u.providerUserInfo!==void 0?Iv(u.providerUserInfo):[],d=!(u.email&&u.passwordHash)&&!(f!=null&&f.length),g=new Pa;g.updateFromIdToken(l);const h=new Ft({uid:u.localId,auth:n,stsTokenManager:g,isAnonymous:d}),m={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new dd(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!(f!=null&&f.length)};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new Map;function Un(r){In(r instanceof Function,"Expected a class definition");let n=qy.get(r);return n?(In(n instanceof r,"Instance stored in cache mismatched with class"),n):(n=new r,qy.set(r,n),n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,i){this.storage[n]=i}async _get(n){const i=this.storage[n];return i===void 0?null:i}async _remove(n){delete this.storage[n]}_addListener(n,i){}_removeListener(n,i){}}Bv.type="NONE";const Vy=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(r,n,i){return`firebase:${r}:${n}:${i}`}class qa{constructor(n,i,l){this.persistence=n,this.auth=i,this.userKey=l;const{config:u,name:f}=this.auth;this.fullUserKey=uo(this.userKey,u.apiKey,f),this.fullPersistenceKey=uo("persistence",u.apiKey,f),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const i=await _o(this.auth,{idToken:n}).catch(()=>{});return i?Ft._fromGetAccountInfoResponse(this.auth,i,n):null}return Ft._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,i,l="authUser"){if(!i.length)return new qa(Un(Vy),n,l);const u=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let f=u[0]||Un(Vy);const d=uo(l,n.config.apiKey,n.name);let g=null;for(const m of i)try{const b=await m._get(d);if(b){let S;if(typeof b=="string"){const T=await _o(n,{idToken:b}).catch(()=>{});if(!T)break;S=await Ft._fromGetAccountInfoResponse(n,T,b)}else S=Ft._fromJSON(n,b);m!==f&&(g=S),f=m;break}}catch{}const h=u.filter(m=>m._shouldAllowMigration);return!f._shouldAllowMigration||!h.length?new qa(f,n,l):(f=h[0],g&&await f._set(d,g.toJSON()),await Promise.all(i.map(async m=>{if(m!==f)try{await m._remove(d)}catch{}})),new qa(f,n,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(r){const n=r.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(Vv(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(Hv(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(Yv(n))return"Blackberry";if($v(n))return"Webos";if(Pv(n))return"Safari";if((n.includes("chrome/")||qv(n))&&!n.includes("edge/"))return"Chrome";if(Gv(n))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=r.match(i);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function Hv(r=ut()){return/firefox\//i.test(r)}function Pv(r=ut()){const n=r.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function qv(r=ut()){return/crios\//i.test(r)}function Vv(r=ut()){return/iemobile/i.test(r)}function Gv(r=ut()){return/android/i.test(r)}function Yv(r=ut()){return/blackberry/i.test(r)}function $v(r=ut()){return/webos/i.test(r)}function kd(r=ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function bC(r=ut()){var n;return kd(r)&&!!(!((n=window.navigator)===null||n===void 0)&&n.standalone)}function SC(){return jA()&&document.documentMode===10}function Xv(r=ut()){return kd(r)||Gv(r)||$v(r)||Yv(r)||/windows phone/i.test(r)||Vv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(r,n=[]){let i;switch(r){case"Browser":i=Gy(ut());break;case"Worker":i=`${Gy(ut())}-${r}`;break;default:i=r}const l=n.length?n.join(","):"FirebaseCore-web";return`${i}/JsCore/${As}/${l}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,i){const l=f=>new Promise((d,g)=>{try{const h=n(f);d(h)}catch(h){g(h)}});l.onAbort=i,this.queue.push(l);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const i=[];try{for(const l of this.queue)await l(n),l.onAbort&&i.push(l.onAbort)}catch(l){i.reverse();for(const u of i)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(r,n={}){return Sr(r,"GET","/v2/passwordPolicy",br(r,n))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6;class TC{constructor(n){var i,l,u,f;const d=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:wC,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(u=(l=n.allowedNonAlphanumericCharacters)===null||l===void 0?void 0:l.join(""))!==null&&u!==void 0?u:"",this.forceUpgradeOnSignin=(f=n.forceUpgradeOnSignin)!==null&&f!==void 0?f:!1,this.schemaVersion=n.schemaVersion}validatePassword(n){var i,l,u,f,d,g;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,h),this.validatePasswordCharacterOptions(n,h),h.isValid&&(h.isValid=(i=h.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(l=h.meetsMaxPasswordLength)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsLowercaseLetter)!==null&&u!==void 0?u:!0),h.isValid&&(h.isValid=(f=h.containsUppercaseLetter)!==null&&f!==void 0?f:!0),h.isValid&&(h.isValid=(d=h.containsNumericCharacter)!==null&&d!==void 0?d:!0),h.isValid&&(h.isValid=(g=h.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),h}validatePasswordLengthOptions(n,i){const l=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;l&&(i.meetsMinPasswordLength=n.length>=l),u&&(i.meetsMaxPasswordLength=n.length<=u)}validatePasswordCharacterOptions(n,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let l;for(let u=0;u<n.length;u++)l=n.charAt(u),this.updatePasswordCharacterOptionsStatuses(i,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(n,i,l,u,f){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(n,i,l,u){this.app=n,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=l,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yy(this),this.idTokenSubscription=new Yy(this),this.beforeStateQueue=new EC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=u.sdkClientVersion,this._persistenceManagerAvailable=new Promise(f=>this._resolvePersistenceManagerAvailable=f)}_initializeWithPersistence(n,i){return i&&(this._popupRedirectResolver=Un(i)),this._initializationPromise=this.queue(async()=>{var l,u,f;if(!this._deleted&&(this.persistenceManager=await qa.create(this,n),(l=this._resolvePersistenceManagerAvailable)===null||l===void 0||l.call(this),!this._deleted)){if(!((u=this._popupRedirectResolver)===null||u===void 0)&&u._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((f=this.currentUser)===null||f===void 0?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const i=await _o(this,{idToken:n}),l=await Ft._fromGetAccountInfoResponse(this,i,n);await this.directlySetCurrentUser(l)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var i;if(Xt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(g,g))}):this.directlySetCurrentUser(null)}const l=await this.assertedPersistence.getCurrentUser();let u=l,f=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,g=u==null?void 0:u._redirectEventId,h=await this.tryRedirectSignIn(n);(!d||d===g)&&(h!=null&&h.user)&&(u=h.user,f=!0)}if(!u)return this.directlySetCurrentUser(null);if(!u._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(u)}catch(d){u=l,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return u?this.reloadAndSetCurrentUserOrClear(u):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===u._redirectEventId?this.directlySetCurrentUser(u):this.reloadAndSetCurrentUserOrClear(u)}async tryRedirectSignIn(n){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(n){try{await wo(n)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=rC()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(Xt(this.app))return Promise.reject(Ln(this));const i=n?Bn(n):null;return i&&ie(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(n,i=!1){if(!this._deleted)return n&&ie(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return Xt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await _C(this),i=new TC(n);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new Ts("auth","Firebase",n())}onAuthStateChanged(n,i,l){return this.registerStateListener(this.authStateSubscription,n,i,l)}beforeAuthStateChanged(n,i){return this.beforeStateQueue.pushCallback(n,i)}onIdTokenChanged(n,i,l){return this.registerStateListener(this.idTokenSubscription,n,i,l)}authStateReady(){return new Promise((n,i)=>{if(this.currentUser)n();else{const l=this.onAuthStateChanged(()=>{l(),n()},i)}})}async revokeAccessToken(n){if(this.currentUser){const i=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:i};this.tenantId!=null&&(l.tenantId=this.tenantId),await vC(this,l)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)===null||n===void 0?void 0:n.toJSON()}}async _setRedirectUser(n,i){const l=await this.getOrInitRedirectPersistenceManager(i);return n===null?l.removeCurrentUser():l.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const i=n&&Un(n)||this._popupRedirectResolver;ie(i,this,"argument-error"),this.redirectPersistenceManager=await qa.create(this,[Un(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var i,l;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===n?this._currentUser:((l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const l=(i=(n=this.currentUser)===null||n===void 0?void 0:n.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==l&&(this.lastNotifiedUid=l,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,i,l,u){if(this._deleted)return()=>{};const f=typeof i=="function"?i:i.next.bind(i);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(g,this,"internal-error"),g.then(()=>{d||f(this.currentUser)}),typeof i=="function"){const h=n.addObserver(i,l,u);return()=>{d=!0,h()}}else{const h=n.addObserver(i);return()=>{d=!0,h()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const l=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getHeartbeatsHeader());l&&(i["X-Firebase-Client"]=l);const u=await this._getAppCheckToken();return u&&(i["X-Firebase-AppCheck"]=u),i}async _getAppCheckToken(){var n;if(Xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getToken());return i!=null&&i.error&&eC(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Zr(r){return Bn(r)}class Yy{constructor(n){this.auth=n,this.observer=null,this.addObserver=PA(i=>this.observer=i)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AC(r){Vo=r}function Kv(r){return Vo.loadJS(r)}function RC(){return Vo.recaptchaEnterpriseScript}function CC(){return Vo.gapiScript}function OC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class DC{constructor(){this.enterprise=new NC}ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}class NC{ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}const MC="recaptcha-enterprise",Qv="NO_RECAPTCHA";class UC{constructor(n){this.type=MC,this.auth=Zr(n)}async verify(n="verify",i=!1){async function l(f){if(!i){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(d,g)=>{cC(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const m=new uC(h);return f.tenantId==null?f._agentRecaptchaConfig=m:f._tenantRecaptchaConfigs[f.tenantId]=m,d(m.siteKey)}}).catch(h=>{g(h)})})}function u(f,d,g){const h=window.grecaptcha;Hy(h)?h.enterprise.ready(()=>{h.enterprise.execute(f,{action:n}).then(m=>{d(m)}).catch(()=>{d(Qv)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DC().execute("siteKey",{action:"verify"}):new Promise((f,d)=>{l(this.auth).then(g=>{if(!i&&Hy(window.grecaptcha))u(g,f,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let h=RC();h.length!==0&&(h+=g),Kv(h).then(()=>{u(g,f,d)}).catch(m=>{d(m)})}}).catch(g=>{d(g)})})}}async function $y(r,n,i,l=!1,u=!1){const f=new UC(r);let d;if(u)d=Qv;else try{d=await f.verify(i)}catch{d=await f.verify(i,!0)}const g=Object.assign({},n);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const h=g.phoneEnrollmentInfo.phoneNumber,m=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const h=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return l?Object.assign(g,{captchaResp:d}):Object.assign(g,{captchaResponse:d}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function hd(r,n,i,l,u){var f;if(!((f=r._getRecaptchaConfig())===null||f===void 0)&&f.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await $y(r,n,i,i==="getOobCode");return l(r,d)}else return l(r,n).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await $y(r,n,i,i==="getOobCode");return l(r,g)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(r,n){const i=Cv(r,"auth");if(i.isInitialized()){const u=i.getImmediate(),f=i.getOptions();if(Ka(f,n??{}))return u;Qt(u,"already-initialized")}return i.initialize({options:n})}function LC(r,n){const i=(n==null?void 0:n.persistence)||[],l=(Array.isArray(i)?i:[i]).map(Un);n!=null&&n.errorMap&&r._updateErrorMap(n.errorMap),r._initializeWithPersistence(l,n==null?void 0:n.popupRedirectResolver)}function kC(r,n,i){const l=Zr(r);ie(/^https?:\/\//.test(n),l,"invalid-emulator-scheme");const u=!1,f=Zv(n),{host:d,port:g}=zC(n),h=g===null?"":`:${g}`,m={url:`${f}//${d}${h}/`},b=Object.freeze({host:d,port:g,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:u})});if(!l._canInitEmulator){ie(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),ie(Ka(m,l.config.emulator)&&Ka(b,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=m,l.emulatorConfig=b,l.settings.appVerificationDisabledForTesting=!0,IC()}function Zv(r){const n=r.indexOf(":");return n<0?"":r.substr(0,n+1)}function zC(r){const n=Zv(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(n.length));if(!i)return{host:"",port:null};const l=i[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(l);if(u){const f=u[1];return{host:f,port:Xy(l.substr(f.length+1))}}else{const[f,d]=l.split(":");return{host:f,port:Xy(d)}}}function Xy(r){if(!r)return null;const n=Number(r);return isNaN(n)?null:n}function IC(){function r(){const n=document.createElement("p"),i=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(n,i){this.providerId=n,this.signInMethod=i}toJSON(){return Mn("not implemented")}_getIdTokenResponse(n){return Mn("not implemented")}_linkToIdToken(n,i){return Mn("not implemented")}_getReauthenticationResolver(n){return Mn("not implemented")}}async function BC(r,n){return Sr(r,"POST","/v1/accounts:signUp",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(r,n){return Cs(r,"POST","/v1/accounts:signInWithPassword",br(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(r,n){return Cs(r,"POST","/v1/accounts:signInWithEmailLink",br(r,n))}async function qC(r,n){return Cs(r,"POST","/v1/accounts:signInWithEmailLink",br(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends zd{constructor(n,i,l,u=null){super("password",l),this._email=n,this._password=i,this._tenantId=u}static _fromEmailAndPassword(n,i){return new ys(n,i,"password")}static _fromEmailAndCode(n,i,l=null){return new ys(n,i,"emailLink",l)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(n,i,"signInWithPassword",HC);case"emailLink":return PC(n,{email:this._email,oobCode:this._password});default:Qt(n,"internal-error")}}async _linkToIdToken(n,i){switch(this.signInMethod){case"password":const l={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(n,l,"signUpPassword",BC);case"emailLink":return qC(n,{idToken:i,email:this._email,oobCode:this._password});default:Qt(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(r,n){return Cs(r,"POST","/v1/accounts:signInWithIdp",br(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="http://localhost";class Fr extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const i=new Fr(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(i.idToken=n.idToken),n.accessToken&&(i.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(i.nonce=n.nonce),n.pendingToken&&(i.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(i.accessToken=n.oauthToken,i.secret=n.oauthTokenSecret):Qt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n,{providerId:l,signInMethod:u}=i,f=Md(i,["providerId","signInMethod"]);if(!l||!u)return null;const d=new Fr(l,u);return d.idToken=f.idToken||void 0,d.accessToken=f.accessToken||void 0,d.secret=f.secret,d.nonce=f.nonce,d.pendingToken=f.pendingToken||null,d}_getIdTokenResponse(n){const i=this.buildRequest();return Va(n,i)}_linkToIdToken(n,i){const l=this.buildRequest();return l.idToken=i,Va(n,l)}_getReauthenticationResolver(n){const i=this.buildRequest();return i.autoCreate=!1,Va(n,i)}buildRequest(){const n={requestUri:VC,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),n.postBody=xs(i)}return n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YC(r){const n=ss(ls(r)).link,i=n?ss(ls(n)).deep_link_id:null,l=ss(ls(r)).deep_link_id;return(l?ss(ls(l)).link:null)||l||i||n||r}class Id{constructor(n){var i,l,u,f,d,g;const h=ss(ls(n)),m=(i=h.apiKey)!==null&&i!==void 0?i:null,b=(l=h.oobCode)!==null&&l!==void 0?l:null,S=GC((u=h.mode)!==null&&u!==void 0?u:null);ie(m&&b&&S,"argument-error"),this.apiKey=m,this.operation=S,this.code=b,this.continueUrl=(f=h.continueUrl)!==null&&f!==void 0?f:null,this.languageCode=(d=h.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(g=h.tenantId)!==null&&g!==void 0?g:null}static parseLink(n){const i=YC(n);try{return new Id(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(n,i){return ys._fromEmailAndPassword(n,i)}static credentialWithLink(n,i){const l=Id.parseLink(i);return ie(l,"argument-error"),ys._fromEmailAndCode(n,l.code,l.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Jv{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Os{constructor(){super("facebook.com")}static credential(n){return Fr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return dr.credentialFromTaggedObject(n)}static credentialFromError(n){return dr.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return dr.credential(n.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Os{constructor(){super("google.com"),this.addScope("profile")}static credential(n,i){return Fr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:i})}static credentialFromResult(n){return hr.credentialFromTaggedObject(n)}static credentialFromError(n){return hr.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:i,oauthAccessToken:l}=n;if(!i&&!l)return null;try{return hr.credential(i,l)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Os{constructor(){super("github.com")}static credential(n){return Fr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return pr.credentialFromTaggedObject(n)}static credentialFromError(n){return pr.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return pr.credential(n.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Os{constructor(){super("twitter.com")}static credential(n,i){return Fr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:i})}static credentialFromResult(n){return mr.credentialFromTaggedObject(n)}static credentialFromError(n){return mr.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:i,oauthTokenSecret:l}=n;if(!i||!l)return null;try{return mr.credential(i,l)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(r,n){return Cs(r,"POST","/v1/accounts:signUp",br(r,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,i,l,u=!1){const f=await Ft._fromIdTokenResponse(n,l,u),d=Fy(l);return new Kr({user:f,providerId:d,_tokenResponse:l,operationType:i})}static async _forOperation(n,i,l){await n._updateTokensIfNecessary(l,!0);const u=Fy(l);return new Kr({user:n,providerId:u,_tokenResponse:l,operationType:i})}}function Fy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends vr{constructor(n,i,l,u){var f;super(i.code,i.message),this.operationType=l,this.user=u,Object.setPrototypeOf(this,To.prototype),this.customData={appName:n.name,tenantId:(f=n.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:i.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(n,i,l,u){return new To(n,i,l,u)}}function Wv(r,n,i,l){return(n==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(r,f,n,l):f})}async function XC(r,n,i=!1){const l=await gs(r,n._linkToIdToken(r.auth,await r.getIdToken()),i);return Kr._forOperation(r,"link",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(r,n,i=!1){const{auth:l}=r;if(Xt(l.app))return Promise.reject(Ln(l));const u="reauthenticate";try{const f=await gs(r,Wv(l,u,n,r),i);ie(f.idToken,l,"internal-error");const d=Ld(f.idToken);ie(d,l,"internal-error");const{sub:g}=d;return ie(r.uid===g,l,"user-mismatch"),Kr._forOperation(r,u,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Qt(l,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(r,n,i=!1){if(Xt(r.app))return Promise.reject(Ln(r));const l="signIn",u=await Wv(r,l,n),f=await Kr._fromIdTokenResponse(r,l,u);return i||await r._updateCurrentUser(f.user),f}async function KC(r,n){return eb(Zr(r),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(r){const n=Zr(r);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function QC(r,n,i){if(Xt(r.app))return Promise.reject(Ln(r));const l=Zr(r),d=await hd(l,{returnSecureToken:!0,email:n,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$C).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&tb(r),h}),g=await Kr._fromIdTokenResponse(l,"signIn",d);return await l._updateCurrentUser(g.user),g}function ZC(r,n,i){return Xt(r.app)?Promise.reject(Ln(r)):KC(Bn(r),ni.credential(n,i)).catch(async l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tb(r),l})}function JC(r,n,i,l){return Bn(r).onIdTokenChanged(n,i,l)}function WC(r,n,i){return Bn(r).beforeAuthStateChanged(n,i)}function eO(r,n,i,l){return Bn(r).onAuthStateChanged(n,i,l)}function tO(r){return Bn(r).signOut()}const xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(n,i){this.storageRetriever=n,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,i){return this.storage.setItem(n,JSON.stringify(i)),Promise.resolve()}_get(n){const i=this.storage.getItem(n);return Promise.resolve(i?JSON.parse(i):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=1e3,rO=10;class rb extends nb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,i)=>this.onStorageEvent(n,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xv(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const i of Object.keys(this.listeners)){const l=this.storage.getItem(i),u=this.localCache[i];l!==u&&n(i,u,l)}}onStorageEvent(n,i=!1){if(!n.key){this.forAllChangedKeys((d,g,h)=>{this.notifyListeners(d,h)});return}const l=n.key;i?this.detachListener():this.stopPolling();const u=()=>{const d=this.storage.getItem(l);!i&&this.localCache[l]===d||this.notifyListeners(l,d)},f=this.storage.getItem(l);SC()&&f!==n.newValue&&n.newValue!==n.oldValue?setTimeout(u,rO):u()}notifyListeners(n,i){this.localCache[n]=i;const l=this.listeners[n];if(l)for(const u of Array.from(l))u(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,i,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:i,newValue:l}),!0)})},nO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,i){await super._set(n,i),this.localCache[n]=JSON.stringify(i)}async _get(n){const i=await super._get(n);return this.localCache[n]=JSON.stringify(i),i}async _remove(n){await super._remove(n),delete this.localCache[n]}}rb.type="LOCAL";const aO=rb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab extends nb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,i){}_removeListener(n,i){}}ab.type="SESSION";const ib=ab;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(r){return Promise.all(r.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const i=this.receivers.find(u=>u.isListeningto(n));if(i)return i;const l=new Go(n);return this.receivers.push(l),l}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const i=n,{eventId:l,eventType:u,data:f}=i.data,d=this.handlersMap[u];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:l,eventType:u});const g=Array.from(d).map(async m=>m(i.origin,f)),h=await iO(g);i.ports[0].postMessage({status:"done",eventId:l,eventType:u,response:h})}_subscribe(n,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(i)}_unsubscribe(n,i){this.handlersMap[n]&&i&&this.handlersMap[n].delete(i),(!i||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(r="",n=10){let i="";for(let l=0;l<n;l++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,i,l=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let f,d;return new Promise((g,h)=>{const m=Bd("",20);u.port1.start();const b=setTimeout(()=>{h(new Error("unsupported_event"))},l);d={messageChannel:u,onMessage(S){const T=S;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(b),f=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),g(T.data.response);break;default:clearTimeout(b),clearTimeout(f),h(new Error("invalid_response"));break}}},this.handlers.add(d),u.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:n,eventId:m,data:i},[u.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function lO(r){on().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function oO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uO(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function cO(){return sb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="firebaseLocalStorageDb",fO=1,Ao="firebaseLocalStorage",ob="fbase_key";class Ds{constructor(n){this.request=n}toPromise(){return new Promise((n,i)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Yo(r,n){return r.transaction([Ao],n?"readwrite":"readonly").objectStore(Ao)}function dO(){const r=indexedDB.deleteDatabase(lb);return new Ds(r).toPromise()}function pd(){const r=indexedDB.open(lb,fO);return new Promise((n,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const l=r.result;try{l.createObjectStore(Ao,{keyPath:ob})}catch(u){i(u)}}),r.addEventListener("success",async()=>{const l=r.result;l.objectStoreNames.contains(Ao)?n(l):(l.close(),await dO(),n(await pd()))})})}async function Ky(r,n,i){const l=Yo(r,!0).put({[ob]:n,value:i});return new Ds(l).toPromise()}async function hO(r,n){const i=Yo(r,!1).get(n),l=await new Ds(i).toPromise();return l===void 0?null:l.value}function Qy(r,n){const i=Yo(r,!0).delete(n);return new Ds(i).toPromise()}const pO=800,mO=3;class ub{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(n){let i=0;for(;;)try{const l=await this._openDb();return await n(l)}catch(l){if(i++>mO)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(cO()),this.receiver._subscribe("keyChanged",async(n,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(n,i)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await oO(),!this.activeServiceWorker)return;this.sender=new sO(this.activeServiceWorker);const l=await this.sender._send("ping",{},800);l&&!((n=l[0])===null||n===void 0)&&n.fulfilled&&!((i=l[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||uO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await pd();return await Ky(n,xo,"1"),await Qy(n,xo),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,i){return this._withPendingWrite(async()=>(await this._withRetries(l=>Ky(l,n,i)),this.localCache[n]=i,this.notifyServiceWorker(n)))}async _get(n){const i=await this._withRetries(l=>hO(l,n));return this.localCache[n]=i,i}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qy(i,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(u=>{const f=Yo(u,!1).getAll();return new Ds(f).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const i=[],l=new Set;if(n.length!==0)for(const{fbase_key:u,value:f}of n)l.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(f)&&(this.notifyListeners(u,f),i.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!l.has(u)&&(this.notifyListeners(u,null),i.push(u));return i}notifyListeners(n,i){this.localCache[n]=i;const l=this.listeners[n];if(l)for(const u of Array.from(l))u(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ub.type="LOCAL";const gO=ub;new Rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(r,n){return n?Un(n):(ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends zd{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Va(n,this._buildIdpRequest())}_linkToIdToken(n,i){return Va(n,this._buildIdpRequest(i))}_getReauthenticationResolver(n){return Va(n,this._buildIdpRequest())}_buildIdpRequest(n){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(i.idToken=n),i}}function vO(r){return eb(r.auth,new Hd(r),r.bypassAuthState)}function bO(r){const{auth:n,user:i}=r;return ie(i,n,"internal-error"),FC(i,new Hd(r),r.bypassAuthState)}async function SO(r){const{auth:n,user:i}=r;return ie(i,n,"internal-error"),XC(i,new Hd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(n,i,l,u,f=!1){this.auth=n,this.resolver=l,this.user=u,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(n,i)=>{this.pendingPromise={resolve:n,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(n){const{urlResponse:i,sessionId:l,postBody:u,tenantId:f,error:d,type:g}=n;if(d){this.reject(d);return}const h={auth:this.auth,requestUri:i,sessionId:l,tenantId:f||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(m){this.reject(m)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return vO;case"linkViaPopup":case"linkViaRedirect":return SO;case"reauthViaPopup":case"reauthViaRedirect":return bO;default:Qt(this.auth,"internal-error")}}resolve(n){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=new Rs(2e3,1e4);class Ba extends cb{constructor(n,i,l,u,f){super(n,i,u,f),this.provider=l,this.authWindow=null,this.pollId=null,Ba.currentPopupAction&&Ba.currentPopupAction.cancel(),Ba.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return ie(n,this.auth,"internal-error"),n}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const n=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)===null||n===void 0?void 0:n.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ba.currentPopupAction=null}pollUserCancellation(){const n=()=>{var i,l;if(!((l=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||l===void 0)&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,EO.get())};n()}}Ba.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="pendingRedirect",co=new Map;class wO extends cb{constructor(n,i,l=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,l),this.eventId=null}async execute(){let n=co.get(this.auth._key());if(!n){try{const l=await TO(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(l)}catch(i){n=()=>Promise.reject(i)}co.set(this.auth._key(),n)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const i=await this.auth._redirectUserForId(n.eventId);if(i)return this.user=i,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TO(r,n){const i=RO(n),l=AO(r);if(!await l._isAvailable())return!1;const u=await l._get(i)==="true";return await l._remove(i),u}function xO(r,n){co.set(r._key(),n)}function AO(r){return Un(r._redirectPersistence)}function RO(r){return uo(_O,r.config.apiKey,r.name)}async function CO(r,n,i=!1){if(Xt(r.app))return Promise.reject(Ln(r));const l=Zr(r),u=yO(l,n),d=await new wO(l,u,i).execute();return d&&!i&&(delete d.user._redirectEventId,await l._persistUserIfCurrent(d.user),await l._setRedirectUser(null,n)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=10*60*1e3;class DO{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let i=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(n,l)&&(i=!0,this.sendToConsumer(n,l),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!NO(n)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=n,i=!0)),i}sendToConsumer(n,i){var l;if(n.error&&!fb(n)){const u=((l=n.error.code)===null||l===void 0?void 0:l.split("auth/")[1])||"internal-error";i.onError(ln(this.auth,u))}else i.onAuthEvent(n)}isEventForConsumer(n,i){const l=i.eventId===null||!!n.eventId&&n.eventId===i.eventId;return i.filter.includes(n.type)&&l}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=OO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(n))}saveEventToCache(n){this.cachedEventUids.add(Zy(n)),this.lastProcessedEventTime=Date.now()}}function Zy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(n=>n).join("-")}function fb({type:r,error:n}){return r==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function NO(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fb(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(r,n={}){return Sr(r,"GET","/v1/projects",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jO=/^https?/;async function LO(r){if(r.config.emulator)return;const{authorizedDomains:n}=await MO(r);for(const i of n)try{if(kO(i))return}catch{}Qt(r,"unauthorized-domain")}function kO(r){const n=fd(),{protocol:i,hostname:l}=new URL(n);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&l===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===n.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===l}if(!jO.test(i))return!1;if(UO.test(r))return l===r;const u=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(l)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=new Rs(3e4,6e4);function Jy(){const r=on().___jsl;if(r!=null&&r.H){for(const n of Object.keys(r.H))if(r.H[n].r=r.H[n].r||[],r.H[n].L=r.H[n].L||[],r.H[n].r=[...r.H[n].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function IO(r){return new Promise((n,i)=>{var l,u,f;function d(){Jy(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{Jy(),i(ln(r,"network-request-failed"))},timeout:zO.get()})}if(!((u=(l=on().gapi)===null||l===void 0?void 0:l.iframes)===null||u===void 0)&&u.Iframe)n(gapi.iframes.getContext());else if(!((f=on().gapi)===null||f===void 0)&&f.load)d();else{const g=OC("iframefcb");return on()[g]=()=>{gapi.load?d():i(ln(r,"network-request-failed"))},Kv(`${CC()}?onload=${g}`).catch(h=>i(h))}}).catch(n=>{throw fo=null,n})}let fo=null;function BO(r){return fo=fo||IO(r),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new Rs(5e3,15e3),PO="__/auth/iframe",qO="emulator/auth/iframe",VO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YO(r){const n=r.config;ie(n.authDomain,r,"auth-domain-config-required");const i=n.emulator?jd(n,qO):`https://${r.config.authDomain}/${PO}`,l={apiKey:n.apiKey,appName:r.name,v:As},u=GO.get(r.config.apiHost);u&&(l.eid=u);const f=r._getFrameworks();return f.length&&(l.fw=f.join(",")),`${i}?${xs(l).slice(1)}`}async function $O(r){const n=await BO(r),i=on().gapi;return ie(i,r,"internal-error"),n.open({where:document.body,url:YO(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VO,dontclear:!0},l=>new Promise(async(u,f)=>{await l.restyle({setHideOnLeave:!1});const d=ln(r,"network-request-failed"),g=on().setTimeout(()=>{f(d)},HO.get());function h(){on().clearTimeout(g),u(l)}l.ping(h).then(h,()=>{f(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FO=500,KO=600,QO="_blank",ZO="http://localhost";class Wy{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JO(r,n,i,l=FO,u=KO){const f=Math.max((window.screen.availHeight-u)/2,0).toString(),d=Math.max((window.screen.availWidth-l)/2,0).toString();let g="";const h=Object.assign(Object.assign({},XO),{width:l.toString(),height:u.toString(),top:f,left:d}),m=ut().toLowerCase();i&&(g=qv(m)?QO:i),Hv(m)&&(n=n||ZO,h.scrollbars="yes");const b=Object.entries(h).reduce((T,[C,_])=>`${T}${C}=${_},`,"");if(bC(m)&&g!=="_self")return WO(n||"",g),new Wy(null);const S=window.open(n||"",g,b);ie(S,r,"popup-blocked");try{S.focus()}catch{}return new Wy(S)}function WO(r,n){const i=document.createElement("a");i.href=r,i.target=n;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="__/auth/handler",tD="emulator/auth/handler",nD=encodeURIComponent("fac");async function e0(r,n,i,l,u,f){ie(r.config.authDomain,r,"auth-domain-config-required"),ie(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:l,v:As,eventId:u};if(n instanceof Jv){n.setDefaultLanguage(r.languageCode),d.providerId=n.providerId||"",HA(n.getCustomParameters())||(d.customParameters=JSON.stringify(n.getCustomParameters()));for(const[b,S]of Object.entries({}))d[b]=S}if(n instanceof Os){const b=n.getScopes().filter(S=>S!=="");b.length>0&&(d.scopes=b.join(","))}r.tenantId&&(d.tid=r.tenantId);const g=d;for(const b of Object.keys(g))g[b]===void 0&&delete g[b];const h=await r._getAppCheckToken(),m=h?`#${nD}=${encodeURIComponent(h)}`:"";return`${rD(r)}?${xs(g).slice(1)}${m}`}function rD({config:r}){return r.emulator?jd(r,tD):`https://${r.authDomain}/${eD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="webStorageSupport";class aD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ib,this._completeRedirectFn=CO,this._overrideRedirectResult=xO}async _openPopup(n,i,l,u){var f;In((f=this.eventManagers[n._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const d=await e0(n,i,l,fd(),u);return JO(n,d,Bd())}async _openRedirect(n,i,l,u){await this._originValidation(n);const f=await e0(n,i,l,fd(),u);return lO(f),new Promise(()=>{})}_initialize(n){const i=n._key();if(this.eventManagers[i]){const{manager:u,promise:f}=this.eventManagers[i];return u?Promise.resolve(u):(In(f,"If manager is not set, promise should be"),f)}const l=this.initAndGetManager(n);return this.eventManagers[i]={promise:l},l.catch(()=>{delete this.eventManagers[i]}),l}async initAndGetManager(n){const i=await $O(n),l=new DO(n);return i.register("authEvent",u=>(ie(u==null?void 0:u.authEvent,n,"invalid-auth-event"),{status:l.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:l},this.iframes[n._key()]=i,l}_isIframeWebStorageSupported(n,i){this.iframes[n._key()].send(Df,{type:Df},u=>{var f;const d=(f=u==null?void 0:u[0])===null||f===void 0?void 0:f[Df];d!==void 0&&i(!!d),Qt(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const i=n._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=LO(n)),this.originValidationPromises[i]}get _shouldInitProactively(){return Xv()||Pv()||kd()}}const iD=aD;var t0="@firebase/auth",n0="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)===null||n===void 0?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const i=this.auth.onIdTokenChanged(l=>{n((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,i),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const i=this.internalListeners.get(n);i&&(this.internalListeners.delete(n),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oD(r){ps(new Qa("auth",(n,{options:i})=>{const l=n.getProvider("app").getImmediate(),u=n.getProvider("heartbeat"),f=n.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=l.options;ie(d&&!d.includes(":"),"invalid-api-key",{appName:l.name});const h={apiKey:d,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(r)},m=new xC(l,u,f,h);return LC(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,i,l)=>{n.getProvider("auth-internal").initialize()})),ps(new Qa("auth-internal",n=>{const i=Zr(n.getProvider("auth").getImmediate());return(l=>new sD(l))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ha(t0,n0,lD(r)),Ha(t0,n0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=5*60,cD=Tv("authIdTokenMaxAge")||uD;let r0=null;const fD=r=>async n=>{const i=n&&await n.getIdTokenResult(),l=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(l&&l>cD)return;const u=i==null?void 0:i.token;r0!==u&&(r0=u,await fetch(r,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function dD(r=qR()){const n=Cv(r,"auth");if(n.isInitialized())return n.getImmediate();const i=jC(r,{popupRedirectResolver:iD,persistence:[gO,aO,ib]}),l=Tv("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(l,location.origin);if(location.origin===f.origin){const d=fD(f.toString());WC(i,d,()=>d(i.currentUser)),JC(i,g=>d(g))}}const u=CA("auth");return u&&kC(i,`http://${u}`),i}function hD(){var r,n;return(n=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&n!==void 0?n:document}AC({loadJS(r){return new Promise((n,i)=>{const l=document.createElement("script");l.setAttribute("src",r),l.onload=n,l.onerror=u=>{const f=ln("internal-error");f.customData=u,i(f)},l.type="text/javascript",l.charset="UTF-8",hD().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oD("Browser");var pD="firebase",mD="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ha(pD,mD,"app");const gD={apiKey:"AIzaSyD_example_key_replace_this",authDomain:"shopeasy-demo.firebaseapp.com",projectId:"shopeasy-demo",storageBucket:"shopeasy-demo.appspot.com",messagingSenderId:"123456789012",appId:"1:123456789012:web:a1b2c3d4e5f6a7b8c9d0e1"},yD=Ov(gD),Kl=dD(yD),db=M.createContext(),vD=({children:r})=>{const[n,i]=M.useState(null),[l,u]=M.useState(!0),[f,d]=M.useState(null);M.useEffect(()=>{if(f){const S=setTimeout(()=>d(null),5e3);return()=>clearTimeout(S)}},[f]),M.useEffect(()=>eO(Kl,T=>{i(T),u(!1)}),[]);const b={currentUser:n,loading:l,error:f,signup:async(S,T)=>{try{d(null),await QC(Kl,S,T)}catch(C){throw console.error("Signup error:",C.message),d(C.message),C}},login:async(S,T)=>{try{d(null),await ZC(Kl,S,T)}catch(C){throw console.error("Login error:",C.message),d(C.message),C}},logout:async()=>{try{await tO(Kl)}catch(S){console.error("Logout error:",S.message),d(S.message)}}};return v.jsx(db.Provider,{value:b,children:r})},Pd=()=>{const r=M.useContext(db);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},bD=()=>{const{cart:r,totalItems:n,totalPrice:i,clearCart:l}=qo(),{currentUser:u}=Pd(),f=Co(),[d,g]=M.useState({firstName:"",lastName:"",email:(u==null?void 0:u.email)||"",address:"",city:"",state:"",zipCode:"",country:"United States",paymentMethod:"credit",cardNumber:"",cardName:"",cardExpiry:"",cardCvv:""}),[h,m]=M.useState({}),[b,S]=M.useState(!1),[T,C]=M.useState(""),_=Y=>{const{name:Z,value:X}=Y.target;g({...d,[Z]:X}),h[Z]&&m({...h,[Z]:null})},k=()=>{const Y={};return["firstName","lastName","email","address","city","state","zipCode","country"].forEach(X=>{d[X].trim()||(Y[X]="This field is required")}),d.email&&!/\S+@\S+\.\S+/.test(d.email)&&(Y.email="Please enter a valid email address"),d.paymentMethod==="credit"&&(d.cardNumber.trim()?/^\d{16}$/.test(d.cardNumber.replace(/\s/g,""))||(Y.cardNumber="Please enter a valid 16-digit card number"):Y.cardNumber="Card number is required",d.cardName.trim()||(Y.cardName="Name on card is required"),d.cardExpiry.trim()?/^\d{2}\/\d{2}$/.test(d.cardExpiry)||(Y.cardExpiry="Please use MM/YY format"):Y.cardExpiry="Expiry date is required",d.cardCvv.trim()?/^\d{3,4}$/.test(d.cardCvv)||(Y.cardCvv="Please enter a valid CVV"):Y.cardCvv="CVV is required"),m(Y),Object.keys(Y).length===0},j=Y=>{if(Y.preventDefault(),k()){const Z=Math.floor(1e8+Math.random()*9e8).toString();C(Z),S(!0),l()}};if(r.length===0&&!b)return v.jsx(Nf,{children:v.jsxs(HD,{children:[v.jsx("h2",{children:"Your cart is empty"}),v.jsx("p",{children:"You need to add items to your cart before checking out."}),v.jsx(i0,{onClick:()=>f("/"),children:"Continue Shopping"})]})});if(b)return v.jsx(Nf,{children:v.jsxs(PD,{children:[v.jsx(qD,{children:"✓"}),v.jsx("h2",{children:"Order Placed Successfully!"}),v.jsxs("p",{children:["Your order #",T," has been placed."]}),v.jsxs("p",{children:["We've sent a confirmation email to ",d.email,"."]}),v.jsx(i0,{onClick:()=>f("/"),children:"Continue Shopping"})]})});const L=i,G=L*.1,Q=L+G+0;return v.jsxs(Nf,{children:[v.jsx(SD,{children:"Checkout"}),v.jsxs(ED,{children:[v.jsxs(_D,{onSubmit:j,children:[v.jsxs(Mf,{children:[v.jsx(Uf,{children:"Contact Information"}),v.jsxs(Ql,{children:[v.jsxs(Bt,{children:[v.jsx(Ht,{children:"First Name"}),v.jsx($t,{type:"text",name:"firstName",value:d.firstName,onChange:_,error:h.firstName}),h.firstName&&v.jsx(Pt,{children:h.firstName})]}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Last Name"}),v.jsx($t,{type:"text",name:"lastName",value:d.lastName,onChange:_,error:h.lastName}),h.lastName&&v.jsx(Pt,{children:h.lastName})]})]}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Email"}),v.jsx($t,{type:"email",name:"email",value:d.email,onChange:_,error:h.email}),h.email&&v.jsx(Pt,{children:h.email})]})]}),v.jsxs(Mf,{children:[v.jsx(Uf,{children:"Shipping Address"}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Street Address"}),v.jsx($t,{type:"text",name:"address",value:d.address,onChange:_,error:h.address}),h.address&&v.jsx(Pt,{children:h.address})]}),v.jsxs(Ql,{children:[v.jsxs(Bt,{children:[v.jsx(Ht,{children:"City"}),v.jsx($t,{type:"text",name:"city",value:d.city,onChange:_,error:h.city}),h.city&&v.jsx(Pt,{children:h.city})]}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"State"}),v.jsx($t,{type:"text",name:"state",value:d.state,onChange:_,error:h.state}),h.state&&v.jsx(Pt,{children:h.state})]})]}),v.jsxs(Ql,{children:[v.jsxs(Bt,{children:[v.jsx(Ht,{children:"ZIP Code"}),v.jsx($t,{type:"text",name:"zipCode",value:d.zipCode,onChange:_,error:h.zipCode}),h.zipCode&&v.jsx(Pt,{children:h.zipCode})]}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Country"}),v.jsxs(wD,{name:"country",value:d.country,onChange:_,error:h.country,children:[v.jsx("option",{value:"United States",children:"United States"}),v.jsx("option",{value:"Canada",children:"Canada"}),v.jsx("option",{value:"Mexico",children:"Mexico"})]}),h.country&&v.jsx(Pt,{children:h.country})]})]})]}),v.jsxs(Mf,{children:[v.jsx(Uf,{children:"Payment Method"}),v.jsxs(TD,{children:[v.jsxs(a0,{children:[v.jsx("input",{type:"radio",id:"credit",name:"paymentMethod",value:"credit",checked:d.paymentMethod==="credit",onChange:_}),v.jsx("label",{htmlFor:"credit",children:"Credit Card"})]}),v.jsxs(a0,{children:[v.jsx("input",{type:"radio",id:"paypal",name:"paymentMethod",value:"paypal",checked:d.paymentMethod==="paypal",onChange:_}),v.jsx("label",{htmlFor:"paypal",children:"PayPal"})]})]}),d.paymentMethod==="credit"&&v.jsxs(xD,{children:[v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Card Number"}),v.jsx($t,{type:"text",name:"cardNumber",value:d.cardNumber,onChange:_,placeholder:"1234 5678 9012 3456",error:h.cardNumber}),h.cardNumber&&v.jsx(Pt,{children:h.cardNumber})]}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Name on Card"}),v.jsx($t,{type:"text",name:"cardName",value:d.cardName,onChange:_,error:h.cardName}),h.cardName&&v.jsx(Pt,{children:h.cardName})]}),v.jsxs(Ql,{children:[v.jsxs(Bt,{children:[v.jsx(Ht,{children:"Expiry Date"}),v.jsx($t,{type:"text",name:"cardExpiry",value:d.cardExpiry,onChange:_,placeholder:"MM/YY",error:h.cardExpiry}),h.cardExpiry&&v.jsx(Pt,{children:h.cardExpiry})]}),v.jsxs(Bt,{children:[v.jsx(Ht,{children:"CVV"}),v.jsx($t,{type:"text",name:"cardCvv",value:d.cardCvv,onChange:_,placeholder:"123",error:h.cardCvv}),h.cardCvv&&v.jsx(Pt,{children:h.cardCvv})]})]})]}),d.paymentMethod==="paypal"&&v.jsx(AD,{children:v.jsx("p",{children:"You will be redirected to PayPal to complete your payment."})})]}),v.jsx(RD,{type:"submit",children:"Place Order"})]}),v.jsxs(CD,{children:[v.jsx(OD,{children:"Order Summary"}),v.jsx(DD,{children:r.map(Y=>v.jsxs(ND,{children:[v.jsxs(MD,{children:[v.jsxs(UD,{children:[Y.quantity,"x"]}),v.jsx(jD,{children:Y.title})]}),v.jsxs(LD,{children:["$",(Y.price*Y.quantity).toFixed(2)]})]},Y.id))}),v.jsxs(kD,{children:[v.jsxs(jf,{children:[v.jsx(Lf,{children:"Subtotal"}),v.jsxs(kf,{children:["$",L.toFixed(2)]})]}),v.jsxs(jf,{children:[v.jsx(Lf,{children:"Shipping"}),v.jsx(kf,{children:"Free"})]}),v.jsxs(jf,{children:[v.jsx(Lf,{children:"Tax (10%)"}),v.jsxs(kf,{children:["$",G.toFixed(2)]})]}),v.jsxs(zD,{children:[v.jsx(ID,{children:"Total"}),v.jsxs(BD,{children:["$",Q.toFixed(2)]})]})]})]})]})]})},Nf=N.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`,SD=N.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,ED=N.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_D=N.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Mf=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`,Uf=N.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`,Ql=N.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Bt=N.div`
  margin-bottom: 1rem;
`,Ht=N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,$t=N.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${r=>r.error?"#e53935":"#ddd"};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${r=>r.error?"#e53935":"#ff4500"};
  }
`,wD=N.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${r=>r.error?"#e53935":"#ddd"};
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${r=>r.error?"#e53935":"#ff4500"};
  }
`,Pt=N.p`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,TD=N.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,a0=N.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  input {
    cursor: pointer;
  }
  
  label {
    cursor: pointer;
  }
`,xD=N.div``,AD=N.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  
  p {
    color: #555;
  }
`,RD=N.button`
  padding: 1rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`,CD=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
`,OD=N.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`,DD=N.div`
  margin-bottom: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
`,ND=N.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`,MD=N.div`
  display: flex;
  gap: 0.5rem;
`,UD=N.span`
  color: #777;
`,jD=N.span`
  // Limit to 1 line with ellipsis
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`,LD=N.span`
  font-weight: 500;
`,kD=N.div`
  border-top: 1px solid #eee;
  padding-top: 1rem;
`,jf=N.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`,Lf=N.span`
  color: #555;
`,kf=N.span`
  font-weight: 500;
`,zD=N.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`,ID=N.span`
  font-weight: 600;
  font-size: 1.1rem;
`,BD=N.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #ff4500;
`,HD=N.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #777;
    margin-bottom: 2rem;
  }
`,PD=N.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #555;
    margin-bottom: 0.5rem;
  }
`,qD=N.div`
  width: 60px;
  height: 60px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
`,i0=N.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #e53935;
  }
`,VD=()=>{const[r,n]=M.useState(!0),[i,l]=M.useState(""),[u,f]=M.useState(""),[d,g]=M.useState(""),[h,m]=M.useState(""),[b,S]=M.useState(!1),{login:T,signup:C,error:_}=Pd(),k=Co(),j=async L=>{if(L.preventDefault(),m(""),!i||!u){m("Please fill in all fields");return}if(!r&&u!==d){m("Passwords do not match");return}try{S(!0),r?(await T(i,u),k("/")):(await C(i,u),k("/"))}catch(G){console.log("Auth error:",G)}finally{S(!1)}};return v.jsx(GD,{children:v.jsxs(YD,{onSubmit:j,children:[v.jsx($D,{children:r?"Login":"Create Account"}),(h||_)&&v.jsx(XD,{children:h||_}),v.jsxs(zf,{children:[v.jsx(If,{children:"Email"}),v.jsx(Bf,{type:"email",value:i,onChange:L=>l(L.target.value),required:!0})]}),v.jsxs(zf,{children:[v.jsx(If,{children:"Password"}),v.jsx(Bf,{type:"password",value:u,onChange:L=>f(L.target.value),required:!0})]}),!r&&v.jsxs(zf,{children:[v.jsx(If,{children:"Confirm Password"}),v.jsx(Bf,{type:"password",value:d,onChange:L=>g(L.target.value),required:!0})]}),v.jsx(FD,{type:"submit",disabled:b,children:b?"Processing...":r?"Login":"Create Account"}),v.jsxs(KD,{children:[r?"Don't have an account? ":"Already have an account? ",v.jsx(QD,{type:"button",onClick:()=>n(!r),disabled:b,children:r?"Sign Up":"Login"})]}),v.jsx(ZD,{children:v.jsx(dn,{to:"/checkout",children:"Continue as Guest"})})]})})},GD=N.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 0 1rem;
`,YD=N.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`,$D=N.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`,XD=N.div`
  background-color: #ffebee;
  color: #e53935;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`,zf=N.div`
  margin-bottom: 1.5rem;
`,If=N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,Bf=N.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`,FD=N.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #e53935;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,KD=N.div`
  text-align: center;
  margin-bottom: 1rem;
`,QD=N.button`
  background: none;
  border: none;
  color: #ff4500;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`,ZD=N.div`
  text-align: center;
  
  a {
    color: #555;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,JD=()=>v.jsx(WD,{children:v.jsxs(eN,{children:[v.jsx(tN,{children:"404"}),v.jsx(nN,{children:"Page Not Found"}),v.jsx(rN,{children:"The page you are looking for doesn't exist or has been moved."}),v.jsx(aN,{to:"/",children:"Back to Home"})]})}),WD=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
`,eN=N.div`
  text-align: center;
  max-width: 500px;
`,tN=N.h1`
  font-size: 6rem;
  font-weight: 700;
  color: #ff4500;
  margin: 0;
`,nN=N.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,rN=N.p`
  color: #666;
  margin-bottom: 2rem;
`,aN=N(dn)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`,iN=()=>{const{currentUser:r,logout:n}=Pd(),i=async l=>{l.preventDefault();try{await n()}catch(u){console.log("logout failed:",u)}};return v.jsx(sN,{children:v.jsxs(lN,{children:[v.jsx(oN,{children:v.jsx(dn,{to:"/",children:v.jsx(uN,{children:"ShopEasy"})})}),v.jsxs(cN,{children:[v.jsx(Hf,{to:"/",children:"Home"}),v.jsx(Hf,{to:"/cart",children:"Cart"}),r?v.jsx(fN,{onClick:i,children:"Logout"}):v.jsx(Hf,{to:"/login",children:"Login"})]})]})})},sN=N.nav`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`,lN=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,oN=N.div`
  font-size: 1.5rem;
  font-weight: 700;
`,uN=N.span`
  color: #ff4500;
`,cN=N.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,Hf=N(dn)`
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: #ff4500;
  }
`,fN=N.button`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #ff4500;
  }
`,dN=()=>{const r=new Date().getFullYear();return v.jsxs(hN,{children:[v.jsxs(pN,{children:[v.jsxs(Pf,{children:[v.jsx(qf,{children:"ShopEasy"}),v.jsx(Zl,{children:"Your one-stop shop for all your needs."})]}),v.jsxs(Pf,{children:[v.jsx(qf,{children:"Quick Links"}),v.jsx(Vf,{href:"/",children:"Home"}),v.jsx(Vf,{href:"/cart",children:"Cart"}),v.jsx(Vf,{href:"/login",children:"Account"})]}),v.jsxs(Pf,{children:[v.jsx(qf,{children:"Contact"}),v.jsx(Zl,{children:"support@shopeasy.example.com"}),v.jsx(Zl,{children:"+1 (555) 123-4567"})]})]}),v.jsx(mN,{children:v.jsxs(Zl,{children:["© ",r," ShopEasy. All rights reserved."]})})]})},hN=N.footer`
  background-color: #222;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 3rem;
`,pN=N.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`,Pf=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,qf=N.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`,Zl=N.p`
  color: #ccc;
  font-size: 0.9rem;
  margin: 0.25rem 0;
`,Vf=N.a`
  color: #ccc;
  font-size: 0.9rem;
  text-decoration: none;
  margin: 0.25rem 0;
  transition: color 0.2s;
  
  &:hover {
    color: #ff4500;
  }
`,mN=N.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid #444;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0;
  }
`;function gN(){const[r,n]=M.useState(!0);return M.useEffect(()=>{const i=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(i)},[]),r?v.jsx(bN,{children:"Loading..."}):v.jsx(vD,{children:v.jsx(KT,{children:v.jsxs(yN,{children:[v.jsx(iN,{}),v.jsx(vN,{children:v.jsxs(k1,{children:[v.jsx(Hr,{path:"/",element:v.jsx(dx,{})}),v.jsx(Hr,{path:"/product/:id",element:v.jsx(_x,{})}),v.jsx(Hr,{path:"/cart",element:v.jsx(Hx,{})}),v.jsx(Hr,{path:"/checkout",element:v.jsx(bD,{})}),v.jsx(Hr,{path:"/login",element:v.jsx(VD,{})}),v.jsx(Hr,{path:"*",element:v.jsx(JD,{})})]})}),v.jsx(dN,{})]})})})}const yN=N.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,vN=N.main`
  flex: 1;
  padding-top: 80px; // for fixed navbar
`,bN=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  font-weight: 500;
`;YE.createRoot(document.getElementById("root")).render(v.jsx(i_,{children:v.jsx(gN,{})}));
