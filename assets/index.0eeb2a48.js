import{b as te}from"./components.fc1d8498.js";import{F as H,u as ae}from"./provide.d8ee5c4d.js";import{a as le}from"./elements.f945da86.js";import{t as y,b as i,f as re}from"./shared.6d6b25a1.js";import{_ as ne}from"./IconSfc.a60484c8.js";import{q as se,r as w,p as ue,b as k,y as q,x as oe,d as ie,o as N,c as $,a as d,n as f,F as ce,j as de,O as ve,m as L,h as me,z as he,t as be}from"./vendor.bac705d4.js";function fe(e){return["always","normal","never"].includes(e)}const Ve={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:fe},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}};var r;(function(e){e.First="1",e.Second="2"})(r||(r={}));const ge=se({name:"VarSlider",components:{[H.name]:H},props:Ve,setup(e){const{bindForm:V,form:v}=ae(),{errorMessage:p,validateWithTrigger:D,validate:M,resetValidation:F}=te(),s=()=>M(e.rules,e.modelValue),c=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),O=()=>he(()=>D(["onChange"],"onChange",e.rules,e.modelValue)),_=w(null),m=w(0),T=w(!1),n=ue({[r.First]:c(),[r.Second]:c()}),h=k(()=>m.value/100*y(e.step)),R=k(()=>{let t=[{value:e.modelValue,enumValue:r.First}];return e.range&&i(e.modelValue)&&(t=[{value:e.modelValue[0],enumValue:r.First},{value:e.modelValue[1],enumValue:r.Second}]),t}),G=t=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[t].active,J=k(()=>{const{activeColor:t,range:a,modelValue:l}=e,u=a&&i(l)?Math.abs(l[0]-l[1]):l,o=a&&i(l)?Math.min(l[0],l[1]):0;return{width:`${u}%`,left:`${o}%`,background:t}}),g=k(()=>e.disabled||(v==null?void 0:v.disabled.value)),C=k(()=>e.readonly||(v==null?void 0:v.readonly.value)),j=(t,a)=>{var U;let l=[];const{step:u,range:o,modelValue:b,onChange:z}=e,E=y(u),S=Math.round(t/h.value)*E,ee=n[a].percentValue;if(n[a].percentValue=S/E,o&&i(b)&&(l=a===r.First?[S,b[1]]:[b[0],S]),ee!==S){const X=o?l:S;z==null||z(X),(U=e["onUpdate:modelValue"])==null||U.call(e,X),O()}},K=t=>{if(!e.range)return r.First;const a=n[r.First].percentValue*h.value,l=n[r.Second].percentValue*h.value,u=Math.abs(t-a),o=Math.abs(t-l);return u<=o?r.First:r.Second},Q=(t,a)=>{var l;m.value||(m.value=_.value.offsetWidth),!(g.value||C.value)&&((l=e.onStart)==null||l.call(e),T.value=!0,n[a].startPosition=t.touches[0].clientX)},Y=(t,a)=>{if(g.value||C.value||!T.value)return;let l=t.touches[0].clientX-n[a].startPosition+n[a].currentLeft;n[a].active=!0,l<=0?l=0:l>=m.value&&(l=m.value),j(l,a)},B=t=>{const{range:a,modelValue:l,onEnd:u}=e;if(g.value||C.value)return;let o=[];n[t].currentLeft=n[t].percentValue*h.value,n[t].active=!1;const b=n[t].percentValue;a&&i(l)&&(o=t===r.First?[b,l[1]]:[l[0],b]),u==null||u(a?o:b),T.value=!1},Z=t=>{if(g.value||C.value||t.target.closest(".var-slider__thumb"))return;const a=t.clientX-le(t.currentTarget),l=K(a);j(a,l),B(l)},W=()=>{const t=y(e.step);return isNaN(t)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):t<1||t>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==t?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},A=()=>{const{range:t,modelValue:a}=e;return t&&!i(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!t&&i(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):t&&i(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},I=(t=e.modelValue,a=y(e.step))=>{e.range&&i(t)?(n[r.First].percentValue=t[0]/a,n[r.First].currentLeft=n[r.First].percentValue*h.value,n[r.Second].percentValue=t[1]/a,n[r.Second].currentLeft=n[r.Second].percentValue*h.value):re(t)&&(n[r.First].currentLeft=t/a*h.value)};q([()=>e.modelValue,()=>e.step],([t,a])=>{!W()||!A()||T.value||I(t,y(a))}),q(m,()=>I()),oe(()=>{!W()||!A()||(m.value=_.value.offsetWidth)});const x={reset:()=>{var a;const t=e.range?[0,0]:0;(a=e["onUpdate:modelValue"])==null||a.call(e,t),F()},validate:s,resetValidation:F};return V==null||V(x),{Thumbs:r,sliderEl:_,getFillStyle:J,isDisabled:g,errorMessage:p,thumbsProps:n,thumbList:R,showLabel:G,start:Q,move:Y,end:B,click:Z}}}),Se={class:"var-slider"},ye={class:"var-slider__track"},ke=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Fe(e,V,v,p,D,M){const F=ie("var-form-details");return N(),$("div",Se,[d("div",{class:L(["var-slider-block",[e.isDisabled?"var-slider__disable":null,e.errorMessage?"var-slider__error":null]]),style:f({height:`${3*e.thumbSize}px`,margin:`0 ${e.thumbSize/2}px`}),ref:"sliderEl",onClick:V[0]||(V[0]=(...s)=>e.click&&e.click(...s))},[d("div",ye,[d("div",{class:"var-slider__track-background",style:f({background:e.trackColor,height:e.trackHeight+"px"})},null,4),d("div",{class:"var-slider__track-fill",style:f(e.getFillStyle)},null,4)]),(N(!0),$(ce,null,de(e.thumbList,s=>(N(),$("div",{class:"var-slider__thumb",key:s.enumValue,style:f({left:`${s.value}%`,zIndex:e.thumbsProps[s.enumValue].active?1:null}),onTouchstart:c=>e.start(c,s.enumValue),onTouchmove:c=>e.move(c,s.enumValue),onTouchend:c=>e.end(s.enumValue),onTouchcancel:c=>e.end(s.enumValue)},[ve(e.$slots,"button",{currentValue:s.value},()=>[d("div",{class:"var-slider__thumb-block",style:f({background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"})},null,4),d("div",{class:L(["var-slider__thumb-ripple",[e.thumbsProps[s.enumValue].active?"var-slider__thumb-ripple-active":null]]),style:f({background:e.thumbColor,height:e.thumbSize?e.thumbsProps[s.enumValue].active?3*e.thumbSize+"px":"0px":null,width:e.thumbSize?e.thumbsProps[s.enumValue].active?3*e.thumbSize+"px":"0px":null})},null,6),d("div",{class:L(["var-slider__thumb-label",[e.showLabel(s.enumValue)?"var-slider__thumb-label-active":null]]),style:f({background:e.labelColor,color:e.labelTextColor,height:2*e.thumbSize+"px",width:2*e.thumbSize+"px"})},[d("span",null,be(s.value),1)],6)])],44,ke))),128))],6),me(F,{"error-message":e.errorMessage,class:"var-slider__form","var-slider-cover":""},null,8,["error-message"])])}var P=ne(ge,[["render",Fe]]);P.install=function(e){e.component(P.name,P)};export{P as S};
