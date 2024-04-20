import{n as ve,p as ye,d as we,e as ke,o as $,c as C,w as J,f as K,h as Ne,F as Q,y as $e,k as xe,S as Me}from"./index-87b6c522.js";import{_ as _e}from"./InputCopyable.vue_vue_type_script_setup_true_lang-172251b3.js";import{w as T}from"./defaults-4d6daddf.js";import{_ as ze}from"./ColorPicker-9519f92e.js";import{_ as Ie}from"./FormItem-b352ed82.js";import"./Button-1bd999d8.js";import"./use-locale-e6cf97b1.js";import"./use-form-item-e8ac7b23.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./InputGroup-e54b7647.js";var He={grad:.9,turn:360,rad:360/(2*Math.PI)},p=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},d=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},s=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},le=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},W=function(t){return{r:s(t.r,0,255),g:s(t.g,0,255),b:s(t.b,0,255),a:s(t.a)}},P=function(t){return{r:d(t.r),g:d(t.g),b:d(t.b),a:d(t.a,3)}},Se=/^#([0-9a-f]{3,8})$/i,H=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},de=function(t){var e=t.r,a=t.g,n=t.b,r=t.a,u=Math.max(e,a,n),o=u-Math.min(e,a,n),i=o?u===e?(a-n)/o:u===a?2+(n-e)/o:4+(e-a)/o:0;return{h:60*(i<0?i+6:i),s:u?o/u*100:0,v:u/255*100,a:r}},ce=function(t){var e=t.h,a=t.s,n=t.v,r=t.a;e=e/360*6,a/=100,n/=100;var u=Math.floor(e),o=n*(1-a),i=n*(1-(e-u)*a),f=n*(1-(1-e+u)*a),l=u%6;return{r:255*[n,i,o,o,f,n][l],g:255*[f,n,n,i,o,o][l],b:255*[o,o,f,n,n,i][l],a:r}},X=function(t){return{h:le(t.h),s:s(t.s,0,100),l:s(t.l,0,100),a:s(t.a)}},Y=function(t){return{h:d(t.h),s:d(t.s),l:d(t.l),a:d(t.a,3)}},Z=function(t){return ce((a=(e=t).s,{h:e.h,s:(a*=((n=e.l)<50?n:100-n)/100)>0?2*a/(n+a)*100:0,v:n+a,a:e.a}));var e,a,n},M=function(t){return{h:(e=de(t)).h,s:(r=(200-(a=e.s))*(n=e.v)/100)>0&&r<200?a*n/100/(r<=100?r:200-r)*100:0,l:r/2,a:e.a};var e,a,n,r},qe=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ce=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Pe=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,je=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,B={string:[[function(t){var e=Se.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?d(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?d(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=Pe.exec(t)||je.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:W({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=qe.exec(t)||Ce.exec(t);if(!e)return null;var a,n,r=X({h:(a=e[1],n=e[2],n===void 0&&(n="deg"),Number(a)*(He[n]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Z(r)},"hsl"]],object:[[function(t){var e=t.r,a=t.g,n=t.b,r=t.a,u=r===void 0?1:r;return p(e)&&p(a)&&p(n)?W({r:Number(e),g:Number(a),b:Number(n),a:Number(u)}):null},"rgb"],[function(t){var e=t.h,a=t.s,n=t.l,r=t.a,u=r===void 0?1:r;if(!p(e)||!p(a)||!p(n))return null;var o=X({h:Number(e),s:Number(a),l:Number(n),a:Number(u)});return Z(o)},"hsl"],[function(t){var e=t.h,a=t.s,n=t.v,r=t.a,u=r===void 0?1:r;if(!p(e)||!p(a)||!p(n))return null;var o=function(i){return{h:le(i.h),s:s(i.s,0,100),v:s(i.v,0,100),a:s(i.a)}}({h:Number(e),s:Number(a),v:Number(n),a:Number(u)});return ce(o)},"hsv"]]},ee=function(t,e){for(var a=0;a<e.length;a++){var n=e[a][0](t);if(n)return[n,e[a][1]]}return[null,void 0]},Le=function(t){return typeof t=="string"?ee(t.trim(),B.string):typeof t=="object"&&t!==null?ee(t,B.object):[null,void 0]},j=function(t,e){var a=M(t);return{h:a.h,s:s(a.s+100*e,0,100),l:a.l,a:a.a}},L=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},te=function(t,e){var a=M(t);return{h:a.h,s:a.s,l:s(a.l+100*e,0,100),a:a.a}},D=function(){function t(e){this.parsed=Le(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return d(L(this.rgba),2)},t.prototype.isDark=function(){return L(this.rgba)<.5},t.prototype.isLight=function(){return L(this.rgba)>=.5},t.prototype.toHex=function(){return e=P(this.rgba),a=e.r,n=e.g,r=e.b,o=(u=e.a)<1?H(d(255*u)):"","#"+H(a)+H(n)+H(r)+o;var e,a,n,r,u,o},t.prototype.toRgb=function(){return P(this.rgba)},t.prototype.toRgbString=function(){return e=P(this.rgba),a=e.r,n=e.g,r=e.b,(u=e.a)<1?"rgba("+a+", "+n+", "+r+", "+u+")":"rgb("+a+", "+n+", "+r+")";var e,a,n,r,u},t.prototype.toHsl=function(){return Y(M(this.rgba))},t.prototype.toHslString=function(){return e=Y(M(this.rgba)),a=e.h,n=e.s,r=e.l,(u=e.a)<1?"hsla("+a+", "+n+"%, "+r+"%, "+u+")":"hsl("+a+", "+n+"%, "+r+"%)";var e,a,n,r,u},t.prototype.toHsv=function(){return e=de(this.rgba),{h:d(e.h),s:d(e.s),v:d(e.v),a:d(e.a,3)};var e},t.prototype.invert=function(){return h({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),h(j(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),h(j(this.rgba,-e))},t.prototype.grayscale=function(){return h(j(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),h(te(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),h(te(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?h({r:(a=this.rgba).r,g:a.g,b:a.b,a:e}):d(this.rgba.a,3);var a},t.prototype.hue=function(e){var a=M(this.rgba);return typeof e=="number"?h({h:e,s:a.s,l:a.l,a:a.a}):d(a.h)},t.prototype.isEqual=function(e){return this.toHex()===h(e).toHex()},t}(),h=function(t){return t instanceof D?t:new D(t)},ae=[],Ve=function(t){t.forEach(function(e){ae.indexOf(e)<0&&(e(D,B),ae.push(e))})},S=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},c=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},x=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},se=function(t){return{c:x(t.c,0,100),m:x(t.m,0,100),y:x(t.y,0,100),k:x(t.k,0,100),a:x(t.a)}},ne=function(t){return{c:c(t.c,2),m:c(t.m,2),y:c(t.y,2),k:c(t.k,2),a:c(t.a,3)}};function be(t){return{r:c(255*(1-t.c/100)*(1-t.k/100)),g:c(255*(1-t.m/100)*(1-t.k/100)),b:c(255*(1-t.y/100)*(1-t.k/100)),a:t.a}}function re(t){var e=1-Math.max(t.r/255,t.g/255,t.b/255),a=(1-t.r/255-e)/(1-e),n=(1-t.g/255-e)/(1-e),r=(1-t.b/255-e)/(1-e);return{c:isNaN(a)?0:c(100*a),m:isNaN(n)?0:c(100*n),y:isNaN(r)?0:c(100*r),k:c(100*e),a:t.a}}function Fe(t){var e=t.c,a=t.m,n=t.y,r=t.k,u=t.a,o=u===void 0?1:u;return S(e)&&S(a)&&S(n)&&S(r)?be(se({c:Number(e),m:Number(a),y:Number(n),k:Number(r),a:Number(o)})):null}var Re=/^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ee=function(t){var e=Re.exec(t);return e?be(se({c:Number(e[1])*(e[2]?1:100),m:Number(e[3])*(e[4]?1:100),y:Number(e[5])*(e[6]?1:100),k:Number(e[7])*(e[8]?1:100),a:e[9]===void 0?1:Number(e[9])/(e[10]?100:1)})):null};function Ue(t,e){t.prototype.toCmyk=function(){return ne(re(this.rgba))},t.prototype.toCmykString=function(){return a=ne(re(this.rgba)),n=a.c,r=a.m,u=a.y,o=a.k,(i=a.a)<1?"device-cmyk("+n+"% "+r+"% "+u+"% "+o+"% / "+i+")":"device-cmyk("+n+"% "+r+"% "+u+"% "+o+"%)";var a,n,r,u,o,i},e.object.push([Fe,"cmyk"]),e.string.push([Ee,"cmyk"])}var Be={grad:.9,turn:360,rad:360/(2*Math.PI)},V=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},q=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},F=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},he=function(t){return{h:(e=t.h,(e=isFinite(e)?e%360:0)>0?e:e+360),w:F(t.w,0,100),b:F(t.b,0,100),a:F(t.a)};var e},oe=function(t){return{h:q(t.h),w:q(t.w),b:q(t.b),a:q(t.a,3)}},ue=function(t){return{h:function(e){var a=e.r,n=e.g,r=e.b,u=e.a,o=Math.max(a,n,r),i=o-Math.min(a,n,r),f=i?o===a?(n-r)/i:o===n?2+(r-a)/i:4+(a-n)/i:0;return{h:60*(f<0?f+6:f),s:o?i/o*100:0,v:o/255*100,a:u}}(t).h,w:Math.min(t.r,t.g,t.b)/255*100,b:100-Math.max(t.r,t.g,t.b)/255*100,a:t.a}},ge=function(t){return function(e){var a=e.h,n=e.s,r=e.v,u=e.a;a=a/360*6,n/=100,r/=100;var o=Math.floor(a),i=r*(1-n),f=r*(1-(a-o)*n),l=r*(1-(1-a+o)*n),v=o%6;return{r:255*[r,f,i,i,l,r][v],g:255*[l,r,r,f,i,i][v],b:255*[i,i,l,r,r,f][v],a:u}}({h:t.h,s:t.b===100?0:100-t.w/(100-t.b)*100,v:100-t.b,a:t.a})},De=function(t){var e=t.h,a=t.w,n=t.b,r=t.a,u=r===void 0?1:r;if(!V(e)||!V(a)||!V(n))return null;var o=he({h:Number(e),w:Number(a),b:Number(n),a:Number(u)});return ge(o)},Oe=/^hwb\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ae=function(t){var e=Oe.exec(t);if(!e)return null;var a,n,r=he({h:(a=e[1],n=e[2],n===void 0&&(n="deg"),Number(a)*(Be[n]||1)),w:Number(e[3]),b:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return ge(r)};function Ge(t,e){t.prototype.toHwb=function(){return oe(ue(this.rgba))},t.prototype.toHwbString=function(){return a=oe(ue(this.rgba)),n=a.h,r=a.w,u=a.b,(o=a.a)<1?"hwb("+n+" "+r+"% "+u+"% / "+o+")":"hwb("+n+" "+r+"% "+u+"%)";var a,n,r,u,o},e.string.push([Ae,"hwb"]),e.object.push([De,"hwb"])}function Je(t,e){var a={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var r in a)n[a[r]]=r;var u={};t.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var i,f,l=n[this.toHex()];if(l)return l;if(o?.closest){var v=this.toRgb(),z=1/0,I="black";if(!u.length)for(var N in a)u[N]=new t(a[N]).toRgb();for(var b in a){var g=(i=v,f=u[b],Math.pow(i.r-f.r,2)+Math.pow(i.g-f.g,2)+Math.pow(i.b-f.b,2));g<z&&(z=g,I=b)}return I}},e.string.push([function(o){var i=o.toLowerCase(),f=i==="transparent"?"#0000":a[i];return f?new t(f).toRgb():null},"name"])}var Ke={grad:.9,turn:360,rad:360/(2*Math.PI)},R=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},w=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},m=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},E=function(t){var e=t/255;return e<.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},U=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},O=96.422,A=100,G=82.521,Qe=function(t){var e,a,n={x:.9555766*(e=t).x+-.0230393*e.y+.0631636*e.z,y:-.0282895*e.x+1.0099416*e.y+.0210077*e.z,z:.0122982*e.x+-.020483*e.y+1.3299098*e.z};return a={r:U(.032404542*n.x-.015371385*n.y-.004985314*n.z),g:U(-.00969266*n.x+.018760108*n.y+41556e-8*n.z),b:U(556434e-9*n.x-.002040259*n.y+.010572252*n.z),a:t.a},{r:m(a.r,0,255),g:m(a.g,0,255),b:m(a.b,0,255),a:m(a.a)}},Te=function(t){var e=E(t.r),a=E(t.g),n=E(t.b);return function(r){return{x:m(r.x,0,O),y:m(r.y,0,A),z:m(r.z,0,G),a:m(r.a)}}(function(r){return{x:1.0478112*r.x+.0228866*r.y+-.050127*r.z,y:.0295424*r.x+.9904844*r.y+-.0170491*r.z,z:-.0092345*r.x+.0150436*r.y+.7521316*r.z,a:r.a}}({x:100*(.4124564*e+.3575761*a+.1804375*n),y:100*(.2126729*e+.7151522*a+.072175*n),z:100*(.0193339*e+.119192*a+.9503041*n),a:t.a}))},_=216/24389,k=24389/27,pe=function(t){return{l:m(t.l,0,100),c:t.c,h:(e=t.h,(e=isFinite(e)?e%360:0)>0?e:e+360),a:t.a};var e},ie=function(t){return{l:w(t.l,2),c:w(t.c,2),h:w(t.h,2),a:w(t.a,3)}},We=function(t){var e=t.l,a=t.c,n=t.h,r=t.a,u=r===void 0?1:r;if(!R(e)||!R(a)||!R(n))return null;var o=pe({l:Number(e),c:Number(a),h:Number(n),a:Number(u)});return me(o)},fe=function(t){var e=function(u){var o=Te(u),i=o.x/O,f=o.y/A,l=o.z/G;return i=i>_?Math.cbrt(i):(k*i+16)/116,{l:116*(f=f>_?Math.cbrt(f):(k*f+16)/116)-16,a:500*(i-f),b:200*(f-(l=l>_?Math.cbrt(l):(k*l+16)/116)),alpha:o.a}}(t),a=w(e.a,3),n=w(e.b,3),r=Math.atan2(n,a)/Math.PI*180;return{l:e.l,c:Math.sqrt(a*a+n*n),h:r<0?r+360:r,a:e.alpha}},me=function(t){return e={l:t.l,a:t.c*Math.cos(t.h*Math.PI/180),b:t.c*Math.sin(t.h*Math.PI/180),alpha:t.a},n=e.a/500+(a=(e.l+16)/116),r=a-e.b/200,Qe({x:(Math.pow(n,3)>_?Math.pow(n,3):(116*n-16)/k)*O,y:(e.l>8?Math.pow((e.l+16)/116,3):e.l/k)*A,z:(Math.pow(r,3)>_?Math.pow(r,3):(116*r-16)/k)*G,a:e.alpha});var e,a,n,r},Xe=/^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ye=function(t){var e=Xe.exec(t);if(!e)return null;var a,n,r=pe({l:Number(e[1]),c:Number(e[2]),h:(a=e[3],n=e[4],n===void 0&&(n="deg"),Number(a)*(Ke[n]||1)),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return me(r)};function Ze(t,e){t.prototype.toLch=function(){return ie(fe(this.rgba))},t.prototype.toLchString=function(){return a=ie(fe(this.rgba)),n=a.l,r=a.c,u=a.h,(o=a.a)<1?"lch("+n+"% "+r+" "+u+" / "+o+")":"lch("+n+"% "+r+" "+u+")";var a,n,r,u,o},e.string.push([Ye,"lch"]),e.object.push([We,"lch"])}function y({label:t,parse:e=o=>h(o),format:a,placeholder:n,invalidMessage:r=`Invalid ${t.toLowerCase()} format.`,type:u="text"}){const o=ve("");return{type:u,label:t,parse:i=>T(()=>e(i),void 0),format:a,placeholder:n,value:o,validation:ye({source:o,rules:[{message:r,validator:i=>T(()=>i===""?!0:e(i).isValid(),!1)}]})}}const ct=we({__name:"color-converter",setup(t){Ve([Ue,Ge,Je,Ze]);const e={picker:y({label:"color picker",format:n=>n.toHex(),type:"color-picker"}),hex:y({label:"hex",format:n=>n.toHex(),placeholder:"e.g. #ff0000"}),rgb:y({label:"rgb",format:n=>n.toRgbString(),placeholder:"e.g. rgb(255, 0, 0)"}),hsl:y({label:"hsl",format:n=>n.toHslString(),placeholder:"e.g. hsl(0, 100%, 50%)"}),hwb:y({label:"hwb",format:n=>n.toHwbString(),placeholder:"e.g. hwb(0, 0%, 0%)"}),lch:y({label:"lch",format:n=>n.toLchString(),placeholder:"e.g. lch(53.24, 104.55, 40.85)"}),cmyk:y({label:"cmyk",format:n=>n.toCmykString(),placeholder:"e.g. cmyk(0, 100%, 100%, 0)"}),name:y({label:"name",format:n=>n.toName({closest:!0})??"Unknown",placeholder:"e.g. red"})};a(h("#1ea54c"));function a(n,r){n!==void 0&&n.isValid()&&ke.forEach(e,({value:u,format:o},i)=>{i!==r&&(u.value=o(n))})}return(n,r)=>{const u=_e,o=ze,i=Ie,f=$e;return $(),C(f,null,{default:J(()=>[($(),K(Q,null,Ne(e,({label:l,parse:v,placeholder:z,validation:I,type:N},b)=>($(),K(Q,{key:b},[N==="text"?($(),C(u,{key:0,value:e[b].value.value,"onUpdate:value":[g=>e[b].value.value=g,g=>a(v(g),b)],"test-id":`input-${b}`,label:`${l}:`,"label-position":"left","label-width":"100px","label-align":"right",placeholder:z,validation:I,"raw-text":"",clearable:"","mt-2":""},null,8,["value","onUpdate:value","test-id","label","placeholder","validation"])):N==="color-picker"?($(),C(i,{key:1,label:`${l}:`,"label-width":"100","label-placement":"left","show-feedback":!1},{default:J(()=>[xe(o,{value:e[b].value.value,"onUpdate:value":[g=>e[b].value.value=g,g=>a(v(g),b)],placement:"bottom-end"},null,8,["value","onUpdate:value"])]),_:2},1032,["label"])):Me("",!0)],64))),64))]),_:1})}}});export{ct as default};
