import{_ as H,c as r,w as V,f as z}from"./IconSfc.a60484c8.js";import{r as o,p as F,u as I,d as b,e as L,o as _,c as j,a as s,t as p,F as A,j as S,i as q,k as E,w as D,h as P,l as R}from"./vendor.bac705d4.js";const T={name:"AppHome",setup(){var i,g,f,x,C,k,w,y,B,N;const m=o((g=(i=r)==null?void 0:i.title)!=null?g:""),d=o((x=(f=r)==null?void 0:f.logo)!=null?x:""),v=o((w=(k=(C=r)==null?void 0:C.mobile)==null?void 0:k.title)!=null?w:{}),u=o((N=(B=(y=r)==null?void 0:y.pc)==null?void 0:B.menu)!=null?N:[]).value.filter(t=>t.type===2),h=F(u),a=o("zh-CN"),n=o("mobile"),l=I();return V(t=>{a.value=t}),z(t=>{n.value=t}),{components:h,lang:a,toComponent:t=>{l.push({path:`/${t.doc}`,query:{language:a.value,platform:n.value,replace:t.doc}})},logo:d,title:m,description:v}}},G={class:"logo"},J={class:"varlet-home__title"},K=["src"],M={class:"varlet-home__desc"};function O(m,d,v,e,u,h){const a=b("var-icon"),n=b("var-cell"),l=L("ripple");return _(),j(A,null,[s("div",G,[s("h1",J,[s("img",{class:"varlet-home__image",src:e.logo},null,8,K),s("span",null,p(e.title),1)]),s("h2",M,p(e.description[e.lang]),1)]),(_(!0),j(A,null,S(e.components,c=>q((_(),E(n,{key:c.text,onClick:i=>e.toComponent(c)},{extra:D(()=>[P(a,{name:"chevron-right",size:"14"})]),default:D(()=>[R(p(c.text[e.lang]),1)]),_:2},1032,["onClick"])),[[l]])),128))],64)}var W=H(T,[["render",O],["__scopeId","data-v-2c5a9125"]]);export{W as default};
