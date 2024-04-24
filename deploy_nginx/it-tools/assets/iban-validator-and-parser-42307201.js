import{d as m,n as S,b as P,o as l,f as I,k as h,i as B,v as k,c as E,w as v,S as M,F as W,h as G,x as F,y as w,g as T,$ as L}from"./index-ce7448c3.js";import{_ as K}from"./c-key-value-list.vue_vue_type_script_setup_true_lang-5812997e.js";/*!
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. *//**
 * Validation, extraction and creation of IBAN, BBAN, BIC/SWIFT numbers plus some other helpful stuff
 * @package Documentation
 * @author Saša Jovanić
 * @module ibantools
 * @version 4.3.3
 * @license MPL-2.0
 * @preferred
 */function D(r,a){if(a===void 0&&(a={allowQRIBAN:!0}),r==null)return!1;var e=new RegExp("^[0-9]{2}$",""),t=r.slice(0,2),n=N[t];return n===void 0||n.bban_regexp===void 0||n.bban_regexp===null||n.chars===void 0?!1:n.chars===r.length&&e.test(r.slice(2,4))&&U(r.slice(4),t)&&C(r)&&(a.allowQRIBAN||!p(r))}var b;(function(r){r[r.NoIBANProvided=0]="NoIBANProvided",r[r.NoIBANCountry=1]="NoIBANCountry",r[r.WrongBBANLength=2]="WrongBBANLength",r[r.WrongBBANFormat=3]="WrongBBANFormat",r[r.ChecksumNotNumber=4]="ChecksumNotNumber",r[r.WrongIBANChecksum=5]="WrongIBANChecksum",r[r.WrongAccountBankBranchChecksum=6]="WrongAccountBankBranchChecksum",r[r.QRIBANNotAllowed=7]="QRIBANNotAllowed"})(b||(b={}));function Q(r,a){a===void 0&&(a={allowQRIBAN:!0});var e={errorCodes:[],valid:!0};if(r!=null&&r!==""){var t=N[r.slice(0,2)];if(!t||!(t.bban_regexp||t.chars))return e.valid=!1,e.errorCodes.push(b.NoIBANCountry),e;t&&t.chars&&t.chars!==r.length&&(e.valid=!1,e.errorCodes.push(b.WrongBBANLength)),t&&t.bban_regexp&&!d(r.slice(4),t.bban_regexp)&&(e.valid=!1,e.errorCodes.push(b.WrongBBANFormat)),t&&t.bban_validation_func&&!t.bban_validation_func(r.slice(4))&&(e.valid=!1,e.errorCodes.push(b.WrongAccountBankBranchChecksum));var n=new RegExp("^[0-9]{2}$","");n.test(r.slice(2,4))||(e.valid=!1,e.errorCodes.push(b.ChecksumNotNumber)),(e.errorCodes.indexOf(b.WrongBBANFormat)!==-1||!C(r))&&(e.valid=!1,e.errorCodes.push(b.WrongIBANChecksum)),!a.allowQRIBAN&&p(r)&&(e.valid=!1,e.errorCodes.push(b.QRIBANNotAllowed))}else e.valid=!1,e.errorCodes.push(b.NoIBANProvided);return e}function U(r,a){if(r==null||a===void 0||a===null)return!1;var e=N[a];return e==null||e.bban_regexp===void 0||e.bban_regexp===null||e.chars===void 0||e.chars===null?!1:e.chars-4===r.length&&d(r,e.bban_regexp)?e.bban_validation_func?e.bban_validation_func(r.replace(/[\s.]+/g,"")):!0:!1}function p(r){if(r==null)return!1;var a=r.slice(0,2),e=["LI","CH"];if(!e.includes(a))return!1;var t=new RegExp("^3[0-1]{1}[0-9]{3}$","");return t.test(r.slice(4,9))}function H(r){var a={},e=Z(r);return a.iban=e||r,e&&D(e)?(a.bban=e.slice(4),a.countryCode=e.slice(0,2),a.valid=!0):a.valid=!1,a}function d(r,a){var e=new RegExp(a,"");return e.test(r)}function Z(r){return typeof r!="string"?null:r.replace(/[-\ ]/g,"").toUpperCase()}function f(r,a){if(typeof r!="string")return null;a==null&&(a=" ");var e=Z(r);return e===null?null:e.replace(/(.{4})(?!$)/g,"$1"+a)}function C(r){var a=r.slice(0,2),e=parseInt(r.slice(2,4),10),t=r.slice(4),n=O("".concat(t).concat(a,"00")),s=_(n);return 98-s===e}function O(r){return r.split("").map(function(a){var e=a.charCodeAt(0);return e>=65?(e-55).toString():a}).join("")}var R;(function(r){r[r.NoBICProvided=0]="NoBICProvided",r[r.NoBICCountry=1]="NoBICCountry",r[r.WrongBICFormat=2]="WrongBICFormat"})(R||(R={}));var Y=function(r){for(var a=[5,4,3,2,7,6,5,4,3,2],e=r.replace(/[\s.]+/g,""),t=parseInt(e.charAt(10),10),n=e.substring(0,10),s=0,g=0;g<10;g++)s+=parseInt(n.charAt(g),10)*a[g];var u=s%11;return t===(u===0?0:11-u)},J=function(r){var a=r.replace(/[\s.]+/g,""),e=parseInt(a.substring(0,a.length-2),10),t=parseInt(a.substring(a.length-2,a.length),10),n=e%97===0?97:e%97;return n===t},_=function(r){for(;r.length>2;){var a=r.slice(0,6),e=parseInt(a,10);if(isNaN(e))return NaN;r=e%97+r.slice(a.length)}return parseInt(r,10)%97},o=function(r){var a=r.replace(/[\s.]+/g,""),e=_(a);return e===1},X=function(r){for(var a=[3,9,7,1,3,9,7],e=parseInt(r.charAt(7),10),t=r.substring(0,7),n=0,s=0;s<7;s++)n+=parseInt(t.charAt(s),10)*a[s];var g=n%10;return e===(g===0?0:10-g)},V=function(r){for(var a=[4,8,5,10,9,7,3,6],e=[1,2,4,8,5,10,9,7,3,6],t=parseInt(r.charAt(8),10),n=parseInt(r.charAt(9),10),s=r.substring(0,8),g=r.substring(10,20),u=0,c=0;c<8;c++)u+=parseInt(s.charAt(c),10)*a[c];var A=u%11;if(t!==(A===0?0:A===1?1:11-A))return!1;u=0;for(var c=0;c<10;c++)u+=parseInt(g.charAt(c),10)*e[c];return A=u%11,n===(A===0?0:A===1?1:11-A)},$=function(r,a){for(var e=10,t=0;t<r.length;t++)e+=parseInt(r.charAt(t),10),e%10!==0&&(e=e%10),e=e*2,e=e%11;return a===(11-e===10?0:11-e)},j=function(r){var a=parseInt(r.charAt(6),10),e=parseInt(r.charAt(16),10),t=r.substring(0,6),n=r.substring(7,16);return $(t,a)&&$(n,e)},y=function(r){for(var a=[10,5,8,4,2,1],e=[6,3,7,9,10,5,8,4,2,1],t=parseInt(r.charAt(9),10),n=parseInt(r.charAt(19),10),s=r.substring(4,9),g=r.substring(10,19),u=0,c=0;c<s.length;c++)u+=parseInt(s.charAt(c),10)*a[c];var A=u%11;if(t!==(A===0?0:A===1?1:11-A))return!1;u=0;for(var c=0;c<g.length;c++)u+=parseInt(g.charAt(c),10)*e[c];return A=u%11,n===(A===0?0:A===1?1:11-A)},z=function(r){for(var a=[7,1,3,7,1,3,7,1,3,7,1,3,7],e=parseInt(r.charAt(15),10),t=r.substring(2,15),n=0,s=0;s<t.length;s++)n+=parseInt(t.charAt(s),10)*a[s];var g=n%10;return e===(g===0?0:10-g)},x=function(r){for(var a=r.replace(/[\s.]+/g,""),e=Array.from(a),t=0;t<a.length;t++){var n=e[t].charCodeAt(0);if(n>=65)switch(n){case 65:case 74:e[t]="1";break;case 66:case 75:case 83:e[t]="2";break;case 67:case 76:case 84:e[t]="3";break;case 68:case 77:case 85:e[t]="4";break;case 69:case 78:case 86:e[t]="5";break;case 70:case 79:case 87:e[t]="6";break;case 71:case 80:case 88:e[t]="7";break;case 72:case 81:case 89:e[t]="8";break;case 73:case 82:case 90:e[t]="9";break}}var s=_(e.join(""));return s===0},q=function(r){for(var a=[9,7,3,1,9,7,3,1,9,7,3,1,9,7,3],e=parseInt(r.charAt(7),10),t=r.substring(0,7),n=0,s=0;s<t.length;s++)n+=parseInt(t.charAt(s),10)*a[s];var g=n%10;if(e!==(g===0?0:10-g))return!1;if(n=0,r.endsWith("00000000")){for(var u=r.substring(8,15),c=parseInt(r.charAt(15),10),s=0;s<u.length;s++)n+=parseInt(u.charAt(s),10)*a[s];var A=n%10;return c===(A===0?0:10-A)}else{for(var u=r.substring(8,23),c=parseInt(r.charAt(23),10),s=0;s<u.length;s++)n+=parseInt(u.charAt(s),10)*a[s];var i=n%10;return c===(i===0?0:10-i)}},N={AD:{chars:24,bban_regexp:"^[0-9]{8}[A-Z0-9]{12}$",IBANRegistry:!0,SEPA:!0},AE:{chars:23,bban_regexp:"^[0-9]{3}[0-9]{16}$",IBANRegistry:!0},AF:{},AG:{},AI:{},AL:{chars:28,bban_regexp:"^[0-9]{8}[A-Z0-9]{16}$",IBANRegistry:!0},AM:{},AO:{chars:25,bban_regexp:"^[0-9]{21}$"},AQ:{},AR:{},AS:{},AT:{chars:20,bban_regexp:"^[0-9]{16}$",IBANRegistry:!0,SEPA:!0},AU:{},AW:{},AX:{chars:18,bban_regexp:"^[0-9]{14}$",IBANRegistry:!0},AZ:{chars:28,bban_regexp:"^[A-Z]{4}[A-Z0-9]{20}$",IBANRegistry:!0},BA:{chars:20,bban_regexp:"^[0-9]{16}$",bban_validation_func:o,IBANRegistry:!0},BB:{},BD:{},BE:{chars:16,bban_regexp:"^[0-9]{12}$",bban_validation_func:J,IBANRegistry:!0,SEPA:!0},BF:{chars:28,bban_regexp:"^[A-Z0-9]{2}[0-9]{22}$"},BG:{chars:22,bban_regexp:"^[A-Z]{4}[0-9]{6}[A-Z0-9]{8}$",IBANRegistry:!0,SEPA:!0},BH:{chars:22,bban_regexp:"^[A-Z]{4}[A-Z0-9]{14}$",IBANRegistry:!0},BI:{chars:27,bban_regexp:"^[0-9]{23}$"},BJ:{chars:28,bban_regexp:"^[A-Z0-9]{2}[0-9]{22}$"},BL:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},BM:{},BN:{},BO:{},BQ:{},BR:{chars:29,bban_regexp:"^[0-9]{23}[A-Z]{1}[A-Z0-9]{1}$",IBANRegistry:!0},BS:{},BT:{},BV:{},BW:{},BY:{chars:28,bban_regexp:"^[A-Z]{4}[0-9]{4}[A-Z0-9]{16}$",IBANRegistry:!0},BZ:{},CA:{},CC:{},CD:{},CF:{chars:27,bban_regexp:"^[0-9]{23}$"},CG:{chars:27,bban_regexp:"^[0-9]{23}$"},CH:{chars:21,bban_regexp:"^[0-9]{5}[A-Z0-9]{12}$",IBANRegistry:!0,SEPA:!0},CI:{chars:28,bban_regexp:"^[A-Z]{1}[0-9]{23}$"},CK:{},CL:{},CM:{chars:27,bban_regexp:"^[0-9]{23}$"},CN:{},CO:{},CR:{chars:22,bban_regexp:"^[0-9]{18}$",IBANRegistry:!0},CU:{},CV:{chars:25,bban_regexp:"^[0-9]{21}$"},CW:{},CX:{},CY:{chars:28,bban_regexp:"^[0-9]{8}[A-Z0-9]{16}$",IBANRegistry:!0,SEPA:!0},CZ:{chars:24,bban_regexp:"^[0-9]{20}$",bban_validation_func:y,IBANRegistry:!0,SEPA:!0},DE:{chars:22,bban_regexp:"^[0-9]{18}$",IBANRegistry:!0,SEPA:!0},DJ:{chars:27,bban_regexp:"^[0-9]{23}$"},DK:{chars:18,bban_regexp:"^[0-9]{14}$",IBANRegistry:!0,SEPA:!0},DM:{},DO:{chars:28,bban_regexp:"^[A-Z]{4}[0-9]{20}$",IBANRegistry:!0},DZ:{chars:26,bban_regexp:"^[0-9]{22}$"},EC:{},EE:{chars:20,bban_regexp:"^[0-9]{16}$",bban_validation_func:z,IBANRegistry:!0,SEPA:!0},EG:{chars:29,bban_regexp:"^[0-9]{25}",IBANRegistry:!0},EH:{},ER:{},ES:{chars:24,bban_validation_func:V,bban_regexp:"^[0-9]{20}$",IBANRegistry:!0,SEPA:!0},ET:{},FI:{chars:18,bban_regexp:"^[0-9]{14}$",IBANRegistry:!0,SEPA:!0},FJ:{},FK:{},FM:{},FO:{chars:18,bban_regexp:"^[0-9]{14}$",IBANRegistry:!0},FR:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",bban_validation_func:x,IBANRegistry:!0,SEPA:!0},GA:{chars:27,bban_regexp:"^[0-9]{23}$"},GB:{chars:22,bban_regexp:"^[A-Z]{4}[0-9]{14}$",IBANRegistry:!0,SEPA:!0},GD:{},GE:{chars:22,bban_regexp:"^[A-Z0-9]{2}[0-9]{16}$",IBANRegistry:!0},GF:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},GG:{},GH:{},GI:{chars:23,bban_regexp:"^[A-Z]{4}[A-Z0-9]{15}$",IBANRegistry:!0,SEPA:!0},GL:{chars:18,bban_regexp:"^[0-9]{14}$",IBANRegistry:!0},GM:{},GN:{},GP:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},GQ:{chars:27,bban_regexp:"^[0-9]{23}$"},GR:{chars:27,bban_regexp:"^[0-9]{7}[A-Z0-9]{16}$",IBANRegistry:!0,SEPA:!0},GS:{},GT:{chars:28,bban_regexp:"^[A-Z0-9]{24}$",IBANRegistry:!0},GU:{},GW:{chars:25,bban_regexp:"^[A-Z]{2}[0-9]{19}$"},GY:{},HK:{},HM:{},HN:{chars:28,bban_regexp:"^[A-Z]{4}[0-9]{20}$"},HR:{chars:21,bban_regexp:"^[0-9]{17}$",bban_validation_func:j,IBANRegistry:!0,SEPA:!0},HT:{},HU:{chars:28,bban_regexp:"^[0-9]{24}$",bban_validation_func:q,IBANRegistry:!0,SEPA:!0},ID:{},IE:{chars:22,bban_regexp:"^[A-Z0-9]{4}[0-9]{14}$",IBANRegistry:!0,SEPA:!0},IL:{chars:23,bban_regexp:"^[0-9]{19}$",IBANRegistry:!0},IM:{},IN:{},IO:{},IQ:{chars:23,bban_regexp:"^[A-Z]{4}[0-9]{15}$",IBANRegistry:!0},IR:{chars:26,bban_regexp:"^[0-9]{22}$"},IS:{chars:26,bban_regexp:"^[0-9]{22}$",IBANRegistry:!0,SEPA:!0},IT:{chars:27,bban_regexp:"^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$",IBANRegistry:!0,SEPA:!0},JE:{},JM:{},JO:{chars:30,bban_regexp:"^[A-Z]{4}[0-9]{4}[A-Z0-9]{18}$",IBANRegistry:!0},JP:{},KE:{},KG:{},KH:{},KI:{},KM:{chars:27,bban_regexp:"^[0-9]{23}$"},KN:{},KP:{},KR:{},KW:{chars:30,bban_regexp:"^[A-Z]{4}[A-Z0-9]{22}$",IBANRegistry:!0},KY:{},KZ:{chars:20,bban_regexp:"^[0-9]{3}[A-Z0-9]{13}$",IBANRegistry:!0},LA:{},LB:{chars:28,bban_regexp:"^[0-9]{4}[A-Z0-9]{20}$",IBANRegistry:!0},LC:{chars:32,bban_regexp:"^[A-Z]{4}[A-Z0-9]{24}$",IBANRegistry:!0},LI:{chars:21,bban_regexp:"^[0-9]{5}[A-Z0-9]{12}$",IBANRegistry:!0,SEPA:!0},LK:{},LR:{},LS:{},LT:{chars:20,bban_regexp:"^[0-9]{16}$",IBANRegistry:!0,SEPA:!0},LU:{chars:20,bban_regexp:"^[0-9]{3}[A-Z0-9]{13}$",IBANRegistry:!0,SEPA:!0},LV:{chars:21,bban_regexp:"^[A-Z]{4}[A-Z0-9]{13}$",IBANRegistry:!0,SEPA:!0},LY:{chars:25,bban_regexp:"^[0-9]{21}$",IBANRegistry:!0},MA:{chars:28,bban_regexp:"^[0-9]{24}$"},MC:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",bban_validation_func:x,IBANRegistry:!0,SEPA:!0},MD:{chars:24,bban_regexp:"^[A-Z0-9]{2}[A-Z0-9]{18}$",IBANRegistry:!0},ME:{chars:22,bban_regexp:"^[0-9]{18}$",bban_validation_func:o,IBANRegistry:!0},MF:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},MG:{chars:27,bban_regexp:"^[0-9]{23}$"},MH:{},MK:{chars:19,bban_regexp:"^[0-9]{3}[A-Z0-9]{10}[0-9]{2}$",bban_validation_func:o,IBANRegistry:!0},ML:{chars:28,bban_regexp:"^[A-Z0-9]{2}[0-9]{22}$"},MM:{},MN:{chars:20,bban_regexp:"^[0-9]{16}$"},MO:{},MP:{},MQ:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},MR:{chars:27,bban_regexp:"^[0-9]{23}$",IBANRegistry:!0},MS:{},MT:{chars:31,bban_regexp:"^[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$",IBANRegistry:!0,SEPA:!0},MU:{chars:30,bban_regexp:"^[A-Z]{4}[0-9]{19}[A-Z]{3}$",IBANRegistry:!0},MV:{},MW:{},MX:{},MY:{},MZ:{chars:25,bban_regexp:"^[0-9]{21}$"},NA:{},NC:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},NE:{chars:28,bban_regexp:"^[A-Z]{2}[0-9]{22}$"},NF:{},NG:{},NI:{chars:32,bban_regexp:"^[A-Z]{4}[0-9]{24}$"},NL:{chars:18,bban_regexp:"^[A-Z]{4}[0-9]{10}$",IBANRegistry:!0,SEPA:!0},NO:{chars:15,bban_regexp:"^[0-9]{11}$",bban_validation_func:Y,IBANRegistry:!0,SEPA:!0},NP:{},NR:{},NU:{},NZ:{},OM:{},PA:{},PE:{},PF:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},PG:{},PH:{},PK:{chars:24,bban_regexp:"^[A-Z0-9]{4}[0-9]{16}$",IBANRegistry:!0},PL:{chars:28,bban_validation_func:X,bban_regexp:"^[0-9]{24}$",IBANRegistry:!0,SEPA:!0},PM:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},PN:{},PR:{},PS:{chars:29,bban_regexp:"^[A-Z0-9]{4}[0-9]{21}$",IBANRegistry:!0},PT:{chars:25,bban_regexp:"^[0-9]{21}$",bban_validation_func:o,IBANRegistry:!0,SEPA:!0},PW:{},PY:{},QA:{chars:29,bban_regexp:"^[A-Z]{4}[A-Z0-9]{21}$",IBANRegistry:!0},RE:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},RO:{chars:24,bban_regexp:"^[A-Z]{4}[A-Z0-9]{16}$",IBANRegistry:!0,SEPA:!0},RS:{chars:22,bban_regexp:"^[0-9]{18}$",bban_validation_func:o,IBANRegistry:!0},RU:{chars:33,bban_regexp:"^[0-9]{14}[A-Z0-9]{15}$",IBANRegistry:!0},RW:{},SA:{chars:24,bban_regexp:"^[0-9]{2}[A-Z0-9]{18}$",IBANRegistry:!0},SB:{},SC:{chars:31,bban_regexp:"^[A-Z]{4}[0-9]{20}[A-Z]{3}$",IBANRegistry:!0},SD:{chars:18,bban_regexp:"^[0-9]{14}$",IBANRegistry:!0},SE:{chars:24,bban_regexp:"^[0-9]{20}$",IBANRegistry:!0,SEPA:!0},SG:{},SH:{},SI:{chars:19,bban_regexp:"^[0-9]{15}$",bban_validation_func:o,IBANRegistry:!0,SEPA:!0},SJ:{},SK:{chars:24,bban_regexp:"^[0-9]{20}$",bban_validation_func:y,IBANRegistry:!0,SEPA:!0},SL:{},SM:{chars:27,bban_regexp:"^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$",IBANRegistry:!0,SEPA:!0},SN:{chars:28,bban_regexp:"^[A-Z]{2}[0-9]{22}$"},SO:{chars:23,bban_regexp:"^[0-9]{19}$",IBANRegistry:!0},SR:{},SS:{},ST:{chars:25,bban_regexp:"^[0-9]{21}$",IBANRegistry:!0},SV:{chars:28,bban_regexp:"^[A-Z]{4}[0-9]{20}$",IBANRegistry:!0},SX:{},SY:{},SZ:{},TC:{},TD:{chars:27,bban_regexp:"^[0-9]{23}$"},TF:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},TG:{chars:28,bban_regexp:"^[A-Z]{2}[0-9]{22}$"},TH:{},TJ:{},TK:{},TL:{chars:23,bban_regexp:"^[0-9]{19}$",IBANRegistry:!0},TM:{},TN:{chars:24,bban_regexp:"^[0-9]{20}$",IBANRegistry:!0},TO:{},TR:{chars:26,bban_regexp:"^[0-9]{5}[A-Z0-9]{17}$",IBANRegistry:!0},TT:{},TV:{},TW:{},TZ:{},UA:{chars:29,bban_regexp:"^[0-9]{6}[A-Z0-9]{19}$",IBANRegistry:!0},UG:{},UM:{},US:{},UY:{},UZ:{},VA:{chars:22,bban_regexp:"^[0-9]{18}",IBANRegistry:!0},VC:{},VE:{},VG:{chars:24,bban_regexp:"^[A-Z0-9]{4}[0-9]{16}$",IBANRegistry:!0},VI:{},VN:{},VU:{},WF:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},WS:{},XK:{chars:20,bban_regexp:"^[0-9]{16}$",IBANRegistry:!0},YE:{},YT:{chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",IBANRegistry:!0},ZA:{},ZM:{},ZW:{}};const rr={[b.NoIBANProvided]:"No IBAN provided",[b.NoIBANCountry]:"No IBAN country",[b.WrongBBANLength]:"Wrong BBAN length",[b.WrongBBANFormat]:"Wrong BBAN format",[b.ChecksumNotNumber]:"Checksum is not a number",[b.WrongIBANChecksum]:"Wrong IBAN checksum",[b.WrongAccountBankBranchChecksum]:"Wrong account bank branch checksum",[b.QRIBANNotAllowed]:"QR-IBAN not allowed"};function er(r){return r.map(a=>rr[a]).filter(Boolean)}const nr=m({__name:"iban-validator-and-parser",setup(r){const a=S(""),e=P(()=>{const n=a.value.toUpperCase().replace(/\s/g,"").replace(/-/g,"");if(n==="")return[];const{valid:s,errorCodes:g}=Q(n),{countryCode:u,bban:c}=H(n),A=er(g);return[{label:"Is IBAN valid ?",value:s,showCopyButton:!1},{label:"IBAN errors",value:A.length===0?void 0:A,hideOnNil:!0,showCopyButton:!1},{label:"Is IBAN a QR-IBAN ?",value:p(n),showCopyButton:!1},{label:"Country code",value:u},{label:"BBAN",value:c},{label:"IBAN friendly format",value:f(n)}]}),t=["FR7630006000011234567890189","DE89370400440532013000","GB29NWBK60161331926819"];return(n,s)=>{const g=F,u=K,c=w,A=L;return l(),I("div",null,[h(g,{value:B(a),"onUpdate:value":s[0]||(s[0]=i=>k(a)?a.value=i:null),placeholder:"Enter an IBAN to check for validity...","test-id":"iban-input"},null,8,["value"]),B(e).length>0?(l(),E(c,{key:0,"mt-5":""},{default:v(()=>[h(u,{items:B(e),"data-test-id":"iban-info"},null,8,["items"])]),_:1})):M("",!0),h(c,{title:"Valid IBAN examples","mt-5":""},{default:v(()=>[(l(),I(W,null,G(t,i=>T("div",{key:i},[h(A,{value:i,"font-mono":"","displayed-value":B(f)(i)},null,8,["value","displayed-value"])])),64))]),_:1})])}}});export{nr as default};
