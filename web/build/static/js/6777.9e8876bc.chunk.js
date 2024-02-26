"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[6777],{16018:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(93766),r=a(21215),s=a.n(r);class d{constructor(e){this.group="",this.getById=async e=>{let t=await n.A.get("/".concat(this.group,"/").concat(e));if(1===t.code)return t.data},this.getPaging=async e=>{let t=s().stringify(e),a=await n.A.get("/".concat(this.group,"/paging?").concat(t));return 1!==a.code?{}:a.data},this.getAll=async()=>{let e=await n.A.get("/".concat(this.group));return 1!==e.code?[]:e.data},this.create=async e=>1===(await n.A.post("/".concat(this.group),e)).code,this.updateById=async(e,t)=>1===(await n.A.put("/".concat(this.group,"/").concat(e),t)).code,this.deleteById=async e=>1===(await n.A.delete("/".concat(this.group,"/").concat(e))).code,this.group=e}}},54081:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(16018),r=a(93766);class s extends n.A{constructor(){super("strategies"),this.GetAll=async()=>{let e=await r.A.get("/".concat(this.group));return 1!==e.code?[]:e.data}}}const d=new s},76777:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(9950),r=a(68832),s=a(12916),d=a(56231),c=a(48538),i=a(87827),l=a(87427),o=a(55902),h=a(43637),u=a(54081),g=a(44414);const A=u.A,m={labelCol:{span:6},wrapperCol:{span:14}},y=e=>{let{visible:t,handleOk:a,handleCancel:r,confirmLoading:s,id:d}=e;const[c]=i.A.useForm();return(0,n.useEffect)((()=>{t&&d?(async()=>{let e=await A.getById(d);e&&c.setFieldsValue(e)})():c.setFieldsValue({upload:!1,download:!1,edit:!1,delete:!1,rename:!1,copy:!1,paste:!1})}),[t]),(0,g.jsx)(l.A,{title:d?"\u66f4\u65b0\u6388\u6743\u7b56\u7565":"\u65b0\u5efa\u6388\u6743\u7b56\u7565",visible:t,maskClosable:!1,destroyOnClose:!0,onOk:()=>{c.validateFields().then((async e=>{await a(e)&&c.resetFields()}))},onCancel:()=>{c.resetFields(),r()},confirmLoading:s,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,g.jsxs)(i.A,{form:c,...m,children:[(0,g.jsx)(i.A.Item,{name:"id",noStyle:!0,children:(0,g.jsx)(o.A,{hidden:!0})}),(0,g.jsx)(i.A.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}],children:(0,g.jsx)(o.A,{autoComplete:"off",placeholder:"\u6388\u6743\u7b56\u7565\u540d\u79f0"})}),(0,g.jsx)(i.A.Item,{label:"\u4e0a\u4f20",name:"upload",rules:[{required:!0}],valuePropName:"checked",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,g.jsx)(i.A.Item,{label:"\u4e0b\u8f7d",name:"download",rules:[{required:!0}],valuePropName:"checked",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,g.jsx)(i.A.Item,{label:"\u7f16\u8f91",name:"edit",rules:[{required:!0}],valuePropName:"checked",tooltip:"\u7f16\u8f91\u9700\u8981\u5148\u5f00\u542f\u4e0b\u8f7d",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,g.jsx)(i.A.Item,{label:"\u5220\u9664",name:"delete",rules:[{required:!0}],valuePropName:"checked",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,g.jsx)(i.A.Item,{label:"\u91cd\u547d\u540d",name:"rename",rules:[{required:!0}],valuePropName:"checked",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,g.jsx)(i.A.Item,{label:"\u590d\u5236",name:"copy",rules:[{required:!0}],valuePropName:"checked",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,g.jsx)(i.A.Item,{label:"\u7c98\u8d34",name:"paste",rules:[{required:!0}],valuePropName:"checked",children:(0,g.jsx)(h.A,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})})]})})};var x=a(27666),p=a(42074),I=a(27891),S=a(50070),C=a(68201);const k=u.A,{Content:j}=r.A,f=n.createRef(),N=e=>!0===e?(0,g.jsx)(s.A,{color:"green",children:"\u5f00\u542f"}):(0,g.jsx)(s.A,{color:"red",children:"\u5173\u95ed"}),O=()=>{let[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1),[s,i]=(0,n.useState)(void 0);const[l,o]=(0,I.j)(I.A.STRATEGY),h=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u540d\u79f0",dataIndex:"name",key:"name",sorter:!0,render:(e,t)=>{let a=(0,g.jsx)("div",{children:e});return(0,S.as)("strategy-detail")&&(a=(0,g.jsx)(p.N_,{to:"/strategy/".concat(t.id),children:e})),a}},{title:"\u4e0a\u4f20",dataIndex:"upload",key:"upload",hideInSearch:!0,render:e=>N(e)},{title:"\u4e0b\u8f7d",dataIndex:"download",key:"download",hideInSearch:!0,render:e=>N(e)},{title:"\u7f16\u8f91",dataIndex:"edit",key:"edit",hideInSearch:!0,render:e=>N(e)},{title:"\u5220\u9664",dataIndex:"delete",key:"delete",hideInSearch:!0,render:e=>N(e)},{title:"\u91cd\u547d\u540d",dataIndex:"rename",key:"rename",hideInSearch:!0,render:e=>N(e)},{title:"\u590d\u5236",dataIndex:"copy",key:"copy",hideInSearch:!0,render:e=>N(e)},{title:"\u7c98\u8d34",dataIndex:"paste",key:"paste",hideInSearch:!0,render:e=>N(e)},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created",key:"created",hideInSearch:!0},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:(e,a,n,r)=>[(0,g.jsx)(C.A,{menu:"strategy-detail",children:(0,g.jsx)(p.N_,{to:"/strategy/".concat(a.id),children:"\u8be6\u60c5"},"get")},"strategy-get"),(0,g.jsx)(C.A,{menu:"strategy-edit",children:(0,g.jsx)("a",{onClick:()=>{t(!0),i(a.id)},children:"\u7f16\u8f91"},"edit")},"strategy-edit"),(0,g.jsx)(C.A,{menu:"strategy-del",children:(0,g.jsx)(d.A,{title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664\u6b64\u884c\u5417?",onConfirm:async()=>{await k.deleteById(a.id),f.current.reload()},okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:(0,g.jsx)("a",{className:"danger",children:"\u5220\u9664"},"delete")},"confirm-delete")},"strategy-del")]}];return(0,g.jsx)("div",{children:(0,g.jsxs)(j,{className:"page-container",children:[(0,g.jsx)(x.A,{columns:h,actionRef:f,columnsState:{value:l,onChange:o},request:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a="",n="";Object.keys(t).length>0&&(a=Object.keys(t)[0],n=Object.values(t)[0]);let r={pageIndex:e.current,pageSize:e.pageSize,name:e.name,field:a,order:n},s=await k.getPaging(r);return{data:s.items,success:!0,total:s.total}},rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:10},dateFormatter:"string",headerTitle:"\u6388\u6743\u7b56\u7565",toolBarRender:()=>[(0,g.jsx)(C.A,{menu:"strategy-add",children:(0,g.jsx)(c.A,{type:"primary",onClick:()=>{t(!0)},children:"\u65b0\u5efa"},"button")})]}),(0,g.jsx)(y,{id:s,visible:e,confirmLoading:a,handleCancel:()=>{t(!1),i(void 0)},handleOk:async e=>{r(!0);try{let a;a=e.id?await k.updateById(e.id,e):await k.create(e),a&&t(!1),f.current.reload()}finally{r(!1)}}})]})})}},68201:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(50070);const r=e=>{let{menu:t,children:a}=e;if(Array.isArray(t)){if((0,n.as)(...t))return a}else if((0,n.as)(t))return a}},27891:(e,t,a)=>{a.d(t,{A:()=>d,j:()=>c});var n=a(98409),r=a(9950);let s=new class{constructor(){this.ASSET="cs-asset",this.CREDENTIAL="cs-credential",this.COMMAND="cs-command",this.ACCESS_GATEWAY="cs-access-gateway",this.ONLINE_SESSION="cs-online-session",this.OFFLINE_SESSION="cs-offline-session",this.LOGIN_LOG="cs-login-log",this.STORAGE_LOG="cs-storage-log",this.JOB="cs-job",this.STORAGE="cs-storage",this.LOGIN_POLICY="cs-login-policy",this.ACCESS_SECURITY="cs-access-security",this.USER="cs-user",this.ROLE="cs-role",this.USER_GROUP="cs-user-group",this.COMMAND_FILTER="cs-command-filter",this.STRATEGY="cs-strategy"}};const d=s,c=e=>{let[t,a]=(0,r.useState)(i(e));return[t,t=>{new Promise((e=>{a(t),e(t)})).then((t=>{l(e,t)}))}]},i=e=>{switch(e){case s.ASSET:case s.CREDENTIAL:case s.COMMAND:case s.ACCESS_GATEWAY:case s.ONLINE_SESSION:case s.OFFLINE_SESSION:}return o(e,{})},l=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},o=(e,t)=>{let a=localStorage.getItem(e);if(!n.A.hasText(a))return t;try{return JSON.parse(a)}catch(r){return t}}},98409:(e,t,a)=>{a.d(t,{A:()=>n});const n=new class{constructor(){this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){let a=e.toString();for(;a.length<t;)a="0"+a;return a}}}}}]);