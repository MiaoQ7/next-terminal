"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[9520],{16018:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(93766),s=n(21215),c=n.n(s);class o{constructor(e){this.group="",this.getById=async e=>{let t=await a.A.get("/".concat(this.group,"/").concat(e));if(1===t.code)return t.data},this.getPaging=async e=>{let t=c().stringify(e),n=await a.A.get("/".concat(this.group,"/paging?").concat(t));return 1!==n.code?{}:n.data},this.getAll=async()=>{let e=await a.A.get("/".concat(this.group));return 1!==e.code?[]:e.data},this.create=async e=>1===(await a.A.post("/".concat(this.group),e)).code,this.updateById=async(e,t)=>1===(await a.A.put("/".concat(this.group,"/").concat(e),t)).code,this.deleteById=async e=>1===(await a.A.delete("/".concat(this.group,"/").concat(e))).code,this.group=e}}},80398:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(16018),s=n(93766);class c extends a.A{constructor(){var e;super("assets"),e=this,this.GetAll=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=await s.A.get("/".concat(e.group,"?protocol=").concat(t));return 1!==n.code?[]:n.data},this.connTest=async e=>{let t=await s.A.post("/".concat(this.group,"/").concat(e,"/tcping"));return 1!==t.code?[!1,t.message]:[t.data.active,t.data.message]},this.importAsset=async e=>{const t=new FormData;t.append("file",e);let n=await s.A.post("/".concat(this.group,"/import"),t,{"Content-Type":"multipart/form-data"});return 1!==n.code?[!1,n.message]:[!0,n.data]},this.changeOwner=async(e,t)=>1===(await s.A.post("/".concat(this.group,"/").concat(e,"/change-owner?owner=").concat(t))).code}}const o=new c},40670:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(16018),s=n(21215),c=n.n(s),o=n(93766);class r extends a.A{constructor(){super("sessions"),this.GetCommandPagingBySessionId=async(e,t)=>{let n=c().stringify(t),a=await o.A.get("/".concat(this.group,"/").concat(e,"/commands/paging?").concat(n));return 1!==a.code?{}:a.data},this.create=async(e,t)=>{let n=await o.A.post("/".concat(this.group,"?assetId=").concat(e,"&mode=").concat(t));return 1!==n.code?{}:n.data},this.connect=async e=>1===(await o.A.post("/".concat(this.group,"/").concat(e,"/connect"))).code,this.disconnect=async e=>1===(await o.A.post("/".concat(this.group,"/").concat(e,"/disconnect"))).code,this.clear=async()=>1===(await o.A.post("/".concat(this.group,"/clear"))).code,this.stats=async e=>{let t=await o.A.get("/".concat(this.group,"/").concat(e,"/stats"));return 1!==t.code?{}:t.data},this.resize=async(e,t,n)=>1===(await o.A.post("/sessions/".concat(e,"/resize?width=").concat(t,"&height=").concat(n))).code}}const i=new r},16623:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(16018),s=n(93766);class c extends a.A{constructor(){super("users"),this.resetTotp=async e=>1===(await s.A.post("/".concat(this.group,"/").concat(e,"/reset-totp"))).code,this.changePassword=async(e,t)=>{let n=new FormData;return n.set("password",t),1===(await s.A.post("/".concat(this.group,"/").concat(e,"/change-password"),n)).code},this.changeStatus=async(e,t)=>1!==(await s.A.patch("/".concat(this.group,"/").concat(e,"/status?status=").concat(t))).code}}const o=new c},75602:(e,t,n)=>{n.d(t,{K:()=>a});const a={rdp:"cyan",ssh:"blue",telnet:"geekblue",vnc:"purple",kubernetes:"volcano"}},79520:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(9950),s=n(68832),c=n(99674),o=n(52735),r=n(12916),i=n(48538),l=n(92759),d=n(56231),u=n(84703),h=n(87427),p=n(27666),g=n(27891),A=n(27646),m=n(73771),y=n(75602),w=n(40670),S=n(68201),f=n(41920),I=n(16623),v=n(80398),x=n(44414);const{Content:O}=s.A,T=a.createRef(),C=w.A,E=()=>{var e,t;const[n,s]=(0,g.j)(g.A.OFFLINE_SESSION);let[w,E]=(0,a.useState)([]),k=(0,f.useQuery)("userQuery",I.A.getAll),N=(0,f.useQuery)("assetQuery",v.A.getAll);const b=null===(e=k.data)||void 0===e?void 0:e.map((e=>({label:e.nickname,value:e.id}))),j=null===(t=N.data)||void 0===t?void 0:t.map((e=>({label:e.name,value:e.id}))),L=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u6765\u6e90IP",dataIndex:"clientIp",key:"clientIp"},{title:"\u7528\u6237\u6635\u79f0",dataIndex:"creatorName",key:"creatorName",renderFormItem:(e,t,n)=>{let{type:a,defaultRender:s,...o}=t;return"form"===a?null:(0,x.jsx)(c.A,{showSearch:!0,filterOption:(e,t)=>{var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},allowClear:!0,options:b})}},{title:"\u8d44\u4ea7\u540d\u79f0",dataIndex:"assetName",key:"assetName",renderFormItem:(e,t,n)=>{let{type:a,defaultRender:s,...o}=t;return"form"===a?null:(0,x.jsx)(c.A,{showSearch:!0,filterOption:(e,t)=>{var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},allowClear:!0,options:j})}},{title:"\u8fde\u63a5\u534f\u8bae",dataIndex:"protocol",key:"protocol",render:(e,t)=>{const n="".concat(t.username,"@").concat(t.ip,":").concat(t.port);return(0,x.jsx)(o.A,{title:n,children:(0,x.jsx)(r.A,{color:y.K[e],children:e})})},renderFormItem:(e,t,n)=>{let{type:a,defaultRender:s,...o}=t;return"form"===a?null:(0,x.jsxs)(c.A,{children:[(0,x.jsx)(c.A.Option,{value:"rdp",children:"RDP"}),(0,x.jsx)(c.A.Option,{value:"ssh",children:"SSH"}),(0,x.jsx)(c.A.Option,{value:"telnet",children:"Telnet"}),(0,x.jsx)(c.A.Option,{value:"kubernetes",children:"Kubernetes"})]})}},{title:"\u63a5\u5165\u65f6\u95f4",dataIndex:"connectedTime",key:"connectedTime",hideInSearch:!0},{title:"\u63a5\u5165\u65f6\u957f",dataIndex:"connectedTimeDur",key:"connectedTimeDur",render:(e,t)=>t.connectedTime?(0,A.aE)(new Date(t.connectedTime),new Date(t.disconnectedTime)):"-",hideInSearch:!0},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:(e,t,n,a)=>{let s="1"!==t.recording;t.commandCount;return[(0,x.jsx)(S.A,{menu:"offline-session-playback",children:(0,x.jsx)(i.A,{disabled:s,type:"link",size:"small",onClick:()=>{switch(t.mode){case"naive":case"native":case"terminal":(0,m.J)("#/term-playback?sessionId=".concat(t.id),t.id,1024,520);break;case"guacd":(0,m.J)("#/guacd-playback?sessionId=".concat(t.id),t.id,1024,768);break;default:l.Ay.info("\u6570\u636e\u5f02\u5e38")}},children:"\u56de\u653e"},"monitor")},"offline-session-playback"),(0,x.jsx)(S.A,{menu:"offline-session-del",children:(0,x.jsx)(d.A,{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u6b64\u4f1a\u8bdd\u5417?",onConfirm:async()=>{await C.deleteById(t.id),T.current.reload()},okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:(0,x.jsx)("a",{className:"danger",children:"\u5220\u9664"},"delete")},"confirm-delete")},"offline-session-del")]}}];return(0,x.jsx)(O,{className:"page-container",children:(0,x.jsx)(p.A,{columns:L,actionRef:T,columnsState:{value:n,onChange:s},request:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n="",a="";Object.keys(t).length>0&&(n=Object.keys(t)[0],a=Object.values(t)[0]);let s={pageIndex:e.current,pageSize:e.pageSize,protocol:e.protocol,clientIp:e.clientIp,userId:e.creatorName,assetId:e.assetName,field:n,order:a,status:"disconnected"},c=await C.getPaging(s);return{data:c.items,success:!0,total:c.total}},rowKey:"id",rowClassName:(e,t)=>e.reviewed?"":"unreviewed",rowSelection:{selections:[u.A.SELECTION_ALL,u.A.SELECTION_INVERT],selectedRowKeys:w,onChange:e=>{E(e)}},search:{labelWidth:"auto"},pagination:{defaultPageSize:10,showSizeChanger:!0},dateFormatter:"string",headerTitle:"\u79bb\u7ebf\u4f1a\u8bdd\u5217\u8868",toolBarRender:()=>[(0,x.jsx)(S.A,{menu:"offline-session-del",children:(0,x.jsx)(i.A,{danger:!0,type:"primary",disabled:0===w.length,onClick:()=>{h.A.confirm({title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9009\u4e2d\u7684\u884c\u5417?",content:"\u5220\u9664\u4e4b\u540e\u65e0\u6cd5\u8fdb\u884c\u6062\u590d\uff0c\u8bf7\u614e\u91cd\u8003\u8651\u3002",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:async()=>{await C.deleteById(w.join(",")),T.current.reload(),E([])}})},children:"\u5220\u9664"},"delete")}),(0,x.jsx)(S.A,{menu:"offline-session-clear",children:(0,x.jsx)(i.A,{danger:!0,type:"primary",onClick:()=>{h.A.confirm({title:"\u60a8\u786e\u5b9a\u8981\u6e05\u7a7a\u5168\u90e8\u4f1a\u8bdd\u5417?",content:"\u6e05\u7a7a\u4e4b\u540e\u65e0\u6cd5\u8fdb\u884c\u6062\u590d\uff0c\u8bf7\u614e\u91cd\u8003\u8651\u3002",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:async()=>{await C.clear(),T.current.reload(),E([])}})},children:"\u6e05\u7a7a"},"clear")})]})})}},68201:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(50070);const s=e=>{let{menu:t,children:n}=e;if(Array.isArray(t)){if((0,a.as)(...t))return n}else if((0,a.as)(t))return n}},27891:(e,t,n)=>{n.d(t,{A:()=>o,j:()=>r});var a=n(98409),s=n(9950);let c=new class{constructor(){this.ASSET="cs-asset",this.CREDENTIAL="cs-credential",this.COMMAND="cs-command",this.ACCESS_GATEWAY="cs-access-gateway",this.ONLINE_SESSION="cs-online-session",this.OFFLINE_SESSION="cs-offline-session",this.LOGIN_LOG="cs-login-log",this.STORAGE_LOG="cs-storage-log",this.JOB="cs-job",this.STORAGE="cs-storage",this.LOGIN_POLICY="cs-login-policy",this.ACCESS_SECURITY="cs-access-security",this.USER="cs-user",this.ROLE="cs-role",this.USER_GROUP="cs-user-group",this.COMMAND_FILTER="cs-command-filter",this.STRATEGY="cs-strategy"}};const o=c,r=e=>{let[t,n]=(0,s.useState)(i(e));return[t,t=>{new Promise((e=>{n(t),e(t)})).then((t=>{l(e,t)}))}]},i=e=>{switch(e){case c.ASSET:case c.CREDENTIAL:case c.COMMAND:case c.ACCESS_GATEWAY:case c.ONLINE_SESSION:case c.OFFLINE_SESSION:}return d(e,{})},l=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},d=(e,t)=>{let n=localStorage.getItem(e);if(!a.A.hasText(n))return t;try{return JSON.parse(n)}catch(s){return t}}},98409:(e,t,n)=>{n.d(t,{A:()=>a});const a=new class{constructor(){this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){let n=e.toString();for(;n.length<t;)n="0"+n;return n}}}},73771:(e,t,n)=>{n.d(t,{J:()=>a});const a=function(e,t,n,a){const s=(window.screen.availHeight-30-a)/2,c=(window.screen.availWidth-10-n)/2;window.open(e,t,"height=".concat(a,",innerHeight=").concat(a,",width=").concat(n,",innerWidth=").concat(n,",top='").concat(s,",left=").concat(c,",status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no"))}}}]);