(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[347],{6208:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},926:(e,a,n)=>{"use strict";n.d(a,{bU:()=>c,P2:()=>d,IH:()=>l,D$:()=>u});var t=n(6156),r=n(641),o=n(7532);function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){(0,t.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(){var e={},a=(0,r.iH)({}),n=function(n){if(!e[n])return console.warn("The ".concat(n," does not exist. You can mount a language package using the add method")),{};a.value=e[n]};return{packs:e,pack:a,add:function(a,n){n.lang=a,e[a]=n},use:n,merge:function(a,t){e[a]?(e[a]=p(p({},e[a]),t),n(a)):console.warn("The ".concat(a," does not exist. You can mount a language package using the add method"))}}}var s=c(),d=(s.packs,s.pack),l=s.add,u=s.use;s.merge,l("zh-CN",o.Z),u("zh-CN")},7532:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},7276:(e,a,n)=>{"use strict";n.d(a,{vF:()=>c,cx:()=>s,vj:()=>d,IS:()=>l,UD:()=>u,R6:()=>x,xj:()=>v,Ak:()=>m,I:()=>y,uA:()=>k,gI:()=>g,U7:()=>S,Wx:()=>z,xX:()=>T,X5:()=>C,ez:()=>Z});var t=n(7757),r=n.n(t),o=n(4699),i=n(2137),p=n(8322);function c(e){return e.getBoundingClientRect().top+(document.body.scrollTop||document.documentElement.scrollTop)}function s(e){var a="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(a,0)}function d(e){var a="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(a,0)}function l(e){return e.getBoundingClientRect().left+(document.body.scrollLeft||document.documentElement.scrollLeft)}function u(e){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(r().mark((function e(a){var n,t,o,i,p,c,s,d,l,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return n=a.getBoundingClientRect(),t=n.top,o=n.bottom,i=n.left,p=n.right,c=window,s=c.innerWidth,d=c.innerHeight,l=i<=s&&p>=0,u=t<=d&&o>=0,e.abrupt("return",l&&u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var a=window.getComputedStyle(e).transform;return+a.slice(a.lastIndexOf(",")+2,a.length-1)}function v(e){var a=e.getBoundingClientRect(),n=a.width,t=a.height;return 0===n&&0===t}function m(e){for(var a=e;a&&a.parentNode&&(a=a.parentNode)!==document.body&&a!==document.documentElement;){var n=/(scroll|auto)/,t=window.getComputedStyle(a),r=t.overflowY,o=t.overflow;if(n.test(r)||n.test(o))return a}return window}function y(e){for(var a=[],n=e;n!==window;)n=m(n),a.push(n);return a}var h=function(e){return(0,p.HD)(e)&&e.endsWith("rem")},w=function(e){return(0,p.HD)(e)&&e.endsWith("vw")},f=function(e){return(0,p.HD)(e)&&e.endsWith("vh")},k=function(e){if((0,p.hj)(e))return e;if(function(e){return(0,p.HD)(e)&&e.endsWith("px")||(0,p.hj)(e)}(e))return+e.replace("px","");if(w(e))return+e.replace("vw","")*window.innerWidth/100;if(f(e))return+e.replace("vh","")*window.innerHeight/100;if(h(e)){var a=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return a*parseFloat(n)}return(0,p.HD)(e)?(0,p.He)(e):0},g=function(e){return null==e?null:function(e){return(0,p.HD)(e)&&e.endsWith("%")}(e)||w(e)||f(e)||h(e)?e:"".concat(k(e),"px")};function S(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,16)}function z(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}function T(e){S((function(){S(e)}))}function _(){return new Promise((function(e){S((function(){S(e)}))}))}function C(e,a){var n=a.top,t=void 0===n?0:n,r=a.left,o=void 0===r?0:r,i=a.duration,p=void 0===i?300:i,c=a.animation,l=Date.now(),u=s(e),b=d(e);S((function a(){var n=(Date.now()-l)/p;if(n<1){var r=u+(t-u)*c(n),i=b+(o-b)*c(n);e.scrollTo(i,r),S(a)}else e.scrollTo(o,t)}))}function Z(e){return Object.entries(e).reduce((function(e,a){var n=(0,o.Z)(a,2),t=n[0],r=n[1];return e[t.startsWith("--")?t:"--".concat((0,p.GL)(t))]=r,e}),{})}},5025:(e,a,n)=>{"use strict";n.d(a,{Z:()=>o});var t=n(2609),r=n.n(t)()((function(e){return e[1]}));r.push([e.id,"\n.example[data-v-b81b939c] {\n  background: antiquewhite;\n}\n",""]);const o=r},6209:(e,a,n)=>{"use strict";n.d(a,{Z:()=>o});var t=n(2609),r=n.n(t)()((function(e){return e[1]}));r.push([e.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const o=r},9449:(e,a,n)=>{"use strict";n.d(a,{Z:()=>o});var t=n(2609),r=n.n(t)()((function(e){return e[1]}));r.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-elevation--0 {\n  box-shadow: 0 0 0 0 var(--shadow-key-umbra-opacity), 0 0 0 0 var(--shadow-key-penumbra-opacity), 0 0 0 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--1 {\n  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity), 0 1px 1px 0 var(--shadow-key-penumbra-opacity), 0 1px 3px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--2 {\n  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity), 0 1px 5px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--3 {\n  box-shadow: 0 3px 3px -2px var(--shadow-key-umbra-opacity), 0 3px 4px 0 var(--shadow-key-penumbra-opacity), 0 1px 8px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--4 {\n  box-shadow: 0 2px 4px -1px var(--shadow-key-umbra-opacity), 0 4px 5px 0 var(--shadow-key-penumbra-opacity), 0 1px 10px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--5 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity), 0 1px 14px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--6 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 6px 10px 0 var(--shadow-key-penumbra-opacity), 0 1px 18px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--7 {\n  box-shadow: 0 4px 5px -2px var(--shadow-key-umbra-opacity), 0 7px 10px 1px var(--shadow-key-penumbra-opacity), 0 2px 16px 1px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--8 {\n  box-shadow: 0 5px 5px -3px var(--shadow-key-umbra-opacity), 0 8px 10px 1px var(--shadow-key-penumbra-opacity), 0 3px 14px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--9 {\n  box-shadow: 0 5px 6px -3px var(--shadow-key-umbra-opacity), 0 9px 12px 1px var(--shadow-key-penumbra-opacity), 0 3px 16px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--10 {\n  box-shadow: 0 6px 6px -3px var(--shadow-key-umbra-opacity), 0 10px 14px 1px var(--shadow-key-penumbra-opacity), 0 4px 18px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--11 {\n  box-shadow: 0 6px 7px -4px var(--shadow-key-umbra-opacity), 0 11px 15px 1px var(--shadow-key-penumbra-opacity), 0 4px 20px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--12 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 12px 17px 2px var(--shadow-key-penumbra-opacity), 0 5px 22px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--13 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 13px 19px 2px var(--shadow-key-penumbra-opacity), 0 5px 24px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--14 {\n  box-shadow: 0 7px 9px -4px var(--shadow-key-umbra-opacity), 0 14px 21px 2px var(--shadow-key-penumbra-opacity), 0 5px 26px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--15 {\n  box-shadow: 0 8px 9px -5px var(--shadow-key-umbra-opacity), 0 15px 22px 2px var(--shadow-key-penumbra-opacity), 0 6px 28px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--16 {\n  box-shadow: 0 8px 10px -5px var(--shadow-key-umbra-opacity), 0 16px 24px 2px var(--shadow-key-penumbra-opacity), 0 6px 30px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--17 {\n  box-shadow: 0 8px 11px -5px var(--shadow-key-umbra-opacity), 0 17px 26px 2px var(--shadow-key-penumbra-opacity), 0 6px 32px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--18 {\n  box-shadow: 0 9px 11px -5px var(--shadow-key-umbra-opacity), 0 18px 28px 2px var(--shadow-key-penumbra-opacity), 0 7px 34px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--19 {\n  box-shadow: 0 9px 12px -6px var(--shadow-key-umbra-opacity), 0 19px 29px 2px var(--shadow-key-penumbra-opacity), 0 7px 36px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--20 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 20px 31px 3px var(--shadow-key-penumbra-opacity), 0 8px 38px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--21 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 21px 33px 3px var(--shadow-key-penumbra-opacity), 0 8px 40px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--22 {\n  box-shadow: 0 10px 14px -6px var(--shadow-key-umbra-opacity), 0 22px 35px 3px var(--shadow-key-penumbra-opacity), 0 8px 42px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--23 {\n  box-shadow: 0 11px 14px -7px var(--shadow-key-umbra-opacity), 0 23px 36px 3px var(--shadow-key-penumbra-opacity), 0 9px 44px 8px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--24 {\n  box-shadow: 0 11px 15px -7px var(--shadow-key-umbra-opacity), 0 24px 38px 3px var(--shadow-key-penumbra-opacity), 0 9px 46px 8px var(--shadow-key-ambient-opacity);\n}\n.var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n:root {\n  --card-padding: 0 0 10px 0;\n  --card-border-radius: 4px;\n  --card-image-width: 100%;\n  --card-image-height: 200px;\n  --card-title-color: #333;\n  --card-title-font-size: 20px;\n  --card-title-padding: 0 12px;\n  --card-title-margin: 10px 0 0 0;\n  --card-subtitle-color: rgba(0, 0, 0, 0.6);\n  --card-subtitle-font-size: 14px;\n  --card-subtitle-padding: 0 13px;\n  --card-subtitle-margin: 10px 0 0 0;\n  --card-description-color: rgba(0, 0, 0, 0.6);\n  --card-description-font-size: 14px;\n  --card-description-margin: 20px 0 0 0;\n  --card-description-padding: 0 13px;\n  --card-footer-padding: 0 12px;\n  --card-footer-margin: 30px 0 0px 0;\n  --card-line-height: 22px;\n}\n.var-card {\n  border-radius: var(--card-border-radius);\n  overflow: hidden;\n  padding: var(--card-padding);\n  line-height: var(--card-line-height);\n}\n.var-card__image {\n  width: var(--card-image-width);\n  height: var(--card-image-height);\n  display: block;\n}\n.var-card__title {\n  font-size: var(--card-title-font-size);\n  padding: var(--card-title-padding);\n  margin: var(--card-title-margin);\n  color: var(--card-title-color);\n}\n.var-card__subtitle {\n  font-size: var(--card-subtitle-font-size);\n  color: var(--card-subtitle-color);\n  padding: var(--card-subtitle-padding);\n  margin: var(--card-subtitle-margin);\n}\n.var-card__description {\n  font-size: var(--card-description-font-size);\n  color: var(--card-description-color);\n  margin: var(--card-description-margin);\n  padding: var(--card-description-padding);\n}\n.var-card__footer {\n  padding: var(--card-footer-padding);\n  margin: var(--card-footer-margin);\n}\n",""]);const o=r},9433:(e,a,n)=>{"use strict";n.d(a,{Z:()=>s});var t=n(7875),r={class:"app-type"};const o=(0,t.aZ)({name:"AppType"});var i=n(6062),p=n.n(i),c=n(6209);p()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,o.render=function(e,a,n,o,i,p){return(0,t.wg)(),(0,t.j4)("div",r,[(0,t.WI)(e.$slots,"default")])};const s=o},347:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>F});var t=n(7875),r=n(349),o=(0,t.HX)("data-v-b81b939c"),i=o((function(e,a,n,i,p,c){var s=(0,t.up)("app-type"),d=(0,t.up)("var-card"),l=(0,t.up)("var-button");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)(s,null,{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.basicUsage),1)]})),_:1}),(0,t.Wm)(d,{title:i.pack.title,description:i.pack.description},null,8,["title","description"]),(0,t.Wm)(s,null,{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.showSubtitle),1)]})),_:1}),(0,t.Wm)(d,{title:i.pack.title,subtitle:i.pack.subtitle,description:i.pack.description},null,8,["title","subtitle","description"]),(0,t.Wm)(s,null,{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.showImage),1)]})),_:1}),(0,t.Wm)(d,{title:i.pack.title,subtitle:i.pack.subtitle,description:i.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},null,8,["title","subtitle","description"]),(0,t.Wm)(s,null,{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.useSlot),1)]})),_:1}),(0,t.Wm)(d,{title:i.pack.title,subtitle:i.pack.subtitle,description:i.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{extra:o((function(){return[(0,t.Wm)(l,{type:"primary",style:{"margin-right":"10px"}},{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.button),1)]})),_:1}),(0,t.Wm)(l,{type:"warning"},{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.button),1)]})),_:1})]})),_:1},8,["title","subtitle","description"]),(0,t.Wm)(s,null,{default:o((function(){return[(0,t.Uk)((0,r.zw)(i.pack.showRipple),1)]})),_:1}),(0,t.Wm)(d,{title:i.pack.title,subtitle:i.pack.subtitle,description:i.pack.description,ripple:""},null,8,["title","subtitle","description"])],64)})),p=n(6156),c=n(9433),s=n(5602),d={key:0,class:"var-card__title"},l={key:0,class:"var-card__subtitle"},u={key:0,class:"var-card__description"},b={key:0,class:"var-card__footer"},x=n(4793),v={src:{type:String},fit:{type:String,validator:function(e){return["fill","contain","cover","none","scale-down"].includes(e)},default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}},m=n(7276);const y=(0,t.aZ)({name:"VarCard",directives:{Ripple:x.Z},props:v,setup:function(){return{toSizeUnit:m.gI}}});var h=n(6062),w=n.n(h),f=n(9449);w()(f.Z,{insert:"head",singleton:!1}),f.Z.locals,y.render=function(e,a,n,o,i,p){var c=(0,t.Q2)("ripple");return(0,t.wy)(((0,t.wg)(),(0,t.j4)("div",{class:["var-card",[e.elevation?"var-elevation--".concat(e.elevation):"var-elevation--2"]],onClick:a[1]||(a[1]=function(){return e.onClick&&e.onClick.apply(e,arguments)})},[(0,t.WI)(e.$slots,"image",{},(function(){return[e.src?((0,t.wg)(),(0,t.j4)("img",{key:0,class:"var-card__image",style:{objectFit:e.fit,height:e.toSizeUnit(e.height)},src:e.src,alt:e.alt},null,12,["src","alt"])):(0,t.kq)("v-if",!0)]})),(0,t.WI)(e.$slots,"title",{},(function(){return[e.title?((0,t.wg)(),(0,t.j4)("div",d,(0,r.zw)(e.title),1)):(0,t.kq)("v-if",!0)]})),(0,t.WI)(e.$slots,"subtitle",{},(function(){return[e.subtitle?((0,t.wg)(),(0,t.j4)("div",l,(0,r.zw)(e.subtitle),1)):(0,t.kq)("v-if",!0)]})),(0,t.WI)(e.$slots,"description",{},(function(){return[e.description?((0,t.wg)(),(0,t.j4)("div",u,(0,r.zw)(e.description),1)):(0,t.kq)("v-if",!0)]})),e.$slots.extra?((0,t.wg)(),(0,t.j4)("div",b,[(0,t.WI)(e.$slots,"extra")])):(0,t.kq)("v-if",!0)],2)),[[c,{disabled:!e.ripple}]])};const k=y;k.install=function(e){e.component(k.name,k)};const g=k;var S=n(629),z=n(7532),T=n(6208),_=n(926),C=(0,_.bU)(),Z=C.add,j=C.use,W=C.pack,O=(C.packs,C.merge,function(e){(0,_.D$)(e),j(e)});(0,_.IH)("zh-CN",z.Z),(0,_.IH)("en-US",T.Z),Z("zh-CN",{basicUsage:"基本使用",title:"风景",showSubtitle:"显示副标题",subtitle:"公园里的风景",description:"公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。",showImage:"显示图片",useSlot:"使用插槽",button:"添加按钮",showRipple:"水波效果"}),Z("en-US",{basicUsage:"Basic Usage",title:"Little Prince",showSubtitle:"Show Subtitlewhere",subtitle:"little prince from",description:"It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.",showImage:"Show Image",useSlot:"Use Slot",button:"Use Button",showRipple:"Ripple Effect"});var I,U=n(3638);const D={name:"CardExample",components:(I={},(0,p.Z)(I,g.name,g),(0,p.Z)(I,s.Z.name,s.Z),(0,p.Z)(I,"AppType",c.Z),I),setup:function(){(0,U.jS)(O);var e=S.Z.touchmoveForbid;return(0,U.Id)((function(e){"pc"===e&&(S.Z.touchmoveForbid=!1)})),(0,t.Ah)((function(){S.Z.touchmoveForbid=e})),{pack:W}}};var A=n(5025);w()(A.Z,{insert:"head",singleton:!1}),A.Z.locals,D.render=i,D.__scopeId="data-v-b81b939c";const F=D},4699:(e,a,n)=>{"use strict";n.d(a,{Z:()=>r});var t=n(2961);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,r=!1,o=void 0;try{for(var i,p=e[Symbol.iterator]();!(t=(i=p.next()).done)&&(n.push(i.value),!a||n.length!==a);t=!0);}catch(e){r=!0,o=e}finally{try{t||null==p.return||p.return()}finally{if(r)throw o}}return n}}(e,a)||(0,t.Z)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);