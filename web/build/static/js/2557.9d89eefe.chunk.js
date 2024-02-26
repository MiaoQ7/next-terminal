"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[2557],{2557:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(64467),c=a(58168),r=a(48738),l=a.n(r),o=a(33926),i=a(9950),s=a(5741),m=a(87126),v=a(80575),d=a(72381),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};const f=function(e){var t=e.prefixCls,a=e.className,r=e.hoverable,o=void 0===r||r,m=u(e,["prefixCls","className","hoverable"]);return i.createElement(s.TG,null,(function(e){var r=(0,e.getPrefixCls)("card",t),s=l()("".concat(r,"-grid"),a,(0,n.A)({},"".concat(r,"-grid-hoverable"),o));return i.createElement("div",(0,c.A)({},m,{className:s}))}))};var p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};var y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};const A=function(e){return i.createElement(s.TG,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,r=e.className,o=e.avatar,s=e.title,m=e.description,v=y(e,["prefixCls","className","avatar","title","description"]),d=a("card",n),u=l()("".concat(d,"-meta"),r),f=o?i.createElement("div",{className:"".concat(d,"-meta-avatar")},o):null,p=s?i.createElement("div",{className:"".concat(d,"-meta-title")},s):null,A=m?i.createElement("div",{className:"".concat(d,"-meta-description")},m):null,h=p||A?i.createElement("div",{className:"".concat(d,"-meta-detail")},p,A):null;return i.createElement("div",(0,c.A)({},v,{className:u}),f,h)}))};var h=i.forwardRef((function(e,t){var a,r,u,y=i.useContext(s.QO),A=y.getPrefixCls,h=y.direction,b=i.useContext(m.A),x=e.prefixCls,g=e.className,C=e.extra,E=e.headStyle,N=void 0===E?{}:E,O=e.bodyStyle,w=void 0===O?{}:O,z=e.title,P=e.loading,k=e.bordered,j=void 0===k||k,q=e.size,S=e.type,M=e.cover,T=e.actions,Q=e.tabList,B=e.children,K=e.activeTabKey,I=e.defaultActiveTabKey,G=e.tabBarExtraContent,H=e.hoverable,L=e.tabProps,R=void 0===L?{}:L,_=p(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),D=A("card",x),V=i.createElement(v.A,{loading:!0,active:!0,paragraph:{rows:4},title:!1},B),F=void 0!==K,J=(0,c.A)((0,c.A)({},R),(a={},(0,n.A)(a,F?"activeKey":"defaultActiveKey",F?K:I),(0,n.A)(a,"tabBarExtraContent",G),a)),U=Q&&Q.length?i.createElement(d.A,(0,c.A)({size:"large"},J,{className:"".concat(D,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)},items:Q.map((function(e){var t;return{label:e.tab,key:e.key,disabled:null!==(t=e.disabled)&&void 0!==t&&t}}))})):null;(z||C||U)&&(u=i.createElement("div",{className:"".concat(D,"-head"),style:N},i.createElement("div",{className:"".concat(D,"-head-wrapper")},z&&i.createElement("div",{className:"".concat(D,"-head-title")},z),C&&i.createElement("div",{className:"".concat(D,"-extra")},C)),U));var W=M?i.createElement("div",{className:"".concat(D,"-cover")},M):null,X=i.createElement("div",{className:"".concat(D,"-body"),style:w},P?V:B),Y=T&&T.length?i.createElement("ul",{className:"".concat(D,"-actions")},function(e){return e.map((function(t,a){return i.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},i.createElement("span",null,t))}))}(T)):null,Z=(0,o.A)(_,["onTabChange"]),$=q||b,ee=l()(D,(r={},(0,n.A)(r,"".concat(D,"-loading"),P),(0,n.A)(r,"".concat(D,"-bordered"),j),(0,n.A)(r,"".concat(D,"-hoverable"),H),(0,n.A)(r,"".concat(D,"-contain-grid"),function(){var t;return i.Children.forEach(e.children,(function(e){e&&e.type&&e.type===f&&(t=!0)})),t}()),(0,n.A)(r,"".concat(D,"-contain-tabs"),Q&&Q.length),(0,n.A)(r,"".concat(D,"-").concat($),$),(0,n.A)(r,"".concat(D,"-type-").concat(S),!!S),(0,n.A)(r,"".concat(D,"-rtl"),"rtl"===h),r),g);return i.createElement("div",(0,c.A)({ref:t},Z,{className:ee}),u,W,X,Y)}));h.Grid=f,h.Meta=A;const b=h},80575:(e,t,a)=>{a.d(t,{A:()=>z});var n=a(64467),c=a(58168),r=a(82284),l=a(48738),o=a.n(l),i=a(9950),s=a(5741),m=a(33926);const v=function(e){var t,a,r=e.prefixCls,l=e.className,s=e.style,m=e.size,v=e.shape,d=o()((t={},(0,n.A)(t,"".concat(r,"-lg"),"large"===m),(0,n.A)(t,"".concat(r,"-sm"),"small"===m),t)),u=o()((a={},(0,n.A)(a,"".concat(r,"-circle"),"circle"===v),(0,n.A)(a,"".concat(r,"-square"),"square"===v),(0,n.A)(a,"".concat(r,"-round"),"round"===v),a)),f=i.useMemo((function(){return"number"===typeof m?{width:m,height:m,lineHeight:"".concat(m,"px")}:{}}),[m]);return i.createElement("span",{className:o()(r,d,u,l),style:(0,c.A)((0,c.A)({},f),s)})};const d=function(e){var t=e.prefixCls,a=e.className,r=e.active,l=e.shape,d=void 0===l?"circle":l,u=e.size,f=void 0===u?"default":u,p=(0,i.useContext(s.QO).getPrefixCls)("skeleton",t),y=(0,m.A)(e,["prefixCls","className"]),A=o()(p,"".concat(p,"-element"),(0,n.A)({},"".concat(p,"-active"),r),a);return i.createElement("div",{className:A},i.createElement(v,(0,c.A)({prefixCls:"".concat(p,"-avatar"),shape:d,size:f},y)))};const u=function(e){var t,a=e.prefixCls,r=e.className,l=e.active,d=e.block,u=void 0!==d&&d,f=e.size,p=void 0===f?"default":f,y=(0,i.useContext(s.QO).getPrefixCls)("skeleton",a),A=(0,m.A)(e,["prefixCls"]),h=o()(y,"".concat(y,"-element"),(t={},(0,n.A)(t,"".concat(y,"-active"),l),(0,n.A)(t,"".concat(y,"-block"),u),t),r);return i.createElement("div",{className:h},i.createElement(v,(0,c.A)({prefixCls:"".concat(y,"-button"),size:p},A)))};var f=a(89379);const p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};var y=a(38913),A=function(e,t){return i.createElement(y.A,(0,f.A)((0,f.A)({},e),{},{ref:t,icon:p}))};A.displayName="DotChartOutlined";const h=i.forwardRef(A);const b=function(e){var t=e.prefixCls,a=e.className,c=e.style,r=e.active,l=e.children,m=(0,i.useContext(s.QO).getPrefixCls)("skeleton",t),v=o()(m,"".concat(m,"-element"),(0,n.A)({},"".concat(m,"-active"),r),a),d=null!==l&&void 0!==l?l:i.createElement(h,null);return i.createElement("div",{className:v},i.createElement("div",{className:o()("".concat(m,"-image"),a),style:c},d))};const x=function(e){var t=e.prefixCls,a=e.className,c=e.style,r=e.active,l=(0,i.useContext(s.QO).getPrefixCls)("skeleton",t),m=o()(l,"".concat(l,"-element"),(0,n.A)({},"".concat(l,"-active"),r),a);return i.createElement("div",{className:m},i.createElement("div",{className:o()("".concat(l,"-image"),a),style:c},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(l,"-image-svg")},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(l,"-image-path")}))))};const g=function(e){var t,a=e.prefixCls,r=e.className,l=e.active,d=e.block,u=e.size,f=void 0===u?"default":u,p=(0,i.useContext(s.QO).getPrefixCls)("skeleton",a),y=(0,m.A)(e,["prefixCls"]),A=o()(p,"".concat(p,"-element"),(t={},(0,n.A)(t,"".concat(p,"-active"),l),(0,n.A)(t,"".concat(p,"-block"),d),t),r);return i.createElement("div",{className:A},i.createElement(v,(0,c.A)({prefixCls:"".concat(p,"-input"),size:f},y)))};var C=a(60436);const E=function(e){var t=function(t){var a=e.width,n=e.rows,c=void 0===n?2:n;return Array.isArray(a)?a[t]:c-1===t?a:void 0},a=e.prefixCls,n=e.className,c=e.style,r=e.rows,l=(0,C.A)(Array(r)).map((function(e,a){return i.createElement("li",{key:a,style:{width:t(a)}})}));return i.createElement("ul",{className:o()(a,n),style:c},l)};const N=function(e){var t=e.prefixCls,a=e.className,n=e.width,r=e.style;return i.createElement("h3",{className:o()(t,a),style:(0,c.A)({width:n},r)})};function O(e){return e&&"object"===(0,r.A)(e)?e:{}}var w=function(e){var t=e.prefixCls,a=e.loading,r=e.className,l=e.style,m=e.children,d=e.avatar,u=void 0!==d&&d,f=e.title,p=void 0===f||f,y=e.paragraph,A=void 0===y||y,h=e.active,b=e.round,x=i.useContext(s.QO),g=x.getPrefixCls,C=x.direction,w=g("skeleton",t);if(a||!("loading"in e)){var z,P,k,j=!!u,q=!!p,S=!!A;if(j){var M=(0,c.A)((0,c.A)({prefixCls:"".concat(w,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(q,S)),O(u));P=i.createElement("div",{className:"".concat(w,"-header")},i.createElement(v,(0,c.A)({},M)))}if(q||S){var T,Q;if(q){var B=(0,c.A)((0,c.A)({prefixCls:"".concat(w,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(j,S)),O(p));T=i.createElement(N,(0,c.A)({},B))}if(S){var K=(0,c.A)((0,c.A)({prefixCls:"".concat(w,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(j,q)),O(A));Q=i.createElement(E,(0,c.A)({},K))}k=i.createElement("div",{className:"".concat(w,"-content")},T,Q)}var I=o()(w,(z={},(0,n.A)(z,"".concat(w,"-with-avatar"),j),(0,n.A)(z,"".concat(w,"-active"),h),(0,n.A)(z,"".concat(w,"-rtl"),"rtl"===C),(0,n.A)(z,"".concat(w,"-round"),b),z),r);return i.createElement("div",{className:I,style:l},P,k)}return"undefined"!==typeof m?m:null};w.Button=u,w.Avatar=d,w.Input=g,w.Image=x,w.Node=b;const z=w}}]);