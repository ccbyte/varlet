import{A as a}from"./AppType.08a99ced.js";import{e,r as t}from"./elements.f945da86.js";import{t as s,p as o}from"./shared.6d6b25a1.js";import{_ as n,w as l}from"./IconSfc.22678cb1.js";import{q as r,r as u,y as m,o as c,c as i,O as d,W as p,X as f,l as v,t as h,d as S,a as k,h as w,w as b,F as x,S as y,U as C}from"./vendor.85536c59.js";import{S as j}from"./index.9bc36046.js";import{B as g}from"./index.7650b131.js";import{u as T,a as _,_ as M,b as D,c as H}from"./en-US.97fca002.js";import"./index.6e856e8f.js";import"./index.565310a0.js";import"./zIndex.ff962109.js";import"./index.7f242a26.js";import"./components.0481fe69.js";import"./lock.65f2d11c.js";const U={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const F=r({name:"VarCountdown",props:U,setup(a){const n=u(0),l=u(!1),r=u(""),c=u(0),i=u(0),d=u({}),p=()=>{const{time:e,onEnd:u,autoStart:m}=a,f=Date.now();n.value||(n.value=f+s(e));let v=n.value-f;v<0&&(v=0),i.value=v,(e=>{var t;const s={days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3),milliseconds:Math.floor(e%1e3)};d.value=s,null==(t=a.onChange)||t.call(a,d.value),r.value=o(a.format,s)})(v),0!==v?(m||l.value)&&(c.value=t(p)):null==u||u()},f=()=>{n.value=0,l.value=!1,e(c.value),p()};return m((()=>a.time),(()=>f()),{immediate:!0}),{showTime:r,timeData:d,start:()=>{l.value||(l.value=!0,n.value=Date.now()+(i.value||s(a.time)),p())},pause:()=>{l.value=!1},reset:f}}}),E={class:"var-countdown"};var $=n(F,[["render",function(a,e,t,s,o,n){return c(),i("div",E,[d(a.$slots,"default",p(f(a.timeData)),(()=>[v(h(a.showTime),1)]))])}]]);$.install=function(a){a.component($.name,$)};const{add:z,use:A,pack:B,packs:I,merge:N}=T(),q=a=>{H(a),A(a)};_("zh-CN",M),_("en-US",D),z("zh-CN",{basicUsage:"基本使用",customFormat:"自定义格式",showMillisecond:"显示毫秒",customStyle:"自定义样式",manualControl:"手动控制",format:"DD 天 HH 时 mm 分 ss 秒",startText:"开始",pauseText:"暂停",resetText:"重置"}),z("en-US",{basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"});const O={name:"CountdownExample",components:{[$.name]:$,[g.name]:g,AppType:a},setup(){const a=u(null),e=u(3e3);return l(q),{time:e,pack:B,end:()=>{j.info("end!")},countdown:a,change:()=>{}}}},P=a=>(y("data-v-37d61b5b"),a=a(),C(),a),R={class:"block"},V=P((()=>k("span",{class:"colon"},":",-1))),W={class:"block"},X=P((()=>k("span",{class:"colon"},":",-1))),G={class:"block"},J={class:"btn-container"};var K=n(O,[["render",function(a,e,t,s,o,n){const l=S("app-type"),r=S("var-countdown"),u=S("var-button");return c(),i(x,null,[k("div",null,[w(l,null,{default:b((()=>[v(h(s.pack.basicUsage),1)])),_:1}),w(r,{time:"108000000"})]),k("div",null,[w(l,null,{default:b((()=>[v(h(s.pack.customFormat),1)])),_:1}),w(r,{time:"108000000",format:s.pack.format},null,8,["format"])]),k("div",null,[w(l,null,{default:b((()=>[v(h(s.pack.showMillisecond),1)])),_:1}),w(r,{time:"108000000",format:"HH : mm : ss : SS"})]),k("div",null,[w(l,null,{default:b((()=>[v(h(s.pack.customStyle),1)])),_:1}),w(r,{time:"108000000"},{default:b((a=>[k("span",R,h(a.hours),1),V,k("span",W,h(a.minutes),1),X,k("span",G,h(a.seconds),1)])),_:1})]),k("div",null,[w(l,null,{default:b((()=>[v(h(s.pack.manualControl),1)])),_:1}),w(r,{time:s.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:s.end,onChange:s.change},null,8,["time","onEnd","onChange"]),k("div",J,[w(u,{type:"primary",onClick:e[0]||(e[0]=e=>a.$refs.countdown.start())},{default:b((()=>[v(h(s.pack.startText),1)])),_:1}),w(u,{onClick:e[1]||(e[1]=e=>a.$refs.countdown.pause())},{default:b((()=>[v(h(s.pack.pauseText),1)])),_:1}),w(u,{onClick:e[2]||(e[2]=e=>a.$refs.countdown.reset())},{default:b((()=>[v(h(s.pack.resetText),1)])),_:1})])])],64)}],["__scopeId","data-v-37d61b5b"]]);export{K as default};
