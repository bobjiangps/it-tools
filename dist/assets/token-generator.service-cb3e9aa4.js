import{cA as n}from"./index-ce7448c3.js";function f({withUppercase:r=!0,withLowercase:t=!0,withNumbers:a=!0,withSymbols:o=!1,length:e=64,alphabet:s}){const u=s??[r?"ABCDEFGHIJKLMOPQRSTUVWXYZ":"",t?"abcdefghijklmopqrstuvwxyz":"",a?"0123456789":"",o?`.,;:!?./-"'#{([-|\\@)]=}*+`:""].join("");return n(u.repeat(e)).substring(0,e)}export{f as c};
