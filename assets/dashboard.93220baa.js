import{_ as p}from"./index.38d9318d.js";import{b as d,C as i,r as a,f as m,k as f,n as o,w as _,p as V,aa as g}from"./vendor.0b9e16a4.js";const C=d({name:"DashBoard",setup(){const{proxy:e}=g(),n=i("");function t(){e==null||e.$message.success(n.value)}return{alertMessage:t,inputValue:n,changeHandle:l=>{}}}}),h=V("alert");function k(e,n,t,s,l,$){const u=a("el-button"),r=a("el-input");return m(),f("section",null,[o(u,{onClick:e.alertMessage},{default:_(()=>[h]),_:1},8,["onClick"]),o(r,{modelValue:e.inputValue,"onUpdate:modelValue":n[0]||(n[0]=c=>e.inputValue=c),onInput:e.changeHandle},null,8,["modelValue","onInput"])])}var B=p(C,[["render",k]]);export{B as default};
