var E=Object.defineProperty,S=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(e,o,n)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,b=(e,o)=>{for(var n in o||(o={}))h.call(o,n)&&k(e,n,o[n]);if(y)for(var n of y(o))B.call(o,n)&&k(e,n,o[n]);return e},c=(e,o)=>S(e,A(o));import{P as F}from"./index.f21fe3b3.js";import{B as w}from"./index.128951cd.js";import{S as g}from"./index.46078349.js";import{A as j}from"./AppType.30486dc9.js";import{c as m}from"./index.389a472f.js";import{u as U,a as C,_ as D,b as _,c as N,d as x,w as z}from"./utils.b74a4a18.js";import{_ as O}from"./IconSfc.a60484c8.js";import{p as I,G as T,a2 as L,d as f,o as V,c as H,h as a,w as l,F as R,l as p,t as u,a as d}from"./vendor.bac705d4.js";import"./lock.cdd0a0f9.js";import"./zIndex.148a12e4.js";import"./components.fc1d8498.js";import"./shared.6d6b25a1.js";import"./index.7e2aebb8.js";import"./index.b6b975df.js";import"./elements.f945da86.js";var G={popupPosition:"\u5F39\u51FA\u4F4D\u7F6E",centerPopup:"\u5C45\u4E2D\u5F39\u51FA",belowPopup:"\u4E0B\u65B9\u5F39\u51FA",abovePopup:"\u4E0A\u65B9\u5F39\u51FA",leftPopup:"\u5DE6\u4FA7\u5F39\u51FA",rightPopup:"\u53F3\u4FA7\u5F39\u51FA",overlayStyle:"\u906E\u7F69\u5C42\u6837\u5F0F",overlayClass:"\u906E\u7F69\u5C42class",overlayStyles:"\u906E\u7F69\u5C42style",event:"\u6CE8\u518C\u4E8B\u4EF6",text:"\u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002"},q={popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."};const{add:P,use:J,pack:K,packs:Eo,merge:So}=U(),M=e=>{N(e),J(e)};C("zh-CN",D);C("en-US",_);P("zh-CN",G);P("en-US",q);const Q={name:"PopupExample",components:{[F.name]:F,[w.name]:w,AppType:j},setup(){const e=I({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1});x(M);const o=m.touchmoveForbid;return z(n=>{n==="pc"&&(m.touchmoveForbid=!1)}),T(()=>{m.touchmoveForbid=o}),c(b({pack:K},L(e)),{Snackbar:g})}},W={class:"block"},X={class:"block"},Y={class:"block"},Z={class:"block"},$={class:"block"},oo={class:"block"},eo={class:"block"},to={class:"block"};function so(e,o,n,t,ao,lo){const v=f("app-type"),r=f("var-button"),i=f("var-popup");return V(),H(R,null,[a(v,null,{default:l(()=>[p(u(t.pack.popupPosition),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[0]||(o[0]=s=>e.center=!0)},{default:l(()=>[p(u(t.pack.centerPopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[1]||(o[1]=s=>e.bottom=!0)},{default:l(()=>[p(u(t.pack.belowPopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[2]||(o[2]=s=>e.top=!0)},{default:l(()=>[p(u(t.pack.abovePopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[3]||(o[3]=s=>e.left=!0)},{default:l(()=>[p(u(t.pack.leftPopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[4]||(o[4]=s=>e.right=!0)},{default:l(()=>[p(u(t.pack.rightPopup),1)]),_:1}),a(i,{show:e.center,"onUpdate:show":o[5]||(o[5]=s=>e.center=s)},{default:l(()=>[d("div",W,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"bottom",show:e.bottom,"onUpdate:show":o[6]||(o[6]=s=>e.bottom=s)},{default:l(()=>[d("div",X,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"top",show:e.top,"onUpdate:show":o[7]||(o[7]=s=>e.top=s)},{default:l(()=>[d("div",Y,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"left",show:e.left,"onUpdate:show":o[8]||(o[8]=s=>e.left=s)},{default:l(()=>[d("div",Z,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"right",show:e.right,"onUpdate:show":o[9]||(o[9]=s=>e.right=s)},{default:l(()=>[d("div",$,u(t.pack.text),1)]),_:1},8,["show"]),a(v,null,{default:l(()=>[p(u(t.pack.overlayStyle),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[10]||(o[10]=s=>e.overlayClass=!0)},{default:l(()=>[p(u(t.pack.overlayClass),1)]),_:1}),a(i,{"overlay-class":"custom-overlay",show:e.overlayClass,"onUpdate:show":o[11]||(o[11]=s=>e.overlayClass=s)},{default:l(()=>[d("div",oo,u(t.pack.text),1)]),_:1},8,["show"]),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[12]||(o[12]=s=>e.overlayStyle=!0)},{default:l(()=>[p(u(t.pack.overlayStyles),1)]),_:1}),a(i,{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:e.overlayStyle,"onUpdate:show":o[13]||(o[13]=s=>e.overlayStyle=s)},{default:l(()=>[d("div",eo,u(t.pack.text),1)]),_:1},8,["overlay-style","show"]),a(v,null,{default:l(()=>[p(u(t.pack.event),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[14]||(o[14]=s=>e.event=!0)},{default:l(()=>[p(u(t.pack.event),1)]),_:1}),a(i,{show:e.event,"onUpdate:show":o[15]||(o[15]=s=>e.event=s),onOpen:o[16]||(o[16]=()=>t.Snackbar.info("open")),onOpened:o[17]||(o[17]=()=>t.Snackbar.success("opened")),onClose:o[18]||(o[18]=()=>t.Snackbar.warning("close")),onClosed:o[19]||(o[19]=()=>t.Snackbar.error("closed"))},{default:l(()=>[d("div",to,u(t.pack.text),1)]),_:1},8,["show"])],64)}var Ao=O(Q,[["render",so],["__scopeId","data-v-3231fc7c"]]);export{Ao as default};
