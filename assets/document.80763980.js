import{u as _,g as m,_ as p}from"./index.8a79d7d5.js";import{b as f,H as v,ad as g,e as c,p as a,y as e,x as n,u,F as h,r as x,s as H}from"./vendor.5ef502a2.js";const $=e("h1",null,"Hello World",-1),b=e("hr",null,null,-1),B=e("div",null,"useStore:",-1),C=f({props:{msg:{default:""}},setup(l){const t=v(""),o=_();function r(){o.increase(3)}return g(async()=>{const s=await m();t.value=s}),(s,d)=>(c(),a(h,null,[$,e("div",null,"msg : "+n(l.msg),1),e("div",null,"user : "+n(t.value),1),b,B,e("div",null,"count:"+n(u(o).count),1),e("div",null,"double count:"+n(u(o).doubleCount),1),e("button",{onClick:r},"+")],64))}}),S={name:"Document",components:{HelloWorld:C},setup(){return{}}},W=e("div",null,"document",-1);function k(l,t,o,r,s,d){const i=x("HelloWorld");return c(),a("section",null,[W,H(i,{msg:"Hello"})])}var F=p(S,[["render",k]]);export{F as default};