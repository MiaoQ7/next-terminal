"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[672],{77291:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(9950),a=n(42074),c=n(39608),o=n(27646),s=n(82548),i=n.n(s),l=n(89379);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"};var d=n(38913),f=function(e,t){return r.createElement(d.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:u}))};f.displayName="PlayCircleOutlined";const p=r.forwardRef(f);const h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"}}]},name:"pause-circle",theme:"outlined"};var m=function(e,t){return r.createElement(d.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:h}))};m.displayName="PauseCircleOutlined";const v=r.forwardRef(m);var A=n(92759),g=n(87094),x=n(41988),y=n(48538),w=n(40170),b=n(99674),j=n(98409);const C=new class{constructor(){this.formatTime=function(e){const t=Math.floor(e/1e3),n=t%60,r=Math.floor(t/60);return j.A.zeroPad(r,2)+":"+j.A.zeroPad(n,2)}}};var O=n(18202),E=n(44414);let k;const z=()=>{const[e]=(0,a.ok)(),t=e.get("sessionId");let[n,s]=(0,r.useState)((0,E.jsx)(p,{})),[l,u]=(0,r.useState)("00:00"),[d,f]=(0,r.useState)("00:00"),[h,m]=(0,r.useState)(0),[j,z]=(0,r.useState)(0),[P,S]=(0,r.useState)(1),[T,M]=(0,r.useState)(!0);(0,r.useEffect)((()=>{k=L(t);let e=()=>{R(k)},n=(0,O.s)(e);return k.getDisplay().onresize=e,window.addEventListener("resize",n),()=>{k&&(k.disconnect(),k.getDisplay().getElement().innerHTML=""),window.removeEventListener("resize",n)}}),[t]);const N=e=>{switch(console.log("onTunnelStateChange",e),e){case i().Tunnel.State.OPEN:I();case i().Tunnel.State.CLOSED:}},L=e=>{const t="".concat(c.E8,"/sessions/").concat(e,"/recording?X-Auth-Token=").concat((0,o.gf)()),n=new(i().StaticHTTPTunnel)(t);n.onstatechange=N;const r=new(i().SessionRecording)(n),a=r.getDisplay(),l=document.getElementById("display");return l.appendChild(a.getElement()),r.connect(),r.onplay=()=>{s((0,E.jsx)(v,{}))},r.onpause=()=>{s((0,E.jsx)(p,{}))},l.onclick=()=>{I()},a.onresize=function(e,t){e&&a.scale(l.offsetWidth/e)},r.onseek=e=>{m(e),u(C.formatTime(e))},r.onprogress=e=>{z(e),f(C.formatTime(e))},r},R=e=>{let t=e.getDisplay().getWidth(),n=e.getDisplay().getHeight(),r=window.innerWidth/t,a=(window.innerHeight-40)/n,c=Math.min(r,a);c&&e.getDisplay().scale(c)};let B;const D=()=>{if(H(),1===P)return;if(!k.isPlaying())return;let e=100/(P-1),t=k.getDuration(),n=k.getPosition();n>=t||k.seek(n+100,(()=>{B=setTimeout(D,e)}))},H=()=>{B&&clearTimeout(B)},I=()=>{h===j&&(m(0),k.seek(0,(()=>{k.play(),D()}))),k.isPlaying()?(k.pause(),H(),A.Ay.info("\u6682\u505c")):(k.play(),D())};return(0,E.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1b1b1b"},children:(0,E.jsxs)("div",{id:"player",children:[(0,E.jsx)("div",{id:"display",children:(0,E.jsx)("div",{className:"notification-container",children:(0,E.jsx)("div",{className:"seek-notification"})})}),T?(0,E.jsx)("div",{style:{color:"white",fontWeight:"bold",cursor:"pointer"},onClick:()=>{M(!1),I()},children:"\u70b9\u51fb\u64ad\u653e"}):(0,E.jsxs)(g.A,{justify:"space-around",align:"middle",style:{margin:4},gutter:[5,5],children:[(0,E.jsx)(x.A,{flex:"none",children:(0,E.jsx)(y.A,{size:"small",onClick:I,icon:n})}),(0,E.jsx)(x.A,{flex:"auto",children:(0,E.jsx)(w.A,{value:h,max:j,tooltipVisible:!1,onChange:e=>{k.seek(e,(()=>{console.log("complete")}))}})}),(0,E.jsx)(x.A,{flex:"none",children:(0,E.jsxs)(b.A,{size:"small",defaultValue:"1",value:P,onChange:e=>{S(e),1===e?H():D()},children:[(0,E.jsx)(b.A.Option,{value:1,children:"1.0\u500d\u901f"},"1"),(0,E.jsx)(b.A.Option,{value:1.25,children:"1.25\u500d\u901f"},"1.25"),(0,E.jsx)(b.A.Option,{value:1.5,children:"1.5\u500d\u901f"},"1.5"),(0,E.jsx)(b.A.Option,{value:1.75,children:"1.75\u500d\u901f"},"1.75"),(0,E.jsx)(b.A.Option,{value:2,children:"2.0\u500d\u901f"},"2.0")]})}),(0,E.jsx)(x.A,{flex:"none",children:(0,E.jsxs)("div",{style:{color:"white"},children:[(0,E.jsx)("b",{children:l}),"/ ",(0,E.jsx)("b",{children:d})]})})]})]})})}},18202:(e,t,n)=>{n.d(t,{s:()=>r});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=null;return function(){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this,arguments),n=null}),t)}}},98409:(e,t,n)=>{n.d(t,{A:()=>r});const r=new class{constructor(){this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){let n=e.toString();for(;n.length<t;)n="0"+n;return n}}}},13239:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(89379),a=n(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var o=n(38913),s=function(e,t){return a.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:c}))};s.displayName="CheckOutlined";const i=a.forwardRef(s)},60767:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(89379),a=n(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};var o=n(38913),s=function(e,t){return a.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:c}))};s.displayName="SearchOutlined";const i=a.forwardRef(s)},86557:(e,t,n)=>{n.d(t,{Ay:()=>u,ye:()=>c});var r=n(64467),a=n(58168),c=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,i=-1,l={};const u={matchHandlers:{},dispatch:function(e){return l=e,s.forEach((function(e){return e(l)})),s.size>=1},subscribe:function(e){return s.size||this.register(),i+=1,s.set(i,e),e(l),i},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),s.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],c=function(n){var c=n.matches;e.dispatch((0,a.A)((0,a.A)({},l),(0,r.A)({},t,c)))},s=window.matchMedia(n);s.addListener(c),e.matchHandlers[n]={mql:s,listener:c},c(s)}))}}},91396:(e,t,n)=>{n.d(t,{L:()=>o,v:()=>s});var r=n(64467),a=n(48738),c=n.n(a);(0,n(27895).P)("warning","error","");function o(e,t,n){var a;return c()((a={},(0,r.A)(a,"".concat(e,"-status-success"),"success"===t),(0,r.A)(a,"".concat(e,"-status-warning"),"warning"===t),(0,r.A)(a,"".concat(e,"-status-error"),"error"===t),(0,r.A)(a,"".concat(e,"-status-validating"),"validating"===t),(0,r.A)(a,"".concat(e,"-has-feedback"),n),a))}var s=function(e,t){return t||e}},41988:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(55352).A},77643:(e,t,n)=>{n.d(t,{$W:()=>d,Op:()=>l,XB:()=>f,cK:()=>s,hb:()=>u,jC:()=>i});var r=n(58168),a=n(43743),c=n(33926),o=n(9950),s=o.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),i=o.createContext(null),l=function(e){var t=(0,c.A)(e,["prefixCls"]);return o.createElement(a.Op,(0,r.A)({},t))},u=o.createContext({prefixCls:""}),d=o.createContext({}),f=function(e){var t=e.children,n=e.status,a=e.override,c=(0,o.useContext)(d),s=(0,o.useMemo)((function(){var e=(0,r.A)({},c);return a&&delete e.isFormItemInput,n&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e}),[n,a,c]);return o.createElement(d.Provider,{value:s},t)}},7647:(e,t,n)=>{n.d(t,{A:()=>r});const r=(0,n(9950).createContext)({})},55352:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(64467),a=n(58168),c=n(82284),o=n(48738),s=n.n(o),i=n(9950),l=n(5741),u=n(7647),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var f=["xs","sm","md","lg","xl","xxl"];const p=i.forwardRef((function(e,t){var n,o=i.useContext(l.QO),p=o.getPrefixCls,h=o.direction,m=i.useContext(u.A),v=m.gutter,A=m.wrap,g=m.supportFlexGap,x=e.prefixCls,y=e.span,w=e.order,b=e.offset,j=e.push,C=e.pull,O=e.className,E=e.children,k=e.flex,z=e.style,P=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=p("col",x),T={};f.forEach((function(t){var n,o={},s=e[t];"number"===typeof s?o.span=s:"object"===(0,c.A)(s)&&(o=s||{}),delete P[t],T=(0,a.A)((0,a.A)({},T),(n={},(0,r.A)(n,"".concat(S,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.A)(n,"".concat(S,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.A)(n,"".concat(S,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.A)(n,"".concat(S,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.A)(n,"".concat(S,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.A)(n,"".concat(S,"-rtl"),"rtl"===h),n))}));var M=s()(S,(n={},(0,r.A)(n,"".concat(S,"-").concat(y),void 0!==y),(0,r.A)(n,"".concat(S,"-order-").concat(w),w),(0,r.A)(n,"".concat(S,"-offset-").concat(b),b),(0,r.A)(n,"".concat(S,"-push-").concat(j),j),(0,r.A)(n,"".concat(S,"-pull-").concat(C),C),n),O,T),N={};if(v&&v[0]>0){var L=v[0]/2;N.paddingLeft=L,N.paddingRight=L}if(v&&v[1]>0&&!g){var R=v[1]/2;N.paddingTop=R,N.paddingBottom=R}return k&&(N.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(k),!1!==A||N.minWidth||(N.minWidth=0)),i.createElement("div",(0,a.A)({},P,{style:(0,a.A)((0,a.A)({},N),z),className:M,ref:t}),E)}))},78786:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(58168),a=n(64467),c=n(82284),o=n(5544),s=n(48738),i=n.n(s),l=n(9950),u=n(5741),d=n(6651),f=n(86557),p=n(27895),h=n(7647),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};(0,p.P)("top","middle","bottom","stretch"),(0,p.P)("start","end","center","space-around","space-between","space-evenly");const v=l.forwardRef((function(e,t){var n,s=e.prefixCls,p=e.justify,v=e.align,A=e.className,g=e.style,x=e.children,y=e.gutter,w=void 0===y?0:y,b=e.wrap,j=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=l.useContext(u.QO),O=C.getPrefixCls,E=C.direction,k=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),z=(0,o.A)(k,2),P=z[0],S=z[1],T=(0,d.A)(),M=l.useRef(w);l.useEffect((function(){var e=f.Ay.subscribe((function(e){var t=M.current||0;(!Array.isArray(t)&&"object"===(0,c.A)(t)||Array.isArray(t)&&("object"===(0,c.A)(t[0])||"object"===(0,c.A)(t[1])))&&S(e)}));return function(){return f.Ay.unsubscribe(e)}}),[]);var N=O("row",s),L=function(){var e=[void 0,void 0];return(Array.isArray(w)?w:[w,void 0]).forEach((function(t,n){if("object"===(0,c.A)(t))for(var r=0;r<f.ye.length;r++){var a=f.ye[r];if(P[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t})),e}(),R=i()(N,(n={},(0,a.A)(n,"".concat(N,"-no-wrap"),!1===b),(0,a.A)(n,"".concat(N,"-").concat(p),p),(0,a.A)(n,"".concat(N,"-").concat(v),v),(0,a.A)(n,"".concat(N,"-rtl"),"rtl"===E),n),A),B={},D=null!=L[0]&&L[0]>0?L[0]/-2:void 0,H=null!=L[1]&&L[1]>0?L[1]/-2:void 0;if(D&&(B.marginLeft=D,B.marginRight=D),T){var I=(0,o.A)(L,2);B.rowGap=I[1]}else H&&(B.marginTop=H,B.marginBottom=H);var W=(0,o.A)(L,2),V=W[0],F=W[1],G=l.useMemo((function(){return{gutter:[V,F],wrap:b,supportFlexGap:T}}),[V,F,b,T]);return l.createElement(h.A.Provider,{value:G},l.createElement("div",(0,r.A)({},j,{className:R,style:(0,r.A)((0,r.A)({},B),g),ref:t}),x))}))},87094:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(78786).A}}]);