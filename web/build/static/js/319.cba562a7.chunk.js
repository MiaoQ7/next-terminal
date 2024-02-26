"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[319],{51610:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var o=n(9950),a=n(42074),i=n(40670),r=n(98409),s=n(82548),c=n.n(s),l=n(39608),d=n(27646),h=n(21215),u=n.n(h),w=n(92759),g=n(87427),f=n(69216),p=n(51955),A=n(48538),x=n(57811),m=n(99019),y=n(27379),b=n(89379);const k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm578 576h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z"}}]},name:"expand",theme:"outlined"};var v=n(38913),j=function(e,t){return o.createElement(v.A,(0,b.A)((0,b.A)({},e),{},{ref:t,icon:k}))};j.displayName="ExpandOutlined";const C=o.forwardRef(j);var E=n(67376);const S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M120.1 770.6L443 823.2V543.8H120.1v226.8zm63.4-163.5h196.2v141.6l-196.2-31.9V607.1zm340.3 226.5l382 62.2v-352h-382v289.8zm63.4-226.5h255.3v214.4l-255.3-41.6V607.1zm-63.4-415.7v288.8h382V128.1l-382 63.3zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z"}}]},name:"windows",theme:"outlined"};var z=function(e,t){return o.createElement(v.A,(0,b.A)((0,b.A)({},e),{},{ref:t,icon:S}))};z.displayName="WindowsOutlined";const T=o.forwardRef(z);var H=n(78777);const B="function"===typeof atob,V="function"===typeof Buffer,I="function"===typeof TextDecoder?new TextDecoder:void 0,W=("function"===typeof TextEncoder&&new TextEncoder,Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")),M=(e=>{let t={};return e.forEach(((e,n)=>t[e]=n)),t})(W),F=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,L=String.fromCharCode.bind(String),D="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return new Uint8Array(Array.prototype.slice.call(e,0).map(t))},O=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),K=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,R=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return L(55296+(t>>>10))+L(56320+(1023&t));case 3:return L((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return L((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},N=e=>e.replace(K,R),U=e=>{if(e=e.replace(/\s+/g,""),!F.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,n,o,a="";for(let i=0;i<e.length;)t=M[e.charAt(i++)]<<18|M[e.charAt(i++)]<<12|(n=M[e.charAt(i++)])<<6|(o=M[e.charAt(i++)]),a+=64===n?L(t>>16&255):64===o?L(t>>16&255,t>>8&255):L(t>>16&255,t>>8&255,255&t);return a},Z=B?e=>atob(O(e)):V?e=>Buffer.from(e,"base64").toString("binary"):U,X=V?e=>D(Buffer.from(e,"base64")):e=>D(Z(e),(e=>e.charCodeAt(0))),_=V?e=>Buffer.from(e,"base64").toString("utf8"):I?e=>I.decode(X(e)):e=>N(Z(e)),G=e=>O(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),q=e=>_(G(e)),J=q;var P=n(31628),Q=n.n(P),Y=n(60715),$=n(87827),ee=n(55902),te=n(44414);const ne=e=>{let{visible:t,clipboardText:n,handleOk:a,handleCancel:i}=e;const[r]=$.A.useForm();let[s,c]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{r.setFieldsValue({clipboard:n})}),[t]),(0,te.jsx)("div",{children:(0,te.jsx)(g.A,{title:"\u526a\u8d34\u677f",maskClosable:!1,visible:t,onOk:()=>{r.validateFields().then((e=>{c(!0);try{a(e.clipboard)}finally{c(!1)}})).catch((e=>{}))},confirmLoading:s,onCancel:i,children:(0,te.jsx)($.A,{form:r,children:(0,te.jsx)($.A.Item,{name:"clipboard",children:(0,te.jsx)(ee.A.TextArea,{rows:10})})})})})};var oe=n(18202);let ae=!1;const ie=()=>{let[e]=(0,a.ok)(),t=e.get("assetId"),n=e.get("assetName"),s=e.get("protocol"),h=e.get("width"),b=e.get("height");h&&b?ae=!0:(h=window.innerWidth,b=window.innerHeight);let[k,v]=(0,o.useState)({width:h,height:b}),[j,S]=(0,o.useState)({}),[z,B]=(0,o.useState)({}),[V,I]=(0,o.useState)(""),[W,M]=(0,o.useState)(!1),[F,L]=(0,o.useState)(!1),[D,O]=(0,o.useState)(!1);(0,o.useEffect)((()=>{document.title=n,K()}),[t,n]);const K=async()=>{let e=await i.A.create(t,"guacd");r.A.hasText(e.id)&&(B(e),R(e.id,s,h,b))},R=(e,t,n,o)=>{let a=new(c().WebSocketTunnel)("".concat(l.IV,"/sessions/").concat(e,"/tunnel")),i=new(c().Client)(a);i.onclipboard=_,i.onstatechange=t=>{q(t,e)},i.onerror=ee,a.onerror=ee;const r=document.getElementById("display"),s=i.getDisplay().getElement();r.appendChild(s);let h=96;"telnet"===t&&(h*=2);let w={width:n,height:o,dpi:h,"X-Auth-Token":(0,d.gf)()},g=u().stringify(w);i.connect(g);let f=i.getDisplay();f.onresize=function(e,t){f.scale(Math.min(window.innerHeight/f.getHeight(),window.innerWidth/f.getHeight()))};const p=new(c().InputSink);r.appendChild(p.getElement()),p.focus();const A=new(c().Keyboard)(p.getElement());A.onkeydown=e=>{if(console.log("aaa"),i.sendKeyEvent(1,e),65288===e)return!1},A.onkeyup=e=>{i.sendKeyEvent(0,e)};const x=(0,oe.s)((()=>{p.focus()})),m=new(c().Mouse)(s);m.onmousedown=m.onmouseup=function(e){x(),i.sendMouseState(e)},m.onmousemove=function(e){x(),i.getDisplay().showCursor(!1),e.x=e.x/f.getScale(),e.y=e.y/f.getScale(),i.sendMouseState(e)};const y=new(c().Mouse.Touchpad)(s);y.onmousedown=y.onmousemove=y.onmouseup=function(e){i.sendMouseState(e)},S({client:i,sink:p})};(0,o.useEffect)((()=>{let e=(0,oe.s)((()=>{N()}));return window.addEventListener("resize",e),window.addEventListener("beforeunload",U),window.addEventListener("focus",X),()=>{window.removeEventListener("resize",e),window.removeEventListener("beforeunload",U),window.removeEventListener("focus",X)}}),[j]);const N=()=>{if(j.client&&!ae){const e=j.client.getDisplay();let t=window.innerWidth,n=window.innerHeight;v({width:t,height:n});let o=Math.min(n/e.getHeight(),t/e.getHeight());e.scale(o),j.client.sendSize(t,n)}},U=e=>{const t="\u8981\u79bb\u5f00\u7f51\u7ad9\u5417\uff1f";return(e||window.event).returnValue=t,t},Z=()=>{console.log(j.sink),j.sink&&j.sink.focus()},X=e=>{if(navigator.clipboard)try{navigator.clipboard.readText().then((e=>{G({data:e,type:"text/plain"})}))}catch(e){console.error("\u590d\u5236\u526a\u8d34\u677f\u5931\u8d25",e)}},_=(e,t)=>{if("0"!==z.copy)if(/^text\//.exec(t)){let t=new(c().StringReader)(e),n="";t.ontext=function(e){n+=e},t.onend=async()=>{I(n),navigator.clipboard&&await navigator.clipboard.writeText(n)}}else{let n=new(c().BlobReader)(e,t);n.onend=()=>{I(n.getBlob())}}},G=e=>{if(!j.client)return;if("0"===z.paste)return void w.Ay.warn("\u7981\u6b62\u7c98\u8d34");const t=j.client.createClipboardStream(e.type);if("string"===typeof e.data){let n=new(c().StringWriter)(t);n.sendText(e.data),n.sendEnd()}else{let n=new(c().BlobWriter)(t);n.oncomplete=function(){n.sendEnd()},n.sendBlob(e.data)}e.data&&e.data.length},q=(e,t)=>{const n="message";switch(e){case 0:w.Ay.destroy(n),w.Ay.loading({content:"\u6b63\u5728\u521d\u59cb\u5316\u4e2d...",duration:0,key:n});break;case 1:w.Ay.destroy(n),w.Ay.loading({content:"\u6b63\u5728\u52aa\u529b\u8fde\u63a5\u4e2d...",duration:0,key:n});break;case 2:w.Ay.destroy(n),w.Ay.loading({content:"\u6b63\u5728\u7b49\u5f85\u670d\u52a1\u5668\u54cd\u5e94...",duration:0,key:n});break;case 3:g.A.destroyAll(),w.Ay.destroy(n),w.Ay.success({content:"\u8fde\u63a5\u6210\u529f",duration:3,key:n}),i.A.connect(t);break;case 4:default:break;case 5:w.Ay.info({content:"\u8fde\u63a5\u5df2\u5173\u95ed",duration:3,key:n})}},P=e=>{if(j.client){for(let t=0;t<e.length;t++)j.client.sendKeyEvent(1,e[t]);for(let t=0;t<e.length;t++)j.client.sendKeyEvent(0,e[t]);w.Ay.success("\u53d1\u9001\u7ec4\u5408\u952e\u6210\u529f")}},$=e=>{w.Ay.destroy(),g.A.confirm({title:"\u63d0\u793a",icon:(0,te.jsx)(y.A,{}),content:e,centered:!0,okText:"\u91cd\u65b0\u8fde\u63a5",cancelText:"\u5173\u95ed\u9875\u9762",onOk(){window.location.reload()},onCancel(){window.close()}})},ee=e=>{switch(e.code){case 256:$("\u672a\u652f\u6301\u7684\u8bbf\u95ee");break;case 512:$("\u8fdc\u7a0b\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5\u76ee\u6807\u8bbe\u5907\u80fd\u5426\u6b63\u5e38\u8bbf\u95ee\u3002");break;case 513:$("\u670d\u52a1\u5668\u5fd9\u788c");break;case 514:$("\u670d\u52a1\u5668\u8fde\u63a5\u8d85\u65f6");break;case 515:$("\u8fdc\u7a0b\u670d\u52a1\u5f02\u5e38");break;case 516:$("\u8d44\u6e90\u672a\u627e\u5230");break;case 517:$("\u8d44\u6e90\u51b2\u7a81");break;case 518:$("\u8d44\u6e90\u5df2\u5173\u95ed");break;case 519:$("\u8fdc\u7a0b\u670d\u52a1\u672a\u627e\u5230");break;case 520:$("\u8fdc\u7a0b\u670d\u52a1\u4e0d\u53ef\u7528");break;case 521:$("\u4f1a\u8bdd\u51b2\u7a81");break;case 522:$("\u4f1a\u8bdd\u8fde\u63a5\u8d85\u65f6");break;case 523:$("\u4f1a\u8bdd\u5df2\u5173\u95ed");break;case 768:$("\u7f51\u7edc\u4e0d\u53ef\u8fbe");break;case 769:$("\u670d\u52a1\u5668\u5bc6\u7801\u9a8c\u8bc1\u5931\u8d25");break;case 771:$("\u5ba2\u6237\u7aef\u88ab\u7981\u6b62");break;case 776:$("\u5ba2\u6237\u7aef\u8fde\u63a5\u8d85\u65f6");break;case 781:$("\u5ba2\u6237\u7aef\u5f02\u5e38");break;case 783:$("\u9519\u8bef\u7684\u8bf7\u6c42\u7c7b\u578b");break;case 800:$("\u4f1a\u8bdd\u4e0d\u5b58\u5728");break;case 801:$("\u521b\u5efa\u96a7\u9053\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5Guacd\u670d\u52a1\u662f\u5426\u6b63\u5e38\u3002");break;case 802:$("\u7ba1\u7406\u5458\u5f3a\u5236\u5173\u95ed\u4e86\u6b64\u4f1a\u8bdd");break;default:e.message?$(J(e.message)):$("\u672a\u77e5\u9519\u8bef\u3002")}},ie=(0,te.jsxs)(f.A,{children:[(0,te.jsx)(f.A.Item,{onClick:()=>P(["65507","65513","65535"]),children:"Ctrl+Alt+Delete"},"ctrl+alt+delete"),(0,te.jsx)(f.A.Item,{onClick:()=>P(["65507","65513","65288"]),children:"Ctrl+Alt+Backspace"},"ctrl+alt+backspace"),(0,te.jsx)(f.A.Item,{onClick:()=>P(["65515","100"]),children:"Windows+D"},"windows+d"),(0,te.jsx)(f.A.Item,{onClick:()=>P(["65515","101"]),children:"Windows+E"},"windows+e"),(0,te.jsx)(f.A.Item,{onClick:()=>P(["65515","114"]),children:"Windows+R"},"windows+r"),(0,te.jsx)(f.A.Item,{onClick:()=>P(["65515","120"]),children:"Windows+X"},"windows+x"),(0,te.jsx)(f.A.Item,{onClick:()=>P(["65515"]),children:"Windows"},"windows")]});return(0,te.jsxs)("div",{children:[(0,te.jsx)("div",{className:"container",style:{width:k.width,height:k.height,margin:"0 auto",backgroundColor:"#1b1b1b"},children:(0,te.jsx)("div",{id:"display"})}),(0,te.jsx)(Q(),{children:(0,te.jsx)(p.A,{style:{position:"absolute",top:50,right:50},children:(0,te.jsx)(A.A,{icon:(0,te.jsx)(C,{}),onClick:()=>{W?((0,d.mu)(),M(!1)):((0,d.tl)(document.documentElement),M(!0)),Z()}})})}),"1"===z.copy||"1"===z.paste?(0,te.jsx)(Q(),{children:(0,te.jsx)(p.A,{style:{position:"absolute",top:50,right:100},children:(0,te.jsx)(A.A,{icon:(0,te.jsx)(E.A,{}),onClick:()=>{L(!0)}})})}):void 0,"vnc"===s&&(0,te.jsx)(Q(),{children:(0,te.jsx)(p.A,{style:{position:"absolute",top:100,right:100},children:(0,te.jsx)(x.A,{overlay:ie,trigger:["click"],placement:"bottomLeft",children:(0,te.jsx)(A.A,{icon:(0,te.jsx)(T,{})})})})}),"rdp"===s&&"1"===z.fileSystem&&(0,te.jsx)(Q(),{children:(0,te.jsx)(p.A,{style:{position:"absolute",top:100,right:50},children:(0,te.jsx)(A.A,{icon:(0,te.jsx)(H.A,{}),onClick:()=>{O(!0)}})})}),"rdp"===s&&(0,te.jsx)(Q(),{children:(0,te.jsx)(p.A,{style:{position:"absolute",top:100,right:100},children:(0,te.jsx)(x.A,{overlay:ie,trigger:["click"],placement:"bottomLeft",children:(0,te.jsx)(A.A,{icon:(0,te.jsx)(T,{})})})})}),(0,te.jsx)(m.A,{title:"\u6587\u4ef6\u7ba1\u7406",placement:"right",width:.8*window.innerWidth,closable:!0,onClose:()=>{Z(),O(!1)},visible:D,children:(0,te.jsx)(Y.A,{storageId:z.id,storageType:"sessions",upload:"1"===z.upload,download:"1"===z.download,delete:"1"===z.delete,rename:"1"===z.rename,edit:"1"===z.edit,minHeight:window.innerHeight-103})}),(0,te.jsx)(ne,{visible:F,clipboardText:V,handleOk:e=>{G({data:e,type:"text/plain"}),I(e),L(!1),Z()},handleCancel:()=>{L(!1),Z()}})]})}}}]);