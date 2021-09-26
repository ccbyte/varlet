import{p as G,S as Y}from"./index.ea080736.js";import{q as I,r as b,b as l,y as B,x as M,G as J,T as Q,o as H,k as Z,w as x,a as P,m as _,O as W,n as F,P as ee,R as te,z as ae,e as oe,i as ie,c as ne}from"./vendor.bac705d4.js";import{p as re,c as se,d as le,e as ce,f as de}from"./components.fc1d8498.js";import{f as ue,q as K}from"./shared.6d6b25a1.js";import{t as ve,s as V}from"./elements.f945da86.js";import{_ as O}from"./IconSfc.a60484c8.js";import{R as fe}from"./index.389a472f.js";function R(e){return["horizontal","vertical"].includes(e)}const be={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:R},itemDirection:{type:String,default:"horizontal",validator:R},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},offsetTop:re(G,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}},X=Symbol("TABS_BIND_TAB_KEY"),q=Symbol("TABS_COUNT_TAB_KEY");function me(){const{childProviders:e,bindChildren:o}=se(X),{length:n}=le(q);return{length:n,tabList:e,bindTabList:o}}const ye=I({name:"VarTabs",components:{[Y.name]:Y},inheritAttrs:!1,props:be,setup(e){const o=b("0px"),n=b("0px"),m=b("0px"),y=b("0px"),i=b(!1),h=b(null),C=l(()=>e.active),D=l(()=>e.activeColor),c=l(()=>e.inactiveColor),p=l(()=>e.disabledColor),$=l(()=>e.itemDirection),{tabList:T,bindTabList:k,length:d}=me(),g=a=>{var L,j;const t=(L=a.name.value)!=null?L:a.index.value,{active:s,onChange:f,onClick:E}=e;(j=e["onUpdate:active"])==null||j.call(e,t),E==null||E(t),t!==s&&(f==null||f(t))},w=()=>T.find(({name:a})=>e.active===a.value),z=()=>T.find(({index:a})=>e.active===a.value),A=()=>{var t,s;if(d.value===0)return;const{active:a}=e;return ue(a)&&(a>d.value-1?(t=e["onUpdate:active"])==null||t.call(e,d.value-1):(s=e["onUpdate:active"])==null||s.call(e,0)),z()},u=()=>{i.value=T.length>=5},v=({element:a})=>{const t=a.value;e.layoutDirection==="horizontal"?(o.value=`${t==null?void 0:t.offsetWidth}px`,m.value=`${t==null?void 0:t.offsetLeft}px`):(n.value=`${t==null?void 0:t.offsetHeight}px`,y.value=`${t==null?void 0:t.offsetTop}px`)},S=({element:a})=>{if(!i.value)return;const t=h.value,s=a.value;if(e.layoutDirection==="horizontal"){const f=s.offsetLeft+s.offsetWidth/2-t.offsetWidth/2;V(t,{left:f,animation:K})}else{const f=s.offsetTop+s.offsetHeight/2-t.offsetHeight/2;V(t,{top:f,animation:K})}},r=()=>{const a=w()||z()||A();!a||a.disabled.value||(u(),v(a),S(a))};return k({active:C,activeColor:D,inactiveColor:c,disabledColor:p,itemDirection:$,resize:r,onTabClick:g}),B(()=>d.value,()=>ae().then(r)),B(()=>e.active,r),M(()=>window.addEventListener("resize",r)),J(()=>window.removeEventListener("resize",r)),{indicatorWidth:o,indicatorHeight:n,indicatorX:m,indicatorY:y,scrollable:i,scrollerEl:h,Transition:Q,toSizeUnit:ve,resize:r}}});function he(e,o,n,m,y,i){return H(),Z(te(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.offsetTop:null},{default:x(()=>[P("div",ee({class:["var-tabs var--box",[`var-tabs--item-${e.itemDirection}`,`var-tabs--layout-${e.layoutDirection}-padding`,e.elevation?"var-elevation--4":null,e.fixedBottom?"var-tabs--fixed-bottom":null]],style:{background:e.color}},e.$attrs),[P("div",{class:_(["var-tabs__tab-wrap",[e.scrollable?`var-tabs--layout-${e.layoutDirection}-scrollable`:null,`var-tabs--layout-${e.layoutDirection}`]]),ref:"scrollerEl"},[W(e.$slots,"default"),P("div",{class:_(["var-tabs__indicator",[`var-tabs--layout-${e.layoutDirection}-indicator`]]),style:F({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`,background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}var N=O(ye,[["render",he]]);N.install=function(e){e.component(N.name,N)};const Ce={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}};function Te(){const{parentProvider:e,bindParent:o}=ce(X),{index:n}=de(q);if(!e||!o||!n)throw Error("<var-tab/> must in <var-tabs/>");return{index:n,tabs:e,bindTabs:o}}const Se=I({name:"VarTab",directives:{Ripple:fe},props:Ce,setup(e){const o=b(null),n=l(()=>e.name),m=l(()=>e.disabled),y=l(()=>o.value),{index:i,tabs:h,bindTabs:C}=Te(),{onTabClick:D,active:c,activeColor:p,inactiveColor:$,disabledColor:T,itemDirection:k,resize:d}=h,g={name:n,index:i,disabled:m,element:y};C(g);const w=()=>{const{disabled:u,name:v}=e;return u?T.value:c.value===v||c.value===(i==null?void 0:i.value)?p.value:$.value},z=()=>{const{disabled:u,name:v}=e;return u?"var-tab--disabled":c.value===v||c.value===(i==null?void 0:i.value)?"var-tab--active":"var-tab--inactive"},A=u=>{const{disabled:v,name:S,onClick:r}=e;v||(r==null||r(S!=null?S:i.value,u),D(g))};return B(()=>e.name,d),B(()=>e.disabled,d),{tabEl:o,active:c,activeColor:p,inactiveColor:$,itemDirection:k,computeColorStyle:w,computeColorClass:z,handleClick:A}}});function pe(e,o,n,m,y,i){const h=oe("ripple");return ie((H(),ne("div",{class:_(["var-tab var--box",[e.computeColorClass(),`var-tab--${e.itemDirection}`]]),ref:"tabEl",style:F({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...C)=>e.handleClick&&e.handleClick(...C))},[W(e.$slots,"default")],6)),[[h,{disabled:e.disabled}]])}var U=O(Se,[["render",pe]]);U.install=function(e){e.component(U.name,U)};export{N as T,U as a};
