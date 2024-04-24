import{d as V,B as g,n as x,b as y,s as w,o as h,f as R,k as t,w as a,i as o,v as s,g as U,l as B,F as $,x as D,m as E,y as I}from"./index-87b6c522.js";import{t as N,b as O,i as j}from"./base64-94c6bba0.js";import{w as F}from"./defaults-4d6daddf.js";import{_ as L}from"./Switch-851b677b.js";import{_ as P}from"./FormItem-b352ed82.js";import"./use-form-item-e8ac7b23.js";const W={flex:"","justify-center":""},Y={flex:"","justify-center":""},M=V({__name:"base64-string-converter",setup(q){const u=g("base64-string-converter--encode-url-safe",!1),n=g("base64-string-converter--decode-url-safe",!1),r=x(""),c=y(()=>N(r.value,{makeUrlSafe:u.value})),{copy:S}=w({source:c,text:"Base64 string copied to the clipboard"}),i=x(""),d=y(()=>F(()=>O(i.value.trim(),{makeUrlSafe:n.value}),"")),{copy:k}=w({source:d,text:"String copied to the clipboard"}),T=[{message:"Invalid base64 string",validator:m=>j(m.trim(),{makeUrlSafe:n.value})}],C=[n];return(m,e)=>{const _=L,f=P,p=D,v=E,b=I;return h(),R($,null,[t(b,{title:"String to base64"},{default:a(()=>[t(f,{label:"Encode URL safe","label-placement":"left"},{default:a(()=>[t(_,{value:o(u),"onUpdate:value":e[0]||(e[0]=l=>s(u)?u.value=l:null)},null,8,["value"])]),_:1}),t(p,{value:o(r),"onUpdate:value":e[1]||(e[1]=l=>s(r)?r.value=l:null),multiline:"",placeholder:"Put your string here...",rows:"5",label:"String to encode","raw-text":"","mb-5":""},null,8,["value"]),t(p,{label:"Base64 of string",value:o(c),multiline:"",readonly:"",placeholder:"The base64 encoding of your string will be here",rows:"5","mb-5":""},null,8,["value"]),U("div",W,[t(v,{onClick:e[2]||(e[2]=l=>o(S)())},{default:a(()=>[B(" Copy base64 ")]),_:1})])]),_:1}),t(b,{title:"Base64 to string"},{default:a(()=>[t(f,{label:"Decode URL safe","label-placement":"left"},{default:a(()=>[t(_,{value:o(n),"onUpdate:value":e[3]||(e[3]=l=>s(n)?n.value=l:null)},null,8,["value"])]),_:1}),t(p,{value:o(i),"onUpdate:value":e[4]||(e[4]=l=>s(i)?i.value=l:null),multiline:"",placeholder:"Your base64 string...",rows:"5","validation-rules":T,"validation-watch":C,label:"Base64 string to decode","mb-5":""},null,8,["value"]),t(p,{value:o(d),"onUpdate:value":e[5]||(e[5]=l=>s(d)?d.value=l:null),label:"Decoded string",placeholder:"The decoded string will be here",multiline:"",rows:"5",readonly:"","mb-5":""},null,8,["value"]),U("div",Y,[t(v,{onClick:e[6]||(e[6]=l=>o(k)())},{default:a(()=>[B(" Copy decoded string ")]),_:1})])]),_:1})],64)}}});export{M as default};