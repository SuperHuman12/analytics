!function(){"use strict";var e,t,i,a=window.location,r=window.document,o=r.getElementById("plausible"),s=o.getAttribute("data-api")||(e=o.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function d(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return d("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return d("localStorage flag")}catch(e){}var i={};i.n=e,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){var e;4==n.readyState&&((e=n.responseText)&&!isNaN(e)&&(c=e),t&&t.callback&&t.callback())}}}var l=window.plausible&&window.plausible.q||[];window.plausible=n;for(var w,c,p=0;p<l.length;p++)n.apply(this,l[p]);function u(){w=a.pathname,n("pageview")}function g(){/hidden|unloaded/.test(r.visibilityState)&&c&&navigator.sendBeacon(s,JSON.stringify({n:"enrich",e:c}))}window.addEventListener("hashchange",u),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){w||"visible"!==r.visibilityState||u()}):u(),r.addEventListener("visibilitychange",g),r.addEventListener("pagehide",g),window.addEventListener("beforeunload",g)}();