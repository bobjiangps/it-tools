import{b as C,a0 as i,d as B,n as c,s as L,o as k,f as U,k as r,i as a,v as d,g as o,c as F,w as g,t as K,S as N,x as V,a1 as $,m as E,y as h}from"./index-ce7448c3.js";import{_ as j}from"./InputNumber-cd8fee77.js";import{_ as D}from"./Switch-5ea6037d.js";import"./use-locale-dfa664ce.js";import"./use-form-item-aea00d16.js";import"./Button-778c0bd8.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-71f2fa87.js";function O(_,{replacementChar:e="*",keepFirst:l=4,keepLast:p=0,keepSpace:u=!0}={}){return _.split("").map((s,m,v)=>u&&s===" "||m<l||m>=v.length-p?s:e).join("")}function R(_,e={}){return C(()=>O(i(_),{replacementChar:i(e.replacementChar),keepFirst:i(e.keepFirst),keepLast:i(e.keepLast),keepSpace:i(e.keepSpace)}))}const q={"mt-4":"",flex:"","gap-10px":""},z=o("div",null,"Keep first:",-1),A=o("div",null,"Keep last:",-1),G=o("div",{"mb-5px":""}," Keep spaces: ",-1),H={"break-anywhere":"","text-wrap":""},Z=B({__name:"string-obfuscator",setup(_){const e=c("Lorem ipsum dolor sit amet"),l=c(4),p=c(4),u=c(!0),s=R(e,{keepFirst:l,keepLast:p,keepSpace:u}),{copy:m}=L({source:s});return(v,t)=>{const x=V,f=j,b=D,S=$,w=E,y=h;return k(),U("div",null,[r(x,{value:a(e),"onUpdate:value":t[0]||(t[0]=n=>d(e)?e.value=n:null),"raw-text":"",placeholder:"Enter string to obfuscate",label:"String to obfuscate:",clearable:"",multiline:""},null,8,["value"]),o("div",q,[o("div",null,[z,r(f,{value:a(l),"onUpdate:value":t[1]||(t[1]=n=>d(l)?l.value=n:null),min:"0"},null,8,["value"])]),o("div",null,[A,r(f,{value:a(p),"onUpdate:value":t[2]||(t[2]=n=>d(p)?p.value=n:null),min:"0"},null,8,["value"])]),o("div",null,[G,r(b,{value:a(u),"onUpdate:value":t[3]||(t[3]=n=>d(u)?u.value=n:null)},null,8,["value"])])]),a(s)?(k(),F(y,{key:0,"mt-60px":"","max-w-600px":"",flex:"","items-center":"","gap-5px":"","font-mono":""},{default:g(()=>[o("div",H,K(a(s)),1),r(w,{onClick:t[4]||(t[4]=n=>a(m)())},{default:g(()=>[r(S)]),_:1})]),_:1})):N("",!0)])}}});export{Z as default};
