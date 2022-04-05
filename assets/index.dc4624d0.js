import{R as m}from"./index.6e927d89.js";import{p as d,L as y}from"./index.9e0cd9a2.js";import{p as u,c as v}from"./components.57927f97.js";import{_ as c}from"./elevation.4d11ec3f.js";import{d as b,r as h,e as k,f as B,w as C,o as p,c as $,l as z,p as i,h as S,a as T,G as L,n as V}from"./vendor.49f89f0d.js";function N(e){return["default","primary","info","success","warning","danger"].includes(e)}function R(e){return["normal","mini","small","large"].includes(e)}const w={type:{type:String,default:"default",validator:N},size:{type:String,default:"normal",validator:R},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String],default:12},loadingType:u(d,"type"),loadingSize:u(d,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const{n:D,classes:F}=v("button"),P=b({name:"VarButton",components:{VarLoading:y},directives:{Ripple:m},props:w,setup(e){const a=h(!1),s=o=>{e.autoLoading&&(a.value=!0,Promise.resolve(o).finally(()=>{a.value=!1}))};return{n:D,classes:F,pending:a,handleClick:o=>{const{loading:l,disabled:t,onClick:n}=e;!n||l||t||a.value||s(n(o))},handleTouchstart:o=>{const{loading:l,disabled:t,onTouchstart:n}=e;!n||l||t||a.value||s(n(o))}}}}),A=["disabled"];function E(e,a,s,f,g,o){const l=k("var-loading"),t=B("ripple");return C((p(),$("button",{class:i(e.classes(e.n(),"var--box",e.n(`--${e.size}`),[e.block,`var--flex ${e.n("--block")}`,"var--inline-flex"],[e.disabled,e.n("--disabled")],[e.text,`${e.n(`--text-${e.type}`)} ${e.n("--text")}`,`${e.n(`--${e.type}`)} var-elevation--2`],[e.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.outline,e.n("--outline")])),style:V({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:a[0]||(a[0]=(...n)=>e.handleClick&&e.handleClick(...n)),onTouchstart:a[1]||(a[1]=(...n)=>e.handleTouchstart&&e.handleTouchstart(...n))},[e.loading||e.pending?(p(),z(l,{key:0,class:i(e.n("loading")),"var-button-cover":"",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","type","size","radius"])):S("v-if",!0),T("div",{class:i(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[L(e.$slots,"default")],2)],46,A)),[[t,{disabled:e.disabled||!e.ripple}]])}var r=c(P,[["render",E]]);r.install=function(e){e.component(r.name,r)};export{r as B};