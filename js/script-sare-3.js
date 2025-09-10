(()=>{var e={9904:function(){"use strict";!function(){
    if("undefined"==typeof window)return;let e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),t=!!e&&parseInt(e[1],10)>=16;if("objectFit"in document.documentElement.style!=!1&&!t){window.objectFitPolyfill=function(){return!1};return}let n=function(e){let t=window.getComputedStyle(e,null),n=t.getPropertyValue("position"),a=t.getPropertyValue("overflow"),i=t.getPropertyValue("display");n&&"static"!==n||(e.style.position="relative"),"hidden"!==a&&(e.style.overflow="hidden"),i&&"inline"!==i||(e.style.display="block"),0===e.clientHeight&&(e.style.height="100%"),-1===e.className.indexOf("object-fit-polyfill")&&(e.className+=" object-fit-polyfill")},a=function(e){let t=window.getComputedStyle(e,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(let a in n)t.getPropertyValue(a)!==n[a]&&(e.style[a]=n[a])},i=function(e){let t=e.parentNode;n(t),a(e),e.style.position="absolute",e.style.height="100%",e.style.width="auto",e.clientWidth>t.clientWidth?(e.style.top="0",e.style.marginTop="0",e.style.left="50%",e.style.marginLeft=-(e.clientWidth/2)+"px"):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",e.style.top="50%",e.style.marginTop=-(e.clientHeight/2)+"px")},r=function(e){if(void 0===e||e instanceof Event)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else if("object"!=typeof e||!e.length||!e[0].nodeName)return!1;for(let n=0;n<e.length;n++){if(!e[n].nodeName)continue;let a=e[n].nodeName.toLowerCase();if("img"===a){if(t)continue;e[n].complete?i(e[n]):e[n].addEventListener("load",function(){i(this)})}else"video"===a?e[n].readyState>0?i(e[n]):e[n].addEventListener("loadedmetadata",function(){i(this)}):i(e[n])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",r):r(),window.addEventListener("resize",r),window.objectFitPolyfill=r}()},1724:function(){"use strict";function e(e){Sare.env("design")||($("video").each(function(){e&&$(this).prop("autoplay")?this.play():this.pause()}),$(".w-background-video--control").each(function(){e?n($(this)):t($(this))}))}function t(e){e.find("> span").each(function(e){$(this).prop("hidden",()=>0===e)})}function n(e){e.find("> span").each(function(e){$(this).prop("hidden",()=>1===e)})}"undefined"!=typeof window&&$(document).ready(()=>{let a=window.matchMedia("(prefers-reduced-motion: reduce)");a.addEventListener("change",t=>{e(!t.matches)}),a.matches&&e(!1),$("video:not([autoplay])").each(function(){$(this).parent().find(".w-background-video--control").each(function(){t($(this))})}),$(document).on("click",".w-background-video--control",function(e){if(Sare.env("design"))return;let a=$(e.currentTarget),i=$(`video#${a.attr("aria-controls")}`).get(0);if(i)if(i.paused){let e=i.play();n(a),e&&"function"==typeof e.catch&&e.catch(()=>{t(a)})}else i.pause(),t(a)})})},7199:function(e){"use strict";var t=window.jQuery,n={},a=[],i=".w-ix",r={reset:function(e,t){t.__wf_intro=null},intro:function(e,a){a.__wf_intro||(a.__wf_intro=!0,t(a).triggerHandler(n.types.INTRO))},outro:function(e,a){a.__wf_intro&&(a.__wf_intro=null,t(a).triggerHandler(n.types.OUTRO))}};n.triggers={},n.types={INTRO:"w-ix-intro"+i,OUTRO:"w-ix-outro"+i},n.init=function(){for(var e=a.length,i=0;i<e;i++){var o=a[i];o[0](0,o[1])}a=[],t.extend(n.triggers,r)},n.async=function(){for(var e in r){var t=r[e];r.hasOwnProperty(e)&&(n.triggers[e]=function(e,n){a.push([t,n])})}},n.async(),e.exports=n},5134:function(e,t,n){"use strict";var a=n(7199);function i(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent(t,!0,!0,null),e.dispatchEvent(n)}var r=window.jQuery,o={},c=".w-ix";o.triggers={},o.types={INTRO:"w-ix-intro"+c,OUTRO:"w-ix-outro"+c},r.extend(o.triggers,{reset:function(e,t){a.triggers.reset(e,t)},intro:function(e,t){a.triggers.intro(e,t),i(t,"COMPONENT_ACTIVE")},outro:function(e,t){a.triggers.outro(e,t),i(t,"COMPONENT_INACTIVE")}}),e.exports=o},941:function(e,t,n){"use strict";var a=n(3949),i=n(6011);i.setEnv(a.env),a.define("ix2",e.exports=function(){return i})},2458:function(e,t,n){"use strict";var a=n(3949),i="w-condition-invisible",r="."+i;function o(e){return!!(e.$el&&e.$el.closest(r).length)}function c(e,t){for(var n=e;n>=0;n--)if(!o(t[n]))return n;return -1}function u(e,t){for(var n=e;n<=t.length-1;n++)if(!o(t[n]))return n;return -1}function l(e,t){e.attr("aria-label")||e.attr("aria-label",t)}a.define("lightbox",e.exports=function(e){var t,n,r,s={},d=a.env(),f=function(e,t,n,a){var r,s,d,f=n.tram,g=Array.isArray,p=/(^|\s+)/g,E=[],y=[];function I(e,t){return E=g(e)?e:[e],s||I.build(),E.filter(function(e){return!o(e)}).length>1&&(s.items=s.empty,E.forEach(function(e,t){var n=D("thumbnail"),a=D("item").prop("tabIndex",0).attr("aria-controls","w-lightbox-view").attr("role","tab").append(n);l(a,`show item ${t+1} of ${E.length}`),o(e)&&a.addClass(i),s.items=s.items.add(a),L(e.thumbnailUrl||e.url,function(e){e.prop("width")>e.prop("height")?F(e,"wide"):F(e,"tall"),n.append(F(e,"thumbnail-image"))})}),s.strip.empty().append(s.items),F(s.content,"group")),f(M(s.lightbox,"hide").trigger("focus")).add("opacity .3s").start({opacity:1}),F(s.html,"noscroll"),I.show(t||0)}function T(e){return function(t){this===t.target&&(t.stopPropagation(),t.preventDefault(),e())}}I.build=function(){return I.destroy(),(s={html:n(t.documentElement),empty:n()}).arrowLeft=D("control left inactive").attr("role","button").attr("aria-hidden",!0).attr("aria-controls","w-lightbox-view"),s.arrowRight=D("control right inactive").attr("role","button").attr("aria-hidden",!0).attr("aria-controls","w-lightbox-view"),s.close=D("control close").attr("role","button"),l(s.arrowLeft,"previous image"),l(s.arrowRight,"next image"),l(s.close,"close lightbox"),s.spinner=D("spinner").attr("role","progressbar").attr("aria-live","polite").attr("aria-hidden",!1).attr("aria-busy",!0).attr("aria-valuemin",0).attr("aria-valuemax",100).attr("aria-valuenow",0).attr("aria-valuetext","Loading image"),s.strip=D("strip").attr("role","tablist"),d=new N(s.spinner,P("hide")),s.content=D("content").append(s.spinner,s.arrowLeft,s.arrowRight,s.close),s.container=D("container").append(s.content,s.strip),s.lightbox=D("backdrop hide").append(s.container),s.strip.on("click",w("item"),_),s.content.on("swipe",h).on("click",w("left"),m).on("click",w("right"),b).on("click",w("close"),O).on("click",w("image, caption"),b),s.container.on("click",w("view"),O).on("dragstart",w("img"),A),s.lightbox.on("keydown",S).on("focusin",v),n(a).append(s.lightbox),I},I.destroy=function(){s&&(M(s.html,"noscroll"),s.lightbox.remove(),s=void 0)},I.show=function(e){if(e!==r){var t,a=E[e];if(!a)return I.hide();if(o(a)){if(e<r){var i=c(e-1,E);e=i>-1?i:e}else{var l=u(e+1,E);e=l>-1?l:e}a=E[e]}var g=r;return r=e,s.spinner.attr("aria-hidden",!1).attr("aria-busy",!0).attr("aria-valuenow",0).attr("aria-valuetext","Loading image"),d.show(),L(a.html&&(t=a.width,"data:image/svg+xml;charset=utf-8,"+encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+a.height+'"/>'))||a.url,function(t){if(e===r){var i,o,l=D("figure","figure").append(F(t,"image")),p=D("frame").append(l),y=D("view").prop("tabIndex",0).attr("id","w-lightbox-view").append(p);a.html&&((o=(i=n(a.html)).is("iframe"))&&i.on("load",I),l.append(F(i,"embed"))),a.caption&&l.append(D("caption","figcaption").text(a.caption)),s.spinner.before(y),o||I()}function I(){if(s.spinner.attr("aria-hidden",!0).attr("aria-busy",!1).attr("aria-valuenow",100).attr("aria-valuetext","Loaded image"),d.hide(),e!==r)return void y.remove();let t=-1===c(e-1,E);G(s.arrowLeft,"inactive",t),x(s.arrowLeft,t),t&&s.arrowLeft.is(":focus")&&s.arrowRight.focus();let n=-1===u(e+1,E);if(G(s.arrowRight,"inactive",n),x(s.arrowRight,n),n&&s.arrowRight.is(":focus")&&s.arrowLeft.focus(),s.view?(f(s.view).add("opacity .3s").start({opacity:0}).then((a=s.view,function(){a.remove()})),f(y).add("opacity .3s").add("transform .3s").set({x:e>g?"80px":"-80px"}).start({opacity:1,x:0})):y.css("opacity",1),s.view=y,s.view.prop("tabIndex",0),s.items){M(s.items,"active"),s.items.removeAttr("aria-selected");var a,i,o,l,p,I,T,m,b,O=s.items.eq(e);F(O,"active"),O.attr("aria-selected",!0),o=O.get(0),l=s.strip.get(0),p=o.offsetLeft,I=o.clientWidth,T=l.scrollLeft,m=l.clientWidth,b=l.scrollWidth-m,p<T?i=Math.max(0,p+I-m):p+I>m+T&&(i=Math.min(p,b)),null!=i&&f(s.strip).add("scroll-left 500ms").start({"scroll-left":i})}}}),s.close.prop("tabIndex",0),n(":focus").addClass("active-lightbox"),0===y.length&&(n("body").children().each(function(){n(this).hasClass("w-lightbox-backdrop")||n(this).is("script")||(y.push({node:n(this),hidden:n(this).attr("aria-hidden"),tabIndex:n(this).attr("tabIndex")}),n(this).attr("aria-hidden",!0).attr("tabIndex",-1))}),s.close.focus()),I}},I.hide=function(){return f(s.lightbox).add("opacity .3s").start({opacity:0}).then(C),I},I.prev=function(){var e=c(r-1,E);e>-1&&I.show(e)},I.next=function(){var e=u(r+1,E);e>-1&&I.show(e)};var m=T(I.prev),b=T(I.next),O=T(I.hide),_=function(e){var t=n(this).index();e.preventDefault(),I.show(t)},h=function(e,t){e.preventDefault(),"left"===t.direction?I.next():"right"===t.direction&&I.prev()},v=function(){this.focus()};function A(e){e.preventDefault()}function S(e){var t=e.keyCode;27===t||R(t,"close")?I.hide():37===t||R(t,"left")?I.prev():39===t||R(t,"right")?I.next():R(t,"item")&&n(":focus").click()}function R(e,t){if(13!==e&&32!==e)return!1;var a=n(":focus").attr("class"),i=P(t).trim();return a.includes(i)}function C(){s&&(s.strip.scrollLeft(0).empty(),M(s.html,"noscroll"),F(s.lightbox,"hide"),s.view&&s.view.remove(),M(s.content,"group"),F(s.arrowLeft,"inactive"),F(s.arrowRight,"inactive"),r=s.view=void 0,y.forEach(function(e){var t=e.node;t&&(e.hidden?t.attr("aria-hidden",e.hidden):t.removeAttr("aria-hidden"),e.tabIndex?t.attr("tabIndex",e.tabIndex):t.removeAttr("tabIndex"))}),y=[],n(".active-lightbox").removeClass("active-lightbox").focus())}function L(e,t){var n=D("img","img");return n.one("load",function(){t(n)}),n.attr("src",e),n}function N(e,t,n){this.$element=e,this.className=t,this.delay=n||200,this.hide()}function P(e,t){return e.replace(p,(t?" .":" ")+"w-lightbox-")}function w(e){return P(e,!0)}function F(e,t){return e.addClass(P(t))}function M(e,t){return e.removeClass(P(t))}function G(e,t,n){return e.toggleClass(P(t),n)}function x(e,t){return e.attr("aria-hidden",t).attr("tabIndex",t?-1:0)}function D(e,a){return F(n(t.createElement(a||"div")),e)}N.prototype.show=function(){var e=this;e.timeoutId||(e.timeoutId=setTimeout(function(){e.$element.removeClass(e.className),delete e.timeoutId},e.delay))},N.prototype.hide=function(){if(this.timeoutId){clearTimeout(this.timeoutId),delete this.timeoutId;return}this.$element.addClass(this.className)};var V=e.navigator.userAgent,U=V.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);if(V.indexOf("Android ")>-1&&-1===V.indexOf("Chrome")||U&&!(U[2]>7)){var k=t.createElement("style");t.head.appendChild(k),e.addEventListener("resize",X,!0),X()}function X(){var t=e.innerHeight,n=e.innerWidth,a=".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+t+"px}.w-lightbox-view {width:"+n+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.86*t+"px}.w-lightbox-image {max-width:"+n+"px;max-height:"+t+"px}.w-lightbox-group .w-lightbox-image {max-height:"+.86*t+"px}.w-lightbox-strip {padding: 0 "+.01*t+"px}.w-lightbox-item {width:"+.1*t+"px;padding:"+.02*t+"px "+.01*t+"px}.w-lightbox-thumbnail {height:"+.1*t+"px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+.96*t+"px}.w-lightbox-content {margin-top:"+.02*t+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.84*t+"px}.w-lightbox-image {max-width:"+.96*n+"px;max-height:"+.96*t+"px}.w-lightbox-group .w-lightbox-image {max-width:"+.823*n+"px;max-height:"+.84*t+"px}}";k.textContent=a}return I}(window,document,e,d?"#lightbox-mountpoint":"body"),g=e(document),p=".w-lightbox";function E(e){var t,n,a,i=e.el.children(".w-json").html();if(!i){e.items=[];return}try{i=JSON.parse(i)}catch(e){console.error("Malformed lightbox JSON configuration.",e)}(t=i).images&&(t.images.forEach(function(e){e.type="image"}),t.items=t.images),t.embed&&(t.embed.type="video",t.items=[t.embed]),t.groupId&&(t.group=t.groupId),i.items.forEach(function(t){t.$el=e.el}),(n=i.group)?((a=r[n])||(a=r[n]=[]),e.items=a,i.items.length&&(e.index=a.length,a.push.apply(a,i.items))):(e.items=i.items,e.index=0)}return s.ready=s.design=s.preview=function(){n=d&&a.env("design"),f.destroy(),r={},(t=g.find(p)).sareLightBox(),t.each(function(){l(e(this),"open lightbox"),e(this).attr("aria-haspopup","dialog")})},jQuery.fn.extend({sareLightBox:function(){e.each(this,function(t,a){var i,r=e.data(a,p);r||(r=e.data(a,p,{el:e(a),mode:"images",images:[],embed:""})),r.el.off(p),E(r),n?r.el.on("setting"+p,E.bind(null,r)):r.el.on("click"+p,(i=r,function(){i.items.length&&f(i.items,i.index||0)})).on("click"+p,function(e){e.preventDefault()})})}}),s})},9078:function(e,t,n){"use strict";var a=n(3949),i=n(5134);a.define("tabs",e.exports=function(e){var t,n,r={},o=e.tram,c=e(document),u=a.env,l=u.safari,s=u(),d="data-w-tab",f=".w-tabs",g="w--current",p="w--tab-active",E=i.triggers,y=!1;function I(){n=s&&a.env("design"),(t=c.find(f)).length&&(t.each(b),a.env("preview")&&!y&&t.each(m),T(),a.redraw.on(r.redraw))}function T(){a.redraw.off(r.redraw)}function m(t,n){var a=e.data(n,f);a&&(a.links&&a.links.each(E.reset),a.panes&&a.panes.each(E.reset))}function b(t,a){var i=f.substr(1)+"-"+t,r=e(a),o=e.data(a,f);if(o||(o=e.data(a,f,{el:r,config:{}})),o.current=null,o.tabIdentifier=i+"-"+d,o.paneIdentifier=i+"-data-w-pane",o.menu=r.children(".w-tab-menu"),o.links=o.menu.children(".w-tab-link"),o.content=r.children(".w-tab-content"),o.panes=o.content.children(".w-tab-pane"),o.el.off(f),o.links.off(f),o.menu.attr("role","tablist"),o.links.attr("tabindex","-1"),(u={}).easing=(c=o).el.attr("data-easing")||"ease",l=u.intro=(l=parseInt(c.el.attr("data-duration-in"),10))==l?l:0,s=u.outro=(s=parseInt(c.el.attr("data-duration-out"),10))==s?s:0,u.immediate=!l&&!s,c.config=u,!n){o.links.on("click"+f,(p=o,function(e){e.preventDefault();var t=e.currentTarget.getAttribute(d);t&&O(p,{tab:t})})),o.links.on("keydown"+f,(E=o,function(e){var t,n=(t=E.current,Array.prototype.findIndex.call(E.links,e=>e.getAttribute(d)===t,null)),a=e.key,i={ArrowLeft:n-1,ArrowUp:n-1,ArrowRight:n+1,ArrowDown:n+1,End:E.links.length-1,Home:0};if(a in i){e.preventDefault();var r=i[a];-1===r&&(r=E.links.length-1),r===E.links.length&&(r=0);var o=E.links[r].getAttribute(d);o&&O(E,{tab:o})}}));var c,u,l,s,p,E,y=o.links.filter("."+g).attr(d);y&&O(o,{tab:y,immediate:!0})}}function O(t,n){n=n||{};var i,r=t.config,c=r.easing,u=n.tab;if(u!==t.current){t.current=u,t.links.each(function(a,o){var c=e(o);if(n.immediate||r.immediate){var l=t.panes[a];o.id||(o.id=t.tabIdentifier+"-"+a),l.id||(l.id=t.paneIdentifier+"-"+a),o.href="#"+l.id,o.setAttribute("role","tab"),o.setAttribute("aria-controls",l.id),o.setAttribute("aria-selected","false"),l.setAttribute("role","tabpanel"),l.setAttribute("aria-labelledby",o.id)}o.getAttribute(d)===u?(i=o,c.addClass(g).removeAttr("tabindex").attr({"aria-selected":"true"}).each(E.intro)):c.hasClass(g)&&c.removeClass(g).attr({tabindex:"-1","aria-selected":"false"}).each(E.outro)});var s=[],f=[];t.panes.each(function(t,n){var a=e(n);n.getAttribute(d)===u?s.push(n):a.hasClass(p)&&f.push(n)});var I=e(s),T=e(f);if(n.immediate||r.immediate){I.addClass(p).each(E.intro),T.removeClass(p),y||a.redraw.up();return}var m=window.scrollX,b=window.scrollY;i.focus(),window.scrollTo(m,b),T.length&&r.outro?(T.each(E.outro),o(T).add("opacity "+r.outro+"ms "+c,{fallback:l}).start({opacity:0}).then(()=>_(r,T,I))):_(r,T,I)}}function _(e,t,n){if(t.removeClass(p).css({opacity:"",transition:"",transform:"",width:"",height:""}),n.addClass(p).each(E.intro),a.redraw.up(),!e.intro)return o(n).set({opacity:1});o(n).set({opacity:0}).redraw().add("opacity "+e.intro+"ms "+e.easing,{fallback:l}).start({opacity:1})}return r.ready=r.design=r.preview=I,r.redraw=function(){y=!0,I(),y=!1},r.destroy=function(){(t=c.find(f)).length&&(t.each(m),T())},r})},3946:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={actionListPlaybackChanged:function(){return H},animationFrameChanged:function(){return U},clearRequested:function(){return G},elementStateChanged:function(){return B},eventListenerAdded:function(){return x},eventStateChanged:function(){return V},instanceAdded:function(){return X},instanceRemoved:function(){return j},instanceStarted:function(){return Y},mediaQueriesDefined:function(){return z},parameterChanged:function(){return k},playbackRequested:function(){return F},previewRequested:function(){return w},rawDataImported:function(){return C},sessionInitialized:function(){return L},sessionStarted:function(){return N},sessionStopped:function(){return P},stopRequested:function(){return M},testFrameRendered:function(){return D},viewportWidthChanged:function(){return W}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=n(7087),o=n(9468),{IX2_RAW_DATA_IMPORTED:c,IX2_SESSION_INITIALIZED:u,IX2_SESSION_STARTED:l,IX2_SESSION_STOPPED:s,IX2_PREVIEW_REQUESTED:d,IX2_PLAYBACK_REQUESTED:f,IX2_STOP_REQUESTED:g,IX2_CLEAR_REQUESTED:p,IX2_EVENT_LISTENER_ADDED:E,IX2_TEST_FRAME_RENDERED:y,IX2_EVENT_STATE_CHANGED:I,IX2_ANIMATION_FRAME_CHANGED:T,IX2_PARAMETER_CHANGED:m,IX2_INSTANCE_ADDED:b,IX2_INSTANCE_STARTED:O,IX2_INSTANCE_REMOVED:_,IX2_ELEMENT_STATE_CHANGED:h,IX2_ACTION_LIST_PLAYBACK_CHANGED:v,IX2_VIEWPORT_WIDTH_CHANGED:A,IX2_MEDIA_QUERIES_DEFINED:S}=r.IX2EngineActionTypes,{reifyState:R}=o.IX2VanillaUtils,C=e=>({type:c,payload:{...R(e)}}),L=({hasBoundaryNodes:e,reducedMotion:t})=>({type:u,payload:{hasBoundaryNodes:e,reducedMotion:t}}),N=()=>({type:l}),P=()=>({type:s}),w=({rawData:e,defer:t})=>({type:d,payload:{defer:t,rawData:e}}),F=({actionTypeId:e=r.ActionTypeConsts.GENERAL_START_ACTION,actionListId:t,actionItemId:n,eventId:a,allowEvents:i,immediate:o,testManual:c,verbose:u,rawData:l})=>({type:f,payload:{actionTypeId:e,actionListId:t,actionItemId:n,testManual:c,eventId:a,allowEvents:i,immediate:o,verbose:u,rawData:l}}),M=e=>({type:g,payload:{actionListId:e}}),G=()=>({type:p}),x=(e,t)=>({type:E,payload:{target:e,listenerParams:t}}),D=(e=1)=>({type:y,payload:{step:e}}),V=(e,t)=>({type:I,payload:{stateKey:e,newState:t}}),U=(e,t)=>({type:T,payload:{now:e,parameters:t}}),k=(e,t)=>({type:m,payload:{key:e,value:t}}),X=e=>({type:b,payload:{...e}}),Y=(e,t)=>({type:O,payload:{instanceId:e,time:t}}),j=e=>({type:_,payload:{instanceId:e}}),B=(e,t,n,a)=>({type:h,payload:{elementId:e,actionTypeId:t,current:n,actionItem:a}}),H=({actionListId:e,isPlaying:t})=>({type:v,payload:{actionListId:e,isPlaying:t}}),W=({width:e,mediaQueries:t})=>({type:A,payload:{width:e,mediaQueries:t}}),z=()=>({type:S})},6011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i={actions:function(){return l},destroy:function(){return p},init:function(){return g},setEnv:function(){return f},store:function(){return d}};for(var r in i)Object.defineProperty(t,r,{enumerable:!0,get:i[r]});let o=n(9516),c=(a=n(7243))&&a.__esModule?a:{default:a},u=n(1970),l=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(3946));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}let d=(0,o.createStore)(c.default);function f(e){e()&&(0,u.observeRequests)(d)}function g(e){p(),(0,u.startEngine)({store:d,rawData:e,allowEvents:!0})}function p(){(0,u.stopEngine)(d)}},5012:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={elementContains:function(){return m},getChildElements:function(){return O},getClosestElement:function(){return h},getProperty:function(){return p},getQuerySelector:function(){return y},getRefType:function(){return v},getSiblingElements:function(){return _},getStyle:function(){return g},getValidDocument:function(){return I},isSiblingNode:function(){return b},matchSelector:function(){return E},queryDocument:function(){return T},setStyle:function(){return f}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=n(9468),o=n(7087),{ELEMENT_MATCHES:c}=r.IX2BrowserSupport,{IX2_ID_DELIMITER:u,HTML_ELEMENT:l,PLAIN_OBJECT:s,WF_PAGE:d}=o.IX2EngineConstants;function f(e,t,n){e.style[t]=n}function g(e,t){return t.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(t):e.style instanceof CSSStyleDeclaration?e.style[t]:void 0}function p(e,t){return e[t]}function E(e){return t=>t[c](e)}function y({id:e,selector:t}){if(e){let t=e;if(-1!==e.indexOf(u)){let n=e.split(u),a=n[0];if(t=n[1],a!==document.documentElement.getAttribute(d))return null}return`[data-w-id="${t}"], [data-w-id^="${t}_instance"]`}return t}function I(e){return null==e||e===document.documentElement.getAttribute(d)?document:null}function T(e,t){return Array.prototype.slice.call(document.querySelectorAll(t?e+" "+t:e))}function m(e,t){return e.contains(t)}function b(e,t){return e!==t&&e.parentNode===t.parentNode}function O(e){let t=[];for(let n=0,{length:a}=e||[];n<a;n++){let{children:a}=e[n],{length:i}=a;if(i)for(let e=0;e<i;e++)t.push(a[e])}return t}function _(e=[]){let t=[],n=[];for(let a=0,{length:i}=e;a<i;a++){let{parentNode:i}=e[a];if(!i||!i.children||!i.children.length||-1!==n.indexOf(i))continue;n.push(i);let r=i.firstElementChild;for(;null!=r;)-1===e.indexOf(r)&&t.push(r),r=r.nextElementSibling}return t}let h=Element.prototype.closest?(e,t)=>document.documentElement.contains(e)?e.closest(t):null:(e,t)=>{if(!document.documentElement.contains(e))return null;let n=e;do{if(n[c]&&n[c](t))return n;n=n.parentNode}while(null!=n);return null};function v(e){return null!=e&&"object"==typeof e?e instanceof Element?l:s:null}},1970:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={observeRequests:function(){return Z},startActionGroup:function(){return eE},startEngine:function(){return ei},stopActionGroup:function(){return ep},stopAllActionGroups:function(){return eg},stopEngine:function(){return er}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=T(n(9777)),o=T(n(4738)),c=T(n(4659)),u=T(n(3452)),l=T(n(6633)),s=T(n(3729)),d=T(n(2397)),f=T(n(5082)),g=n(7087),p=n(9468),E=n(3946),y=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(5012)),I=T(n(8955));function T(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}let b=Object.keys(g.QuickEffectIds),O=e=>b.includes(e),{COLON_DELIMITER:_,BOUNDARY_SELECTOR:h,HTML_ELEMENT:v,RENDER_GENERAL:A,W_MOD_IX:S}=g.IX2EngineConstants,{getAffectedElements:R,getElementId:C,getDestinationValues:L,observeStore:N,getInstanceId:P,renderHTMLElement:w,clearAllStyles:F,getMaxDurationItemIndex:M,getComputedStyle:G,getInstanceOrigin:x,reduceListToGroup:D,shouldNamespaceEventParameter:V,getNamespacedParameterId:U,shouldAllowMediaQuery:k,cleanupHTMLElement:X,clearObjectCache:Y,stringifyTarget:j,mediaQueriesEqual:B,shallowEqual:H}=p.IX2VanillaUtils,{isPluginType:W,createPluginInstance:z,getPluginDuration:Q}=p.IX2VanillaPlugins,K=navigator.userAgent,q=K.match(/iPad/i)||K.match(/iPhone/);function Z(e){N({store:e,select:({ixRequest:e})=>e.preview,onChange:J}),N({store:e,select:({ixRequest:e})=>e.playback,onChange:et}),N({store:e,select:({ixRequest:e})=>e.stop,onChange:en}),N({store:e,select:({ixRequest:e})=>e.clear,onChange:ea})}function J({rawData:e,defer:t},n){let a=()=>{ei({store:n,rawData:e,allowEvents:!0}),ee()};t?setTimeout(a,0):a()}function ee(){document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))}function et(e,t){let{actionTypeId:n,actionListId:a,actionItemId:i,eventId:r,allowEvents:o,immediate:c,testManual:u,verbose:l=!0}=e,{rawData:s}=e;if(a&&i&&s&&c){let e=s.actionLists[a];e&&(s=D({actionList:e,actionItemId:i,rawData:s}))}if(ei({store:t,rawData:s,allowEvents:o,testManual:u}),a&&n===g.ActionTypeConsts.GENERAL_START_ACTION||O(n)){ep({store:t,actionListId:a}),ef({store:t,actionListId:a,eventId:r});let e=eE({store:t,eventId:r,actionListId:a,immediate:c,verbose:l});l&&e&&t.dispatch((0,E.actionListPlaybackChanged)({actionListId:a,isPlaying:!c}))}}function en({actionListId:e},t){e?ep({store:t,actionListId:e}):eg({store:t}),er(t)}function ea(e,t){er(t),F({store:t,elementApi:y})}function ei({store:e,rawData:t,allowEvents:n,testManual:a}){let{ixSession:i}=e.getState();if(t&&e.dispatch((0,E.rawDataImported)(t)),!i.active){(e.dispatch((0,E.sessionInitialized)({hasBoundaryNodes:!!document.querySelector(h),reducedMotion:document.body.hasAttribute("data-wf-ix-vacation")&&window.matchMedia("(prefers-reduced-motion)").matches})),n)&&(function(e){let{ixData:t}=e.getState(),{eventTypeMap:n}=t;eu(e),(0,d.default)(n,(t,n)=>{let a=I.default[n];if(!a)return void console.warn(`IX2 event type not configured: ${n}`);!function({logic:e,store:t,events:n}){!function(e){if(!q)return;let t={},n="";for(let a in e){let{eventTypeId:i,target:r}=e[a],o=y.getQuerySelector(r);t[o]||(i===g.EventTypeConsts.MOUSE_CLICK||i===g.EventTypeConsts.MOUSE_SECOND_CLICK)&&(t[o]=!0,n+=o+"{cursor: pointer;touch-action: manipulation;}")}if(n){let e=document.createElement("style");e.textContent=n,document.body.appendChild(e)}}(n);let{types:a,handler:i}=e,{ixData:u}=t.getState(),{actionLists:l}=u,s=el(n,ed);if(!(0,c.default)(s))return;(0,d.default)(s,(e,a)=>{let i=n[a],{action:c,id:s,mediaQueries:d=u.mediaQueryKeys}=i,{actionListId:f}=c.config;B(d,u.mediaQueryKeys)||t.dispatch((0,E.mediaQueriesDefined)()),c.actionTypeId===g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION&&(Array.isArray(i.config)?i.config:[i.config]).forEach(n=>{let{continuousParameterGroupId:a}=n,i=(0,o.default)(l,`${f}.continuousParameterGroups`,[]),c=(0,r.default)(i,({id:e})=>e===a),u=(n.smoothing||0)/100,d=(n.restingState||0)/100;c&&e.forEach((e,a)=>{!function({store:e,eventStateKey:t,eventTarget:n,eventId:a,eventConfig:i,actionListId:r,parameterGroup:c,smoothing:u,restingValue:l}){let{ixData:s,ixSession:d}=e.getState(),{events:f}=s,p=f[a],{eventTypeId:E}=p,I={},T={},m=[],{continuousActionGroups:b}=c,{id:O}=c;V(E,i)&&(O=U(t,O));let v=d.hasBoundaryNodes&&n?y.getClosestElement(n,h):null;b.forEach(e=>{let{keyframe:t,actionItems:a}=e;a.forEach(e=>{let{actionTypeId:a}=e,{target:i}=e.config;if(!i)return;let r=i.boundaryMode?v:null,o=j(i)+_+a;if(T[o]=function(e=[],t,n){let a,i=[...e];return i.some((e,n)=>e.keyframe===t&&(a=n,!0)),null==a&&(a=i.length,i.push({keyframe:t,actionItems:[]})),i[a].actionItems.push(n),i}(T[o],t,e),!I[o]){I[o]=!0;let{config:t}=e;R({config:t,event:p,eventTarget:n,elementRoot:r,elementApi:y}).forEach(e=>{m.push({element:e,key:o})})}})}),m.forEach(({element:t,key:n})=>{let i=T[n],c=(0,o.default)(i,"[0].actionItems[0]",{}),{actionTypeId:s}=c,d=(s===g.ActionTypeConsts.PLUGIN_RIVE?0===(c.config?.target?.selectorGuids||[]).length:W(s))?z(s)?.(t,c):null,f=L({element:t,actionItem:c,elementApi:y},d);ey({store:e,element:t,eventId:a,actionListId:r,actionItem:c,destination:f,continuous:!0,parameterId:O,actionGroups:i,smoothing:u,restingValue:l,pluginInstance:d})})}({store:t,eventStateKey:s+_+a,eventTarget:e,eventId:s,eventConfig:n,actionListId:f,parameterGroup:c,smoothing:u,restingValue:d})})}),(c.actionTypeId===g.ActionTypeConsts.GENERAL_START_ACTION||O(c.actionTypeId))&&ef({store:t,actionListId:f,eventId:s})});let p=e=>{let{ixSession:a}=t.getState();es(s,(r,o,c)=>{let l=n[o],s=a.eventState[c],{action:d,mediaQueries:f=u.mediaQueryKeys}=l;if(!k(f,a.mediaQueryKey))return;let p=(n={})=>{let a=i({store:t,element:r,event:l,eventConfig:n,nativeEvent:e,eventStateKey:c},s);H(a,s)||t.dispatch((0,E.eventStateChanged)(c,a))};d.actionTypeId===g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION?(Array.isArray(l.config)?l.config:[l.config]).forEach(p):p()})},I=(0,f.default)(p,12),T=({target:e=document,types:n,throttle:a})=>{n.split(" ").filter(Boolean).forEach(n=>{let i=a?I:p;e.addEventListener(n,i),t.dispatch((0,E.eventListenerAdded)(e,[n,i]))})};Array.isArray(a)?a.forEach(T):"string"==typeof a&&T(e)}({logic:a,store:e,events:t})});let{ixSession:a}=e.getState();a.eventListeners.length&&function(e){let t=()=>{eu(e)};ec.forEach(n=>{window.addEventListener(n,t),e.dispatch((0,E.eventListenerAdded)(window,[n,t]))}),t()}(e)}(e),function(){let{documentElement:e}=document;-1===e.className.indexOf(S)&&(e.className+=` ${S}`)}(),e.getState().ixSession.hasDefinedMediaQueries&&N({store:e,select:({ixSession:e})=>e.mediaQueryKey,onChange:()=>{er(e),F({store:e,elementApi:y}),ei({store:e,allowEvents:!0}),ee()}}));e.dispatch((0,E.sessionStarted)()),function(e,t){let n=a=>{let{ixSession:i,ixParameters:r}=e.getState();if(i.active)if(e.dispatch((0,E.animationFrameChanged)(a,r)),t){let t=N({store:e,select:({ixSession:e})=>e.tick,onChange:e=>{n(e),t()}})}else requestAnimationFrame(n)};n(window.performance.now())}(e,a)}}function er(e){let{ixSession:t}=e.getState();if(t.active){let{eventListeners:n}=t;n.forEach(eo),Y(),e.dispatch((0,E.sessionStopped)())}}function eo({target:e,listenerParams:t}){e.removeEventListener.apply(e,t)}let ec=["resize","orientationchange"];function eu(e){let{ixSession:t,ixData:n}=e.getState(),a=window.innerWidth;if(a!==t.viewportWidth){let{mediaQueries:t}=n;e.dispatch((0,E.viewportWidthChanged)({width:a,mediaQueries:t}))}}let el=(e,t)=>(0,u.default)((0,s.default)(e,t),l.default),es=(e,t)=>{(0,d.default)(e,(e,n)=>{e.forEach((e,a)=>{t(e,n,n+_+a)})})},ed=e=>R({config:{target:e.target,targets:e.targets},elementApi:y});function ef({store:e,actionListId:t,eventId:n}){let{ixData:a,ixSession:i}=e.getState(),{actionLists:r,events:c}=a,u=c[n],l=r[t];if(l&&l.useFirstGroupAsInitialState){let r=(0,o.default)(l,"actionItemGroups[0].actionItems",[]);if(!k((0,o.default)(u,"mediaQueries",a.mediaQueryKeys),i.mediaQueryKey))return;r.forEach(a=>{let{config:i,actionTypeId:r}=a,o=R({config:i?.target?.useEventTarget===!0&&i?.target?.objectId==null?{target:u.target,targets:u.targets}:i,event:u,elementApi:y}),c=W(r);o.forEach(i=>{let o=c?z(r)?.(i,a):null;ey({destination:L({element:i,actionItem:a,elementApi:y},o),immediate:!0,store:e,element:i,eventId:n,actionItem:a,actionListId:t,pluginInstance:o})})})}}function eg({store:e}){let{ixInstances:t}=e.getState();(0,d.default)(t,t=>{if(!t.continuous){let{actionListId:n,verbose:a}=t;eI(t,e),a&&e.dispatch((0,E.actionListPlaybackChanged)({actionListId:n,isPlaying:!1}))}})}function ep({store:e,eventId:t,eventTarget:n,eventStateKey:a,actionListId:i}){let{ixInstances:r,ixSession:c}=e.getState(),u=c.hasBoundaryNodes&&n?y.getClosestElement(n,h):null;(0,d.default)(r,n=>{let r=(0,o.default)(n,"actionItem.config.target.boundaryMode"),c=!a||n.eventStateKey===a;if(n.actionListId===i&&n.eventId===t&&c){if(u&&r&&!y.elementContains(u,n.element))return;eI(n,e),n.verbose&&e.dispatch((0,E.actionListPlaybackChanged)({actionListId:i,isPlaying:!1}))}})}function eE({store:e,eventId:t,eventTarget:n,eventStateKey:a,actionListId:i,groupIndex:r=0,immediate:c,verbose:u}){let{ixData:l,ixSession:s}=e.getState(),{events:d}=l,f=d[t]||{},{mediaQueries:g=l.mediaQueryKeys}=f,{actionItemGroups:p,useFirstGroupAsInitialState:E}=(0,o.default)(l,`actionLists.${i}`,{});if(!p||!p.length)return!1;r>=p.length&&(0,o.default)(f,"config.loop")&&(r=0),0===r&&E&&r++;let I=(0===r||1===r&&E)&&O(f.action?.actionTypeId)?f.config.delay:void 0,T=(0,o.default)(p,[r,"actionItems"],[]);if(!T.length||!k(g,s.mediaQueryKey))return!1;let m=s.hasBoundaryNodes&&n?y.getClosestElement(n,h):null,b=M(T),_=!1;return T.forEach((o,l)=>{let{config:s,actionTypeId:d}=o,g=W(d),{target:p}=s;p&&R({config:s,event:f,eventTarget:n,elementRoot:p.boundaryMode?m:null,elementApi:y}).forEach((s,f)=>{let p=g?z(d)?.(s,o):null,E=g?Q(d)(s,o):null;_=!0;let T=G({element:s,actionItem:o}),m=L({element:s,actionItem:o,elementApi:y},p);ey({store:e,element:s,actionItem:o,eventId:t,eventTarget:n,eventStateKey:a,actionListId:i,groupIndex:r,isCarrier:b===l&&0===f,computedStyle:T,destination:m,immediate:c,verbose:u,pluginInstance:p,pluginDuration:E,instanceDelay:I})})}),_}function ey(e){let t,{store:n,computedStyle:a,...i}=e,{element:r,actionItem:o,immediate:c,pluginInstance:u,continuous:l,restingValue:s,eventId:d}=i,f=P(),{ixElements:p,ixSession:I,ixData:T}=n.getState(),m=C(p,r),{refState:b}=p[m]||{},O=y.getRefType(r),_=I.reducedMotion&&g.ReducedMotionTypes[o.actionTypeId];if(_&&l)switch(T.events[d]?.eventTypeId){case g.EventTypeConsts.MOUSE_MOVE:case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:t=s;break;default:t=.5}let h=x(r,b,a,o,y,u);if(n.dispatch((0,E.instanceAdded)({instanceId:f,elementId:m,origin:h,refType:O,skipMotion:_,skipToValue:t,...i})),eT(document.body,"ix2-animation-started",f),c)return void function(e,t){let{ixParameters:n}=e.getState();e.dispatch((0,E.instanceStarted)(t,0)),e.dispatch((0,E.animationFrameChanged)(performance.now(),n));let{ixInstances:a}=e.getState();em(a[t],e)}(n,f);N({store:n,select:({ixInstances:e})=>e[f],onChange:em}),l||n.dispatch((0,E.instanceStarted)(f,I.tick))}function eI(e,t){eT(document.body,"ix2-animation-stopping",{instanceId:e.id,state:t.getState()});let{elementId:n,actionItem:a}=e,{ixElements:i}=t.getState(),{ref:r,refType:o}=i[n]||{};o===v&&X(r,a,y),t.dispatch((0,E.instanceRemoved)(e.id))}function eT(e,t,n){let a=document.createEvent("CustomEvent");a.initCustomEvent(t,!0,!0,n),e.dispatchEvent(a)}function em(e,t){let{active:n,continuous:a,complete:i,elementId:r,actionItem:o,actionTypeId:c,renderType:u,current:l,groupIndex:s,eventId:d,eventTarget:f,eventStateKey:g,actionListId:p,isCarrier:I,styleProp:T,verbose:m,pluginInstance:b}=e,{ixData:O,ixSession:_}=t.getState(),{events:h}=O,{mediaQueries:S=O.mediaQueryKeys}=h&&h[d]?h[d]:{};if(k(S,_.mediaQueryKey)&&(a||n||i)){if(l||u===A&&i){t.dispatch((0,E.elementStateChanged)(r,c,l,o));let{ixElements:e}=t.getState(),{ref:n,refType:a,refState:i}=e[r]||{},s=i&&i[c];(a===v||W(c))&&w(n,i,s,d,o,T,y,u,b)}if(i){if(I){let e=eE({store:t,eventId:d,eventTarget:f,eventStateKey:g,actionListId:p,groupIndex:s+1,verbose:m});m&&!e&&t.dispatch((0,E.actionListPlaybackChanged)({actionListId:p,isPlaying:!1}))}eI(e,t)}}}},8955:function(e,t,n){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return ep}});let i=d(n(5801)),r=d(n(4738)),o=d(n(3789)),c=n(7087),u=n(1970),l=n(3946),s=n(9468);function d(e){return e&&e.__esModule?e:{default:e}}let{MOUSE_CLICK:f,MOUSE_SECOND_CLICK:g,MOUSE_DOWN:p,MOUSE_UP:E,MOUSE_OVER:y,MOUSE_OUT:I,DROPDOWN_CLOSE:T,DROPDOWN_OPEN:m,SLIDER_ACTIVE:b,SLIDER_INACTIVE:O,TAB_ACTIVE:_,TAB_INACTIVE:h,NAVBAR_CLOSE:v,NAVBAR_OPEN:A,MOUSE_MOVE:S,PAGE_SCROLL_DOWN:R,SCROLL_INTO_VIEW:C,SCROLL_OUT_OF_VIEW:L,PAGE_SCROLL_UP:N,SCROLLING_IN_VIEW:P,PAGE_FINISH:w,ECOMMERCE_CART_CLOSE:F,ECOMMERCE_CART_OPEN:M,PAGE_START:G,PAGE_SCROLL:x}=c.EventTypeConsts,D="COMPONENT_ACTIVE",V="COMPONENT_INACTIVE",{COLON_DELIMITER:U}=c.IX2EngineConstants,{getNamespacedParameterId:k}=s.IX2VanillaUtils,X=e=>t=>!!("object"==typeof t&&e(t))||t,Y=X(({element:e,nativeEvent:t})=>e===t.target),j=X(({element:e,nativeEvent:t})=>e.contains(t.target)),B=(0,i.default)([Y,j]),H=(e,t)=>{if(t){let{ixData:n}=e.getState(),{events:a}=n,i=a[t];if(i&&!et[i.eventTypeId])return i}return null},W=({store:e,event:t})=>{let{action:n}=t,{autoStopEventId:a}=n.config;return!!H(e,a)},z=({store:e,event:t,element:n,eventStateKey:a},i)=>{let{action:o,id:c}=t,{actionListId:l,autoStopEventId:s}=o.config,d=H(e,s);return d&&(0,u.stopActionGroup)({store:e,eventId:s,eventTarget:n,eventStateKey:s+U+a.split(U)[1],actionListId:(0,r.default)(d,"action.config.actionListId")}),(0,u.stopActionGroup)({store:e,eventId:c,eventTarget:n,eventStateKey:a,actionListId:l}),(0,u.startActionGroup)({store:e,eventId:c,eventTarget:n,eventStateKey:a,actionListId:l}),i},Q=(e,t)=>(n,a)=>!0===e(n,a)?t(n,a):a,K={handler:Q(B,z)},q={...K,types:[D,V].join(" ")},Z=[{target:window,types:"resize orientationchange",throttle:!0},{target:document,types:"scroll wheel readystatechange IX2_PAGE_UPDATE",throttle:!0}],J="mouseover mouseout",ee={types:Z},et={PAGE_START:G,PAGE_FINISH:w},en=(()=>{let e=void 0!==window.pageXOffset,t="CSS1Compat"===document.compatMode?document.documentElement:document.body;return()=>({scrollLeft:e?window.pageXOffset:t.scrollLeft,scrollTop:e?window.pageYOffset:t.scrollTop,stiffScrollTop:(0,o.default)(e?window.pageYOffset:t.scrollTop,0,t.scrollHeight-window.innerHeight),scrollWidth:t.scrollWidth,scrollHeight:t.scrollHeight,clientWidth:t.clientWidth,clientHeight:t.clientHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight})})(),ea=(e,t)=>!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top),ei=({element:e,nativeEvent:t})=>{let{type:n,target:a,relatedTarget:i}=t,r=e.contains(a);if("mouseover"===n&&r)return!0;let o=e.contains(i);return"mouseout"===n&&!!r&&!!o},er=e=>{let{element:t,event:{config:n}}=e,{clientWidth:a,clientHeight:i}=en(),r=n.scrollOffsetValue,o="PX"===n.scrollOffsetUnit?r:i*(r||0)/100;return ea(t.getBoundingClientRect(),{left:0,top:o,right:a,bottom:i-o})},eo=e=>(t,n)=>{let{type:a}=t.nativeEvent,i=-1!==[D,V].indexOf(a)?a===D:n.isActive,r={...n,isActive:i};return(!n||r.isActive!==n.isActive)&&e(t,r)||r},ec=e=>(t,n)=>{let a={elementHovered:ei(t)};return(n?a.elementHovered!==n.elementHovered:a.elementHovered)&&e(t,a)||a},eu=e=>(t,n={})=>{let a,i,{stiffScrollTop:r,scrollHeight:o,innerHeight:c}=en(),{event:{config:u,eventTypeId:l}}=t,{scrollOffsetValue:s,scrollOffsetUnit:d}=u,f=o-c,g=Number((r/f).toFixed(2));if(n&&n.percentTop===g)return n;let p=("PX"===d?s:c*(s||0)/100)/f,E=0;n&&(a=g>n.percentTop,E=(i=n.scrollingDown!==a)?g:n.anchorTop);let y=l===R?g>=E+p:g<=E-p,I={...n,percentTop:g,inBounds:y,anchorTop:E,scrollingDown:a};return n&&y&&(i||I.inBounds!==n.inBounds)&&e(t,I)||I},el=(e,t)=>e.left>t.left&&e.left<t.right&&e.top>t.top&&e.top<t.bottom,es=e=>(t,n={clickCount:0})=>{let a={clickCount:n.clickCount%2+1};return a.clickCount!==n.clickCount&&e(t,a)||a},ed=(e=!0)=>({...q,handler:Q(e?B:Y,eo((e,t)=>t.isActive?K.handler(e,t):t))}),ef=(e=!0)=>({...q,handler:Q(e?B:Y,eo((e,t)=>t.isActive?t:K.handler(e,t)))}),eg={...ee,handler:(a=(e,t)=>{let{elementVisible:n}=t,{event:a,store:i}=e,{ixData:r}=i.getState(),{events:o}=r;return!o[a.action.config.autoStopEventId]&&t.triggered?t:a.eventTypeId===C===n?(z(e),{...t,triggered:!0}):t},(e,t)=>{let n={...t,elementVisible:er(e)};return(t?n.elementVisible!==t.elementVisible:n.elementVisible)&&a(e,n)||n})},ep={[b]:ed(),[O]:ef(),[m]:ed(),[T]:ef(),[A]:ed(!1),[v]:ef(!1),[_]:ed(),[h]:ef(),[M]:{types:"ecommerce-cart-open",handler:Q(B,z)},[F]:{types:"ecommerce-cart-close",handler:Q(B,z)},[f]:{types:"click",handler:Q(B,es((e,{clickCount:t})=>{W(e)?1===t&&z(e):z(e)}))},[g]:{types:"click",handler:Q(B,es((e,{clickCount:t})=>{2===t&&z(e)}))},[p]:{...K,types:"mousedown"},[E]:{...K,types:"mouseup"},[y]:{types:J,handler:Q(B,ec((e,t)=>{t.elementHovered&&z(e)}))},[I]:{types:J,handler:Q(B,ec((e,t)=>{t.elementHovered||z(e)}))},[S]:{types:"mousemove mouseout scroll",handler:({store:e,element:t,eventConfig:n,nativeEvent:a,eventStateKey:i},r={clientX:0,clientY:0,pageX:0,pageY:0})=>{let{basedOn:o,selectedAxis:u,continuousParameterGroupId:s,reverse:d,restingState:f=0}=n,{clientX:g=r.clientX,clientY:p=r.clientY,pageX:E=r.pageX,pageY:y=r.pageY}=a,I="X_AXIS"===u,T="mouseout"===a.type,m=f/100,b=s,O=!1;switch(o){case c.EventBasedOn.VIEWPORT:m=I?Math.min(g,window.innerWidth)/window.innerWidth:Math.min(p,window.innerHeight)/window.innerHeight;break;case c.EventBasedOn.PAGE:{let{scrollLeft:e,scrollTop:t,scrollWidth:n,scrollHeight:a}=en();m=I?Math.min(e+E,n)/n:Math.min(t+y,a)/a;break}case c.EventBasedOn.ELEMENT:default:{b=k(i,s);let e=0===a.type.indexOf("mouse");if(e&&!0!==B({element:t,nativeEvent:a}))break;let n=t.getBoundingClientRect(),{left:r,top:o,width:c,height:u}=n;if(!e&&!el({left:g,top:p},n))break;O=!0,m=I?(g-r)/c:(p-o)/u}}return T&&(m>.95||m<.05)&&(m=Math.round(m)),(o!==c.EventBasedOn.ELEMENT||O||O!==r.elementHovered)&&(m=d?1-m:m,e.dispatch((0,l.parameterChanged)(b,m))),{elementHovered:O,clientX:g,clientY:p,pageX:E,pageY:y}}},[x]:{types:Z,handler:({store:e,eventConfig:t})=>{let{continuousParameterGroupId:n,reverse:a}=t,{scrollTop:i,scrollHeight:r,clientHeight:o}=en(),c=i/(r-o);c=a?1-c:c,e.dispatch((0,l.parameterChanged)(n,c))}},[P]:{types:Z,handler:({element:e,store:t,eventConfig:n,eventStateKey:a},i={scrollPercent:0})=>{let{scrollLeft:r,scrollTop:o,scrollWidth:u,scrollHeight:s,clientHeight:d}=en(),{basedOn:f,selectedAxis:g,continuousParameterGroupId:p,startsEntering:E,startsExiting:y,addEndOffset:I,addStartOffset:T,addOffsetValue:m=0,endOffsetValue:b=0}=n;if(f===c.EventBasedOn.VIEWPORT){let e="X_AXIS"===g?r/u:o/s;return e!==i.scrollPercent&&t.dispatch((0,l.parameterChanged)(p,e)),{scrollPercent:e}}{let n=k(a,p),r=e.getBoundingClientRect(),o=(T?m:0)/100,c=(I?b:0)/100;o=E?o:1-o,c=y?c:1-c;let u=r.top+Math.min(r.height*o,d),f=Math.min(d+(r.top+r.height*c-u),s),g=Math.min(Math.max(0,d-u),f)/f;return g!==i.scrollPercent&&t.dispatch((0,l.parameterChanged)(n,g)),{scrollPercent:g}}}},[C]:eg,[L]:eg,[R]:{...ee,handler:eu((e,t)=>{t.scrollingDown&&z(e)})},[N]:{...ee,handler:eu((e,t)=>{t.scrollingDown||z(e)})},[w]:{types:"readystatechange IX2_PAGE_UPDATE",handler:Q(Y,(e,t)=>{let n={finished:"complete"===document.readyState};return n.finished&&!(t&&t.finshed)&&z(e),n})},[G]:{types:"readystatechange IX2_PAGE_UPDATE",handler:Q(Y,(e,t)=>(t||z(e),{started:!0}))}}},4609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ixData",{enumerable:!0,get:function(){return i}});let{IX2_RAW_DATA_IMPORTED:a}=n(7087).IX2EngineActionTypes,i=(e=Object.freeze({}),t)=>t.type===a?t.payload.ixData||Object.freeze({}):e},7718:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ixInstances",{enumerable:!0,get:function(){return O}});let a=n(7087),i=n(9468),r=n(1185),{IX2_RAW_DATA_IMPORTED:o,IX2_SESSION_STOPPED:c,IX2_INSTANCE_ADDED:u,IX2_INSTANCE_STARTED:l,IX2_INSTANCE_REMOVED:s,IX2_ANIMATION_FRAME_CHANGED:d}=a.IX2EngineActionTypes,{optimizeFloat:f,applyEasing:g,createBezierEasing:p}=i.IX2EasingUtils,{RENDER_GENERAL:E}=a.IX2EngineConstants,{getItemConfigByKey:y,getRenderType:I,getStyleProp:T}=i.IX2VanillaUtils,m=(e,t)=>{let n,a,i,o,{position:c,parameterId:u,actionGroups:l,destinationKeys:s,smoothing:d,restingValue:p,actionTypeId:E,customEasingFn:I,skipMotion:T,skipToValue:m}=e,{parameters:b}=t.payload,O=Math.max(1-d,.01),_=b[u];null==_&&(O=1,_=p);let h=f((Math.max(_,0)||0)-c),v=T?m:f(c+h*O),A=100*v;if(v===c&&e.current)return e;for(let e=0,{length:t}=l;e<t;e++){let{keyframe:t,actionItems:r}=l[e];if(0===e&&(n=r[0]),A>=t){n=r[0];let c=l[e+1],u=c&&A!==t;a=u?c.actionItems[0]:null,u&&(i=t/100,o=(c.keyframe-t)/100)}}let S={};if(n&&!a)for(let e=0,{length:t}=s;e<t;e++){let t=s[e];S[t]=y(E,t,n.config)}else if(n&&a&&void 0!==i&&void 0!==o){let e=(v-i)/o,t=g(n.config.easing,e,I);for(let e=0,{length:i}=s;e<i;e++){let i=s[e],r=y(E,i,n.config),o=(y(E,i,a.config)-r)*t+r;S[i]=o}}return(0,r.merge)(e,{position:v,current:S})},b=(e,t)=>{let{active:n,origin:a,start:i,immediate:o,renderType:c,verbose:u,actionItem:l,destination:s,destinationKeys:d,pluginDuration:p,instanceDelay:y,customEasingFn:I,skipMotion:T}=e,m=l.config.easing,{duration:b,delay:O}=l.config;null!=p&&(b=p),O=null!=y?y:O,c===E?b=0:(o||T)&&(b=O=0);let{now:_}=t.payload;if(n&&a){let t=_-(i+O);if(u){let t=b+O,n=f(Math.min(Math.max(0,(_-i)/t),1));e=(0,r.set)(e,"verboseTimeElapsed",t*n)}if(t<0)return e;let n=f(Math.min(Math.max(0,t/b),1)),o=g(m,n,I),c={},l=null;return d.length&&(l=d.reduce((e,t)=>{let n=s[t],i=parseFloat(a[t])||0,r=parseFloat(n)-i;return e[t]=r*o+i,e},{})),c.current=l,c.position=n,1===n&&(c.active=!1,c.complete=!0),(0,r.merge)(e,c)}return e},O=(e=Object.freeze({}),t)=>{switch(t.type){case o:return t.payload.ixInstances||Object.freeze({});case c:return Object.freeze({});case u:{let{instanceId:n,elementId:a,actionItem:i,eventId:o,eventTarget:c,eventStateKey:u,actionListId:l,groupIndex:s,isCarrier:d,origin:f,destination:g,immediate:E,verbose:y,continuous:m,parameterId:b,actionGroups:O,smoothing:_,restingValue:h,pluginInstance:v,pluginDuration:A,instanceDelay:S,skipMotion:R,skipToValue:C}=t.payload,{actionTypeId:L}=i,N=I(L),P=T(N,L),w=Object.keys(g).filter(e=>null!=g[e]&&"string"!=typeof g[e]),{easing:F}=i.config;return(0,r.set)(e,n,{id:n,elementId:a,active:!1,position:0,start:0,origin:f,destination:g,destinationKeys:w,immediate:E,verbose:y,current:null,actionItem:i,actionTypeId:L,eventId:o,eventTarget:c,eventStateKey:u,actionListId:l,groupIndex:s,renderType:N,isCarrier:d,styleProp:P,continuous:m,parameterId:b,actionGroups:O,smoothing:_,restingValue:h,pluginInstance:v,pluginDuration:A,instanceDelay:S,skipMotion:R,skipToValue:C,customEasingFn:Array.isArray(F)&&4===F.length?p(F):void 0})}case l:{let{instanceId:n,time:a}=t.payload;return(0,r.mergeIn)(e,[n],{active:!0,complete:!1,start:a})}case s:{let{instanceId:n}=t.payload;if(!e[n])return e;let a={},i=Object.keys(e),{length:r}=i;for(let t=0;t<r;t++){let r=i[t];r!==n&&(a[r]=e[r])}return a}case d:{let n=e,a=Object.keys(e),{length:i}=a;for(let o=0;o<i;o++){let i=a[o],c=e[i],u=c.continuous?m:b;n=(0,r.set)(n,i,u(c,t))}return n}default:return e}}},1540:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ixParameters",{enumerable:!0,get:function(){return o}});let{IX2_RAW_DATA_IMPORTED:a,IX2_SESSION_STOPPED:i,IX2_PARAMETER_CHANGED:r}=n(7087).IX2EngineActionTypes,o=(e={},t)=>{switch(t.type){case a:return t.payload.ixParameters||{};case i:return{};case r:{let{key:n,value:a}=t.payload;return e[n]=a,e}default:return e}}},7243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let a=n(9516),i=n(4609),r=n(628),o=n(5862),c=n(9468),u=n(7718),l=n(1540),{ixElements:s}=c.IX2ElementsReducer,d=(0,a.combineReducers)({ixData:i.ixData,ixRequest:r.ixRequest,ixSession:o.ixSession,ixElements:s,ixInstances:u.ixInstances,ixParameters:l.ixParameters})},628:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ixRequest",{enumerable:!0,get:function(){return d}});let a=n(7087),i=n(1185),{IX2_PREVIEW_REQUESTED:r,IX2_PLAYBACK_REQUESTED:o,IX2_STOP_REQUESTED:c,IX2_CLEAR_REQUESTED:u}=a.IX2EngineActionTypes,l={preview:{},playback:{},stop:{},clear:{}},s=Object.create(null,{[r]:{value:"preview"},[o]:{value:"playback"},[c]:{value:"stop"},[u]:{value:"clear"}}),d=(e=l,t)=>{if(t.type in s){let n=[s[t.type]];return(0,i.setIn)(e,[n],{...t.payload})}return e}},5862:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ixSession",{enumerable:!0,get:function(){return y}});let a=n(7087),i=n(1185),{IX2_SESSION_INITIALIZED:r,IX2_SESSION_STARTED:o,IX2_TEST_FRAME_RENDERED:c,IX2_SESSION_STOPPED:u,IX2_EVENT_LISTENER_ADDED:l,IX2_EVENT_STATE_CHANGED:s,IX2_ANIMATION_FRAME_CHANGED:d,IX2_ACTION_LIST_PLAYBACK_CHANGED:f,IX2_VIEWPORT_WIDTH_CHANGED:g,IX2_MEDIA_QUERIES_DEFINED:p}=a.IX2EngineActionTypes,E={active:!1,tick:0,eventListeners:[],eventState:{},playbackState:{},viewportWidth:0,mediaQueryKey:null,hasBoundaryNodes:!1,hasDefinedMediaQueries:!1,reducedMotion:!1},y=(e=E,t)=>{switch(t.type){case r:{let{hasBoundaryNodes:n,reducedMotion:a}=t.payload;return(0,i.merge)(e,{hasBoundaryNodes:n,reducedMotion:a})}case o:return(0,i.set)(e,"active",!0);case c:{let{payload:{step:n=20}}=t;return(0,i.set)(e,"tick",e.tick+n)}case u:return E;case d:{let{payload:{now:n}}=t;return(0,i.set)(e,"tick",n)}case l:{let n=(0,i.addLast)(e.eventListeners,t.payload);return(0,i.set)(e,"eventListeners",n)}case s:{let{stateKey:n,newState:a}=t.payload;return(0,i.setIn)(e,["eventState",n],a)}case f:{let{actionListId:n,isPlaying:a}=t.payload;return(0,i.setIn)(e,["playbackState",n],a)}case g:{let{width:n,mediaQueries:a}=t.payload,r=a.length,o=null;for(let e=0;e<r;e++){let{key:t,min:i,max:r}=a[e];if(n>=i&&n<=r){o=t;break}}return(0,i.merge)(e,{viewportWidth:n,mediaQueryKey:o})}case p:return(0,i.set)(e,"hasDefinedMediaQueries",!0);default:return e}}},7377:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={clearPlugin:function(){return s},createPluginInstance:function(){return u},getPluginConfig:function(){return i},getPluginDestination:function(){return c},getPluginDuration:function(){return r},getPluginOrigin:function(){return o},renderPlugin:function(){return l}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e=>e.value,r=(e,t)=>{if("auto"!==t.config.duration)return null;let n=parseFloat(e.getAttribute("data-duration"));return n>0?1e3*n:1e3*parseFloat(e.getAttribute("data-default-duration"))},o=e=>e||{value:0},c=e=>({value:e.value}),u=e=>{let t=window.Sare.require("lottie");if(!t)return null;let n=t.createInstance(e);return n.stop(),n.setSubframe(!0),n},l=(e,t,n)=>{if(!e)return;let a=t[n.actionTypeId].value/100;e.goToFrame(e.frames*a)},s=e=>{let t=window.Sare.require("lottie");t&&t.createInstance(e).stop()}},2570:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={clearPlugin:function(){return p},createPluginInstance:function(){return f},getPluginConfig:function(){return u},getPluginDestination:function(){return d},getPluginDuration:function(){return l},getPluginOrigin:function(){return s},renderPlugin:function(){return g}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i="--wf-rive-fit",r="--wf-rive-alignment",o=e=>document.querySelector(`[data-w-id="${e}"]`),c=()=>window.Sare.require("rive"),u=(e,t)=>e.value.inputs[t],l=()=>null,s=(e,t)=>{if(e)return e;let n={},{inputs:a={}}=t.config.value;for(let e in a)null==a[e]&&(n[e]=0);return n},d=e=>e.value.inputs??{},f=(e,t)=>{if((t.config?.target?.selectorGuids||[]).length>0)return e;let n=t?.config?.target?.pluginElement;return n?o(n):null},g=(e,{PLUGIN_RIVE:t},n)=>{let a=c();if(!a)return;let o=a.getInstance(e),u=a.rive.StateMachineInputType,{name:l,inputs:s={}}=n.config.value||{};function d(e){if(e.loaded)n();else{let t=()=>{n(),e?.off("load",t)};e?.on("load",t)}function n(){let n=e.stateMachineInputs(l);if(null!=n){if(e.isPlaying||e.play(l,!1),i in s||r in s){let t=e.layout,n=s[i]??t.fit,a=s[r]??t.alignment;(n!==t.fit||a!==t.alignment)&&(e.layout=t.copyWith({fit:n,alignment:a}))}for(let e in s){if(e===i||e===r)continue;let a=n.find(t=>t.name===e);if(null!=a)switch(a.type){case u.Boolean:null!=s[e]&&(a.value=!!s[e]);break;case u.Number:{let n=t[e];null!=n&&(a.value=n);break}case u.Trigger:s[e]&&a.fire()}}}}}o?.rive?d(o.rive):a.setLoadHandler(e,d)},p=(e,t)=>null},2866:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={clearPlugin:function(){return p},createPluginInstance:function(){return f},getPluginConfig:function(){return c},getPluginDestination:function(){return d},getPluginDuration:function(){return u},getPluginOrigin:function(){return s},renderPlugin:function(){return g}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e=>document.querySelector(`[data-w-id="${e}"]`),r=()=>window.Sare.require("spline"),o=(e,t)=>e.filter(e=>!t.includes(e)),c=(e,t)=>e.value[t],u=()=>null,l=Object.freeze({positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,scaleX:1,scaleY:1,scaleZ:1}),s=(e,t)=>{let n=Object.keys(t.config.value);if(e){let t=o(n,Object.keys(e));return t.length?t.reduce((e,t)=>(e[t]=l[t],e),e):e}return n.reduce((e,t)=>(e[t]=l[t],e),{})},d=e=>e.value,f=(e,t)=>{let n=t?.config?.target?.pluginElement;return n?i(n):null},g=(e,t,n)=>{let a=r();if(!a)return;let i=a.getInstance(e),o=n.config.target.objectId,c=e=>{if(!e)throw Error("Invalid spline app passed to renderSpline");let n=o&&e.findObjectById(o);if(!n)return;let{PLUGIN_SPLINE:a}=t;null!=a.positionX&&(n.position.x=a.positionX),null!=a.positionY&&(n.position.y=a.positionY),null!=a.positionZ&&(n.position.z=a.positionZ),null!=a.rotationX&&(n.rotation.x=a.rotationX),null!=a.rotationY&&(n.rotation.y=a.rotationY),null!=a.rotationZ&&(n.rotation.z=a.rotationZ),null!=a.scaleX&&(n.scale.x=a.scaleX),null!=a.scaleY&&(n.scale.y=a.scaleY),null!=a.scaleZ&&(n.scale.z=a.scaleZ)};i?c(i.spline):a.setLoadHandler(e,c)},p=()=>null},1407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={clearPlugin:function(){return g},createPluginInstance:function(){return s},getPluginConfig:function(){return o},getPluginDestination:function(){return l},getPluginDuration:function(){return c},getPluginOrigin:function(){return u},renderPlugin:function(){return f}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=n(380),o=(e,t)=>e.value[t],c=()=>null,u=(e,t)=>{if(e)return e;let n=t.config.value,a=t.config.target.objectId,i=getComputedStyle(document.documentElement).getPropertyValue(a);return null!=n.size?{size:parseInt(i,10)}:"%"===n.unit||"-"===n.unit?{size:parseFloat(i)}:null!=n.red&&null!=n.green&&null!=n.blue?(0,r.normalizeColor)(i):void 0},l=e=>e.value,s=()=>null,d={color:{match:({red:e,green:t,blue:n,alpha:a})=>[e,t,n,a].every(e=>null!=e),getValue:({red:e,green:t,blue:n,alpha:a})=>`rgba(${e}, ${t}, ${n}, ${a})`},size:{match:({size:e})=>null!=e,getValue:({size:e},t)=>"-"===t?e:`${e}${t}`}},f=(e,t,n)=>{let{target:{objectId:a},value:{unit:i}}=n.config,r=t.PLUGIN_VARIABLE,o=Object.values(d).find(e=>e.match(r,i));o&&document.documentElement.style.setProperty(a,o.getValue(r,i))},g=(e,t)=>{let n=t.config.target.objectId;document.documentElement.style.removeProperty(n)}},3690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pluginMethodMap",{enumerable:!0,get:function(){return s}});let a=n(7087),i=l(n(7377)),r=l(n(2866)),o=l(n(2570)),c=l(n(1407));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}let s=new Map([[a.ActionTypeConsts.PLUGIN_LOTTIE,{...i}],[a.ActionTypeConsts.PLUGIN_SPLINE,{...r}],[a.ActionTypeConsts.PLUGIN_RIVE,{...o}],[a.ActionTypeConsts.PLUGIN_VARIABLE,{...c}]])},8023:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={IX2_ACTION_LIST_PLAYBACK_CHANGED:function(){return b},IX2_ANIMATION_FRAME_CHANGED:function(){return p},IX2_CLEAR_REQUESTED:function(){return d},IX2_ELEMENT_STATE_CHANGED:function(){return m},IX2_EVENT_LISTENER_ADDED:function(){return f},IX2_EVENT_STATE_CHANGED:function(){return g},IX2_INSTANCE_ADDED:function(){return y},IX2_INSTANCE_REMOVED:function(){return T},IX2_INSTANCE_STARTED:function(){return I},IX2_MEDIA_QUERIES_DEFINED:function(){return _},IX2_PARAMETER_CHANGED:function(){return E},IX2_PLAYBACK_REQUESTED:function(){return l},IX2_PREVIEW_REQUESTED:function(){return u},IX2_RAW_DATA_IMPORTED:function(){return i},IX2_SESSION_INITIALIZED:function(){return r},IX2_SESSION_STARTED:function(){return o},IX2_SESSION_STOPPED:function(){return c},IX2_STOP_REQUESTED:function(){return s},IX2_TEST_FRAME_RENDERED:function(){return h},IX2_VIEWPORT_WIDTH_CHANGED:function(){return O}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i="IX2_RAW_DATA_IMPORTED",r="IX2_SESSION_INITIALIZED",o="IX2_SESSION_STARTED",c="IX2_SESSION_STOPPED",u="IX2_PREVIEW_REQUESTED",l="IX2_PLAYBACK_REQUESTED",s="IX2_STOP_REQUESTED",d="IX2_CLEAR_REQUESTED",f="IX2_EVENT_LISTENER_ADDED",g="IX2_EVENT_STATE_CHANGED",p="IX2_ANIMATION_FRAME_CHANGED",E="IX2_PARAMETER_CHANGED",y="IX2_INSTANCE_ADDED",I="IX2_INSTANCE_STARTED",T="IX2_INSTANCE_REMOVED",m="IX2_ELEMENT_STATE_CHANGED",b="IX2_ACTION_LIST_PLAYBACK_CHANGED",O="IX2_VIEWPORT_WIDTH_CHANGED",_="IX2_MEDIA_QUERIES_DEFINED",h="IX2_TEST_FRAME_RENDERED"},2686:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ABSTRACT_NODE:function(){return en},AUTO:function(){return B},BACKGROUND:function(){return V},BACKGROUND_COLOR:function(){return D},BAR_DELIMITER:function(){return z},BORDER_COLOR:function(){return U},BOUNDARY_SELECTOR:function(){return u},CHILDREN:function(){return Q},COLON_DELIMITER:function(){return W},COLOR:function(){return k},COMMA_DELIMITER:function(){return H},CONFIG_UNIT:function(){return y},CONFIG_VALUE:function(){return f},CONFIG_X_UNIT:function(){return g},CONFIG_X_VALUE:function(){return l},CONFIG_Y_UNIT:function(){return p},CONFIG_Y_VALUE:function(){return s},CONFIG_Z_UNIT:function(){return E},CONFIG_Z_VALUE:function(){return d},DISPLAY:function(){return X},FILTER:function(){return F},FLEX:function(){return Y},FONT_VARIATION_SETTINGS:function(){return M},HEIGHT:function(){return x},HTML_ELEMENT:function(){return ee},IMMEDIATE_CHILDREN:function(){return K},IX2_ID_DELIMITER:function(){return i},OPACITY:function(){return w},PARENT:function(){return Z},PLAIN_OBJECT:function(){return et},PRESERVE_3D:function(){return J},RENDER_GENERAL:function(){return ei},RENDER_PLUGIN:function(){return eo},RENDER_STYLE:function(){return er},RENDER_TRANSFORM:function(){return ea},ROTATE_X:function(){return S},ROTATE_Y:function(){return R},ROTATE_Z:function(){return C},SCALE_3D:function(){return A},SCALE_X:function(){return _},SCALE_Y:function(){return h},SCALE_Z:function(){return v},SIBLINGS:function(){return q},SKEW:function(){return L},SKEW_X:function(){return N},SKEW_Y:function(){return P},TRANSFORM:function(){return I},TRANSLATE_3D:function(){return O},TRANSLATE_X:function(){return T},TRANSLATE_Y:function(){return m},TRANSLATE_Z:function(){return b},WF_PAGE:function(){return r},WIDTH:function(){return G},WILL_CHANGE:function(){return j},W_MOD_IX:function(){return c},W_MOD_JS:function(){return o}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i="|",r="data-sare",o="w-mod-js",c="w-mod-ix",u=".w-dyn-item",l="xValue",s="yValue",d="zValue",f="value",g="xUnit",p="yUnit",E="zUnit",y="unit",I="transform",T="translateX",m="translateY",b="translateZ",O="translate3d",_="scaleX",h="scaleY",v="scaleZ",A="scale3d",S="rotateX",R="rotateY",C="rotateZ",L="skew",N="skewX",P="skewY",w="opacity",F="filter",M="font-variation-settings",G="width",x="height",D="backgroundColor",V="background",U="borderColor",k="color",X="display",Y="flex",j="willChange",B="AUTO",H=",",W=":",z="|",Q="CHILDREN",K="IMMEDIATE_CHILDREN",q="SIBLINGS",Z="PARENT",J="preserve-3d",ee="HTML_ELEMENT",et="PLAIN_OBJECT",en="ABSTRACT_NODE",ea="RENDER_TRANSFORM",ei="RENDER_GENERAL",er="RENDER_STYLE",eo="RENDER_PLUGIN"},262:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ActionAppliesTo:function(){return r},ActionTypeConsts:function(){return i}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i={TRANSFORM_MOVE:"TRANSFORM_MOVE",TRANSFORM_SCALE:"TRANSFORM_SCALE",TRANSFORM_ROTATE:"TRANSFORM_ROTATE",TRANSFORM_SKEW:"TRANSFORM_SKEW",STYLE_OPACITY:"STYLE_OPACITY",STYLE_SIZE:"STYLE_SIZE",STYLE_FILTER:"STYLE_FILTER",STYLE_FONT_VARIATION:"STYLE_FONT_VARIATION",STYLE_BACKGROUND_COLOR:"STYLE_BACKGROUND_COLOR",STYLE_BORDER:"STYLE_BORDER",STYLE_TEXT_COLOR:"STYLE_TEXT_COLOR",OBJECT_VALUE:"OBJECT_VALUE",PLUGIN_LOTTIE:"PLUGIN_LOTTIE",PLUGIN_SPLINE:"PLUGIN_SPLINE",PLUGIN_RIVE:"PLUGIN_RIVE",PLUGIN_VARIABLE:"PLUGIN_VARIABLE",GENERAL_DISPLAY:"GENERAL_DISPLAY",GENERAL_START_ACTION:"GENERAL_START_ACTION",GENERAL_CONTINUOUS_ACTION:"GENERAL_CONTINUOUS_ACTION",GENERAL_COMBO_CLASS:"GENERAL_COMBO_CLASS",GENERAL_STOP_ACTION:"GENERAL_STOP_ACTION",GENERAL_LOOP:"GENERAL_LOOP",STYLE_BOX_SHADOW:"STYLE_BOX_SHADOW"},r={ELEMENT:"ELEMENT",ELEMENT_CLASS:"ELEMENT_CLASS",TRIGGER_ELEMENT:"TRIGGER_ELEMENT"}},7087:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={ActionTypeConsts:function(){return o.ActionTypeConsts},IX2EngineActionTypes:function(){return c},IX2EngineConstants:function(){return u},QuickEffectIds:function(){return r.QuickEffectIds}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=l(n(1833),t),o=l(n(262),t);l(n(8704),t),l(n(3213),t);let c=d(n(8023)),u=d(n(2686));function l(e,t){return Object.keys(e).forEach(function(n){"default"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),e}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}},3213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReducedMotionTypes",{enumerable:!0,get:function(){return s}});let{TRANSFORM_MOVE:a,TRANSFORM_SCALE:i,TRANSFORM_ROTATE:r,TRANSFORM_SKEW:o,STYLE_SIZE:c,STYLE_FILTER:u,STYLE_FONT_VARIATION:l}=n(262).ActionTypeConsts,s={[a]:!0,[i]:!0,[r]:!0,[o]:!0,[c]:!0,[u]:!0,[l]:!0}},1833:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={EventAppliesTo:function(){return r},EventBasedOn:function(){return o},EventContinuousMouseAxes:function(){return c},EventLimitAffectedElements:function(){return u},EventTypeConsts:function(){return i},QuickEffectDirectionConsts:function(){return s},QuickEffectIds:function(){return l}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i={NAVBAR_OPEN:"NAVBAR_OPEN",NAVBAR_CLOSE:"NAVBAR_CLOSE",TAB_ACTIVE:"TAB_ACTIVE",TAB_INACTIVE:"TAB_INACTIVE",SLIDER_ACTIVE:"SLIDER_ACTIVE",SLIDER_INACTIVE:"SLIDER_INACTIVE",DROPDOWN_OPEN:"DROPDOWN_OPEN",DROPDOWN_CLOSE:"DROPDOWN_CLOSE",MOUSE_CLICK:"MOUSE_CLICK",MOUSE_SECOND_CLICK:"MOUSE_SECOND_CLICK",MOUSE_DOWN:"MOUSE_DOWN",MOUSE_UP:"MOUSE_UP",MOUSE_OVER:"MOUSE_OVER",MOUSE_OUT:"MOUSE_OUT",MOUSE_MOVE:"MOUSE_MOVE",MOUSE_MOVE_IN_VIEWPORT:"MOUSE_MOVE_IN_VIEWPORT",SCROLL_INTO_VIEW:"SCROLL_INTO_VIEW",SCROLL_OUT_OF_VIEW:"SCROLL_OUT_OF_VIEW",SCROLLING_IN_VIEW:"SCROLLING_IN_VIEW",ECOMMERCE_CART_OPEN:"ECOMMERCE_CART_OPEN",ECOMMERCE_CART_CLOSE:"ECOMMERCE_CART_CLOSE",PAGE_START:"PAGE_START",PAGE_FINISH:"PAGE_FINISH",PAGE_SCROLL_UP:"PAGE_SCROLL_UP",PAGE_SCROLL_DOWN:"PAGE_SCROLL_DOWN",PAGE_SCROLL:"PAGE_SCROLL"},r={ELEMENT:"ELEMENT",CLASS:"CLASS",PAGE:"PAGE"},o={ELEMENT:"ELEMENT",VIEWPORT:"VIEWPORT"},c={X_AXIS:"X_AXIS",Y_AXIS:"Y_AXIS"},u={CHILDREN:"CHILDREN",SIBLINGS:"SIBLINGS",IMMEDIATE_CHILDREN:"IMMEDIATE_CHILDREN"},l={FADE_EFFECT:"FADE_EFFECT",SLIDE_EFFECT:"SLIDE_EFFECT",GROW_EFFECT:"GROW_EFFECT",SHRINK_EFFECT:"SHRINK_EFFECT",SPIN_EFFECT:"SPIN_EFFECT",FLY_EFFECT:"FLY_EFFECT",POP_EFFECT:"POP_EFFECT",FLIP_EFFECT:"FLIP_EFFECT",JIGGLE_EFFECT:"JIGGLE_EFFECT",PULSE_EFFECT:"PULSE_EFFECT",DROP_EFFECT:"DROP_EFFECT",BLINK_EFFECT:"BLINK_EFFECT",BOUNCE_EFFECT:"BOUNCE_EFFECT",FLIP_LEFT_TO_RIGHT_EFFECT:"FLIP_LEFT_TO_RIGHT_EFFECT",FLIP_RIGHT_TO_LEFT_EFFECT:"FLIP_RIGHT_TO_LEFT_EFFECT",RUBBER_BAND_EFFECT:"RUBBER_BAND_EFFECT",JELLO_EFFECT:"JELLO_EFFECT",GROW_BIG_EFFECT:"GROW_BIG_EFFECT",SHRINK_BIG_EFFECT:"SHRINK_BIG_EFFECT",PLUGIN_LOTTIE_EFFECT:"PLUGIN_LOTTIE_EFFECT"},s={LEFT:"LEFT",RIGHT:"RIGHT",BOTTOM:"BOTTOM",TOP:"TOP",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_RIGHT:"BOTTOM_RIGHT",TOP_RIGHT:"TOP_RIGHT",TOP_LEFT:"TOP_LEFT",CLOCKWISE:"CLOCKWISE",COUNTER_CLOCKWISE:"COUNTER_CLOCKWISE"}},8704:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"InteractionTypeConsts",{enumerable:!0,get:function(){return n}});let n={MOUSE_CLICK_INTERACTION:"MOUSE_CLICK_INTERACTION",MOUSE_HOVER_INTERACTION:"MOUSE_HOVER_INTERACTION",MOUSE_MOVE_INTERACTION:"MOUSE_MOVE_INTERACTION",SCROLL_INTO_VIEW_INTERACTION:"SCROLL_INTO_VIEW_INTERACTION",SCROLLING_IN_VIEW_INTERACTION:"SCROLLING_IN_VIEW_INTERACTION",MOUSE_MOVE_IN_VIEWPORT_INTERACTION:"MOUSE_MOVE_IN_VIEWPORT_INTERACTION",PAGE_IS_SCROLLING_INTERACTION:"PAGE_IS_SCROLLING_INTERACTION",PAGE_LOAD_INTERACTION:"PAGE_LOAD_INTERACTION",PAGE_SCROLLED_INTERACTION:"PAGE_SCROLLED_INTERACTION",NAVBAR_INTERACTION:"NAVBAR_INTERACTION",DROPDOWN_INTERACTION:"DROPDOWN_INTERACTION",ECOMMERCE_CART_INTERACTION:"ECOMMERCE_CART_INTERACTION",TAB_INTERACTION:"TAB_INTERACTION",SLIDER_INTERACTION:"SLIDER_INTERACTION"}},380:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeColor",{enumerable:!0,get:function(){return a}});let n={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};function a(e){let t,a,i,r=1,o=e.replace(/\s/g,"").toLowerCase(),c=("string"==typeof n[o]?n[o].toLowerCase():null)||o;if(c.startsWith("#")){let e=c.substring(1);3===e.length||4===e.length?(t=parseInt(e[0]+e[0],16),a=parseInt(e[1]+e[1],16),i=parseInt(e[2]+e[2],16),4===e.length&&(r=parseInt(e[3]+e[3],16)/255)):(6===e.length||8===e.length)&&(t=parseInt(e.substring(0,2),16),a=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16),8===e.length&&(r=parseInt(e.substring(6,8),16)/255))}else if(c.startsWith("rgba")){let e=c.match(/rgba\(([^)]+)\)/)[1].split(",");t=parseInt(e[0],10),a=parseInt(e[1],10),i=parseInt(e[2],10),r=parseFloat(e[3])}else if(c.startsWith("rgb")){let e=c.match(/rgb\(([^)]+)\)/)[1].split(",");t=parseInt(e[0],10),a=parseInt(e[1],10),i=parseInt(e[2],10)}else if(c.startsWith("hsla")){let e,n,o,u=c.match(/hsla\(([^)]+)\)/)[1].split(","),l=parseFloat(u[0]),s=parseFloat(u[1].replace("%",""))/100,d=parseFloat(u[2].replace("%",""))/100;r=parseFloat(u[3]);let f=(1-Math.abs(2*d-1))*s,g=f*(1-Math.abs(l/60%2-1)),p=d-f/2;l>=0&&l<60?(e=f,n=g,o=0):l>=60&&l<120?(e=g,n=f,o=0):l>=120&&l<180?(e=0,n=f,o=g):l>=180&&l<240?(e=0,n=g,o=f):l>=240&&l<300?(e=g,n=0,o=f):(e=f,n=0,o=g),t=Math.round((e+p)*255),a=Math.round((n+p)*255),i=Math.round((o+p)*255)}else if(c.startsWith("hsl")){let e,n,r,o=c.match(/hsl\(([^)]+)\)/)[1].split(","),u=parseFloat(o[0]),l=parseFloat(o[1].replace("%",""))/100,s=parseFloat(o[2].replace("%",""))/100,d=(1-Math.abs(2*s-1))*l,f=d*(1-Math.abs(u/60%2-1)),g=s-d/2;u>=0&&u<60?(e=d,n=f,r=0):u>=60&&u<120?(e=f,n=d,r=0):u>=120&&u<180?(e=0,n=d,r=f):u>=180&&u<240?(e=0,n=f,r=d):u>=240&&u<300?(e=f,n=0,r=d):(e=d,n=0,r=f),t=Math.round((e+g)*255),a=Math.round((n+g)*255),i=Math.round((r+g)*255)}if(Number.isNaN(t)||Number.isNaN(a)||Number.isNaN(i))throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);return{red:t,green:a,blue:i,alpha:r}}},9468:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={IX2BrowserSupport:function(){return r},IX2EasingUtils:function(){return c},IX2Easings:function(){return o},IX2ElementsReducer:function(){return u},IX2VanillaPlugins:function(){return l},IX2VanillaUtils:function(){return s}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=f(n(2662)),o=f(n(8686)),c=f(n(3767)),u=f(n(5861)),l=f(n(1799)),s=f(n(4124));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}},2662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i={ELEMENT_MATCHES:function(){return l},FLEX_PREFIXED:function(){return s},IS_BROWSER_ENV:function(){return c},TRANSFORM_PREFIXED:function(){return d},TRANSFORM_STYLE_PREFIXED:function(){return g},withBrowser:function(){return u}};for(var r in i)Object.defineProperty(t,r,{enumerable:!0,get:i[r]});let o=(a=n(9777))&&a.__esModule?a:{default:a},c="undefined"!=typeof window,u=(e,t)=>c?e():t,l=u(()=>(0,o.default)(["matches","matchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],e=>e in Element.prototype)),s=u(()=>{let e=document.createElement("i"),t=["flex","-webkit-flex","-ms-flexbox","-moz-box","-webkit-box"];try{let{length:n}=t;for(let a=0;a<n;a++){let n=t[a];if(e.style.display=n,e.style.display===n)return n}return""}catch(e){return""}},"flex"),d=u(()=>{let e=document.createElement("i");if(null==e.style.transform){let t=["Webkit","Moz","ms"],{length:n}=t;for(let a=0;a<n;a++){let n=t[a]+"Transform";if(void 0!==e.style[n])return n}}return"transform"},"transform"),f=d.split("transform")[0],g=f?f+"TransformStyle":"transformStyle"},3767:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i={applyEasing:function(){return d},createBezierEasing:function(){return s},optimizeFloat:function(){return l}};for(var r in i)Object.defineProperty(t,r,{enumerable:!0,get:i[r]});let o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(8686)),c=(a=n(1361))&&a.__esModule?a:{default:a};function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function l(e,t=5,n=10){let a=Math.pow(n,t),i=Number(Math.round(e*a)/a);return Math.abs(i)>1e-4?i:0}function s(e){return(0,c.default)(...e)}function d(e,t,n){return 0===t?0:1===t?1:n?l(t>0?n(t):t):l(t>0&&e&&o[e]?o[e](t):t)}},8686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i={bounce:function(){return Y},bouncePast:function(){return j},ease:function(){return c},easeIn:function(){return u},easeInOut:function(){return s},easeOut:function(){return l},inBack:function(){return F},inCirc:function(){return L},inCubic:function(){return p},inElastic:function(){return x},inExpo:function(){return S},inOutBack:function(){return G},inOutCirc:function(){return P},inOutCubic:function(){return y},inOutElastic:function(){return V},inOutExpo:function(){return C},inOutQuad:function(){return g},inOutQuart:function(){return m},inOutQuint:function(){return _},inOutSine:function(){return A},inQuad:function(){return d},inQuart:function(){return I},inQuint:function(){return b},inSine:function(){return h},outBack:function(){return M},outBounce:function(){return w},outCirc:function(){return N},outCubic:function(){return E},outElastic:function(){return D},outExpo:function(){return R},outQuad:function(){return f},outQuart:function(){return T},outQuint:function(){return O},outSine:function(){return v},swingFrom:function(){return k},swingFromTo:function(){return U},swingTo:function(){return X}};for(var r in i)Object.defineProperty(t,r,{enumerable:!0,get:i[r]});let o=(a=n(1361))&&a.__esModule?a:{default:a},c=(0,o.default)(.25,.1,.25,1),u=(0,o.default)(.42,0,1,1),l=(0,o.default)(0,0,.58,1),s=(0,o.default)(.42,0,.58,1);function d(e){return Math.pow(e,2)}function f(e){return-(Math.pow(e-1,2)-1)}function g(e){return(e/=.5)<1?.5*Math.pow(e,2):-.5*((e-=2)*e-2)}function p(e){return Math.pow(e,3)}function E(e){return Math.pow(e-1,3)+1}function y(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)}function I(e){return Math.pow(e,4)}function T(e){return-(Math.pow(e-1,4)-1)}function m(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2)}function b(e){return Math.pow(e,5)}function O(e){return Math.pow(e-1,5)+1}function _(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}function h(e){return-Math.cos(Math.PI/2*e)+1}function v(e){return Math.sin(Math.PI/2*e)}function A(e){return -.5*(Math.cos(Math.PI*e)-1)}function S(e){return 0===e?0:Math.pow(2,10*(e-1))}function R(e){return 1===e?1:-Math.pow(2,-10*e)+1}function C(e){return 0===e?0:1===e?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)}function L(e){return-(Math.sqrt(1-e*e)-1)}function N(e){return Math.sqrt(1-Math.pow(e-1,2))}function P(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}function w(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function F(e){return e*e*(2.70158*e-1.70158)}function M(e){return(e-=1)*e*(2.70158*e+1.70158)+1}function G(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)}function x(e){let t=1.70158,n=0,a=1;return 0===e?0:1===e?1:(n||(n=.3),a<1?(a=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/a),-(a*Math.pow(2,10*(e-=1))*Math.sin(2*Math.PI*(e-t)/n)))}function D(e){let t=1.70158,n=0,a=1;return 0===e?0:1===e?1:(n||(n=.3),a<1?(a=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/a),a*Math.pow(2,-10*e)*Math.sin(2*Math.PI*(e-t)/n)+1)}function V(e){let t=1.70158,n=0,a=1;return 0===e?0:2==(e/=.5)?1:(n||(n=.3*1.5),a<1?(a=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/a),e<1)?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin(2*Math.PI*(e-t)/n)):a*Math.pow(2,-10*(e-=1))*Math.sin(2*Math.PI*(e-t)/n)*.5+1}function U(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)}function k(e){return e*e*(2.70158*e-1.70158)}function X(e){return(e-=1)*e*(2.70158*e+1.70158)+1}function Y(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function j(e){return e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375)}},1799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={clearPlugin:function(){return E},createPluginInstance:function(){return g},getPluginConfig:function(){return l},getPluginDestination:function(){return f},getPluginDuration:function(){return d},getPluginOrigin:function(){return s},isPluginType:function(){return c},renderPlugin:function(){return p}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=n(2662),o=n(3690);function c(e){return o.pluginMethodMap.has(e)}let u=e=>t=>{if(!r.IS_BROWSER_ENV)return()=>null;let n=o.pluginMethodMap.get(t);if(!n)throw Error(`IX2 no plugin configured for: ${t}`);let a=n[e];if(!a)throw Error(`IX2 invalid plugin method: ${e}`);return a},l=u("getPluginConfig"),s=u("getPluginOrigin"),d=u("getPluginDuration"),f=u("getPluginDestination"),g=u("createPluginInstance"),p=u("renderPlugin"),E=u("clearPlugin")},4124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={cleanupHTMLElement:function(){return eW},clearAllStyles:function(){return ej},clearObjectCache:function(){return ef},getActionListProgress:function(){return eK},getAffectedElements:function(){return eO},getComputedStyle:function(){return e_},getDestinationValues:function(){return eN},getElementId:function(){return ey},getInstanceId:function(){return ep},getInstanceOrigin:function(){return eS},getItemConfigByKey:function(){return eL},getMaxDurationItemIndex:function(){return e$},getNamespacedParameterId:function(){return eJ},getRenderType:function(){return eP},getStyleProp:function(){return ew},mediaQueriesEqual:function(){return e1},observeStore:function(){return em},reduceListToGroup:function(){return eq},reifyState:function(){return eI},renderHTMLElement:function(){return eF},shallowEqual:function(){return s.default},shouldAllowMediaQuery:function(){return e0},shouldNamespaceEventParameter:function(){return eZ},stringifyTarget:function(){return e2}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=E(n(4075)),o=E(n(1455)),c=E(n(5720)),u=n(1185),l=n(7087),s=E(n(7164)),d=n(3767),f=n(380),g=n(1799),p=n(2662);function E(e){return e&&e.__esModule?e:{default:e}}let{BACKGROUND:y,TRANSFORM:I,TRANSLATE_3D:T,SCALE_3D:m,ROTATE_X:b,ROTATE_Y:O,ROTATE_Z:_,SKEW:h,PRESERVE_3D:v,FLEX:A,OPACITY:S,FILTER:R,FONT_VARIATION_SETTINGS:C,WIDTH:L,HEIGHT:N,BACKGROUND_COLOR:P,BORDER_COLOR:w,COLOR:F,CHILDREN:M,IMMEDIATE_CHILDREN:G,SIBLINGS:x,PARENT:D,DISPLAY:V,WILL_CHANGE:U,AUTO:k,COMMA_DELIMITER:X,COLON_DELIMITER:Y,BAR_DELIMITER:j,RENDER_TRANSFORM:B,RENDER_GENERAL:H,RENDER_STYLE:W,RENDER_PLUGIN:z}=l.IX2EngineConstants,{TRANSFORM_MOVE:Q,TRANSFORM_SCALE:K,TRANSFORM_ROTATE:q,TRANSFORM_SKEW:Z,STYLE_OPACITY:J,STYLE_FILTER:ee,STYLE_FONT_VARIATION:et,STYLE_SIZE:en,STYLE_BACKGROUND_COLOR:ea,STYLE_BORDER:ei,STYLE_TEXT_COLOR:er,GENERAL_DISPLAY:eo,OBJECT_VALUE:ec}=l.ActionTypeConsts,eu=e=>e.trim(),el=Object.freeze({[ea]:P,[ei]:w,[er]:F}),es=Object.freeze({[p.TRANSFORM_PREFIXED]:I,[P]:y,[S]:S,[R]:R,[L]:L,[N]:N,[C]:C}),ed=new Map;function ef(){ed.clear()}let eg=1;function ep(){return"i"+eg++}let eE=1;function ey(e,t){for(let n in e){let a=e[n];if(a&&a.ref===t)return a.id}return"e"+eE++}function eI({events:e,actionLists:t,site:n}={}){let a=(0,o.default)(e,(e,t)=>{let{eventTypeId:n}=t;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}),i=n&&n.mediaQueries,r=[];return i?r=i.map(e=>e.key):(i=[],console.warn("IX2 missing mediaQueries in site data")),{ixData:{events:e,actionLists:t,eventTypeMap:a,mediaQueries:i,mediaQueryKeys:r}}}let eT=(e,t)=>e===t;function em({store:e,select:t,onChange:n,comparator:a=eT}){let{getState:i,subscribe:r}=e,o=r(function(){let r=t(i());if(null==r)return void o();a(r,c)||n(c=r,e)}),c=t(i());return o}function eb(e){let t=typeof e;if("string"===t)return{id:e};if(null!=e&&"object"===t){let{id:t,objectId:n,selector:a,selectorGuids:i,appliesTo:r,useEventTarget:o}=e;return{id:t,objectId:n,selector:a,selectorGuids:i,appliesTo:r,useEventTarget:o}}return{}}function eO({config:e,event:t,eventTarget:n,elementRoot:a,elementApi:i}){let r,o,c;if(!i)throw Error("IX2 missing elementApi");let{targets:u}=e;if(Array.isArray(u)&&u.length>0)return u.reduce((e,r)=>e.concat(eO({config:{target:r},event:t,eventTarget:n,elementRoot:a,elementApi:i})),[]);let{getValidDocument:s,getQuerySelector:d,queryDocument:f,getChildElements:g,getSiblingElements:E,matchSelector:y,elementContains:I,isSiblingNode:T}=i,{target:m}=e;if(!m)return[];let{id:b,objectId:O,selector:_,selectorGuids:h,appliesTo:v,useEventTarget:A}=eb(m);if(O)return[ed.has(O)?ed.get(O):ed.set(O,{}).get(O)];if(v===l.EventAppliesTo.PAGE){let e=s(b);return e?[e]:[]}let S=(t?.action?.config?.affectedElements??{})[b||_]||{},R=!!(S.id||S.selector),C=t&&d(eb(t.target));if(R?(r=S.limitAffectedElements,o=C,c=d(S)):o=c=d({id:b,selector:_,selectorGuids:h}),t&&A){let e=n&&(c||!0===A)?[n]:f(C);if(c){if(A===D)return f(c).filter(t=>e.some(e=>I(t,e)));if(A===M)return f(c).filter(t=>e.some(e=>I(e,t)));if(A===x)return f(c).filter(t=>e.some(e=>T(e,t)))}return e}return null==o||null==c?[]:p.IS_BROWSER_ENV&&a?f(c).filter(e=>a.contains(e)):r===M?f(o,c):r===G?g(f(o)).filter(y(c)):r===x?E(f(o)).filter(y(c)):f(c)}function e_({element:e,actionItem:t}){if(!p.IS_BROWSER_ENV)return{};let{actionTypeId:n}=t;switch(n){case en:case ea:case ei:case er:case eo:return window.getComputedStyle(e);default:return{}}}let eh=/px/,ev=(e,t)=>t.reduce((e,t)=>(null==e[t.type]&&(e[t.type]=eG[t.type]),e),e||{}),eA=(e,t)=>t.reduce((e,t)=>(null==e[t.type]&&(e[t.type]=ex[t.type]||t.defaultValue||0),e),e||{});function eS(e,t={},n={},a,i){let{getStyle:o}=i,{actionTypeId:c}=a;if((0,g.isPluginType)(c))return(0,g.getPluginOrigin)(c)(t[c],a);switch(a.actionTypeId){case Q:case K:case q:case Z:return t[a.actionTypeId]||eM[a.actionTypeId];case ee:return ev(t[a.actionTypeId],a.config.filters);case et:return eA(t[a.actionTypeId],a.config.fontVariations);case J:return{value:(0,r.default)(parseFloat(o(e,S)),1)};case en:{let t,i=o(e,L),c=o(e,N);return{widthValue:a.config.widthUnit===k?eh.test(i)?parseFloat(i):parseFloat(n.width):(0,r.default)(parseFloat(i),parseFloat(n.width)),heightValue:a.config.heightUnit===k?eh.test(c)?parseFloat(c):parseFloat(n.height):(0,r.default)(parseFloat(c),parseFloat(n.height))}}case ea:case ei:case er:return function({element:e,actionTypeId:t,computedStyle:n,getStyle:a}){let i=el[t],o=a(e,i),c=(function(e,t){let n=e.exec(t);return n?n[1]:""})(ek,eU.test(o)?o:n[i]).split(X);return{rValue:(0,r.default)(parseInt(c[0],10),255),gValue:(0,r.default)(parseInt(c[1],10),255),bValue:(0,r.default)(parseInt(c[2],10),255),aValue:(0,r.default)(parseFloat(c[3]),1)}}({element:e,actionTypeId:a.actionTypeId,computedStyle:n,getStyle:o});case eo:return{value:(0,r.default)(o(e,V),n.display)};case ec:return t[a.actionTypeId]||{value:0};default:return}}let eR=(e,t)=>(t&&(e[t.type]=t.value||0),e),eC=(e,t)=>(t&&(e[t.type]=t.value||0),e),eL=(e,t,n)=>{if((0,g.isPluginType)(e))return(0,g.getPluginConfig)(e)(n,t);switch(e){case ee:{let e=(0,c.default)(n.filters,({type:e})=>e===t);return e?e.value:0}case et:{let e=(0,c.default)(n.fontVariations,({type:e})=>e===t);return e?e.value:0}default:return n[t]}};function eN({element:e,actionItem:t,elementApi:n}){if((0,g.isPluginType)(t.actionTypeId))return(0,g.getPluginDestination)(t.actionTypeId)(t.config);switch(t.actionTypeId){case Q:case K:case q:case Z:{let{xValue:e,yValue:n,zValue:a}=t.config;return{xValue:e,yValue:n,zValue:a}}case en:{let{getStyle:a,setStyle:i,getProperty:r}=n,{widthUnit:o,heightUnit:c}=t.config,{widthValue:u,heightValue:l}=t.config;if(!p.IS_BROWSER_ENV)return{widthValue:u,heightValue:l};if(o===k){let t=a(e,L);i(e,L,""),u=r(e,"offsetWidth"),i(e,L,t)}if(c===k){let t=a(e,N);i(e,N,""),l=r(e,"offsetHeight"),i(e,N,t)}return{widthValue:u,heightValue:l}}case ea:case ei:case er:{let{rValue:a,gValue:i,bValue:r,aValue:o,globalSwatchId:c}=t.config;if(c&&c.startsWith("--")){let{getStyle:t}=n,a=t(e,c),i=(0,f.normalizeColor)(a);return{rValue:i.red,gValue:i.green,bValue:i.blue,aValue:i.alpha}}return{rValue:a,gValue:i,bValue:r,aValue:o}}case ee:return t.config.filters.reduce(eR,{});case et:return t.config.fontVariations.reduce(eC,{});default:{let{value:e}=t.config;return{value:e}}}}function eP(e){return/^TRANSFORM_/.test(e)?B:/^STYLE_/.test(e)?W:/^GENERAL_/.test(e)?H:/^PLUGIN_/.test(e)?z:void 0}function ew(e,t){return e===W?t.replace("STYLE_","").toLowerCase():null}function eF(e,t,n,a,i,r,c,u,l){switch(u){case B:var s=e,d=t,f=n,E=i,y=c;let I=eV.map(e=>{let t=eM[e],{xValue:n=t.xValue,yValue:a=t.yValue,zValue:i=t.zValue,xUnit:r="",yUnit:o="",zUnit:c=""}=d[e]||{};switch(e){case Q:return`${T}(${n}${r}, ${a}${o}, ${i}${c})`;case K:return`${m}(${n}${r}, ${a}${o}, ${i}${c})`;case q:return`${b}(${n}${r}) ${O}(${a}${o}) ${_}(${i}${c})`;case Z:return`${h}(${n}${r}, ${a}${o})`;default:return""}}).join(" "),{setStyle:S}=y;eX(s,p.TRANSFORM_PREFIXED,y),S(s,p.TRANSFORM_PREFIXED,I),function({actionTypeId:e},{xValue:t,yValue:n,zValue:a}){return e===Q&&void 0!==a||e===K&&void 0!==a||e===q&&(void 0!==t||void 0!==n)}(E,f)&&S(s,p.TRANSFORM_STYLE_PREFIXED,v);return;case W:return function(e,t,n,a,i,r){let{setStyle:c}=r;switch(a.actionTypeId){case en:{let{widthUnit:t="",heightUnit:i=""}=a.config,{widthValue:o,heightValue:u}=n;void 0!==o&&(t===k&&(t="px"),eX(e,L,r),c(e,L,o+t)),void 0!==u&&(i===k&&(i="px"),eX(e,N,r),c(e,N,u+i));break}case ee:var u=a.config;let l=(0,o.default)(n,(e,t,n)=>`${e} ${n}(${t}${eD(n,u)})`,""),{setStyle:s}=r;eX(e,R,r),s(e,R,l);break;case et:a.config;let d=(0,o.default)(n,(e,t,n)=>(e.push(`"${n}" ${t}`),e),[]).join(", "),{setStyle:f}=r;eX(e,C,r),f(e,C,d);break;case ea:case ei:case er:{let t=el[a.actionTypeId],i=Math.round(n.rValue),o=Math.round(n.gValue),u=Math.round(n.bValue),l=n.aValue;eX(e,t,r),c(e,t,l>=1?`rgb(${i},${o},${u})`:`rgba(${i},${o},${u},${l})`);break}default:{let{unit:t=""}=a.config;eX(e,i,r),c(e,i,n.value+t)}}}(e,0,n,i,r,c);case H:var P=e,w=i,F=c;let{setStyle:M}=F;if(w.actionTypeId===eo){let{value:e}=w.config;M(P,V,e===A&&p.IS_BROWSER_ENV?p.FLEX_PREFIXED:e);}return;case z:{let{actionTypeId:e}=i;if((0,g.isPluginType)(e))return(0,g.renderPlugin)(e)(l,t,i)}}}let eM={[Q]:Object.freeze({xValue:0,yValue:0,zValue:0}),[K]:Object.freeze({xValue:1,yValue:1,zValue:1}),[q]:Object.freeze({xValue:0,yValue:0,zValue:0}),[Z]:Object.freeze({xValue:0,yValue:0})},eG=Object.freeze({blur:0,"hue-rotate":0,invert:0,grayscale:0,saturate:100,sepia:0,contrast:100,brightness:100}),ex=Object.freeze({wght:0,opsz:0,wdth:0,slnt:0}),eD=(e,t)=>{let n=(0,c.default)(t.filters,({type:t})=>t===e);if(n&&n.unit)return n.unit;switch(e){case"blur":return"px";case"hue-rotate":return"deg";default:return"%"}},eV=Object.keys(eM),eU=/^rgb/,ek=RegExp("rgba?\\(([^)]+)\\)");function eX(e,t,n){if(!p.IS_BROWSER_ENV)return;let a=es[t];if(!a)return;let{getStyle:i,setStyle:r}=n,o=i(e,U);if(!o)return void r(e,U,a);let c=o.split(X).map(eu);-1===c.indexOf(a)&&r(e,U,c.concat(a).join(X))}function eY(e,t,n){if(!p.IS_BROWSER_ENV)return;let a=es[t];if(!a)return;let{getStyle:i,setStyle:r}=n,o=i(e,U);o&&-1!==o.indexOf(a)&&r(e,U,o.split(X).map(eu).filter(e=>e!==a).join(X))}function ej({store:e,elementApi:t}){let{ixData:n}=e.getState(),{events:a={},actionLists:i={}}=n;Object.keys(a).forEach(e=>{let n=a[e],{config:r}=n.action,{actionListId:o}=r,c=i[o];c&&eB({actionList:c,event:n,elementApi:t})}),Object.keys(i).forEach(e=>{eB({actionList:i[e],elementApi:t})})}function eB({actionList:e={},event:t,elementApi:n}){let{actionItemGroups:a,continuousParameterGroups:i}=e;a&&a.forEach(e=>{eH({actionGroup:e,event:t,elementApi:n})}),i&&i.forEach(e=>{let{continuousActionGroups:a}=e;a.forEach(e=>{eH({actionGroup:e,event:t,elementApi:n})})})}function eH({actionGroup:e,event:t,elementApi:n}){let{actionItems:a}=e;a.forEach(e=>{let a,{actionTypeId:i,config:r}=e;a=(0,g.isPluginType)(i)?t=>(0,g.clearPlugin)(i)(t,e):ez({effect:eQ,actionTypeId:i,elementApi:n}),eO({config:r,event:t,elementApi:n}).forEach(a)})}function eW(e,t,n){let{setStyle:a,getStyle:i}=n,{actionTypeId:r}=t;if(r===en){let{config:n}=t;n.widthUnit===k&&a(e,L,""),n.heightUnit===k&&a(e,N,"")}i(e,U)&&ez({effect:eY,actionTypeId:r,elementApi:n})(e)}let ez=({effect:e,actionTypeId:t,elementApi:n})=>a=>{switch(t){case Q:case K:case q:case Z:e(a,p.TRANSFORM_PREFIXED,n);break;case ee:e(a,R,n);break;case et:e(a,C,n);break;case J:e(a,S,n);break;case en:e(a,L,n),e(a,N,n);break;case ea:case ei:case er:e(a,el[t],n);break;case eo:e(a,V,n)}};function eQ(e,t,n){let{setStyle:a}=n;eY(e,t,n),a(e,t,""),t===p.TRANSFORM_PREFIXED&&a(e,p.TRANSFORM_STYLE_PREFIXED,"")}function e$(e){let t=0,n=0;return e.forEach((e,a)=>{let{config:i}=e,r=i.delay+i.duration;r>=t&&(t=r,n=a)}),n}function eK(e,t){let{actionItemGroups:n,useFirstGroupAsInitialState:a}=e,{actionItem:i,verboseTimeElapsed:r=0}=t,o=0,c=0;return n.forEach((e,t)=>{if(a&&0===t)return;let{actionItems:n}=e,u=n[e$(n)],{config:l,actionTypeId:s}=u;i.id===u.id&&(c=o+r);let d=eP(s)===H?0:l.duration;o+=l.delay+d}),o>0?(0,d.optimizeFloat)(c/o):0}function eq({actionList:e,actionItemId:t,rawData:n}){let{actionItemGroups:a,continuousParameterGroups:i}=e,r=[],o=e=>(r.push((0,u.mergeIn)(e,["config"],{delay:0,duration:0})),e.id===t);return a&&a.some(({actionItems:e})=>e.some(o)),i&&i.some(e=>{let{continuousActionGroups:t}=e;return t.some(({actionItems:e})=>e.some(o))}),(0,u.setIn)(n,["actionLists"],{[e.id]:{id:e.id,actionItemGroups:[{actionItems:r}]}})}function eZ(e,{basedOn:t}){return e===l.EventTypeConsts.SCROLLING_IN_VIEW&&(t===l.EventBasedOn.ELEMENT||null==t)||e===l.EventTypeConsts.MOUSE_MOVE&&t===l.EventBasedOn.ELEMENT}function eJ(e,t){return e+Y+t}function e0(e,t){return null==t||-1!==e.indexOf(t)}function e1(e,t){return(0,s.default)(e&&e.sort(),t&&t.sort())}function e2(e){if("string"==typeof e)return e;if(e.pluginElement&&e.objectId)return e.pluginElement+j+e.objectId;if(e.objectId)return e.objectId;let{id:t="",selector:n="",useEventTarget:a=""}=e;return t+j+n+j+a}},7164:function(e,t){"use strict";function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let a=function(e,t){if(n(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(let i=0;i<a.length;i++)if(!Object.hasOwn(t,a[i])||!n(e[a[i]],t[a[i]]))return!1;return!0}},5861:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={createElementState:function(){return h},ixElements:function(){return _},mergeActionState:function(){return v}};for(var i in a)Object.defineProperty(t,i,{enumerable:!0,get:a[i]});let r=n(1185),o=n(7087),{HTML_ELEMENT:c,PLAIN_OBJECT:u,ABSTRACT_NODE:l,CONFIG_X_VALUE:s,CONFIG_Y_VALUE:d,CONFIG_Z_VALUE:f,CONFIG_VALUE:g,CONFIG_X_UNIT:p,CONFIG_Y_UNIT:E,CONFIG_Z_UNIT:y,CONFIG_UNIT:I}=o.IX2EngineConstants,{IX2_SESSION_STOPPED:T,IX2_INSTANCE_ADDED:m,IX2_ELEMENT_STATE_CHANGED:b}=o.IX2EngineActionTypes,O={},_=(e=O,t={})=>{switch(t.type){case T:return O;case m:{let{elementId:n,element:a,origin:i,actionItem:o,refType:c}=t.payload,{actionTypeId:u}=o,l=e;return(0,r.getIn)(l,[n,a])!==a&&(l=h(l,a,c,n,o)),v(l,n,u,i,o)}case b:{let{elementId:n,actionTypeId:a,current:i,actionItem:r}=t.payload;return v(e,n,a,i,r)}default:return e}};function h(e,t,n,a,i){let o=n===u?(0,r.getIn)(i,["config","target","objectId"]):null;return(0,r.mergeIn)(e,[a],{id:a,ref:t,refId:o,refType:n})}function v(e,t,n,a,i){let o=function(e){let{config:t}=e;return A.reduce((e,n)=>{let a=n[0],i=n[1],r=t[a],o=t[i];return null!=r&&null!=o&&(e[i]=o),e},{})}(i);return(0,r.mergeIn)(e,[t,"refState",n],a,o)}let A=[[s,p],[d,E],[f,y],[g,I]]},8269:function(e,t,n){n(9461),n(7624),n(286),n(8334),n(2338),n(3695),n(322),n(941),n(5134),n(9904),n(1724),n(2458),n(9078),n(9825)},9825:function(){Sare.require("ix2").init({events:{e:{id:"e",name:"",animationType:"custom",eventTypeId:"PAGE_START",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-2",affectedElements:{},playInReverse:!1,autoStopEventId:"e-2"}},mediaQueries:["main","medium","small","tiny"],target:{id:"63cf96b94c1db3629fce9014",appliesTo:"PAGE",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014",appliesTo:"PAGE",styleBlockIds:[]}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:0x18564c6c7bd},"e-3":{id:"e-3",name:"",animationType:"custom",eventTypeId:"PAGE_START",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-3",affectedElements:{},playInReverse:!1,autoStopEventId:"e-4"}},mediaQueries:["main","medium","small","tiny"],target:{id:"63cf96b94c1db3629fce9014",appliesTo:"PAGE",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014",appliesTo:"PAGE",styleBlockIds:[]}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:0x185727dbe26},"e-7":{id:"e-7",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-4",affectedElements:{},duration:0}},mediaQueries:["main","medium","small","tiny"],target:{id:"63cf96b94c1db3629fce9014|8e8c10bb-320c-2bbf-80ec-92cfacec8eaa",appliesTo:"ELEMENT",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014|8e8c10bb-320c-2bbf-80ec-92cfacec8eaa",appliesTo:"ELEMENT",styleBlockIds:[]}],config:[{continuousParameterGroupId:"a-4-p",smoothing:84,startsEntering:!1,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185a5fe7c88},"e-8":{id:"e-8",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-6",affectedElements:{},duration:0}},mediaQueries:["main","medium"],target:{selector:".has-parallax-effect",originalId:"63cf96b94c1db3629fce9014|f87c7ebf-f173-8315-67c8-433218514118",appliesTo:"CLASS"},targets:[{selector:".has-parallax-effect",originalId:"63cf96b94c1db3629fce9014|f87c7ebf-f173-8315-67c8-433218514118",appliesTo:"CLASS"}],config:[{continuousParameterGroupId:"a-6-p",smoothing:82,startsEntering:!0,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185b9ec5dce},"e-9":{id:"e-9",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-7",affectedElements:{},duration:0}},mediaQueries:["main","medium","small","tiny"],target:{selector:".specs-divider-inner",originalId:"63cf96b94c1db3629fce9014|5f09188f-6ca9-cea9-ed10-75565be12f4c",appliesTo:"CLASS"},targets:[{selector:".specs-divider-inner",originalId:"63cf96b94c1db3629fce9014|5f09188f-6ca9-cea9-ed10-75565be12f4c",appliesTo:"CLASS"}],config:[{continuousParameterGroupId:"a-7-p",smoothing:85,startsEntering:!0,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185bf76dc2d},"e-10":{id:"e-10",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-8",affectedElements:{},duration:0}},mediaQueries:["small","tiny"],target:{selector:".has-parallax-effect",originalId:"63cf96b94c1db3629fce9014|f87c7ebf-f173-8315-67c8-433218514118",appliesTo:"CLASS"},targets:[{selector:".has-parallax-effect",originalId:"63cf96b94c1db3629fce9014|f87c7ebf-f173-8315-67c8-433218514118",appliesTo:"CLASS"}],config:[{continuousParameterGroupId:"a-8-p",smoothing:85,startsEntering:!0,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185c44ebcc8},"e-20":{id:"e-20",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-11",affectedElements:{},duration:0}},mediaQueries:["main","medium","small","tiny"],target:{selector:".hero-gallery-item",originalId:"63cf96b94c1db3629fce9014|13f6706c-58d1-4ab7-5b93-1a17cd3285ce",appliesTo:"CLASS"},targets:[{selector:".hero-gallery-item",originalId:"63cf96b94c1db3629fce9014|13f6706c-58d1-4ab7-5b93-1a17cd3285ce",appliesTo:"CLASS"}],config:[{continuousParameterGroupId:"a-11-p",smoothing:93,startsEntering:!0,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185d11d2769},"e-25":{id:"e-25",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-22",affectedElements:{},duration:0}},mediaQueries:["main","medium","small","tiny"],target:{id:"63cf96b94c1db3629fce9014|74a79014-8e20-e0c3-291e-6839491239a2",appliesTo:"ELEMENT",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014|74a79014-8e20-e0c3-291e-6839491239a2",appliesTo:"ELEMENT",styleBlockIds:[]}],config:[{continuousParameterGroupId:"a-22-p",smoothing:83,startsEntering:!0,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185df513b63},"e-26":{id:"e-26",name:"",animationType:"custom",eventTypeId:"MOUSE_CLICK",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-23",affectedElements:{},playInReverse:!1,autoStopEventId:"e-27"}},mediaQueries:["main","medium","small","tiny"],target:{selector:".popup-toggle",originalId:"63cf96b94c1db3629fce9014|d1d14ab4-a124-1029-7612-123dd1d0fce2",appliesTo:"CLASS"},targets:[{selector:".popup-toggle",originalId:"63cf96b94c1db3629fce9014|d1d14ab4-a124-1029-7612-123dd1d0fce2",appliesTo:"CLASS"}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:0x17d294a1a01},"e-28":{id:"e-28",name:"",animationType:"custom",eventTypeId:"MOUSE_CLICK",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-24",affectedElements:{},playInReverse:!1,autoStopEventId:"e-29"}},mediaQueries:["main","medium","small","tiny"],target:{selector:".popup-close",originalId:"63cf96b94c1db3629fce9014|d1d14ab4-a124-1029-7612-123dd1d0fce7",appliesTo:"CLASS"},targets:[{selector:".popup-close",originalId:"63cf96b94c1db3629fce9014|d1d14ab4-a124-1029-7612-123dd1d0fce7",appliesTo:"CLASS"}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:0x17d294c7e25},"e-30":{id:"e-30",name:"",animationType:"custom",eventTypeId:"MOUSE_CLICK",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-24",affectedElements:{},playInReverse:!1,autoStopEventId:"e-31"}},mediaQueries:["main","medium","small","tiny"],target:{selector:".popup-background",originalId:"63cf96b94c1db3629fce9014|d1d14ab4-a124-1029-7612-123dd1d0fcf6",appliesTo:"CLASS"},targets:[{selector:".popup-background",originalId:"63cf96b94c1db3629fce9014|d1d14ab4-a124-1029-7612-123dd1d0fcf6",appliesTo:"CLASS"}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:0x17d294e1602},"e-32":{id:"e-32",name:"",animationType:"custom",eventTypeId:"SCROLLING_IN_VIEW",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-25",affectedElements:{},duration:0}},mediaQueries:["main","medium","small","tiny"],target:{id:"63cf96b94c1db3629fce9014|74320b95-20be-d5c9-4dd4-ccde3dc609ed",appliesTo:"ELEMENT",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014|74320b95-20be-d5c9-4dd4-ccde3dc609ed",appliesTo:"ELEMENT",styleBlockIds:[]}],config:[{continuousParameterGroupId:"a-25-p",smoothing:85,startsEntering:!0,addStartOffset:!1,addOffsetValue:50,startsExiting:!1,addEndOffset:!1,endOffsetValue:50}],createdOn:0x185e93b50f3},"e-33":{id:"e-33",name:"",animationType:"custom",eventTypeId:"SCROLL_INTO_VIEW",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-26",affectedElements:{},playInReverse:!1,autoStopEventId:"e-34"}},mediaQueries:["small","tiny"],target:{id:"63cf96b94c1db3629fce9014|8e8c10bb-320c-2bbf-80ec-92cfacec8eaa",appliesTo:"ELEMENT",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014|8e8c10bb-320c-2bbf-80ec-92cfacec8eaa",appliesTo:"ELEMENT",styleBlockIds:[]}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:0,scrollOffsetUnit:"%",delay:null,direction:null,effectIn:null},createdOn:0x1860c5d03ef},"e-34":{id:"e-34",name:"",animationType:"custom",eventTypeId:"SCROLL_OUT_OF_VIEW",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-27",affectedElements:{},playInReverse:!1,autoStopEventId:"e-33"}},mediaQueries:["small","tiny"],target:{id:"63cf96b94c1db3629fce9014|8e8c10bb-320c-2bbf-80ec-92cfacec8eaa",appliesTo:"ELEMENT",styleBlockIds:[]},targets:[{id:"63cf96b94c1db3629fce9014|8e8c10bb-320c-2bbf-80ec-92cfacec8eaa",appliesTo:"ELEMENT",styleBlockIds:[]}],config:{loop:!1,playInReverse:!1,scrollOffsetValue:0,scrollOffsetUnit:"%",delay:null,direction:null,effectIn:null},createdOn:0x1860c5d0420}},actionLists:{"a-2":{id:"a-2",title:"Stage Page load 1",actionItemGroups:[{actionItems:[{id:"a-2-n-16",actionTypeId:"STYLE_SIZE",config:{delay:0,easing:"",duration:500,target:{selector:".sun-page-load",selectorGuids:["d1df031a-ece9-eecd-aafe-d8005f63cd41"]},widthValue:100,heightValue:100,widthUnit:"%",heightUnit:"%",locked:!1}},{id:"a-2-n-25",actionTypeId:"STYLE_OPACITY",config:{delay:0,easing:"",duration:500,target:{selector:".sun-page-load",selectorGuids:["d1df031a-ece9-eecd-aafe-d8005f63cd41"]},value:0,unit:""}},{id:"a-2-n-9",actionTypeId:"TRANSFORM_MOVE",config:{delay:0,easing:"",duration:500,target:{selector:".sun-page-load",selectorGuids:["d1df031a-ece9-eecd-aafe-d8005f63cd41"]},xValue:2,yValue:10,xUnit:"em",yUnit:"em",zUnit:"PX"}},{id:"a-2-n-10",actionTypeId:"STYLE_SIZE",config:{delay:0,easing:"",duration:500,target:{selector:".savesion-wrapper",selectorGuids:["1edc069d-fc8d-fd1c-0680-04331e3c82ba"]},widthValue:100,heightValue:100,widthUnit:"%",heightUnit:"vh",locked:!1}},
        {
            id: "a-2-n-11", actionTypeId: "TRANSFORM_MOVE",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    selector: ".savesion-wrapper",
                    selectorGuids: ["1edc069d-fc8d-fd1c-0680-04331e3c82ba"]
                },
                yValue: -5, xUnit: "PX", yUnit: "em", zUnit: "PX"
            }
        },
        {
            id: "a-2-n-7", actionTypeId: "STYLE_SIZE",
            config: {
                delay: 0, easing: "", duration: 500, target: {
                    selector: ".stage-sun-wrapper",
                    selectorGuids: ["7d7a4295-7f7a-147a-cdc9-e60810069c11"]
                },
                widthValue: 100, heightValue: 100, widthUnit: "vw", heightUnit: "vh", locked: !1
            }
        },
        {
            id: "a-2-n-14", actionTypeId: "TRANSFORM_SCALE",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    selector: ".savesion-type-wrapper",
                    selectorGuids: ["cdeb16eb-eb2e-c737-f862-cad0def45c01"]
                },
                xValue: 2.75, yValue: 2.75, locked: !0
            }
        },
        
        {
            id: "a-2-n-19", actionTypeId: "TRANSFORM_MOVE",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    selector: ".save-sion-1",
                    selectorGuids: ["2d17e741-644a-de61-206e-aec32929015f"]
                },
                yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX"
            }
        },
        {
            id: "a-2-n-21", actionTypeId: "TRANSFORM_MOVE",
            config: {
                delay: 0, easing: "", duration: 500, target:
                {
                    selector: ".save-sion-2",
                    selectorGuids: ["3b7e65e2-62c3-ace2-bd5c-401d28fa160e"]
                },
                yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX"
            }
        },
        {
            id: "a-2-n-22", actionTypeId: "TRANSFORM_MOVE",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    selector: ".save-sion-3",
                    selectorGuids: ["b74e1143-fcae-6573-d879-ad8d8984ae91"]
                },
                yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX"
            }
        },
        {
            id: "a-2-n-27", actionTypeId: "GENERAL_DISPLAY",

            config: {
                delay: 0, easing: "", duration: 0, target:
                    { selector: ".sun-page-load-overlay", selectorGuids: ["f07bc460-5d79-910b-0921-3db316e352b0"] }, value: "block"
            }
        }, {
            id: "a-2-n-29", actionTypeId: "STYLE_OPACITY", config:
                { delay: 0, easing: "", duration: 500, target: { selector: ".sun-page-load-overlay", selectorGuids: ["f07bc460-5d79-910b-0921-3db316e352b0"] }, value: 1, unit: "" }
        }]
    }, {
        actionItems: [{
            id: "a-2-n-26", actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 200, easing: "ease", duration: 800,
                target: {
                    selector: ".sun-page-load",
                    selectorGuids: ["d1df031a-ece9-eecd-aafe-d8005f63cd41"]
                },
                value: 1, unit: ""
            }
        }, {
            id: "a-2-n-20", actionTypeId: "TRANSFORM_MOVE", config:
            {
                delay: 500, easing: "outQuart", duration: 1e3, target: {
                    selector: ".save-sion-1",
                    selectorGuids: ["2d17e741-644a-de61-206e-aec32929015f"]
                }, yValue: 0,
                xUnit: "PX", yUnit: "%", zUnit: "PX"
            }
        }, {
            id: "a-2-n-23",
            actionTypeId: "TRANSFORM_MOVE", config: {
                delay: 600, easing: "outQuart",
                duration: 1e3, target: {
                    selector: ".save-sion-2",
                    selectorGuids: ["3b7e65e2-62c3-ace2-bd5c-401d28fa160e"]
                },
                yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX"
            }
        }, { id: "a-2-n-24", actionTypeId: "TRANSFORM_MOVE", config: { delay: 700, easing: "outQuart", duration: 1e3, target: { selector: ".save-sion-3", selectorGuids: ["b74e1143-fcae-6573-d879-ad8d8984ae91"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" } }, { id: "a-2-n-13", actionTypeId: "TRANSFORM_MOVE", config: { delay: 1800, easing: "inOutQuart", duration: 1800, target: { selector: ".savesion-wrapper", selectorGuids: ["1edc069d-fc8d-fd1c-0680-04331e3c82ba"] }, yValue: 0, xUnit: "PX", yUnit: "em", zUnit: "PX" } }, { id: "a-2-n-15", actionTypeId: "TRANSFORM_SCALE", config: { delay: 1800, easing: "inOutQuart", duration: 1800, target: { selector: ".savesion-type-wrapper", selectorGuids: ["cdeb16eb-eb2e-c737-f862-cad0def45c01"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-2-n-12", actionTypeId: "STYLE_SIZE", config: { delay: 1800, easing: "inOutQuart", duration: 1800, target: { selector: ".savesion-wrapper", selectorGuids: ["1edc069d-fc8d-fd1c-0680-04331e3c82ba"] }, widthUnit: "AUTO", heightUnit: "AUTO", locked: !1 } }, { id: "a-2-n-8", actionTypeId: "STYLE_SIZE", config: { delay: 1800, easing: "inOutQuart", duration: 2e3, target: { selector: ".stage-sun-wrapper", selectorGuids: ["7d7a4295-7f7a-147a-cdc9-e60810069c11"] }, widthUnit: "AUTO", heightUnit: "AUTO", locked: !1 } }, { id: "a-2-n-18", actionTypeId: "TRANSFORM_MOVE", config: { delay: 1800, easing: "inOutQuart", duration: 2e3, target: { selector: ".sun-page-load", selectorGuids: ["d1df031a-ece9-eecd-aafe-d8005f63cd41"] }, xValue: 0, yValue: 0, xUnit: "em", yUnit: "em", zUnit: "PX" } }, { id: "a-2-n-17", actionTypeId: "STYLE_SIZE", config: { delay: 1800, easing: "inOutQuart", duration: 2e3, target: { selector: ".sun-page-load", selectorGuids: ["d1df031a-ece9-eecd-aafe-d8005f63cd41"] }, widthUnit: "AUTO", heightUnit: "AUTO", locked: !1 } }, { id: "a-2-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 2300, easing: "ease", duration: 3e3, target: { selector: ".sun-page-load-overlay", selectorGuids: ["f07bc460-5d79-910b-0921-3db316e352b0"] }, value: 0, unit: "" } }]
        }, { actionItems: [{ id: "a-2-n-28", actionTypeId: "GENERAL_DISPLAY", config: { delay: 1500, easing: "", duration: 0, target: { selector: ".sun-page-load-overlay", selectorGuids: ["f07bc460-5d79-910b-0921-3db316e352b0"] }, value: "none" } }] }], useFirstGroupAsInitialState: !0, createdOn: 0x18564e3c26f
    }, "a-3": {
        id: "a-3", title: "Stage Page load 2",
        actionItemGroups: [{
            actionItems:
                [{
                    id: "a-3-n-10", actionTypeId: "STYLE_OPACITY",
                    config: {
                        delay: 0, easing: "", duration: 500,
                        target: {
                            selector: ".stage-copy-inner",
                            selectorGuids: ["8d518431-8cd4-084c-0213-58035377901f"]
                        },
                        value: 0, unit: ""
                    }
                },
                {
                    id: "a-3-n-16", actionTypeId: "STYLE_OPACITY",
                    config: {
                        delay: 0, easing: "", duration: 500,
                        target: {
                            selector: ".stage-car-floor",
                            selectorGuids: ["cf3570f1-5774-1b06-a55c-c70c52753e43"]
                        }, value: 0, unit: ""
                    }
                }, {
                    id: "a-3-n-18", actionTypeId: "TRANSFORM_SCALE",
                    config: {
                        delay: 0, easing: "", duration: 500, target: { selector: ".stage-car-shadow-wrapper", selectorGuids: ["1f1dacfe-f227-1731-65c3-448cba86c89c"] },
                        xValue: .8, yValue: .8, locked: !0
                    }
                }, {
                    id: "a-3-n-20", actionTypeId: "STYLE_FILTER", config: {
                        delay: 0, easing: "", duration: 500, target: {
                            selector: ".stage-car-shadow-wrapper",
                            selectorGuids: ["1f1dacfe-f227-1731-65c3-448cba86c89c"]
                        }, filters: [{ type: "blur", filterId: "6d7d", value: .4, unit: "em" }]
                    }
                }, {
                    id: "a-3-n-6", actionTypeId: "TRANSFORM_SCALE",
                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".stage-car-wrapper", selectorGuids: ["648e2b6a-2df6-208c-74a3-798b739b2463"] }, xValue: 1.4, yValue: 1.4, locked: !0 }
                },
                {
                    id: "a-3-n-12", actionTypeId: "TRANSFORM_ROTATE", config: {
                        delay: 0, easing: "", duration: 500, target: { selector: ".stage-objects-wrapper", selectorGuids: ["e54b9a32-ce09-1b7d-8cd7-1dc70ea0a7c8"] },
                        yValue: 13, xUnit: "DEG", yUnit: "deg", zUnit: "DEG"
                    }
                }, {
                    id: "a-3-n-3", actionTypeId: "TRANSFORM_SCALE", config: {
                        delay: 0, easing: "", duration: 500, target: {
                            selector: ".stage-shapes-wrapper",
                            selectorGuids: ["69e6b8c9-cd54-1fd4-0e83-9a4e91971696"]
                        }, xValue: 1.5, yValue: 1.5, locked: !0
                    }
                }, {
                    id: "a-3-n-22", actionTypeId: "TRANSFORM_MOVE", config: {
                        delay: 0, easing: "",
                        duration: 500, target: { selector: ".stage-shapes-wrapper", selectorGuids: ["69e6b8c9-cd54-1fd4-0e83-9a4e91971696"] }, xValue: -10, xUnit: "%", yUnit: "PX", zUnit: "PX"
                    }
                }, {
                    id: "a-3-n-24", actionTypeId: "TRANSFORM_ROTATE",
                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".stage-shape-right", selectorGuids: ["0db5c932-ab7b-5017-304b-33f226380891"] }, yValue: 0, xUnit: "DEG", yUnit: "deg", zUnit: "DEG" }
                },
                {
                    id: "a-3-n-26", actionTypeId: "STYLE_OPACITY", config: {
                        delay: 0, easing: "", duration: 500, target: {
                            selector: ".why-this-site-wrapper",
                            selectorGuids: ["e4b625d6-1bd4-c57f-30db-87f8906177ad"]
                        }, value: 0, unit: ""
                    }
                }]
        }, {
            actionItems: [{
                id: "a-3-n-17", actionTypeId: "STYLE_OPACITY",
                config: { delay: 2300, easing: "ease", duration: 4e3, target: { selector: ".stage-car-floor", selectorGuids: ["cf3570f1-5774-1b06-a55c-c70c52753e43"] }, value: 1, unit: "" }
            },
                {
                    id: "a-3-n-19", actionTypeId: "TRANSFORM_SCALE", config: {
                        delay: 2300, easing: "outQuart", duration: 2500, target: {
                            selector: ".stage-car-shadow-wrapper",
                            selectorGuids: ["1f1dacfe-f227-1731-65c3-448cba86c89c"]
                        }, xValue: 1, yValue: 1, locked: !0
                    }
                }, {
                    id: "a-3-n-21", actionTypeId: "STYLE_FILTER",
                    config: {
                        delay: 2300, easing: "outQuart", duration: 2500, target: { selector: ".stage-car-shadow-wrapper", selectorGuids: ["1f1dacfe-f227-1731-65c3-448cba86c89c"] },
                        filters: [{ type: "blur", filterId: "6d7d", value: 0, unit: "em" }]
                    }
                }, {
                    id: "a-3-n-7", actionTypeId: "TRANSFORM_SCALE", config: {
                        delay: 2300, easing: "outQuart",
                        duration: 2500, target: { selector: ".stage-car-wrapper", selectorGuids: ["648e2b6a-2df6-208c-74a3-798b739b2463"] }, xValue: 1, yValue: 1, locked: !0
                    }
                },
                {
                    id: "a-3-n-4", actionTypeId: "TRANSFORM_SCALE", config: {
                        delay: 2300, easing: "outQuart", duration: 4e3,
                        target: { selector: ".stage-shapes-wrapper", selectorGuids: ["69e6b8c9-cd54-1fd4-0e83-9a4e91971696"] },
                        xValue: 1, yValue: 1, locked: !0
                    }
                        }, {
                            id: "a-3-n-13", actionTypeId: "TRANSFORM_ROTATE", config: {
                                delay: 2300, easing: "outQuart", duration: 4e3,
                                target: { selector: ".stage-objects-wrapper", selectorGuids: ["e54b9a32-ce09-1b7d-8cd7-1dc70ea0a7c8"] },
                                yValue: 0, xUnit: "DEG", yUnit: "deg", zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-3-n-23", actionTypeId: "TRANSFORM_MOVE", config: {
                                delay: 2300, easing: "outQuart", duration: 4e3, target: {
                                    selector: ".stage-shapes-wrapper",
                                    selectorGuids: ["69e6b8c9-cd54-1fd4-0e83-9a4e91971696"]
                                }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX"
                            }
                        },
                        {
                            id: "a-3-n-25", actionTypeId: "TRANSFORM_ROTATE", config:
                            {
                                delay: 2300, easing: "outQuart", duration: 4e3, target: { selector: ".stage-shape-right", selectorGuids: ["0db5c932-ab7b-5017-304b-33f226380891"] },
                                yValue: -11, xUnit: "DEG", yUnit: "deg", zUnit: "DEG"
                            }
                        }, {
                            id: "a-3-n-11", actionTypeId: "STYLE_OPACITY", config: {
                                delay: 3e3,
                                easing: "ease", duration: 2e3, target: { selector: ".stage-copy-inner", selectorGuids: ["8d518431-8cd4-084c-0213-58035377901f"] },
                                value: 1, unit: ""
                            }
                        }, {
                            id: "a-3-n-27", actionTypeId: "STYLE_OPACITY", config: {
                                delay: 3e3, easing: "ease", duration: 2e3,
                                target: { selector: ".why-this-site-wrapper", selectorGuids: ["e4b625d6-1bd4-c57f-30db-87f8906177ad"] }, value: 1, unit: ""
                            }
                        }]
                }],
            useFirstGroupAsInitialState: !0, createdOn: 0x185727dcb5e
        }, "a-4": {
            id: "a-4", title: "Stage Scroll Animation",
            continuousParameterGroups: [{
                id: "a-4-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll",
                continuousActionGroups: [{
                    keyframe: 0, actionItems: [{
                        id: "a-4-n-11", actionTypeId: "TRANSFORM_SCALE",
                        config: {
                            delay: 0, easing: "", duration: 500, target: {
                                useEventTarget: "CHILDREN", selector: ".sun-scroll-animation",
                                selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"]
                            }, xValue: 1, yValue: 1, locked: !0
                        }
                    }, {
                        id: "a-4-n-13",
                        actionTypeId: "STYLE_OPACITY", config: {
                            delay: 0, easing: "", duration: 500, target: {
                                useEventTarget: "CHILDREN",
                                selector: ".sun-page-load-wrapper", selectorGuids: ["44c9bc4a-5f74-3e47-17ee-0258cd10b7bf"]
                            }, value: 1, unit: ""
                        }
                    }, {
                        id: "a-4-n-16",
                        actionTypeId: "STYLE_FILTER", config: {
                            delay: 0, easing: "", duration: 500, target: {
                                useEventTarget: "CHILDREN",
                                selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"]
                            }, filters: [{
                                type: "blur", filterId: "b0b5",
                                value: 0, unit: "em"
                            }]
                        }
                    }, {
                        id: "a-4-n-31", actionTypeId: "STYLE_OPACITY", config: {
                            delay: 0, easing: "", duration: 500,
                            target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] },
                            value: 0, unit: ""
                        }
                    }, {
                        id: "a-4-n-37", actionTypeId: "TRANSFORM_MOVE", config: {
                            delay: 0, easing: "", duration: 500, target: {
                                useEventTarget: "CHILDREN",
                                selector: ".stage-car-shine", selectorGuids: ["3b7b0047-25c4-add3-53c4-bb34c557b012"]
                            }, xValue: -22, zValue: 4, xUnit: "%", yUnit: "PX", zUnit: "px"
                        }
                    }, {
                        id: "a-4-n-39",
                        actionTypeId: "STYLE_OPACITY", config: {
                            delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shine", selectorGuids: ["3b7b0047-25c4-add3-53c4-bb34c557b012"] },
                            value: .1, unit: ""
                        }
                    }, {
                        id: "a-4-n-42", actionTypeId: "TRANSFORM_ROTATE", config: {
                            delay: 0, easing: "", duration: 500, target: {
                                useEventTarget: "CHILDREN", selector: ".stage-object-inner",
                                selectorGuids: ["279fd0cc-680a-f7ac-5128-85dd8eb80e40"]
                            }, yValue: 0, xUnit: "DEG", yUnit: "deg", zUnit: "DEG"
                        }
                    }, {
                        id: "a-4-n-44", actionTypeId: "TRANSFORM_MOVE", config: {
                            delay: 0, easing: "", duration: 500,
                            target: { useEventTarget: "CHILDREN", selector: ".stage-shape-right", selectorGuids: ["0db5c932-ab7b-5017-304b-33f226380891"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX"
                        }
                    }, {
                        id: "a-4-n-21", actionTypeId: "TRANSFORM_SCALE",
                        config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shadow", selectorGuids: ["ee710cf1-f90c-b38c-b9b6-3630729436e0"] }, xValue: 1, yValue: 1, locked: !0 }
                    }, {
                        id: "a-4-n-23",
                        actionTypeId: "STYLE_FILTER", config: {
                            delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shadow", selectorGuids: ["ee710cf1-f90c-b38c-b9b6-3630729436e0"] }, filters: [{
                                type: "blur",
                                filterId: "3ccc", value: 0, unit: "em"
                            }]
                        }
                    }, { id: "a-4-n-35", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shadow", selectorGuids: ["ee710cf1-f90c-b38c-b9b6-3630729436e0"] }, value: 1, unit: "" } }, { id: "a-4-n-7", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-wrapper", selectorGuids: ["648e2b6a-2df6-208c-74a3-798b739b2463"] }, xValue: 0, yValue: 0, zValue: 2, xUnit: "%", yUnit: "%", zUnit: "px" } }, { id: "a-4-n-9", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, {
                        id: "a-4-n-5", actionTypeId: "TRANSFORM_MOVE", config: {
                            delay: 0, easing: "", duration: 500, target: {
                                useEventTarget: "CHILDREN",
                                selector: ".stage-copy-wrapper", selectorGuids: ["66dc1515-3af0-7f48-a18d-80592c3417d4"]
                            }, yValue: 0, zValue: null, xUnit: "PX", yUnit: "%", zUnit: "px"
                        }
                    }]
                }, { keyframe: 5, actionItems: [{ id: "a-4-n-15", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-page-load-wrapper", selectorGuids: ["44c9bc4a-5f74-3e47-17ee-0258cd10b7bf"] }, value: 1, unit: "" } }, { id: "a-4-n-32", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] }, value: 1, unit: "" } }] }, { keyframe: 10, actionItems: [{ id: "a-4-n-14", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-page-load-wrapper", selectorGuids: ["44c9bc4a-5f74-3e47-17ee-0258cd10b7bf"] }, value: 0, unit: "" } }] }, { keyframe: 15, actionItems: [{ id: "a-4-n-41", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shine", selectorGuids: ["3b7b0047-25c4-add3-53c4-bb34c557b012"] }, xValue: -22, zValue: 4, xUnit: "%", yUnit: "PX", zUnit: "px" } }] }, { keyframe: 40, actionItems: [{ id: "a-4-n-40", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shine", selectorGuids: ["3b7b0047-25c4-add3-53c4-bb34c557b012"] }, value: .75, unit: "" } }] }, { keyframe: 50, actionItems: [{ id: "a-4-n-17", actionTypeId: "STYLE_FILTER", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] }, filters: [{ type: "blur", filterId: "b0b5", value: 0, unit: "em" }] } }] }, { keyframe: 70, actionItems: [{ id: "a-4-n-38", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shine", selectorGuids: ["3b7b0047-25c4-add3-53c4-bb34c557b012"] }, xValue: 25, zValue: 4, xUnit: "%", yUnit: "PX", zUnit: "px" } }] }, { keyframe: 100, actionItems: [{ id: "a-4-n-8", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-wrapper", selectorGuids: ["648e2b6a-2df6-208c-74a3-798b739b2463"] }, xValue: -5, yValue: 0, zValue: 2, xUnit: "%", yUnit: "%", zUnit: "px" } }, { id: "a-4-n-12", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] }, xValue: 2.2, yValue: 2.2, locked: !0 } }, { id: "a-4-n-10", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] }, xValue: 57, yValue: 37, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-4-n-18", actionTypeId: "STYLE_FILTER", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".sun-scroll-animation", selectorGuids: ["4692d3e6-766a-f518-17f1-a75fd77866d1"] }, filters: [{ type: "blur", filterId: "b0b5", value: 2, unit: "em" }] } }, { id: "a-4-n-22", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shadow", selectorGuids: ["ee710cf1-f90c-b38c-b9b6-3630729436e0"] }, xValue: .8, yValue: .8, locked: !0 } }, { id: "a-4-n-24", actionTypeId: "STYLE_FILTER", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shadow", selectorGuids: ["ee710cf1-f90c-b38c-b9b6-3630729436e0"] }, filters: [{ type: "blur", filterId: "3ccc", value: .8, unit: "em" }] } }, { id: "a-4-n-36", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-car-shadow", selectorGuids: ["ee710cf1-f90c-b38c-b9b6-3630729436e0"] }, value: .8, unit: "" } }, { id: "a-4-n-43", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-object-inner", selectorGuids: ["279fd0cc-680a-f7ac-5128-85dd8eb80e40"] }, yValue: -10, xUnit: "DEG", yUnit: "deg", zUnit: "DEG" } }, { id: "a-4-n-45", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-shape-right", selectorGuids: ["0db5c932-ab7b-5017-304b-33f226380891"] }, xValue: 13, xUnit: "%", yUnit: "PX", zUnit: "PX" } }, { id: "a-4-n-6", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".stage-copy-wrapper", selectorGuids: ["66dc1515-3af0-7f48-a18d-80592c3417d4"] }, yValue: -70, zValue: null, xUnit: "PX", yUnit: "%", zUnit: "px" } }] }]
            }], createdOn: 0x185728d1247
        }, "a-6": { id: "a-6", title: "Hero Image Scroll Effect â€“ DESKTOP", continuousParameterGroups: [{ id: "a-6-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-6-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".has-parallax-effect", selectorGuids: ["5b5f0e59-e6e9-58dc-752e-f4f17176a086"] }, xValue: 1.25, yValue: 1.25, locked: !0 } }, { id: "a-6-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hero-image-inner", selectorGuids: ["39d1cdb1-0a9d-b6fa-bf35-54fe20fb20b8"] }, value: .05, unit: "" } }, { id: "a-6-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hero-image-inner", selectorGuids: ["39d1cdb1-0a9d-b6fa-bf35-54fe20fb20b8"] }, yValue: -15, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 40, actionItems: [{ id: "a-6-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hero-image-inner", selectorGuids: ["39d1cdb1-0a9d-b6fa-bf35-54fe20fb20b8"] }, value: 1, unit: "" } }] }, { keyframe: 100, actionItems: [{ id: "a-6-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hero-image-inner", selectorGuids: ["39d1cdb1-0a9d-b6fa-bf35-54fe20fb20b8"] }, yValue: 15, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }, { id: "a-6-n-2", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".has-parallax-effect", selectorGuids: ["5b5f0e59-e6e9-58dc-752e-f4f17176a086"] }, xValue: 1, yValue: 1, locked: !0 } }] }] }], createdOn: 0x185b9ec6baf }, "a-7": { id: "a-7", title: "Specs Divider Scroll Animation", continuousParameterGroups: [{ id: "a-7-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-7-n", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "63cf96b94c1db3629fce9014|5f09188f-6ca9-cea9-ed10-75565be12f4c" }, widthValue: 0, widthUnit: "%", heightUnit: "PX", locked: !1 } }] }, { keyframe: 28, actionItems: [{ id: "a-7-n-2", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "63cf96b94c1db3629fce9014|5f09188f-6ca9-cea9-ed10-75565be12f4c" }, widthValue: 100, widthUnit: "%", heightUnit: "PX", locked: !1 } }] }] }], createdOn: 0x185bf75a786 }, "a-8": { id: "a-8", title: "Hero Image Scroll Effect â€“ MOBILE", continuousParameterGroups: [{ id: "a-8-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-8-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".has-parallax-effect", selectorGuids: ["5b5f0e59-e6e9-58dc-752e-f4f17176a086"] }, xValue: 1.5, yValue: 1.5, locked: !0 } }, { id: "a-8-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hero-image-inner", selectorGuids: ["39d1cdb1-0a9d-b6fa-bf35-54fe20fb20b8"] }, value: .05, unit: "" } }] }, { keyframe: 40, actionItems: [{ id: "a-8-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hero-image-inner", selectorGuids: ["39d1cdb1-0a9d-b6fa-bf35-54fe20fb20b8"] }, value: 1, unit: "" } }] }, { keyframe: 100, actionItems: [{ id: "a-8-n-6", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".has-parallax-effect", selectorGuids: ["5b5f0e59-e6e9-58dc-752e-f4f17176a086"] }, xValue: 1, yValue: 1, locked: !0 } }] }] }], createdOn: 0x185b9ec6baf }, "a-11": { id: "a-11", title: "Feature Gallery Scroll Animation", continuousParameterGroups: [{ id: "a-11-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-11-n-4", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, xValue: 1.2, yValue: 1.2, locked: !0 } }, { id: "a-11-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, value: 0, unit: "" } }, { id: "a-11-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, yValue: 0, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }, { id: "a-11-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-media", selectorGuids: ["5d1d3369-546f-b24f-f4a7-a04da6c0298c"] }, xValue: 1.5, yValue: 1.5, locked: !0 } }, { id: "a-11-n-14", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-media", selectorGuids: ["5d1d3369-546f-b24f-f4a7-a04da6c0298c"] }, yValue: 20, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }, { id: "a-11-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-media", selectorGuids: ["5d1d3369-546f-b24f-f4a7-a04da6c0298c"] }, value: 0, unit: "" } }] }, { keyframe: 10, actionItems: [{ id: "a-11-n-17", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, value: 0, unit: "" } }] }, { keyframe: 20, actionItems: [{ id: "a-11-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-media", selectorGuids: ["5d1d3369-546f-b24f-f4a7-a04da6c0298c"] }, value: 1, unit: "" } }] }, { keyframe: 25, actionItems: [{ id: "a-11-n-12", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-11-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, value: 1, unit: "" } }] }, { keyframe: 60, actionItems: [{ id: "a-11-n-13", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-media", selectorGuids: ["5d1d3369-546f-b24f-f4a7-a04da6c0298c"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 85, actionItems: [{ id: "a-11-n-15", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-media", selectorGuids: ["5d1d3369-546f-b24f-f4a7-a04da6c0298c"] }, yValue: -25, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }, { id: "a-11-n-16", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, xValue: .7, yValue: .7, locked: !0 } }] }, { keyframe: 100, actionItems: [{ id: "a-11-n-11", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".gallery-item-content-inner", selectorGuids: ["1de2e5f9-90c0-8080-06d4-7b00f05a38db"] }, yValue: -40, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }] }] }], createdOn: 0x1859c261759 }, "a-22": { id: "a-22", title: "Parallax Scroll â€“ Medium Speed", continuousParameterGroups: [{ id: "a-22-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-22-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "63cf96b94c1db3629fce9014|74a79014-8e20-e0c3-291e-6839491239a2" }, yValue: 10, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 100, actionItems: [{ id: "a-22-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "63cf96b94c1db3629fce9014|74a79014-8e20-e0c3-291e-6839491239a2" }, yValue: -10, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }] }] }], createdOn: 0x185df5146fa }, "a-23": {
            id: "a-23", title: "Popup open", actionItemGroups: [{
                actionItems: [{
                    id: "a-23-n", actionTypeId: "TRANSFORM_MOVE",
                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".popup-content-wrapper", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d0b"] }, yValue: 3, xUnit: "PX", yUnit: "em", zUnit: "PX" }
                }, { id: "a-23-n-2", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".popup-wrapper", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d12"] }, value: "none" } }, { id: "a-23-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".popup-inner", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d0d"] }, value: 0, unit: "" } }]
            }, { actionItems: [{ id: "a-23-n-4", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".popup-wrapper", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d12"] }, value: "block" } }, { id: "a-23-n-5", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".popup-content-wrapper", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d0b"] }, yValue: 0, xUnit: "PX", yUnit: "em", zUnit: "PX" } }, { id: "a-23-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "ease", duration: 500, target: { selector: ".popup-inner", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d0d"] }, value: 1, unit: "" } }] }], useFirstGroupAsInitialState: !0, createdOn: 0x17d294a3fc5
        }, "a-24": {
        id: "a-24", title: "Popup close", actionItemGroups: [{
            actionItems: [{ id: "a-24-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".popup-content-wrapper", selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d0b"] }, yValue: 3, xUnit: "PX", yUnit: "em", zUnit: "PX" } }, {
                id: "a-24-n-2", actionTypeId: "STYLE_OPACITY",
        config: {
            delay: 0, easing: "ease", duration: 500,
            target: {
                selector: ".popup-inner",
                selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d0d"]
            }, value: 0, unit: ""
        }
    }]
    },
        {
            actionItems: [{
                id: "a-24-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                    delay: 0, easing: "", duration: 0, target:
                    {
                        selector: ".popup-wrapper",
                        selectorGuids: ["fb64883e-d804-dacd-44a8-519a4a332d12"]
                    }, value: "none"
                }
            }]
        }],
        useFirstGroupAsInitialState: !1, createdOn: 0x17d294a3fc5
    },
        "a-25": {
            id: "a-25", title: "Sunset Scroll Animation",
            continuousParameterGroups: [{
                id: "a-25-p", type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll", continuousActionGroups: [{
                    keyframe: 0,
                    actionItems: [{
                        id: "a-25-n", actionTypeId: "TRANSFORM_SCALE",
                        config: {
                            delay: 0, easing: "", duration: 500, target:
                            {
                                useEventTarget: "CHILDREN", selector: ".sunset-image-wrap",
                                selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776f"]
                            },
                            xValue: 3, yValue: 3, locked: !0
                        }
                    }, {
                            id: "a-25-n-3",
                            actionTypeId: "TRANSFORM_MOVE", config: {
                                delay: 0, easing: "", duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN", selector: ".sunset-image-wrap",
                                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776f"]
                                }, xValue: 120,
                                yValue: -210, xUnit: "vw", yUnit: "vh", zUnit: "PX"
                            } //cambiar posicion inicial
                        },
                        {
                            id: "a-25-n-2", actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0, easing: "", duration: 500, target:
                                {
                                    useEventTarget: "CHILDREN", selector: ".sunset-image",
                                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d47770"]
                                }, value: 0, unit: ""
                            }
                        },
                        {
                            id: "a-25-n-4", actionTypeId: "TRANSFORM_SCALE", config: {
                                delay: 0, easing: "",
                                duration: 500, target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".sunset-sun", selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
                                },
                                xValue: 5, yValue: 5, locked: !0
                            }
},
    {
        id: "a-25-n-5", actionTypeId: "STYLE_OPACITY",
        config: {
            delay: 0, easing: "",
            duration: 500,
            target: {
                useEventTarget: "CHILDREN",
                selector: ".sunset-sun",
                selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
            },
            value: 0, unit: ""
        }
    },
    {
        id: "a-25-n-6",
        actionTypeId: "TRANSFORM_MOVE",
        config: {
            delay: 0, easing: "",
            duration: 500,
            target: {
                useEventTarget: "CHILDREN",
                selector: ".sunset-title",
                selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a"]
            },
            yValue: -15, xUnit: "PX", yUnit: "vh", zUnit: "PX"
        }
    }]
},
    {
        keyframe: 5,
        actionItems: [{
            id: "a-25-n-7",
            actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "",
                duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._1",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47775"]
                }, value: 0, unit: ""
            }
        },
        {
            id: "a-25-n-8", actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._2",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47776"]
                }, value: 0, unit: ""
            }
        }]
    },
    {
        keyframe: 10, actionItems: [{
            id: "a-25-n-9",
            actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "",
                duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-sun",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
                }, value: 1, unit: ""
            }
        }]
    },
    {
        keyframe: 12, actionItems: [{
            id: "a-25-n-10",
            actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._1",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47775"]
                },
                value: 1, unit: ""
            }
        }]
    }, {
        keyframe: 30, actionItems: [{
            id: "a-25-n-11",
            actionTypeId: "STYLE_OPACITY", config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._1",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47775"]
                }, value: 1, unit: ""
            }
        }]
    },
    {
        keyframe: 33, actionItems: [{
            id: "a-25-n-12",
            actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._1",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47775"]
                }, value: 0, unit: ""
            }
        }]
    },
    {
        keyframe: 36, actionItems: [{
            id: "a-25-n-13",
            actionTypeId: "STYLE_OPACITY", config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN", selector: ".sunset-title._2",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47776"]
                }, value: 0, unit: ""
            }
        }]
    },
    {
        keyframe: 41, actionItems: [{
            id: "a-25-n-14",
            actionTypeId: "STYLE_OPACITY", config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._2",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47776"]
                }, value: 1, unit: ""
            }
        }]
    },
    {
        keyframe: 59, actionItems: [{
            id: "a-25-n-15",
            actionTypeId: "STYLE_OPACITY", config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._2",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47776"]
                }, value: 1, unit: ""
            }
        }]
    },
    {
        keyframe: 65, actionItems: [{
            id: "a-25-n-16",
            actionTypeId: "STYLE_OPACITY", config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title._2",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a",
                        "4678e772-e01f-8075-a38b-723f28d47776"]
                }, value: 0, unit: ""
            }
        },
        {
            id: "a-25-n-17", actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN", selector: ".sunset-image",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d47770"]
                },
                value: 0, unit: ""
            }
        }, {
            id: "a-25-n-19", actionTypeId: "TRANSFORM_SCALE",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-sun",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
                },
                xValue: 6, yValue: 6, locked: !0
            }
        },
        {
            id: "a-25-n-20", actionTypeId: "TRANSFORM_MOVE",
            config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-title",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776a"]
                },
                yValue: 5, xUnit: "PX", yUnit: "vh", zUnit: "PX"
            }
        },
        {
            id: "a-25-n-29", actionTypeId: "TRANSFORM_MOVE",
            config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-image-wrap",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776f"]
                },
                xValue: 15, yValue: -10, xUnit: "vw", yUnit: "vh", zUnit: "PX"
            }
        }]
    },
    {
        keyframe: 70, actionItems: [{
            id: "a-25-n-21",
            actionTypeId: "STYLE_OPACITY", config: {
                delay: 0, easing: "",
                duration: 500, target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-savesion-text",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d47772"]
                },
                value: 0, unit: ""
            }
        }]
    },
    {
        keyframe: 80, actionItems: [{
            id: "a-25-n-22", actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN",
                    selector: ".sunset-image",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d47770"]
                },
                value: 1, unit: ""
            }
        }, {
            id: "a-25-n-23", actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN", selector: ".sunset-sun",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
                }, value: 1, unit: ""
            }
        },
        {
            id: "a-25-n-24", actionTypeId: "STYLE_OPACITY",
            config: {
                delay: 0, easing: "", duration: 500,
                target: {
                    useEventTarget: "CHILDREN", selector: ".sunset-savesion-text",
                    selectorGuids: ["4678e772-e01f-8075-a38b-723f28d47772"]
                }, value: 1, unit: ""
            }
        }]
    },
    {
  keyframe: 83,
  actionItems: [
    {
      id: "a-25-n-25",
      actionTypeId: "TRANSFORM_SCALE",
      config: {
        delay: 0,
        easing: "",
        duration: 500,
        target: {
          useEventTarget: "CHILDREN",
          selector: ".sunset-image-wrap",
          selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776f"]
        },
        xValue: 1,
        yValue: 1,
        locked: !0
      }
    },
    {
      id: "a-25-n-26",
      actionTypeId: "TRANSFORM_MOVE",
      config: {
        delay: 0,
        easing: "",
        duration: 500,
        target: {
          useEventTarget: "CHILDREN",
          selector: ".sunset-image-wrap",
          selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776f"]
        },
        xValue: 0,
        yValue: 0,
        xUnit: "vw",
        yUnit: "vh",
        zUnit: "PX"
      }
    },
    {
      id: "a-25-n-27",
      actionTypeId: "TRANSFORM_SCALE",
      config: {
        delay: 0,
        easing: "",
        duration: 500,
        target: {
          useEventTarget: "CHILDREN",
          selector: ".sunset-sun",
          selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
        },
        xValue: 0,
        yValue: 0,
        locked: !0
      }
    },
    {
      id: "a-25-n-28",
      actionTypeId: "STYLE_OPACITY",
      config: {
        delay: 0,
        easing: "",
        duration: 500,
        target: {
          useEventTarget: "CHILDREN",
          selector: ".sunset-sun",
          selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
        },
        value: 0,
        unit: ""
      }
    },
    {
      id: "a-25-n-XX",
      actionTypeId: "TRANSFORM_MOVE",
      config: (function () {
        const sun = document.querySelector(".sunset-sun");
        const targetImg = document.querySelector(".footer-logo img");

        if (sun && targetImg) {
          const sunRect = sun.getBoundingClientRect();
          const targetRect = targetImg.getBoundingClientRect();

          // Calcular delta entre centro del sol y centro de la imagen
          const targetX =
            (targetRect.left + targetRect.width / 2) -
            (sunRect.left + sunRect.width / 2);
          const targetY =
            (targetRect.top + targetRect.height / 2) -
            (sunRect.top + sunRect.height / 2);

          return {
            delay: 0,
            easing: "",
            duration: 500,
            target: {
              useEventTarget: "CHILDREN",
              selector: ".sunset-sun",
              selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
            },
            xValue: targetX,
            yValue: targetY,
            xUnit: "px",
            yUnit: "px",
            zUnit: "PX"
          };
        }

        // fallback si no encuentra elementos
        return {
          delay: 0,
          easing: "",
          duration: 500,
          target: {
            useEventTarget: "CHILDREN",
            selector: ".sunset-sun",
            selectorGuids: ["4678e772-e01f-8075-a38b-723f28d4776c"]
          },
          xValue: -10,
          yValue: 35,
          xUnit: "vw",
          yUnit: "vh",
          zUnit: "PX"
        };
      })()
    }
  ]
}]
}], createdOn: 0x185e93d7a1a
},
    "a-26": {
        id: "a-26", title: "Hide my Nav",
        actionItemGroups: [{
            actionItems: [{
                id: "a-26-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                    delay: 0, easing: "ease", duration: 200,
                    target: {
                        useEventTarget: "SIBLINGS", selector: ".nav",
                        selectorGuids: ["7d5ce405-b305-6754-325d-ec11a0180616"]
                    }, value: 0, unit: ""
                }
            },
            {
                id: "a-26-n-2", actionTypeId: "TRANSFORM_MOVE",
                config: {
                    delay: 0, easing: "outQuart",
                    duration: 200, target: {
                        useEventTarget: "SIBLINGS", selector: ".nav",
                        selectorGuids: ["7d5ce405-b305-6754-325d-ec11a0180616"]
                    }
                    , yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX"
                }
            }]
        }],
        useFirstGroupAsInitialState: !1, createdOn: 0x1860c5d14d0
    },
        "a-27":{id:"a-27",title:"Show my Nav",actionItemGroups:[{actionItems:[{id:"a-27-n",actionTypeId:"STYLE_OPACITY",config:{delay:0,easing:"ease",duration:200,target:{useEventTarget:"SIBLINGS",selector:".nav",selectorGuids:["7d5ce405-b305-6754-325d-ec11a0180616"]},value:1,unit:""}},{id:"a-27-n-2",actionTypeId:"TRANSFORM_MOVE",config:{delay:0,easing:"outQuart",duration:200,target:{useEventTarget:"SIBLINGS",selector:".nav",selectorGuids:["7d5ce405-b305-6754-325d-ec11a0180616"]},yValue:0,xUnit:"PX",yUnit:"%",zUnit:"PX"}}]}],useFirstGroupAsInitialState:!1,createdOn:0x1860c5d14d0}},site:{mediaQueries:[{key:"main",min:992,max:1e4},{key:"medium",min:768,max:991},{key:"small",min:480,max:767},{key:"tiny",min:0,max:479}]}})}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a](r,r.exports,n),r.loaded=!0,r.exports}n.m=e,n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e=[];n.O=(t,a,i,r)=>{if(a){r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[a,i,r];return}for(var c=1/0,o=0;o<e.length;o++){for(var[a,i,r]=e[o],u=!0,l=0;l<a.length;l++)(!1&r||c>=r)&&Object.keys(n.O).every(e=>n.O[e](a[l]))?a.splice(l--,1):(u=!1,r<c&&(c=r));if(u){e.splice(o--,1);var s=i();void 0!==s&&(t=s)}}return t}})(),n.rv=()=>"1.3.9",(()=>{var e={774:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[o,c,u]=a,l=0;if(o.some(t=>0!==e[t])){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(u)var s=u(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.ruid="bundler=rspack@1.3.9";var a=n.O(void 0,["87","985"],function(){return n(8269)});a=n.O(a)})();