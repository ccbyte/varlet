import{F as e,u as a}from"./provide.04a164f5.js";import{b as r}from"./components.0481fe69.js";import{u as l}from"./index.2313c40e.js";import{u as o}from"./shared.6d6b25a1.js";import{_ as n}from"./IconSfc.22678cb1.js";import{q as t,b as s,y as c,d as u,o as d,c as i,a as m,O as p,m as v,h,z as g}from"./vendor.85536c59.js";const f={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:function(e){return["horizontal","vertical"].includes(e)}},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const V=t({name:"VarCheckboxGroup",components:{[e.name]:e},props:f,setup(e){const n=s((()=>e.max)),t=s((()=>e.modelValue.length)),{length:u,checkboxes:d,bindCheckboxes:i}=l(),{bindForm:m}=a(),{errorMessage:p,validateWithTrigger:v,validate:h,resetValidation:f}=r(),V=s((()=>p.value)),b=a=>{var r,l,o;null==(r=e["onUpdate:modelValue"])||r.call(e,a),null==(l=e.onChange)||l.call(e,a),o="onChange",g((()=>{const{validateTrigger:a,rules:r,modelValue:l}=e;v(a,o,r,l)}))},k=()=>d.forEach((({sync:a})=>a(e.modelValue))),y=()=>{var a;null==(a=e["onUpdate:modelValue"])||a.call(e,[]),f()},x=()=>h(e.rules,e.modelValue);c((()=>e.modelValue),k,{deep:!0}),c((()=>u.value),k);const C={max:n,checkedCount:t,onChecked:a=>{const{modelValue:r}=e;r.includes(a)||b([...r,a])},onUnchecked:a=>{const{modelValue:r}=e;r.includes(a)&&b(r.filter((e=>e!==a)))},validate:x,resetValidation:f,reset:y,errorMessage:V};return i(C),null==m||m(C),{errorMessage:p,checkAll:()=>{var a;const r=d.map((({checkedValue:e})=>e.value)),l=o(r);return null==(a=e["onUpdate:modelValue"])||a.call(e,l),l},inverseAll:()=>{var a;const r=d.filter((({checked:e})=>!e.value)).map((({checkedValue:e})=>e.value)),l=o(r);return null==(a=e["onUpdate:modelValue"])||a.call(e,l),l},reset:y,validate:x,resetValidation:f}}}),b={class:"var-checkbox-group__wrap"};var k=n(V,[["render",function(e,a,r,l,o,n){const t=u("var-form-details");return d(),i("div",b,[m("div",{class:v(["var-checkbox-group",[`var-checkbox-group--${e.direction}`]])},[p(e.$slots,"default")],2),h(t,{"error-message":e.errorMessage},null,8,["error-message"])])}]]);k.install=function(e){e.component(k.name,k)};export{k as C};
