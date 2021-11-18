var b=Object.defineProperty;var p=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var V=(e,o,s)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,f=(e,o)=>{for(var s in o||(o={}))R.call(o,s)&&V(e,s,o[s]);if(p)for(var s of p(o))U.call(o,s)&&V(e,s,o[s]);return e};import{R as z}from"./index.e04383f4.js";import{S as F}from"./index.12adc25e.js";import{A as B}from"./AppType.8af12281.js";import{c as i}from"./index.789f7251.js";import{d as E}from"./index.77fe3760.js";import{u as S,a as c,_ as k,b as v,c as I}from"./en-US.51e06fb5.js";import{b as y,w as A,a as T}from"./utils.efdc8a96.js";import{_ as j}from"./elevation.7a86b580.js";import{p as N,H as w,Z as O,d as g,o as H,c as h,h as a,i as d,F as D,l as t,t as m}from"./vendor.8a125dba.js";import"./index.7c2ed277.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";import"./provide.92646073.js";import"./components.581beddd.js";import"./index.23ced9c1.js";import"./index.860f6244.js";import"./zIndex.2c847fc6.js";import"./lock.2797eacf.js";var M={baseRating:"\u57FA\u7840\u8BC4\u5206",customizeTheTotalNumberOfRatingICONS:"\u81EA\u5B9A\u4E49\u8BC4\u5206\u603B\u6570",customizeTheIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customizeRatingIconStyles:"\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u6837\u5F0F",customizeRatingIconSize:"\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u5C3A\u5BF8",customIconSpacing:"\u81EA\u5B9A\u4E49\u56FE\u6807\u95F4\u9694",useHalfAStar:"\u4F7F\u7528\u534A\u661F",disableTheRating:"\u7981\u7528\u8BC4\u5206",readonlyRating:"\u53EA\u8BFB\u8BC4\u5206",waterRippleIsProhibited:"\u7981\u6B62\u4F7F\u7528\u6C34\u6CE2\u7EB9",listeningForClickEvents:"\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6",validate:"\u5B57\u6BB5\u6821\u9A8C",rateMessage:"\u5FC5\u987B\u5927\u4E8E2"},P={baseRating:"Base Rating",customizeTheTotalNumberOfRatingICONS:"Customize The Total Number Of Rating ICONS",customizeTheIconColor:"Customize The Icon Color",customizeRatingIconStyles:"Customize Rating Icon Styles",customizeRatingIconSize:"Customize Rating Icon Size",customIconSpacing:"Custom Icon Spacing",useHalfAStar:"Use Half A Star",disableTheRating:"Disable The Rating",readonlyRating:"Readonly Rating",waterRippleIsProhibited:"Water ripple is prohibited",listeningForClickEvents:"Listening For Click Events",validate:"Validate",rateMessage:"It has to be greater than 2"};const{add:C,use:L,pack:W,packs:Ve,merge:fe}=S(),Z=e=>{I(e),L(e)};c("zh-CN",k);c("en-US",v);C("zh-CN",M);C("en-US",P);const q={name:"RateExample",components:{VarRate:z,AppType:B},setup(){const e=N({score:3,score1:3,score2:3,score3:3,score4:3,score5:3,score6:3.5,score7:3,score8:3,score9:3,score10:3,score11:3}),o=n=>{F({content:`click ${n}`,position:"top"})},s=i.touchmoveForbid;return y(n=>{n==="pc"&&(i.touchmoveForbid=!1)}),w(()=>{i.touchmoveForbid=s}),A(Z),T(E),f({handleChange:o,pack:W},O(e))}};function G(e,o,s,n,J,K){const r=g("app-type"),u=g("var-rate");return H(),h(D,null,[a(r,null,{default:d(()=>[t(m(n.pack.baseRating),1)]),_:1}),a(u,{modelValue:e.score,"onUpdate:modelValue":o[0]||(o[0]=l=>e.score=l)},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeTheTotalNumberOfRatingICONS),1)]),_:1}),a(u,{modelValue:e.score1,"onUpdate:modelValue":o[1]||(o[1]=l=>e.score1=l),count:8},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeTheIconColor),1)]),_:1}),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[2]||(o[2]=l=>e.score2=l),color:"#9c27b0","empty-color":"#d199da"},null,8,["modelValue"]),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[3]||(o[3]=l=>e.score2=l),color:"#e91e63","empty-color":"#f48fb1"},null,8,["modelValue"]),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[4]||(o[4]=l=>e.score2=l),color:"#4caf50","empty-color":"#a5d6a7"},null,8,["modelValue"]),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[5]||(o[5]=l=>e.score2=l),color:"#3f51b5","empty-color":"#9fa8da"},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeRatingIconStyles),1)]),_:1}),a(u,{modelValue:e.score3,"onUpdate:modelValue":o[6]||(o[6]=l=>e.score3=l),icon:"heart","empty-icon":"heart-outline",color:"red"},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeRatingIconSize),1)]),_:1}),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[7]||(o[7]=l=>e.score4=l),size:16},null,8,["modelValue"]),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[8]||(o[8]=l=>e.score4=l),size:18},null,8,["modelValue"]),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[9]||(o[9]=l=>e.score4=l),size:20},null,8,["modelValue"]),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[10]||(o[10]=l=>e.score4=l)},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customIconSpacing),1)]),_:1}),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[11]||(o[11]=l=>e.score5=l),gap:2},null,8,["modelValue"]),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[12]||(o[12]=l=>e.score5=l)},null,8,["modelValue"]),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[13]||(o[13]=l=>e.score5=l),gap:6},null,8,["modelValue"]),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[14]||(o[14]=l=>e.score5=l),gap:8},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.useHalfAStar),1)]),_:1}),a(u,{modelValue:e.score6,"onUpdate:modelValue":o[15]||(o[15]=l=>e.score6=l),count:8,half:""},null,8,["modelValue"]),a(u,{modelValue:e.score6,"onUpdate:modelValue":o[16]||(o[16]=l=>e.score6=l),count:8,icon:"heart","half-icon":"heart-half-full","empty-icon":"heart-outline",color:"red",half:""},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.disableTheRating),1)]),_:1}),a(u,{modelValue:e.score7,"onUpdate:modelValue":o[17]||(o[17]=l=>e.score7=l),disabled:"","disabled-color":"#bbbbbb"},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.readonlyRating),1)]),_:1}),a(u,{modelValue:e.score8,"onUpdate:modelValue":o[18]||(o[18]=l=>e.score8=l),readonly:""},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.waterRippleIsProhibited),1)]),_:1}),a(u,{modelValue:e.score9,"onUpdate:modelValue":o[19]||(o[19]=l=>e.score9=l),ripple:!1},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.listeningForClickEvents),1)]),_:1}),a(u,{modelValue:e.score10,"onUpdate:modelValue":o[20]||(o[20]=l=>e.score10=l),onChange:n.handleChange},null,8,["modelValue","onChange"]),a(r,null,{default:d(()=>[t(m(n.pack.validate),1)]),_:1}),a(u,{rules:[l=>l>=3||n.pack.rateMessage],modelValue:e.score11,"onUpdate:modelValue":o[21]||(o[21]=l=>e.score11=l)},null,8,["rules","modelValue"])],64)}var ce=j(q,[["render",G],["__scopeId","data-v-6c217a85"]]);export{ce as default};