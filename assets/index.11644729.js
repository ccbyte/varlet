var b=Object.defineProperty;var y=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(e,o,a)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,f=(e,o)=>{for(var a in o||(o={}))x.call(o,a)&&v(e,a,o[a]);if(y)for(var a of y(o))F.call(o,a)&&v(e,a,o[a]);return e};import{d as k,E as P,m as r,Y as I,T as p,l as j,v as z,X as B,a0 as T}from"./elevation.4b2b848a.js";import{u as V}from"./lock.97aa2730.js";import{u as A}from"./zIndex.bf5fc216.js";import{u as L,v as N,c as R}from"./components.21c4ed88.js";/* empty css               */function E(e){return["top","bottom","right","left","center"].includes(e)}const U={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:E},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{type:String},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}};function _(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const{n:i,classes:s}=R("popup");var u=k({name:"VarPopup",inheritAttrs:!1,props:U,setup(e,{slots:o,attrs:a}){const{zIndex:c}=A(()=>e.show,3),{disabled:m}=L(),h=()=>{var l;const{closeOnClickOverlay:t,onClickOverlay:n}=e;n==null||n(),t&&((l=e["onUpdate:show"])==null||l.call(e,!1))};V(()=>e.show,()=>e.lockScroll),P(()=>e.show,t=>{const{onOpen:n,onClose:l}=e;t?n==null||n():l==null||l()}),N(()=>{var t;return(t=e.onRouteChange)==null?void 0:t.call(e)});const C=()=>{const{overlayClass:t="",overlayStyle:n}=e;return r("div",{class:s(i("overlay"),t),style:f({zIndex:c.value-1},n),onClick:h},null)},S=()=>{var t;return r("div",B({class:s(i("content"),"var-elevation--3",i(`--${e.position}`)),style:{zIndex:c.value}},a),[(t=o.default)==null?void 0:t.call(o)])},d=()=>{const{onOpened:t,onClosed:n,show:l,overlay:w,transition:O,position:g}=e;return r(p,{name:"var-fade",onAfterEnter:t,onAfterLeave:n},{default:()=>[j(r("div",{class:s("var--box",i()),style:{zIndex:c.value-2}},[w&&C(),r(p,{name:O||`var-pop-${g}`},{default:()=>[l&&S()]})]),[[z,l]])]})};return()=>{const{teleport:t}=e;if(t){let n;return r(I,{to:t,disabled:m.value},_(n=d())?n:{default:()=>[n]})}return d()}}});u.install=function(e){e.component(u.name,u)};export{u as P,U as p};