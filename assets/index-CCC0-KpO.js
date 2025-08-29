(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wa={exports:{}},el={},Ha={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Io=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Io&&e[Io]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ya=Object.assign,Ka={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Ka,this.updater=n||Qa}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xa(){}Xa.prototype=ln.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=Ka,this.updater=n||Qa}var $i=Ui.prototype=new Xa;$i.constructor=Ui;Ya($i,ln.prototype);$i.isPureReactComponent=!0;var Do=Array.isArray,Ga=Object.prototype.hasOwnProperty,Ai={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ga.call(t,r)&&!Za.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Ai.current}}function mc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oo=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+xl(o,0):r,Do(l)?(n="",e!=null&&(n=e.replace(Oo,"$&/")+"/"),yr(l,t,n,"",function(d){return d})):l!=null&&(Bi(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Oo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Do(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+xl(i,a);o+=yr(i,t,n,s,l)}else if(s=pc(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+xl(i,a++),o+=yr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},vc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Ai};function Ja(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=ln;T.Fragment=lc;T.Profiler=oc;T.PureComponent=Ui;T.StrictMode=ic;T.Suspense=cc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;T.act=Ja;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ya({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ai.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ga.call(t,s)&&!Za.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};T.createElement=ba;T.createFactory=function(e){var t=ba.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:uc,render:e}};T.isValidElement=Bi;T.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:gc}};T.memo=function(e,t){return{$$typeof:dc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};T.unstable_act=Ja;T.useCallback=function(e,t){return se.current.useCallback(e,t)};T.useContext=function(e){return se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return se.current.useDeferredValue(e)};T.useEffect=function(e,t){return se.current.useEffect(e,t)};T.useId=function(){return se.current.useId()};T.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return se.current.useMemo(e,t)};T.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};T.useRef=function(e){return se.current.useRef(e)};T.useState=function(e){return se.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return se.current.useTransition()};T.version="18.3.1";Ha.exports=T;var Y=Ha.exports;const yc=nc(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=Y,wc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,jc=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function qa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Sc.call(t,r)&&!Ec.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wc,type:e,key:i,ref:o,props:l,_owner:jc.current}}el.Fragment=kc;el.jsx=qa;el.jsxs=qa;Wa.exports=el;var f=Wa.exports,Ql={},es={exports:{}},xe={},ts={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var P=E.length;E.push(_);e:for(;0<P;){var H=P-1>>>1,Z=E[H];if(0<l(Z,_))E[H]=_,E[P]=Z,P=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],P=E.pop();if(P!==_){E[0]=P;e:for(var H=0,Z=E.length,qn=Z>>>1;H<qn;){var gt=2*(H+1)-1,yl=E[gt],vt=gt+1,er=E[vt];if(0>l(yl,P))vt<Z&&0>l(er,yl)?(E[H]=er,E[vt]=P,H=vt):(E[H]=yl,E[gt]=P,H=gt);else if(vt<Z&&0>l(er,P))E[H]=er,E[vt]=P,H=vt;else break e}}return _}function l(E,_){var P=E.sortIndex-_.sortIndex;return P!==0?P:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],d=[],h=1,g=null,m=3,w=!1,k=!1,v=!1,L=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=E)r(d),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(d)}}function y(E){if(v=!1,p(E),!k)if(n(s)!==null)k=!0,gl(j);else{var _=n(d);_!==null&&vl(y,_.startTime-E)}}function j(E,_){k=!1,v&&(v=!1,c(z),z=-1),w=!0;var P=m;try{for(p(_),g=n(s);g!==null&&(!(g.expirationTime>_)||E&&!ze());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var Z=H(g.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(s)&&r(s),p(_)}else r(s);g=n(s)}if(g!==null)var qn=!0;else{var gt=n(d);gt!==null&&vl(y,gt.startTime-_),qn=!1}return qn}finally{g=null,m=P,w=!1}}var C=!1,N=null,z=-1,W=5,M=-1;function ze(){return!(e.unstable_now()-M<W)}function sn(){if(N!==null){var E=e.unstable_now();M=E;var _=!0;try{_=N(!0,E)}finally{_?un():(C=!1,N=null)}}else C=!1}var un;if(typeof u=="function")un=function(){u(sn)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,tc=Ro.port2;Ro.port1.onmessage=sn,un=function(){tc.postMessage(null)}}else un=function(){L(sn,0)};function gl(E){N=E,C||(C=!0,un())}function vl(E,_){z=L(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,gl(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return E()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=m;m=E;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(E,_,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,E={id:h++,callback:_,priorityLevel:E,startTime:P,expirationTime:Z,sortIndex:-1},P>H?(E.sortIndex=P,t(d,E),n(s)===null&&E===n(d)&&(v?(c(z),z=-1):v=!0,vl(y,P-H))):(E.sortIndex=Z,t(s,E),k||w||(k=!0,gl(j))),E},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(E){var _=m;return function(){var P=m;m=_;try{return E.apply(this,arguments)}finally{m=P}}}})(ns);ts.exports=ns;var Cc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=Y,ye=Cc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,Ln={};function Tt(e,t){bt(e,t),bt(e+"Capture",t)}function bt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Uo={};function _c(e){return Yl.call(Uo,e)?!0:Yl.call(Fo,e)?!1:zc.test(e)?Uo[e]=!0:(Fo[e]=!0,!1)}function Pc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tc(e,t,n,r){if(t===null||typeof t>"u"||Pc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vi=/[\-:]([a-z])/g;function Wi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vi,Wi);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vi,Wi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vi,Wi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tc(t,n,l,r)&&(n=null),r||l===null?_c(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),ls=Symbol.for("react.provider"),is=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Ki=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),$o=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,wl;function yn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var kl=!1;function Sl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Lc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case Rt:return"Portal";case Kl:return"Profiler";case Qi:return"StrictMode";case Xl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case is:return(e.displayName||"Context")+".Consumer";case ls:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ki:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rc(e){var t=as(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Rc(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=as(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ao(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function us(e,t){t=t.checked,t!=null&&Hi(e,"checked",t,!1)}function Jl(e,t){us(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(xn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function cs(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ic=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Ic.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Dc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(Dc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Yt=null,Kt=null;function Ho(e){if(e=bn(e)){if(typeof ii!="function")throw Error(x(280));var t=e.stateNode;t&&(t=il(t),ii(e.stateNode,e.type,t))}}function hs(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function gs(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function vs(e,t){return e(t)}function ys(){}var jl=!1;function xs(e,t,n){if(jl)return e(t,n);jl=!0;try{return vs(e,t,n)}finally{jl=!1,(Yt!==null||Kt!==null)&&(ys(),gs())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var oi=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{oi=!1}function Oc(e,t,n,r,l,i,o,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var jn=!1,Lr=null,Mr=!1,ai=null,Fc={onError:function(e){jn=!0,Lr=e}};function Uc(e,t,n,r,l,i,o,a,s){jn=!1,Lr=null,Oc.apply(Fc,arguments)}function $c(e,t,n,r,l,i,o,a,s){if(Uc.apply(this,arguments),jn){if(jn){var d=Lr;jn=!1,Lr=null}else throw Error(x(198));Mr||(Mr=!0,ai=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Lt(e)!==e)throw Error(x(188))}function Ac(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Qo(l),e;if(i===r)return Qo(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function ks(e){return e=Ac(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var js=ye.unstable_scheduleCallback,Yo=ye.unstable_cancelCallback,Bc=ye.unstable_shouldYield,Vc=ye.unstable_requestPaint,Q=ye.unstable_now,Wc=ye.unstable_getCurrentPriorityLevel,Gi=ye.unstable_ImmediatePriority,Es=ye.unstable_UserBlockingPriority,Rr=ye.unstable_NormalPriority,Hc=ye.unstable_LowPriority,Cs=ye.unstable_IdlePriority,tl=null,Ue=null;function Qc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Xc,Yc=Math.log,Kc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Yc(e)/Kc|0)|0}var ir=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=wn(a):(i&=o,i!==0&&(r=wn(i)))}else o=n&~l,o!==0?r=wn(o):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function Gc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=Gc(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function bc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function zs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _s,bi,Ps,Ts,Ls,ui=!1,ar=[],rt=null,lt=null,it=null,In=new Map,Dn=new Map,qe=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function fn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=bn(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qc(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return it=fn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return In.set(i,fn(In.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Dn.set(i,fn(Dn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ms(e){var t=wt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=ws(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){Ps(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=bn(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){wr(e)&&n.delete(t)}function ed(){ui=!1,rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),it!==null&&wr(it)&&(it=null),In.forEach(Xo),Dn.forEach(Xo)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ui||(ui=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ed)))}function On(e){function t(l){return pn(l,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),In.forEach(t),Dn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)Ms(n),n.blockedOn===null&&qe.shift()}var Xt=Ge.ReactCurrentBatchConfig,Dr=!0;function td(e,t,n,r){var l=I,i=Xt.transition;Xt.transition=null;try{I=1,Ji(e,t,n,r)}finally{I=l,Xt.transition=i}}function nd(e,t,n,r){var l=I,i=Xt.transition;Xt.transition=null;try{I=4,Ji(e,t,n,r)}finally{I=l,Xt.transition=i}}function Ji(e,t,n,r){if(Dr){var l=ci(e,t,n,r);if(l===null)Il(e,t,r,Or,n),Ko(e,r);else if(qc(l,e,t,n,r))r.stopPropagation();else if(Ko(e,r),t&4&&-1<Jc.indexOf(e)){for(;l!==null;){var i=bn(l);if(i!==null&&_s(i),i=ci(e,t,n,r),i===null&&Il(e,t,r,Or,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Or=null;function ci(e,t,n,r){if(Or=null,e=Xi(r),e=wt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ws(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Gi:return 1;case Es:return 4;case Rr:case Hc:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var tt=null,qi=null,kr=null;function Is(){if(kr)return kr;var e,t=qi,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Go(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:Go,this.isPropagationStopped=Go,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=we(on),Zn=B({},on,{view:0,detail:0}),rd=we(Zn),Cl,Nl,mn,nl=B({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Cl=e.screenX-mn.screenX,Nl=e.screenY-mn.screenY):Nl=Cl=0,mn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),Zo=we(nl),ld=B({},nl,{dataTransfer:0}),id=we(ld),od=B({},Zn,{relatedTarget:0}),zl=we(od),ad=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=we(ad),ud=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=we(ud),dd=B({},on,{data:0}),bo=we(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function to(){return hd}var gd=B({},Zn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=we(gd),yd=B({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=we(yd),xd=B({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=we(xd),kd=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=we(kd),jd=B({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=we(jd),Cd=[9,13,27,32],no=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var Nd=Qe&&"TextEvent"in window&&!En,Ds=Qe&&(!no||En&&8<En&&11>=En),qo=" ",ea=!1;function Os(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function zd(e,t){switch(e){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(ea=!0,qo);case"textInput":return e=t.data,e===qo&&ea?null:e;default:return null}}function _d(e,t){if(Dt)return e==="compositionend"||!no&&Os(e,t)?(e=Is(),kr=qi=tt=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ds&&t.locale!=="ko"?null:t.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pd[e.type]:t==="textarea"}function Us(e,t,n,r){hs(r),t=Fr(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,Fn=null;function Td(e){Gs(e,0)}function rl(e){var t=Ut(e);if(ss(t))return e}function Ld(e,t){if(e==="change")return t}var $s=!1;if(Qe){var _l;if(Qe){var Pl="oninput"in document;if(!Pl){var na=document.createElement("div");na.setAttribute("oninput","return;"),Pl=typeof na.oninput=="function"}_l=Pl}else _l=!1;$s=_l&&(!document.documentMode||9<document.documentMode)}function ra(){Cn&&(Cn.detachEvent("onpropertychange",As),Fn=Cn=null)}function As(e){if(e.propertyName==="value"&&rl(Fn)){var t=[];Us(t,Fn,e,Xi(e)),xs(Td,t)}}function Md(e,t,n){e==="focusin"?(ra(),Cn=t,Fn=n,Cn.attachEvent("onpropertychange",As)):e==="focusout"&&ra()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Fn)}function Id(e,t){if(e==="click")return rl(t)}function Dd(e,t){if(e==="input"||e==="change")return rl(t)}function Od(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Od;function Un(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=la(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=la(n)}}function Bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fd(e){var t=Vs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bs(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ia(n,i);var o=ia(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=Qe&&"documentMode"in document&&11>=document.documentMode,Ot=null,di=null,Nn=null,fi=!1;function oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fi||Ot==null||Ot!==Tr(r)||(r=Ot,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&Un(Nn,r)||(Nn=r,r=Fr(di,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Tl={},Ws={};Qe&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ll(e){if(Tl[e])return Tl[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ws)return Tl[e]=t[n];return e}var Hs=ll("animationend"),Qs=ll("animationiteration"),Ys=ll("animationstart"),Ks=ll("transitionend"),Xs=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Xs.set(e,t),Tt(t,[e])}for(var Ll=0;Ll<aa.length;Ll++){var Ml=aa[Ll],$d=Ml.toLowerCase(),Ad=Ml[0].toUpperCase()+Ml.slice(1);pt($d,"on"+Ad)}pt(Hs,"onAnimationEnd");pt(Qs,"onAnimationIteration");pt(Ys,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ks,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$c(r,t,void 0,e),e.currentTarget=null}function Gs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;sa(l,a,d),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,d=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;sa(l,a,d),i=s}}}if(Mr)throw e=ai,Mr=!1,ai=null,e}function O(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(Zs(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),Zs(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[cr]){e[cr]=!0,rs.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Rl("selectionchange",!1,t))}}function Zs(e,t,n,r){switch(Rs(t)){case 1:var l=td;break;case 4:l=nd;break;default:l=Ji}n=l.bind(null,t,n,e),l=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=wt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}xs(function(){var d=i,h=Xi(n),g=[];e:{var m=Xs.get(e);if(m!==void 0){var w=eo,k=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":w=vd;break;case"focusin":k="focus",w=zl;break;case"focusout":k="blur",w=zl;break;case"beforeblur":case"afterblur":w=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wd;break;case Hs:case Qs:case Ys:w=sd;break;case Ks:w=Sd;break;case"scroll":w=rd;break;case"wheel":w=Ed;break;case"copy":case"cut":case"paste":w=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Jo}var v=(t&4)!==0,L=!v&&e==="scroll",c=v?m!==null?m+"Capture":null:m;v=[];for(var u=d,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,c!==null&&(y=Rn(u,c),y!=null&&v.push(An(u,y,p)))),L)break;u=u.return}0<v.length&&(m=new w(m,k,null,n,h),g.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==li&&(k=n.relatedTarget||n.fromElement)&&(wt(k)||k[Ye]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?wt(k):null,k!==null&&(L=Lt(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(v=Zo,y="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Jo,y="onPointerLeave",c="onPointerEnter",u="pointer"),L=w==null?m:Ut(w),p=k==null?m:Ut(k),m=new v(y,u+"leave",w,n,h),m.target=L,m.relatedTarget=p,y=null,wt(h)===d&&(v=new v(c,u+"enter",k,n,h),v.target=p,v.relatedTarget=L,y=v),L=y,w&&k)t:{for(v=w,c=k,u=0,p=v;p;p=Mt(p))u++;for(p=0,y=c;y;y=Mt(y))p++;for(;0<u-p;)v=Mt(v),u--;for(;0<p-u;)c=Mt(c),p--;for(;u--;){if(v===c||c!==null&&v===c.alternate)break t;v=Mt(v),c=Mt(c)}v=null}else v=null;w!==null&&ua(g,m,w,v,!1),k!==null&&L!==null&&ua(g,L,k,v,!0)}}e:{if(m=d?Ut(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=Ld;else if(ta(m))if($s)j=Dd;else{j=Rd;var C=Md}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Id);if(j&&(j=j(e,d))){Us(g,j,n,h);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ql(m,"number",m.value)}switch(C=d?Ut(d):window,e){case"focusin":(ta(C)||C.contentEditable==="true")&&(Ot=C,di=d,Nn=null);break;case"focusout":Nn=di=Ot=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,oa(g,n,h);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":oa(g,n,h)}var N;if(no)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Dt?Os(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ds&&n.locale!=="ko"&&(Dt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Dt&&(N=Is()):(tt=h,qi="value"in tt?tt.value:tt.textContent,Dt=!0)),C=Fr(d,z),0<C.length&&(z=new bo(z,e,null,n,h),g.push({event:z,listeners:C}),N?z.data=N:(N=Fs(n),N!==null&&(z.data=N)))),(N=Nd?zd(e,n):_d(e,n))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(h=new bo("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=N))}Gs(g,t)})}function An(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift(An(e,i,l)),i=Rn(e,t),i!=null&&r.push(An(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,l?(s=Rn(n,i),s!=null&&o.unshift(An(n,s,a))):l||(s=Rn(n,i),s!=null&&o.push(An(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Vd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Wd,"")}function dr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(x(425))}function Ur(){}var pi=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(e){return da.resolve(null).then(e).catch(Yd)}:gi;function Yd(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);On(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Bn="__reactProps$"+an,Ye="__reactContainer$"+an,vi="__reactEvents$"+an,Kd="__reactListeners$"+an,Xd="__reactHandles$"+an;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fa(e);e!==null;){if(n=e[Fe])return n;e=fa(e)}return t}e=n,n=e.parentNode}return null}function bn(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function il(e){return e[Bn]||null}var yi=[],$t=-1;function mt(e){return{current:e}}function F(e){0>$t||(e.current=yi[$t],yi[$t]=null,$t--)}function D(e,t){$t++,yi[$t]=e.current,e.current=t}var ft={},ie=mt(ft),fe=mt(!1),Ct=ft;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function $r(){F(fe),F(ie)}function pa(e,t,n){if(ie.current!==ft)throw Error(x(168));D(ie,t),D(fe,n)}function bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Mc(e)||"Unknown",l));return B({},n,r)}function Ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Ct=ie.current,D(ie,e),D(fe,fe.current),!0}function ma(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=bs(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,F(fe),F(ie),D(ie,e)):F(fe),D(fe,n)}var Be=null,ol=!1,Ol=!1;function Js(e){Be===null?Be=[e]:Be.push(e)}function Gd(e){ol=!0,Js(e)}function ht(){if(!Ol&&Be!==null){Ol=!0;var e=0,t=I;try{var n=Be;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,ol=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),js(Gi,ht),l}finally{I=t,Ol=!1}}return null}var At=[],Bt=0,Br=null,Vr=0,ke=[],Se=0,Nt=null,Ve=1,We="";function yt(e,t){At[Bt++]=Vr,At[Bt++]=Br,Br=e,Vr=t}function qs(e,t,n){ke[Se++]=Ve,ke[Se++]=We,ke[Se++]=Nt,Nt=e;var r=Ve;e=We;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Me(t)+l|n<<l|r,We=i+e}else Ve=1<<i|n<<l|r,We=e}function lo(e){e.return!==null&&(yt(e,1),qs(e,1,0))}function io(e){for(;e===Br;)Br=At[--Bt],At[Bt]=null,Vr=At[--Bt],At[Bt]=null;for(;e===Nt;)Nt=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null,Ve=ke[--Se],ke[Se]=null}var ve=null,ge=null,U=!1,Le=null;function eu(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(U){var t=ge;if(t){var n=t;if(!ha(e,t)){if(xi(e))throw Error(x(418));t=ot(n.nextSibling);var r=ve;t&&ha(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,U=!1,ve=e)}}else{if(xi(e))throw Error(x(418));e.flags=e.flags&-4097|2,U=!1,ve=e}}}function ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!U)return ga(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=ge)){if(xi(e))throw tu(),Error(x(418));for(;t;)eu(e,t),t=ot(t.nextSibling)}if(ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?ot(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=ge;e;)e=ot(e.nextSibling)}function qt(){ge=ve=null,U=!1}function oo(e){Le===null?Le=[e]:Le.push(e)}var Zd=Ge.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){var t=e._init;return t(e._payload)}function nu(e){function t(c,u){if(e){var p=c.deletions;p===null?(c.deletions=[u],c.flags|=16):p.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function l(c,u){return c=ct(c,u),c.index=0,c.sibling=null,c}function i(c,u,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<u?(c.flags|=2,u):p):(c.flags|=2,u)):(c.flags|=1048576,u)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,u,p,y){return u===null||u.tag!==6?(u=Wl(p,c.mode,y),u.return=c,u):(u=l(u,p),u.return=c,u)}function s(c,u,p,y){var j=p.type;return j===It?h(c,u,p.props.children,y,p.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===be&&va(j)===u.type)?(y=l(u,p.props),y.ref=hn(c,u,p),y.return=c,y):(y=Pr(p.type,p.key,p.props,null,c.mode,y),y.ref=hn(c,u,p),y.return=c,y)}function d(c,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Hl(p,c.mode,y),u.return=c,u):(u=l(u,p.children||[]),u.return=c,u)}function h(c,u,p,y,j){return u===null||u.tag!==7?(u=Et(p,c.mode,y,j),u.return=c,u):(u=l(u,p),u.return=c,u)}function g(c,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wl(""+u,c.mode,p),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nr:return p=Pr(u.type,u.key,u.props,null,c.mode,p),p.ref=hn(c,null,u),p.return=c,p;case Rt:return u=Hl(u,c.mode,p),u.return=c,u;case be:var y=u._init;return g(c,y(u._payload),p)}if(xn(u)||cn(u))return u=Et(u,c.mode,p,null),u.return=c,u;pr(c,u)}return null}function m(c,u,p,y){var j=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(c,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:return p.key===j?s(c,u,p,y):null;case Rt:return p.key===j?d(c,u,p,y):null;case be:return j=p._init,m(c,u,j(p._payload),y)}if(xn(p)||cn(p))return j!==null?null:h(c,u,p,y,null);pr(c,p)}return null}function w(c,u,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(p)||null,a(u,c,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nr:return c=c.get(y.key===null?p:y.key)||null,s(u,c,y,j);case Rt:return c=c.get(y.key===null?p:y.key)||null,d(u,c,y,j);case be:var C=y._init;return w(c,u,p,C(y._payload),j)}if(xn(y)||cn(y))return c=c.get(p)||null,h(u,c,y,j,null);pr(u,y)}return null}function k(c,u,p,y){for(var j=null,C=null,N=u,z=u=0,W=null;N!==null&&z<p.length;z++){N.index>z?(W=N,N=null):W=N.sibling;var M=m(c,N,p[z],y);if(M===null){N===null&&(N=W);break}e&&N&&M.alternate===null&&t(c,N),u=i(M,u,z),C===null?j=M:C.sibling=M,C=M,N=W}if(z===p.length)return n(c,N),U&&yt(c,z),j;if(N===null){for(;z<p.length;z++)N=g(c,p[z],y),N!==null&&(u=i(N,u,z),C===null?j=N:C.sibling=N,C=N);return U&&yt(c,z),j}for(N=r(c,N);z<p.length;z++)W=w(N,c,z,p[z],y),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?z:W.key),u=i(W,u,z),C===null?j=W:C.sibling=W,C=W);return e&&N.forEach(function(ze){return t(c,ze)}),U&&yt(c,z),j}function v(c,u,p,y){var j=cn(p);if(typeof j!="function")throw Error(x(150));if(p=j.call(p),p==null)throw Error(x(151));for(var C=j=null,N=u,z=u=0,W=null,M=p.next();N!==null&&!M.done;z++,M=p.next()){N.index>z?(W=N,N=null):W=N.sibling;var ze=m(c,N,M.value,y);if(ze===null){N===null&&(N=W);break}e&&N&&ze.alternate===null&&t(c,N),u=i(ze,u,z),C===null?j=ze:C.sibling=ze,C=ze,N=W}if(M.done)return n(c,N),U&&yt(c,z),j;if(N===null){for(;!M.done;z++,M=p.next())M=g(c,M.value,y),M!==null&&(u=i(M,u,z),C===null?j=M:C.sibling=M,C=M);return U&&yt(c,z),j}for(N=r(c,N);!M.done;z++,M=p.next())M=w(N,c,z,M.value,y),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?z:M.key),u=i(M,u,z),C===null?j=M:C.sibling=M,C=M);return e&&N.forEach(function(sn){return t(c,sn)}),U&&yt(c,z),j}function L(c,u,p,y){if(typeof p=="object"&&p!==null&&p.type===It&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:e:{for(var j=p.key,C=u;C!==null;){if(C.key===j){if(j=p.type,j===It){if(C.tag===7){n(c,C.sibling),u=l(C,p.props.children),u.return=c,c=u;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===be&&va(j)===C.type){n(c,C.sibling),u=l(C,p.props),u.ref=hn(c,C,p),u.return=c,c=u;break e}n(c,C);break}else t(c,C);C=C.sibling}p.type===It?(u=Et(p.props.children,c.mode,y,p.key),u.return=c,c=u):(y=Pr(p.type,p.key,p.props,null,c.mode,y),y.ref=hn(c,u,p),y.return=c,c=y)}return o(c);case Rt:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(c,u.sibling),u=l(u,p.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=Hl(p,c.mode,y),u.return=c,c=u}return o(c);case be:return C=p._init,L(c,u,C(p._payload),y)}if(xn(p))return k(c,u,p,y);if(cn(p))return v(c,u,p,y);pr(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(c,u.sibling),u=l(u,p),u.return=c,c=u):(n(c,u),u=Wl(p,c.mode,y),u.return=c,c=u),o(c)):n(c,u)}return L}var en=nu(!0),ru=nu(!1),Wr=mt(null),Hr=null,Vt=null,ao=null;function so(){ao=Vt=Hr=null}function uo(e){var t=Wr.current;F(Wr),e._currentValue=t}function ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Hr=e,ao=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Hr===null)throw Error(x(308));Vt=e,Hr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var kt=null;function co(e){kt===null?kt=[e]:kt.push(e)}function lu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,d=s.next;s.next=null,o===null?i=d:o.next=d,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;o=0,h=d=s=null,a=i;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,v=a;switch(m=t,w=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=B({},g,m);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=w,s=g):h=h.next=w,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(s=g),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);_t|=o,e.lanes=o,e.memoizedState=g}}function xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var Jn={},$e=mt(Jn),Vn=mt(Jn),Wn=mt(Jn);function St(e){if(e===Jn)throw Error(x(174));return e}function po(e,t){switch(D(Wn,t),D(Vn,e),D($e,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}F($e),D($e,t)}function tn(){F($e),F(Vn),F(Wn)}function ou(e){St(Wn.current);var t=St($e.current),n=ti(t,e.type);t!==n&&(D(Vn,e),D($e,n))}function mo(e){Vn.current===e&&(F($e),F(Vn))}var $=mt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function ho(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Er=Ge.ReactCurrentDispatcher,Ul=Ge.ReactCurrentBatchConfig,zt=0,A=null,X=null,b=null,Kr=!1,zn=!1,Hn=0,bd=0;function ne(){throw Error(x(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,l,i){if(zt=i,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?tf:nf,e=n(r,l),zn){i=0;do{if(zn=!1,Hn=0,25<=i)throw Error(x(301));i+=1,b=X=null,t.updateQueue=null,Er.current=rf,e=n(r,l)}while(zn)}if(Er.current=Xr,t=X!==null&&X.next!==null,zt=0,b=X=A=null,Kr=!1,t)throw Error(x(300));return e}function yo(){var e=Hn!==0;return Hn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?A.memoizedState=b=e:b=b.next=e,b}function Ne(){if(X===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=b===null?A.memoizedState:b.next;if(t!==null)b=t,X=e;else{if(e===null)throw Error(x(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},b===null?A.memoizedState=b=e:b=b.next=e}return b}function Qn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,d=i;do{var h=d.lane;if((zt&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=g,o=r):s=s.next=g,A.lanes|=h,_t|=h}d=d.next}while(d!==null&&d!==i);s===null?o=r:s.next=a,Ie(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,A.lanes|=i,_t|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ie(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function au(){}function su(e,t){var n=A,r=Ne(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,xo(du.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,Yn(9,cu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(x(349));zt&30||uu(n,t,l)}return l}function uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,r){t.value=n,t.getSnapshot=r,fu(t)&&pu(e)}function du(e,t,n){return n(function(){fu(t)&&pu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function pu(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function wa(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,A,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return Ne().memoizedState}function Cr(e,t,n,r){var l=Oe();A.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ne();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&go(r,o.deps)){l.memoizedState=Yn(t,n,i,r);return}}A.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function ka(e,t){return Cr(8390656,8,e,t)}function xo(e,t){return al(2048,8,e,t)}function hu(e,t){return al(4,2,e,t)}function gu(e,t){return al(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,vu.bind(null,t,e),n)}function wo(){}function xu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ku(e,t,n){return zt&21?(Ie(n,t)||(n=Ns(),A.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function Jd(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{I=n,Ul.transition=r}}function Su(){return Ne().memoizedState}function qd(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ju(e))Eu(t,n);else if(n=lu(e,t,n,r),n!==null){var l=ae();Re(n,e,r,l),Cu(n,t,r)}}function ef(e,t,n){var r=ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Eu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Ie(a,o)){var s=t.interleaved;s===null?(l.next=l,co(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=lu(e,t,l,r),n!==null&&(l=ae(),Re(n,e,r,l),Cu(n,t,r))}}function ju(e){var t=e.alternate;return e===A||t!==null&&t===A}function Eu(e,t){zn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Xr={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},tf={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qd.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=Jd.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,l=Oe();if(U){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),J===null)throw Error(x(349));zt&30||uu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ka(du.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,cu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Oe(),t=J.identifierPrefix;if(U){var n=We,r=Ve;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:Ce,useCallback:xu,useContext:Ce,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:$l,useRef:mu,useState:function(){return $l(Qn)},useDebugValue:wo,useDeferredValue:function(e){var t=Ne();return ku(t,X.memoizedState,e)},useTransition:function(){var e=$l(Qn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1},rf={readContext:Ce,useCallback:xu,useContext:Ce,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:Al,useRef:mu,useState:function(){return Al(Qn)},useDebugValue:wo,useDeferredValue:function(e){var t=Ne();return X===null?t.memoizedState=e:ku(t,X.memoizedState,e)},useTransition:function(){var e=Al(Qn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),i=He(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Re(t,e,l,r),jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),i=He(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Re(t,e,l,r),jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ut(e),l=He(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Re(t,e,r,n),jr(t,e,r))}};function Sa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function Nu(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=pe(t)?Ct:ie.current,r=t.contextTypes,i=(r=r!=null)?Jt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ja(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function ji(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=pe(t)?Ct:ie.current,l.context=Jt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function zu(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Ii=r),Ei(e,t)},n}function _u(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ei(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ea(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=xf.bind(null,e,t,n),t.then(e,e))}function Ca(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Na(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var of=Ge.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?ru(t,null,n,r):en(t,e.child,n,r)}function za(e,t,n,r,l){n=n.render;var i=t.ref;return Gt(t,l),r=vo(e,t,n,r,i,l),n=yo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&n&&lo(t),t.flags|=1,oe(e,t,r,l),t.child)}function _a(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!_o(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Pu(e,t,i,r,l)):(e=Pr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ci(e,t,n,r,l)}function Tu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Ht,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Ht,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Ht,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Ht,he),he|=r;return oe(e,t,l,n),t.child}function Lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,l){var i=pe(n)?Ct:ie.current;return i=Jt(t,i),Gt(t,l),n=vo(e,t,n,r,i,l),r=yo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&r&&lo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Pa(e,t,n,r,l){if(pe(n)){var i=!0;Ar(t)}else i=!1;if(Gt(t,l),t.stateNode===null)Nr(e,t),Nu(t,n,r),ji(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=pe(n)?Ct:ie.current,d=Jt(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==d)&&ja(t,o,r,d),Je=!1;var m=t.memoizedState;o.state=m,Qr(t,r,o,l),s=t.memoizedState,a!==r||m!==s||fe.current||Je?(typeof h=="function"&&(Si(t,n,h,r),s=t.memoizedState),(a=Je||Sa(t,n,a,r,m,s,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,iu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Pe(t.type,a),o.props=d,g=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=pe(n)?Ct:ie.current,s=Jt(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||m!==s)&&ja(t,o,r,s),Je=!1,m=t.memoizedState,o.state=m,Qr(t,r,o,l);var k=t.memoizedState;a!==g||m!==k||fe.current||Je?(typeof w=="function"&&(Si(t,n,w,r),k=t.memoizedState),(d=Je||Sa(t,n,d,r,m,k,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ni(e,t,n,r,i,l)}function Ni(e,t,n,r,l,i){Lu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ma(t,n,!1),Xe(e,t,i);r=t.stateNode,of.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,a,i)):oe(e,t,a,i),t.memoizedState=r.state,l&&ma(t,n,!0),t.child}function Mu(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),po(e,t.containerInfo)}function Ta(e,t,n,r,l){return qt(),oo(l),t.flags|=256,oe(e,t,n,r),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function _i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D($,l&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=dl(o,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_i(n),t.memoizedState=zi,e):ko(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return af(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=ct(a,i):(i=Et(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?_i(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=zi,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ko(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&oo(r),en(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(x(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=_i(o),t.memoizedState=zi,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=Bl(i,r,void 0),mr(e,t,o,r)}if(a=(o&e.childLanes)!==0,de||a){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Re(r,e,l,-1))}return zo(),r=Bl(Error(x(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ge=ot(l.nextSibling),ve=t,U=!0,Le=null,e!==null&&(ke[Se++]=Ve,ke[Se++]=We,ke[Se++]=Nt,Ve=e.id,We=e.overflow,Nt=t),t=ko(t,r.children),t.flags|=4096,t)}function La(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ki(e.return,t,n)}function Vl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Iu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&La(e,n,t);else if(e.tag===19)La(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Mu(t),qt();break;case 5:ou(t);break;case 1:pe(t.type)&&Ar(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Ru(e,t,n):(D($,$.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);D($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Iu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Tu(e,t,n)}return Xe(e,t,n)}var Du,Pi,Ou,Fu;Du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};Ou=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St($e.current);var i=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ni(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&O("scroll",e),i||a===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Fu=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uf(e,t,n){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&$r(),re(t),null;case 3:return r=t.stateNode,tn(),F(fe),F(ie),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Fi(Le),Le=null))),Pi(e,t),re(t),null;case 5:mo(t);var l=St(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ou(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return re(t),null}if(e=St($e.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ao(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Vo(r,i),O("invalid",r)}ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):Ln.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":rr(r),Bo(r,i,!0);break;case"textarea":rr(r),Wo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Bn]=r,Du(e,t,!1,!1),t.stateNode=e;e:{switch(o=ri(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ao(e,r),l=bl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),O("invalid",e);break;case"textarea":Vo(e,r),l=ei(e,r),O("invalid",e);break;default:l=r}ni(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ms(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Mn(e,s):typeof s=="number"&&Mn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ln.hasOwnProperty(i)?s!=null&&i==="onScroll"&&O("scroll",e):s!=null&&Hi(e,i,s,o))}switch(n){case"input":rr(e),Bo(e,r,!1);break;case"textarea":rr(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Fu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=St(Wn.current),St($e.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return re(t),null;case 13:if(F($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ge!==null&&t.mode&1&&!(t.flags&128))tu(),qt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Fe]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Le!==null&&(Fi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?G===0&&(G=3):zo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),Pi(e,t),e===null&&$n(t.stateNode.containerInfo),re(t),null;case 10:return uo(t.type._context),re(t),null;case 17:return pe(t.type)&&$r(),re(t),null;case 19:if(F($),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yr(e),o!==null){for(t.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>rn&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return re(t),null}else 2*Q()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=$.current,D($,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return No(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function cf(e,t){switch(io(t),t.tag){case 1:return pe(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),F(fe),F(ie),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(F($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F($),null;case 4:return tn(),null;case 10:return uo(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var hr=!1,le=!1,df=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ti(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ma=!1;function ff(e,t){if(pi=Dr,e=Vs(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(a=o+l),g!==i||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++d===l&&(a=o),m===i&&++h===r&&(s=o),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Dr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,L=k.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pe(t.type,v),L);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Ma,Ma=!1,k}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ti(t,n,i)}l=l.next}while(l!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Bn],delete t[vi],delete t[Kd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function Ra(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var q=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Au(e,t,n),n=n.sibling}function Au(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:le||Wt(n,t);case 6:var r=q,l=Te;q=null,Ze(e,t,n),q=r,Te=l,q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),On(e)):Dl(q,n.stateNode));break;case 4:r=q,l=Te,q=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),q=r,Te=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ti(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!le&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ia(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var l=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Te=!1;break e;case 3:q=a.stateNode.containerInfo,Te=!0;break e;case 4:q=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(q===null)throw Error(x(160));Au(i,o,l),q=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){V(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),De(e),r&4){try{_n(3,e,e.return),ul(3,e)}catch(v){V(e,e.return,v)}try{_n(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:_e(t,e),De(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(_e(t,e),De(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(v){V(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&us(l,i),ri(a,o);var d=ri(a,i);for(o=0;o<s.length;o+=2){var h=s[o],g=s[o+1];h==="style"?ms(l,g):h==="dangerouslySetInnerHTML"?fs(l,g):h==="children"?Mn(l,g):Hi(l,h,g,d)}switch(a){case"input":Jl(l,i);break;case"textarea":cs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Qt(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Bn]=i}catch(v){V(e,e.return,v)}}break;case 6:if(_e(t,e),De(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){V(e,e.return,v)}}break;case 3:if(_e(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:_e(t,e),De(e);break;case 13:_e(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=Q())),r&4&&Ia(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||h,_e(t,e),le=d):_e(t,e),De(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(g=S=h;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:_n(4,m,m.return);break;case 1:Wt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){V(r,n,v)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Oa(g);continue}}w!==null?(w.return=m,S=w):Oa(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ps("display",o))}catch(v){V(e,e.return,v)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(v){V(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:_e(t,e),De(e),r&4&&Ia(e);break;case 21:break;default:_e(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($u(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mn(l,""),r.flags&=-33);var i=Ra(e);Ri(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ra(e);Mi(e,a,o);break;default:throw Error(x(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){S=e,Vu(e)}function Vu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||le;a=hr;var d=le;if(hr=o,(le=s)&&!d)for(S=l;S!==null;)o=S,s=o.child,o.tag===22&&o.memoizedState!==null?Fa(l):s!==null?(s.return=o,S=s):Fa(l);for(;i!==null;)S=i,Vu(i),i=i.sibling;S=l,hr=a,le=d}Da(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Da(e)}}function Da(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&On(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}le||t.flags&512&&Li(t)}catch(m){V(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Oa(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Fa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var i=t.return;try{Li(t)}catch(s){V(t,i,s)}break;case 5:var o=t.return;try{Li(t)}catch(s){V(t,o,s)}}}catch(s){V(t,t.return,s)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var mf=Math.ceil,Gr=Ge.ReactCurrentDispatcher,So=Ge.ReactCurrentOwner,Ee=Ge.ReactCurrentBatchConfig,R=0,J=null,K=null,ee=0,he=0,Ht=mt(0),G=0,Kn=null,_t=0,cl=0,jo=0,Pn=null,ce=null,Eo=0,rn=1/0,Ae=null,Zr=!1,Ii=null,st=null,gr=!1,nt=null,br=0,Tn=0,Di=null,zr=-1,_r=0;function ae(){return R&6?Q():zr!==-1?zr:zr=Q()}function ut(e){return e.mode&1?R&2&&ee!==0?ee&-ee:Zd.transition!==null?(_r===0&&(_r=Ns()),_r):(e=I,e!==0||(e=window.event,e=e===void 0?16:Rs(e.type)),e):1}function Re(e,t,n,r){if(50<Tn)throw Tn=0,Di=null,Error(x(185));Gn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(cl|=n),G===4&&et(e,ee)),me(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=Q()+500,ol&&ht()))}function me(e,t){var n=e.callbackNode;Zc(e,t);var r=Ir(e,e===J?ee:0);if(r===0)n!==null&&Yo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yo(n),t===1)e.tag===0?Gd(Ua.bind(null,e)):Js(Ua.bind(null,e)),Qd(function(){!(R&6)&&ht()}),n=null;else{switch(zs(r)){case 1:n=Gi;break;case 4:n=Es;break;case 16:n=Rr;break;case 536870912:n=Cs;break;default:n=Rr}n=Zu(n,Wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wu(e,t){if(zr=-1,_r=0,R&6)throw Error(x(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Ir(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var l=R;R|=2;var i=Qu();(J!==e||ee!==t)&&(Ae=null,rn=Q()+500,jt(e,t));do try{vf();break}catch(a){Hu(e,a)}while(!0);so(),Gr.current=i,R=l,K!==null?t=0:(J=null,ee=0,t=G)}if(t!==0){if(t===2&&(l=si(e),l!==0&&(r=l,t=Oi(e,l))),t===1)throw n=Kn,jt(e,0),et(e,r),me(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!hf(l)&&(t=Jr(e,r),t===2&&(i=si(e),i!==0&&(r=i,t=Oi(e,i))),t===1))throw n=Kn,jt(e,0),et(e,r),me(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:xt(e,ce,Ae);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Eo+500-Q(),10<t)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(xt.bind(null,e,ce,Ae),t);break}xt(e,ce,Ae);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=gi(xt.bind(null,e,ce,Ae),r);break}xt(e,ce,Ae);break;case 5:xt(e,ce,Ae);break;default:throw Error(x(329))}}}return me(e,Q()),e.callbackNode===n?Wu.bind(null,e):null}function Oi(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=ce,ce=n,t!==null&&Fi(t)),e}function Fi(e){ce===null?ce=e:ce.push.apply(ce,e)}function hf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~jo,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Ua(e){if(R&6)throw Error(x(327));Zt();var t=Ir(e,0);if(!(t&1))return me(e,Q()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=si(e);r!==0&&(t=r,n=Oi(e,r))}if(n===1)throw n=Kn,jt(e,0),et(e,t),me(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ce,Ae),me(e,Q()),null}function Co(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=Q()+500,ol&&ht())}}function Pt(e){nt!==null&&nt.tag===0&&!(R&6)&&Zt();var t=R;R|=1;var n=Ee.transition,r=I;try{if(Ee.transition=null,I=1,e)return e()}finally{I=r,Ee.transition=n,R=t,!(R&6)&&ht()}}function No(){he=Ht.current,F(Ht)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:tn(),F(fe),F(ie),ho();break;case 5:mo(r);break;case 4:tn();break;case 13:F($);break;case 19:F($);break;case 10:uo(r.type._context);break;case 22:case 23:No()}n=n.return}if(J=e,K=e=ct(e.current,null),ee=he=t,G=0,Kn=null,jo=cl=_t=0,ce=Pn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}kt=null}return e}function Hu(e,t){do{var n=K;try{if(so(),Er.current=Xr,Kr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(zt=0,b=X=A=null,zn=!1,Hn=0,So.current=null,n===null||n.return===null){G=1,Kn=t,K=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=a,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ca(o);if(w!==null){w.flags&=-257,Na(w,o,a,i,t),w.mode&1&&Ea(i,d,t),t=w,s=d;var k=t.updateQueue;if(k===null){var v=new Set;v.add(s),t.updateQueue=v}else k.add(s);break e}else{if(!(t&1)){Ea(i,d,t),zo();break e}s=Error(x(426))}}else if(U&&a.mode&1){var L=Ca(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Na(L,o,a,i,t),oo(nn(s,a));break e}}i=s=nn(s,a),G!==4&&(G=2),Pn===null?Pn=[i]:Pn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=zu(i,s,t);ya(i,c);break e;case 1:a=s;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(st===null||!st.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=_u(i,a,t);ya(i,y);break e}}i=i.return}while(i!==null)}Ku(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Qu(){var e=Gr.current;return Gr.current=Xr,e===null?Xr:e}function zo(){(G===0||G===3||G===2)&&(G=4),J===null||!(_t&268435455)&&!(cl&268435455)||et(J,ee)}function Jr(e,t){var n=R;R|=2;var r=Qu();(J!==e||ee!==t)&&(Ae=null,jt(e,t));do try{gf();break}catch(l){Hu(e,l)}while(!0);if(so(),R=n,Gr.current=r,K!==null)throw Error(x(261));return J=null,ee=0,G}function gf(){for(;K!==null;)Yu(K)}function vf(){for(;K!==null&&!Bc();)Yu(K)}function Yu(e){var t=Gu(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Ku(e):K=t,So.current=null}function Ku(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(n=uf(n,t,he),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=I,l=Ee.transition;try{Ee.transition=null,I=1,yf(e,t,n,r)}finally{Ee.transition=l,I=r}return null}function yf(e,t,n,r){do Zt();while(nt!==null);if(R&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bc(e,i),e===J&&(K=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Zu(Rr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=I;I=1;var a=R;R|=4,So.current=null,ff(e,n),Bu(n,e),Fd(mi),Dr=!!pi,mi=pi=null,e.current=n,pf(n),Vc(),R=a,I=o,Ee.transition=i}else e.current=n;if(gr&&(gr=!1,nt=e,br=l),i=e.pendingLanes,i===0&&(st=null),Qc(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Ii,Ii=null,e;return br&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Di?Tn++:(Tn=0,Di=e):Tn=0,ht(),null}function Zt(){if(nt!==null){var e=zs(br),t=Ee.transition,n=I;try{if(Ee.transition=null,I=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,br=0,R&6)throw Error(x(331));var l=R;for(R|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:_n(8,h,i)}var g=h.child;if(g!==null)g.return=h,S=g;else for(;S!==null;){h=S;var m=h.sibling,w=h.return;if(Uu(h),h===d){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var k=i.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var L=v.sibling;v.sibling=null,v=L}while(v!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_n(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,S=c;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(j){V(a,a.return,j)}if(a===o){S=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,S=y;break e}S=a.return}}if(R=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{I=n,Ee.transition=t}}return!1}function $a(e,t,n){t=nn(n,t),t=zu(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Gn(e,1,t),me(e,t))}function V(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=_u(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Gn(t,1,e),me(t,e));break}}t=t.return}}function xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(G===4||G===3&&(ee&130023424)===ee&&500>Q()-Eo?jt(e,0):jo|=n),me(e,t)}function Xu(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=ae();e=Ke(e,t),e!==null&&(Gn(e,t,n),me(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Xu(e,n)}var Gu;Gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,sf(e,t,n);de=!!(e.flags&131072)}else de=!1,U&&t.flags&1048576&&qs(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var l=Jt(t,ie.current);Gt(t,n),l=vo(null,t,r,e,l,n);var i=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Ar(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,ji(t,r,e,n),t=Ni(null,t,r,!0,i,n)):(t.tag=0,U&&i&&lo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=jf(r),e=Pe(r,e),l){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Pa(null,t,r,e,n);break e;case 11:t=za(null,t,r,e,n);break e;case 14:t=_a(null,t,r,Pe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Pa(e,t,r,l,n);case 3:e:{if(Mu(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,iu(e,t),Qr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(x(423)),t),t=Ta(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(x(424)),t),t=Ta(e,t,r,n,l);break e}else for(ge=ot(t.stateNode.containerInfo.firstChild),ve=t,U=!0,Le=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),Lu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Ru(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),za(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(Wr,r._currentValue),r._currentValue=o,i!==null)if(Ie(i.value,o)){if(i.children===l.children&&!fe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=He(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ki(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ki(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ce(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),_a(e,t,r,l,n);case 15:return Pu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Nr(e,t),t.tag=1,pe(r)?(e=!0,Ar(t)):e=!1,Gt(t,n),Nu(t,r,l),ji(t,r,l,n),Ni(null,t,r,!0,e,n);case 19:return Iu(e,t,n);case 22:return Tu(e,t,n)}throw Error(x(156,t.tag))};function Zu(e,t){return js(e,t)}function Sf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Sf(e,t,n,r)}function _o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return _o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Ki)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")_o(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case It:return Et(n.children,l,i,t);case Qi:o=8,l|=8;break;case Kl:return e=je(12,n,t,l|2),e.elementType=Kl,e.lanes=i,e;case Xl:return e=je(13,n,t,l),e.elementType=Xl,e.lanes=i,e;case Gl:return e=je(19,n,t,l),e.elementType=Gl,e.lanes=i,e;case os:return dl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ls:o=10;break e;case is:o=9;break e;case Yi:o=11;break e;case Ki:o=14;break e;case be:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=je(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=je(22,e,r,t),e.elementType=os,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,t,n,r,l,i,o,a,s){return e=new Ef(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function Cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bu(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(pe(n))return bs(e,n,t)}return t}function Ju(e,t,n,r,l,i,o,a,s){return e=Po(n,r,!0,e,l,i,o,a,s),e.context=bu(null),n=e.current,r=ae(),l=ut(n),i=He(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Gn(e,l,r),me(e,r),e}function fl(e,t,n,r){var l=t.current,i=ae(),o=ut(l);return n=bu(n),t.context===null?t.context=n:t.pendingContext=n,t=He(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Re(e,l,o,i),jr(e,l,o)),o}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Aa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function To(e,t){Aa(e,t),(e=e.alternate)&&Aa(e,t)}function Nf(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}pl.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));fl(e,t,null,null)};pl.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){fl(null,e,null,null)}),t[Ye]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ts();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&Ms(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ba(){}function zf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=qr(o);i.call(d)}}var o=Ju(t,r,e,0,null,!1,!1,"",Ba);return e._reactRootContainer=o,e[Ye]=o.current,$n(e.nodeType===8?e.parentNode:e),Pt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=qr(s);a.call(d)}}var s=Po(e,0,!1,null,null,!1,!1,"",Ba);return e._reactRootContainer=s,e[Ye]=s.current,$n(e.nodeType===8?e.parentNode:e),Pt(function(){fl(t,s,n,r)}),s}function hl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=qr(o);a.call(s)}}fl(t,o,e,l)}else o=zf(n,t,e,l,r);return qr(o)}_s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zi(t,n|1),me(t,Q()),!(R&6)&&(rn=Q()+500,ht()))}break;case 13:Pt(function(){var r=Ke(e,1);if(r!==null){var l=ae();Re(r,e,1,l)}}),To(e,1)}};bi=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}To(e,134217728)}};Ps=function(e){if(e.tag===13){var t=ut(e),n=Ke(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}To(e,t)}};Ts=function(){return I};Ls=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};ii=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(x(90));ss(r),Jl(r,l)}}}break;case"textarea":cs(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};vs=Co;ys=Pt;var _f={usingClientEntryPoint:!1,Events:[bn,Ut,il,hs,gs,Co]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{tl=vr.inject(Pf),Ue=vr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(x(200));return Cf(e,t,null,n)};xe.createRoot=function(e,t){if(!Mo(e))throw Error(x(299));var n=!1,r="",l=qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Po(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,$n(e.nodeType===8?e.parentNode:e),new Lo(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Pt(e)};xe.hydrate=function(e,t,n){if(!ml(t))throw Error(x(200));return hl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=qu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};xe.render=function(e,t,n){if(!ml(t))throw Error(x(200));return hl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!ml(e))throw Error(x(40));return e._reactRootContainer?(Pt(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=Co;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return hl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),es.exports=xe;var Tf=es.exports,Va=Tf;Ql.createRoot=Va.createRoot,Ql.hydrateRoot=Va.hydrateRoot;const Lf=()=>{const[e,t]=Y.useState(!1),[n,r]=Y.useState(!1);Y.useEffect(()=>{const o=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),Y.useEffect(()=>{const o=a=>{n&&!a.target.closest(".nav-container")&&r(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[n]),Y.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]);const l=[{href:"#hero",label:"Home"},{href:"#about",label:"About"},{href:"#experience",label:"Experience"},{href:"#skills",label:"Skills"},{href:"#projects",label:"Projects"},{href:"#contact",label:"Contact"}],i=o=>{r(!1);const a=document.querySelector(o);a&&a.scrollIntoView({behavior:"smooth",block:"start"})};return f.jsxs("nav",{className:`navigation ${e?"scrolled":""}`,children:[f.jsxs("div",{className:"nav-container",children:[f.jsx("div",{className:"nav-logo",children:"DS"}),f.jsx("ul",{className:"nav-menu desktop-menu",children:l.map((o,a)=>f.jsx("li",{children:f.jsx("a",{href:o.href,className:"nav-link",onClick:s=>{s.preventDefault(),i(o.href)},children:o.label})},a))}),f.jsxs("button",{className:`mobile-menu-toggle ${n?"active":""}`,onClick:()=>r(!n),"aria-label":"Toggle mobile menu","aria-expanded":n,children:[f.jsx("span",{className:"hamburger-line"}),f.jsx("span",{className:"hamburger-line"}),f.jsx("span",{className:"hamburger-line"})]}),f.jsx("div",{className:`mobile-menu-overlay ${n?"active":""}`,children:f.jsx("ul",{className:"nav-menu mobile-menu",children:l.map((o,a)=>f.jsx("li",{children:f.jsx("a",{href:o.href,className:"nav-link mobile-link",onClick:s=>{s.preventDefault(),i(o.href)},children:o.label})},a))})})]}),f.jsx("style",{jsx:!0,children:`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          background: rgba(12, 12, 12, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(100, 255, 218, 0.1);
        }

        .navigation.scrolled {
          background: rgba(12, 12, 12, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          z-index: 1001;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-link {
          color: #a0a0a0;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: #64ffda;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .hamburger-line {
          width: 25px;
          height: 3px;
          background: #ffffff;
          margin: 3px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(12, 12, 12, 0.98);
          backdrop-filter: blur(10px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }

        .mobile-link {
          font-size: 1.5rem;
          color: #ffffff;
          padding: 1rem 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          background: rgba(100, 255, 218, 0.1);
          color: #64ffda;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .nav-logo {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 0.75rem;
          }

          .mobile-link {
            font-size: 1.25rem;
            padding: 0.75rem 1.5rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .nav-link {
            padding: 0.75rem 0;
          }

          .mobile-link {
            padding: 1.25rem 2rem;
          }
        }
      `})]})},Mf=()=>{const e=Y.useRef(null);Y.useEffect(()=>{let v,L=0;const c=()=>{if(e.current){L+=.02;const u=e.current.querySelector(".wave-path-1"),p=e.current.querySelector(".wave-path-2");u&&p&&(u.style.transform=`translateX(${Math.sin(L)*10}px)`,p.style.transform=`translateX(${Math.sin(L+1)*15}px)`)}v=requestAnimationFrame(c)};return c(),()=>{v&&cancelAnimationFrame(v)}},[]);const t=()=>{const v=new CustomEvent("openContactModal");document.dispatchEvent(v)},n={position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden",background:"linear-gradient(135deg, #0c0c0c 0%, #1e1e1e 50%, #0f1419 100%)"},r={position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1},l={position:"absolute",bottom:0,left:0,width:"100%",height:"200px",overflow:"hidden"},i={width:"100%",height:"100%",fill:"rgba(100, 255, 218, 0.1)"},o={position:"relative",zIndex:2,width:"100%",padding:"4rem 0"},a={maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},s={maxWidth:"800px",textAlign:"center",margin:"0 auto"},d={fontSize:"3rem",fontWeight:"700",marginBottom:"1.5rem",lineHeight:"1.1",animation:"fadeInUp 0.8s ease-out forwards"},h={fontSize:"1.5rem",color:"#4fc3f7",marginBottom:"2rem",fontWeight:"500",animation:"fadeInUp 0.8s ease-out forwards",animationDelay:"0.2s",opacity:0,animationFillMode:"forwards"},g={fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"3rem",maxWidth:"600px",marginLeft:"auto",marginRight:"auto",animation:"fadeInUp 0.8s ease-out forwards",animationDelay:"0.4s",opacity:0,animationFillMode:"forwards"},m={display:"flex",gap:"1.5rem",justifyContent:"center",flexWrap:"wrap",animation:"fadeInUp 0.8s ease-out forwards",animationDelay:"0.6s",opacity:0,animationFillMode:"forwards"},w={background:"linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)",color:"#0c0c0c",border:"none",padding:"12px 24px",borderRadius:"8px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s ease",textDecoration:"none",display:"inline-block"},k={background:"transparent",color:"#64ffda",border:"2px solid #64ffda",padding:"12px 24px",borderRadius:"8px",fontWeight:"600",textDecoration:"none",transition:"all 0.3s ease",display:"inline-block"};return f.jsxs("section",{id:"hero",style:n,children:[f.jsx("div",{style:r,children:f.jsx("div",{style:l,ref:e,children:f.jsxs("svg",{style:i,viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[f.jsx("path",{className:"wave-path-1",d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:"0.25",style:{transition:"transform 0.1s ease-out"}}),f.jsx("path",{className:"wave-path-2",d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:"0.5",style:{transition:"transform 0.1s ease-out"}})]})})}),f.jsx("div",{style:o,children:f.jsx("div",{style:a,children:f.jsxs("div",{style:s,children:[f.jsxs("h1",{style:d,children:["Hi, I'm ",f.jsx("span",{className:"text-gradient",children:"Dheeraj Sharma"})]}),f.jsx("h2",{style:h,children:"Senior Software Engineer"}),f.jsx("p",{style:g,children:"Specializing in ServiceNow platform and modern web development. Passionate about creating innovative solutions that drive business value and enhance user experiences."}),f.jsxs("div",{style:m,children:[f.jsx("button",{style:w,onClick:t,onMouseEnter:v=>{v.target.style.transform="translateY(-2px)",v.target.style.boxShadow="0 8px 25px rgba(100, 255, 218, 0.3)"},onMouseLeave:v=>{v.target.style.transform="translateY(0)",v.target.style.boxShadow="none"},children:"Get In Touch"}),f.jsx("a",{href:"#projects",style:k,onMouseEnter:v=>{v.target.style.background="#64ffda",v.target.style.color="#0c0c0c",v.target.style.transform="translateY(-2px)",v.target.style.boxShadow="0 0 20px rgba(100, 255, 218, 0.3)"},onMouseLeave:v=>{v.target.style.background="transparent",v.target.style.color="#64ffda",v.target.style.transform="translateY(0)",v.target.style.boxShadow="none"},children:"View My Work"})]})]})})}),f.jsx("style",{jsx:!0,children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-text {
            padding: 0 1.5rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 200px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 90vh;
          }

          .wave-container {
            height: 120px;
          }
        }
      `})]})},Rf=()=>f.jsxs("section",{id:"about",className:"about-section",children:[f.jsx("div",{className:"about-container",children:f.jsxs("div",{className:"about-content",children:[f.jsxs("div",{className:"about-header",children:[f.jsx("h2",{className:"about-title",children:"About Me"}),f.jsx("div",{className:"about-underline"})]}),f.jsxs("div",{className:"about-grid",children:[f.jsxs("div",{className:"about-text",children:[f.jsx("p",{className:"about-intro",children:"I'm a passionate Senior Software Engineer with expertise in modern web technologies and the ServiceNow platform. With over 2+ years of experience, I've developed scalable solutions that drive business value and enhance user experiences."}),f.jsx("p",{className:"about-description",children:"My journey in software development began with a strong foundation in the MERN stack, and I've since expanded my expertise to include ServiceNow platform development, where I'm a Certified System Administrator (CSA). I specialize in creating robust, scalable applications that solve real-world problems."}),f.jsxs("div",{className:"about-highlights",children:[f.jsxs("div",{className:"highlight-item",children:[f.jsx("h3",{className:"highlight-title",children:"Problem Solver"}),f.jsx("p",{children:"I approach challenges with analytical thinking and creative solutions, ensuring optimal performance and user experience."})]}),f.jsxs("div",{className:"highlight-item",children:[f.jsx("h3",{className:"highlight-title",children:"Continuous Learner"}),f.jsx("p",{children:"Always staying updated with the latest technologies and best practices in software development and ServiceNow platform."})]}),f.jsxs("div",{className:"highlight-item",children:[f.jsx("h3",{className:"highlight-title",children:"Team Player"}),f.jsx("p",{children:"Collaborating effectively with cross-functional teams to deliver high-quality solutions that meet business objectives."})]})]})]}),f.jsx("div",{className:"about-stats",children:f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"2+"}),f.jsx("span",{className:"stat-label",children:"Years Experience"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"15+"}),f.jsx("span",{className:"stat-label",children:"Projects Completed"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"650+"}),f.jsx("span",{className:"stat-label",children:"Issues Resolved"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"CSA"}),f.jsx("span",{className:"stat-label",children:"ServiceNow Certified"})]})]})})]})]})}),f.jsx("style",{jsx:!0,children:`
        .about-section {
          padding: 4rem 0;
          background: #1e1e1e;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .about-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          font-size: 1.125rem;
          line-height: 1.7;
        }

        .about-intro {
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .about-description {
          color: #a0a0a0;
          margin-bottom: 2rem;
        }

        .about-highlights {
          display: grid;
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .highlight-item {
          padding: 1rem 0;
        }

        .highlight-title {
          color: #64ffda;
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .about-stats {
          position: sticky;
          top: 100px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 2rem;
          background: #2a2a2a;
          border-radius: 12px;
          border: 1px solid #333333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .stat-number {
          display: block;
          font-size: 1.875rem;
          font-weight: 700;
          color: #64ffda;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .about-grid {
            gap: 3rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-intro {
            font-size: 1.125rem;
          }

          .stats-grid {
            gap: 1.5rem;
          }

          .stat-item {
            padding: 1.75rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .about-section {
            padding: 3rem 0;
          }

          .about-container {
            padding: 0 15px;
          }

          .about-header {
            margin-bottom: 3rem;
          }

          .about-title {
            font-size: 1.75rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-text {
            font-size: 1rem;
            line-height: 1.6;
          }

          .about-intro {
            font-size: 1.125rem;
            margin-bottom: 1.5rem;
          }

          .about-description {
            margin-bottom: 1.5rem;
          }

          .about-highlights {
            margin-top: 2rem;
            gap: 1.25rem;
          }

          .highlight-item {
            padding: 0.75rem 0;
          }

          .highlight-title {
            font-size: 1rem;
          }

          .about-stats {
            position: static;
            order: -1;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-item {
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 2rem 0;
          }

          .about-container {
            padding: 0 10px;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .about-title {
            font-size: 1.5rem;
          }

          .about-grid {
            gap: 1.5rem;
          }

          .about-text {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .about-intro {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .about-description {
            margin-bottom: 1rem;
          }

          .about-highlights {
            margin-top: 1.5rem;
            gap: 1rem;
          }

          .highlight-item {
            padding: 0.5rem 0;
          }

          .highlight-title {
            font-size: 0.95rem;
          }

          .stats-grid {
            gap: 0.75rem;
          }

          .stat-item {
            padding: 1.25rem;
          }

          .stat-number {
            font-size: 1.25rem;
          }

          .stat-label {
            font-size: 0.75rem;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .stat-item {
            padding: 1rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .stat-item {
            transform: none;
          }

          .stat-item:active {
            transform: translateY(-2px);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .about-section {
            padding: 2rem 0;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .about-grid {
            gap: 1.5rem;
          }

          .about-highlights {
            margin-top: 1.5rem;
            gap: 1rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .stat-item {
            border-width: 0.5px;
          }
        }
      `})]}),If=()=>{const e=[{position:"Senior Software Engineer",company:"Inmorphis Services Private Limited",duration:"Jan 2025 - Present",description:"Specialization in ServiceNow platform focusing on Customer Service Management module. Certified System Administrator (CSA).",achievements:["ServiceNow Customer Service Management module expertise","Certified System Administrator (CSA) certification","Platform customization and workflow optimization","Client requirement analysis and solution design"]},{position:"Software Developer",company:"Newput Infotech, Indore, Madhya Pradesh",duration:"Oct 2022 - Dec 2024",description:"Full-stack development with focus on React.js, Node.js, and various modern web technologies.",achievements:["Implemented email notification system using Amazon SQS, reducing processing time by 30%","Developed micropayments platform with React and Redux, achieving 30% reduction in load times","Built robust APIs using Node.js for invoice management and financial operations","Created real-time chat system with WebSocket integration and Redis for scalability","Led browser wallet extension development, reducing build times by 40%","Optimized JavaScript SDK implementation, reducing execution time by 35%","Developed Next.js 13 parking application with 30% load time improvement","Managed transactional operations for USD, USDC, cryptocurrencies, and NFTs","Successfully resolved over 650 customer JIRA issues across multiple products"]},{position:"Software Developer - Trainee",company:"Newput Infotech, Indore, Madhya Pradesh",duration:"April 2022 - Oct 2022",description:"Comprehensive training and skill development in modern web technologies.",achievements:["Completed comprehensive MERN stack training with full proficiency","Acquired expertise in Node.js, Express, Redis, Docker, and database technologies","Mastered frontend technologies including React, Redux, and Next.js","Developed strong foundation in modern web development practices"]}];return f.jsxs("section",{id:"experience",className:"experience-section",children:[f.jsxs("div",{className:"experience-container",children:[f.jsxs("div",{className:"experience-header",children:[f.jsx("h2",{className:"experience-title",children:"Professional Experience"}),f.jsx("div",{className:"experience-underline"})]}),f.jsxs("div",{className:"experience-timeline",children:[f.jsx("div",{className:"timeline-line"}),e.map((t,n)=>f.jsxs("div",{className:"experience-item",children:[f.jsx("div",{className:"experience-marker"}),f.jsxs("div",{className:"experience-content",children:[f.jsxs("div",{className:"experience-header-info",children:[f.jsx("h3",{className:"experience-position",children:t.position}),f.jsx("div",{className:"experience-company",children:t.company}),f.jsx("div",{className:"experience-duration",children:t.duration})]}),f.jsx("p",{className:"experience-description",children:t.description}),f.jsxs("div",{className:"experience-achievements",children:[f.jsx("h4",{className:"achievements-title",children:"Key Achievements:"}),f.jsx("ul",{className:"achievements-list",children:t.achievements.map((r,l)=>f.jsx("li",{className:"achievement-item",children:r},l))})]})]})]},n))]})]}),f.jsx("style",{jsx:!0,children:`
        .experience-section {
          padding: 4rem 0;
          background: #0c0c0c;
        }

        .experience-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .experience-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .experience-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #64ffda 0%, #4fc3f7 100%);
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          background: #1e1e1e;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #333333;
          margin-left: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .experience-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .experience-marker {
          position: absolute;
          left: -2.5rem;
          top: 2rem;
          width: 12px;
          height: 12px;
          background: #64ffda;
          border-radius: 50%;
          border: 3px solid #0c0c0c;
          box-shadow: 0 0 0 2px #64ffda;
        }

        .experience-content {
          color: #a0a0a0;
        }

        .experience-header-info {
          margin-bottom: 1.5rem;
        }

        .experience-position {
          font-size: 1.5rem;
          font-weight: 600;
          color: #64ffda;
          margin-bottom: 0.5rem;
        }

        .experience-company {
          font-size: 1.125rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .experience-duration {
          font-size: 0.875rem;
          color: #666666;
          font-weight: 500;
        }

        .experience-description {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #cccccc;
        }

        .experience-achievements {
          margin-top: 1.5rem;
        }

        .achievements-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-item {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.5;
          color: #a0a0a0;
        }

        .achievement-item::before {
          content: '▸';
          color: #64ffda;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .experience-title {
            font-size: 2rem;
          }

          .experience-item {
            padding: 1.75rem;
            margin-left: 1.75rem;
          }

          .experience-position {
            font-size: 1.375rem;
          }

          .experience-company {
            font-size: 1rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .experience-section {
            padding: 3rem 0;
          }

          .experience-container {
            padding: 0 15px;
          }

          .experience-header {
            margin-bottom: 3rem;
          }

          .experience-title {
            font-size: 1.75rem;
          }

          .experience-timeline {
            padding-left: 1.5rem;
          }

          .timeline-line {
            left: 0.75rem;
          }

          .experience-item {
            margin-left: 1.5rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
          }

          .experience-marker {
            left: -2.25rem;
            top: 1.5rem;
            width: 10px;
            height: 10px;
          }

          .experience-position {
            font-size: 1.25rem;
          }

          .experience-company {
            font-size: 0.95rem;
          }

          .experience-description {
            font-size: 0.95rem;
            margin-bottom: 1.25rem;
          }

          .achievements-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .achievement-item {
            font-size: 0.9rem;
            padding-left: 1.25rem;
            margin-bottom: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .experience-section {
            padding: 2rem 0;
          }

          .experience-container {
            padding: 0 10px;
          }

          .experience-header {
            margin-bottom: 2rem;
          }

          .experience-title {
            font-size: 1.5rem;
          }

          .experience-timeline {
            padding-left: 1rem;
          }

          .timeline-line {
            left: 0.5rem;
          }

          .experience-item {
            margin-left: 1rem;
            padding: 1.25rem;
            margin-bottom: 1.5rem;
          }

          .experience-marker {
            left: -1.75rem;
            top: 1.25rem;
            width: 8px;
            height: 8px;
          }

          .experience-position {
            font-size: 1.125rem;
            margin-bottom: 0.25rem;
          }

          .experience-company {
            font-size: 0.9rem;
            margin-bottom: 0.125rem;
          }

          .experience-duration {
            font-size: 0.8rem;
          }

          .experience-description {
            font-size: 0.875rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }

          .achievements-title {
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
          }

          .achievement-item {
            font-size: 0.85rem;
            padding-left: 1rem;
            margin-bottom: 0.375rem;
            line-height: 1.4;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .experience-timeline {
            padding-left: 0.75rem;
          }

          .timeline-line {
            left: 0.375rem;
          }

          .experience-item {
            margin-left: 0.75rem;
            padding: 1rem;
          }

          .experience-marker {
            left: -1.5rem;
            top: 1rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .experience-item {
            transform: none;
          }

          .experience-item:active {
            transform: translateY(-2px);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .experience-section {
            padding: 2rem 0;
          }

          .experience-header {
            margin-bottom: 2rem;
          }

          .experience-item {
            margin-bottom: 1.5rem;
            padding: 1.25rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .experience-item {
            border-width: 0.5px;
          }

          .timeline-line {
            width: 1px;
          }
        }
      `})]})},Df=()=>{const e=[{title:"Programming Languages",skills:["Python","JavaScript","TypeScript","Java"]},{title:"Frontend Technologies",skills:["React.js","Redux","Recoil","Next.js","Material-UI","Tailwind CSS"]},{title:"Backend Technologies",skills:["Node.js","Express.js","WebSockets","WebRTC","gRPC","REST APIs"]},{title:"Databases",skills:["MongoDB","PostgreSQL","SQL","Redis"]},{title:"DevOps & Tools",skills:["Docker","AWS EC2","Git","Webpack","CI/CD","JIRA"]},{title:"ServiceNow",skills:["Customer Service Management","System Administration","CSA Certified","Platform Customization"]},{title:"Libraries & Frameworks",skills:["Prisma","Yup","Zod","Worker.js","Hono"]}];return f.jsxs("section",{id:"skills",className:"skills-section",children:[f.jsxs("div",{className:"skills-container",children:[f.jsxs("div",{className:"skills-header",children:[f.jsx("h2",{className:"skills-title",children:"Skills & Expertise"}),f.jsx("div",{className:"skills-underline"})]}),f.jsx("div",{className:"skills-grid",children:e.map((t,n)=>f.jsxs("div",{className:"skill-category",children:[f.jsx("h3",{className:"category-title",children:t.title}),f.jsx("div",{className:"skills-grid-inner",children:t.skills.map((r,l)=>f.jsx("span",{className:"skill-tag",children:r},l))})]},n))})]}),f.jsx("style",{jsx:!0,children:`
        .skills-section {
          padding: 4rem 0;
          background: #1e1e1e;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .skills-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: #2a2a2a;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #333333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #64ffda;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .skills-grid-inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
        }

        .skill-tag {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%);
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
          border: 1px solid rgba(100, 255, 218, 0.2);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(79, 195, 247, 0.2) 100%);
          border-color: rgba(100, 255, 218, 0.4);
          transform: translateY(-2px);
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }

          .skill-category {
            padding: 1.75rem;
          }

          .skills-title {
            font-size: 2rem;
          }

          .category-title {
            font-size: 1.125rem;
          }

          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: 0.6rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .skills-section {
            padding: 3rem 0;
          }

          .skills-container {
            padding: 0 15px;
          }

          .skills-header {
            margin-bottom: 3rem;
          }

          .skills-title {
            font-size: 1.75rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .category-title {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
          }

          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.5rem;
          }

          .skill-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 2rem 0;
          }

          .skills-container {
            padding: 0 10px;
          }

          .skills-header {
            margin-bottom: 2rem;
          }

          .skills-title {
            font-size: 1.5rem;
          }

          .skills-grid {
            gap: 1.25rem;
          }

          .skill-category {
            padding: 1.25rem;
          }

          .category-title {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
            gap: 0.4rem;
          }

          .skill-tag {
            font-size: 0.75rem;
            padding: 0.35rem 0.7rem;
            border-radius: 15px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 0.3rem;
          }

          .skill-tag {
            font-size: 0.7rem;
            padding: 0.3rem 0.6rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .skill-category {
            transform: none;
          }

          .skill-category:active {
            transform: translateY(-2px);
          }

          .skill-tag {
            min-height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .skill-tag:active {
            transform: translateY(-1px);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .skills-section {
            padding: 2rem 0;
          }

          .skills-header {
            margin-bottom: 2rem;
          }

          .skills-grid {
            gap: 1.25rem;
          }

          .skill-category {
            padding: 1.25rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .skill-tag {
            border-width: 0.5px;
          }
        }
      `})]})},Of=()=>{const e=[{name:"Paytm Wallet Web Application",description:"Spearheaded the development of a web application akin to Paytm Wallet, employing React.js for frontend, Node.js (Express.js) for backend, and MongoDB for database management. Utilized Zod for robust validation and Tailwind CSS for sleek styling.",technologies:["React.js","Node.js","Express.js","MongoDB","Zod","Tailwind CSS"],github:"https://github.com/dheerajsharma1805/paytm",features:["Digital wallet functionality","Secure payment processing","User authentication and authorization","Transaction history tracking","Responsive mobile-first design"]},{name:"Medium Blog Clone",description:"Engineered a clone of the popular Medium blogging platform, utilizing React for frontend and implementing a serverless backend on Cloudflare. Features modern UI/UX design with smooth animations and responsive layout.",technologies:["React","Cloudflare","Serverless","CSS3","JavaScript"],github:"https://github.com/dheerajsharma1805/medium_blog",features:["Article creation and publishing","Rich text editor with formatting","User profiles and following system","Comment and interaction system","Serverless architecture deployment"]}];return f.jsxs("section",{id:"projects",className:"projects-section",children:[f.jsxs("div",{className:"projects-container",children:[f.jsxs("div",{className:"projects-header",children:[f.jsx("h2",{className:"projects-title",children:"Featured Projects"}),f.jsx("div",{className:"projects-underline"})]}),f.jsx("div",{className:"projects-grid",children:e.map((t,n)=>f.jsxs("div",{className:"project-card",children:[f.jsx("h3",{className:"project-name",children:t.name}),f.jsx("p",{className:"project-description",children:t.description}),f.jsxs("div",{className:"project-features",children:[f.jsx("h4",{className:"features-title",children:"Key Features:"}),f.jsx("ul",{className:"features-list",children:t.features.map((r,l)=>f.jsx("li",{className:"feature-item",children:r},l))})]}),f.jsxs("div",{className:"project-technologies",children:[f.jsx("h4",{className:"technologies-title",children:"Technologies Used:"}),f.jsx("div",{className:"technologies-grid",children:t.technologies.map((r,l)=>f.jsx("span",{className:"technology-tag",children:r},l))})]}),f.jsx("div",{className:"project-actions",children:f.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:"View on GitHub"})})]},n))})]}),f.jsx("style",{jsx:!0,children:`
        .projects-section {
          padding: 4rem 0;
          background: #0c0c0c;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .projects-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
        }

        .project-card {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 2.5rem;
          border: 1px solid #333333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .project-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #64ffda;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-features {
          margin-bottom: 2rem;
        }

        .features-title {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          color: #a0a0a0;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-item::before {
          content: '▸';
          color: #64ffda;
          position: absolute;
          left: 0;
        }

        .project-technologies {
          margin-bottom: 2rem;
        }

        .technologies-title {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .technologies-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .technology-tag {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%);
          color: #64ffda;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(100, 255, 218, 0.2);
        }

        .project-actions {
          text-align: center;
        }

        .project-link {
          display: inline-block;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          color: #0c0c0c;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 2rem;
          }

          .project-card {
            padding: 2rem;
          }

          .projects-title {
            font-size: 2rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 0;
          }

          .projects-container {
            padding: 0 15px;
          }

          .projects-header {
            margin-bottom: 3rem;
          }

          .projects-title {
            font-size: 1.75rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-name {
            font-size: 1.25rem;
          }

          .project-description {
            font-size: 0.95rem;
          }

          .features-title,
          .technologies-title {
            font-size: 0.95rem;
          }

          .feature-item {
            font-size: 0.9rem;
            padding-left: 1.25rem;
          }

          .technology-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .project-link {
            width: 100%;
            text-align: center;
            padding: 14px 24px;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 2rem 0;
          }

          .projects-container {
            padding: 0 10px;
          }

          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-title {
            font-size: 1.5rem;
          }

          .projects-grid {
            gap: 1.5rem;
          }

          .project-card {
            padding: 1.25rem;
          }

          .project-name {
            font-size: 1.125rem;
          }

          .project-description {
            font-size: 0.875rem;
            line-height: 1.5;
          }

          .feature-item {
            font-size: 0.85rem;
            padding-left: 1rem;
          }

          .technology-tag {
            font-size: 0.75rem;
            padding: 0.35rem 0.7rem;
          }

          .project-link {
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .project-card {
            transform: none;
          }

          .project-card:active {
            transform: translateY(-2px);
          }

          .project-link {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .projects-section {
            padding: 2rem 0;
          }

          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-grid {
            gap: 1.5rem;
          }

          .project-card {
            padding: 1.5rem;
          }
        }
      `})]})},Ff=()=>{const e=()=>{const c=document.querySelector(".contact-modal");c&&c.classList.add("active")},t={padding:"4rem 0",background:"#1e1e1e"},n={maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},r={textAlign:"center",marginBottom:"4rem"},l={fontSize:"2.25rem",marginBottom:"1rem"},i={width:"80px",height:"4px",background:"linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)",margin:"0 auto",borderRadius:"2px"},o={textAlign:"center",maxWidth:"600px",margin:"0 auto"},a={fontSize:"1.125rem",color:"#a0a0a0",lineHeight:"1.6",marginBottom:"3rem"},s={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"2rem",marginBottom:"3rem"},d={background:"#2a2a2a",padding:"2rem",borderRadius:"12px",border:"1px solid #333333",transition:"transform 0.3s ease"},h={width:"3rem",height:"3rem",background:"linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem",color:"#0c0c0c",fontSize:"1.25rem"},g={fontSize:"1.125rem",fontWeight:"600",color:"#ffffff",marginBottom:"0.5rem"},m={color:"#a0a0a0",fontSize:"0.95rem"},w={display:"flex",justifyContent:"center",gap:"2rem",marginBottom:"3rem"},k={display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1.5rem",background:"#2a2a2a",borderRadius:"25px",textDecoration:"none",color:"#ffffff",border:"1px solid #333333",transition:"all 0.3s ease"},v={width:"20px",height:"20px"},L={background:"linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)",color:"#0c0c0c",border:"none",padding:"1rem 2rem",borderRadius:"8px",fontWeight:"600",fontSize:"1.125rem",cursor:"pointer",transition:"all 0.3s ease"};return f.jsxs("section",{id:"contact",className:"section",style:t,children:[f.jsxs("div",{style:n,children:[f.jsxs("div",{style:r,children:[f.jsx("h2",{style:l,children:"Get In Touch"}),f.jsx("div",{style:i})]}),f.jsxs("div",{style:o,children:[f.jsx("p",{style:a,children:"I'm always interested in new opportunities, challenging projects, and meaningful collaborations. Whether you have a project in mind, want to discuss technology, or just want to say hello, I'd love to hear from you!"}),f.jsx("div",{style:s,children:f.jsxs("div",{style:d,onMouseEnter:c=>c.target.style.transform="translateY(-5px)",onMouseLeave:c=>c.target.style.transform="translateY(0)",children:[f.jsx("div",{style:h,children:"📧"}),f.jsx("h3",{style:g,children:"Email"}),f.jsx("p",{style:m,children:"dheerajsharma2709@gmail.com"})]})}),f.jsxs("div",{style:w,children:[f.jsxs("a",{href:"https://github.com/dheerajsharma1805",target:"_blank",rel:"noopener noreferrer",style:k,onMouseEnter:c=>{c.target.style.background="#333",c.target.style.transform="translateY(-3px)"},onMouseLeave:c=>{c.target.style.background="#2a2a2a",c.target.style.transform="translateY(0)"},children:[f.jsx("svg",{style:v,fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]}),f.jsxs("a",{href:"https://linkedin.com/in/dheerajsharma1805",target:"_blank",rel:"noopener noreferrer",style:k,onMouseEnter:c=>{c.target.style.background="#0077B5",c.target.style.transform="translateY(-3px)"},onMouseLeave:c=>{c.target.style.background="#2a2a2a",c.target.style.transform="translateY(0)"},children:[f.jsx("svg",{style:v,fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),"LinkedIn"]})]}),f.jsx("button",{style:L,onClick:e,onMouseEnter:c=>{c.target.style.transform="translateY(-3px)",c.target.style.boxShadow="0 10px 30px rgba(100, 255, 218, 0.3)"},onMouseLeave:c=>{c.target.style.transform="translateY(0)",c.target.style.boxShadow="none"},children:"Send Message"})]})]}),f.jsx("style",{jsx:!0,children:`
        @media (max-width: 768px) {
          .contact-info {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .social-links {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
          }

          .social-link {
            width: 200px !important;
            justify-content: center !important;
          }
        }
      `})]})},Uf=()=>{const[e,t]=Y.useState({name:"",subject:"",message:""}),[n,r]=Y.useState(!1);Y.useEffect(()=>{const d=()=>{r(!0),document.body.style.overflow="hidden"},h=()=>{r(!1),document.body.style.overflow="unset"};return document.addEventListener("openContactModal",d),document.addEventListener("closeContactModal",h),()=>{document.removeEventListener("openContactModal",d),document.removeEventListener("closeContactModal",h),document.body.style.overflow="unset"}},[]);const l=d=>{t({...e,[d.target.name]:d.target.value})},i=d=>{d.preventDefault();const h=encodeURIComponent(e.subject||"Contact from Portfolio"),g=encodeURIComponent(`My Name is: ${e.name}

Message:
${e.message}`),m=`mailto:dheerajsharma2709@gmail.com?subject=${h}&body=${g}`;window.open(m,"_self"),o()},o=()=>{r(!1),document.body.style.overflow="unset",t({name:"",subject:"",message:""})},a=d=>{d.target===d.currentTarget&&o()},s=d=>{d.key==="Escape"&&o()};return n?f.jsxs("div",{className:"contact-modal",onClick:a,onKeyDown:s,tabIndex:-1,children:[f.jsxs("div",{className:"modal-content",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h2",{className:"modal-title",children:"Get In Touch"}),f.jsx("button",{className:"close-button",onClick:o,"aria-label":"Close modal",children:"×"})]}),f.jsxs("form",{onSubmit:i,className:"contact-form",children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"name",className:"form-label",children:"Name"}),f.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,className:"form-input",placeholder:"Your name",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"subject",className:"form-label",children:"Subject"}),f.jsx("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:l,className:"form-input",placeholder:"Subject of your message",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"message",className:"form-label",children:"Message"}),f.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:l,className:"form-textarea",placeholder:"Your message",rows:"5",required:!0})]}),f.jsxs("div",{className:"form-actions",children:[f.jsx("button",{type:"submit",className:"submit-button",children:"Send Message"}),f.jsx("button",{type:"button",className:"cancel-button",onClick:o,children:"Cancel"})]})]})]}),f.jsx("style",{jsx:!0,children:`
        .contact-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #333333;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: slideIn 0.3s ease-out;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #64ffda;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: #a0a0a0;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-input,
        .form-textarea {
          background: #2a2a2a;
          border: 1px solid #333333;
          border-radius: 8px;
          padding: 0.75rem;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #64ffda;
          box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #666666;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .submit-button,
        .cancel-button {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-button {
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          color: #0c0c0c;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
        }

        .cancel-button {
          background: transparent;
          color: #a0a0a0;
          border: 1px solid #333333;
        }

        .cancel-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: scale(0.9) translateY(20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        /* Tablet Responsive */
        @media (max-width: 768px) {
          .contact-modal {
            padding: 0.75rem;
          }

          .modal-content {
            padding: 2rem;
            max-height: 95vh;
          }

          .modal-title {
            font-size: 1.375rem;
          }

          .form-actions {
            flex-direction: column;
          }

          .submit-button,
          .cancel-button {
            width: 100%;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .contact-modal {
            padding: 0.5rem;
          }

          .modal-content {
            padding: 1.5rem;
            border-radius: 8px;
          }

          .modal-header {
            margin-bottom: 1.5rem;
          }

          .modal-title {
            font-size: 1.25rem;
          }

          .close-button {
            font-size: 1.25rem;
            min-width: 40px;
            min-height: 40px;
          }

          .contact-form {
            gap: 1.25rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.625rem;
            font-size: 0.95rem;
          }

          .form-textarea {
            min-height: 100px;
          }

          .form-actions {
            gap: 0.75rem;
            margin-top: 0.75rem;
          }

          .submit-button,
          .cancel-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.95rem;
            min-height: 40px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .modal-content {
            padding: 1.25rem;
          }

          .modal-title {
            font-size: 1.125rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .close-button:active {
            transform: scale(0.95);
          }

          .submit-button:active,
          .cancel-button:active {
            transform: scale(0.98);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .modal-content {
            max-height: 98vh;
            padding: 1.5rem;
          }

          .modal-header {
            margin-bottom: 1rem;
          }

          .contact-form {
            gap: 1rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .form-input,
          .form-textarea {
            border-width: 0.5px;
          }
        }
      `})]}):null},$f=()=>{const e=Y.useRef(null),t=Y.useRef(null),n=Y.useRef(null);Y.useEffect(()=>{const a=e.current,s=t.current,d=n.current;if(!a||!s||!d)return;let h={x:0,y:0},g={x:0,y:0};const m=()=>{for(let c=0;c<150;c++){const u=document.createElement("div");u.className="star",u.style.cssText=`
          position: absolute;
          width: 2px;
          height: 2px;
          background: #64ffda;
          border-radius: 50%;
          opacity: ${Math.random()*.8+.2};
          left: ${Math.random()*100}%;
          top: ${Math.random()*100}%;
          animation: twinkle ${Math.random()*3+2}s infinite alternate;
          box-shadow: 0 0 6px #64ffda;
        `,d.appendChild(u)}},w=L=>{h.x=L.clientX,h.y=L.clientY,a.style.left=h.x+"px",a.style.top=h.y+"px"},k=()=>{g.x+=(h.x-g.x)*.1,g.y+=(h.y-g.y)*.1,s.style.left=g.x+"px",s.style.top=g.y+"px",requestAnimationFrame(k)},v=()=>{document.querySelectorAll("a, button, .card, .skill-tag, .project-card").forEach(c=>{c.addEventListener("mouseenter",()=>{a.style.transform="scale(1.5)",s.style.transform="scale(1.3)",a.style.background="rgba(100, 255, 218, 0.8)",s.style.background="rgba(79, 195, 247, 0.3)"}),c.addEventListener("mouseleave",()=>{a.style.transform="scale(1)",s.style.transform="scale(1)",a.style.background="rgba(100, 255, 218, 0.6)",s.style.background="rgba(100, 255, 218, 0.2)"})})};return document.body.style.cursor="none",m(),document.addEventListener("mousemove",w),k(),setTimeout(v,1e3),()=>{document.removeEventListener("mousemove",w),document.body.style.cursor="auto"}},[]);const r={position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9998},l={position:"absolute",top:0,left:0,width:"100%",height:"100%"},i={position:"fixed",width:"10px",height:"10px",background:"rgba(100, 255, 218, 0.6)",borderRadius:"50%",pointerEvents:"none",zIndex:9999,transform:"translate(-50%, -50%)",transition:"transform 0.1s ease, background 0.3s ease",boxShadow:"0 0 20px rgba(100, 255, 218, 0.5)"},o={position:"fixed",width:"30px",height:"30px",background:"rgba(100, 255, 218, 0.2)",borderRadius:"50%",pointerEvents:"none",zIndex:9998,transform:"translate(-50%, -50%)",transition:"transform 0.3s ease, background 0.3s ease",border:"1px solid rgba(100, 255, 218, 0.3)"};return f.jsxs("div",{style:r,children:[f.jsx("div",{ref:n,style:l}),f.jsx("div",{ref:t,style:o}),f.jsx("div",{ref:e,style:i}),f.jsx("style",{jsx:!0,children:`
        @keyframes twinkle {
          0% { 
            opacity: 0.2;
            transform: scale(1);
          }
          100% { 
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @media (max-width: 768px) {
          .cursor-container {
            display: none !important;
          }
        }
      `})]})},Af=()=>{const e=Y.useRef(null);Y.useEffect(()=>{const n=e.current;if(!n)return;const r=()=>{for(let o=0;o<20;o++){const a=document.createElement("div");a.className="floating-element";const s=Math.random()*4+2,d=Math.random()*20+10,h=Math.random()*5;a.style.cssText=`
          position: absolute;
          width: ${s}px;
          height: ${s}px;
          background: linear-gradient(45deg, rgba(100, 255, 218, 0.3), rgba(79, 195, 247, 0.3));
          border-radius: 50%;
          left: ${Math.random()*100}%;
          top: ${Math.random()*100}%;
          animation: float ${d}s infinite linear;
          animation-delay: ${h}s;
          filter: blur(1px);
          pointer-events: none;
        `,n.appendChild(a)}},l=()=>{const i=["triangle","square","circle"];for(let a=0;a<10;a++){const s=document.createElement("div"),d=i[Math.floor(Math.random()*i.length)],h=Math.random()*30+20,g=Math.random()*30+20,m=Math.random()*10;let w=`
          position: absolute;
          width: ${h}px;
          height: ${h}px;
          left: ${Math.random()*100}%;
          top: ${Math.random()*100}%;
          animation: geometricFloat ${g}s infinite linear;
          animation-delay: ${m}s;
          opacity: 0.1;
          pointer-events: none;
        `;switch(d){case"triangle":w+=`
              width: 0;
              height: 0;
              border-left: ${h/2}px solid transparent;
              border-right: ${h/2}px solid transparent;
              border-bottom: ${h}px solid rgba(100, 255, 218, 0.3);
            `;break;case"square":w+=`
              background: rgba(79, 195, 247, 0.2);
              transform: rotate(45deg);
            `;break;case"circle":w+=`
              background: rgba(100, 255, 218, 0.2);
              border-radius: 50%;
            `;break}s.style.cssText=w,n.appendChild(s)}};return r(),l(),()=>{n&&(n.innerHTML="")}},[]);const t={position:"fixed",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1};return f.jsx("div",{ref:e,style:t,children:f.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes geometricFloat {
          0% {
            transform: translateY(-100px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `})})};function Bf(){return Y.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",l=>{l.preventDefault();const i=r.getAttribute("href"),o=document.querySelector(i);o&&o.scrollIntoView({behavior:"smooth",block:"start"})})});const t=new IntersectionObserver(r=>{r.forEach(l=>{l.isIntersecting&&l.target.classList.add("animate")})},{threshold:.1});return document.querySelectorAll(".section").forEach(r=>t.observe(r)),()=>t.disconnect()},[]),f.jsxs("div",{className:"App",children:[f.jsx($f,{}),f.jsx(Af,{}),f.jsx(Lf,{}),f.jsx(Mf,{}),f.jsx(Rf,{}),f.jsx(If,{}),f.jsx(Df,{}),f.jsx(Of,{}),f.jsx(Ff,{}),f.jsx(Uf,{})]})}Ql.createRoot(document.getElementById("root")).render(f.jsx(yc.StrictMode,{children:f.jsx(Bf,{})}));
