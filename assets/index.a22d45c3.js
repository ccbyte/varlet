var a=Object.defineProperty,t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;import{A as i}from"./AppType.08a99ced.js";import{T as n,a as c}from"./index.7fcb1ada.js";import{I as p}from"./index.565310a0.js";import{T as r}from"./index.52fc7f6f.js";import{T as s}from"./index.b606732e.js";import{c as u}from"./index.7f242a26.js";import{u as f,a as d,_ as v,b as m,c as _}from"./en-US.97fca002.js";import{_ as k,w as b,f as y}from"./IconSfc.22678cb1.js";import{p as h,G as g,a2 as x,d as j,o as w,c as U,h as S,w as T,F as L,S as R,U as V,l as I,t as O,a as F}from"./vendor.85536c59.js";import"./index.1e250a82.js";import"./elements.f945da86.js";import"./shared.6d6b25a1.js";import"./components.0481fe69.js";import"./index.4c2c26dd.js";import"./provide.9ca7f1d0.js";import"./provide.af7e7d43.js";import"./index.79c4006b.js";const{add:A,use:E,pack:P,packs:z,merge:C}=f(),N=a=>{_(a),E(a)};d("zh-CN",v),d("en-US",m),A("zh-CN",{basicUsage:"基本使用",modifyStyle:"修改样式",disabled:"禁用选项",enableScroll:"开启滚动",tabVerticalLayout:"选项卡垂直布局",tabsVerticalLayout:"容器垂直布局",viewRelation:"视图联动",option:"选项",stickyLayout:"开启粘性布局",text:"呜啦啦啦火车笛，随着奔腾的马蹄。\n小妹妹吹着口琴，夕阳下美了剪影。\n我用子弹写日记，介绍完了风景。\n接下来换介绍我自己。\n我虽然是个牛仔，在酒吧只点牛奶。\n为什么不喝啤酒，因为啤酒伤身体。",text2:"很多人不长眼睛，嚣张都靠武器。\n赤手空拳就缩成蚂蚁。\n不用麻烦了，不用麻烦了。\n不用麻烦，不用麻烦了，不用麻烦了。",text3:"你们一起上，我在赶时间。\n每天决斗观众都累了，英雄也累了。\n不用麻烦了，不用麻烦了。\n副歌不长你们有几个，一起上好了。\n正义呼唤我，美女需要我。\n牛仔很忙的。"}),A("en-US",{basicUsage:"Basic Usage",modifyStyle:"Modify Style",disabled:"Tab Disabled",enableScroll:"Enable Scroll",tabVerticalLayout:"Tab Vertical Layout",tabsVerticalLayout:"Tabs Vertical Layout",viewRelation:"View Relation",option:"Option",stickyLayout:"Sticky Layout",text:"The way she came into the place.\nI knew right then and there.\nthere was something different about this girl.",text2:"The girl was persuasive.\nthe girl I could not trust.\nThe girl was bad.\nthe girl was dangerous.\nI never know.",text3:"She's so dangerous.\nthe girl is so dangerous.\nTake away my money, throw away my time.\nYou can call me honey.\nbut you're no damn good for me."});const B={name:"TabsExample",components:{[n.name]:n,[c.name]:c,[r.name]:r,[s.name]:s,[p.name]:p,AppType:i},setup(){const a=h({active:0,active2:0,active3:0,active4:0,active5:0,active6:0,active7:0,activeRelation:0});b(N);const i=u.touchmoveForbid;return y((a=>{"pc"===a&&(u.touchmoveForbid=!1)})),g((()=>{u.touchmoveForbid=i})),((a,i)=>{for(var n in i||(i={}))e.call(i,n)&&l(a,n,i[n]);if(t)for(var n of t(i))o.call(i,n)&&l(a,n,i[n]);return a})({pack:P},x(a))}},D=(a=>(R("data-v-c13af3a6"),a=a(),V(),a))((()=>F("div",{style:{height:"120vh"}},null,-1)));var G=k(B,[["render",function(a,t,e,o,l,i){const n=j("app-type"),c=j("var-tab"),p=j("var-tabs"),r=j("var-icon"),s=j("var-tab-item"),u=j("var-tabs-items");return w(),U(L,null,[S(n,null,{default:T((()=>[I(O(o.pack.basicUsage),1)])),_:1}),S(p,{active:a.active,"onUpdate:active":t[0]||(t[0]=t=>a.active=t)},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"3",1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.modifyStyle),1)])),_:1}),S(p,{elevation:"",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:a.active2,"onUpdate:active":t[1]||(t[1]=t=>a.active2=t)},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"3",1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.disabled),1)])),_:1}),S(p,{elevation:"",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:a.active3,"onUpdate:active":t[2]||(t[2]=t=>a.active3=t)},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,{disabled:""},{default:T((()=>[I(O(o.pack.disabled),1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.enableScroll),1)])),_:1}),S(p,{elevation:"",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:a.active4,"onUpdate:active":t[3]||(t[3]=t=>a.active4=t)},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"3",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"4",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"5",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"6",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"7",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"8",1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.tabVerticalLayout),1)])),_:1}),S(p,{elevation:"","item-direction":"vertical",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:a.active5,"onUpdate:active":t[4]||(t[4]=t=>a.active5=t)},{default:T((()=>[S(c,null,{default:T((()=>[S(r,{class:"icon",name:"information"}),F("div",null,O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[S(r,{class:"icon",name:"warning"}),F("div",null,O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[S(r,{class:"icon",name:"error"}),F("div",null,O(o.pack.option)+"3",1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.tabsVerticalLayout),1)])),_:1}),S(p,{class:"vertical-tabs",elevation:"","layout-direction":"vertical",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:a.active6,"onUpdate:active":t[5]||(t[5]=t=>a.active6=t)},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"3",1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.viewRelation),1)])),_:1}),S(p,{elevation:"",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:a.activeRelation,"onUpdate:active":t[6]||(t[6]=t=>a.activeRelation=t),"offset-top":"50"},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"3",1)])),_:1})])),_:1},8,["active"]),S(u,{style:{margin:"8px 0"},active:a.activeRelation,"onUpdate:active":t[7]||(t[7]=t=>a.activeRelation=t)},{default:T((()=>[S(s,{style:{padding:"0 4px"}},{default:T((()=>[I(O(o.pack.text),1)])),_:1}),S(s,{style:{padding:"0 4px"}},{default:T((()=>[I(O(o.pack.text2),1)])),_:1}),S(s,{style:{padding:"0 4px"}},{default:T((()=>[I(O(o.pack.text3),1)])),_:1})])),_:1},8,["active"]),S(n,null,{default:T((()=>[I(O(o.pack.stickyLayout),1)])),_:1}),S(p,{sticky:"",elevation:"",color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)","offset-top":50,active:a.active7,"onUpdate:active":t[8]||(t[8]=t=>a.active7=t)},{default:T((()=>[S(c,null,{default:T((()=>[I(O(o.pack.option)+"1",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"2",1)])),_:1}),S(c,null,{default:T((()=>[I(O(o.pack.option)+"3",1)])),_:1})])),_:1},8,["active"]),D],64)}],["__scopeId","data-v-c13af3a6"]]);export{G as default};
