!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ZxmUtils=t()}(this,(function(){"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(){var e=!1;return"undefined"!=typeof XMLHttpRequest&&"[object Function]"==Object.prototype.toString.call(XMLHttpRequest)&&(e=!0),e},a=Object.freeze({__proto__:null,isWeiXinMiniProgram:function(){var e=!1;try{wx&&wx.request&&(e=!0)}catch(e){}return e},isAliPayMiniProgram:function(){var e=!1;try{my&&my.request&&(e=!0)}catch(e){}return e},isBrowser:o,isNode:function(){var e=!1;return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(e=!0),e},isWeiXinBrowser:function(){var e=!1;o()&&(window.navigator.userAgent.toLowerCase().includes("micromessenger")&&(e=!0));return e},isMobileBrowser:function(){var e=!1;if(o()){var t=window.navigator.userAgent;/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(t)&&(e=!0)}return e},isPCBrowser:function(){var e=!1;if(o()){var t=window.navigator.userAgent;/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(t)||(e=!0)}return e}}),c=Object.freeze({__proto__:null,loadScript:function(e,t,r){var n=(e=Array.isArray(e)?e:[e]).map((function(e){var r;if(/\w*.css$/.test(e)){var n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,r=n}else(r=document.createElement("script")).type="text/javascript",r.src=e;var i=document.getElementsByTagName("body")[0];return(t||i).appendChild(r),new Promise((function(e){r.onload=function(){e()}}))}));return new Promise((function(e){Promise.all(n).then((function(){"function"==typeof r&&r(),e()}))}))}}),s=Object.freeze({__proto__:null,numAdd:function(e,t){var r,n,i;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{i=t.toString().split(".")[1].length}catch(e){i=0}return(e*(r=Math.pow(10,Math.max(n,i)))+t*r)/r},numSub:function(e,t){var r,n,i;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{i=t.toString().split(".")[1].length}catch(e){i=0}return((e*(r=Math.pow(10,Math.max(n,i)))-t*r)/r).toFixed(n>=i?n:i)},numMulti:function(e,t){var r=0;try{r+=e.toString().split(".")[1].length}catch(e){}try{r+=t.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))*Number(t.toString().replace(".",""))/Math.pow(10,r)},numDiv:function(e,t){var r=0,n=0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{n=t.toString().split(".")[1].length}catch(e){n=0}return Number(e.toString().replace(".",""))/Number(t.toString().replace(".",""))*Math.pow(10,n-r)}}),u=Object.freeze({__proto__:null,getRandomColor:function(){for(var e=[],t=0;t<3;++t){var r=Math.floor(256*Math.random()).toString(16);r=1==r.length?"0"+r:r,e.push(r)}return"#"+e.join("")}}),l=Object.freeze({__proto__:null,sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}}),p=Object.freeze({__proto__:null}),f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"loadScript",(function(e,t,r){var n=(e=Array.isArray(e)?e:[e]).map((function(e){var r;if(/\w*.css$/.test(e)){var n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,r=n}else(r=document.createElement("script")).type="text/javascript",r.src=e;var i=document.getElementsByTagName("body")[0];return(t||i).appendChild(r),new Promise((function(e){r.onload=function(){e()}}))}));return new Promise((function(e,t){Promise.all(n).then((function(){"function"==typeof r&&r(),e()}))}))})),this.jssdk_url="http://res.wx.qq.com/open/js/jweixin-1.6.0.js",this.jsApiList=["checkJsApi","chooseImage","uploadImage","previewImage","closeWindow","hideMenuItems","updateAppMessageShareData","updateTimelineShareData","miniProgram"],this.serveApiUrl="http://d.abczzz.cn/wx_pub_account/getWxJsSdkConfig",this.isLoadSdk=!1,this.wx={}}var t,o,a;return t=e,o=[{key:"setJssdkUrl",value:function(e){this.jssdk_url=e}},{key:"setJsApiList",value:function(e){this.jsApiList=e}},{key:"setServeApiUrl",value:function(e){this.serveApiUrl=e}},{key:"init",value:function(){var e=this;return new Promise(function(){var t,n=(t=regeneratorRuntime.mark((function t(r){var n,i,o,a,c,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.serveApiUrl){t.next=2;break}throw new Error("serveApiUrl undefind");case 2:if(e.isLoadSdk){t.next=6;break}return t.next=6,e.loadScript([e.jssdk_url]);case 6:return e.wx=window.wx,n={},t.prev=9,t.next=12,fetch(e.serveApiUrl);case 12:return i=t.sent,t.next=15,i.json();case 15:n=t.sent,t.next=21;break;case 18:throw t.prev=18,t.t0=t.catch(9),t.t0;case 21:a=(o=n).appid,c=o.nonceStr,s=o.signature,u=o.timestamp,e.wx.config({debug:!1,appId:a,timestamp:u,nonceStr:c,signature:s,jsApiList:e.jsApiList}),e.wx.ready((function(){r()})),e.wx.error((function(e){reject(e)}));case 25:case"end":return t.stop()}}),t,null,[[9,18]])})),function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(e){r(a,i,o,c,s,"next",e)}function s(e){r(a,i,o,c,s,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}())}}],o&&n(t.prototype,o),a&&n(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d=new f;return t(t(t(t(t(t(t({},a),c),s),u),l),p),{},{WxUtils:d})}));
