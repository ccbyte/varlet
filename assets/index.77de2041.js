import{A as f}from"./AppType.30486dc9.js";import{I as p}from"./index.b6b975df.js";import{C as u}from"./index.560fb8a6.js";import{u as h,a as m,_ as k,b as w,c as C,d as F}from"./utils.b74a4a18.js";import{_ as v}from"./IconSfc.a60484c8.js";import{d,o as x,c as b,a as r,h as e,w as n,F as B,l as t,t as c}from"./vendor.bac705d4.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";var j={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},N={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:_,use:S,pack:U,packs:M,merge:O}=h(),g=i=>{C(i),S(i)};m("zh-CN",k);m("en-US",w);_("zh-CN",j);_("en-US",N);const A={name:"CellExample",components:{[u.name]:u,[p.name]:p,AppType:f},setup(){return F(g),{pack:U}}};function D(i,I,E,a,y,z){const s=d("app-type"),o=d("var-cell"),l=d("var-icon");return x(),b(B,null,[r("div",null,[e(s,null,{default:n(()=>[t(c(a.pack.basicUsage),1)]),_:1}),e(o,null,{default:n(()=>[t(c(a.pack.content),1)]),_:1}),e(o,null,{default:n(()=>[t(c(a.pack.content),1)]),_:1})]),r("div",null,[e(s,null,{default:n(()=>[t(c(a.pack.showIcon),1)]),_:1}),e(o,{icon:"fire",title:a.pack.content},{extra:n(()=>[e(l,{name:"information"})]),_:1},8,["title"]),e(o,{icon:"fire",title:a.pack.content},{extra:n(()=>[e(l,{name:"information"})]),_:1},8,["title"])]),r("div",null,[e(s,null,{default:n(()=>[t(c(a.pack.showDesc),1)]),_:1}),e(o,{icon:"fire",title:a.pack.content,desc:a.pack.description},{extra:n(()=>[e(l,{name:"information"})]),_:1},8,["title","desc"]),e(o,{title:a.pack.content,desc:a.pack.description},null,8,["title","desc"])]),r("div",null,[e(s,null,{default:n(()=>[t(c(a.pack.showBorder),1)]),_:1}),e(o,{border:""},{default:n(()=>[t(c(a.pack.content),1)]),_:1}),e(o,{border:""},{default:n(()=>[t(c(a.pack.content),1)]),_:1})])],64)}var P=v(A,[["render",D]]);export{P as default};
