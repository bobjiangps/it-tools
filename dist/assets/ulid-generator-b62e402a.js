import{d as E,B as v,s as M,o as I,f as R,g as c,k as u,i,v as h,w as d,t as D,l as g,e as k,Z as A,y as B,m as U}from"./index-ce7448c3.js";import{c as j}from"./computedRefreshable-19ef2958.js";import{_ as O}from"./InputNumber-cd8fee77.js";import"./use-locale-dfa664ce.js";import"./use-form-item-aea00d16.js";import"./Button-778c0bd8.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-71f2fa87.js";function f(t){var e=new Error(t);return e.source="ulid",e}var p="0123456789ABCDEFGHJKMNPQRSTVWXYZ",l=p.length,b=Math.pow(2,48)-1,S=10,V=16;function L(t){var e=Math.floor(t()*l);return e===l&&(e=l-1),p.charAt(e)}function G(t,e){if(isNaN(t))throw new Error(t+" must be a number");if(t>b)throw f("cannot encode time greater than "+b);if(t<0)throw f("time must be positive");if(Number.isInteger(t)===!1)throw f("time must be an integer");for(var r=void 0,n="";e>0;e--)r=t%l,n=p.charAt(r)+n,t=(t-r)/l;return n}function J(t,e){for(var r="";t>0;t--)r=L(e)+r;return r}function T(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var r=e&&(e.crypto||e.msCrypto);if(r)return function(){var a=new Uint8Array(1);return r.getRandomValues(a),a[0]/255};try{var n=require("crypto");return function(){return n.randomBytes(1).readUInt8()/255}}catch{}if(t){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw f("secure crypto unusable, insecure Math.random not allowed")}function $(t){return t||(t=T()),function(r){return isNaN(r)&&(r=Date.now()),G(r,S)+J(V,t)}}var F=$();const Q={flex:"","flex-col":"","justify-center":"","gap-2":""},X={flex:"","items-center":""},Z=c("label",{"w-75px":""}," Quantity:",-1),q={"m-0":"","m-x-auto":""},H={flex:"","justify-center":"","gap-2":""},oe=E({__name:"ulid-generator",setup(t){const e=v("ulid-generator-amount",1),r=[{label:"Raw",value:"raw"},{label:"JSON",value:"json"}],n=v("ulid-generator-format",r[0].value),[a,y]=j(()=>{const m=k.times(e.value,()=>F());return n.value==="json"?JSON.stringify(m,null,2):m.join(`
`)}),{copy:N}=M({source:a,text:"ULIDs copied to the clipboard"});return(m,o)=>{const x=O,w=A,C=B,_=U;return I(),R("div",Q,[c("div",X,[Z,u(x,{value:i(e),"onUpdate:value":o[0]||(o[0]=s=>h(e)?e.value=s:null),min:"1",max:"100","flex-1":""},null,8,["value"])]),u(w,{value:i(n),"onUpdate:value":o[1]||(o[1]=s=>h(n)?n.value=s:null),options:r,label:"Format: ","label-width":"75px"},null,8,["value"]),u(C,{"mt-5":"",flex:"","data-test-id":"ulids"},{default:d(()=>[c("pre",q,D(i(a)),1)]),_:1}),c("div",H,[u(_,{"data-test-id":"refresh",onClick:o[2]||(o[2]=s=>i(y)())},{default:d(()=>[g(" Refresh ")]),_:1}),u(_,{onClick:o[3]||(o[3]=s=>i(N)())},{default:d(()=>[g(" Copy ")]),_:1})])])}}});export{oe as default};
