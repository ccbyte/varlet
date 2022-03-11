import{A as d}from"./index.b9b706a4.js";import{A as x}from"./AppType.fedac5ad.js";import{B as D}from"./index.a2186a65.js";import{S as k}from"./index.d2036a67.js";import{c as y}from"./index.48ee5316.js";import{d as N}from"./index.9b1139e6.js";import{u as O,a as A,_ as z,b as V,c as L}from"./en-US.628e0d34.js";import{b as M,w as j,a as q}from"./utils.1735a57b.js";import{_ as P}from"./elevation.491afd1d.js";import{q as p,r as f,C as Y,e as b,o as G,c as H,i as n,j as i,F as J,m as l,t as s}from"./vendor.49f89f0d.js";import"./index.e35ca8e8.js";import"./index.5e919428.js";import"./lock.c5636ec8.js";import"./zIndex.8c13fd4c.js";import"./components.721843ff.js";import"./shared.506a394a.js";import"./index.68041ae1.js";import"./elements.6395be39.js";import"./index.50293886.js";var K={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",componentCall:"\u7EC4\u4EF6\u8C03\u7528",yourSelected:"\u60A8\u9009\u62E9\u7684\u662F:",customTitle:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427",disableCloseOnClickAction:"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",disabled:"\u7981\u7528\u9009\u9879",customActionStyles:"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"},Q={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"};const{add:v,use:R,pack:r,packs:bo,merge:So}=O(),W=m=>{L(m),R(m)};A("zh-CN",z);A("en-US",V);v("zh-CN",K);v("en-US",Q);const X={name:"ActionSheetExample",components:{VarActionSheet:d.Component,VarButton:D,AppType:x},setup(){const m=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],e=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],C=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],o=p(m),S=p(e),h=p(C),w=f(!1),a=f(!1),u=f(!1),c=f(!1),_=f(!1),F=async()=>{const t=await d({actions:m});t!=="close"&&k(`${r.value.yourSelected}${t.name}`)},U=async()=>{const t=await d({actions:m,title:r.value.customTitle});t!=="close"&&k(`${r.value.yourSelected}${t.name}`)},g=async()=>{const t=await d({actions:e});t!=="close"&&k(`${r.value.yourSelected}${t.name}`)},T=async()=>{const t=await d({actions:C});t!=="close"&&k(`${r.value.yourSelected}${t.name}`)},E=()=>{d({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:t=>k(`${r.value.yourSelected}${t.name}`)})},I=t=>{k(`${r.value.yourSelected}${t.name}`)},B=y.touchmoveForbid;return M(t=>{t==="pc"&&(y.touchmoveForbid=!1)}),Y(()=>{y.touchmoveForbid=B}),j(W),q(N),{pack:r,show:w,show1:a,show2:u,show3:c,show4:_,actions:o,disabledActions:S,customStyleActions:h,createBasic:F,modifyTitle:U,disableAction:g,customActionStyles:T,handleSelect:I,disableCloseOnClickAction:E}}};function Z(m,e,C,o,S,h){const w=b("app-type"),a=b("var-button"),u=b("var-action-sheet");return G(),H(J,null,[n(w,null,{default:i(()=>[l(s(o.pack.functionCall),1)]),_:1}),n(a,{type:"primary",block:"",onClick:o.createBasic},{default:i(()=>[l(s(o.pack.basicUsage),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.modifyTitle},{default:i(()=>[l(s(o.pack.modifyTitle),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.disableAction},{default:i(()=>[l(s(o.pack.disabled),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.disableCloseOnClickAction},{default:i(()=>[l(s(o.pack.disableCloseOnClickAction),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.customActionStyles},{default:i(()=>[l(s(o.pack.customActionStyles),1)]),_:1},8,["onClick"]),n(w,null,{default:i(()=>[l(s(o.pack.componentCall),1)]),_:1}),n(a,{type:"warning",block:"",onClick:e[0]||(e[0]=c=>o.show=!0)},{default:i(()=>[l(s(o.pack.basicUsage),1)]),_:1}),n(u,{actions:o.actions,show:o.show,"onUpdate:show":e[1]||(e[1]=c=>o.show=c),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[2]||(e[2]=c=>o.show1=!0)},{default:i(()=>[l(s(o.pack.modifyTitle),1)]),_:1}),n(u,{title:o.pack.customTitle,actions:o.actions,show:o.show1,"onUpdate:show":e[3]||(e[3]=c=>o.show1=c),onSelect:o.handleSelect},null,8,["title","actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[4]||(e[4]=c=>o.show2=!0)},{default:i(()=>[l(s(o.pack.disabled),1)]),_:1}),n(u,{actions:o.disabledActions,show:o.show2,"onUpdate:show":e[5]||(e[5]=c=>o.show2=c),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[6]||(e[6]=c=>o.show3=!0)},{default:i(()=>[l(s(o.pack.disableCloseOnClickAction),1)]),_:1}),n(u,{"close-on-click-action":!1,actions:o.actions,show:o.show3,"onUpdate:show":e[7]||(e[7]=c=>o.show3=c),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[8]||(e[8]=c=>o.show4=!0)},{default:i(()=>[l(s(o.pack.customActionStyles),1)]),_:1}),n(u,{actions:o.customStyleActions,show:o.show4,"onUpdate:show":e[9]||(e[9]=c=>o.show4=c),onSelect:o.handleSelect},null,8,["actions","show","onSelect"])],64)}var ho=P(X,[["render",Z],["__scopeId","data-v-fd7d84a4"]]);export{ho as default};