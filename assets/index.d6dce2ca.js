import{I as ce}from"./index.a4cdafab.js";import{M as ve}from"./index.9eebfc14.js";import{C as me}from"./index.8f0296e6.js";import{F as fe,u as be}from"./provide.9260f784.js";import{d as ye,r as h,b as A,y as E,e as M,o as d,c as f,a as c,p as i,G as $,i as U,j as W,n as S,F as he,k as pe,l as H,m as ge,t as B,R as Ce,h as J,z as Ve}from"./vendor.9810b84e.js";import{b as j,d as we}from"./shared.99253c97.js";import{a as ke}from"./components.968da630.js";import{u as Fe}from"./index.dc49ba0b.js";import{e as Me}from"./elements.ca95ba1c.js";import{_ as Se}from"./elevation.9adcc0d7.js";function Be(e){return["left","right","center"].includes(e)}const je={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Be},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onClose:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const De=ye({name:"VarSelect",components:{VarIcon:ce,VarMenu:ve,VarChip:me,VarFormDetails:fe},props:je,setup(e){const o=h(null),v=h(!1),N=A(()=>e.multiple),O=A(()=>e.focusColor),C=h(""),V=h([]),p=h("0px"),w=h(0),{bindForm:g,form:l}=be(),{length:_,options:b,bindOptions:K}=Fe(),{errorMessage:Q,validateWithTrigger:X,validate:Z,resetValidation:D}=ke(),x=()=>{const{multiple:a,modelValue:s}=e;if(a){const n=s;V.value=n.map(L)}!a&&!j(s)&&(C.value=L(s)),!a&&j(s)&&(C.value="")},y=a=>{Ve(()=>{const{validateTrigger:s,rules:n,modelValue:t}=e;X(s,a,n,t)})},k=({value:a,label:s})=>a.value!=null?a.value:s.value,L=a=>{let s=b.find(({value:n})=>n.value===a);return s||(s=b.find(({label:n})=>n.value===a)),s.label.value},ee=()=>{const{hint:a,modelValue:s}=e;if(!a&&!j(s))return"var-select--placeholder-hidden";if(a&&(!j(s)||v.value))return"var-select--placeholder-hint"},le=()=>o.value&&window.getComputedStyle(o.value).width||"0px",ae=()=>{const a=o.value&&window.getComputedStyle(o.value).paddingTop||"0px";return Me(a)*1.5},se=()=>{const{disabled:a,readonly:s,onFocus:n}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||s||(p.value=le(),w.value=ae(),v.value=!0,n==null||n(),y("onFocus"))},ne=()=>{const{disabled:a,readonly:s,onBlur:n}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||s||(n==null||n(),y("onBlur"))},oe=a=>{var u;const{disabled:s,readonly:n,multiple:t,onChange:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||n)return;const m=t?b.filter(({selected:F})=>F.value).map(k):k(a);(u=e["onUpdate:modelValue"])==null||u.call(e,m),r==null||r(m),y("onChange"),!t&&(v.value=!1)},te=()=>{var u;const{disabled:a,readonly:s,multiple:n,clearable:t,onClear:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||s||!t)return;const m=n?[]:void 0;(u=e["onUpdate:modelValue"])==null||u.call(e,m),r==null||r(m),y("onClear")},re=a=>{const{disabled:s,onClick:n}=e;(l==null?void 0:l.disabled.value)||s||(n==null||n(a),y("onClick"))},ie=a=>{var R;const{disabled:s,readonly:n,modelValue:t,onClose:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||n)return;const m=t,u=b.find(({label:T})=>T.value===a),F=m.filter(T=>{var q;return T!==((q=u.value.value)!=null?q:u.label.value)});(R=e["onUpdate:modelValue"])==null||R.call(e,F),r==null||r(F),y("onClose")},P=()=>{const{multiple:a,modelValue:s}=e;if(a){const n=s;b.forEach(t=>t.sync(n.includes(k(t))))}else b.forEach(n=>n.sync(s===k(n)));x()},de=()=>{v.value=!0},ue=()=>{v.value=!1},I=()=>Z(e.rules,e.modelValue),Y=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,e.multiple?[]:void 0),D()};E(()=>e.multiple,()=>{const{multiple:a,modelValue:s}=e;if(a&&!we(s))throw Error("The modelValue must be an array when multiple is true")}),E(()=>e.modelValue,P,{deep:!0}),E(()=>_.value,P);const G={wrapWidth:A(()=>p.value),multiple:N,focusColor:O,onSelect:oe,reset:Y,validate:I,resetValidation:D};return K(G),g==null||g(G),{wrapEl:o,offsetY:w,isFocus:v,errorMessage:Q,formDisabled:l==null?void 0:l.disabled,label:C,labels:V,computePlaceholderState:ee,handleFocus:se,handleBlur:ne,handleClear:te,handleClick:re,handleClose:ie,reset:Y,validate:I,resetValidation:D,focus:de,blur:ue}}}),Te={key:0},Ae={key:0,class:"var-select__chips"},Ee={key:1,class:"var-select__values"},$e={key:1},Ue={class:"var-select__scroller"};function We(e,o,v,N,O,C){const V=M("var-chip"),p=M("var-icon"),w=M("var-menu"),g=M("var-form-details");return d(),f("div",{class:i(["var-select var--box",[e.formDisabled||e.disabled?"var-select--disabled":null]]),onClick:o[3]||(o[3]=(...l)=>e.handleClick&&e.handleClick(...l))},[c("div",{class:i(["var-select__controller",[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:S({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[c("div",{class:i(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[$(e.$slots,"prepend-icon")],2),U(w,{class:"var-select__menu","var-select-cover":"","offset-y":e.offsetY,show:e.isFocus,"onUpdate:show":o[2]||(o[2]=l=>e.isFocus=l),onClose:e.handleBlur},{menu:W(()=>[c("div",Ue,[$(e.$slots,"default")])]),default:W(()=>[c("div",{class:i(["var-select__wrap",[e.hint?null:"var-select--non-hint"]]),ref:"wrapEl",onClick:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l))},[c("div",{class:i(["var-select__select",[e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:S({textAlign:e.textAlign,color:e.textColor})},[e.multiple?(d(),f("div",Te,[e.chip?(d(),f("div",Ae,[(d(!0),f(he,null,pe(e.labels,l=>(d(),H(V,{class:"var-select__chip","var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:l,onClick:o[0]||(o[0]=Ce(()=>{},["stop"])),onClose:_=>e.handleClose(l)},{default:W(()=>[ge(B(l),1)]),_:2},1032,["type","onClose"]))),128))])):(d(),f("div",Ee,B(e.labels.join(e.separator)),1))])):(d(),f("span",$e,B(e.label),1)),U(p,{class:i(["var-select__arrow",[e.isFocus?"var-select--arrow-rotate":null]]),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])],6),c("label",{class:i(["var-select__placeholder var--ellipsis",[e.formDisabled||e.disabled?"var-select--disabled":null,e.computePlaceholderState(),e.hint?null:"var-select--placeholder-non-hint"]])},B(e.placeholder),3)],2)]),_:3},8,["offset-y","show","onClose"]),c("div",{class:i(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[$(e.$slots,"append-icon",{},()=>[e.clearable?(d(),H(p,{key:0,class:"var-select__clear-icon",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):J("v-if",!0)])],2)],6),e.line?(d(),f("div",{key:0,class:i(["var-select__line",[e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:S({background:e.errorMessage?void 0:e.blurColor})},[c("div",{class:i(["var-select__dot",[e.isFocus?"var-select--spread":null,e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:S({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):J("v-if",!0),U(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var z=Se(De,[["render",We]]);z.install=function(e){e.component(z.name,z)};export{z as S};