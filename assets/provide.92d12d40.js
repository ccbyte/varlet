import{q as i,o as r,k as m,w as c,c as d,a as o,t as a,f as _,T as l}from"./vendor.85536c59.js";import{_ as f}from"./IconSfc.fde87e76.js";import{e as p,c as u}from"./components.0481fe69.js";const v={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const g=i({name:"VarFormDetails",props:v}),h={key:0,class:"var-form-details"},F={class:"var-form-details__message"},M={class:"var-form-details__length"};function I(e,s,x,y,T,B){return r(),m(l,{name:"var-form-details"},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),d("div",h,[o("div",F,a(e.errorMessage),1),o("div",M,a(e.maxlengthText),1)])):_("v-if",!0)]),_:1})}var t=f(g,[["render",I]]);t.install=function(e){e.component(t.name,t)};const n=Symbol("FORM_BIND_FORM_ITEM_KEY");function C(){const{bindParent:e,parentProvider:s}=p(n);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=u(n);return{formItems:s,bindFormItems:e}}export{t as F,E as a,C as u};