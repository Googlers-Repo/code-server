exports.id=164,exports.ids=[164],exports.modules={7164:(e,n,t)=>{"use strict";t.r(n),t.d(n,{AppInsightsCore:()=>R,BaseCore:()=>H,BaseTelemetryPlugin:()=>b.i,CoreUtils:()=>B.Tr,DiagnosticLogger:()=>v.AQ,ESPromise:()=>K,ESPromiseScheduler:()=>X,EventHelper:()=>ne.zB,EventLatency:()=>s,EventPersistence:()=>f,EventPropertyType:()=>c,EventsDiscardedReason:()=>ee.h,FullVersionString:()=>B.vs,InternalAppInsightsCore:()=>j,InternalBaseCore:()=>L,LoggingSeverity:()=>a,MinChannelPriorty:()=>$,NotificationManager:()=>z,PerfEvent:()=>p.zn,PerfManager:()=>p.Jk,ProcessTelemetryContext:()=>S.Vi,TraceLevel:()=>d,Undefined:()=>re.jA,Utils:()=>B.cQ,ValueKind:()=>u,ValueSanitizer:()=>Y,Version:()=>B.Gf,_ExtendedInternalMessageId:()=>g,_InternalLogMessage:()=>v.lQ,_InternalMessageId:()=>l,__getRegisteredEvents:()=>te.um,_throwInternal:()=>v.kP,addEventHandler:()=>te.Ib,addEventListeners:()=>te.yw,addPageHideEventListener:()=>te.TJ,addPageShowEventListener:()=>te.nD,addPageUnloadEventListener:()=>te.c9,areCookiesSupported:()=>P.p7,arrForEach:()=>o.tO,arrIndexOf:()=>o.UA,arrMap:()=>o.Mr,arrReduce:()=>o.Xz,attachEvent:()=>te.pZ,cookieAvailable:()=>P.p7,createCookieMgr:()=>P.Nz,createEnumStyle:()=>r.By,createGuid:()=>B.cm,createProcessTelemetryContext:()=>S.CD,createTraceParent:()=>oe.SU,createUniqueNamespace:()=>w.J,createUnloadHandlerContainer:()=>x.Y,dateNow:()=>o.m6,deleteCookie:()=>B.kT,detachEvent:()=>te.pD,disableCookies:()=>B.oF,disallowsSameSiteNone:()=>P.UY,doPerf:()=>p.Lm,dumpObj:()=>m.eU,eventOff:()=>te.QY,eventOn:()=>te.XO,extend:()=>B.l7,findW3cTraceParent:()=>oe.lq,formatTraceParent:()=>oe.aR,generateW3CId:()=>ne.DO,getCommonSchemaMetaData:()=>B.Vv,getConsole:()=>m.dr,getCookie:()=>B.ej,getCookieValue:()=>B.Do,getCrypto:()=>m.MX,getDocument:()=>m.Me,getExceptionName:()=>o.jj,getFieldValueType:()=>B.Sy,getGlobal:()=>h.Rd,getGlobalInst:()=>m.a8,getHistory:()=>m.s1,getIEVersion:()=>m.sA,getISOString:()=>o.Y6,getJSON:()=>m.xA,getLocation:()=>m.k$,getMsCrypto:()=>m.gz,getNavigator:()=>m.jW,getPerformance:()=>m.r,getSetValue:()=>o.qK,getTenantId:()=>B.jM,getTime:()=>B.hK,getWindow:()=>m.Jj,hasDocument:()=>m.Nv,hasHistory:()=>m.fE,hasJSON:()=>m.nS,hasNavigator:()=>m.d6,hasOwnProperty:()=>o.nr,hasWindow:()=>m.Ym,isArray:()=>o.kJ,isArrayValid:()=>B.JT,isBeaconsSupported:()=>m.MF,isBoolean:()=>o.jn,isChromium:()=>B.mJ,isDate:()=>o.J_,isDocumentObjectAvailable:()=>B.x9,isError:()=>o.VZ,isFetchSupported:()=>m.JO,isFunction:()=>o.mf,isIE:()=>m.w1,isLatency:()=>B.r7,isNotTruthy:()=>o.F,isNullOrUndefined:()=>o.le,isNumber:()=>o.hj,isObject:()=>o.Kn,isReactNative:()=>m.b$,isSampledFlag:()=>oe.Pn,isString:()=>o.HD,isTruthy:()=>o.fQ,isTypeof:()=>o.Ym,isUint8ArrayAvailable:()=>B.IZ,isUndefined:()=>o.o8,isValidSpanId:()=>oe.Lc,isValidTraceId:()=>oe.jN,isValidTraceParent:()=>oe.J6,isValueAssigned:()=>B.Sn,isValueKind:()=>B.oS,isWindowObjectAvailable:()=>B.dH,isXhrSupported:()=>m.Z3,mergeEvtNamespace:()=>te.jU,newGuid:()=>ne.GW,newId:()=>ie.pZ,normalizeJsName:()=>o.Gf,objCreate:()=>h.pu,objDefineAccessors:()=>o.l_,objForEachKey:()=>o.rW,objFreeze:()=>o.FL,objKeys:()=>o.FY,objSeal:()=>o.Xi,openXhr:()=>B.ot,optimizeObject:()=>o.Ax,parseTraceParent:()=>oe.j_,perfNow:()=>ne.Jj,proxyAssign:()=>o.cf,proxyFunctionAs:()=>o.Oi,proxyFunctions:()=>o.Vb,random32:()=>ie._l,randomValue:()=>ie.az,removeEventHandler:()=>te.C1,removeEventListeners:()=>te.nJ,removePageHideEventListener:()=>te.C9,removePageShowEventListener:()=>te.Yl,removePageUnloadEventListener:()=>te.JA,safeGetCookieMgr:()=>P.JP,safeGetLogger:()=>v.vH,sanitizeProperty:()=>B.yj,setCookie:()=>B.d8,setEnableEnvMocks:()=>m.dI,setProcessTelemetryTimings:()=>B.if,setValue:()=>o.sO,strContains:()=>o._Q,strEndsWith:()=>o.Id,strFunction:()=>re.cb,strObject:()=>re.fK,strPrototype:()=>re.hB,strStartsWith:()=>o.xe,strTrim:()=>o.nd,strUndefined:()=>re.jA,throwError:()=>o._y,toISOString:()=>o.Y6,useXDomainRequest:()=>m.cp});var i=t(7421),r=t(951),o=t(4869),a=(0,r.By)({CRITICAL:1,WARNING:2}),l=(0,r.By)({BrowserDoesNotSupportLocalStorage:0,BrowserCannotReadLocalStorage:1,BrowserCannotReadSessionStorage:2,BrowserCannotWriteLocalStorage:3,BrowserCannotWriteSessionStorage:4,BrowserFailedRemovalFromLocalStorage:5,BrowserFailedRemovalFromSessionStorage:6,CannotSendEmptyTelemetry:7,ClientPerformanceMathError:8,ErrorParsingAISessionCookie:9,ErrorPVCalc:10,ExceptionWhileLoggingError:11,FailedAddingTelemetryToBuffer:12,FailedMonitorAjaxAbort:13,FailedMonitorAjaxDur:14,FailedMonitorAjaxOpen:15,FailedMonitorAjaxRSC:16,FailedMonitorAjaxSend:17,FailedMonitorAjaxGetCorrelationHeader:18,FailedToAddHandlerForOnBeforeUnload:19,FailedToSendQueuedTelemetry:20,FailedToReportDataLoss:21,FlushFailed:22,MessageLimitPerPVExceeded:23,MissingRequiredFieldSpecification:24,NavigationTimingNotSupported:25,OnError:26,SessionRenewalDateIsZero:27,SenderNotInitialized:28,StartTrackEventFailed:29,StopTrackEventFailed:30,StartTrackFailed:31,StopTrackFailed:32,TelemetrySampledAndNotSent:33,TrackEventFailed:34,TrackExceptionFailed:35,TrackMetricFailed:36,TrackPVFailed:37,TrackPVFailedCalc:38,TrackTraceFailed:39,TransmissionFailed:40,FailedToSetStorageBuffer:41,FailedToRestoreStorageBuffer:42,InvalidBackendResponse:43,FailedToFixDepricatedValues:44,InvalidDurationValue:45,TelemetryEnvelopeInvalid:46,CreateEnvelopeError:47,CannotSerializeObject:48,CannotSerializeObjectNonSerializable:49,CircularReferenceDetected:50,ClearAuthContextFailed:51,ExceptionTruncated:52,IllegalCharsInName:53,ItemNotInArray:54,MaxAjaxPerPVExceeded:55,MessageTruncated:56,NameTooLong:57,SampleRateOutOfRange:58,SetAuthContextFailed:59,SetAuthContextFailedAccountName:60,StringValueTooLong:61,StartCalledMoreThanOnce:62,StopCalledWithoutStart:63,TelemetryInitializerFailed:64,TrackArgumentsNotSpecified:65,UrlTooLong:66,SessionStorageBufferFull:67,CannotAccessCookie:68,IdTooLong:69,InvalidEvent:70,FailedMonitorAjaxSetRequestHeader:71,SendBrowserInfoOnUserInit:72,PluginException:73,NotificationException:74,SnippetScriptLoadFailure:99,InvalidInstrumentationKey:100,CannotParseAiBlobValue:101,InvalidContentBlob:102,TrackPageActionEventFailed:103,FailedAddingCustomDefinedRequestContext:104,InMemoryStorageBufferFull:105,InstrumentationKeyDeprecation:106}),u=(0,r.By)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),s=(0,r.By)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}),c=(0,r.By)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),f=(0,r.By)({Normal:1,Critical:2}),d=(0,r.By)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),g=(0,o.FL)((0,i.uc)((0,i.uc)({},l),(0,r.By)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520}))),v=t(9339),p=t(1782),m=t(9251),h=t(175),y=t(9141),S=t(1030),C=t(9031),P=t(8140),T=t(1733),I=t(8341),A=t(6335),E=500;function F(e,n,t,i){n&&(0,o.kJ)(n)&&n.length>0&&(n=n.sort((function(e,n){return e.priority-n.priority})),(0,o.tO)(n,(function(e){e.priority<E&&(0,o._y)("Channel has invalid priority - "+e.identifier)})),e.push({queue:(0,o.FL)(n),chain:(0,S.jV)(n,t,i)}))}var b=t(7951),O=function(e){function n(){var t,i,r=e.call(this)||this;function a(){t=0,i=[]}return r.identifier="TelemetryInitializerPlugin",r.priority=199,a(),(0,y.Z)(n,r,(function(e,n){e.addTelemetryInitializer=function(e){var n={id:t++,fn:e};return i.push(n),{remove:function(){(0,o.tO)(i,(function(e,t){if(e.id===n.id)return i.splice(t,1),-1}))}}},e.processTelemetry=function(n,t){for(var r=!1,a=i.length,l=0;l<a;++l){var u=i[l];if(u)try{if(!1===u.fn.apply(null,[n])){r=!0;break}}catch(e){(0,v.kP)(t.diagLog(),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,o.jj)(e),{exception:(0,m.eU)(e)},!0)}}r||e.processNext(n,t)},e[A.Ho]=function(){a()}})),r}return(0,i.ne)(n,e),n}(b.i),w=t(7624),x=t(8593),N="Plugins must provide initialize method",k="SDK is still unloading...",M={loggingLevelConsole:1};function D(e,n){return new p.Jk(n)}function _(e,n){var t=!1;return(0,o.tO)(n,(function(n){if(n===e)return t=!0,-1})),t}var L=function e(){var n,t,r,a,l,u,s,c,f,d,g,m,b,L,V,z,j,B,R,H=0;(0,y.Z)(e,this,(function(e){function y(){n=!1,e.config=(0,o.mm)(!0,{},M),e.logger=new v.AQ(e.config),e._extensions=[],L=new O,t=[],r=null,a=null,l=null,u=null,s=null,f=null,c=[],d=null,g=null,m=null,b=!1,V=null,z=(0,w.J)("AIBaseCore",!0),j=(0,x.Y)(),R=null}function U(){return(0,S.CD)(Z(),e.config,e)}function J(n,t){var i=function(e,n,t){var i=[],r={};return(0,o.tO)(t,(function(n){((0,o.le)(n)||(0,o.le)(n.initialize))&&(0,o._y)(N);var t=n.priority,a=n.identifier;n&&t&&((0,o.le)(r[t])?r[t]=a:(0,v.jV)(e,"Two extensions have same priority #"+t+" - "+r[t]+", "+a)),(!t||t<500)&&i.push(n)})),{all:t,core:i}}(e.logger,0,c);f=i.core,s=null;var r=i.all;if(m=(0,o.FL)(function(e,n,t,i){var r=[];if(e&&(0,o.tO)(e,(function(e){return F(r,e,t,i)})),n){var a=[];(0,o.tO)(n,(function(e){e.priority>E&&a.push(e)})),F(r,a,t,i)}return r}(g,r,n,e)),d){var a=(0,o.UA)(r,d);-1!==a&&r.splice(a,1),-1!==(a=(0,o.UA)(f,d))&&f.splice(a,1),d._setQueue(m)}else d=function(e,n){var t;function i(){return(0,S.CD)(null,n.config,n,null)}function r(e,n,t,i){var r=e?e.length+1:1;function a(){0==--r&&(i&&i(),i=null)}r>0&&(0,o.tO)(e,(function(e){if(e&&e.queue.length>0){var i=e.chain,o=n.createNew(i);o.onComplete(a),t(o)}else r--})),a()}var a=!1;return(t={identifier:"ChannelControllerPlugin",priority:E,initialize:function(n,t,i,r){a=!0,(0,o.tO)(e,(function(e){e&&e.queue.length>0&&(0,C.bP)((0,S.CD)(e.chain,n,t),i)}))},isInitialized:function(){return a},processTelemetry:function(n,t){r(e,t||i(),(function(e){e[A.Z_](n)}),(function(){t[A.Z_](n)}))},update:function(n,t){var i=t||{reason:0};return r(e,n,(function(e){e[A.Z_](i)}),(function(){n[A.Z_](i)})),!0}})[A.nE]=function(){r(e,i(),(function(e){e.iterate((function(e){e[A.nE]&&e[A.nE]()}))}),null)},t[A.Mf]=function(){r(e,i(),(function(e){e.iterate((function(e){e[A.Mf]&&e[A.Mf]()}))}),null)},t[A.vE]=function(n,t){var i=t||{reason:0,isAsync:!1};return r(e,n,(function(e){e[A.Z_](i)}),(function(){n[A.Z_](i),a=!1})),!0},t.getChannel=function(n){var t=null;return e&&e.length>0&&(0,o.tO)(e,(function(e){if(e&&e.queue.length>0&&((0,o.tO)(e.queue,(function(e){if(e.identifier===n)return t=e,-1})),t))return-1})),t},t.flush=function(n,t,o,a){var l=1,u=!1,s=null;function c(){l--,u&&0===l&&(s&&(clearTimeout(s),s=null),t&&t(u),t=null)}return a=a||5e3,r(e,i(),(function(e){e.iterate((function(e){if(e.flush){l++;var t=!1;e.flush(n,(function(){t=!0,c()}),o)||t||(n&&null==s?s=setTimeout((function(){s=null,c()}),a):c())}}))}),(function(){u=!0,c()})),!0},t._setQueue=function(n){e=n},t}(m,e);r.push(d),f.push(d),e._extensions=(0,C.AA)(r),d.initialize(n,e,r),(0,C.bP)(U(),r),e._extensions=(0,o.FL)((0,C.AA)(f||[])).slice(),t&&function(n){var t=(0,S.xy)(Z(),e);e._updateHook&&!0===e._updateHook(t,n)||t.processNext(n)}(t)}function K(n){var t=null,i=null;return(0,o.tO)(e._extensions,(function(e){if(e.identifier===n&&e!==d&&e!==L)return i=e,-1})),!i&&d&&(i=d.getChannel(n)),i&&(t={plugin:i,setEnabled:function(e){(0,C.OY)(i)[A.C0]=!e},isEnabled:function(){var e=(0,C.OY)(i);return!e[A.vE]&&!e[A.C0]},remove:function(n,t){void 0===n&&(n=!0);var r=[i];W(r,{reason:1,isAsync:n},(function(n){n&&J(e.config,{reason:32,removed:r}),t&&t(n)}))}}),t}function Z(){if(!s){var n=(f||[]).slice();-1===(0,o.UA)(n,L)&&n.push(L),s=(0,S.jV)((0,C.AA)(n),e.config,e)}return s}function W(n,t,i){if(n&&n.length>0){var r=(0,S.jV)(n,e.config,e),a=(0,S.Bt)(r,e);a.onComplete((function(){var e=!1,t=[];(0,o.tO)(c,(function(i,r){_(i,n)?e=!0:t.push(i)})),c=t;var r=[];g&&((0,o.tO)(g,(function(t,i){var a=[];(0,o.tO)(t,(function(t){_(t,n)?e=!0:a.push(t)})),r.push(a)})),g=r),i&&i(e)})),a.processNext(t)}else i(!1)}function q(){var n=e.logger?e.logger.queue:[];n&&((0,o.tO)(n,(function(n){var t={name:V||"InternalMessageId: "+n.messageId,iKey:e.config.instrumentationKey,time:(0,o.Y6)(new Date),baseType:v.lQ.dataType,baseData:{message:n.message}};e.track(t)})),n.length=0)}function Q(e,n,t,i){return d?d.flush(e,n,t||6,i):(n&&n(!1),!0)}function G(n){var t=e.logger;t?(0,v.kP)(t,2,73,n):(0,o._y)(n)}y(),e.isInitialized=function(){return n},e.initialize=function(t,a,u,s){b&&(0,o._y)(k),e.isInitialized()&&(0,o._y)("Core should not be initialized more than once"),t&&!(0,o.le)(t.instrumentationKey)||(0,o._y)("Please provide instrumentation key"),r=s,e._notificationManager=s,e.config=t||{},function(e){!0===e.disableDbgExt&&B&&(r[A.XP](B),B=null),r&&!B&&!0!==e.disableDbgExt&&(B=(0,I.p)(e),r[A.dV](B))}(t),function(n){!n.enablePerfMgr&&l&&(l=null),n.enablePerfMgr&&(0,o.sO)(e.config,"createPerfMgr",D)}(t),t.extensions=(0,o.le)(t.extensions)?[]:t.extensions,function(e){(0,o.qK)(e,T.F).NotificationManager=r}(t),u&&(e.logger=u),(c=[]).push.apply(c,(0,i.$h)((0,i.$h)([],a,!1),t.extensions,!1)),g=(t||{}).channels,J(t,null),m&&0!==m.length||(0,o._y)("No channels available"),n=!0,e.releaseQueue()},e.getTransmissionControls=function(){var e=[];return m&&(0,o.tO)(m,(function(n){e.push(n.queue)})),(0,o.FL)(e)},e.track=function(n){(0,o.sO)(n,T.z,e.config.instrumentationKey,null,o.F),(0,o.sO)(n,"time",(0,o.Y6)(new Date),null,o.F),(0,o.sO)(n,"ver","4.0",null,o.le),!b&&e.isInitialized()?U().processNext(n):t.push(n)},e.getProcessTelContext=U,e.getNotifyMgr=function(){var n;return r||(r=(0,h.pu)(((n={})[A.dV]=function(e){},n[A.XP]=function(e){},n[A.eO]=function(e){},n[A.H4]=function(e,n){},n[A.rX]=function(e,n){},n)),e._notificationManager=r),r},e[A.dV]=function(e){r&&r[A.dV](e)},e[A.XP]=function(e){r&&r[A.XP](e)},e.getCookieMgr=function(){return u||(u=(0,P.Nz)(e.config,e.logger)),u},e.setCookieMgr=function(e){u=e},e.getPerfMgr=function(){return a||l||e.config&&e.config.enablePerfMgr&&(0,o.mf)(e.config.createPerfMgr)&&(l=e.config.createPerfMgr(e,e.getNotifyMgr())),a||l||(0,p.j5)()},e.setPerfMgr=function(e){a=e},e.eventCnt=function(){return t.length},e.releaseQueue=function(){if(n&&t.length>0){var e=t;t=[],(0,o.tO)(e,(function(e){U().processNext(e)}))}},e.pollInternalLogs=function(n){V=n||null;var t=e.config.diagnosticLogInterval;return t&&t>0||(t=1e4),H&&clearInterval(H),H=setInterval((function(){q()}),t)},e.stopPollingInternalLogs=function(){H&&(clearInterval(H),H=0,q())},(0,o.Vb)(e,(function(){return L}),["addTelemetryInitializer"]),e.unload=function(t,i,r){void 0===t&&(t=!0),n||(0,o._y)("SDK is not initialized"),b&&(0,o._y)(k);var a={reason:50,isAsync:t,flushComplete:!1},l=(0,S.Bt)(Z(),e);function u(n){a.flushComplete=n,b=!0,j.run(l,a),e.stopPollingInternalLogs(),l.processNext(a)}l.onComplete((function(){y(),i&&i(a)}),e),Q(t,u,6,r)||u(!1)},e.getPlugin=K,e.addPlugin=function(n,t,i,r){if(!n)return r&&r(!1),void G(N);var o=K(n.identifier);if(o&&!t)return r&&r(!1),void G("Plugin ["+n.identifier+"] is already loaded!");var a={reason:16};function l(t){c.push(n),a.added=[n],J(e.config,a),r&&r(!0)}if(o){var u=[o.plugin];W(u,{reason:2,isAsync:!!i},(function(e){e?(a.removed=u,a.reason|=32,l()):r&&r(!1)}))}else l()},e.evtNamespace=function(){return z},e.flush=Q,e.getTraceCtx=function(e){return R||(R=(0,C.Yn)()),R},e.setTraceCtx=function(e){R=e||null},(0,o.Oi)(e,"addUnloadCb",(function(){return j}),"add")}))};function V(e,n,t,i){(0,o.tO)(e,(function(e){if(e&&e[n])if(t)setTimeout((function(){return i(e)}),0);else try{i(e)}catch(e){}}))}var z=function e(n){this.listeners=[];var t=!!(n||{}).perfEvtsSendAll;(0,y.Z)(e,this,(function(e){e[A.dV]=function(n){e.listeners.push(n)},e[A.XP]=function(n){for(var t=(0,o.UA)(e.listeners,n);t>-1;)e.listeners.splice(t,1),t=(0,o.UA)(e.listeners,n)},e[A.eO]=function(n){V(e.listeners,A.eO,!0,(function(e){e[A.eO](n)}))},e[A.H4]=function(n,t){V(e.listeners,A.H4,!0,(function(e){e[A.H4](n,t)}))},e[A.rX]=function(n,t){V(e.listeners,A.rX,t,(function(e){e[A.rX](n,t)}))},e[A.SN]=function(n){n&&(!t&&n.isChildEvt()||V(e.listeners,A.SN,!1,(function(e){n.isAsync?setTimeout((function(){return e[A.SN](n)}),0):e[A.SN](n)})))}}))},j=function(e){function n(){var t=e.call(this)||this;return(0,y.Z)(n,t,(function(e,n){function t(n){var t=e.getNotifyMgr();t&&t.eventsDiscarded([n],2)}e.initialize=function(e,t,i,r){n.initialize(e,t,i||new v.AQ(e),r||new z(e))},e.track=function(i){(0,p.Lm)(e.getPerfMgr(),(function(){return"AppInsightsCore:track"}),(function(){null===i&&(t(i),(0,o._y)("Invalid telemetry item")),function(e){(0,o.le)(e.name)&&(t(e),(0,o._y)("telemetry name required"))}(i),n.track(i)}),(function(){return{item:i}}),!i.sync)}})),t}return(0,i.ne)(n,e),n}(L),B=t(5705);const R=function(e){function n(){var t=e.call(this)||this;return t.pluginVersionStringArr=[],t.pluginVersionString="",(0,y.Z)(n,t,(function(e,n){e.logger&&e.logger.queue||(e.logger=new v.AQ({loggingLevelConsole:1})),e.initialize=function(t,i,r,a){(0,p.Lm)(e,(function(){return"AppInsightsCore.initialize"}),(function(){if(t){t.endpointUrl||(t.endpointUrl="https://browser.events.data.microsoft.com/OneCollector/1.0/");var l=t.propertyStorageOverride;if(l&&(!l.getProperty||!l.setProperty))throw new Error("Invalid property storage override passed.");t.channels&&(0,o.tO)(t.channels,(function(n){n&&(0,o.tO)(n,(function(n){if(n.identifier&&n.version){var t=n.identifier+"="+n.version;e.pluginVersionStringArr.push(t)}}))}))}e.getWParam=function(){return"undefined"!=typeof document?0:-1},i&&(0,o.tO)(i,(function(n){if(n&&n.identifier&&n.version){var t=n.identifier+"="+n.version;e.pluginVersionStringArr.push(t)}})),e.pluginVersionString=e.pluginVersionStringArr.join(";");try{n.initialize(t,i,r,a),e.pollInternalLogs("InternalLog")}catch(n){var u=e.logger,s=(0,m.eU)(n);-1!==s.indexOf("channels")&&(s+="\n - Channels must be provided through config.channels only!"),u.throwInternal(1,514,"SDK Initialization Failed - no telemetry will be sent: "+s)}}),(function(){return{config:t,extensions:i,logger:r,notificationManager:a}}))},e.track=function(t){(0,p.Lm)(e,(function(){return"AppInsightsCore.track"}),(function(){var i=t;if(i){i.timings=i.timings||{},i.timings.trackStart=(0,B.hK)(),(0,B.r7)(i.latency)||(i.latency=1);var r=i.ext=i.ext||{};r.sdk=r.sdk||{},r.sdk.ver=B.vs;var o=i.baseData=i.baseData||{};o.properties||(o.properties={});var a=o.properties;a.version||(a.version=""),""!==e.pluginVersionString&&(a.version=e.pluginVersionString)}n.track(i)}),(function(){return{item:t}}),!t.sync)}})),t}return(0,i.ne)(n,e),n}(j),H=function(e){function n(){var t=e.call(this)||this;return(0,y.Z)(n,t,(function(e,n){e.initialize=function(t,i,r,o){t&&!t.endpointUrl&&(t.endpointUrl="https://browser.events.data.microsoft.com/OneCollector/1.0/"),e.getWParam=function(){return B.x9?0:-1};try{n.initialize(t,i,r,o)}catch(n){(0,v.kP)(e.logger,1,514,"Initialization Failed: "+(0,m.eU)(n)+"\n - Note: Channels must be provided through config.channels only")}},e.track=function(e){var t=e;if(t){var i=t.ext=t.ext||{};i.sdk=i.sdk||{},i.sdk.ver=B.vs}n.track(t)}})),t}return(0,i.ne)(n,e),n}(L);var U=o.mf;function J(e,n,t){return function(i){e[n]=i,t()}}const K=function(){function e(n){var t=0,i=null,r=[];function o(){if(r.length>0){var e=r.slice();r=[],setTimeout((function(){for(var n=0,t=e.length;n<t;++n)try{e[n]()}catch(e){}}),0)}}function a(e){0===t&&(i=e,t=1,o())}function l(e){0===t&&(i=e,t=2,o())}(0,y.Z)(e,this,(function(n){n.then=function(n,a){return new e((function(l,u){!function(n,a,l,u){r.push((function(){var r;try{(r=1===t?U(n)?n(i):i:U(a)?a(i):i)instanceof e?r.then(l,u):2!==t||U(a)?l(r):u(r)}catch(e){return void u(e)}})),0!==t&&o()}(n,a,l,u)}))},n.catch=function(e){return n.then(null,e)}})),function(){if(!U(n))throw new TypeError("ESPromise: resolvedFunc argument is not a Function");try{n(a,l)}catch(e){l(e)}}()}return e.resolve=function(n){return n instanceof e?n:n&&U(n.then)?new e((function(e,t){try{n.then(e,t)}catch(e){t(e)}})):new e((function(e){e(n)}))},e.reject=function(n){return new e((function(e,t){t(n)}))},e.all=function(n){if(n&&n.length)return new e((function(e,t){try{for(var i=[],r=0,o=0;o<n.length;o++){var a=n[o];a&&U(a.then)?(r++,a.then(J(i,o,(function(){0==--r&&e(i)})),t)):i[o]=a}0===r&&setTimeout((function(){e(i)}),0)}catch(e){t(e)}}))},e.race=function(n){return new e((function(e,t){if(n&&n.length)try{for(var i=function(i){var r=n[i];r&&U(r.then)?r.then(e,t):setTimeout((function(){e(r)}),0)},r=0;r<n.length;r++)i(r)}catch(e){t(e)}}))},e}();var Z=0,W=[],q=[],Q=[];function G(){return(new Date).getTime()}const X=function(){function e(n,t){var i=0,r=(n||"<unnamed>")+"."+Z;function o(e){var n=(0,h.Rd)();n&&n.QUnit&&console&&console.log("ESPromiseScheduler["+r+"] "+e)}function a(e){t&&t.warnToConsole("ESPromiseScheduler["+r+"] "+e)}Z++,(0,y.Z)(e,this,(function(e){var n=null,t=0;function l(e,n){for(var t=0;t<e.length;t++)if(e[t].id===n)return e.splice(t,1)[0];return null}e.scheduleEvent=function(e,u,s){var c=r+"."+t;t++,u&&(c+="-("+u+")");var f=c+"{"+i+"}";i++;var d,g,v,p={evt:null,tm:G(),id:f,isRunning:!1,isAborted:!1};return p.evt=n?(d=p,g=n,v=new K((function(e,n){var t=G()-g.tm,i=g.id;o("["+c+"] is waiting for ["+i+":"+t+" ms] to complete before starting -- ["+q.length+"] waiting and ["+W.length+"] running"),d.abort=function(e){d.abort=null,l(q,c),d.isAborted=!0,n(new Error(e))},g.evt.then((function(t){l(q,c),P(d).then(e,n)}),(function(t){l(q,c),P(d).then(e,n)}))})),q.push(d),v):P(p),(n=p).evt._schId=f,p.evt;function m(e){for(var n=G(),t=n-6e5,i=e.length,r=0;r<i;){var o=e[r];if(o&&o.tm<t){var l=null;o.abort?(l="Aborting ["+o.id+"] due to Excessive runtime ("+(n-o.tm)+" ms)",o.abort(l)):l="Removing ["+o.id+"] due to Excessive runtime ("+(n-o.tm)+" ms)",a(l),e.splice(r,1),i--}else r++}}function h(e,t){var i=!1,r=l(W,e);if(r||(r=l(Q,e),i=!0),r){r.to&&(clearTimeout(r.to),r.to=null);var u=G()-r.tm;t?i?a("Timed out event ["+e+"] finally complete -- "+u+" ms"):o("Promise ["+e+"] Complete -- "+u+" ms"):(Q.push(r),a("Event ["+e+"] Timed out and removed -- "+u+" ms"))}else o("Failed to remove ["+e+"] from running queue");n&&n.id===e&&(n=null),m(W),m(q),m(Q)}function y(e,n){return function(t){return h(e,!0),n&&n(t),t}}function S(e,n,t,i){n.then((function(n){return n instanceof K?(o("Event ["+e+"] returned a promise -- waiting"),S(e,n,t,i),n):y(e,t)(n)}),y(e,i))}function C(e,n){var t=e.id;return new K((function(i,r){o("Event ["+t+"] Starting -- waited for "+(e.wTm||"--")+" ms"),e.isRunning=!0,e.abort=function(n){e.abort=null,e.isAborted=!0,h(t,!1),r(new Error(n))};var a=n(t);a instanceof K?(s&&(e.to=setTimeout((function(){h(t,!1),r(new Error("Timed out after ["+s+"] ms"))}),s)),S(t,a,(function(n){o("Event ["+t+"] Resolving after "+(G()-e.tm)+" ms"),i(n)}),r)):(o("Promise ["+t+"] Auto completed as the start action did not return a promise"),i())}))}function P(n){var t=G();return n.wTm=t-n.tm,n.tm=t,n.isAborted?K.reject(new Error("["+c+"] was aborted")):(W.push(n),C(n,e))}}}))}return e.incomplete=function(){return W},e.waitingToStart=function(){return q},e}();var Y=function(){function e(e){var n=this,t={},i=[],r=[];function a(e,n){var a,l=t[e];if(l&&(a=l[n]),!a&&null!==a){if((0,o.HD)(e)&&(0,o.HD)(n))if(r.length>0){for(var u=0;u<r.length;u++)if(r[u].handleField(e,n)){a={canHandle:!0,fieldHandler:r[u]};break}}else 0===i.length&&(a={canHandle:!0});if(!a&&null!==a)for(a=null,u=0;u<i.length;u++)if(i[u].handleField(e,n)){a={canHandle:!0,handler:i[u],fieldHandler:null};break}l||(l=t[e]={}),l[n]=a}return a}function l(e,n,t,i,r,a){if(e.handler)return e.handler.property(n,t,r,a);if(!(0,o.le)(r.kind)){if(4096==(4096&i)||!(0,B.oS)(r.kind))return null;r.value=r.value.toString()}return s(e.fieldHandler,n,t,i,r)}function u(e,n,t){return(0,B.Sn)(t)?{value:t}:null}function s(e,t,i,r,a){if(a&&e){var l=e.getSanitizer(t,i,r,a.kind,a.propertyType);if(l)if(4===r){var c={},f=a.value;(0,o.rW)(f,(function(n,r){var o=t+"."+i;if((0,B.Sn)(r)){var a=u(0,0,r);(a=s(e,o,n,(0,B.Sy)(r),a))&&(c[n]=a.value)}})),a.value=c}else{var d={path:t,name:i,type:r,prop:a,sanitizer:n};a=l.call(n,d)}}return a}e&&r.push(e),n.addSanitizer=function(e){e&&(i.push(e),t={})},n.addFieldSanitizer=function(e){e&&(r.push(e),t={})},n.handleField=function(e,n){var t=a(e,n);return!!t&&t.canHandle},n.value=function(e,n,t,i){var r=a(e,n);if(r&&r.canHandle){if(!r||!r.canHandle)return null;if(r.handler)return r.handler.value(e,n,t,i);if(!(0,o.HD)(n)||(0,o.le)(t)||""===t)return null;var s=null,c=(0,B.Sy)(t);if(8192==(8192&c)){var f=-8193&c;if(s=t,!(0,B.Sn)(s.value)||1!==f&&2!==f&&3!==f&&4096!=(4096&f))return null}else 1===c||2===c||3===c||4096==(4096&c)?s=u(0,0,t):4===c&&(s=u(0,0,i?JSON.stringify(t):t));if(s)return l(r,e,n,c,s,i)}return null},n.property=function(e,n,t,i){var r=a(e,n);if(!r||!r.canHandle)return null;if(!(0,o.HD)(n)||(0,o.le)(t)||!(0,B.Sn)(t.value))return null;var u=(0,B.Sy)(t.value);return 0===u?null:l(r,e,n,u,t,i)}}return e.getFieldType=B.Sy,e}(),$=100,ee=t(8452),ne=t(8956),te=t(7954),ie=t(9406),re=t(1550),oe=t(6207)}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/129500ee4c8ab7263461ffe327268ba56b9f210d/extensions/markdown-language-features/dist/164.js.map