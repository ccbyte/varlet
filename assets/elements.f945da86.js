import{k as b,e as i,f as m,t as x}from"./shared.6d6b25a1.js";function V(t){const{top:n}=t.getBoundingClientRect();return n+(document.body.scrollTop||document.documentElement.scrollTop)}function S(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function F(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}function y(t){const{left:n}=t.getBoundingClientRect();return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}async function E(t){await A();const{top:n,bottom:o,left:r,right:e}=t.getBoundingClientRect(),{innerWidth:a,innerHeight:c}=window,l=r<=a&&e>=0,d=n<=c&&o>=0;return l&&d}function N(t){const{transform:n}=window.getComputedStyle(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function k(t){const{width:n,height:o}=t.getBoundingClientRect();return n===0&&o===0}function C(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const o=/(scroll|auto)/,{overflowY:r,overflow:e}=window.getComputedStyle(n);if(o.test(r)||o.test(e))return n}return window}function B(t){const n=[];let o=t;for(;o!==window;)o=C(o),n.push(o);return n}const w=t=>i(t)&&t.endsWith("rem"),L=t=>i(t)&&t.endsWith("px")||m(t),P=t=>i(t)&&t.endsWith("%"),p=t=>i(t)&&t.endsWith("vw"),g=t=>i(t)&&t.endsWith("vh"),W=t=>{if(m(t))return t;if(L(t))return+t.replace("px","");if(p(t))return+t.replace("vw","")*window.innerWidth/100;if(g(t))return+t.replace("vh","")*window.innerHeight/100;if(w(t)){const n=+t.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return n*parseFloat(o)}return i(t)?x(t):0},O=t=>t==null?null:P(t)||p(t)||g(t)||w(t)?t:`${W(t)}px`;function s(t){return window.requestAnimationFrame?window.requestAnimationFrame(t):window.setTimeout(t,16)}function j(t){window.cancelAnimationFrame?window.cancelAnimationFrame(t):window.clearTimeout(t)}function q(t){s(()=>{s(t)})}function A(){return new Promise(t=>{s(()=>{s(t)})})}function z(t,{top:n=0,left:o=0,duration:r=300,animation:e}){const a=Date.now(),c=S(t),l=F(t);return new Promise(d=>{const u=()=>{const f=(Date.now()-a)/r;if(f<1){const h=c+(n-c)*e(f),T=l+(o-l)*e(f);t.scrollTo(T,h),s(u)}else t.scrollTo(o,n),d()};s(u)})}function H(t){return Object.entries(t).reduce((n,[o,r])=>{const e=o.startsWith("--")?o:`--${b(o)}`;return n[e]=r,n},{})}export{y as a,F as b,S as c,W as d,j as e,B as f,V as g,C as h,E as i,k as j,N as k,H as l,q as n,s as r,z as s,O as t};
