import{F as x,u as z}from"./provide.d8ee5c4d.js";import{b as F}from"./components.fc1d8498.js";import{u as S}from"./index.c2fda658.js";import{u as b}from"./shared.6d6b25a1.js";import{_ as B}from"./IconSfc.a60484c8.js";import{q as E,b as s,y as C,d as N,o as q,c as w,a as W,O as D,m as I,h as O,z as P}from"./vendor.bac705d4.js";function H(e){return["horizontal","vertical"].includes(e)}const J={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:H},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const K=E({name:"VarCheckboxGroup",components:{[x.name]:x},props:J,setup(e){const i=s(()=>e.max),u=s(()=>e.modelValue.length),{length:m,checkboxes:r,bindCheckboxes:h}=S(),{bindForm:c}=z(),{errorMessage:v,validateWithTrigger:y,validate:j,resetValidation:l}=F(),U=s(()=>v.value),$=a=>{P(()=>{const{validateTrigger:t,rules:o,modelValue:n}=e;y(t,a,o,n)})},f=a=>{var t,o;(t=e["onUpdate:modelValue"])==null||t.call(e,a),(o=e.onChange)==null||o.call(e,a),$("onChange")},A=a=>{const{modelValue:t}=e;t.includes(a)||f([...t,a])},G=a=>{const{modelValue:t}=e;!t.includes(a)||f(t.filter(o=>o!==a))},g=()=>r.forEach(({sync:a})=>a(e.modelValue)),M=()=>{var o;const a=r.map(({checkedValue:n})=>n.value),t=b(a);return(o=e["onUpdate:modelValue"])==null||o.call(e,t),t},T=()=>{var o;const a=r.filter(({checked:n})=>!n.value).map(({checkedValue:n})=>n.value),t=b(a);return(o=e["onUpdate:modelValue"])==null||o.call(e,t),t},k=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,[]),l()},_=()=>j(e.rules,e.modelValue);C(()=>e.modelValue,g,{deep:!0}),C(()=>m.value,g);const V={max:i,checkedCount:u,onChecked:A,onUnchecked:G,validate:_,resetValidation:l,reset:k,errorMessage:U};return h(V),c==null||c(V),{errorMessage:v,checkAll:M,inverseAll:T,reset:k,validate:_,resetValidation:l}}}),L={class:"var-checkbox-group__wrap"};function Q(e,i,u,m,r,h){const c=N("var-form-details");return q(),w("div",L,[W("div",{class:I(["var-checkbox-group",[`var-checkbox-group--${e.direction}`]])},[D(e.$slots,"default")],2),O(c,{"error-message":e.errorMessage},null,8,["error-message"])])}var d=B(K,[["render",Q]]);d.install=function(e){e.component(d.name,d)};export{d as C};
