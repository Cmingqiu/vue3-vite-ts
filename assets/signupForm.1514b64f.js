import{b as F,C as B,D as g,r as a,e as V,k as x,n as e,w as u,u as r,s as _,L as k}from"./vendor.18686c44.js";const v={class:"signup"},b=_("label",{for:"chk","aria-hidden":"true"},"\u6CE8 \u518C",-1),U=F({setup(h){const m=B(),s=g({username:"",password:"",pwdConfirm:""}),c={username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},pwdConfirm:{validator:(l,o,n)=>{if(o.trim()==="")n("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801");else{if(o!==s.password)return!1;n()}},message:"\u8BF7\u8F93\u5165\u76F8\u540C\u5BC6\u7801",trigger:"change"}},w=l=>{!l||l.validate((o,n)=>{})};return(l,o)=>{const n=a("User"),d=a("el-icon"),p=a("el-input"),i=a("el-form-item"),f=a("Lock"),C=a("el-form");return V(),x("div",v,[b,e(C,{ref_key:"signupFormRef",ref:m,model:r(s),"label-position":"left","hide-required-asterisk":"",rules:c},{default:u(()=>[e(i,{prop:"username"},{default:u(()=>[e(p,{modelValue:r(s).username,"onUpdate:modelValue":o[0]||(o[0]=t=>r(s).username=t),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},{prefix:u(()=>[e(d,{size:"18px"},{default:u(()=>[e(n)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{prop:"password"},{default:u(()=>[e(p,{modelValue:r(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>r(s).password=t),type:"password",clearable:"","show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{prefix:u(()=>[e(d,{size:"18px"},{default:u(()=>[e(f)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{prop:"pwdConfirm"},{default:u(()=>[e(p,{modelValue:r(s).pwdConfirm,"onUpdate:modelValue":o[2]||(o[2]=t=>r(s).pwdConfirm=t),type:"password",clearable:"","show-password":"",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{prefix:u(()=>[e(d,{size:"18px"},{default:u(()=>[e(f)]),_:1})]),_:1},8,["modelValue"])]),_:1}),_("button",{onClick:o[3]||(o[3]=k(t=>w(m.value),["prevent"]))},"\u6CE8 \u518C")]),_:1},8,["model"])])}}});export{U as default};
