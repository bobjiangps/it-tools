import{_ as s}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-04e772da.js";import{p as t}from"./public-api-1d5b2fbb.js";import{i}from"./boolean-c7e7c785.js";import{w as m}from"./defaults-4d6daddf.js";import{d as p,o as u,c as l}from"./index-87b6c522.js";import"./TextareaCopyable-76fe415c.js";import"./Copy-d002e731.js";import"./Scrollbar-d5a37766.js";const b=p({__name:"yaml-to-json",setup(c){function a(o){return m(()=>{const r=t(o);return r?JSON.stringify(r,null,3):""},"")}const e=[{validator:o=>i(()=>t(o)),message:"Provided YAML is not valid."}];return(o,r)=>{const n=s;return u(),l(n,{"input-label":"Your YAML","input-placeholder":"Paste your yaml here...","output-label":"JSON from your YAML","output-language":"json","input-validation-rules":e,transformer:a})}}});export{b as default};