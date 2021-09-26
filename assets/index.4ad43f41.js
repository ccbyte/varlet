import{S as d}from"./index.e8790e5d.js";import{S as _}from"./index.54360e0e.js";import{A as f}from"./AppType.30486dc9.js";import{S as w}from"./index.46078349.js";import{u as j,a as m,_ as x,b as S,c as b,d as A}from"./utils.b74a4a18.js";import{_ as C}from"./IconSfc.a60484c8.js";import{d as r,o as k,c as F,h as e,w as t,F as y,S as I,U,l as n,t as i,a}from"./vendor.bac705d4.js";import"./provide.609f1ae4.js";import"./components.fc1d8498.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";import"./index.7e2aebb8.js";import"./index.128951cd.js";import"./index.389a472f.js";import"./index.b6b975df.js";import"./zIndex.148a12e4.js";import"./lock.cdd0a0f9.js";var E={basicUsage:"\u57FA\u672C\u4F7F\u7528",forbidLoop:"\u7981\u6B62\u5FAA\u73AF\u8F6E\u64AD",autoplay:"\u5F00\u542F\u81EA\u52A8\u64AD\u653E",vertical:"\u5782\u76F4\u8F6E\u64AD",handleChange:"\u76D1\u542C\u5207\u6362",customIndicator:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"},N={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"};const{add:g,use:B,pack:L,packs:Ct,merge:kt}=j(),z=o=>{b(o),B(o)};m("zh-CN",x);m("en-US",S);g("zh-CN",E);g("en-US",N);const D={name:"SwipeExample",components:{[d.name]:d,[_.name]:_,AppType:f},setup(){return A(z),{pack:L,Snackbar:w}}},s=o=>(I("data-v-68ee4a60"),o=o(),U(),o),V=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),T=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),H=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),G=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),J=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),K=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),M=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),O=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),P=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),Q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),R=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),W=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),X=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Y=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Z=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),$=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),tt=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),et={class:"indicators"},at=s(()=>a("div",{class:"space"},null,-1));function st(o,lt,it,c,ot,ct){const u=r("app-type"),l=r("var-swipe-item"),p=r("var-swipe");return k(),F(y,null,[e(u,null,{default:t(()=>[n(i(c.pack.basicUsage),1)]),_:1}),e(p,{class:"swipe",ref:"swipe"},{default:t(()=>[e(l,null,{default:t(()=>[V]),_:1}),e(l,null,{default:t(()=>[T]),_:1}),e(l,null,{default:t(()=>[H]),_:1})]),_:1},512),e(u,null,{default:t(()=>[n(i(c.pack.forbidLoop),1)]),_:1}),e(p,{class:"swipe",loop:!1},{default:t(()=>[e(l,null,{default:t(()=>[q]),_:1}),e(l,null,{default:t(()=>[G]),_:1}),e(l,null,{default:t(()=>[J]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(c.pack.autoplay),1)]),_:1}),e(p,{class:"swipe",autoplay:2e3},{default:t(()=>[e(l,null,{default:t(()=>[K]),_:1}),e(l,null,{default:t(()=>[M]),_:1}),e(l,null,{default:t(()=>[O]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(c.pack.vertical),1)]),_:1}),e(p,{class:"swipe",vertical:""},{default:t(()=>[e(l,null,{default:t(()=>[P]),_:1}),e(l,null,{default:t(()=>[Q]),_:1}),e(l,null,{default:t(()=>[R]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(c.pack.handleChange),1)]),_:1}),e(p,{class:"swipe",onChange:c.Snackbar},{default:t(()=>[e(l,null,{default:t(()=>[W]),_:1}),e(l,null,{default:t(()=>[X]),_:1}),e(l,null,{default:t(()=>[Y]),_:1})]),_:1},8,["onChange"]),e(u,null,{default:t(()=>[n(i(c.pack.customIndicator),1)]),_:1}),e(p,{class:"swipe"},{default:t(()=>[e(l,null,{default:t(()=>[Z]),_:1}),e(l,null,{default:t(()=>[$]),_:1}),e(l,null,{default:t(()=>[tt]),_:1})]),indicator:t(({index:h,length:v})=>[a("div",et,i(h+1)+" / "+i(v),1)]),_:1}),at],64)}var Ft=C(D,[["render",st],["__scopeId","data-v-68ee4a60"]]);export{Ft as default};
