var F=Object.defineProperty,P=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(e,o,p)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[o]=p,f=(e,o)=>{for(var p in o||(o={}))E.call(o,p)&&k(e,p,o[p]);if(y)for(var p of y(o))S.call(o,p)&&k(e,p,o[p]);return e},b=(e,o)=>P(e,c(o));import{P as A}from"./index.8797b76f.js";import{B}from"./index.c1d320c3.js";import{S as g}from"./index.6aa7bec9.js";import{A as h}from"./AppType.6775b756.js";import{d as D}from"./index.9b1139e6.js";import{w as U,a as _}from"./utils.3a4595f4.js";import{u as N,a as C,_ as O,b as V,c as z}from"./en-US.628e0d34.js";import{_ as L}from"./elevation.229458c1.js";import{q as H,$ as I,e as m,o as R,c as T,i as s,j as l,F as j,m as r,t as u,a as d}from"./vendor.49f89f0d.js";import"./lock.c5636ec8.js";import"./index.48ee5316.js";import"./zIndex.8c13fd4c.js";import"./components.57927f97.js";import"./index.6e927d89.js";import"./elements.600984cd.js";import"./index.6ee51b1a.js";import"./index.6428d33d.js";var q={popupPosition:"\u5F39\u51FA\u4F4D\u7F6E",centerPopup:"\u5C45\u4E2D\u5F39\u51FA",belowPopup:"\u4E0B\u65B9\u5F39\u51FA",abovePopup:"\u4E0A\u65B9\u5F39\u51FA",leftPopup:"\u5DE6\u4FA7\u5F39\u51FA",rightPopup:"\u53F3\u4FA7\u5F39\u51FA",overlayStyle:"\u906E\u7F69\u5C42\u6837\u5F0F",overlayClass:"\u906E\u7F69\u5C42class",overlayStyles:"\u906E\u7F69\u5C42style",event:"\u6CE8\u518C\u4E8B\u4EF6",text:"\u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002"},M={popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."};const{add:w,use:G,pack:J,packs:So,merge:Ao}=N(),K=e=>{z(e),G(e)};C("zh-CN",O);C("en-US",V);w("zh-CN",q);w("en-US",M);const Q={name:"PopupExample",components:{VarPopup:A,VarButton:B,AppType:h},setup(){const e=H({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1});return U(K),_(D),b(f({pack:J},I(e)),{Snackbar:g})}},W={class:"block"},X={class:"block"},Y={class:"block"},Z={class:"block"},x={class:"block"},$={class:"block"},oo={class:"block"},eo={class:"block"};function to(e,o,p,t,ao,so){const v=m("app-type"),n=m("var-button"),i=m("var-popup");return R(),T(j,null,[s(v,null,{default:l(()=>[r(u(t.pack.popupPosition),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[0]||(o[0]=a=>e.center=!0)},{default:l(()=>[r(u(t.pack.centerPopup),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[1]||(o[1]=a=>e.bottom=!0)},{default:l(()=>[r(u(t.pack.belowPopup),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[2]||(o[2]=a=>e.top=!0)},{default:l(()=>[r(u(t.pack.abovePopup),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[3]||(o[3]=a=>e.left=!0)},{default:l(()=>[r(u(t.pack.leftPopup),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[4]||(o[4]=a=>e.right=!0)},{default:l(()=>[r(u(t.pack.rightPopup),1)]),_:1}),s(i,{show:e.center,"onUpdate:show":o[5]||(o[5]=a=>e.center=a)},{default:l(()=>[d("div",W,u(t.pack.text),1)]),_:1},8,["show"]),s(i,{position:"bottom",show:e.bottom,"onUpdate:show":o[6]||(o[6]=a=>e.bottom=a)},{default:l(()=>[d("div",X,u(t.pack.text),1)]),_:1},8,["show"]),s(i,{position:"top",show:e.top,"onUpdate:show":o[7]||(o[7]=a=>e.top=a)},{default:l(()=>[d("div",Y,u(t.pack.text),1)]),_:1},8,["show"]),s(i,{position:"left",show:e.left,"onUpdate:show":o[8]||(o[8]=a=>e.left=a)},{default:l(()=>[d("div",Z,u(t.pack.text),1)]),_:1},8,["show"]),s(i,{position:"right",show:e.right,"onUpdate:show":o[9]||(o[9]=a=>e.right=a)},{default:l(()=>[d("div",x,u(t.pack.text),1)]),_:1},8,["show"]),s(v,null,{default:l(()=>[r(u(t.pack.overlayStyle),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[10]||(o[10]=a=>e.overlayClass=!0)},{default:l(()=>[r(u(t.pack.overlayClass),1)]),_:1}),s(i,{"overlay-class":"custom-overlay",show:e.overlayClass,"onUpdate:show":o[11]||(o[11]=a=>e.overlayClass=a)},{default:l(()=>[d("div",$,u(t.pack.text),1)]),_:1},8,["show"]),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[12]||(o[12]=a=>e.overlayStyle=!0)},{default:l(()=>[r(u(t.pack.overlayStyles),1)]),_:1}),s(i,{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:e.overlayStyle,"onUpdate:show":o[13]||(o[13]=a=>e.overlayStyle=a)},{default:l(()=>[d("div",oo,u(t.pack.text),1)]),_:1},8,["overlay-style","show"]),s(v,null,{default:l(()=>[r(u(t.pack.event),1)]),_:1}),s(n,{class:"mt-10",type:"primary",block:"",onClick:o[14]||(o[14]=a=>e.event=!0)},{default:l(()=>[r(u(t.pack.event),1)]),_:1}),s(i,{show:e.event,"onUpdate:show":o[15]||(o[15]=a=>e.event=a),onOpen:o[16]||(o[16]=()=>t.Snackbar.info("open")),onOpened:o[17]||(o[17]=()=>t.Snackbar.success("opened")),onClose:o[18]||(o[18]=()=>t.Snackbar.warning("close")),onClosed:o[19]||(o[19]=()=>t.Snackbar.error("closed"))},{default:l(()=>[d("div",eo,u(t.pack.text),1)]),_:1},8,["show"])],64)}var Bo=L(Q,[["render",to],["__scopeId","data-v-7c5cca12"]]);export{Bo as default};