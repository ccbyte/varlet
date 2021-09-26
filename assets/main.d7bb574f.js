import{_ as I,c as i,r as H,g as R,M as P,s as G,i as F,a as e,m as W,P as J,C as K,R as Q,I as X}from"./IconSfc.a60484c8.js";import{o as p,c as h,a as N,r as u,g as s,u as Y,b as Z,d as T,e as U,f as L,t as g,h as C,w as S,i as f,v as y,n as ee,F as k,j as w,k as M,l as te,m as b,T as oe,p as $,q as ne,s as _e,x as ae,y as re,z as ie,A as pe,B as se,C as ce}from"./vendor.bac705d4.js";const me={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},de={class:"varlet-site-mobile var-elevation--3"},he={class:"varlet-site-mobile-content"},ue=["src"];function le(t,_,n,o,m,a){return p(),h("div",de,[N("div",he,[N("iframe",{src:`./mobile.html#/${n.componentName}?language=${n.language}&platform=pc&replace=${n.replace}`},null,8,ue)])])}var Ee=I(me,[["render",le],["__scopeId","data-v-64a53243"]]);const ve={name:"AppHeader",props:{language:{type:String}},setup(){const t=u(s(i,"title")),_=u(s(i,"logo")),n=u(s(i,"pc.header.i18n")),o=u(s(i,"pc.header.github")),m=u(!1),a=Y(),c=Z(()=>H(n.value));return{logo:_,title:t,languages:n,nonEmptyLanguages:c,github:o,isOpenMenu:m,handleLanguageChange:r=>{const{menuName:d}=R();a.replace(`/${r}/${d}`),m.value=!1}}}},Ce={class:"varlet-site-header"},Ne={class:"varlet-site-header__lead"},Te=["src"],ze={key:1,class:"varlet-site-header__title"},Ae={class:"varlet-site-header__tail"},Ie=["href"];function Le(t,_,n,o,m,a){const c=T("var-icon"),v=T("var-cell"),r=U("ripple");return p(),h("div",Ce,[N("div",Ne,[o.logo?(p(),h("img",{key:0,class:"varlet-site-header__logo",src:o.logo,alt:"logo"},null,8,Te)):L("v-if",!0),o.title?(p(),h("div",ze,g(o.title),1)):L("v-if",!0)]),N("div",Ae,[o.languages?(p(),h("div",{key:0,class:"varlet-site-header__language",onMouseenter:_[0]||(_[0]=d=>o.isOpenMenu=!0),onMouseleave:_[1]||(_[1]=d=>o.isOpenMenu=!1)},[C(c,{name:"translate",size:"26px",color:"#666"}),C(c,{name:"chevron-down",color:"#666"}),C(oe,{name:"fade"},{default:S(()=>[f(N("div",{class:"varlet-site-header__language-list var-elevation--5",style:ee({pointerEvents:o.isOpenMenu?"auto":"none"})},[(p(!0),h(k,null,w(o.nonEmptyLanguages,(d,z)=>f((p(),M(v,{key:z,class:b({"varlet-site-header__language-list--active":n.language===z}),onClick:V=>o.handleLanguageChange(z)},{default:S(()=>[te(g(d),1)]),_:2},1032,["class","onClick"])),[[r]])),128))],4),[[y,o.isOpenMenu]])]),_:1})],32)):L("v-if",!0),o.github?(p(),h("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:o.github},[C(c,{name:"github",color:"#666",size:28})],8,Ie)):L("v-if",!0)])])}var ge=I(ve,[["render",Le],["__scopeId","data-v-15d54e16"]]);const fe={name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(t,{emit:_}){const n=$(P),o=u(s(i,"themes"));return{menuTypes:n,themes:o,changeRoute:a=>{a.type===P.TITLE||t.menuName===a.doc||_("change",a)}}}},Oe={class:"varlet-site-sidebar var-elevation--3"},Re={key:0,class:"varlet-site-sidebar__item--title"},Pe={key:1,class:"varlet-site-sidebar__item--link"};function Se(t,_,n,o,m,a){const c=T("var-cell"),v=U("ripple");return p(),h("div",Oe,[(p(!0),h(k,null,w(n.menu,(r,d)=>f((p(),M(c,{class:b(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":r.doc===n.menuName,"varlet-site-sidebar__link":r.type!==o.menuTypes.TITLE,"varlet-site-sidebar__title":r.type===o.menuTypes.TITLE}]),key:d,onClick:z=>o.changeRoute(r)},{default:S(()=>[r.type===o.menuTypes.TITLE?(p(),h("span",Re,g(r.text[n.language]),1)):(p(),h("span",Pe,g(r.text[n.language]),1))]),_:2},1032,["class","onClick"])),[[v,{touchmoveForbid:!1,disabled:r.type===o.menuTypes.TITLE,color:o.themes["color-side-bar"]}]])),128))])}var be=I(fe,[["render",Se],["__scopeId","data-v-251bcda4"]]);const De=ne({components:{AppMobile:Ee,AppHeader:ge,AppSidebar:be},setup(){const t=s(i,"defaultLanguage"),_=u(s(i,"pc.menu",[])),n=u(s(i,"useMobile")),o=s(i,"mobile.redirect"),m=u(""),a=u(null),c=u(""),v=u(null),r=_e(),d=l=>{const E=_.value.find(O=>O.doc===l);return(E==null?void 0:E.type)===P.COMPONENT?l:o.slice(1)},z=()=>{const{language:l,menuName:E}=R();if(F()&&n.value){window.location.href=`./mobile.html#/${E}?language=${l||t}&platform=mobile`;return}ie(()=>{const O=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-cell"),j=_.value.findIndex(q=>q.doc===E);j!==-1&&O[j].scrollIntoView({block:"center",inline:"start"})})},V=l=>{v.value.scrollTop=0,a.value=d(l.doc),c.value=l.doc};return ae(()=>z()),re(()=>r.path,()=>{const{language:l,menuName:E}=R();!l||!E||(a.value=d(E),c.value=E,m.value=l,document.title=s(i,"pc.title")[l])},{immediate:!0}),G(i),{menu:_,language:m,componentName:a,menuName:c,doc:v,useMobile:n,handleSidebarChange:V}}}),Ve={class:"varlet-site"},je={class:"varlet-site-content"};function Ue(t,_,n,o,m,a){const c=T("app-header"),v=T("app-sidebar"),r=T("router-view"),d=T("app-mobile");return p(),h("div",Ve,[C(c,{language:t.language},null,8,["language"]),N("div",je,[C(v,{language:t.language,menu:t.menu,"menu-name":t.menuName,onChange:t.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),N("div",{class:b(["varlet-site-doc-container",[!t.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[C(r)],2),f(C(d,{"component-name":t.componentName,language:t.language,replace:t.menuName},null,8,["component-name","language","replace"]),[[y,t.useMobile]])])])}var ye=I(De,[["render",Ue]]),x=[{path:"/en-US/action-sheet",component:()=>e(()=>import("./en-US.0c766ea6.js"),["assets/en-US.0c766ea6.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/action-sheet",component:()=>e(()=>import("./zh-CN.b56569d1.js"),["assets/zh-CN.b56569d1.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/app-bar",component:()=>e(()=>import("./en-US.04602fa8.js"),["assets/en-US.04602fa8.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/app-bar",component:()=>e(()=>import("./zh-CN.95cf8518.js"),["assets/zh-CN.95cf8518.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/back-top",component:()=>e(()=>import("./en-US.ddfe8f72.js"),["assets/en-US.ddfe8f72.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/back-top",component:()=>e(()=>import("./zh-CN.ab093b37.js"),["assets/zh-CN.ab093b37.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/badge",component:()=>e(()=>import("./en-US.85b09055.js"),["assets/en-US.85b09055.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/badge",component:()=>e(()=>import("./zh-CN.b5d2c14a.js"),["assets/zh-CN.b5d2c14a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/button",component:()=>e(()=>import("./en-US.6193e0c9.js"),["assets/en-US.6193e0c9.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/button",component:()=>e(()=>import("./zh-CN.731d372c.js"),["assets/zh-CN.731d372c.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/card",component:()=>e(()=>import("./en-US.87b3120d.js"),["assets/en-US.87b3120d.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/card",component:()=>e(()=>import("./zh-CN.91649e95.js"),["assets/zh-CN.91649e95.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/cell",component:()=>e(()=>import("./en-US.e34f1d3e.js"),["assets/en-US.e34f1d3e.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/cell",component:()=>e(()=>import("./zh-CN.01072f9c.js"),["assets/zh-CN.01072f9c.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/checkbox",component:()=>e(()=>import("./zh-CN.93820928.js"),["assets/zh-CN.93820928.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/checkbox-group",component:()=>e(()=>import("./en-US.c6add29a.js"),["assets/en-US.c6add29a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/checkbox-group",component:()=>e(()=>import("./zh-CN.df4a95d6.js"),["assets/zh-CN.df4a95d6.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/chip",component:()=>e(()=>import("./en-US.35e6c9d8.js"),["assets/en-US.35e6c9d8.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/chip",component:()=>e(()=>import("./zh-CN.f5a64ffa.js"),["assets/zh-CN.f5a64ffa.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/col",component:()=>e(()=>import("./zh-CN.ef79c727.js"),["assets/zh-CN.ef79c727.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/collapse",component:()=>e(()=>import("./en-US.20554aa2.js"),["assets/en-US.20554aa2.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/collapse",component:()=>e(()=>import("./zh-CN.2a3377ed.js"),["assets/zh-CN.2a3377ed.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/collapse-item",component:()=>e(()=>import("./zh-CN.257a86d5.js"),["assets/zh-CN.257a86d5.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/countdown",component:()=>e(()=>import("./en-US.57d81109.js"),["assets/en-US.57d81109.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/countdown",component:()=>e(()=>import("./zh-CN.40bd5293.js"),["assets/zh-CN.40bd5293.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/counter",component:()=>e(()=>import("./en-US.2bcc2679.js"),["assets/en-US.2bcc2679.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/counter",component:()=>e(()=>import("./zh-CN.a13ed752.js"),["assets/zh-CN.a13ed752.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/date-picker",component:()=>e(()=>import("./en-US.3f29983e.js"),["assets/en-US.3f29983e.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/date-picker",component:()=>e(()=>import("./zh-CN.99b5e328.js"),["assets/zh-CN.99b5e328.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/dialog",component:()=>e(()=>import("./en-US.69ab7564.js"),["assets/en-US.69ab7564.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/dialog",component:()=>e(()=>import("./zh-CN.73bf1c41.js"),["assets/zh-CN.73bf1c41.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/divider",component:()=>e(()=>import("./en-US.cae5b122.js"),["assets/en-US.cae5b122.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/divider",component:()=>e(()=>import("./zh-CN.a5d1c4c0.js"),["assets/zh-CN.a5d1c4c0.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/form",component:()=>e(()=>import("./en-US.022ab33e.js"),["assets/en-US.022ab33e.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/form",component:()=>e(()=>import("./zh-CN.49b11589.js"),["assets/zh-CN.49b11589.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/form-details",component:()=>e(()=>import("./en-US.aea11302.js"),["assets/en-US.aea11302.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/form-details",component:()=>e(()=>import("./zh-CN.1269691c.js"),["assets/zh-CN.1269691c.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/icon",component:()=>e(()=>import("./en-US.a1caee48.js"),["assets/en-US.a1caee48.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/icon",component:()=>e(()=>import("./zh-CN.4f4ffd85.js"),["assets/zh-CN.4f4ffd85.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/image",component:()=>e(()=>import("./en-US.24e787eb.js"),["assets/en-US.24e787eb.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/image",component:()=>e(()=>import("./zh-CN.3b9367d6.js"),["assets/zh-CN.3b9367d6.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/image-preview",component:()=>e(()=>import("./en-US.f245bdaa.js"),["assets/en-US.f245bdaa.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/image-preview",component:()=>e(()=>import("./zh-CN.c60c577d.js"),["assets/zh-CN.c60c577d.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/index-anchor",component:()=>e(()=>import("./zh-CN.99ba6b1a.js"),["assets/zh-CN.99ba6b1a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/index-bar",component:()=>e(()=>import("./en-US.5b4c02fb.js"),["assets/en-US.5b4c02fb.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/index-bar",component:()=>e(()=>import("./zh-CN.728e3752.js"),["assets/zh-CN.728e3752.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/input",component:()=>e(()=>import("./en-US.2fa010bf.js"),["assets/en-US.2fa010bf.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/input",component:()=>e(()=>import("./zh-CN.a662aec9.js"),["assets/zh-CN.a662aec9.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/lazy",component:()=>e(()=>import("./en-US.814d67e5.js"),["assets/en-US.814d67e5.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/lazy",component:()=>e(()=>import("./zh-CN.e1bd03c0.js"),["assets/zh-CN.e1bd03c0.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/list",component:()=>e(()=>import("./en-US.9f525b9b.js"),["assets/en-US.9f525b9b.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/list",component:()=>e(()=>import("./zh-CN.59ea0281.js"),["assets/zh-CN.59ea0281.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/loading",component:()=>e(()=>import("./en-US.ee1455cc.js"),["assets/en-US.ee1455cc.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/loading",component:()=>e(()=>import("./zh-CN.8744a59f.js"),["assets/zh-CN.8744a59f.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/locale",component:()=>e(()=>import("./en-US.63adeba9.js"),["assets/en-US.63adeba9.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/locale",component:()=>e(()=>import("./zh-CN.36fad8d3.js"),["assets/zh-CN.36fad8d3.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/menu",component:()=>e(()=>import("./en-US.4b84931a.js"),["assets/en-US.4b84931a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/menu",component:()=>e(()=>import("./zh-CN.75fcffdc.js"),["assets/zh-CN.75fcffdc.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/option",component:()=>e(()=>import("./zh-CN.b0945e08.js"),["assets/zh-CN.b0945e08.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/picker",component:()=>e(()=>import("./en-US.526a7b10.js"),["assets/en-US.526a7b10.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/picker",component:()=>e(()=>import("./zh-CN.30f9434d.js"),["assets/zh-CN.30f9434d.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/popup",component:()=>e(()=>import("./en-US.4817f5af.js"),["assets/en-US.4817f5af.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/popup",component:()=>e(()=>import("./zh-CN.427a9c45.js"),["assets/zh-CN.427a9c45.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/progress",component:()=>e(()=>import("./en-US.f4d3106f.js"),["assets/en-US.f4d3106f.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/progress",component:()=>e(()=>import("./zh-CN.c7364d11.js"),["assets/zh-CN.c7364d11.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/pull-refresh",component:()=>e(()=>import("./en-US.11296144.js"),["assets/en-US.11296144.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/pull-refresh",component:()=>e(()=>import("./zh-CN.140dbcf5.js"),["assets/zh-CN.140dbcf5.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/radio",component:()=>e(()=>import("./zh-CN.622793a5.js"),["assets/zh-CN.622793a5.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/radio-group",component:()=>e(()=>import("./en-US.654e61bc.js"),["assets/en-US.654e61bc.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/radio-group",component:()=>e(()=>import("./zh-CN.1a713700.js"),["assets/zh-CN.1a713700.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/rate",component:()=>e(()=>import("./en-US.7e2eb2f3.js"),["assets/en-US.7e2eb2f3.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/rate",component:()=>e(()=>import("./zh-CN.4e2d7cfc.js"),["assets/zh-CN.4e2d7cfc.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/ripple",component:()=>e(()=>import("./en-US.35e1b712.js"),["assets/en-US.35e1b712.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/ripple",component:()=>e(()=>import("./zh-CN.fd535f11.js"),["assets/zh-CN.fd535f11.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/row",component:()=>e(()=>import("./en-US.d91114e0.js"),["assets/en-US.d91114e0.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/row",component:()=>e(()=>import("./zh-CN.86b3bd08.js"),["assets/zh-CN.86b3bd08.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/select",component:()=>e(()=>import("./en-US.f95e1510.js"),["assets/en-US.f95e1510.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/select",component:()=>e(()=>import("./zh-CN.ad7e05c3.js"),["assets/zh-CN.ad7e05c3.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/skeleton",component:()=>e(()=>import("./en-US.b30216c4.js"),["assets/en-US.b30216c4.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/skeleton",component:()=>e(()=>import("./zh-CN.bc0fbc48.js"),["assets/zh-CN.bc0fbc48.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/slider",component:()=>e(()=>import("./en-US.c72b0587.js"),["assets/en-US.c72b0587.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/slider",component:()=>e(()=>import("./zh-CN.022c3875.js"),["assets/zh-CN.022c3875.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/snackbar",component:()=>e(()=>import("./en-US.609581fb.js"),["assets/en-US.609581fb.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/snackbar",component:()=>e(()=>import("./zh-CN.f20e531d.js"),["assets/zh-CN.f20e531d.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/step",component:()=>e(()=>import("./zh-CN.a3b21d7a.js"),["assets/zh-CN.a3b21d7a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/steps",component:()=>e(()=>import("./en-US.84ad68b6.js"),["assets/en-US.84ad68b6.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/steps",component:()=>e(()=>import("./zh-CN.49faa29a.js"),["assets/zh-CN.49faa29a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/sticky",component:()=>e(()=>import("./en-US.8e88cae9.js"),["assets/en-US.8e88cae9.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/sticky",component:()=>e(()=>import("./zh-CN.670b04f9.js"),["assets/zh-CN.670b04f9.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/style-provider",component:()=>e(()=>import("./en-US.420b53d4.js"),["assets/en-US.420b53d4.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/style-provider",component:()=>e(()=>import("./zh-CN.cb8c0662.js"),["assets/zh-CN.cb8c0662.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/styles",component:()=>e(()=>import("./en-US.2ac83e24.js"),["assets/en-US.2ac83e24.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/styles",component:()=>e(()=>import("./zh-CN.00f5b9de.js"),["assets/zh-CN.00f5b9de.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/swipe",component:()=>e(()=>import("./en-US.d2579378.js"),["assets/en-US.d2579378.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/swipe",component:()=>e(()=>import("./zh-CN.520f2c9d.js"),["assets/zh-CN.520f2c9d.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/swipe-item",component:()=>e(()=>import("./zh-CN.2993e512.js"),["assets/zh-CN.2993e512.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/switch",component:()=>e(()=>import("./en-US.654bed88.js"),["assets/en-US.654bed88.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/switch",component:()=>e(()=>import("./zh-CN.7d1977fa.js"),["assets/zh-CN.7d1977fa.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tab",component:()=>e(()=>import("./zh-CN.e0d6b108.js"),["assets/zh-CN.e0d6b108.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tab-item",component:()=>e(()=>import("./zh-CN.62f99e8b.js"),["assets/zh-CN.62f99e8b.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/tabs",component:()=>e(()=>import("./en-US.62ce781d.js"),["assets/en-US.62ce781d.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tabs",component:()=>e(()=>import("./zh-CN.be6f40a4.js"),["assets/zh-CN.be6f40a4.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tabs-items",component:()=>e(()=>import("./zh-CN.87e504a0.js"),["assets/zh-CN.87e504a0.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/time-picker",component:()=>e(()=>import("./en-US.ef8743f9.js"),["assets/en-US.ef8743f9.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/time-picker",component:()=>e(()=>import("./zh-CN.d428a962.js"),["assets/zh-CN.d428a962.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/uploader",component:()=>e(()=>import("./en-US.d0e5791f.js"),["assets/en-US.d0e5791f.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/uploader",component:()=>e(()=>import("./zh-CN.f3b73f76.js"),["assets/zh-CN.f3b73f76.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.en-US.2c52ca29.js"),["assets/browserAdaptation.en-US.2c52ca29.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.zh-CN.acdd455e.js"),["assets/browserAdaptation.zh-CN.acdd455e.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/cli",component:()=>e(()=>import("./cli.en-US.ce7dcb85.js"),["assets/cli.en-US.ce7dcb85.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/cli",component:()=>e(()=>import("./cli.zh-CN.10076a01.js"),["assets/cli.zh-CN.10076a01.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/customTheme",component:()=>e(()=>import("./customTheme.en-US.a3a40ce5.js"),["assets/customTheme.en-US.a3a40ce5.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/customTheme",component:()=>e(()=>import("./customTheme.zh-CN.0e42a9dd.js"),["assets/customTheme.zh-CN.0e42a9dd.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/home",component:()=>e(()=>import("./home.en-US.3760c552.js"),["assets/home.en-US.3760c552.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/home",component:()=>e(()=>import("./home.zh-CN.11dec84b.js"),["assets/home.zh-CN.11dec84b.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/ide",component:()=>e(()=>import("./ide.en-US.95e9028a.js"),["assets/ide.en-US.95e9028a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/ide",component:()=>e(()=>import("./ide.zh-CN.5d54efb0.js"),["assets/ide.zh-CN.5d54efb0.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/importOnDemand",component:()=>e(()=>import("./importOnDemand.en-US.00676ff2.js"),["assets/importOnDemand.en-US.00676ff2.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/importOnDemand",component:()=>e(()=>import("./importOnDemand.zh-CN.6ac3fba4.js"),["assets/importOnDemand.zh-CN.6ac3fba4.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.en-US.2cf8aae3.js"),["assets/openSourceGuide.en-US.2cf8aae3.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.zh-CN.c7296989.js"),["assets/openSourceGuide.zh-CN.c7296989.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/quickstart",component:()=>e(()=>import("./quickstart.en-US.2fa83a6a.js"),["assets/quickstart.en-US.2fa83a6a.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/quickstart",component:()=>e(()=>import("./quickstart.zh-CN.453b336c.js"),["assets/quickstart.zh-CN.453b336c.js","assets/IconSfc.a60484c8.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])}];function ke(){const t=$({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:"#fff",color:s(i,"themes.color-progress"),lineWidth:3,value:0});let _;const n=()=>{_=window.setTimeout(()=>{if(t.value>=95)return;let a=Math.random();t.value<70&&(a=Math.round(5*Math.random())),t.value+=a,n()},200)},o=()=>{t.value=0,setTimeout(()=>t.color="#3594d9",200),n()},m=()=>{t.value=100,setTimeout(()=>t.color="#fff",300),window.clearTimeout(_)};return W(J,t),{start:o,end:m}}const we=s(i,"defaultLanguage"),B=s(i,"pc.redirect"),Me=s(i,"mobile.redirect");B&&x.push({path:"/:pathMatch(.*)*",redirect:`/${we}${B}`});const A=pe({history:se(),routes:x});let D=!0;const{start:$e,end:xe}=ke();A.beforeEach((t,_)=>{if(t.path===_.path)return!1;D=!1,setTimeout(()=>!D&&$e(),200),window._hmt&&t.path&&window._hmt.push(["_trackPageview",`/#${t.fullPath}`])});A.afterEach(()=>{D=!0,xe()});Object.defineProperty(window,"onMobileRouteChange",{value:(t,_,n)=>{if(t===Me){A.replace(`/${_}/${n}`);return}A.replace(`/${_}${t}`)}});ce(ye).use(A).use(K).use(Q).use(X).mount("#app");
